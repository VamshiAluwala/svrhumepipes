# SVR Hume Pipes — Corporate Website

Production-grade Next.js 14 website for **Sri Venkateshwara Hume Pipes** — Hyderabad's leading RCC hume pipes manufacturer.

Domain: **svrhumepipes.com**

---

## 🚀 Quick Start

```bash
# install dependencies (already done)
npm install

# run dev server
npm run dev
# open http://localhost:3000

# production build
npm run build
npm run start
```

---

## 🧭 Pages

| Route                            | Purpose                                                     |
| -------------------------------- | ----------------------------------------------------------- |
| `/`                              | Home — hero, products, why-us, industries, FAQ, CTA        |
| `/about`                         | Company profile, mission/vision, timeline, capability       |
| `/products`                      | Products index + master specifications table                |
| `/products/rcc-hume-pipes`       | Detailed RCC Hume Pipes page + inquiry form                 |
| `/products/precast-concrete-pipes` | Precast pipes detail page                                 |
| `/products/drainage-pipes`       | Drainage pipes detail page                                  |
| `/products/customised-rcc-products` | Custom RCC products detail page                          |
| `/gallery`                       | Factory / product / project photo gallery                   |
| `/contact`                       | Contact form + map + 3 direct-contact cards                 |
| `/api/contact`                   | POST handler for form submissions                           |
| `/sitemap.xml`                   | Auto-generated dynamic sitemap                              |
| `/robots.txt`                    | Auto-generated robots directive                             |

---

## 🔍 Advanced SEO — What's Built In

Every recommendation in your SEO brief is implemented:

| Feature                              | Location                                                |
| ------------------------------------ | ------------------------------------------------------- |
| SSR / SSG rendering                  | Next.js App Router (all pages statically generated)     |
| Dynamic per-page metadata            | `src/lib/seo.ts` → `buildMetadata()`                    |
| Canonical URLs (self-referencing)    | `buildMetadata()` sets `alternates.canonical`           |
| Robots per-page control              | `noindex` flag in `buildMetadata()`                     |
| Open Graph + Twitter Card            | Set in `buildMetadata()`                                |
| Auto JSON-LD Schema.org              | `src/lib/schema.ts` — Organization, LocalBusiness, Manufacturer, Website, Product, BreadcrumbList, FAQPage, Service |
| Dynamic XML sitemap                  | `src/app/sitemap.ts` (regenerated at build)             |
| robots.txt                           | `src/app/robots.ts`                                     |
| Semantic keyword-rich URLs           | `/products/rcc-hume-pipes`, `/products/drainage-pipes` |
| Core Web Vitals                      | next/font, image compression, gzip, security headers   |
| WebP/AVIF image support              | `next.config.mjs` → `images.formats`                    |
| Topic-cluster content architecture   | Home hub → 4 product spokes → inquiry conversion       |
| Programmatic product landing pages   | `src/app/products/[slug]/page.tsx` (SEO-optimised each)|
| Geo tags for local SEO               | Head meta: geo.region, geo.placename, geo.position, ICBM |
| Contextual internal linking          | Header, footer, related products, breadcrumbs           |
| FAQ schema (rich results)            | Home + every product page                               |
| LocalBusiness with rating & hours    | Root layout `<JsonLd>`                                  |
| Breadcrumb schema on every subpage   | `breadcrumbSchema()` helper                             |
| Mobile-responsive layout             | Tailwind mobile-first                                   |
| Fast dispatch of critical CSS        | Tailwind purged + inline font vars                      |
| hreflang / en-IN language            | Set on `<html>` and canonical `alternates.languages`    |

### After deploy — do this in Google Search Console

1. Add & verify property `https://svrhumepipes.com` (replace the placeholder token in `src/app/layout.tsx` → `verification.google`).
2. Submit `https://svrhumepipes.com/sitemap.xml`.
3. Request indexing for `/`, `/products/rcc-hume-pipes`, `/contact`.
4. Add your Google Business Profile with the **same NAP** (Name-Address-Phone) as `src/lib/site.ts` — this is critical for ranking "hume pipes in hyderabad" on the local pack.
5. Get real customer reviews on Google Business — the LocalBusiness aggregateRating in schema is a placeholder; keep it consistent with real Google reviews.

---

## 🎨 Design

- **Colours**: blue (`brand.600` = `#1d4ed8`) and steel gray, professional and industrial.
- **Typography**: `Inter` (body) + `Poppins` (display headings) via `next/font/google`.
- **Components**: fully responsive, mobile hamburger menu, sticky header, floating WhatsApp button.
- **Placeholder images**: the `<HeroImage>` component renders styled SVG gradients as placeholders. Replace with real photos in `/public` and swap for `next/image` when photos are ready.

---

## ✏️ How to Customise

### Change company details

Edit `src/lib/site.ts` — phone, email, address, GST, social links, service areas.

### Add / edit products

Edit `src/data/products.ts` — every product auto-generates a `/products/<slug>` page with JSON-LD, sizes table, applications, FAQ, and inquiry form.

### Replace placeholder graphics

Drop real photos into `public/` and replace `<HeroImage>` with `<Image>` from `next/image`:

```tsx
import Image from "next/image";
<Image src="/products/rcc-hume-pipes/hero.jpg" alt="…" width={800} height={600} />
```

### Hook the contact form to email

`src/app/api/contact/route.ts` currently logs enquiries to server console. To email leads:

```bash
npm install resend
```

Then in the route handler:

```ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({
  from: "leads@svrhumepipes.com",
  to: "info@svhumepipes.in",
  subject: `New enquiry from ${record.name}`,
  text: JSON.stringify(record, null, 2),
});
```

---

## 🚢 Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Vercel auto-detects Next.js. Add your custom domain `svrhumepipes.com` in the Vercel dashboard and update DNS (A / CNAME records provided by Vercel).

---

## 📞 Company Info (edit in `src/lib/site.ts`)

- **Name**: Sri Venkateshwara Hume Pipes (SVR Hume Pipes)
- **Address**: Plot No. 12, Industrial Area, Kapra, ECIL, Hyderabad, Telangana - 500078
- **Email**: info@svhumepipes.in
- **Phone**: +91 90000 00000 *(update to your actual number)*
- **Founded**: 2008
