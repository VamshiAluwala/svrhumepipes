export type ProductSize = {
  id: string;
  diameterMM: number;
  lengthM: number;
  wallThicknessMM: number;
  weightKg: number;
  class: "NP2" | "NP3" | "NP4" | "P1" | "P2" | "P3";
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  standard: string;
  tagline: string;
  description: string;
  hero: string;
  images: string[];
  features: string[];
  materials: string[];
  manufacturingProcess: string[];
  qualityStandards: string[];
  applications: { title: string; description: string }[];
  sizes: ProductSize[];
  faqs: { q: string; a: string }[];
};

const commonSizes: ProductSize[] = [
  { id: "150-2-np3", diameterMM: 150, lengthM: 2, wallThicknessMM: 25, weightKg: 76, class: "NP3" },
  { id: "200-2-np3", diameterMM: 200, lengthM: 2, wallThicknessMM: 30, weightKg: 104, class: "NP3" },
  { id: "250-2-np3", diameterMM: 250, lengthM: 2, wallThicknessMM: 35, weightKg: 156, class: "NP3" },
  { id: "300-2.5-np3", diameterMM: 300, lengthM: 2.5, wallThicknessMM: 40, weightKg: 285, class: "NP3" },
  { id: "450-2.5-np3", diameterMM: 450, lengthM: 2.5, wallThicknessMM: 50, weightKg: 495, class: "NP3" },
  { id: "600-2.5-np3", diameterMM: 600, lengthM: 2.5, wallThicknessMM: 65, weightKg: 815, class: "NP3" },
  { id: "750-2.5-np3", diameterMM: 750, lengthM: 2.5, wallThicknessMM: 75, weightKg: 1180, class: "NP3" },
  { id: "900-2.5-np3", diameterMM: 900, lengthM: 2.5, wallThicknessMM: 90, weightKg: 1670, class: "NP3" },
  { id: "1000-2.5-np3", diameterMM: 1000, lengthM: 2.5, wallThicknessMM: 100, weightKg: 2050, class: "NP3" },
  { id: "1200-2.5-np3", diameterMM: 1200, lengthM: 2.5, wallThicknessMM: 115, weightKg: 2820, class: "NP3" },
  { id: "1400-2.5-np4", diameterMM: 1400, lengthM: 2.5, wallThicknessMM: 130, weightKg: 3720, class: "NP4" },
  { id: "1600-2.5-np4", diameterMM: 1600, lengthM: 2.5, wallThicknessMM: 145, weightKg: 4780, class: "NP4" },
  { id: "1800-2.5-np4", diameterMM: 1800, lengthM: 2.5, wallThicknessMM: 160, weightKg: 6010, class: "NP4" },
  { id: "2000-2.5-np4", diameterMM: 2000, lengthM: 2.5, wallThicknessMM: 175, weightKg: 7400, class: "NP4" },
  { id: "2200-2.5-np4", diameterMM: 2200, lengthM: 2.5, wallThicknessMM: 190, weightKg: 8930, class: "NP4" },
];

export const products: Product[] = [
  {
    slug: "rcc-hume-pipes",
    name: "RCC Hume Pipes",
    shortName: "RCC Hume Pipes",
    category: "Reinforced Concrete Pipes",
    standard: "IS 458:2003",
    tagline: "ISO-certified NP2, NP3 and NP4 hume pipes manufactured in Hyderabad",
    description:
      "SVR Hume Pipes manufactures high-strength Reinforced Cement Concrete (RCC) hume pipes conforming to IS 458:2003. Available in NP2, NP3 and NP4 classes with diameters from 150 mm to 2200 mm, our pipes are trusted by municipal corporations, PWD, irrigation departments and infrastructure contractors across Telangana and Andhra Pradesh.",
    hero: "/products/rcc-hume-pipes/hero.jpg",
    images: [
      "/products/rcc-hume-pipes/1.jpg",
      "/products/rcc-hume-pipes/2.jpg",
      "/products/rcc-hume-pipes/3.jpg",
    ],
    features: [
      "Manufactured to IS 458:2003 specifications",
      "NP2, NP3 and NP4 classes available",
      "Diameters from 150 mm to 2200 mm",
      "Spun-cast with OPC 53 grade cement concrete",
      "TMT steel cage reinforcement",
      "Rubber ring / collar jointing options",
      "Batch tested for 3-edge bearing strength",
      "Fast dispatch from Hyderabad plant",
      "Custom lengths and specifications on request",
    ],
    materials: [
      "OPC 53 Grade Cement (Ultratech / ACC / Ramco)",
      "TMT Steel bars Fe 500 (SAIL / TATA / JSW)",
      "20 mm & 10 mm graded stone aggregates",
      "River-washed sand (Zone II)",
      "Approved chemical admixtures (superplasticizer)",
      "EPDM rubber rings for jointing",
    ],
    manufacturingProcess: [
      "Raw material inspection and batching (weigh-batched)",
      "Steel cage fabrication with spot welding",
      "Concrete mixing in pan mixer (OPC 53 grade cement)",
      "Loading into rotating spun-casting mould",
      "Centrifugal spinning at controlled RPM for compaction",
      "De-moulding after initial set",
      "Water curing for 28 days in curing tank",
      "Hydrostatic and 3-edge bearing tests (batch)",
      "Quality stamping, marking, dispatch",
    ],
    qualityStandards: [
      "IS 458:2003 - Precast concrete pipes (with and without reinforcement)",
      "IS 3597:1998 - Methods of test for concrete pipes",
      "IS 456:2000 - Plain and reinforced concrete code of practice",
      "IS 5382:1985 - Rubber sealing rings for gas mains, water mains and sewers",
      "ISO 9001:2015 Quality Management System certified",
      "In-house QC lab with compression testing machine",
    ],
    applications: [
      {
        title: "Storm Water Drainage",
        description:
          "Municipal storm water drains, road side gutters and township drainage systems.",
      },
      {
        title: "Road Culverts",
        description:
          "NHAI / State highway culverts, cross drainage works, and railway line crossings.",
      },
      {
        title: "Sewer Systems",
        description:
          "Underground sewerage networks for cities, towns and industrial estates.",
      },
      {
        title: "Irrigation Projects",
        description:
          "Canal lining, farm distribution channels and lift irrigation schemes.",
      },
      {
        title: "Industrial Effluent",
        description:
          "Effluent conveyance, cooling water lines and industrial storm drainage.",
      },
      {
        title: "Cable Ducts & Utility Crossings",
        description:
          "Protection ducts for HT cables, telecom lines and pipeline crossings under roads.",
      },
    ],
    sizes: commonSizes,
    faqs: [
      {
        q: "Which is the best RCC hume pipes manufacturer in Hyderabad?",
        a: "SVR Hume Pipes (Sri Venkateshwara Hume Pipes) is one of the most trusted RCC hume pipes manufacturers in Hyderabad. We supply ISO-certified IS 458:2003 pipes to PWD, HMDA, GHMC, HMWSSB and private contractors across Telangana.",
      },
      {
        q: "What is the difference between NP2, NP3 and NP4 hume pipes?",
        a: "NP2 is a non-pressure pipe for light-duty drainage. NP3 is a medium-duty class for storm water and shallow sewers under normal traffic and moderate vehicular loads. NP4 is the heavy-duty class with thicker walls and stronger reinforcement — used for deep burial, heavy traffic loads and large-diameter sewer and irrigation mains.",
      },
      {
        q: "What sizes of RCC hume pipes do you manufacture?",
        a: "We manufacture RCC hume pipes from 150 mm to 2200 mm internal diameter, in standard 2.5 m lengths. Custom sizes and lengths are made to order.",
      },
      {
        q: "Do you deliver hume pipes across Hyderabad and Telangana?",
        a: "Yes. We deliver to all districts of Telangana and Andhra Pradesh from our Hyderabad plant using our own trailer fleet, with hydra-crane unloading arranged on request.",
      },
      {
        q: "What jointing options are available?",
        a: "We supply pipes with flush-joint collars, spigot-and-socket joints, and rubber-ring gasket joints depending on your project specification.",
      },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
