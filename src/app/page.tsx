import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { HeroImage } from "@/components/HeroImage";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { StatsCounter } from "@/components/StatsCounter";
import { ProductTabs } from "@/components/ProductTabs";
import { ReviewStats } from "@/components/ReviewStats";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { Certifications } from "@/components/Certifications";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { SizeEstimator } from "@/components/SizeEstimator";
import { Reveal } from "@/components/Reveal";
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { site, telLink, whatsappLink } from "@/lib/site";
import { industries, whyChooseUs, homeFaqs } from "@/data/industries";

// Bump this when the home page content is meaningfully updated.
const LAST_UPDATED = "2026-08-01";
const LAST_UPDATED_LABEL = "August 2026";

export const metadata: Metadata = buildMetadata({
  title: "Hume Pipes in Hyderabad – RCC Pipe Manufacturer",
  description:
    "Top RCC hume pipe manufacturer in Hyderabad. ISO-certified NP2, NP3 & NP4 pipes (150–2200 mm) to IS 458:2003, with 24×7 dispatch across Telangana.",
  path: "/",
  keywords: [
    "hume pipes hyderabad",
    "hume pipes in hyderabad",
    "rcc pipes hyderabad",
    "top hume pipes manufacturer telangana",
    "best hume pipes manufacturer hyderabad",
    "np3 hume pipes hyderabad",
    "concrete pipes hyderabad",
    "hume pipes lalgadi malakpet",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/",
            name: "Hume Pipes in Hyderabad – RCC Pipe Manufacturer | SVR Hume Pipes",
            description:
              "Top RCC hume pipe manufacturer in Hyderabad. ISO-certified NP2, NP3 & NP4 pipes (150–2200 mm) to IS 458:2003, with 24×7 dispatch across Telangana.",
            dateModified: LAST_UPDATED,
          }),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          faqSchema(homeFaqs),
          serviceSchema(
            "RCC Hume Pipes Manufacturing & Supply",
            "Manufacture and supply of ISO-certified RCC hume pipes across Telangana, Andhra Pradesh and Karnataka."
          ),
        ]}
      />

      {/* ══════════════════════════════════════════════════════════════
          HERO — On-brand pipe cross-section pattern + Instant Estimator
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative isolate overflow-hidden bg-steel-950 text-white lg:min-h-[92vh] flex items-center">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-steel-950 via-steel-900 to-brand-900/60" />

        {/* Pipe cross-section SVG pattern — on-brand background */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id="pipe-cross" x="0" y="0" width="140" height="140" patternUnits="userSpaceOnUse">
              <circle cx="70" cy="70" r="55" fill="none" stroke="white" strokeWidth="2" />
              <circle cx="70" cy="70" r="40" fill="none" stroke="white" strokeWidth="1" opacity="0.7" />
              <circle cx="70" cy="70" r="28" fill="none" stroke="white" strokeWidth="1" opacity="0.4" />
              <circle cx="70" cy="70" r="3" fill="white" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pipe-cross)" />
        </svg>

        {/* Subtle noise + green glow accents */}
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
        <div className="absolute -top-32 -right-40 w-[500px] h-[500px] rounded-full bg-brand-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-600/10 blur-3xl pointer-events-none" />

        <Container className="relative pt-8 pb-14 lg:pt-12 lg:pb-16 grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-3.5 py-1.5 mb-5 lg:mb-6 backdrop-blur">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-[11px] lg:text-xs font-bold uppercase tracking-widest text-brand-300">
                ISO 9001 Certified · IS 458:2003
              </span>
            </div>
            <h1 className="font-serif text-[2.6rem] sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tightest">
              RCC Hume Pipes<br />
              in Hyderabad,<br />
              <span className="text-brand-500 italic font-medium">built to outlast.</span>
            </h1>
            <div className="mt-4 lg:mt-5 h-px w-24 bg-gradient-to-r from-brand-500 to-transparent" />
            <p className="mt-4 lg:mt-5 text-base lg:text-lg text-ivory-200/85 leading-relaxed max-w-xl">
              <strong className="text-white">In short:</strong> SVR Hume Pipes manufactures
              ISO-certified RCC hume pipes — NP2, NP3 &amp; NP4, 150–2200 mm to IS&nbsp;458:2003 —
              delivered 24×7 across Telangana. Trusted by contractors and government
              departments for <strong className="text-white">15+ years</strong>.
            </p>

            {/* Trust badges */}
            <div className="mt-5 lg:mt-6 grid grid-cols-3 gap-2 lg:gap-2.5 lg:max-w-md">
              {[
                { v: "15+", l: "Years" },
                { v: "500+", l: "Contractors" },
                { v: "ISO", l: "Certified" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="min-w-0 rounded-md border border-white/10 bg-white/5 px-1.5 py-3 text-center backdrop-blur"
                >
                  <div className="font-serif text-xl lg:text-2xl font-bold text-white leading-none">
                    {s.v}
                  </div>
                  <div className="mt-1 text-[9px] tracking-wide lg:text-[10px] lg:tracking-widest uppercase text-ivory-200/60 truncate">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs — full-width on mobile */}
            <div className="mt-5 lg:mt-7 flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="sm:flex-1 rounded-none bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 font-semibold uppercase tracking-widest text-xs shadow-gold transition text-center whitespace-nowrap"
                >
                  Request Quotation →
                </Link>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:flex-1 rounded-none bg-[#25D366] hover:bg-[#1EBE5D] text-white px-8 py-4 font-semibold uppercase tracking-widest text-xs transition text-center whitespace-nowrap"
                >
                  💬 WhatsApp
                </a>
              </div>
              <a
                href={telLink}
                className="w-full rounded-none border-2 border-ivory-200/30 hover:border-brand-500 text-white hover:bg-brand-500 hover:text-steel-900 px-8 py-4 font-semibold uppercase tracking-widest text-xs transition text-center whitespace-nowrap"
              >
                ☎ {site.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Interactive Pipe Estimator — replaces fake production/enquiries */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-brand-500/25 via-transparent to-brand-600/10 rounded-lg blur-2xl pointer-events-none" />
            <div className="relative">
              <SizeEstimator />
            </div>
          </div>
        </Container>

        {/* Scroll indicator — desktop only */}
        <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs uppercase tracking-widest flex-col items-center gap-2 animate-float">
          <span>Scroll to explore</span>
          <span>↓</span>
        </div>
      </section>

      {/* Client Marquee */}
      <ClientsMarquee />

      {/* ══════════════════════════════════════════════════════════════
          QUICK OVERVIEW — AI/answer-engine friendly summary + key facts
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 lg:py-16 border-b border-ivory-300">
        <Container>
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12">
            {/* Summary + definition */}
            <div>
              <div className="eyebrow">Overview</div>
              <h2 className="mt-4 font-serif text-2xl lg:text-3xl font-bold text-steel-900 tracking-tightest">
                What are hume pipes, and who is SVR Hume Pipes for?
              </h2>
              <p className="mt-5 text-steel-700 leading-relaxed">
                <strong>Hume pipes</strong> are spun-cast <strong>reinforced cement
                concrete (RCC) pipes</strong> used for storm-water drainage, sewerage,
                road culverts and irrigation. <strong>SVR Hume Pipes (Sri Venkateshwara
                Hume Pipes)</strong> is a Hyderabad-based manufacturer that has supplied
                ISO-certified RCC hume pipes across Telangana and Andhra Pradesh since
                2009.
              </p>
              <p className="mt-4 text-steel-700 leading-relaxed">
                <strong>Bottom line:</strong> if you need <strong>NP2, NP3 or NP4 hume
                pipes from 150 mm to 2200 mm</strong> made to <strong>IS&nbsp;458:2003</strong>,
                delivered with your own hydra-crane unloading and 24×7 dispatch, SVR is a
                trusted local supplier.
              </p>
              <p className="mt-4 text-steel-700 leading-relaxed">
                <strong>Who it&apos;s for:</strong> government departments (PWD, GHMC, HMDA,
                HMWSSB), highway and irrigation contractors (NHAI, Kaleshwaram), and
                builders needing certified drainage, sewer and culvert pipes.
              </p>
              <p className="mt-5 text-xs uppercase tracking-widest text-steel-500">
                Last updated: {LAST_UPDATED_LABEL}
              </p>
            </div>

            {/* Key facts list */}
            <div className="bg-ivory-50 border border-ivory-300 p-6 lg:p-8">
              <h3 className="font-serif text-lg font-bold text-steel-900 tracking-tightest">
                Key facts at a glance
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-steel-700">
                {[
                  ["Product", "RCC hume pipes — NP2, NP3 & NP4 (plain, socket & spigot)"],
                  ["Sizes", "150 mm to 2200 mm diameter"],
                  ["Standard", "IS 458:2003 · ISO 9001 certified"],
                  ["Plant", "Lalgadi Malakpet, Medchal–Malkajgiri, Hyderabad"],
                  ["Delivery", "Own trailer fleet + hydra-crane · open 24×7"],
                  ["Serves", "Telangana, Andhra Pradesh & Karnataka"],
                ].map(([k, v]) => (
                  <li key={k} className="flex gap-3">
                    <span className="text-brand-600 shrink-0">◆</span>
                    <span>
                      <strong className="text-steel-900">{k}:</strong> {v}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={telLink}
                className="mt-6 inline-flex items-center gap-2 text-brand-700 hover:text-brand-800 font-semibold uppercase text-xs tracking-widest border-b-2 border-brand-500 pb-1 transition"
              >
                ☎ {site.phoneDisplay} · Get a price
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          STATS DASHBOARD — animated counters
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-ivory-100 py-12 lg:py-20">
        <Container>
          <div className="text-center mb-10">
            <div className="eyebrow justify-center">By The Numbers</div>
            <h2 className="mt-4 font-serif text-3xl lg:text-4xl font-bold text-steel-900 tracking-tightest">
              A legacy of engineering excellence
            </h2>
          </div>
          <StatsCounter
            stats={[
              { value: 15, suffix: "+", label: "Years of Heritage", icon: "🏛" },
              { value: 500, suffix: "+", label: "Projects Delivered", icon: "◆" },
              { value: 100000, suffix: "+", label: "Pipes Manufactured", icon: "◉" },
              { value: 24, suffix: "/7", label: "Customer Support", icon: "☎" },
            ]}
          />
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          INTRO — editorial split
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-12 lg:py-28 bg-white">
        <Container className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <HeroImage
              alt="SVR Hume Pipes spun-casting factory in Hyderabad"
              variant="factory"
              className="aspect-[4/5]"
            />
            <div className="absolute bottom-4 right-4 lg:-bottom-6 lg:-right-8 bg-white border border-ivory-300 shadow-classic p-5 lg:p-6 max-w-[220px] lg:max-w-[260px]">
              <div className="text-xs uppercase tracking-widest text-brand-700 font-bold mb-1">Since 2009</div>
              <div className="font-serif text-2xl font-bold text-steel-900 leading-tight">
                Three generations of concrete craft
              </div>
              <div className="mt-3 h-px w-10 bg-brand-500" />
            </div>
          </div>

          <div>
            <div className="eyebrow">Our Story</div>
            <h2 className="mt-4 font-serif text-4xl lg:text-5xl font-bold text-steel-900 leading-tight tracking-tightest">
              Built on trust.<br />
              <span className="italic text-brand-700 font-medium">Cast in strength.</span>
            </h2>
            <div className="mt-6 space-y-4 text-steel-700 leading-relaxed">
              <p>
                Sri Venkateshwara Hume Pipes was founded in <strong>2009</strong> with a
                single vision — manufacture the toughest, most reliable RCC concrete
                pipes India has ever seen. Fifteen years later, we operate a modern
                spun-casting facility in Lalgadi Malakpet producing over{" "}
                <strong>20,000 pipes annually</strong> across NP2, NP3 and NP4 classes.
              </p>
              <p>
                Every pipe carries our ISO certification. Every batch is tested in our own QC
                lab. Every dispatch leaves on our own trailer fleet. From municipal
                storm drains to national highway culverts — SVR pipes hold the line.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { k: "ISO 9001", v: "Certified" },
                { k: "OPC 53 Grade", v: "Cement" },
                { k: "Fe 500", v: "TMT Reinforcement" },
                { k: "28-Day", v: "Water Cured" },
              ].map((x) => (
                <div key={x.k} className="border-l-2 border-brand-500 pl-4 py-1">
                  <div className="font-serif text-lg font-bold text-steel-900">{x.k}</div>
                  <div className="text-xs text-steel-500 uppercase tracking-widest">{x.v}</div>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-3 text-brand-700 hover:text-brand-800 font-semibold uppercase text-xs tracking-widest border-b-2 border-brand-500 pb-1 transition"
            >
              Discover our journey →
            </Link>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PRODUCTS TABBED — interactive dashboard
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-12 lg:py-24 bg-ivory-100">
        <Container>
          <SectionHeading
            eyebrow="Our Catalogue"
            title="ISO-certified RCC Hume Pipes"
            subtitle="Spun-cast RCC hume pipes from 150 mm to 2200 mm in NP2, NP3 and NP4 classes — every pipe manufactured to IS 458:2003 with in-house QC lab certification."
          />
          <div className="mt-14">
            <Reveal><ProductTabs /></Reveal>
          </div>
          <div className="mt-10 text-center">
            <Link href="/products/rcc-hume-pipes" className="btn-ivory">View full specifications →</Link>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          NP2 vs NP3 vs NP4 — comparison / decision support (AEO)
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-12 lg:py-24 bg-white">
        <Container>
          <div className="max-w-3xl">
            <div className="eyebrow">Choosing a class</div>
            <h2 className="mt-4 font-serif text-3xl lg:text-4xl font-bold text-steel-900 tracking-tightest">
              NP2 vs NP3 vs NP4 hume pipes — which class do you need?
            </h2>
            <p className="mt-4 text-steel-700 leading-relaxed">
              All three are reinforced, non-pressure RCC hume pipes made to IS&nbsp;458:2003.
              The difference is load-bearing strength — choose the class from the traffic
              and burial load the pipe will carry.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto border border-ivory-300">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-steel-900 text-white">
                <tr>
                  <th className="p-4 font-semibold">Class</th>
                  <th className="p-4 font-semibold">Load / duty</th>
                  <th className="p-4 font-semibold">Best for</th>
                  <th className="p-4 font-semibold">Typical sizes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ivory-300">
                <tr>
                  <td className="p-4 font-bold text-steel-900">NP2</td>
                  <td className="p-4 text-steel-700">Light-duty, non-pressure</td>
                  <td className="p-4 text-steel-700">
                    House connections, field &amp; cross drains, light-traffic drainage
                  </td>
                  <td className="p-4 text-steel-700">150–1200 mm</td>
                </tr>
                <tr className="bg-ivory-50">
                  <td className="p-4 font-bold text-steel-900">
                    NP3
                    <span className="ml-2 rounded-sm bg-brand-100 text-brand-700 text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5">
                      Most common
                    </span>
                  </td>
                  <td className="p-4 text-steel-700">Medium–heavy duty, non-pressure</td>
                  <td className="p-4 text-steel-700">
                    Road culverts, storm-water &amp; sewer lines under regular traffic
                  </td>
                  <td className="p-4 text-steel-700">150–2200 mm</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-steel-900">NP4</td>
                  <td className="p-4 text-steel-700">Heavy-duty, non-pressure (highest RCC class)</td>
                  <td className="p-4 text-steel-700">
                    Highways, rail crossings, deep burial and high fill loads
                  </td>
                  <td className="p-4 text-steel-700">300–2200 mm</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-steel-500 leading-relaxed">
            Exact 3-edge bearing strengths vary by diameter per the IS&nbsp;458:2003 load
            tables. Not sure which class your project needs?{" "}
            <a href={telLink} className="text-brand-700 font-semibold border-b border-brand-500">
              Call {site.phoneDisplay}
            </a>{" "}
            and we&apos;ll advise.
          </p>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CERTIFICATIONS BAR
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white border-y border-ivory-300">
        <Container>
          <div className="text-center mb-10">
            <div className="eyebrow justify-center">Certifications & Approvals</div>
            <h2 className="mt-4 font-serif text-3xl font-bold text-steel-900 tracking-tightest">
              Certified. Approved. Trusted.
            </h2>
          </div>
          <Reveal><Certifications /></Reveal>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          WHY CHOOSE US — editorial 3-col
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-12 lg:py-24 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Why SVR"
            title="Six pillars of our craft"
            subtitle="From ISO certification to 48-hour dispatch — everything is engineered for reliability that outlasts the project."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w, i) => (
              <div
                key={w.title}
                className="relative bg-white border border-ivory-300 p-8 hover:border-brand-500 hover:shadow-classic transition group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-500 scale-y-0 group-hover:scale-y-100 origin-top transition-transform" />
                <div className="text-brand-500 font-serif text-6xl font-bold leading-none opacity-30">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-serif text-2xl font-bold text-steel-900 tracking-tightest">
                  {w.title}
                </h3>
                <div className="mt-3 text-brand-700 text-sm font-bold uppercase tracking-widest">
                  {w.metric}
                </div>
                <p className="mt-4 text-steel-700 leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          INDUSTRIES SERVED
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-12 lg:py-24 bg-steel-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Powering South India's infrastructure"
            subtitle="From municipal drains to national highways — trusted across 500+ major projects."
            light
          />
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="relative bg-white/5 border border-white/10 backdrop-blur p-6 hover:bg-white/10 hover:border-brand-500 transition group"
              >
                <div className="w-11 h-11 rounded-sm bg-brand-500/20 text-brand-400 flex items-center justify-center font-serif font-bold text-lg mb-4 group-hover:bg-brand-500 group-hover:text-steel-900 transition">
                  {ind.name[0]}
                </div>
                <h3 className="font-serif text-lg font-bold text-white tracking-tightest">
                  {ind.name}
                </h3>
                <p className="mt-2 text-xs text-ivory-200/70 leading-relaxed">
                  {ind.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PROJECT SHOWCASE
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-12 lg:py-24 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
            <div>
              <div className="eyebrow">Selected Work</div>
              <h2 className="mt-4 font-serif text-4xl lg:text-5xl font-bold text-steel-900 tracking-tightest leading-tight">
                Recent projects
              </h2>
              <p className="mt-3 text-steel-700 max-w-xl">
                A snapshot of major supply orders delivered across Telangana and AP in
                the last 24 months.
              </p>
            </div>
            <Link href="/gallery" className="text-brand-700 font-semibold uppercase text-xs tracking-widest border-b-2 border-brand-500 pb-1 hover:text-brand-800 self-start lg:self-end transition">
              View gallery →
            </Link>
          </div>
          <Reveal><ProjectShowcase /></Reveal>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          REVIEWS & RATINGS
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-12 lg:py-24 bg-ivory-100">
        <Container>
          <SectionHeading
            eyebrow="Ratings & Reviews"
            title="Rated by our customers"
            subtitle="See what customers say about SVR Hume Pipes across IndiaMART, JustDial and Google."
          />
          <div className="mt-14">
            <Reveal><ReviewStats /></Reveal>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-12 lg:py-24 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Common Questions"
            title="Everything you need to know"
            subtitle="Answers to the most common queries we receive from contractors, engineers and government departments."
          />
          <div className="mt-14 max-w-3xl mx-auto space-y-4">
            {homeFaqs.map((f) => (
              <div key={f.q} className="border border-ivory-300 bg-white p-6">
                <h3 className="font-serif font-semibold text-steel-900 text-lg tracking-tightest">
                  {f.q}
                </h3>
                <p className="mt-3 text-steel-700 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
