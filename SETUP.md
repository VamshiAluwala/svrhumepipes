# Contact-form delivery setup

Every enquiry submitted through `/contact` (or any product-page inquiry form) fires **in parallel** to three channels. Each channel is toggled by env variables — if a channel's config is missing, it's silently skipped, so you can enable them one at a time.

## Quick start

```bash
# 1. Copy env template
cp .env.example .env.local

# 2. Fill in the values (see per-channel instructions below)

# 3. Restart dev server
npm run dev
```

Every enquiry is also logged to the server console (`console.log("[contact-form]", …)`) so you have a last-resort backup even if all three channels fail.

---

## 📧 Channel 1 — Email (Resend)

**Where it goes:** `srinivasena9999@gmail.com` (and `info@svhumepipes.in`) — configurable.

### Setup

1. Sign up at **[resend.com](https://resend.com)** — no credit card required.
2. Go to *API Keys* → *Create API Key* → copy the key (starts with `re_…`).
3. Paste into `.env.local`:
   ```
   RESEND_API_KEY=re_your_actual_key_here
   LEAD_EMAIL_TO=srinivasena9999@gmail.com,info@svhumepipes.in
   ```
4. Restart `npm run dev`. Submit the form. Email should land within ~2 seconds.

### Optional: send from your own domain

By default emails are sent from `onboarding@resend.dev` (works out of the box).

To send from `leads@svrhumepipes.com`:
1. In Resend → *Domains* → add `svrhumepipes.com` → follow the DNS instructions (add 3 TXT/MX records at your domain registrar).
2. Change `LEAD_EMAIL_FROM=SVR Leads <leads@svrhumepipes.com>` in `.env.local`.

**Free tier limits:** 3,000 emails/month, 100/day — more than enough.

---

## 📊 Channel 2 — Google Sheet (Apps Script webhook)

**Where it goes:** A Google Sheet you own — every enquiry appends a new row.

### Setup (5 minutes, one-time)

1. **Create the sheet**
   - Open [sheets.google.com](https://sheets.google.com) → new blank sheet.
   - Name it `SVR Hume Pipes — Leads`.
   - Row 1 headers (paste this row across A1:H1):
     ```
     Received At	Name	Phone	Email	Company	Product	Message	Source
     ```

2. **Open Apps Script**
   - In the sheet: `Extensions` → `Apps Script`.
   - Delete the default code, paste this:

   ```js
   function doPost(e) {
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
     const d = JSON.parse(e.postData.contents);
     sheet.appendRow([
       d.receivedAt, d.name, d.phone, d.email,
       d.company, d.product, d.message, d.source
     ]);
     return ContentService
       .createTextOutput(JSON.stringify({ ok: true }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. **Deploy as Web App**
   - Click `Deploy` → `New deployment` → select type `Web app`.
   - Description: `SVR leads webhook`
   - Execute as: `Me`
   - Who has access: `Anyone`
   - Click `Deploy` → authorize (Google warning: click *Advanced* → *Go to project (unsafe)* → *Allow*).
   - **Copy the Web-app URL** (ends with `/exec`).

4. **Paste into `.env.local`:**
   ```
   GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/AKfy…your-id…/exec
   ```

5. Restart dev server. Submit a test enquiry → new row appears in your Sheet within seconds.

### Editing the script later
If you edit the script code, click `Deploy` → `Manage deployments` → *edit* (pencil icon) → *New version* → *Deploy*. Same URL keeps working.

---

## 💬 Channel 3 — WhatsApp notification (CallMeBot)

**Where it goes:** Your WhatsApp on **+91 99495 19444** — instant push notification whenever a lead comes in.

### Setup (2 minutes, one-time)

1. **Save this number** in your phone contacts: `+34 644 51 95 23` — name it `CallMeBot`.
2. From your WhatsApp (the phone that will receive alerts), send this exact message to that contact:
   ```
   I allow callmebot to send me messages
   ```
3. Within ~2 minutes you'll receive a reply like:
   > *API Activated for your phone number. Your APIKEY is 1234567*
4. Paste that key into `.env.local`:
   ```
   CALLMEBOT_PHONE=919949519444
   CALLMEBOT_API_KEY=1234567
   ```
5. Restart dev server. Submit a test enquiry → WhatsApp buzz within ~5 seconds.

### Notes
- CallMeBot is **free for personal use** (one recipient number).
- If you want alerts on multiple numbers, either use a WhatsApp Business API provider (Interakt / Wati / Twilio — paid), or forward the notifications from your phone.
- Rate-limited to ~1 message per 5 seconds — fine for lead volume.

---

## 🚀 Production (Vercel) — same variables, one-time paste

When you deploy to Vercel:

1. Push your code to GitHub (do **not** commit `.env.local` — the `.gitignore` already excludes it).
2. In Vercel dashboard → your project → *Settings* → *Environment Variables*.
3. Add all 6 variables from `.env.example` with your real values. Choose scope: `Production, Preview, Development`.
4. *Deployments* → redeploy latest.

Done. Every enquiry from the live site will now fan out to email + Google Sheet + WhatsApp.

---

## 🩺 Troubleshooting

**Nothing arrives after a test submit**
- Watch the dev-server terminal. Every submission prints a line:
  ```
  [contact-form] {"lead": {...}, "channels": {"email": {...}, "sheet": {...}, "whatsapp": {...}}}
  ```
  If a channel says `"skipped": true`, its env vars are missing. If it says `"ok": false, "error": "…"`, that channel's API rejected the request — the error tells you why.

**Resend returns 403 on a custom sender**
The `svrhumepipes.com` domain isn't verified yet. Revert `LEAD_EMAIL_FROM` back to `onboarding@resend.dev` until DNS propagates.

**Google Sheet stops working after editing script**
You must create a *new version* of the deployment (`Manage deployments` → edit → *New version*). Otherwise Apps Script keeps running the old code.

**CallMeBot returns "APIKEY is invalid"**
Re-send the activation message from the exact same WhatsApp number you're using in `CALLMEBOT_PHONE`. Wait 2 minutes.
