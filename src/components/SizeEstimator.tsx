"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { site, telLink, whatsappLink } from "@/lib/site";

const classes = ["NP2", "NP3", "NP4"] as const;
type PipeClass = (typeof classes)[number];

type Mode = "pipes" | "distance";

// Base size table from RCC Hume Pipes product data
const baseSizes = products[0].sizes;

// Weight scaling factors per class (approximate — for on-page estimator).
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

  const spec = useMemo(() => {
    const base = baseSizes.find((s) => s.diameterMM === diameterMM) ?? baseSizes[0];
    const f = classFactor[cls];
    // In distance mode, derive how many pipes are needed to cover the run.
    const pipes =
      mode === "pipes" ? qty : Math.max(1, Math.ceil(distanceM / base.lengthM));
    return {
      diameterMM,
      lengthM: base.lengthM,
      pipes,
      lengthTotalM: Math.round(pipes * base.lengthM),
      weightTotalT: (base.weightKg * f.weight * pipes) / 1000,
    };
  }, [cls, diameterMM, mode, qty, distanceM]);

  const waMsg = [
    `*🧾 Hume Pipe Quotation Request*`,
    ``,
    `Hello SVR Hume Pipes 👋`,
    `Please send me a quotation for the below requirement:`,
    ``,
    `*Pipe Class:*  ${cls}  (IS 458:2003)`,
    `*Diameter:*  ${spec.diameterMM} mm`,
    ...(mode === "distance"
      ? [
          `*Required Distance:*  ${distanceM} running m`,
          `*Pipes Needed:*  ~${spec.pipes} nos  (@ ${spec.lengthM} m each)`,
        ]
      : [
          `*Quantity:*  ${spec.pipes} nos`,
          `*Total Length:*  ~${spec.lengthTotalM} running m`,
        ]),
    ``,
    `Kindly share your *best price* and *dispatch time*. 🙏`,
    ``,
    `_Sent from svrhumepipes.com_`,
  ].join("\n");

  return (
    <div className="relative bg-white text-steel-900 shadow-classic border border-brand-500/30">
      {/* Accent corner */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-brand-500 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-brand-500 pointer-events-none" />

      {/* Header */}
      <div className="bg-steel-900 text-white px-6 py-4 flex items-center justify-between">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-brand-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            Instant Pipe Estimator
          </div>
          <div className="mt-1 font-display text-xl font-bold leading-tight">
            Get pricing in seconds
          </div>
        </div>
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold text-xl shadow-lg">
          ⚡
        </div>
      </div>

      <div className="p-5 lg:p-6 space-y-3.5 lg:space-y-4">
        {/* Class */}
        <div>
          <label className="text-[10px] font-bold uppercase tracking-widest text-steel-700 mb-2 block">
            Pipe Class · IS 458:2003
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {classes.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCls(c)}
                className={
                  "py-2 text-sm font-bold uppercase tracking-widest border transition " +
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
          <label className="text-[10px] font-bold uppercase tracking-widest text-steel-700 mb-2 block">
            Diameter (mm)
          </label>
          <select
            value={diameterMM}
            onChange={(e) => setDiameterMM(Number(e.target.value))}
            className="w-full px-3 py-2.5 border border-steel-300 bg-white text-sm font-semibold text-steel-900 focus:border-brand-500 outline-none"
          >
            {diameters.map((d) => (
              <option key={d} value={d}>
                {d} mm
              </option>
            ))}
          </select>
        </div>

        {/* Estimate by: pipes or distance */}
        <div>
          <label className="text-[10px] font-bold uppercase tracking-widest text-steel-700 mb-2 block">
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
                  "py-2 text-xs font-bold uppercase tracking-widest border transition " +
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
              className="w-full px-3 py-2.5 border border-steel-300 bg-white text-sm font-semibold text-steel-900 focus:border-brand-500 outline-none"
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
              className="w-full px-3 py-2.5 border border-steel-300 bg-white text-sm font-semibold text-steel-900 focus:border-brand-500 outline-none"
              placeholder="Total distance in meters"
            />
          )}
        </div>

        {/* Live spec preview */}
        <div className="bg-ivory-100 border border-ivory-300 p-3.5 grid grid-cols-2 gap-3 text-center">
          <Metric label="Pipes reqd" value={`${spec.pipes} nos`} />
          <Metric label="Total length" value={`${spec.lengthTotalM} m`} highlight />
        </div>

        <div className="text-[11px] text-steel-500 leading-relaxed -mt-1">
          {mode === "distance"
            ? `${distanceM} m ÷ ${spec.lengthM} m per pipe = ${spec.pipes} pipes. `
            : `Standard length ${spec.lengthM} m per pipe. `}
          Approximate — final weight varies with wall reinforcement.
        </div>

        {/* CTA */}
        <a
          href={whatsappLink(waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-brand-600 hover:bg-brand-700 text-white font-bold uppercase tracking-widest text-sm py-3 shadow-gold transition"
        >
          💬 Get Best Price on WhatsApp →
        </a>
        <div className="flex items-center gap-2 text-[11px] text-steel-500 justify-center">
          <span className="h-px flex-1 bg-ivory-300" />
          <span>or call for immediate quote</span>
          <span className="h-px flex-1 bg-ivory-300" />
        </div>
        <a
          href={telLink}
          className="block text-center border border-steel-300 hover:border-brand-500 hover:text-brand-700 text-steel-900 font-semibold py-2.5 transition"
        >
          ☎ {site.phoneDisplay} · Open 24 hrs
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
      <div className="text-[10px] uppercase tracking-widest text-steel-500">{label}</div>
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
