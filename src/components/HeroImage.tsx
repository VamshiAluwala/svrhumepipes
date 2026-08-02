import Image from "next/image";
import { cn } from "@/lib/cn";

type Variant = "pipes" | "factory" | "worker" | "concrete" | "drainage" | "custom" | "stack" | "site";

const imageMap: Record<Variant, { src: string; alt: string }> = {
  pipes: {
    src: "/images/pipes.jpg",
    alt: "Stack of large RCC hume concrete pipes at SVR stockyard",
  },
  stack: {
    src: "https://images.unsplash.com/photo-1590756254933-2873d72a83b6?auto=format&fit=crop&w=1600&q=80",
    alt: "Concrete hume pipes stockyard",
  },
  factory: {
    src: "/images/factory.jpg",
    alt: "SVR Hume Pipes spun-casting factory in Hyderabad",
  },
  worker: {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80",
    alt: "Construction site with worker",
  },
  concrete: {
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    alt: "Precast concrete elements",
  },
  drainage: {
    src: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1600&q=80",
    alt: "Concrete drainage pipe installation",
  },
  custom: {
    src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80",
    alt: "Industrial precast concrete products",
  },
  site: {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    alt: "Highway construction site",
  },
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
      <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-sm bg-brand-600/95 backdrop-blur px-2.5 py-1 text-white text-[10px] font-bold uppercase tracking-widest shadow-lg">
        <span className="w-1 h-1 rounded-full bg-white" />
        SVR Hume Pipes
      </div>
    </div>
  );
}
