import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { HeroImage } from "@/components/HeroImage";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  productSchema,
} from "@/lib/schema";
import { products, getProduct } from "@/data/products";
import { telLink, whatsappLink } from "@/lib/site";
import { SpunPipe } from "@/components/SpunPipe";
import { ArrowIcon, CheckIcon, FactoryIcon, PhoneIcon, TruckIcon, WhatsAppIcon, ZapIcon } from "@/components/Icons";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type Params = { params: { slug: string } };

export function generateMetadata({ params }: Params): Metadata {
  const p = getProduct(params.slug);
  if (!p) return {};
  return buildMetadata({
    title: `${p.name} (Spun / Cement Pipes) - Hyderabad`,
    description: `${p.name}: RCC spun and cement concrete pipes by SVR, Hyderabad. NP2, NP3 & NP4, 150-2200 mm, IS 458:2003. Price on request, delivery across Telangana.`,
    path: `/products/${p.slug}`,
    keywords: [
      `${p.name.toLowerCase()} hyderabad`,
      `${p.name.toLowerCase()} manufacturer`,
      `${p.name.toLowerCase()} price`,
      `buy ${p.name.toLowerCase()} online`,
      p.standard.toLowerCase(),
    ],
    type: "product",
  });
}

export default function ProductPage({ params }: Params) {
  const p = getProduct(params.slug);
  if (!p) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: p.name, path: `/products/${p.slug}` },
  ];

  const related = products.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          productSchema({
            name: p.name,
            slug: p.slug,
            description: p.description,
            category: p.category,
            standard: p.standard,
            materials: p.materials,
            images: p.images,
          }),
          faqSchema(p.faqs),
        ]}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-steel-950 text-white">
        <SpunPipe className="-right-24 -top-20 h-[320px] w-[320px] opacity-30 lg:-right-16 lg:-top-32 lg:h-[560px] lg:w-[560px]" />
        <Container className="relative py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs font-medium text-ivory-200/90 mb-4 backdrop-blur">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
              {p.standard} · ISO Certified
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
              {p.name}
            </h1>
            <p className="mt-3 text-xl text-ivory-200/80">{p.tagline}</p>
            <p className="mt-4 text-ivory-200/80 leading-relaxed">{p.description}</p>
            <div className="mt-7 grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
              <a href="#inquiry" className="btn-shimmer group col-span-2 sm:col-span-1 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white px-6 py-3.5 font-semibold shadow-gold transition">
                Get quotation <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href={telLink} className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 ring-1 ring-white/15 text-white px-6 py-3.5 font-semibold backdrop-blur transition">
                <PhoneIcon /> Call now
              </a>
              <a
                href={whatsappLink(`Hi, I want to enquire about ${p.name}. Please share pricing.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 ring-1 ring-white/15 text-white px-6 py-3.5 font-semibold backdrop-blur transition"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" /> WhatsApp
              </a>
            </div>
          </div>
          <HeroImage
            alt={`${p.name} manufactured by SVR Hume Pipes Hyderabad`}
            variant="pipes"
            className="aspect-square"
          />
        </Container>
      </section>

      {/* FEATURES */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <div className="inline-block rounded-full bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 mb-3">
                Features
              </div>
              <h2 className="font-display text-3xl font-bold text-steel-900 mb-3">
                Built for reliability
              </h2>
              <p className="text-steel-700">
                Every {p.name.toLowerCase()} we manufacture is engineered to outperform
                site-cast pipes on strength, durability and dimensional accuracy.
              </p>
            </div>
            <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
              {p.features.map((f) => (
                <div key={f} className="flex gap-3 rounded-lg border border-steel-200 bg-steel-50 p-4">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-brand-50 text-brand-700 flex items-center justify-center"><CheckIcon className="h-4 w-4" /></div>
                  <div className="text-sm text-steel-700">{f}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SIZES TABLE */}
      {p.sizes.length > 0 && (
        <section id="sizes" className="py-16 bg-steel-50">
          <Container>
            <SectionHeading
              eyebrow="Specifications"
              title="Sizes & specifications"
              subtitle={`Standard sizes for ${p.name}, custom diameters and lengths available on order.`}
            />
            <div className="mt-10 overflow-x-auto rounded-xl bg-white shadow border border-steel-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-700 text-white">
                    <th className="px-4 py-3 text-left">Diameter (mm)</th>
                    <th className="px-4 py-3 text-left">Length (m)</th>
                    <th className="px-4 py-3 text-left">Wall Thickness (mm)</th>
                    <th className="px-4 py-3 text-left">Approx. Weight (kg)</th>
                    <th className="px-4 py-3 text-left">Class</th>
                    <th className="px-4 py-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-steel-100">
                  {p.sizes.map((s) => (
                    <tr key={s.id} className="hover:bg-brand-50/50">
                      <td className="px-4 py-3 font-semibold text-steel-900">{s.diameterMM}</td>
                      <td className="px-4 py-3">{s.lengthM}</td>
                      <td className="px-4 py-3">{s.wallThicknessMM}</td>
                      <td className="px-4 py-3">{s.weightKg}</td>
                      <td className="px-4 py-3">
                        <span className="rounded bg-brand-100 text-brand-800 px-2 py-0.5 text-xs font-bold">
                          {s.class}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <a
                          href={whatsappLink(
                            `Hi, I need pricing for ${p.name} ${s.diameterMM}mm × ${s.lengthM}m (${s.class}).`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-700 font-semibold hover:underline"
                        >
                          Get price
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-steel-500 text-center">
              * Weights are approximate. Specifications conform to {p.standard}.
            </p>
          </Container>
        </section>
      )}

      {/* MATERIALS + PROCESS */}
      <section className="py-16 bg-white">
        <Container className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="inline-block rounded-full bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 mb-3">
              Materials Used
            </div>
            <h2 className="font-display text-3xl font-bold text-steel-900 mb-4">
              Only top-grade raw materials
            </h2>
            <p className="text-steel-700 mb-5">
              We source cement, steel and aggregates from reputed brands with full test
              certificates for every batch.
            </p>
            <ul className="space-y-3">
              {p.materials.map((m) => (
                <li key={m} className="flex gap-3 items-start">
                  <span className="w-2 h-2 rounded-full bg-brand-600 mt-2 shrink-0" />
                  <span className="text-steel-700">{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="inline-block rounded-full bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 mb-3">
              Manufacturing Process
            </div>
            <h2 className="font-display text-3xl font-bold text-steel-900 mb-4">
              9-step spun-casting process
            </h2>
            <ol className="space-y-3">
              {p.manufacturingProcess.map((step, i) => (
                <li key={step} className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div className="text-steel-700 pt-1">{step}</div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* QUALITY */}
      <section className="py-16 bg-steel-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-grid bg-[size:32px_32px] opacity-20" />
        <Container className="relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-full bg-white/10 text-brand-200 text-xs font-semibold px-3 py-1 mb-3">
              Quality Standards
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold">
              Certified. Tested. Guaranteed.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {p.qualityStandards.map((q) => (
              <div key={q} className="rounded-xl bg-white/5 border border-white/10 backdrop-blur p-5">
                <div className="w-10 h-10 rounded-xl bg-brand-500/15 text-brand-300 flex items-center justify-center mb-3">
                  <CheckIcon />
                </div>
                <p className="text-sm text-steel-200 leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* APPLICATIONS */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Applications"
            title="Where our pipes are used"
            subtitle="Trusted across public infrastructure, municipal services and private construction."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {p.applications.map((a, i) => (
              <div
                key={a.title}
                className="group rounded-xl border border-steel-200 hover:border-brand-300 bg-white p-6 hover:shadow-lg transition"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-semibold tabular-nums mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-steel-900 text-lg mb-2 group-hover:text-brand-700">
                  {a.title}
                </h3>
                <p className="text-sm text-steel-700 leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      {p.faqs.length > 0 && (
        <section className="py-16 bg-steel-50">
          <Container>
            <SectionHeading
              eyebrow="FAQs"
              title={`${p.name} - common questions`}
            />
            <div className="mt-10 max-w-3xl mx-auto space-y-3">
              {p.faqs.map((f) => (
                <details key={f.q} className="group rounded-xl border border-steel-200 bg-white p-5 open:shadow-md open:border-brand-200 transition">
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-semibold text-steel-900">
                    <span>{f.q}</span>
                    <span className="text-brand-600 text-xl transition-transform group-open:rotate-45 shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-steel-700 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* INQUIRY FORM */}
      <section id="inquiry" className="py-16 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="inline-block rounded-full bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 mb-3">
                Product Inquiry
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-steel-900 mb-4">
                Get a quotation for {p.name}
              </h2>
              <p className="text-steel-700 mb-6">
                Share your requirement: size, quantity, delivery location and expected
                delivery date. Our sales team will revert within 24 working hours with
                pricing and availability.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <ZapIcon />, label: "Fast reply", value: "Quotation within 24 working hrs" },
                  { icon: <FactoryIcon />, label: "Direct from factory", value: "No middleman - best price" },
                  { icon: <TruckIcon />, label: "Pan South India delivery", value: "Own trailer fleet with hydra unloading" },
                ].map((x) => (
                  <div key={x.label} className="flex gap-3 items-start p-4 rounded-lg bg-brand-50">
                    <div className="text-brand-700">{x.icon}</div>
                    <div>
                      <div className="font-semibold text-steel-900">{x.label}</div>
                      <div className="text-sm text-steel-700">{x.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-steel-200 bg-white shadow-lg p-6 lg:p-8">
              <ContactForm productContext={p.name} />
            </div>
          </div>
        </Container>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
      <section className="py-16 bg-steel-50">
        <Container>
          <SectionHeading eyebrow="Related" title="You may also need" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((r, i) => (
              <Link
                key={r.slug}
                href={`/products/${r.slug}`}
                className="group rounded-xl bg-white shadow-sm hover:shadow-xl border border-steel-100 overflow-hidden transition"
              >
                <HeroImage
                  alt={r.name}
                  variant={(["concrete", "drainage", "custom"] as const)[i % 3]}
                  className="aspect-[4/3] rounded-xl"
                />
                <div className="p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-600">
                    {r.category}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-bold text-steel-900 group-hover:text-brand-700">
                    {r.name}
                  </h3>
                  <p className="mt-2 text-sm text-steel-700 line-clamp-2">{r.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      )}

      <CTASection />
    </>
  );
}
