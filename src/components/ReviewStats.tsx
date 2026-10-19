import { ArrowIcon, StarIcon } from "./Icons";

// Add `rating` and `reviews` only with the real numbers shown on each platform -
// a card without them simply links out. Never ship estimated ratings (Google Ads policy).
const platforms: {
  name: string;
  tag: string;
  url: string;
  accent: string;
  cta: string;
  rating?: number;
  reviews?: number;
}[] = [
  {
    name: "Google Reviews",
    tag: "Google Business",
    url: "https://maps.app.goo.gl/DhAG1fMNv9W6rnBp9",
    accent: "#4285F4",
    cta: "Read or write a review",
  },
  {
    name: "IndiaMART",
    tag: "Verified Supplier",
    url: "https://www.indiamart.com/venkateswara-humepipes/profile.html",
    accent: "#2e7d32",
    cta: "See our IndiaMART profile",
  },
  {
    name: "JustDial",
    tag: "Listed Business",
    url: "https://www.justdial.com/Hyderabad/Venkateshwara-Hume-Pipes-Majeedpur/040PXX40-XX40-200130090257-F4F7_BZDET",
    accent: "#e23744",
    cta: "See our JustDial listing",
  },
];

export function ReviewStats() {
  return (
    <div className="grid gap-3 sm:gap-5 md:grid-cols-3">
      {platforms.map((p) => (
        <a
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group card-classic p-5 sm:p-7 flex items-center gap-4 md:flex-col md:items-center md:text-center"
        >
          <span
            className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white"
            style={{ backgroundColor: p.accent }}
            aria-hidden
          >
            <StarIcon />
          </span>
          <div className="min-w-0">
            <div className="font-serif text-lg sm:text-xl font-bold text-steel-900 tracking-tightest">{p.name}</div>
            <div className="text-xs text-steel-500">{p.tag}</div>
            {p.rating && p.reviews && (
              <div className="mt-2 text-sm text-steel-700">
                <span className="text-amber-400">★</span> <strong>{p.rating.toFixed(1)}</strong> · {p.reviews} reviews
              </div>
            )}
            <span className="mt-2 md:mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:text-brand-800 transition">
              {p.cta} <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
