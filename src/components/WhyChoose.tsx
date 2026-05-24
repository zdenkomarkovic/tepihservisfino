const reasons = [
  "Profesionalno mašinsko pranje: Koristimo opremu namenjenu dubinskom pranju tepiha, staza i tekstilnih površina.",
  "Dubinsko uklanjanje nečistoća: Uklanjamo prašinu, pesak, mirise, mrlje i nečistoće koje se zadržavaju u vlaknima.",
  "Temeljno ispiranje: Tepih se ispira čistom vodom kako bi se uklonili ostaci prljavštine i sredstava za pranje.",
  "Kontrolisano sušenje: Pravilno sušenje pomaže da tepih ostane svež, bez neprijatnog mirisa vlage.",
  "Preuzimanje i dostava: Dolazimo po tepih i vraćamo ga na adresu nakon pranja.",
  "Lokalna usluga: Pokrivamo Kruševac, Varvarin, Ćićevac, Paraćin, Bačinu i okolna mesta.",
  "Topao i odgovoran pristup: Svaki tepih tretiramo pažljivo, kao da je deo našeg doma.",
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Kada birate kome poveravate svoj tepih, važno je da znate da će biti opran pažljivo, temeljno i profesionalno. Tepih nije samo komad tekstila - on je deo vašeg doma, prostora u kome boravite, odmarate, radite i provodite vreme sa porodicom.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-10">
            U Tepih Servisu Fino spajamo profesionalnu opremu, odgovoran pristup i domaćinski odnos prema svakom klijentu.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Zašto izabrati Tepih Servis Fino
          </h2>
        </div>
        <ul className="space-y-4">
          {reasons.map((reason, i) => (
            <li key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
              <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-slate-700 leading-relaxed">{reason}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
