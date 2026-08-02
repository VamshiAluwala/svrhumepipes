export type Location = {
  slug: string;
  city: string;
  district: string;
  intro: string;
  projects: string;
};

// Service-area landing pages for local "hume pipes in <city>" searches.
export const locations: Location[] = [
  {
    slug: "hyderabad",
    city: "Hyderabad",
    district: "Hyderabad",
    intro:
      "As a Hyderabad-based manufacturer, we supply ISO-certified RCC hume pipes to sites across the city — from GHMC storm-water drains and HMWSSB sewer lines to private township and commercial projects. Our plant near ECIL keeps lead times short for Hyderabad orders.",
    projects: "GHMC storm-water drains · HMWSSB sewer networks · township drainage",
  },
  {
    slug: "secunderabad",
    city: "Secunderabad",
    district: "Hyderabad",
    intro:
      "SVR Hume Pipes delivers RCC hume pipes and culvert pipes across Secunderabad and the cantonment area, with fast dispatch from our nearby Lalgadi Malakpet plant and hydra-crane unloading at site.",
    projects: "cantonment drainage · road culverts · cable-duct crossings",
  },
  {
    slug: "warangal",
    city: "Warangal",
    district: "Warangal",
    intro:
      "We regularly supply NP2, NP3 and NP4 hume pipes to Warangal and Hanamkonda for municipal drainage, irrigation channels and highway cross-drainage works, delivered by our own trailer fleet from Hyderabad.",
    projects: "municipal drainage · irrigation channels · highway culverts",
  },
  {
    slug: "karimnagar",
    city: "Karimnagar",
    district: "Karimnagar",
    intro:
      "For Karimnagar contractors and irrigation projects, we manufacture RCC hume pipes from 150 mm to 2200 mm — used on lift-irrigation, canal distribution and road-drainage works across the district.",
    projects: "lift irrigation · canal distribution · road drainage",
  },
  {
    slug: "nizamabad",
    city: "Nizamabad",
    district: "Nizamabad",
    intro:
      "SVR Hume Pipes serves Nizamabad with ISO-certified spun RCC hume pipes for agricultural, municipal and highway drainage, dispatched with batch test certificates for tender compliance.",
    projects: "agricultural drainage · municipal works · NH culverts",
  },
  {
    slug: "khammam",
    city: "Khammam",
    district: "Khammam",
    intro:
      "We supply RCC hume pipes and box-culvert-grade sizes to Khammam for irrigation, PWD road works and township drainage, with quotations turned around within 24 working hours.",
    projects: "PWD road works · irrigation · township drainage",
  },
  {
    slug: "sangareddy",
    city: "Sangareddy",
    district: "Sangareddy",
    intro:
      "Serving the Sangareddy industrial corridor, we deliver NP2/NP3/NP4 hume pipes for SEZ, factory effluent and storm-water drainage — with volume pricing for large infrastructure orders.",
    projects: "industrial storm-water · effluent lines · SEZ drainage",
  },
  {
    slug: "mahbubnagar",
    city: "Mahbubnagar",
    district: "Mahbubnagar",
    intro:
      "For Mahbubnagar (Palamuru) irrigation and road projects, SVR Hume Pipes manufactures durable spun RCC hume pipes conforming to IS 458:2003, delivered across the district by our own fleet.",
    projects: "irrigation projects · rural road drainage · culverts",
  },
];

export const getLocation = (slug: string) =>
  locations.find((l) => l.slug === slug);
