"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: string;
};

function Counter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              setCount(Math.floor(p * target));
              if (p < 1) requestAnimationFrame(tick);
              else setCount(target);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString("en-IN")}</span>;
}

export function StatsCounter({ stats, light = false }: { stats: Stat[]; light?: boolean }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-ivory-300/40 border border-ivory-300/40">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={
            (light ? "bg-white/5" : "bg-white") +
            " min-w-0 p-4 sm:p-6 lg:p-8 text-center group hover:bg-brand-50 transition"
          }
        >
          {s.icon && (
            <div
              className={
                "mb-3 mx-auto w-11 h-11 rounded-sm flex items-center justify-center text-xl transition " +
                (light
                  ? "bg-brand-500/20 text-brand-400 group-hover:bg-brand-500 group-hover:text-white"
                  : "bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white")
              }
            >
              {s.icon}
            </div>
          )}
          <div
            className={
              "font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tightest break-words " +
              (light ? "text-white" : "text-steel-900")
            }
          >
            {s.prefix}
            <Counter target={s.value} />
            {s.suffix}
          </div>
          <div className={"mt-1 text-xs uppercase tracking-widest " + (light ? "text-ivory-200/70" : "text-steel-500")}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
