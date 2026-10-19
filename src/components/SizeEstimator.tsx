"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { site, telLink, whatsappLink } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./Icons";
import { leadSource } from "@/lib/attribution";

const classes = ["NP2", "NP3", "NP4"] as const;
type PipeClass = (typeof classes)[number];

type Mode = "pipes" | "distance";

// Base size table from RCC Hume Pipes product data
const baseSizes = products[0].sizes;

// Weight scaling factors per class (approximate, for on-page estimator).
// Real quotation from sales, but this gives an accurate ballpark.
const classFactor: Record<PipeClass, { weight: number }> = {
  NP2: { weight: 0.7 },
  NP3: { weight: 1.0 },
  NP4: { weight: 1.3 },
};

const diameters = Array.from(new Set(baseSizes.map((s) => s.diameterMM))).sort((a, b) => a - b);

export function SizeEstimator() {
  const [cls, setCls] = useState<PipeClass>("NP3");
  const [diameterMM, setDiameterMM] = useState(900);
  const [mode, setMode] = useState<Mode>("pipes");
  const [qty, setQty] = useState(50);
  const [distanceM, setDistanceM] = useState(500);
  const [name, setName] = useState("");
  const [site_, setSite] = useState("");
  const [phone, setPhone] = useState("");
  const phoneOk = phone.replace(/\D/g, "").length >= 10;

  const spec = useMemo(() => {
    const base = baseSizes.find((s) => s.diameterMM === diameterMM) ?? baseSizes[0];
    const f = classFactor[cls];
    // In distance mode, derive how many pipes are needed to cover the run.
    const pipes =
      mode === "pipes" ? qty : Math.max(1, Math.ceil(distanceM / base.lengthM));
    return {
      diameterMM,
      wallMM: base.wallThicknessMM,
      lengthM: base.lengthM,
      pipes,
      lengthTotalM: Math.round(pipes * base.lengthM),
      weightTotalT: (base.weightKg * f.weight * pipes) / 1000,
    };
  }, [cls, diameterMM, mode, qty, distanceM]);

  // Plain text only: WhatsApp Desktop/Web turn emoji in wa.me links into "?" boxes.
  // The phone field is optional: WhatsApp already shows the sender's number, but saving it
  // here also captures visitors who open WhatsApp and never press send.
  const waMsg = [
    `*Hume Pipe Quotation Request*`,
    ``,
    ...(name.trim() ? [`Name: ${name.trim()}`] : []),
    ...(site_.trim() ? [`Delivery site: ${site_.trim()}`] : []),
    ...(phoneOk ? [`Call back on: ${phone.trim()}`] : []),
    ...(name.trim() || site_.trim() || phoneOk ? [``] : []),
    `Pipe class: ${cls} (IS 458:2003)`,
    `Diameter: ${spec.diameterMM} mm`,
    ...(mode === "distance"
      ? [`Distance: ${distanceM} m`, `Pipes needed: approx. ${spec.pipes} nos (${spec.lengthM} m each)`]
      : [`Quantity: ${spec.pipes} nos`, `Total length: approx. ${spec.lengthTotalM} m`]),
    ``,
    `Please share your best price and dispatch time.`,
    ``,
    `_Sent from svrhumepipes.com_`,
  ].join("\n");

  return (
    <div className="border-beam relative rounded-2xl bg-white text-steel-900 shadow-classic ring-1 ring-white/10">

      {/* Header */}
      <div className="rounded-t-2xl bg-steel-900 text-white px-6 py-4 border-b border-white/10">
        <div>
          <div className="text-xs font-semibold text-brand-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            Instant Pipe Estimator
          </div>
          <div className="mt-1 font-display text-xl font-bold leading-tight">
            Get pricing in seconds
          </div>
        </div>
      </div>

      <div className="p-5 lg:p-6 space-y-3.5 lg:space-y-4">
        {/* Class */}
        <div>
          <label className="text-xs font-semibold text-steel-700 mb-2 block">
            Pipe Class · IS 458:2003
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {classes.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCls(c)}
                className={
                  "py-2 rounded-lg text-sm font-semibold border transition " +
                  (cls === c
                    ? "bg-brand-600 border-brand-600 text-white shadow-md"
                    : "border-steel-300 hover:border-brand-500 hover:text-brand-700 text-steel-700 bg-white")
                }
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Diameter */}
        <div>
          <label className="text-xs font-semibold text-steel-700 mb-2 block">
            Diameter (mm)
          </label>
          <select
            value={diameterMM}
            onChange={(e) => setDiameterMM(Number(e.target.value))}
            className="w-full rounded-lg px-3 py-2.5 border border-steel-300 bg-white text-base sm:text-sm font-semibold text-steel-900 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none"
          >
            {diameters.map((d) => (
              <option key={d} value={d}>
                {d} mm
              </option>
            ))}
          </select>
        </div>

        <SizeToScale diameterMM={spec.diameterMM} wallMM={spec.wallMM} />

        {/* Estimate by: pipes or distance */}
        <div>
          <label className="text-xs font-semibold text-steel-700 mb-2 block">
            Estimate by
          </label>
          <div className="grid grid-cols-2 gap-1.5 mb-2.5">
            {([
              { key: "pipes", label: "No. of pipes" },
              { key: "distance", label: "Distance (m)" },
            ] as const).map((m) => (
              <button
                key={m.key}
                type="button"
                onClick={() => setMode(m.key)}
                className={
                  "py-2 rounded-lg text-sm font-semibold border transition " +
                  (mode === m.key
                    ? "bg-brand-600 border-brand-600 text-white shadow-md"
                    : "border-steel-300 hover:border-brand-500 hover:text-brand-700 text-steel-700 bg-white")
                }
              >
                {m.label}
              </button>
            ))}
          </div>

          {mode === "pipes" ? (
            <input
              type="number"
              min={1}
              max={9999}
              value={qty}
              onChange={(e) => setQty(Math.max(1, Math.min(9999, Number(e.target.value) || 1)))}
              className="w-full rounded-lg px-3 py-2.5 border border-steel-300 bg-white text-base sm:text-sm font-semibold text-steel-900 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none"
              placeholder="Number of pipes"
            />
          ) : (
            <input
              type="number"
              min={1}
              max={999999}
              value={distanceM}
              onChange={(e) =>
                setDistanceM(Math.max(1, Math.min(999999, Number(e.target.value) || 1)))
              }
              className="w-full rounded-lg px-3 py-2.5 border border-steel-300 bg-white text-base sm:text-sm font-semibold text-steel-900 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none"
              placeholder="Total distance in meters"
            />
          )}
        </div>

        {/* Live spec preview */}
        <div className="rounded-xl bg-ivory-100 border border-ivory-300 p-3.5 grid grid-cols-2 gap-3 text-center">
          <Metric label="Pipes reqd" value={`${spec.pipes} nos`} />
          <Metric label="Total length" value={`${spec.lengthTotalM} m`} highlight />
        </div>

        <div className="text-[11px] text-steel-500 leading-relaxed -mt-1">
          {mode === "distance"
            ? `${distanceM} m ÷ ${spec.lengthM} m per pipe = ${spec.pipes} pipes. `
            : `Standard length ${spec.lengthM} m per pipe. `}
          Approximate. Final weight varies with wall reinforcement.
        </div>

        {/* Optional, makes the WhatsApp quote request easier to price (delivery distance) */}
        <div className="grid grid-cols-2 gap-1.5">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={60}
            autoComplete="name"
            placeholder="Your name"
            aria-label="Your name (optional)"
            className="w-full rounded-lg px-3 py-2.5 border border-steel-300 bg-white text-base sm:text-sm text-steel-900 placeholder-steel-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none"
          />
          <input
            value={site_}
            onChange={(e) => setSite(e.target.value)}
            maxLength={80}
            placeholder="Delivery site / city"
            aria-label="Delivery site or city (optional)"
            className="w-full rounded-lg px-3 py-2.5 border border-steel-300 bg-white text-base sm:text-sm text-steel-900 placeholder-steel-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none"
          />
        </div>

        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          maxLength={16}
          placeholder="Phone for a call back (optional)"
          aria-label="Phone number for a call back (optional)"
          className="w-full rounded-lg px-3 py-2.5 border border-steel-300 bg-white text-base sm:text-sm text-steel-900 placeholder-steel-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none"
        />

        {/* CTA */}
        <a
          href={whatsappLink(waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (!phoneOk) return;
            // keepalive: the request survives the tab switching to WhatsApp
            fetch("/api/contact", {
              method: "POST",
              keepalive: true,
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: name.trim() || "Website visitor",
                phone: phone.trim(),
                product: `${cls} ${spec.diameterMM} mm (estimator)`,
                message: waMsg,
                attribution: leadSource(),
              }),
            }).catch(() => {});
            window.gtag?.("event", "generate_lead", { form: "estimator", page_path: location.pathname });
          }}
          className="btn-shimmer flex items-center justify-center gap-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm py-3 shadow-gold transition"
        >
          <WhatsAppIcon className="h-5 w-5" /> Get best price on WhatsApp
        </a>
        <div className="flex items-center gap-2 text-[11px] text-steel-500 justify-center">
          <span className="h-px flex-1 bg-ivory-300" />
          <span>or call for immediate quote</span>
          <span className="h-px flex-1 bg-ivory-300" />
        </div>
        <a
          href={telLink}
          className="flex items-center justify-center gap-2 rounded-lg border border-steel-300 hover:border-brand-500 hover:text-brand-700 text-steel-900 font-semibold py-2.5 transition"
        >
          <PhoneIcon /> {site.phoneDisplay} · Open 24 hrs
        </a>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <div className="text-xs text-steel-500">{label}</div>
      <div
        className={
          "font-display text-lg lg:text-xl font-bold mt-0.5 " +
          (highlight ? "text-brand-700" : "text-steel-900")
        }
      >
        {value}
      </div>
    </div>
  );
}

// Selected pipe drawn to scale beside a 1.7 m person, 1 unit = 1 cm.
// Circles are unit-radius and sized with transform so the change animates everywhere (Safari included).
function SizeToScale({ diameterMM, wallMM }: { diameterMM: number; wallMM: number }) {
  const ground = 236;
  const rOut = (diameterMM + 2 * wallMM) / 20;
  const rIn = diameterMM / 20;
  const cx = 66 + rOut;
  const t = (rad: number) => ({
    transform: `translate(${cx}px, ${ground - rOut}px) scale(${rad})`,
    transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
  });
  return (
    <div className="flex items-center gap-3 rounded-xl border border-ivory-300 bg-ivory-50 p-2.5">
      <svg viewBox="0 -30 340 270" className="h-28 w-40 shrink-0" aria-hidden="true">
        <line x1="0" y1={ground} x2="340" y2={ground} stroke="#d4d4d8" strokeWidth="2" />
        {/* person, 170 cm */}
        <g fill="#a1a1aa">
          <circle cx="30" cy={ground - 158} r="12" />
          <path d={`M18 ${ground - 142} h24 l4 72 h-8 l-2 70 h-7 l-1-62 h-2 l-1 62 h-7 l-2-70 h-8z`} />
        </g>
        <circle r="1" style={t(rOut)} fill="#a1a1aa" stroke="#71717a" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <circle r="1" style={t(rIn)} fill="#ffffff" stroke="#0284c7" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="min-w-0 text-xs leading-relaxed text-steel-600">
        <div className="text-sm font-semibold text-steel-900">
          {diameterMM} mm bore · {wallMM} mm wall
        </div>
        Shown to scale beside a 1.7&nbsp;m person
      </div>
    </div>
  );
}
