import type { Metadata } from "next";
import { site } from "./site";

// Background-only keywords: meta tags and structured data, never rendered in the UI.
// SEO_KEYWORDS (comma-separated, in .env / Netlify env) adds to the built-in list in site.ts.
export const siteKeywords = Array.from(
  new Set([
    ...site.keywords,
    ...(process.env.SEO_KEYWORDS ?? "").split(",").map((k) => k.trim().toLowerCase()).filter(Boolean),
  ])
);

type PageSEO = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  noindex?: boolean;
  type?: "website" | "article" | "product";
  /** hreflang → path, for pages with a translation (e.g. { "en-IN": "/", "te-IN": "/te" }) */
  languages?: Record<string, string>;
  locale?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = "/og/default.jpg",
  noindex = false,
  type = "website",
  languages,
  locale = "en_IN",
}: PageSEO): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle = `${title} | ${site.name}`;

  return {
    title: { absolute: fullTitle },
    description,
    keywords: Array.from(new Set([...siteKeywords, ...keywords])).join(", "),
    metadataBase: new URL(site.url),
    alternates: {
      canonical: url,
      languages: languages
        ? Object.fromEntries(Object.entries(languages).map(([k, p]) => [k, `${site.url}${p}`]))
        : { "en-IN": url, "x-default": url },
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: type === "product" ? "website" : type,
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    authors: [{ name: site.legalName, url: site.url }],
    creator: site.legalName,
    publisher: site.legalName,
    category: "Construction Materials",
    verification: {
      google: "REPLACE_WITH_GOOGLE_SITE_VERIFICATION_TOKEN",
    },
    other: {
      "geo.region": "IN-TG",
      "geo.placename": "Hyderabad",
      "geo.position": `${site.address.latitude};${site.address.longitude}`,
      "ICBM": `${site.address.latitude}, ${site.address.longitude}`,
    },
  };
}
