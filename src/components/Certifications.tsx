const items = [
  { code: "ISO 9001", label: "Quality System", desc: "Quality Management" },
  { code: "GHMC", label: "Empanelled Vendor", desc: "Municipal supply" },
  { code: "HMDA", label: "Approved Supplier", desc: "Metro Development" },
  { code: "PWD Telangana", label: "Registered", desc: "Class-I contractor" },
];

export function Certifications() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-ivory-300 border border-ivory-300 bg-white">
      {items.map((it) => (
        <div
          key={it.code}
          className="group p-5 lg:p-6 text-center hover:bg-brand-50 transition"
        >
          <div className="font-serif text-lg lg:text-xl font-bold text-steel-900 tracking-tightest group-hover:text-brand-700">
            {it.code}
          </div>
          <div className="mt-1 text-xs uppercase tracking-widest text-brand-700">{it.label}</div>
          <div className="mt-1 text-[11px] text-steel-500">{it.desc}</div>
        </div>
      ))}
    </div>
  );
}
