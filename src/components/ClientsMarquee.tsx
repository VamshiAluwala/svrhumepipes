const clients = [
  "GHMC",
  "HMDA",
  "HMWSSB",
  "PWD Telangana",
  "AP Irrigation",
  "NHAI",
  "L&T",
  "Megha Engineering",
  "NCC Ltd",
  "Nagarjuna Construction",
  "Shapoorji Pallonji",
  "IVRCL",
];

export function ClientsMarquee() {
  const doubled = [...clients, ...clients];
  return (
    <div className="relative overflow-hidden bg-steel-900 text-ivory-200 py-6 border-y border-brand-500/30">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-steel-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-steel-900 to-transparent z-10 pointer-events-none" />
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {doubled.map((c, i) => (
          <div key={i} className="flex items-center gap-3 text-lg font-serif font-semibold tracking-widest text-ivory-200/70 hover:text-brand-400 transition">
            <span className="text-brand-500">◆</span>
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}
