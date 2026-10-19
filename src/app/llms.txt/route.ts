import { site } from "@/lib/site";
import { locations } from "@/data/locations";
import { homeFaqs } from "@/data/industries";

// Plain-text company summary for AI answer engines (llmstxt.org). Not linked from the UI.
export const dynamic = "force-static";

export function GET() {
  const body = `# ${site.legalName} (${site.name})

> ${site.description}

${site.legalName} is a manufacturer of RCC hume pipes in ${site.address.city}, ${site.address.region}, India, since ${site.founded}. Buyers also call these pipes: ${site.productNames.join(", ")}.

## Key facts
- Products: RCC hume pipes (spun concrete / cement pipes) in NP2, NP3 and NP4 classes, plain and socket & spigot
- Sizes: 150 mm to 2200 mm internal diameter, standard 2 m and 2.5 m lengths
- Standard: IS 458:2003, ISO 9001 certified, in-house QC lab
- Plant: ${site.address.street}, ${site.address.locality}, ${site.address.city} ${site.address.postalCode}, ${site.address.region}
- Delivery: own trailer fleet with hydra-crane unloading, ${site.hours.weekdays.toLowerCase()}
- Serves: all districts of Telangana (${site.telanganaDistricts.join(", ")}), plus Andhra Pradesh and Karnataka
- Phone / WhatsApp: ${site.phoneDisplay}
- Email: ${site.email}

## Pages
- [Home](${site.url}/): overview, instant pipe estimator, FAQ
- [RCC Hume Pipes](${site.url}/products/rcc-hume-pipes): sizes, wall thickness, weights, specifications
- [Contact](${site.url}/contact): quotation enquiry
- [తెలుగు](${site.url}/te): Telugu page
${locations.map((l) => `- [Hume pipes in ${l.city}](${site.url}/hume-pipes/${l.slug})`).join("\n")}

## FAQ
${homeFaqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
