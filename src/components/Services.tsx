import Image from "next/image";

const services = [
  {
    title: "Pranje tepiha",
    description:
      "Potpuna usluga od preuzimanja do dostave. Dolazimo po tepih, peremo ga profesionalnom mašinom i vraćamo čistim na vašu adresu.",
    image: "/IMG_2724.jpeg",
    bullets: ["Preuzimanje sa vaše adrese", "Mašinsko dubinsko pranje", "Sušenje u kontrolisanim uslovima", "Dostava na adresu"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
        />
      </svg>
    ),
  },
  {
    title: "Dubinsko pranje nameštaja",
    description:
      "Sofe, fotelje, madraci, stolice — temeljno čišćenje bez oštećenja materijala. Uklanjamo mrlje, alergene i neprijatne mirise.",
    image: "/pranje%20namestaja.png",
    bullets: ["Sofe i fotelje", "Madraci", "Trpezarijske stolice", "Sve vrste tkanina"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
        />
      </svg>
    ),
  },
  {
    title: "Dubinsko pranje auto enterijera",
    description:
      "Kompletno čišćenje unutrašnjosti vozila — sedišta, podnih tepiha, table, obloga vrata i stropa. Vaš auto kao nov.",
    image: "/pranjeauta.png",
    bullets: ["Sedišta i nasloni", "Podne prostirke", "Tabla i obloge vrata", "Strop i pojasevi"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h7.5M13.5 9H4.5l2.25-3h7.5l3 3M13.5 9l3 9H4.5L7.5 9M16.5 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="usluge" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Šta nudimo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Naše usluge
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Koristimo profesionalnu opremu i proverene metode kako bi vaši tepisi
            i nameštaj bili savršeno čisti.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
            >
              {s.image ? (
                <div className="relative h-52">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <div className="h-52 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/70 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                    {s.icon}
                  </div>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-blue-600 shrink-0">{s.icon}</div>
                  <h3 className="font-bold text-slate-900 text-lg leading-tight">
                    {s.title}
                  </h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {s.description}
                </p>
                <ul className="mt-auto space-y-1.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="bg-blue-700 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-xl mb-1">Zakažite odmah</h3>
            <p className="text-blue-100 text-sm">
              Pozovite nas i dogovorite termin. Brza usluga, povoljne cene, zadovoljni klijenti.
            </p>
          </div>
          <a
            href="tel:066360680"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            066 360 680
          </a>
        </div>
      </div>
    </section>
  );
}
