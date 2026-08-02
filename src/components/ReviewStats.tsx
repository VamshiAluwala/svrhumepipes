// ⚠️ Replace `rating` and `reviews` with your real numbers from each platform.
const platforms = [
  {
    name: "IndiaMART",
    rating: 4.5,
    reviews: 150,
    tag: "Verified Supplier",
    url: "https://www.indiamart.com/venkateswara-humepipes/profile.html",
    accent: "#2e7d32",
  },
  {
    name: "JustDial",
    rating: 4.4,
    reviews: 90,
    tag: "Listed Business",
    url: "https://www.justdial.com/Hyderabad/Venkateshwara-Hume-Pipes-Majeedpur/040PXX40-XX40-200130090257-F4F7_BZDET",
    accent: "#e23744",
  },
  {
    name: "Google Reviews",
    rating: 4.7,
    reviews: 75,
    tag: "Google Business",
    url: "https://maps.app.goo.gl/DhAG1fMNv9W6rnBp9",
    accent: "#4285F4",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={
            "text-lg " +
            (i <= Math.round(rating) ? "text-amber-400" : "text-steel-300")
          }
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function ReviewStats() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {platforms.map((p) => (
        <a
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white border border-ivory-300 hover:border-brand-500 hover:shadow-classic transition p-7 flex flex-col items-center text-center"
        >
          <span
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: p.accent }}
          >
            {p.tag}
          </span>
          <div className="mt-5 font-serif text-2xl font-bold text-steel-900 tracking-tightest">
            {p.name}
          </div>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="font-serif text-5xl font-bold text-steel-900">
              {p.rating.toFixed(1)}
            </span>
            <span className="text-steel-500 text-lg font-semibold">/ 5</span>
          </div>
          <div className="mt-2">
            <Stars rating={p.rating} />
          </div>
          <span className="mt-5 inline-flex items-center gap-1.5 text-brand-700 group-hover:text-brand-800 font-bold uppercase text-[11px] tracking-widest border-b-2 border-brand-500 pb-1 transition">
            Read reviews →
          </span>
        </a>
      ))}
    </div>
  );
}
