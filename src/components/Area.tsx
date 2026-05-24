export default function Area() {
  return (
    <section id="podrucje" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Pranje tepiha za Kruševac, Varvarin, Ćićevac, Paraćin i okolinu
        </h2>
        <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
          <p>
            Tepih Servis Fino se nalazi u Bačini i pruža usluge profesionalnog pranja tepiha, pranja staza, dubinskog pranja nameštaja, dezinfekcije tepiha i pranja auto enterijera za šire područje Rasinskog okruga i okolnih mesta.
          </p>
          <p>
            Dolazimo po tepih na vašu adresu i vraćamo ga nakon pranja i sušenja. Na taj način štedite vreme, ne morate da nosite teške tepihe i ne morate da razmišljate o transportu.
          </p>
          <p className="font-medium text-slate-800">
            Naše usluge su dostupne za: Kruševac, Varvarin, Ćićevac, Paraćin, Bačinu, Obrež, Maskare, Bošnjane, Pojate, Stalać, Mrzenicu, Lučinu, Drenovac, Sikiricu, Jasiku, Kukljin, Dedinu, Lazaricu, Mudrakovac, Veliki Šiljegovac, Trstenik, Aleksandrovac, Brus i okolna mesta.
          </p>
          <p>
            Ako niste sigurni da li dolazimo do vašeg mesta, pozovite nas na 066 360 680 i proverite mogućnost preuzimanja.
          </p>
        </div>
        <div className="mt-8">
          <a
            href="tel:066360680"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
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
