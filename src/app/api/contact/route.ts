import { NextResponse } from "next/server";
import { sendEmail, sendToSheet, sendWhatsApp, type Lead } from "@/lib/leads";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  company?: string;
  message?: string;
  product?: string;
  productContext?: string;
  website?: string; // honeypot
};

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — silently succeed for bots
  if (body.website) return NextResponse.json({ ok: true });

  const { name, phone, email, message } = body;
  if (!name || !phone || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  const phoneDigits = phone.replace(/\D/g, "");
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    return NextResponse.json({ ok: false, error: "Invalid phone" }, { status: 400 });
  }

  const lead: Lead = {
    receivedAt: new Date().toISOString(),
    name: name.trim(),
    phone: phone.trim(),
    email: email.trim().toLowerCase(),
    company: (body.company ?? "").trim(),
    product: (body.product ?? body.productContext ?? "General enquiry").trim(),
    message: message.trim(),
    source: req.headers.get("referer") ?? "direct",
  };

  // Fan out to all channels in parallel — do not block user response on failures
  const results = await Promise.allSettled([
    sendEmail(lead),
    sendToSheet(lead),
    sendWhatsApp(lead),
  ]);

  // Always log so leads are recoverable from Vercel logs even if channels fail
  console.log(
    "[contact-form]",
    JSON.stringify({
      lead,
      channels: {
        email: settle(results[0]),
        sheet: settle(results[1]),
        whatsapp: settle(results[2]),
      },
    })
  );

  return NextResponse.json({ ok: true });
}

function settle(r: PromiseSettledResult<{ ok: boolean; skipped?: boolean; reason?: string }>) {
  if (r.status === "rejected") return { ok: false, error: String(r.reason) };
  return r.value;
}
