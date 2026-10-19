import Link from "next/link";
import { Container } from "./Container";
import { telLink, whatsappLink, site } from "@/lib/site";
import { PipelineFlow } from "./SpunPipe";
import { ArrowIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-steel-950 text-white">
      <PipelineFlow className="absolute inset-x-0 top-0 h-10 opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(2,132,199,0.18),transparent)]" />

      <Container className="relative py-20 lg:py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs font-semibold text-brand-300 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
          Ready to Ship
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight tracking-tightest">
          Let's build your next project<br />
          <span className="bg-gradient-to-r from-brand-300 to-brand-600 bg-clip-text text-transparent font-medium">together.</span>
        </h2>
        <p className="max-w-2xl mx-auto text-ivory-200/80 text-lg mb-10">
          Get a factory-direct quotation for RCC hume pipes from Hyderabad's most trusted
          heritage manufacturer. Fast dispatch across Telangana, AP and Karnataka.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/contact"
            className="btn-shimmer group inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white px-7 py-3.5 font-semibold shadow-gold transition"
          >
            Request quotation
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={telLink}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 ring-1 ring-white/15 text-white px-7 py-3.5 font-semibold backdrop-blur transition"
          >
            <PhoneIcon /> {site.phoneDisplay}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 ring-1 ring-white/15 text-white px-7 py-3.5 font-semibold backdrop-blur transition"
          >
            <WhatsAppIcon className="h-5 w-5 text-[#25D366]" /> WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
