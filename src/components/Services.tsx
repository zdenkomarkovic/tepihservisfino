import Image from "next/image";

const services = [
  {
    title: "Pranje tepiha",
    description:
      "Tepisi su jedan od najkorišćenijih delova doma. Po njima hodamo, deca se igraju, kućni ljubimci leže, a prašina, pesak, mirisi i sitne nečistoće ulaze duboko u vlakna. Obično usisavanje uklanja samo površinski deo prljavštine. Za temeljnu higijenu potrebno je profesionalno mašinsko pranje tepiha. U Tepih Servisu Fino tepih prolazi kroz kompletan proces: otresanje, dubinsko pranje, ispiranje čistom vodom, centrifugiranje i sušenje u kontrolisanim uslovima. Na taj način uklanjamo prašinu, pesak, mrlje, neprijatne mirise i nečistoće koje se zadržavaju u dubini tepiha. Radimo pranje tepiha za Kruševac, Varvarin, Ćićevac, Paraćin i okolna mesta.",
    image: "/IMG_2724.jpeg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
        />
      </svg>
    ),
  },
  {
    title: "Pranje staza",
    description:
      "Staze se najčešće nalaze u hodnicima, ulazima, kuhinjama i prostorima kroz koje se svakodnevno mnogo prolazi. Zbog toga brzo upijaju prašinu, vlagu, mirise i tragove obuće. Radimo profesionalno pranje staza svih dimenzija, uz pažljivo tretiranje materijala, dubinsko pranje i temeljno ispiranje. Ova usluga je odličan izbor za domaćinstva, stanove, kuće, poslovne prostore, lokale, apartmane i kancelarije. Nakon pranja, staze su čistije, svežije i prijatnije za svakodnevnu upotrebu.",
    image: "/IMG_2735.jpeg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M4 6h16M4 10h16M4 14h16M4 18h16"
        />
      </svg>
    ),
  },
  {
    title: "Dubinsko pranje nameštaja",
    description:
      "Nameštaj svakodnevno upija prašinu, znoj, mirise hrane, dim, dlake kućnih ljubimaca i nečistoće koje se ne vide odmah. Vremenom tapacirani nameštaj može da izgubi svežinu, promeni miris i izgleda tamnije nego ranije. Zato radimo dubinsko pranje nameštaja profesionalnom opremom koja prodire u tkaninu i izvlači nečistoće iz dubljih slojeva. Radimo: dubinsko pranje ugaonih garnitura, pranje troseda, pranje dvoseda, pranje fotelja, pranje trpezarijskih stolica, pranje dušeka i madraca, osvežavanje tapaciranog nameštaja. Dubinsko pranje nameštaja vraća osećaj svežine prostoru i produžava vek trajanja vaših garnitura, stolica i dušeka.",
    image: "/pranje%20namestaja.png",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
      </svg>
    ),
  },
  {
    title: "Dezinfekcija tepiha",
    description:
      "Pored vidljive čistoće, veoma je važna i higijena. Tepisi u sebi mogu zadržavati bakterije, alergene, prašinu, neprijatne mirise i nečistoće koje ne vidimo golim okom. Zato nudimo dezinfekciju tepiha kao dodatni tretman koji pomaže da tepih bude higijenski čistiji i prijatniji za korišćenje. Dezinfekcija tepiha se posebno preporučuje za: domove sa decom, domove sa kućnim ljubimcima, osobe sklone alergijama, tepihe koji dugo nisu profesionalno prani, tepihe koji imaju neprijatan miris, poslovne prostore i lokale. Čist tepih ne treba samo da se vidi. Treba da se oseti pod rukom, u prostoru i u mirisu doma.",
    image: "/DJI_20260502_140742_554.JPG",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Pranje auto enterijera",
    description:
      "Auto enterijer svakodnevno trpi prašinu, fleke, vlagu, mirise, znoj i tragove korišćenja. Sedišta, patosnice, podne obloge i tekstilni delovi kabine vremenom gube svežinu i upijaju neprijatne mirise. Radimo dubinsko pranje auto enterijera, uključujući sedišta, tapacire, podne obloge, patosnice i tekstilne površine u automobilu. Ova usluga je odličan izbor ako želite da osvežite automobil, uklonite neprijatne mirise, pripremite vozilo za prodaju ili jednostavno vratite osećaj čistoće u kabini.",
    image: "/pranjeauta.png",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h7.5M13.5 9H4.5l2.25-3h7.5l3 3M13.5 9l3 9H4.5L7.5 9M16.5 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0"
        />
      </svg>
    ),
  },
  {
    title: "Preuzimanje i dostava tepiha",
    description:
      "Znamo da nošenje tepiha nije jednostavno. Tepisi su teški, nezgodni za transport i zahtevaju prostor za pravilno sušenje. Zato nudimo preuzimanje i dostavu tepiha na adresi. Vi nas pozovete, dogovorimo termin, mi dolazimo po tepih, peremo ga i vraćamo čistog i suvog. Preuzimanje i dostava dostupni su za Kruševac, Varvarin, Ćićevac, Paraćin, Bačinu i okolna mesta.",
    image: "/IMG_2768.jpeg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Naše usluge
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Profesionalno pranje i dubinsko čišćenje za vaš dom, nameštaj i vozilo.
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
                <p className="text-slate-500 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-700 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-xl mb-1">Zakažite odmah</h3>
            <p className="text-blue-100 text-sm">
              Pozovite nas i dogovorite termin.
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
