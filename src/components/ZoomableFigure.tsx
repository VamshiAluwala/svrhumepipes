"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  title: string;
  category: string;
  width: number;
  height: number;
};

/**
 * A single gallery figure that shows the FULL image (object-contain) and
 * opens a click-to-zoom lightbox for just this image. Used only where a
 * cropped (object-cover) thumbnail would hide important detail.
 */
export function ZoomableFigure({ src, title, category, width, height }: Props) {
  const [open, setOpen] = useState(false);

  // Close on Escape and lock background scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <figure className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`View full image: ${title}`}
          className="block w-full cursor-zoom-in"
        >
          <div className="relative aspect-[4/3] bg-steel-900 overflow-hidden">
            <Image
              src={src}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain transition-transform duration-700 group-hover:scale-105"
            />
            {/* zoom hint */}
            <span className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white text-sm opacity-0 group-hover:opacity-100 transition">
              ⤢
            </span>
          </div>
        </button>
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-steel-900/90 via-steel-900/40 to-transparent p-4 text-white">
          <div className="text-xs uppercase tracking-wider text-brand-200">{category}</div>
          <div className="font-semibold">{title}</div>
        </figcaption>
      </figure>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white text-xl hover:bg-white/20 transition"
          >
            ✕
          </button>
          <Image
            src={src}
            alt={title}
            width={width}
            height={height}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
