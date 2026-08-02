import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site, telLink, mailLink, whatsappLink } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us - RCC Hume Pipes Enquiry",
  description:
    "Contact SVR Hume Pipes - Hyderabad's trusted RCC hume pipes manufacturer. Call +91 99495 19444, email srinivasena9999@gmail.com or WhatsApp for instant quotation.",
  path: "/contact",
  keywords: ["contact hume pipes hyderabad", "rcc pipes enquiry", "hume pipes phone number hyderabad"],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="bg-gradient-to-br from-steel-900 via-brand-800 to-brand-700 text-white py-14 lg:py-20">
        <Container className="text-center">
          <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="max-w-2xl mx-auto text-brand-100 text-lg">
            Send us your requirement and we'll respond with a factory-direct quotation
            within 24 working hours. Or WhatsApp us for an instant reply.
          </p>
        </Container>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-12 bg-white border-b border-steel-100">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            <a
              href={telLink}
              className="group rounded-xl border border-steel-200 hover:border-brand-500 hover:shadow-lg bg-white p-6 transition"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center text-2xl mb-3 group-hover:bg-brand-600 group-hover:text-white transition">
                📞
              </div>
              <div className="text-sm text-steel-500">Call us directly</div>
              <div className="text-lg font-bold text-steel-900 group-hover:text-brand-700">
                {site.phoneDisplay}
              </div>
              <div className="text-xs text-steel-500 mt-1">Mon-Sat 9:00 AM - 7:00 PM</div>
            </a>
            <a
              href={mailLink}
              className="group rounded-xl border border-steel-200 hover:border-brand-500 hover:shadow-lg bg-white p-6 transition"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center text-2xl mb-3 group-hover:bg-brand-600 group-hover:text-white transition">
                ✉
              </div>
              <div className="text-sm text-steel-500">Email enquiry</div>
              <div className="text-lg font-bold text-steel-900 group-hover:text-brand-700">
                {site.email}
              </div>
              <div className="text-xs text-steel-500 mt-1">We reply within a few hours</div>
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-steel-200 hover:border-[#25D366] hover:shadow-lg bg-white p-6 transition"
            >
              <div className="w-12 h-12 rounded-lg bg-green-100 text-green-700 flex items-center justify-center text-2xl mb-3 group-hover:bg-[#25D366] group-hover:text-white transition">
                💬
              </div>
              <div className="text-sm text-steel-500">Chat instantly</div>
              <div className="text-lg font-bold text-steel-900 group-hover:text-green-700">
                WhatsApp
              </div>
              <div className="text-xs text-steel-500 mt-1">Fastest response - try now</div>
            </a>
          </div>
        </Container>
      </section>

      {/* FORM + INFO */}
      <section className="py-12 lg:py-20 bg-steel-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-white border border-steel-200 shadow-lg p-6 lg:p-8">
              <ContactForm
                heading="Send us your enquiry"
                subheading="Fill in the form and our sales team will get back to you within 24 working hours."
              />
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-white border border-steel-200 p-6 lg:p-8">
                <h3 className="font-display text-2xl font-bold text-steel-900 mb-4">
                  Factory & Office
                </h3>
                <address className="not-italic text-steel-700 leading-relaxed">
                  <strong>{site.legalName}</strong>
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.locality}, {site.address.city}
                  <br />
                  {site.address.region} - {site.address.postalCode}
                  <br />
                  {site.address.countryName}
                </address>
                <div className="mt-4 grid gap-2 text-sm">
                  <div><strong className="text-steel-800">Phone:</strong> <a href={telLink} className="text-brand-700 hover:underline">{site.phoneDisplay}</a></div>
                  <div><strong className="text-steel-800">Email:</strong> <a href={mailLink} className="text-brand-700 hover:underline">{site.email}</a></div>
                  <div><strong className="text-steel-800">GST:</strong> {site.gst}</div>
                </div>
                <div className="mt-4 pt-4 border-t border-steel-100 text-sm">
                  <div><strong>Working hours:</strong></div>
                  <div className="text-steel-700">{site.hours.weekdays}</div>
                  <div className="text-steel-700">{site.hours.sunday}</div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-steel-200 shadow-sm bg-white">
                <iframe
                  src={site.address.mapEmbed}
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SVR Hume Pipes location on Google Maps"
                />
                <a
                  href={site.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 transition"
                >
                  📍 Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
