import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen">
      {/* Background photo */}
      <Image
        src="/DJI_20260502_140742_554.JPG"
        alt="Tepih Servis Fino - radnik"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark blue overlay */}
      <div className="absolute inset-0 bg-blue-950/30" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-5">
          Profesionalna usluga pranja
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Tepih Servis <span className="text-blue-600">Fino</span> Kruševac - Varvarin
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed">
          Pranje tepiha, nameštaja i enterijera automobila.
          <br className="hidden sm:block" />
          Profesionalna oprema. Preuzimanje na vašoj adresi.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:066360680"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            066 360 680
          </a>
          <a
            href="#usluge"
            className="inline-flex items-center justify-center border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            Naše usluge
          </a>
        </div>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-7 h-7 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
