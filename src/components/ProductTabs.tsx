"use client";

import { useState } from "react";
import Link from "next/link";
import { HeroImage } from "./HeroImage";
import { products } from "@/data/products";

const variantMap = ["pipes", "concrete", "drainage", "custom"] as const;

export function ProductTabs() {
  const [active, setActive] = useState(0);
  const p = products[active];
  const multi = products.length > 1;

  return (
    <div className={multi ? "grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-10" : ""}>
      {/* Tabs */}
      {multi && (
      <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-4 lg:mx-0 px-4 lg:px-0">
        {products.map((prod, i) => (
          <button
            key={prod.slug}
            onClick={() => setActive(i)}
            className={
              "text-left shrink-0 lg:w-full rounded-none border-l-4 px-5 py-4 transition " +
              (i === active
                ? "border-brand-600 bg-white shadow-md"
                : "border-transparent bg-ivory-100 hover:bg-white hover:border-brand-300")
            }
          >
            <div className="text-[10px] font-bold uppercase tracking-widest text-brand-700">
              0{i + 1}
            </div>
            <div
              className={
                "mt-1 font-serif text-lg font-bold tracking-tightest " +
                (i === active ? "text-steel-900" : "text-steel-700")
              }
            >
              {prod.name}
            </div>
            <div className="text-xs text-steel-500 mt-0.5">{prod.category}</div>
          </button>
        ))}
      </div>
      )}

      {/* Detail */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start bg-white shadow-classic p-4 lg:p-6 border border-ivory-300">
        <HeroImage
          alt={p.name}
          variant={variantMap[active]}
          className="aspect-[4/3]"
        />
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-brand-700">
            {p.standard}
          </div>
          <h3 className="mt-2 font-serif text-2xl lg:text-3xl font-bold text-steel-900 tracking-tightest">
            {p.name}
          </h3>
          <p className="mt-3 text-steel-700 leading-relaxed">{p.tagline}</p>
          <ul className="mt-5 space-y-2">
            {p.features.slice(0, 4).map((f) => (
              <li key={f} className="flex gap-2.5 text-sm text-steel-700">
                <span className="text-brand-600 font-bold">◆</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/products/${p.slug}`}
              className="rounded-none bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition"
            >
              View Details →
            </Link>
            <Link
              href="/contact"
              className="rounded-none border border-steel-300 hover:border-brand-600 hover:text-brand-700 text-steel-800 px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
