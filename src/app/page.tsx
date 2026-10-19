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
import { SpunPipe } from "@/components/SpunPipe";
import {
  ArrowIcon,
  AwardIcon,
  CheckIcon,
  ClockIcon,
  LayersIcon,
  PhoneIcon,
  WhatsAppIcon,
  industryIcons,
} from "@/components/Icons";
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { site, telLink, whatsappLink } from "@/lib/site";
import { industries, whyChooseUs, homeFaqs } from "@/data/industries";

// Bump this when the home page content is meaningfully updated (schema dateModified only).
const LAST_UPDATED = "2026-08-01";

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
        <div className="absolute inset-0 bg-gradient-to-b from-steel-950 via-steel-950 to-brand-900/40" />
        <SpunPipe className="-right-28 -top-16 h-[300px] w-[300px] opacity-40 lg:right-auto lg:top-auto lg:-left-64 lg:-bottom-80 lg:h-[720px] lg:w-[720px] lg:opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_40%,rgba(2,132,199,0.18),transparent)] pointer-events-none" />

        <Container className="relative pt-8 pb-14 lg:pt-12 lg:pb-16 grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 mb-5 lg:mb-6 backdrop-blur">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
              <span className="text-xs font-medium text-ivory-200/90">
                ISO 9001 Certified · IS 458:2003
              </span>
            </div>
            <h1 className="font-serif text-[2.6rem] sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tightest">
              {["RCC", "Hume", "Pipes", "in", "Hyderabad,"].map((w, i) => (
                <span key={i} className="blur-in mr-[0.25em]" style={{ animationDelay: `${i * 60}ms` }}>
                  {w}
                </span>
              ))}
              <br />
              <span
                className="blur-in bg-gradient-to-r from-brand-300 via-brand-400 to-brand-600 bg-clip-text text-transparent font-medium"
                style={{ animationDelay: "360ms" }}
              >
                built to outlast.
              </span>
            </h1>
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
                  className="min-w-0 rounded-xl border border-white/10 bg-white/[0.04] px-1.5 py-3 text-center backdrop-blur"
                >
                  <div className="font-serif text-xl lg:text-2xl font-bold text-white leading-none">
                    {s.v}
                  </div>
                  <div className="mt-1 text-xs text-ivory-200/60 truncate">
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
                  className="btn-shimmer group sm:flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white px-7 py-3.5 font-semibold text-sm shadow-gold transition whitespace-nowrap"
                >
                  Request quotation
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 ring-1 ring-white/15 text-white px-7 py-3.5 font-semibold text-sm backdrop-blur transition whitespace-nowrap"
                >
                  <WhatsAppIcon className="h-5 w-5 text-[#25D366]" /> WhatsApp
                </a>
              </div>
              <a
                href={telLink}
                className="inline-flex items-center justify-center gap-2 py-2 text-sm font-medium text-ivory-200/80 hover:text-white transition whitespace-nowrap"
              >
                <PhoneIcon /> Call {site.phoneDisplay} · open 24 hours
              </a>
            </div>
          </div>

          {/* Interactive Pipe Estimator — replaces fake production/enquiries */}
          <div className="relative">
            <div className="absolute -inset-8 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <SizeEstimator />
            </div>
          </div>
        </Container>

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
            </div>

            {/* Key facts list */}
            <div className="rounded-2xl bg-ivory-50 border border-ivory-300 p-6 lg:p-8">
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
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    <span>
                      <strong className="text-steel-900">{k}:</strong> {v}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={telLink}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-steel-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-steel-800 transition"
              >
                <PhoneIcon /> {site.phoneDisplay} · Get a price
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
              { value: 15, suffix: "+", label: "Years of Heritage", icon: <AwardIcon /> },
              { value: 500, suffix: "+", label: "Projects Delivered", icon: <CheckIcon /> },
              { value: 100000, suffix: "+", label: "Pipes Manufactured", icon: <LayersIcon /> },
              { value: 24, suffix: "/7", label: "Customer Support", icon: <ClockIcon /> },
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
              className="group mt-8 inline-flex items-center gap-2 text-brand-700 hover:text-brand-800 font-semibold transition"
            >
              Discover our journey <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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
            <Link href="/products/rcc-hume-pipes" className="btn-ivory group">
              View full specifications <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
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

          <div className="mt-8 overflow-hidden rounded-2xl border border-ivory-300">
            <table className="stack-table w-full text-left text-sm">
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
                  <td data-label="Load / duty" className="p-4 text-steel-700">Light-duty, non-pressure</td>
                  <td data-label="Best for" className="p-4 text-steel-700">
                    House connections, field &amp; cross drains, light-traffic drainage
                  </td>
                  <td data-label="Typical sizes" className="p-4 text-steel-700">150–1200 mm</td>
                </tr>
                <tr className="bg-ivory-50">
                  <td className="p-4 font-bold text-steel-900">
                    NP3
                    <span className="ml-2 whitespace-nowrap rounded-full bg-brand-100 text-brand-700 text-[11px] font-semibold px-2 py-0.5">
                      Most common
                    </span>
                  </td>
                  <td data-label="Load / duty" className="p-4 text-steel-700">Medium–heavy duty, non-pressure</td>
                  <td data-label="Best for" className="p-4 text-steel-700">
                    Road culverts, storm-water &amp; sewer lines under regular traffic
                  </td>
                  <td data-label="Typical sizes" className="p-4 text-steel-700">150–2200 mm</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-steel-900">NP4</td>
                  <td data-label="Load / duty" className="p-4 text-steel-700">Heavy-duty, non-pressure (highest RCC class)</td>
                  <td data-label="Best for" className="p-4 text-steel-700">
                    Highways, rail crossings, deep burial and high fill loads
                  </td>
                  <td data-label="Typical sizes" className="p-4 text-steel-700">300–2200 mm</td>
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
          <div className="mt-10 lg:mt-14 grid gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w, i) => (
              <div
                key={w.title}
                className="card-classic p-5 sm:p-7"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-steel-900 tracking-tightest">
                    {w.title}
                  </h3>
                  <span className="font-serif text-sm font-semibold text-steel-300 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-2 inline-flex rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                  {w.metric}
                </div>
                <p className="mt-3 text-sm sm:text-base text-steel-700 leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          INDUSTRIES SERVED
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-12 lg:py-24 bg-steel-950 text-white">
        <Container className="relative">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Powering South India's infrastructure"
            subtitle="From municipal drains to national highways — trusted across 500+ major projects."
            light
          />
          <div className="mt-10 lg:mt-14 grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
            {industries.map((ind) => {
              const Icon = industryIcons[ind.icon];
              return (
              <div
                key={ind.name}
                className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-4 sm:p-6 hover:bg-white/[0.07] hover:ring-brand-500/50 transition group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/15 text-brand-300 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-brand-500 group-hover:text-white transition">
                  {Icon && <Icon />}
                </div>
                <h3 className="font-serif text-[15px] sm:text-lg font-bold text-white tracking-tightest leading-snug">
                  {ind.name}
                </h3>
                <p className="mt-2 hidden sm:block text-xs text-ivory-200/70 leading-relaxed">
                  {ind.description}
                </p>
              </div>
              );
            })}
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
            <Link href="/gallery" className="group inline-flex items-center gap-2 text-brand-700 font-semibold hover:text-brand-800 self-start lg:self-end transition">
              View gallery <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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
          <div className="mt-10 lg:mt-14 max-w-3xl mx-auto divide-y divide-ivory-300 rounded-2xl border border-ivory-300 bg-white">
            {homeFaqs.map((f, i) => (
              <details key={f.q} open={i === 0} className="group px-5 sm:px-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-serif font-semibold text-steel-900 text-base sm:text-lg tracking-tightest">
                    {f.q}
                  </h3>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ivory-200 text-steel-700 transition group-open:rotate-45">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden><path d="M12 5v14M5 12h14" /></svg>
                  </span>
                </summary>
                <p className="pb-5 -mt-1 text-steel-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
