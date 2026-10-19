// Where a visitor came from (ad keyword, search, social, direct), remembered for 30 days
// so a lead sent later can say "Google Ads, keyword: hume pipes warangal".
// Google Ads must append UTM tags via the account's Final URL suffix:
//   utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_term={keyword}

const KEY = "svr_source";
const TTL = 30 * 24 * 60 * 60 * 1000;

type Touch = {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  gclid?: boolean;
  referrer?: string;
  landing: string;
  at: number;
};

/** Call once per page load. A paid or tagged visit always replaces an older record. */
export function captureSource() {
  try {
    const q = new URLSearchParams(location.search);
    const tagged = q.has("utm_source") || q.has("gclid") || q.has("fbclid");
    const old = read();
    if (old && !tagged) return;
    const ref = document.referrer && !document.referrer.includes(location.host) ? document.referrer : undefined;
    const touch: Touch = {
      source: q.get("utm_source") ?? (q.has("gclid") ? "google" : q.has("fbclid") ? "facebook" : undefined),
      medium: q.get("utm_medium") ?? (q.has("gclid") ? "cpc" : undefined),
      campaign: q.get("utm_campaign") ?? undefined,
      term: q.get("utm_term") ?? undefined,
      gclid: q.has("gclid") || undefined,
      referrer: ref ? new URL(ref).hostname : undefined,
      landing: location.pathname,
      at: Date.now(),
    };
    localStorage.setItem(KEY, JSON.stringify(touch));
  } catch {
    // storage blocked (private mode): leads just won't carry a source
  }
}

function read(): Touch | null {
  try {
    const t = JSON.parse(localStorage.getItem(KEY) ?? "null") as Touch | null;
    return t && Date.now() - t.at < TTL ? t : null;
  } catch {
    return null;
  }
}

/** One readable line for the lead email / sheet / WhatsApp alert. */
export function leadSource(): string {
  const t = read();
  if (!t) return "Direct / unknown";
  const paid = t.medium === "cpc" || t.medium === "paid" || t.gclid;
  const channel =
    paid && t.source === "google" ? "Google Ads"
    : paid ? `Paid ads (${t.source ?? "unknown"})`
    : t.source ? `${t.source}${t.medium ? ` / ${t.medium}` : ""}`
    : t.referrer?.includes("google.") ? "Google search (free listing)"
    : t.referrer ? t.referrer
    : "Direct (typed or saved link)";
  return [
    channel,
    t.term && `keyword: ${t.term}`,
    t.campaign && `campaign: ${t.campaign}`,
    `landed on: ${t.landing}`,
  ]
    .filter(Boolean)
    .join(" | ");
}
