import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Preuzimanje tepiha",
    description:
      "Dolazimo po tepih na vašu adresu u dogovorenom terminu. Ne morate da ga nosite, pakujete u auto ili tražite prevoz.",
    image: "/DJI_20260502_140742_554.JPG",
    imageAlt: "Preuzimanje tepiha sa adrese",
  },
  {
    number: "02",
    title: "Pregled tepiha",
    description:
      "Pre pranja pregledamo tepih, materijal, stepen zaprljanosti, mrlje i eventualna oštećenja. Na osnovu toga biramo odgovarajući pristup pranju.",
    image: "/IMG_2732.jpeg",
    imageAlt: "",
  },
  {
    number: "03",
    title: "Otresanje prašine",
    description:
      "Pre dubinskog pranja, tepih se otresa kako bi se uklonila suva prašina, pesak, mrvice i nečistoće koje su ušle u dublje slojeve vlakana.",
    image: "/DJI_20260502_140758_484.JPG",
    imageAlt: "Otresanje tepiha",
  },
  {
    number: "04",
    title: "Dubinsko mašinsko pranje",
    description:
      "Tepih se pere profesionalnom opremom i odgovarajućim sredstvima za pranje. Cilj je da se uklone mrlje, mirisi, prašina i nečistoće iz dubine tepiha.",
    image: "/IMG_2735.jpeg",
    imageAlt: "Dubinsko mašinsko pranje tepiha",
  },
  {
    number: "05",
    title: "Ispiranje i centrifugiranje",
    description:
      "Nakon pranja, tepih se temeljno ispira čistom vodom. Zatim prolazi kroz centrifugu, čime se iz njega uklanja višak vode i ubrzava pravilno sušenje.",
    image: "/IMG_2758.jpeg",
    imageAlt: "Ispiranje tepiha čistom vodom",
  },
  {
    number: "06",
    title: "Kontrolisano sušenje",
    description:
      "Tepih se suši u kontrolisanim uslovima kako bi bio potpuno suv, svež i spreman za korišćenje. Pravilno sušenje je važno da ne bi došlo do neprijatnih mirisa od vlage.",
    image: "/IMG_2765.jpeg",
    imageAlt: "Sušenje tepiha na stalku",
  },
  {
    number: "07",
    title: "Dostava na adresu",
    description:
      "Kada je tepih čist i suv, vraćamo ga na vašu adresu u dogovorenom terminu.",
    image: "/IMG_2768.jpeg",
    imageAlt: "Dostava čistog tepiha",
  },
];

export default function Process() {
  return (
    <section id="proces" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Kako izgleda proces pranja tepiha?
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Svaki tepih prolazi kroz pažljivo organizovan proces kako bi bio temeljno opran, dobro ispran i pravilno osušen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow"
            >
              {step.image ? (
                <div className="relative aspect-[4/3]">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 w-10 h-10 bg-blue-700 text-white text-sm font-bold rounded-xl flex items-center justify-center shadow-md">
                    {step.number}
                  </div>
                </div>
              ) : (
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative">
                  <div className="w-16 h-16 bg-white/70 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  </div>
                  <div className="absolute top-3 left-3 w-10 h-10 bg-blue-700 text-white text-sm font-bold rounded-xl flex items-center justify-center shadow-md">
                    {step.number}
                  </div>
                </div>
              )}

              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-slate-50 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-100">
          <div className="flex items-center gap-3 text-slate-700">
            <svg className="w-6 h-6 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm font-medium">
              Pranje tepiha obično traje <strong className="text-slate-900">2 do 3 dana</strong>, u zavisnosti od količine tepiha, stepena zaprljanosti, vremenskih uslova i rasporeda preuzimanja.
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
