import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { HeroImage } from "@/components/HeroImage";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { stats } from "@/data/industries";
import { SpunPipe } from "@/components/SpunPipe";
import { CheckIcon, EyeIcon, TargetIcon } from "@/components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "About Us - Sri Venkateshwara Hume Pipes",
  description:
    "Learn about SVR Hume Pipes - Hyderabad's leading RCC hume pipes manufacturer since 2009. ISO-quality, ISO-certified pipes with state-of-the-art spun-casting facility.",
  path: "/about",
  keywords: ["about svr hume pipes", "hume pipes company hyderabad", "rcc pipe manufacturer telangana"],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];


const values = [
  { title: "Quality First", desc: "Every batch passes 3-edge bearing and hydrostatic tests before dispatch." },
  { title: "Fair Pricing", desc: "Factory-direct pricing with no hidden costs or middleman margins." },
  { title: "On-time Delivery", desc: "Own logistics fleet ensures site delivery on committed dates." },
  { title: "Customer Support", desc: "Dedicated project engineer for every large order." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="relative isolate overflow-hidden bg-steel-950 text-white py-14 lg:py-20">
        <SpunPipe className="-right-24 -top-20 h-[320px] w-[320px] opacity-30 lg:-right-16 lg:-top-32 lg:h-[560px] lg:w-[560px]" />
        <Container className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs font-medium text-ivory-200/90 mb-4">
              About Us · Since 2009
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
              Building South India's infrastructure, one pipe at a time
            </h1>
            <p className="mt-4 text-ivory-200/80 text-lg">
              Sri Venkateshwara Hume Pipes (SVR) is a Hyderabad-based manufacturer of
              ISO-certified RCC hume pipes serving government, municipal and private
              projects across Telangana, Andhra Pradesh and Karnataka since 2009.
            </p>
          </div>
          <HeroImage alt="SVR Hume Pipes manufacturing facility" variant="factory" className="aspect-[4/3]" />
        </Container>
      </section>

      {/* STATS */}
      <section className="py-12 bg-white border-b border-steel-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-display font-bold text-brand-700">{s.value}</div>
                <div className="text-sm text-steel-700 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* COMPANY PROFILE */}
      <section className="py-12 lg:py-24 bg-white">
        <Container className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square overflow-hidden bg-steel-800 shadow-classic">
            <Image
              src="/images/catalogue.jpg"
              alt="SVR Hume Pipes product catalogue"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Company Profile"
              title="Manufacturing engineered concrete pipes for 15+ years"
              center={false}
            />
            <div className="mt-6 space-y-4 text-steel-700 leading-relaxed">
              <p>
                Founded in 2009, SVR Hume Pipes has grown from a single-mould workshop
                into one of Hyderabad's most respected RCC hume pipes manufacturers. Our
                modern facility near ECIL houses 6 spun-casting bays, a fully-equipped
                QC lab and dedicated curing tanks.
              </p>
              <p>
                Every pipe we manufacture is designed to outperform site-cast concrete,
                with superior strength, dimensional accuracy, corrosion resistance
                and long service life. From <strong>150 mm</strong> to{" "}
                <strong>2200 mm</strong> diameter, in NP2, NP3 and NP4 classes. We
                make it, and we test it.
              </p>
              <p>
                We are proud partners of GHMC, HMDA, HMWSSB, Telangana PWD, Telangana
                Irrigation Department and dozens of leading infrastructure contractors.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* MISSION VISION */}
      <section className="py-12 lg:py-24 bg-steel-50">
        <Container className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white border border-steel-200 p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center mb-4"><TargetIcon /></div>
            <h2 className="font-display text-2xl font-bold text-steel-900 mb-3">Our Mission</h2>
            <p className="text-steel-700 leading-relaxed">
              To manufacture and deliver the highest-quality RCC concrete pipes in
              India, engineered for decades of service under the toughest field
              conditions, priced fairly, and delivered on time.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-steel-200 p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center mb-4"><EyeIcon /></div>
            <h2 className="font-display text-2xl font-bold text-steel-900 mb-3">Our Vision</h2>
            <p className="text-steel-700 leading-relaxed">
              To be South India's most trusted precast concrete manufacturer, the
              default choice for every government body, municipal corporation and
              infrastructure contractor building the India of tomorrow.
            </p>
          </div>
        </Container>
      </section>

      {/* FOUNDER */}
      <section className="py-12 lg:py-24 bg-ivory-100">
        <Container>
          <SectionHeading eyebrow="Leadership" title="Meet the Founder" />
          <Reveal>
            <div className="mt-12 grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-14 items-center max-w-5xl mx-auto">
              <div className="relative aspect-[4/5] rounded-2xl bg-gradient-to-b from-brand-100 via-ivory-50 to-ivory-200 border border-brand-500/15 shadow-classic overflow-hidden">
                {/* soft glow behind the founder */}
                <div className="absolute left-1/2 top-[30%] h-44 w-44 -translate-x-1/2 rounded-full bg-brand-300/40 blur-3xl pointer-events-none" />
                <Image
                  src="/images/founder3.png"
                  alt="Srinivas Reddy, Founder of SVR Hume Pipes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 340px"
                  className="relative object-cover object-top"
                  priority
                />
              </div>

              {/* Message */}
              <div>
                <div className="font-serif text-6xl leading-none text-brand-200">&ldquo;</div>
                <blockquote className="-mt-5 text-lg lg:text-xl text-steel-800 leading-relaxed italic">
                  Since 2009, our promise has been simple:{" "}
                  <strong className="not-italic font-semibold text-steel-900">
                    number-one quality at the best price, delivered on time, every
                    time.
                  </strong>{" "}
                  Whether you order one pipe or one thousand, you get the same
                  quality and the same trust that has made SVR the name contractors
                  and engineers rely on.
                </blockquote>
                <div className="mt-6 h-px w-16 bg-brand-500" />
                <div className="mt-4">
                  <div className="font-serif text-xl font-bold text-steel-900">
                    Srinivas Reddy
                  </div>
                  <div className="mt-0.5 text-sm text-brand-700 font-semibold">
                    Founder &amp; Managing Director
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* MANUFACTURING CAPABILITY */}
      <section className="py-12 lg:py-24 bg-steel-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-grid bg-[size:32px_32px] opacity-20" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Capability"
            title="Manufacturing capability"
            subtitle="A modern, scalable spun-casting facility built for volume, quality and speed."
            light
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "6", l: "Spun-casting bays" },
              { k: "150-2200mm", l: "Diameter range" },
              { k: "20,000+", l: "Pipes/year capacity" },
              { k: "OPC 53 Grade", l: "Cement" },
              { k: "48 hrs", l: "Dispatch time" },
              { k: "3 acre", l: "Plant area" },
              { k: "80+", l: "Skilled workforce" },
              { k: "On-site", l: "QC lab & testing" },
            ].map((x) => (
              <div key={x.l} className="rounded-xl bg-white/5 border border-white/10 backdrop-blur p-5">
                <div className="text-2xl lg:text-3xl font-display font-bold text-white">{x.k}</div>
                <div className="text-sm text-steel-300 mt-1">{x.l}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* VALUES */}
      <section className="py-12 lg:py-24 bg-white">
        <Container>
          <SectionHeading eyebrow="Our Values" title="What we stand for" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-steel-200 p-6 hover:shadow-lg transition">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center mb-3">
                  <CheckIcon />
                </div>
                <h3 className="font-bold text-steel-900 mb-2">{v.title}</h3>
                <p className="text-sm text-steel-700 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
