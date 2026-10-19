"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Container } from "./Container";
import { site, telLink, mailLink } from "@/lib/site";
import { cn } from "@/lib/cn";
import { ArrowIcon, MailIcon, PhoneIcon } from "./Icons";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
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
            <a href={telLink} className="inline-flex items-center gap-1.5 hover:text-brand-400 transition">
              <PhoneIcon className="h-3.5 w-3.5" /> {site.phoneDisplay}
            </a>
            <a href={mailLink} className="inline-flex items-center gap-1.5 hover:text-brand-400 transition">
              <MailIcon className="h-3.5 w-3.5" /> {site.email}
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
            ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(9,9,11,0.06),0_8px_24px_-12px_rgba(9,9,11,0.12)] border-transparent"
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
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-[15px] font-medium transition outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                  isActive(item.href)
                    ? "bg-brand-50 text-brand-700 font-semibold"
                    : "text-steel-700 hover:text-steel-900 hover:bg-steel-900/5"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-shimmer group ml-4 inline-flex items-center gap-2 rounded-full bg-steel-900 hover:bg-steel-800 text-white px-5 py-2.5 text-sm font-semibold transition"
            >
              Request quote
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium border-b border-ivory-200",
                    isActive(item.href)
                      ? "bg-brand-50 text-brand-700 font-semibold"
                      : "text-steel-700 hover:bg-ivory-200 hover:text-brand-700"
                  )}
                >
                  {item.label}
                  {isActive(item.href) && <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-shimmer mt-3 rounded-lg bg-brand-600 px-4 py-3.5 text-center text-sm font-semibold text-white shadow-gold"
              >
                Request quote
              </Link>
              <a
                href={telLink}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-steel-300 px-4 py-3.5 text-sm font-semibold text-steel-900"
              >
                <PhoneIcon /> Call {site.phoneDisplay}
              </a>
            </Container>
          </div>
        )}
      </header>
    </>
  );
}
