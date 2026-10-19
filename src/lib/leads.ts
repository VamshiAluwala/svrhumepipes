export type Lead = {
  receivedAt: string;
  name: string;
  phone: string;
  email: string;
  company: string;
  product: string;
  message: string;
  source: string;
};

// ─────────────────────────────────────────────────────────────
// 1. EMAIL, via Resend (https://resend.com, 3,000/mo free)
// ─────────────────────────────────────────────────────────────
export async function sendEmail(lead: Lead) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_EMAIL_TO;
  const from = process.env.LEAD_EMAIL_FROM ?? "SVR Leads <onboarding@resend.dev>";
  if (!apiKey || !to) return { ok: false, skipped: true, reason: "no RESEND config" };

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: to.split(",").map((s) => s.trim()),
        ...(lead.email && { reply_to: lead.email }),
        subject: `🔔 New SVR Lead · ${lead.name} · ${lead.product}`,
        html: renderEmailHtml(lead),
        text: renderEmailText(lead),
      }),
    });
    if (!res.ok) {
      const err = await res.text();
      console.error("[email] failed", res.status, err);
      return { ok: false, error: err };
    }
    return { ok: true };
  } catch (e) {
    console.error("[email] threw", e);
    return { ok: false, error: String(e) };
  }
}

function renderEmailHtml(l: Lead) {
  return `<!DOCTYPE html>
<html><body style="font-family:-apple-system,Segoe UI,sans-serif;background:#f4f4f5;padding:24px;color:#18181b">
  <div style="max-width:600px;margin:0 auto;background:white;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.08)">
    <div style="background:#0284c7;padding:24px;color:white">
      <h1 style="margin:0;font-size:22px">🔔 New Lead Enquiry</h1>
      <p style="margin:6px 0 0;opacity:0.9;font-size:14px">svrhumepipes.com · ${new Date(l.receivedAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
    </div>
    <div style="padding:24px">
      <table style="width:100%;border-collapse:collapse">
        ${row("👤 Name", l.name)}
        ${row("📞 Phone", `<a href="tel:${l.phone}" style="color:#0284c7">${l.phone}</a>`)}
        ${row("✉ Email", l.email ? `<a href="mailto:${l.email}" style="color:#0284c7">${l.email}</a>` : "-")}
        ${row("🏢 Company", l.company || "-")}
        ${row("🔧 Product interest", l.product)}
        ${row("📍 Source page", l.source)}
      </table>
      <div style="margin-top:20px;padding:16px;background:#f4f4f5;border-left:4px solid #0284c7;border-radius:4px">
        <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.05em;color:#71717a;margin-bottom:8px">Requirement</div>
        <div style="white-space:pre-wrap;color:#18181b;line-height:1.6">${escape(l.message)}</div>
      </div>
      <div style="margin-top:24px;text-align:center">
        <a href="https://wa.me/${l.phone.replace(/\D/g, "")}" style="display:inline-block;padding:12px 24px;background:#25D366;color:white;text-decoration:none;border-radius:6px;font-weight:600">💬 WhatsApp ${l.name}</a>
      </div>
    </div>
    <div style="padding:16px 24px;background:#fafafa;border-top:1px solid #e4e4e7;font-size:12px;color:#71717a;text-align:center">
      Reply directly to this email to respond to the customer.
    </div>
  </div>
</body></html>`;
}

function row(label: string, val: string) {
  return `<tr>
    <td style="padding:8px 0;color:#71717a;font-size:13px;width:140px;vertical-align:top">${label}</td>
    <td style="padding:8px 0;color:#18181b;font-weight:600">${val}</td>
  </tr>`;
}

function renderEmailText(l: Lead) {
  return `New SVR Hume Pipes lead
Received: ${l.receivedAt}

Name:     ${l.name}
Phone:    ${l.phone}
Email:    ${l.email}
Company:  ${l.company || "-"}
Product:  ${l.product}
Source:   ${l.source}

Requirement:
${l.message}

Reply directly to this email to respond.`;
}

function escape(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

// ─────────────────────────────────────────────────────────────
// 2. GOOGLE SHEET, via Apps Script webhook
// ─────────────────────────────────────────────────────────────
export async function sendToSheet(lead: Lead) {
  const url = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!url) return { ok: false, skipped: true, reason: "no GOOGLE_SHEET_WEBHOOK_URL" };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (!res.ok) {
      console.error("[sheet] failed", res.status);
      return { ok: false };
    }
    return { ok: true };
  } catch (e) {
    console.error("[sheet] threw", e);
    return { ok: false, error: String(e) };
  }
}

// ─────────────────────────────────────────────────────────────
// 3. WHATSAPP, via CallMeBot (free personal WhatsApp)
// ─────────────────────────────────────────────────────────────
export async function sendWhatsApp(lead: Lead) {
  const phone = process.env.CALLMEBOT_PHONE;
  const apiKey = process.env.CALLMEBOT_API_KEY;
  if (!phone || !apiKey) return { ok: false, skipped: true, reason: "no CALLMEBOT config" };

  const text = [
    `🔔 *New SVR Lead*`,
    ``,
    `👤 ${lead.name}`,
    `📞 ${lead.phone}`,
    `✉ ${lead.email || "-"}`,
    `🏢 ${lead.company || "-"}`,
    `🔧 ${lead.product}`,
    ``,
    `💬 ${lead.message}`,
    ``,
    `svrhumepipes.com`,
  ].join("\n");

  try {
    const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(text)}&apikey=${apiKey}`;
    const res = await fetch(url);
    if (!res.ok) {
      console.error("[whatsapp] failed", res.status);
      return { ok: false };
    }
    return { ok: true };
  } catch (e) {
    console.error("[whatsapp] threw", e);
    return { ok: false, error: String(e) };
  }
}
