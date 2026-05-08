import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Preuzimanje",
    description:
      "Pozovite nas i dogovorite termin. Dolazimo na vašu adresu i preuzimamo tepih — nema potrebe da ga vi donosite.",
    image: "/DJI_20260502_140742_554.JPG",
    imageAlt: "Preuzimanje tepiha sa adrese",
  },
  {
    number: "02",
    title: "Pranje",
    description:
      "Tepih se pere profesionalnom DR-P 3000 mašinom uz posebna sredstva za čišćenje. Uklanjamo prašinu, mrlje, bakterije i alergene.",
    image: "/IMG_2724.jpeg",
    imageAlt: "Mašinsko pranje tepiha",
  },
  {
    number: "03",
    title: "Sušenje",
    description:
      "Nakon pranja tepih prolazi kroz centrifugu i suši se na specijalnim stalcima u kontrolisanim uslovima — bez skupljanja i bez oštećenja.",
    image: "/IMG_2765.jpeg",
    imageAlt: "Sušenje tepiha na stalku",
  },
  {
    number: "04",
    title: "Dostava",
    description:
      "Čist i suh tepih vraćamo direktno na vašu adresu. Ceo proces traje obično 2–3 dana, a vi ni jednog momenta ne brinete.",
    image: "/IMG_2768.jpeg",
    imageAlt: "Dostava čistog tepiha",
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Kako funkcioniše
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Proces pranja tepiha
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Od preuzimanja do dostave — sve uradimo umesto vas. Jednostavno, brzo i bez muke.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col">
              {/* Connector line on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[108px] left-[calc(50%+60px)] right-0 h-0.5 bg-blue-100 z-0" />
              )}

              <div className="flex flex-col items-center text-center px-4 pb-10 lg:pb-0">
                {/* Photo */}
                <div className="relative w-full max-w-[220px] aspect-[4/3] rounded-2xl overflow-hidden shadow-md mb-5 z-10">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Number badge */}
                  <div className="absolute top-3 left-3 w-9 h-9 bg-blue-700 text-white text-sm font-bold rounded-xl flex items-center justify-center shadow">
                    {step.number}
                  </div>
                </div>

                {/* Arrow on mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden mb-5 text-blue-200">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}

                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-14 bg-slate-50 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-100">
          <div className="flex items-center gap-3 text-slate-700">
            <svg className="w-6 h-6 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm font-medium">
              Ceo proces obično traje <strong className="text-slate-900">2 do 3 dana</strong> od preuzimanja do dostave.
            </span>
          </div>
          <a
            href="tel:066360680"
            className="shrink-0 inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Zakažite preuzimanje
          </a>
        </div>
      </div>
    </section>
  );
}
