"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const images = [
  { src: "/DJI_20260502_140742_554.JPG", alt: "Tepih servis - radnik" },
  { src: "/DJI_20260502_140746_845.JPG", alt: "Tepih servis - radionica" },
  { src: "/DJI_20260502_140758_484.JPG", alt: "Mašinsko pranje tepiha DR-P 3000" },
  { src: "/IMG_2724.jpeg", alt: "Pranje tepiha vodom" },
  { src: "/IMG_2732.jpeg", alt: "Pranje tepiha" },
  { src: "/IMG_2733.jpeg", alt: "Čišćenje tepiha" },
  { src: "/IMG_2735.jpeg", alt: "Dubinsko pranje tepiha" },
  { src: "/IMG_2737.jpeg", alt: "Pranje tepiha" },
  { src: "/IMG_2745.jpeg", alt: "Tepih servis" },
  { src: "/IMG_2752.jpeg", alt: "Pranje tepiha" },
  { src: "/IMG_2756.jpeg", alt: "Tepih servis Fino" },
  { src: "/IMG_2757.jpeg", alt: "Sušenje tepiha - centrifuga" },
  { src: "/IMG_2758.jpeg", alt: "Tepih posle pranja" },
  { src: "/IMG_2765.jpeg", alt: "Sušenje tepiha na stalku" },
  { src: "/IMG_2768.jpeg", alt: "Tepisi na sušenju" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);

  const prev = useCallback(() =>
    setSelected((i) => (i !== null ? (i - 1 + images.length) % images.length : null)),
    []
  );

  const next = useCallback(() =>
    setSelected((i) => (i !== null ? (i + 1) % images.length : null)),
    []
  );

  useEffect(() => {
    if (selected === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, close, prev, next]);

  return (
    <section id="galerija" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Naši radovi
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Galerija</h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Pogledajte kako izgledaju naši rezultati — od preuzimanja do potpuno očišćenih tepiha.
          </p>
        </div>

        {/* Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {images.map((img, i) => (
            <div
              key={img.src}
              className="break-inside-avoid mb-3 cursor-pointer group relative overflow-hidden rounded-xl"
              onClick={() => setSelected(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={450}
                className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-blue-950/0 group-hover:bg-blue-950/30 transition-colors duration-300 rounded-xl flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Image container — stop propagation so clicking image doesn't close */}
          <div
            className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[selected]!.src}
              alt={images[selected]!.alt}
              className="max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl"
            />

            {/* Counter */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
              {selected + 1} / {images.length}
            </div>

            {/* Close */}
            <button
              onClick={close}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Zatvori"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Prev */}
            <button
              onClick={prev}
              className="absolute left-0 -translate-x-14 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Prethodna"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={next}
              className="absolute right-0 translate-x-14 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Sledeća"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Caption */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {images[selected]!.alt}
          </p>
        </div>
      )}
    </section>
  );
}
