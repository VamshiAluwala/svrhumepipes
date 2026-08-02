"use client";

import { useState, FormEvent } from "react";
import { whatsappLink } from "@/lib/site";

type Props = {
  compact?: boolean;
  productContext?: string;
  heading?: string;
  subheading?: string;
};

export function ContactForm({ compact = false, productContext, heading, subheading }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, productContext }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Please try WhatsApp or call us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-none border border-brand-200 bg-brand-50 p-10 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 text-white text-3xl shadow-gold">
          ✓
        </div>
        <h3 className="font-serif text-2xl font-bold text-steel-900 mb-2">Thank you!</h3>
        <p className="text-steel-700 max-w-md mx-auto">
          Your enquiry has been received. Our team will reach out within 24 working hours with a
          detailed factory-direct quotation.
        </p>
        <a
          href={whatsappLink("Hi, I just submitted an enquiry on your website.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-none bg-[#25D366] hover:bg-[#1EBE5D] px-6 py-3 text-white font-semibold uppercase tracking-widest text-xs shadow-lg transition"
        >
          💬 Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {(heading || subheading) && (
        <div className="mb-2">
          {heading && (
            <h3 className="font-serif text-3xl font-bold text-steel-900 tracking-tightest">{heading}</h3>
          )}
          {subheading && <p className="text-steel-700 mt-2">{subheading}</p>}
          <div className="h-px w-16 bg-brand-600 mt-4" />
        </div>
      )}

      <input type="text" name="website" autoComplete="off" tabIndex={-1} className="hidden" aria-hidden />

      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field label="Full Name *" name="name" placeholder="Your name" required />
        <Field label="Phone Number *" name="phone" type="tel" placeholder="+91" required pattern="[0-9+\s-]{10,15}" />
      </div>

      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field label="Email Address *" name="email" type="email" placeholder="you@company.com" required />
        <Field label="Company Name" name="company" placeholder="Optional" />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-steel-700 mb-2">
          Requirement / Message *
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="E.g. Need 100 nos of 900 mm NP3 hume pipes at Kompally site, delivery in 15 days."
          className="w-full rounded-none border border-ivory-300 bg-ivory-50 px-4 py-3 text-sm text-steel-900 placeholder-steel-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-200 focus:outline-none transition"
        />
      </div>

      {productContext && <input type="hidden" name="product" value={productContext} />}

      {error && (
        <div className="rounded-none bg-red-50 border-l-4 border-red-500 text-red-800 text-sm p-3">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-none bg-brand-600 hover:bg-brand-700 disabled:bg-steel-400 text-white font-bold uppercase tracking-widest text-sm py-4 shadow-gold transition"
      >
        {status === "loading" ? "Sending…" : "Send Enquiry →"}
      </button>

      <p className="text-xs text-steel-500 text-center tracking-wide">
        We usually reply within a few hours.
      </p>
    </form>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-widest text-steel-700 mb-2">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-none border border-ivory-300 bg-ivory-50 px-4 py-3 text-sm text-steel-900 placeholder-steel-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-200 focus:outline-none transition"
      />
    </div>
  );
}
