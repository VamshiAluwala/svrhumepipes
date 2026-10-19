import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { SizeEstimator } from "@/components/SizeEstimator";
import { SpunPipe } from "@/components/SpunPipe";
import { JsonLd } from "@/components/JsonLd";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { faqSchema, webPageSchema } from "@/lib/schema";
import { site, telLink, whatsappLink } from "@/lib/site";

// Telugu landing page, for Telugu-language ads and local contractors / site supervisors.
// Quote messages stay in English so the sales team reads them the same way as other leads.

export const metadata: Metadata = buildMetadata({
  title: "హైదరాబాద్‌లో RCC హ్యూమ్ పైపులు - తయారీదారు",
  description:
    "ISO సర్టిఫైడ్ NP2, NP3, NP4 RCC హ్యూమ్ పైపులు (150–2200 mm), IS 458:2003 ప్రమాణాల ప్రకారం. తెలంగాణ అంతటా 24×7 డెలివరీ. ఇప్పుడే కొటేషన్ పొందండి.",
  path: "/te",
  languages: { "en-IN": "/", "te-IN": "/te", "x-default": "/" },
  locale: "te_IN",
  keywords: ["హ్యూమ్ పైపులు", "RCC పైపులు హైదరాబాద్", "హ్యూమ్ పైపులు ధర", "సిమెంట్ పైపులు"],
});

const waMsg =
  "Hi SVR Hume Pipes, I need a quotation for RCC hume pipes. Please share pricing and availability. (Telugu page)";

const facts = [
  ["ఉత్పత్తి", "RCC హ్యూమ్ పైపులు: NP2, NP3 & NP4"],
  ["సైజులు", "150 mm నుంచి 2200 mm వ్యాసం"],
  ["ప్రమాణం", "IS 458:2003 · ISO 9001 సర్టిఫైడ్"],
  ["ఫ్యాక్టరీ", "లాల్‌గడి మలక్‌పేట్, మేడ్చల్–మల్కాజ్‌గిరి, హైదరాబాద్"],
  ["డెలివరీ", "సొంత ట్రైలర్లు + హైడ్రా క్రేన్ అన్‌లోడింగ్ · 24×7"],
  ["సేవా ప్రాంతాలు", "తెలంగాణ, ఆంధ్రప్రదేశ్, కర్ణాటక"],
];

const reasons = [
  ["ISO సర్టిఫైడ్ నాణ్యత", "ప్రతి పైపు IS 458:2003 ప్రకారం తయారవుతుంది. బ్యాచ్ టెస్ట్ సర్టిఫికెట్లు అందుబాటులో ఉన్నాయి."],
  ["ఫ్యాక్టరీ నుంచి నేరుగా ధర", "మధ్యవర్తులు లేరు, పెద్ద ఆర్డర్లకు ప్రత్యేక తగ్గింపు."],
  ["48 గంటల్లో డిస్పాచ్", "సొంత ట్రైలర్లతో డెలివరీ, సైట్‌లో హైడ్రా క్రేన్‌తో అన్‌లోడింగ్."],
  ["సొంత QC ల్యాబ్", "కంప్రెషన్, 3-ఎడ్జ్ బేరింగ్, హైడ్రోస్టాటిక్ టెస్టులు మా ప్లాంట్‌లోనే."],
];

const faqs = [
  {
    q: "NP2, NP3, NP4 మధ్య తేడా ఏమిటి?",
    a: "మూడూ IS 458:2003 ప్రకారం తయారయ్యే నాన్-ప్రెజర్ RCC పైపులే. తేడా భారం మోసే సామర్థ్యంలో ఉంటుంది: NP2 తేలికపాటి డ్రెయిన్లకు, NP3 రోడ్ కల్వర్టులు మరియు సీవర్ లైన్లకు, NP4 హైవేలు, రైల్వే క్రాసింగ్‌లు మరియు లోతైన పూడికకు.",
  },
  {
    q: "కనీస ఆర్డర్ ఎంత?",
    a: "కనీస పరిమితి లేదు, ఒక ట్రక్ లోడ్ నుంచి పెద్ద ప్రాజెక్టుల బల్క్ సప్లై వరకు అందిస్తాం.",
  },
  {
    q: "కొటేషన్ ఎలా పొందాలి?",
    a: `${site.phoneDisplay} కు కాల్ చేయండి లేదా WhatsApp చేయండి. పైపు సైజు, క్లాస్, పరిమాణం మరియు డెలివరీ ప్రాంతం చెప్పండి, 24 పని గంటల్లో ధర పంపుతాం.`,
  },
];

export default function TeluguPage() {
  return (
    <div lang="te">
      <JsonLd
        data={[
          webPageSchema({
            path: "/te",
            name: "హైదరాబాద్‌లో RCC హ్యూమ్ పైపులు | SVR Hume Pipes",
            description: "ISO సర్టిఫైడ్ NP2, NP3, NP4 RCC హ్యూమ్ పైపులు, IS 458:2003 ప్రమాణాల ప్రకారం.",
            dateModified: "2026-10-20",
          }),
          faqSchema(faqs),
        ]}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-steel-950 text-white">
        <SpunPipe className="-right-28 -top-16 h-[300px] w-[300px] opacity-40 lg:right-auto lg:top-auto lg:-left-64 lg:-bottom-80 lg:h-[720px] lg:w-[720px] lg:opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_40%,rgba(2,132,199,0.18),transparent)] pointer-events-none" />
        <Container className="relative pt-8 pb-14 lg:pt-12 lg:pb-16 grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 mb-5 text-xs font-medium text-ivory-200/90">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
              ISO 9001 · IS 458:2003
            </div>
            <h1 className="font-serif text-[2.1rem] sm:text-5xl font-bold leading-[1.25] tracking-tight">
              <span className="blur-in">హైదరాబాద్‌లో RCC హ్యూమ్ పైపులు,</span>{" "}
              <span
                className="blur-in bg-gradient-to-r from-brand-300 via-brand-400 to-brand-600 bg-clip-text text-transparent"
                style={{ animationDelay: "200ms" }}
              >
                దశాబ్దాలు నిలిచేలా.
              </span>
            </h1>
            <p className="mt-5 text-base lg:text-lg text-ivory-200/85 leading-relaxed max-w-xl">
              SVR హ్యూమ్ పైప్స్, ISO సర్టిఫైడ్ NP2, NP3 & NP4 పైపులు, 150 mm నుంచి 2200 mm వరకు,
              IS&nbsp;458:2003 ప్రకారం తయారీ. తెలంగాణ అంతటా 24×7 డెలివరీ. 2009 నుంచి కాంట్రాక్టర్లు
              మరియు ప్రభుత్వ విభాగాల నమ్మకం.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-2 lg:max-w-md">
              {[
                ["15+", "సంవత్సరాలు"],
                ["500+", "కాంట్రాక్టర్లు"],
                ["ISO", "సర్టిఫైడ్"],
              ].map(([v, l]) => (
                <div key={l} className="min-w-0 rounded-xl border border-white/10 bg-white/[0.04] px-1.5 py-3 text-center">
                  <div className="font-serif text-xl lg:text-2xl font-bold leading-none">{v}</div>
                  <div className="mt-1.5 text-xs text-ivory-200/60 truncate">{l}</div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink(waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer sm:flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white px-7 py-3.5 font-semibold shadow-gold transition"
              >
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp లో కొటేషన్
              </a>
              <a
                href={telLink}
                className="sm:flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 ring-1 ring-white/15 text-white px-7 py-3.5 font-semibold backdrop-blur transition"
              >
                <PhoneIcon /> ఇప్పుడే కాల్ చేయండి
              </a>
            </div>
          </div>

          <div lang="en" className="relative">
            <div className="absolute -inset-8 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <SizeEstimator />
            </div>
          </div>
        </Container>
      </section>

      {/* KEY FACTS + WHY SVR */}
      <section className="bg-white py-12 lg:py-20">
        <Container className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="rounded-2xl bg-ivory-50 border border-ivory-300 p-6 lg:p-8">
            <h2 className="font-serif text-2xl font-bold text-steel-900">ముఖ్య వివరాలు</h2>
            <ul className="mt-5 space-y-3 text-steel-700">
              {facts.map(([k, v]) => (
                <li key={k} className="flex gap-3">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                  <span>
                    <strong className="text-steel-900">{k}:</strong> {v}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-steel-900">SVR ఎందుకు?</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {reasons.map(([t, d]) => (
                <div key={t} className="card-classic p-5">
                  <h3 className="font-serif text-lg font-bold text-steel-900">{t}</h3>
                  <p className="mt-2 text-sm text-steel-700 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-ivory-100 py-12 lg:py-20">
        <Container>
          <h2 className="text-center font-serif text-2xl lg:text-3xl font-bold text-steel-900">తరచుగా అడిగే ప్రశ్నలు</h2>
          <div className="mt-8 max-w-3xl mx-auto divide-y divide-ivory-300 rounded-2xl border border-ivory-300 bg-white">
            {faqs.map((f, i) => (
              <details key={f.q} open={i === 0} className="group px-5 sm:px-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-serif font-semibold text-steel-900 text-base sm:text-lg">{f.q}</h3>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ivory-200 text-steel-700 transition group-open:rotate-45">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="pb-5 -mt-1 text-steel-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-steel-600">
            <a href="/" lang="en" className="font-semibold text-brand-700 hover:text-brand-800">
              Read this page in English →
            </a>
          </p>
        </Container>
      </section>
    </div>
  );
}
