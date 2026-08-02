import Link from "next/link";
import { Container } from "./Container";
import { site, telLink, whatsappLink } from "@/lib/site";
import { products } from "@/data/products";
import { locations } from "@/data/locations";

export function Footer() {
  return (
    <footer className="bg-steel-900 text-ivory-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" />

      <Container className="relative py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-gradient-to-br from-steel-800 to-steel-900 text-brand-500 font-serif font-black text-xl shadow-lg border border-brand-500/40">
              SVR
            </div>
            <div>
              <div className="font-serif font-bold text-white text-xl leading-tight">
                Sri Venkateshwara
              </div>
              <div className="text-[11px] text-brand-400 uppercase tracking-widest">Hume Pipes · Est. 2009</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-ivory-200/80 mb-5">
            Hyderabad's most trusted manufacturer of ISO-certified RCC hume pipes
            — serving PWD, GHMC, HMDA, HMWSSB and India's leading infrastructure
            builders.
          </p>
          <div className="flex gap-2">
            {Object.entries(site.social).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="w-10 h-10 rounded-sm border border-ivory-200/20 hover:border-brand-500 hover:bg-brand-600 flex items-center justify-center text-ivory-200 hover:text-white text-xs font-bold uppercase transition"
              >
                {name === "facebook" && "f"}
                {name === "instagram" && "ig"}
                {name === "linkedin" && "in"}
                {name === "youtube" && "yt"}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-serif text-lg font-semibold mb-2">Explore</h3>
          <div className="h-px w-10 bg-brand-500 mb-4" />
          <ul className="space-y-2.5 text-sm text-ivory-200/80">
            <li><Link href="/" className="hover:text-brand-400 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-brand-400 transition">About Us</Link></li>
            <li><Link href="/products" className="hover:text-brand-400 transition">All Products</Link></li>
            <li><Link href="/gallery" className="hover:text-brand-400 transition">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-brand-400 transition">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-serif text-lg font-semibold mb-2">Our Products</h3>
          <div className="h-px w-10 bg-brand-500 mb-4" />
          <ul className="space-y-2.5 text-sm text-ivory-200/80">
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`} className="hover:text-brand-400 transition">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-serif text-lg font-semibold mb-2">Get in Touch</h3>
          <div className="h-px w-10 bg-brand-500 mb-4" />
          <ul className="space-y-3 text-sm text-ivory-200/80">
            <li className="flex gap-3">
              <span className="text-brand-500 shrink-0">◆</span>
              <span>
                {site.address.street},<br />
                {site.address.locality}, {site.address.city} - {site.address.postalCode}
                <br />
                {site.address.region}, India
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-500 shrink-0">☎</span>
              <a href={telLink} className="hover:text-brand-400 transition">{site.phoneDisplay}</a>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-500 shrink-0">✉</span>
              <a href={`mailto:${site.email}`} className="hover:text-brand-400 transition break-all">{site.email}</a>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-500 shrink-0">💬</span>
              <a href={whatsappLink()} className="hover:text-brand-400 transition" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-500 shrink-0">⏱</span>
              <span>{site.hours.weekdays}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="relative border-t border-ivory-200/10">
        <Container className="py-5">
          <div className="text-[11px] font-bold uppercase tracking-widest text-brand-400 mb-3">
            Areas We Serve
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-ivory-200/70">
            {locations.map((l) => (
              <Link
                key={l.slug}
                href={`/hume-pipes/${l.slug}`}
                className="hover:text-brand-400 transition"
              >
                Hume Pipes in {l.city}
              </Link>
            ))}
          </div>
        </Container>
      </div>

      <div className="relative border-t border-ivory-200/10">
        <Container className="py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-ivory-200/50">
          <div className="tracking-wider">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </div>
          <div className="tracking-wider text-center md:text-right">
            <span className="text-brand-500">◆</span> Telangana's Trusted RCC Hume Pipes Manufacturer<span className="text-brand-500">◆</span> IS 458:2003 ISO Certified
          </div>
        </Container>
      </div>
    </footer>
  );
}
