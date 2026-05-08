const plans = [
  {
    title: "Pranje tepiha",
    price: "300",
    unit: "RSD / m²",
    description: "Cena uključuje preuzimanje, dubinsko pranje, sušenje i dostavu na vašu adresu.",
    bullets: [
      "Preuzimanje sa vaše adrese",
      "Dubinsko mašinsko pranje",
      "Sušenje u kontrolisanim uslovima",
      "Dostava čistog tepiha",
    ],
    highlight: true,
    cta: { label: "Pozovite: 066 360 680", href: "tel:066360680" },
  },
  {
    title: "Dubinsko pranje nameštaja",
    price: "Na upit",
    unit: "",
    description: "Cena zavisi od vrste i količine nameštaja. Pozovite nas za besplatnu procenu.",
    bullets: [
      "Sofe i ugaone garniture",
      "Fotelje i stolice",
      "Madraci",
      "Sve vrste tkanina",
    ],
    highlight: false,
    cta: { label: "Pozovite za cenu", href: "tel:066360680" },
  },
  {
    title: "Pranje auto enterijera",
    price: "Na upit",
    unit: "",
    description: "Cena zavisi od tipa i veličine vozila. Kontaktirajte nas za informacije.",
    bullets: [
      "Sedišta i nasloni",
      "Podne prostirke i tepisi",
      "Tabla i obloge vrata",
      "Strop i sigurnosni pojasevi",
    ],
    highlight: false,
    cta: { label: "Pozovite za cenu", href: "tel:066360680" },
  },
];

export default function Pricing() {
  return (
    <section id="cenovnik" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Transparentne cene
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Cenovnik
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Bez skrivenih troškova. Cena pranja tepiha je fiksna po kvadratnom metru —
            ostale usluge dogovaramo direktno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-2xl border flex flex-col overflow-hidden ${
                plan.highlight
                  ? "border-blue-600 shadow-lg shadow-blue-100 ring-1 ring-blue-600"
                  : "border-slate-200 shadow-sm bg-white"
              }`}
            >
              {/* Badge */}
              {plan.highlight && (
                <div className="bg-blue-700 text-white text-xs font-bold uppercase tracking-widest text-center py-2">
                  Fiksna cena
                </div>
              )}

              <div className={`p-7 flex flex-col flex-1 ${plan.highlight ? "bg-white" : ""}`}>
                {/* Title */}
                <h3 className="font-bold text-slate-900 text-lg mb-4">{plan.title}</h3>

                {/* Price */}
                <div className="mb-5">
                  {plan.unit ? (
                    <div className="flex items-end gap-1.5 leading-none">
                      <span className="text-5xl font-extrabold text-slate-900">{plan.price}</span>
                      <span className="text-slate-500 text-base mb-1">{plan.unit}</span>
                    </div>
                  ) : (
                    <span className="text-4xl font-extrabold text-slate-400">{plan.price}</span>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-8">
                  {plan.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <svg
                        className={`w-4 h-4 shrink-0 ${plan.highlight ? "text-blue-600" : "text-slate-400"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plan.cta.href}
                  className={`mt-auto inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm ${
                    plan.highlight
                      ? "bg-blue-700 hover:bg-blue-800 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {plan.cta.label}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-8 text-center text-slate-400 text-sm">
          * Minimalna naplata je 1 m². PDV nije uključen u cenu. Za veće količine moguć dogovor.
        </p>
      </div>
    </section>
  );
}
