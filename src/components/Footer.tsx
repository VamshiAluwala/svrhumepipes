import Link from "next/link";
import { Container } from "./Container";
import { site, telLink, whatsappLink } from "@/lib/site";
import { products } from "@/data/products";
import { locations } from "@/data/locations";
import Image from "next/image";
import { ClockIcon, InstagramIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-steel-950 text-ivory-200 relative border-t border-white/5">

      <Container className="relative py-12 lg:py-16 grid gap-10 grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <Image src="/images/logo.png" alt="" width={48} height={48} className="h-12 w-12 rounded-xl bg-white p-1 object-contain" />
            <div>
              <div className="font-serif font-bold text-white text-xl leading-tight">
                Sri Venkateshwara
              </div>
              <div className="text-xs text-ivory-200/60">Hume Pipes · Est. 2009</div>
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
                className="w-10 h-10 rounded-xl ring-1 ring-white/10 hover:bg-white/10 flex items-center justify-center text-ivory-200 hover:text-white text-xs font-bold uppercase transition"
              >
                {name === "instagram" ? <InstagramIcon /> : name.slice(0, 2)}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-serif text-lg font-semibold mb-2">Explore</h3>
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

        <div className="col-span-2 lg:col-span-1">
          <h3 className="text-white font-serif text-lg font-semibold mb-2">Get in Touch</h3>
          <ul className="space-y-3 text-sm text-ivory-200/80">
            <li className="flex gap-3">
              <MapPinIcon className="h-4 w-4 mt-0.5 shrink-0 text-brand-400" />
              <span>
                {site.address.street},<br />
                {site.address.locality}, {site.address.city} - {site.address.postalCode}
                <br />
                {site.address.region}, India
              </span>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="h-4 w-4 mt-0.5 shrink-0 text-brand-400" />
              <a href={telLink} className="hover:text-brand-400 transition">{site.phoneDisplay}</a>
            </li>
            <li className="flex gap-3">
              <MailIcon className="h-4 w-4 mt-0.5 shrink-0 text-brand-400" />
              <a href={`mailto:${site.email}`} className="hover:text-brand-400 transition break-all">{site.email}</a>
            </li>
            <li className="flex gap-3">
              <WhatsAppIcon className="h-4 w-4 mt-0.5 shrink-0 text-brand-400" />
              <a href={whatsappLink()} className="hover:text-brand-400 transition" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </li>
            <li className="flex gap-3">
              <ClockIcon className="h-4 w-4 mt-0.5 shrink-0 text-brand-400" />
              <span>{site.hours.weekdays}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="relative border-t border-ivory-200/10">
        <Container className="py-5">
          <div className="text-sm font-semibold text-white mb-3">
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
            Telangana&apos;s trusted RCC hume pipes manufacturer · IS 458:2003 · ISO certified
          </div>
        </Container>
      </div>
    </footer>
  );
}
