import Image from "next/image";
import { CheckIcon, MapPinIcon } from "./Icons";

const projects = [
  {
    name: "Sushee Infra",
    logo: "/images/clients/sushee.png",
    title: "General Civil & Irrigation Works",
    scope: "Major RCC hume pipe supplier — irrigation & general civil construction",
    location: "Telangana",
    year: "2024",
    category: "Irrigation & Civil",
    featured: true,
  },
  {
    name: "HMDA",
    logo: "/images/clients/hmda.png",
    title: "Urban Infrastructure Works",
    scope: "RCC hume pipes for road, culvert & drainage works",
    location: "Hyderabad",
    year: "2024",
    category: "Urban Infrastructure",
    featured: false,
  },
  {
    name: "Modi Builders",
    logo: "/images/clients/modi.png",
    title: "Township Drainage & Sewerage",
    scope: "RCC pipe supply for residential township projects",
    location: "Hyderabad",
    year: "2023",
    category: "Real Estate",
    featured: false,
  },
  {
    name: "Vertex Construction",
    logo: "/images/clients/vertex.png",
    title: "Civil Construction Supply",
    scope: "RCC hume pipe supply for civil construction projects",
    location: "Telangana",
    year: "2023",
    category: "Civil Construction",
    featured: false,
  },
];

export function ProjectShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {projects.map((p) => (
        <article
          key={p.name}
          className="group relative rounded-2xl bg-white border border-ivory-300 hover:border-brand-300 hover:shadow-classic hover:-translate-y-0.5 transition duration-300 overflow-hidden flex flex-col"
        >
          {/* Client logo band */}
          <div className="relative h-28 bg-white border-b border-ivory-200 flex items-center justify-center px-6">
            <Image
              src={p.logo}
              alt={`${p.name} logo`}
              width={240}
              height={120}
              className="max-h-14 w-auto object-contain opacity-90 group-hover:opacity-100 transition"
            />
            {p.featured && (
              <span className="absolute top-3 right-3 rounded-full bg-brand-600 text-white text-[11px] font-semibold px-2.5 py-1">
                Major Supplier
              </span>
            )}
          </div>

          <div className="p-5 flex flex-col flex-1">
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
              <span className="text-brand-700">{p.category}</span>
              <span className="text-steel-500">{p.year}</span>
            </div>
            <h3 className="mt-2 font-serif text-lg font-bold text-steel-900 tracking-tightest group-hover:text-brand-700 leading-tight">
              {p.title}
            </h3>
            <div className="mt-3 space-y-1 text-xs text-steel-700">
              <div className="flex gap-2"><CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />{p.scope}</div>
              <div className="flex gap-2"><MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />{p.location}</div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
