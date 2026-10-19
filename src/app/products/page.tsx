import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { HeroImage } from "@/components/HeroImage";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { products } from "@/data/products";
import { SpunPipe } from "@/components/SpunPipe";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "RCC Hume Pipes & Spun Pipes - Sizes, Classes, Specs",
  description:
    "RCC hume pipes (spun concrete / cement pipes) by SVR Hyderabad. NP2, NP3 & NP4, 150-2200 mm, IS 458:2003. Sizes, wall thickness and weights; price on request.",
  path: "/products",
  keywords: [
    "rcc hume pipes price hyderabad",
    "hume pipes sizes",
    "np2 np3 hume pipes",
    "rcc pipes hyderabad",
  ],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
];

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="relative isolate overflow-hidden bg-steel-950 text-white py-14 lg:py-20">
        <SpunPipe className="-right-24 -top-20 h-[320px] w-[320px] opacity-30 lg:-right-16 lg:-top-32 lg:h-[560px] lg:w-[560px]" />
        <Container className="relative text-center">
          <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            RCC Hume Pipes
          </h1>
          <p className="max-w-2xl mx-auto text-ivory-200/80 text-lg">
            ISO-certified RCC hume pipes in NP2, NP3 and NP4 classes, 150 mm to 2200 mm
            diameter, all manufactured to IS 458:2003 at our Hyderabad plant.
          </p>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="grid gap-10 lg:gap-16">
            {products.map((p, i) => (
              <article
                key={p.slug}
                className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 ? "lg:[direction:rtl]" : ""}`}
              >
                <div className="lg:[direction:ltr]">
                  <HeroImage
                    alt={p.name}
                    variant={
                      (["pipes", "concrete", "drainage", "custom"] as const)[i % 4]
                    }
                    className="aspect-[4/3]"
                  />
                </div>
                <div className="lg:[direction:ltr]">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2">
                    {p.category} · {p.standard}
                  </div>
                  <h2 className="font-display text-3xl font-bold text-steel-900 mb-3">
                    {p.name}
                  </h2>
                  <p className="text-steel-700 leading-relaxed mb-5">{p.description}</p>
                  <ul className="space-y-2 mb-6">
                    {p.features.slice(0, 5).map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-steel-700">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <Link
                      href={`/products/${p.slug}`}
                      className="rounded-md bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 font-semibold"
                    >
                      View Details
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-md border border-steel-300 hover:border-brand-600 hover:text-brand-700 text-steel-700 px-6 py-3 font-semibold"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Sizes overview table */}
      <section className="py-16 bg-steel-50">
        <Container>
          <SectionHeading
            eyebrow="Specifications"
            title="Standard hume pipe sizes"
            subtitle="Standard sizes we manufacture. Custom sizes and lengths available on order."
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
                </tr>
              </thead>
              <tbody className="divide-y divide-steel-100">
                {products[0].sizes.map((s) => (
                  <tr key={s.id} className="hover:bg-brand-50/50">
                    <td className="px-4 py-3 font-semibold">{s.diameterMM}</td>
                    <td className="px-4 py-3">{s.lengthM}</td>
                    <td className="px-4 py-3">{s.wallThicknessMM}</td>
                    <td className="px-4 py-3">{s.weightKg}</td>
                    <td className="px-4 py-3">
                      <span className="rounded bg-brand-100 text-brand-800 px-2 py-0.5 text-xs font-bold">
                        {s.class}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
