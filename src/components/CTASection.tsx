import Link from "next/link";
import { Container } from "./Container";
import { telLink, whatsappLink, site } from "@/lib/site";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-steel-900 text-white">
      <div className="absolute inset-0 bg-noise opacity-40" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl" />

      <Container className="relative py-20 lg:py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-300 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
          Ready to Ship
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight tracking-tightest">
          Let's build your next project<br />
          <span className="text-brand-500 italic font-medium">together.</span>
        </h2>
        <p className="max-w-2xl mx-auto text-ivory-200/80 text-lg mb-10">
          Get a factory-direct quotation for RCC hume pipes from Hyderabad's most trusted
          heritage manufacturer. Fast dispatch across Telangana, AP and Karnataka.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-none bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 font-semibold uppercase tracking-widest text-sm shadow-gold transition"
          >
            Request Quotation →
          </Link>
          <a
            href={telLink}
            className="rounded-none border-2 border-ivory-200/30 hover:border-brand-500 text-white hover:bg-brand-500 hover:text-steel-900 px-8 py-4 font-semibold uppercase tracking-widest text-sm transition"
          >
            ☎ {site.phoneDisplay}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-none bg-[#25D366] hover:bg-[#1EBE5D] text-white px-8 py-4 font-semibold uppercase tracking-widest text-sm transition"
          >
            💬 WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
