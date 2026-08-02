import type { Metadata } from "next";
import { site } from "./site";

type PageSEO = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  noindex?: boolean;
  type?: "website" | "article" | "product";
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = "/og/default.jpg",
  noindex = false,
  type = "website",
}: PageSEO): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle =
    path === "/" ? `${title} | ${site.name}` : `${title} | ${site.name} Hyderabad`;

  return {
    title: fullTitle,
    description,
    keywords: [...site.keywords, ...keywords].join(", "),
    metadataBase: new URL(site.url),
    alternates: {
      canonical: url,
      languages: {
        "en-IN": url,
        "x-default": url,
      },
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
      locale: "en_IN",
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
