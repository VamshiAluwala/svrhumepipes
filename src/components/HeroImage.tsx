import Image from "next/image";
import { cn } from "@/lib/cn";

type Variant = "pipes" | "factory" | "worker" | "concrete" | "drainage" | "custom" | "stack" | "site";

const imageMap: Record<Variant, { src: string; alt: string }> = {
  pipes: { src: "/images/pipes.jpg", alt: "Stack of large RCC hume concrete pipes at SVR stockyard" },
  stack: { src: "/images/Gallary6.jpeg", alt: "Finished RCC hume pipes in the SVR stockyard" },
  factory: { src: "/images/factory.jpg", alt: "SVR Hume Pipes spun-casting factory in Hyderabad" },
  worker: { src: "/images/Gallary8.jpeg", alt: "Crane loading RCC hume pipes at the SVR plant" },
  concrete: { src: "/images/Gallary4.jpeg", alt: "Large-diameter RCC hume pipes made by SVR" },
  drainage: { src: "/images/Gallary1.jpeg", alt: "SVR hume pipes dispatched to a drainage site" },
  custom: { src: "/images/Gallary5.jpeg", alt: "NP3 RCC hume pipes at the SVR yard" },
  site: { src: "/images/Gallary3.jpeg", alt: "Trailer loaded with SVR hume pipes for site supply" },
};

type Props = {
  alt?: string;
  className?: string;
  variant?: Variant;
  rounded?: boolean;
  priority?: boolean;
  overlay?: boolean;
};

export function HeroImage({
  alt,
  className,
  variant = "pipes",
  rounded = false,
  priority = false,
  overlay = true,
}: Props) {
  const img = imageMap[variant];
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-steel-800 shadow-classic group",
        rounded && "rounded-2xl",
        className
      )}
    >
      <Image
        src={img.src}
        alt={alt ?? img.alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority={priority}
      />
      {overlay && (
        <>
          <div className="absolute inset-0 bg-gradient-to-tr from-steel-900/60 via-steel-900/20 to-brand-600/10" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-steel-900/70 to-transparent" />
        </>
      )}
      <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-steel-900 text-xs font-semibold shadow-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
        SVR Hume Pipes
      </div>
    </div>
  );
}
