"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Container } from "./Container";
import { site, telLink, mailLink } from "@/lib/site";
import { cn } from "@/lib/cn";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement top-bar */}
      <div className="hidden lg:block bg-steel-900 text-ivory-200 text-xs border-b border-brand-600/30">
        <Container className="flex items-center justify-between py-2.5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            <span className="tracking-wider">
              ISO 9001 Certified · IS 458:2003 · Serving India since 2009
            </span>
          </div>
          <div className="flex items-center gap-5 tracking-wide">
            <a href={telLink} className="hover:text-brand-400 transition">
              ☎ {site.phoneDisplay}
            </a>
            <a href={mailLink} className="hover:text-brand-400 transition">
              ✉ {site.email}
            </a>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              Open 24 hours
            </span>
          </div>
        </Container>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all border-b",
          scrolled
            ? "bg-ivory-50/95 backdrop-blur-md shadow-md border-brand-500/20"
            : "bg-ivory-50 border-transparent"
        )}
      >
        <Container className="flex h-16 items-center justify-between lg:h-24">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="SVR Hume Pipes logo"
              width={56}
              height={56}
              priority
              className="h-11 w-11 lg:h-14 lg:w-14 object-contain"
            />
            <div className="leading-tight">
              <div className="font-serif font-bold text-steel-900 text-xl lg:text-2xl tracking-tightest">
                Sri Venkateshwara
              </div>
              <div className="text-[10px] lg:text-[11px] text-steel-700 uppercase tracking-widest">
                Hume Pipes
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-semibold uppercase tracking-wider text-steel-700 hover:text-brand-700 transition group"
              >
                {item.label}
                <span className="absolute inset-x-4 bottom-0 h-px bg-brand-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 rounded-none bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest shadow-gold transition"
            >
              Request Quote →
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden inline-flex items-center justify-center rounded-sm p-2 text-steel-800 hover:bg-ivory-200"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </Container>

        {open && (
          <div className="lg:hidden border-t border-ivory-300 bg-ivory-50">
            <Container className="py-4 flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-sm text-base font-semibold uppercase tracking-wider text-steel-700 hover:bg-ivory-200 hover:text-brand-700 border-b border-ivory-200"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-none bg-brand-600 px-4 py-3.5 text-center text-sm font-bold uppercase tracking-widest text-white shadow-gold"
              >
                Request Quote →
              </Link>
              <a
                href={telLink}
                className="mt-2 rounded-none border border-steel-300 px-4 py-3.5 text-center text-sm font-semibold text-steel-900"
              >
                ☎ Call {site.phoneDisplay}
              </a>
            </Container>
          </div>
        )}
      </header>
    </>
  );
}
