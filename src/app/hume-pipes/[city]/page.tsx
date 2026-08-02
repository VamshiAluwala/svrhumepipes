import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
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
    title: `Hume Pipes in ${loc.city} – RCC Hume Pipe Supplier`,
    description: `Buy ISO-certified RCC hume pipes in ${loc.city}, ${loc.district}. SVR Hume Pipes supplies NP2, NP3 & NP4 pipes (150mm–2200mm) to ${loc.city} for drainage, sewer & irrigation. IS 458:2003. Delivered from Hyderabad. ☎ +91 99495 19444`,
    path: `/hume-pipes/${loc.slug}`,
    keywords: [
      `hume pipes in ${loc.city.toLowerCase()}`,
      `rcc pipes ${loc.city.toLowerCase()}`,
      `hume pipe supplier ${loc.city.toLowerCase()}`,
      `hume pipe price ${loc.city.toLowerCase()}`,
      `concrete pipes ${loc.city.toLowerCase()}`,
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
            `Manufacture and supply of ISO-certified RCC hume pipes to ${loc.city}, ${loc.district}, Telangana.`
          ),
          faqSchema(faqs),
        ]}
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-steel-900 via-brand-800 to-brand-700 text-white pt-5 pb-8 lg:pt-6 lg:pb-10">
        <Container>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-12 items-center">
            {/* Left: copy + CTAs */}
            <div className="max-w-2xl lg:pt-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest mb-5">
                ISO 9001 · IS 458:2003 · {loc.district}
              </div>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tightest">
                Hume Pipes in {loc.city}
              </h1>
              <p className="mt-5 text-lg text-brand-100 leading-relaxed">{loc.intro}</p>
              <div className="mt-8 flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="sm:flex-1 rounded-none bg-white text-brand-800 px-8 py-4 font-semibold uppercase tracking-widest text-xs text-center shadow-lg hover:bg-brand-50 transition whitespace-nowrap"
                  >
                    Get {loc.city} Quotation →
                  </Link>
                  <a
                    href={whatsappLink(`Hi SVR, I need RCC hume pipes delivered to ${loc.city}. Please share pricing.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:flex-1 rounded-none bg-[#25D366] hover:bg-[#1EBE5D] text-white px-8 py-4 font-semibold uppercase tracking-widest text-xs text-center transition whitespace-nowrap"
                  >
                    💬 WhatsApp
                  </a>
                </div>
                <a
                  href={telLink}
                  className="w-full rounded-none border-2 border-white/30 hover:border-white text-white px-8 py-4 font-semibold uppercase tracking-widest text-xs text-center transition whitespace-nowrap"
                >
                  ☎ {site.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Right: instant estimator */}
            <div className="relative w-full">
              <div className="absolute -inset-6 bg-gradient-to-br from-brand-500/25 via-transparent to-brand-600/10 rounded-lg blur-2xl pointer-events-none" />
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
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whyChooseUs.slice(0, 6).map((w) => (
              <div key={w.title} className="border border-ivory-300 bg-ivory-50 p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-700">
                  {w.metric}
                </div>
                <h3 className="mt-2 font-serif text-lg font-bold text-steel-900">{w.title}</h3>
                <p className="mt-2 text-sm text-steel-700 leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/products/rcc-hume-pipes" className="btn-gold">
              View pipe sizes & specifications →
            </Link>
          </div>
        </Container>
      </section>

      {/* LOCAL FAQ */}
      <section className="py-12 lg:py-20 bg-ivory-100">
        <Container>
          <SectionHeading eyebrow="FAQ" title={`Hume pipes in ${loc.city} — questions`} />
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
          <div className="rounded-none border border-ivory-300 shadow-classic p-6 lg:p-8">
            <ContactForm productContext={`Hume Pipes — ${loc.city}`} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
