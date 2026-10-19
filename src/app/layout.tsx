import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd } from "@/components/JsonLd";
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
} from "@/lib/schema";
import { site } from "@/lib/site";
import { siteKeywords } from "@/lib/seo";

// Satoshi — self-hosted (Fontshare). Same typeface used on agentorix.in.
const satoshi = localFont({
  src: [
    { path: "../fonts/Satoshi-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/Satoshi-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0284c7",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - RCC Hume Pipes Manufacturer in Hyderabad`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  keywords: siteKeywords.join(", "),
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Netlify env (Search Console → HTML tag → content value).
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={satoshi.variable}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta
          name="geo.position"
          content={`${site.address.latitude};${site.address.longitude}`}
        />
        <meta
          name="ICBM"
          content={`${site.address.latitude}, ${site.address.longitude}`}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-ivory-100 text-steel-800 pb-[calc(4.25rem+env(safe-area-inset-bottom))] lg:pb-0">
        <JsonLd
          data={[organizationSchema(), localBusinessSchema(), websiteSchema()]}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        {/* Google tag (gtag.js) — loaded after hydration so it never blocks render */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5EDHD5FBTS"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-5EDHD5FBTS');document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="tel:"],a[href*="wa.me/"]');if(a)gtag('event',a.href.indexOf('tel:')===0?'click_call':'click_whatsapp',{link_url:a.href,page_path:location.pathname});},true);`}
        </Script>
      </body>
    </html>
  );
}
