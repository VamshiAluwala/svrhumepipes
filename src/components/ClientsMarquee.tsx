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
    <div className="group bg-steel-950 text-ivory-200 py-7 border-y border-white/5">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max gap-14 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {doubled.map((c, i) => (
            <div key={i} aria-hidden={i >= clients.length} className="text-lg font-semibold tracking-tight text-ivory-200/50 hover:text-white transition">
              {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
