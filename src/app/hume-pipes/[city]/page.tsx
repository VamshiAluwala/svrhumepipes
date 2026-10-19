import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { SpunPipe } from "@/components/SpunPipe";
import { ArrowIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { SizeEstimator } from "@/components/SizeEstimator";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { locations, getLocation } from "@/data/locations";
import { whyChooseUs } from "@/data/industries";
import { site, telLink, whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

type Params = { params: { city: string } };

export function generateMetadata({ params }: Params): Metadata {
  const loc = getLocation(params.city);
  if (!loc) return {};
  return buildMetadata({
    title: `Hume Pipes in ${loc.city} - RCC & Cement Pipes Supplier`,
    description: `Hume pipes near ${loc.city}: RCC spun & cement pipes, NP2/NP3/NP4, 150-2200 mm, IS 458:2003. Delivered to ${loc.city}${loc.district !== loc.city ? `, ${loc.district}` : ""} from our Hyderabad plant. Call 99495 19444.`,
    path: `/hume-pipes/${loc.slug}`,
    keywords: [
      `hume pipes in ${loc.city.toLowerCase()}`,
      `rcc pipes ${loc.city.toLowerCase()}`,
      `hume pipe supplier ${loc.city.toLowerCase()}`,
      `hume pipe price ${loc.city.toLowerCase()}`,
      `concrete pipes ${loc.city.toLowerCase()}`,
      `cement pipes ${loc.city.toLowerCase()}`,
      `spun pipes ${loc.city.toLowerCase()}`,
      `hume pipes near ${loc.city.toLowerCase()}`,
    ],
  });
}

export default function LocationPage({ params }: Params) {
  const loc = getLocation(params.city);
  if (!loc) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: `Hume Pipes in ${loc.city}`, path: `/hume-pipes/${loc.slug}` },
  ];

  const faqs = [
    {
      q: `Do you deliver hume pipes to ${loc.city}?`,
      a: `Yes. We deliver ISO-certified RCC hume pipes to ${loc.city} and across ${loc.district} district from our Hyderabad plant using our own trailer fleet, with hydra-crane unloading arranged at site.`,
    },
    {
      q: `What sizes of hume pipes are available in ${loc.city}?`,
      a: `We supply NP2, NP3 and NP4 hume pipes from 150 mm to 2200 mm diameter to ${loc.city}, in standard 2 m and 2.5 m lengths, with custom sizes made to order.`,
    },
    {
      q: `How do I get a hume pipe price in ${loc.city}?`,
      a: `Call ${site.phoneDisplay} or WhatsApp us with your diameter, class (NP2/NP3/NP4) and quantity for a ${loc.city}-delivered quotation within 24 working hours.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          serviceSchema(
            `RCC Hume Pipe Supply in ${loc.city}`,
            `Manufacture and supply of ISO-certified RCC hume pipes (spun / cement concrete pipes) to ${loc.city}, ${loc.district}, Telangana.`,
            loc.city
          ),
          faqSchema(faqs),
        ]}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-steel-950 text-white pt-6 pb-10 lg:pt-10 lg:pb-16">
        <SpunPipe className="-right-28 -top-16 h-[300px] w-[300px] opacity-40 lg:right-auto lg:top-auto lg:-left-64 lg:-bottom-80 lg:h-[720px] lg:w-[720px] lg:opacity-30" />
        <SpunPipe id="sp2" className="hidden lg:block -right-72 -top-48 h-[680px] w-[680px] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_40%,rgba(2,132,199,0.18),transparent)] pointer-events-none" />
        <Container className="relative">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-12 items-center">
            {/* Left: copy + CTAs */}
            <div className="max-w-2xl lg:pt-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs font-medium text-ivory-200/90 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
                ISO 9001 · IS 458:2003 · {loc.district}
              </div>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tightest">
                <span className="blur-in">Hume Pipes in </span>
                <span className="blur-in bg-gradient-to-r from-brand-300 via-brand-400 to-brand-600 bg-clip-text text-transparent" style={{ animationDelay: "150ms" }}>
                  {loc.city}
                </span>
              </h1>
              <p className="mt-5 text-base lg:text-lg text-ivory-200/80 leading-relaxed">{loc.intro}</p>
              <div className="mt-8 flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="btn-shimmer group sm:flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white px-7 py-3.5 font-semibold text-sm shadow-gold transition whitespace-nowrap"
                  >
                    Get {loc.city} quotation
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <a
                    href={whatsappLink(`Hi SVR, I need RCC hume pipes delivered to ${loc.city}. Please share pricing.`)}
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

            {/* Right: instant estimator */}
            <div className="relative w-full">
              <div className="absolute -inset-8 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <SizeEstimator />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT WE SUPPLY */}
      <section className="py-12 lg:py-20 bg-white">
        <Container>
          <SectionHeading
            eyebrow={`Supplying ${loc.city}`}
            title={`RCC hume pipes for ${loc.city} projects`}
            subtitle={`Typical ${loc.city} applications: ${loc.projects}.`}
          />
          <div className="mt-8 lg:mt-10 grid gap-3 sm:gap-5 md:grid-cols-3">
            {whyChooseUs.slice(0, 6).map((w) => (
              <div key={w.title} className="rounded-2xl border border-ivory-300 bg-ivory-50 p-5 sm:p-6">
                <div className="inline-flex rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-600/10">
                  {w.metric}
                </div>
                <h3 className="mt-2 font-serif text-lg font-bold text-steel-900">{w.title}</h3>
                <p className="mt-2 text-sm text-steel-700 leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/products/rcc-hume-pipes" className="btn-gold group">
              View pipe sizes &amp; specifications
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Container>
      </section>

      {/* LOCAL FAQ */}
      <section className="py-12 lg:py-20 bg-ivory-100">
        <Container>
          <SectionHeading eyebrow="FAQ" title={`Hume pipes in ${loc.city}: common questions`} />
          <div className="mt-10 max-w-3xl mx-auto divide-y divide-ivory-300 border border-ivory-300 bg-white">
            {faqs.map((f) => (
              <div key={f.q} className="p-6">
                <h3 className="font-serif text-lg font-bold text-steel-900">{f.q}</h3>
                <p className="mt-2 text-steel-700 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CONTACT */}
      <section className="py-12 lg:py-20 bg-white" id="inquiry">
        <Container className="max-w-3xl">
          <div className="rounded-2xl border border-ivory-300 bg-white shadow-classic p-5 sm:p-6 lg:p-8">
            <ContactForm productContext={`Hume Pipes, ${loc.city}`} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
