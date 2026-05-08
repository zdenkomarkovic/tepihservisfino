export default function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Stupite u kontakt
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Kontaktirajte nas</h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Pozovite nas i dogovorite preuzimanje tepiha ili termin za pranje
            nameštaja i auto enterijera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Telefon</p>
                <a
                  href="tel:066360680"
                  className="text-2xl font-bold text-white hover:text-blue-400 transition-colors tracking-wide"
                >
                  066 360 680
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Adresa</p>
                <p className="text-white font-semibold text-lg">
                  Prvomajska 24
                </p>
                <p className="text-slate-300">Bačina</p>
                <p className="text-slate-400 text-sm mt-1">Opslužujemo Kruševac, Varvarin i okolinu</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Radno vreme</p>
                <p className="text-white font-semibold">Ponedeljak – Subota</p>
                <p className="text-slate-300">07:00 – 20:00</p>
              </div>
            </div>
          </div>

          {/* CTA card */}
          <div className="bg-blue-700 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Zakažite preuzimanje</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                Pozovite nas i dogovorite termin koji vam odgovara. Dolazimo na
                vašu adresu i preuzimamo tepih ili dogovaramo pranje nameštaja
                i auto enterijera.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="tel:066360680"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-6 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Pozovite: 066 360 680
              </a>
              <a
                href="https://maps.google.com/?q=Prvomajska+24+Bačina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Pogledajte na mapi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
