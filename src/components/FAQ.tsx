const faqs = [
  {
    q: "Koliko traje pranje tepiha?",
    a: "Pranje tepiha obično traje 2 do 3 dana, u zavisnosti od količine tepiha, stepena zaprljanosti, vremenskih uslova i rasporeda preuzimanja. Tepih se vraća čist, suv i spreman za upotrebu.",
  },
  {
    q: "Da li dolazite po tepih na adresu?",
    a: "Da. Tepih Servis Fino nudi preuzimanje i dostavu tepiha na adresi za Kruševac, Varvarin, Ćićevac, Paraćin, Bačinu i okolna mesta.",
  },
  {
    q: "Da li radite pranje staza?",
    a: "Da. Radimo profesionalno pranje staza svih dimenzija, uključujući hodničke staze, kuhinjske staze, staze za poslovne prostore i staze iz domaćinstava.",
  },
  {
    q: "Da li radite dubinsko pranje nameštaja?",
    a: "Da. Radimo dubinsko pranje nameštaja, uključujući ugaone garniture, trosede, dvosede, fotelje, stolice, trpezarijske stolice, dušeke i madrace.",
  },
  {
    q: "Da li radite dezinfekciju tepiha?",
    a: "Da. Radimo tretman koji pomaže u uklanjanju neprijatnih mirisa, bakterija, alergena i nečistoća iz vlakana tepiha. Dezinfekcija se posebno preporučuje za domove sa decom, kućnim ljubimcima i osobama sklonim alergijama.",
  },
  {
    q: "Da li perete tepihe iz poslovnih prostora?",
    a: "Da. Radimo pranje tepiha i staza za kancelarije, lokale, apartmane, salone, ugostiteljske objekte i druge poslovne prostore.",
  },
  {
    q: "Koja je cena pranja tepiha?",
    a: "Cena pranja tepiha je 300 RSD po m². Za tačnu cenu pranja staza, nameštaja ili auto enterijera, najbolje je da nas pozovete i pošaljete osnovne informacije.",
  },
  {
    q: "Da li mogu da zakažem termin telefonom?",
    a: "Da. Termin možete zakazati pozivom na broj 066 360 680.",
  },
  {
    q: "Koja mesta pokrivate?",
    a: "Pokrivamo Kruševac, Varvarin, Ćićevac, Paraćin, Bačinu, Obrež, Pojate, Stalać, Bošnjane, Maskare, Mrzenicu, Jasiku, Kukljin, Dedinu, Lazaricu, Mudrakovac i okolna mesta Rasinskog okruga.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          Česta pitanja
        </h2>
        <div className="space-y-6">
          {faqs.map((item, i) => (
            <div key={i} className="border-b border-slate-100 pb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.q}</h3>
              <p className="text-slate-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
