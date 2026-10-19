import { cn } from "@/lib/cn";

// RCC pipe end-on, mid spin-cast: concrete wall, a rotating steel cage and
// centrifugal motion arcs. Pure SVG + CSS transforms (GPU-composited).
const bars = Array.from({ length: 28 }, (_, i) => (i / 28) * Math.PI * 2);

export function SpunPipe({ className, id = "sp" }: { className?: string; id?: string }) {
  return (
    <div className={cn("pointer-events-none absolute", className)} aria-hidden="true">
      <svg viewBox="0 0 400 400" className="h-full w-full">
        <defs>
          <radialGradient id={`${id}-wall`} cx="50%" cy="50%" r="50%">
            <stop offset="62%" stopColor="#3f3f46" />
            <stop offset="80%" stopColor="#71717a" />
            <stop offset="100%" stopColor="#27272a" />
          </radialGradient>
          <radialGradient id={`${id}-bore`} cx="42%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#0c4a6e" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#09090b" />
          </radialGradient>
          <pattern id={`${id}-grain`} width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.6" fill="#fff" opacity="0.08" />
            <circle cx="4" cy="3.5" r="0.5" fill="#000" opacity="0.2" />
          </pattern>
        </defs>

        {/* concrete wall */}
        <circle cx="200" cy="200" r="196" fill={`url(#${id}-wall)`} />
        <circle cx="200" cy="200" r="196" fill={`url(#${id}-grain)`} />
        <circle cx="200" cy="200" r="196" fill="none" stroke="#a1a1aa" strokeOpacity="0.35" strokeWidth="1.5" />

        {/* steel cage, spins like the mould */}
        <g className="spin-slow">
          <circle cx="200" cy="200" r="170" fill="none" stroke="#38bdf8" strokeOpacity="0.45" strokeWidth="1.2" strokeDasharray="2 5" />
          {bars.map((a, i) => (
            <circle key={i} cx={200 + Math.cos(a) * 170} cy={200 + Math.sin(a) * 170} r="3.2" fill="#7dd3fc" />
          ))}
        </g>

        {/* bore */}
        <circle cx="200" cy="200" r="146" fill={`url(#${id}-bore)`} />
        <circle cx="200" cy="200" r="146" fill="none" stroke="#e4e4e7" strokeOpacity="0.25" strokeWidth="1" />

        {/* centrifugal motion arcs */}
        <g className="spin-fast" fill="none" stroke="#7dd3fc" strokeLinecap="round">
          <path d="M200 74 A126 126 0 0 1 318 156" strokeOpacity="0.5" strokeWidth="2" />
          <path d="M200 326 A126 126 0 0 1 82 244" strokeOpacity="0.5" strokeWidth="2" />
          <path d="M200 100 A100 100 0 0 1 286 150" strokeOpacity="0.25" strokeWidth="1.5" />
          <path d="M200 300 A100 100 0 0 1 114 250" strokeOpacity="0.25" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

// A jointed pipeline with water running through it, drainage, literally.
export function PipelineFlow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className={cn("pointer-events-none w-full", className)} aria-hidden="true">
      <rect x="0" y="14" width="1200" height="32" rx="16" fill="#27272a" />
      <rect x="0" y="14" width="1200" height="32" rx="16" fill="none" stroke="#52525b" />
      {/* socket & spigot joints every 2.5 m */}
      {Array.from({ length: 9 }, (_, i) => (
        <rect key={i} x={120 + i * 120} y="10" width="10" height="40" rx="3" fill="#3f3f46" stroke="#52525b" />
      ))}
      <path className="water-flow" d="M0 30 H1200" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" strokeDasharray="40 30" />
    </svg>
  );
}
