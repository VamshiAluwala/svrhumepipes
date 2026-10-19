import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
  as?: "h1" | "h2" | "h3";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  className,
  as: As = "h2",
  light = false,
}: Props) {
  return (
    <div className={cn(center && "text-center", "mx-auto max-w-3xl", className)}>
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-4 ring-1",
            light
              ? "bg-white/5 text-brand-300 ring-white/10"
              : "bg-brand-50 text-brand-700 ring-brand-600/15"
          )}
        >
          <span className={cn("h-1.5 w-1.5 rounded-full", light ? "bg-brand-400" : "bg-brand-500")} />
          {eyebrow}
        </div>
      )}
      <As
        className={cn(
          "font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tightest",
          light ? "text-white" : "text-steel-900"
        )}
      >
        {title}
      </As>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed max-w-2xl",
            center && "mx-auto",
            light ? "text-ivory-200/80" : "text-steel-700"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
