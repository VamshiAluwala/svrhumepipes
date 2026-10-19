import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { HeroImage } from "@/components/HeroImage";
import { ZoomableFigure } from "@/components/ZoomableFigure";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SpunPipe } from "@/components/SpunPipe";

export const metadata: Metadata = buildMetadata({
  title: "Gallery - Factory, Products & Projects",
  description:
    "Photo gallery of SVR Hume Pipes manufacturing facility, RCC hume pipes, precast concrete products and site delivery in Hyderabad.",
  path: "/gallery",
  keywords: ["hume pipes factory photos", "rcc pipe manufacturing hyderabad photos"],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
];

type GalleryItem = { title: string; category: string; variant: any; src?: string; zoom?: boolean };

const galleryData: Record<string, GalleryItem[]> = {
  Factory: [
    { title: "Stockyard: Finished Pipes", category: "Factory", variant: "pipes", src: "/images/Gallary6.jpeg" },
    { title: "Storage Yard Overview", category: "Factory", variant: "factory", src: "/images/Gallary7.jpeg" },
    { title: "Pipe Handling & Crane Loading", category: "Factory", variant: "worker", src: "/images/Gallary8.jpeg" },
    { title: "Hume Pipes: Site Dispatch", category: "Factory", variant: "pipes", src: "/images/Gallary1.jpeg" },
    { title: "Bulk Pipe Delivery", category: "Factory", variant: "pipes", src: "/images/Gallary2.jpeg" },
    { title: "Loaded Trailer: Site Supply", category: "Factory", variant: "pipes", src: "/images/Gallary3.jpeg" },
    { title: "Factory Signage: Shamirpet Unit", category: "Factory", variant: "factory", src: "/images/Gallary10.jpeg" },
  ],
  Products: [
    { title: "RCC Hume Pipes: Stockyard", category: "Products", variant: "pipes", src: "/images/product-1.jpg" },
    { title: "Finished Hume Pipes: Yard", category: "Products", variant: "pipes", src: "/images/product-2.jpg" },
    { title: "Spun Concrete Poles & Pipes", category: "Products", variant: "pipes", src: "/images/Gallary9.jpeg" },
    { title: "Large-diameter Hume Pipes", category: "Products", variant: "pipes", src: "/images/Gallary4.jpeg" },
    { title: "NP3 Hume Pipes", category: "Products", variant: "pipes", src: "/images/Gallary5.jpeg" },
    { title: "SVR Hume Pipes: RCC Pipes (IS 458:2003)", category: "Products", variant: "pipes", src: "/images/Gallary11.jpeg", zoom: true },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="relative isolate overflow-hidden bg-steel-950 text-white py-10 lg:py-12">
        <SpunPipe className="-right-24 -top-20 h-[320px] w-[320px] opacity-30 lg:-right-16 lg:-top-32 lg:h-[560px] lg:w-[560px]" />
        <Container className="relative text-center">
          <h1 className="font-display text-3xl lg:text-4xl font-bold">Gallery</h1>
        </Container>
      </section>

      {Object.entries(galleryData).map(([cat, items], idx) => (
        <section key={cat} className={`py-10 lg:py-16 ${idx % 2 === 0 ? "bg-white" : "bg-steel-50"}`}>
          <Container>
            <SectionHeading eyebrow={cat} title={`Our ${cat}`} />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((g) =>
                g.zoom && g.src ? (
                  <ZoomableFigure
                    key={g.title}
                    src={g.src}
                    title={g.title}
                    category={g.category}
                    width={1090}
                    height={618}
                  />
                ) : (
                <figure
                  key={g.title}
                  className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition"
                >
                  {g.src ? (
                    <div className="relative aspect-[4/3] bg-steel-800 overflow-hidden">
                      <Image
                        src={g.src}
                        alt={g.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <HeroImage
                      alt={g.title}
                      variant={g.variant}
                      className="aspect-[4/3] rounded-xl"
                    />
                  )}
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-steel-900/90 via-steel-900/40 to-transparent p-4 text-white">
                    <div className="text-xs uppercase tracking-wider text-brand-200">{g.category}</div>
                    <div className="font-semibold">{g.title}</div>
                  </figcaption>
                </figure>
                )
              )}
            </div>
          </Container>
        </section>
      ))}

      <CTASection />
    </>
  );
}
