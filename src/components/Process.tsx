import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Preuzimanje",
    description:
      "Dolazimo na vašu adresu i preuzimamo tepih. Nema potrebe da ga vi donosite — mi sve sredimo.",
    image: "/DJI_20260502_140742_554.JPG",
    imageAlt: "Preuzimanje tepiha sa adrese",
  },
  {
    number: "02",
    title: "Tresenje",
    description:
      "Tepih prolazi kroz DR-P 3000 mašinu koja izbija prašinu, pesak i sitne nečistoće iz dubine vlakana.",
    image: "/DJI_20260502_140758_484.JPG",
    imageAlt: "Tresenje tepiha na DR-P 3000 mašini",
  },
  {
    number: "03",
    title: "Pranje",
    description:
      "Rotacionom četkom i profesionalnim sredstvima temeljno peremo tepih — uklanjamo mrlje, bakterije i alergene.",
    image: "/IMG_2735.jpeg",
    imageAlt: "Pranje tepiha rotacionom četkom",
  },
  {
    number: "04",
    title: "Ispiranje",
    description:
      "Tepih se ispira čistom vodom pod pritiskom kako bi se uklonila sva sredstva za pranje i ostatak nečistoće.",
    image: "/IMG_2732.jpeg",
    imageAlt: "Ispiranje tepiha čistom vodom",
  },
  {
    number: "05",
    title: "Sušenje",
    description:
      "Tepih prolazi kroz centrifugu koja izbacuje višak vode, a zatim se suši na specijalnim stalcima u kontrolisanim uslovima.",
    image: "/IMG_2765.jpeg",
    imageAlt: "Sušenje tepiha na stalku",
  },
  {
    number: "06",
    title: "Dostava",
    description:
      "Čist, suv i svež tepih vraćamo direktno na vašu adresu. Ceo proces traje obično 2–3 dana.",
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
            Od preuzimanja do dostave — sve uradimo umesto vas. 6 koraka do savršeno čistog tepiha.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Number badge */}
                <div className="absolute top-3 left-3 w-10 h-10 bg-blue-700 text-white text-sm font-bold rounded-xl flex items-center justify-center shadow-md">
                  {step.number}
                </div>
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-10 bg-slate-50 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-100">
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
