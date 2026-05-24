export default function VAK() {
  return (
    <section className="py-20 bg-blue-950 text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Vratite svežinu svom domu
        </h2>
        <div className="space-y-5 text-blue-100 text-lg leading-relaxed">
          <p>
            Zamislite da se vaš tepih ponovo vidi u pravoj boji. Da prostor zamiriše na čisto. Da pod nogama osetite mekoću opranih vlakana i da znate da je prašina iz dubine uklonjena.
          </p>
          <p>
            U Tepih Servisu Fino tepih ne peremo površinski. Svaki tepih prolazi kroz proces dubinskog pranja, ispiranja, centrifugiranja i sušenja, kako bi se u vaš dom vratio čist, svež i prijatan za korišćenje.
          </p>
          <p>Vi nas pozovete. Mi dolazimo po tepih. Vraćamo ga opranog i suvog.</p>
          <p className="font-semibold text-white">Jednostavno, praktično i profesionalno.</p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:066360680"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Pozovite nas
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            Zakažite preuzimanje
          </a>
        </div>
      </div>
    </section>
  );
}
