import { site } from "./site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.legalName,
    alternateName: [site.name, "SVR RCC Hume Pipes", "Venkateshwara Hume Pipes"],
    url: site.url,
    logo: `${site.url}/images/logo.png`,
    image: `${site.url}/og/default.jpg`,
    description: site.description,
    slogan: site.tagline,
    foundingDate: site.founded,
    email: site.email,
    telephone: site.phone,
    knowsAbout: [
      "RCC Hume Pipes",
      "NP2 Hume Pipes",
      "NP3 Hume Pipes",
      "NP4 Hume Pipes",
      "Spun Concrete Pipes",
      "Culvert Pipes",
      "Storm Water Drainage Pipes",
      "Sewer Pipes",
      "IS 458:2003 Precast Concrete Pipes",
    ],
    keywords: [...site.keywords].join(", "),
    areaServed: site.serviceAreas.map((a) => ({
      "@type": "AdministrativeArea",
      name: a,
    })),
    sameAs: Object.values(site.social),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "te"],
      },
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Manufacturer"],
    "@id": `${site.url}/#localbusiness`,
    name: site.legalName,
    alternateName: [site.name, "SVR RCC Hume Pipes"],
    image: [`${site.url}/og/default.jpg`, `${site.url}/images/factory.jpg`],
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "₹₹",
    slogan: site.tagline,
    keywords: [...site.keywords].join(", "),
    description: site.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.latitude,
      longitude: site.address.longitude,
    },
    hasMap: site.address.mapUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: site.serviceAreas.map((a) => ({ "@type": "City", name: a })),
    sameAs: Object.values(site.social),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/products?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function webPageSchema({
  path = "/",
  name,
  description,
  datePublished = "2025-07-15",
  dateModified,
}: {
  path?: string;
  name: string;
  description: string;
  datePublished?: string;
  dateModified: string;
}) {
  const url = `${site.url}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    primaryImageOfPage: `${site.url}/og/default.jpg`,
    datePublished,
    dateModified,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

type ProductInput = {
  name: string;
  slug: string;
  description: string;
  category: string;
  images?: string[];
  standard?: string;
  materials?: string[];
};

export function productSchema(p: ProductInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${site.url}/products/${p.slug}#product`,
    name: p.name,
    description: p.description,
    category: p.category,
    image: (p.images && p.images.length ? p.images : [`${site.url}/og/default.jpg`]).map(
      (img) => (img.startsWith("http") ? img : `${site.url}${img}`)
    ),
    brand: { "@type": "Brand", name: site.name },
    manufacturer: { "@id": `${site.url}/#organization` },
    material: (p.materials || []).join(", "),
    ...(p.standard && {
      isAccessoryOrSparePartFor: undefined,
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Standard",
          value: p.standard,
        },
      ],
    }),
    offers: {
      "@type": "Offer",
      url: `${site.url}/products/${p.slug}`,
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        description: "Contact for quotation - price varies by size and quantity",
      },
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": `${site.url}/#organization` },
      areaServed: "IN",
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: site.serviceAreas.map((a) => ({ "@type": "City", name: a })),
    description,
  };
}

