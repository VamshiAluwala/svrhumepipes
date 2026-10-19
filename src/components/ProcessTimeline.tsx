const steps = [
  { n: "01", title: "Raw Material Inspection", desc: "OPC 53 cement, TMT Fe500, graded aggregates weigh-batched." },
  { n: "02", title: "Cage Fabrication", desc: "Reinforcement cage spot-welded to design drawings." },
  { n: "03", title: "Spun-Casting", desc: "Centrifugal spinning at controlled RPM for perfect compaction." },
  { n: "04", title: "28-Day Water Curing", desc: "Full immersion curing tanks. No shortcuts on strength." },
  { n: "05", title: "Batch Testing", desc: "3-edge bearing + hydrostatic test in our own QC lab." },
  { n: "06", title: "Quality Stamping & Dispatch", desc: "Marked, palletised and dispatched by own trailer fleet." },
];

export function ProcessTimeline() {
  return (
    <div className="relative">
      <div className="hidden lg:block absolute left-0 right-0 top-16 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
      <div className="grid gap-6 lg:grid-cols-6">
        {steps.map((s) => (
          <div key={s.n} className="relative text-center group">
            <div className="mx-auto w-16 h-16 rounded-full bg-white border-2 border-brand-500 text-brand-700 font-serif text-xl font-bold flex items-center justify-center relative z-10 shadow-md group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-600 transition">
              {s.n}
            </div>
            <h3 className="mt-4 font-serif text-base font-bold text-steel-900 tracking-tight">
              {s.title}
            </h3>
            <p className="mt-2 text-xs text-steel-700 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
