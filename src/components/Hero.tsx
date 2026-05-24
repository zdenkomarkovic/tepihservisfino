import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen">
      <Image
        src="/DJI_20260502_140758_484.JPG"
        alt="Tepih Servis Fino - radnik"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-blue-950/50" />

      <div className="relative z-10 text-white px-4 max-w-3xl mx-auto py-32 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Tepih Servis <span className="text-blue-400">Fino</span> - profesionalno pranje tepiha, staza i nameštaja
        </h1>
        <p className="text-lg text-blue-100 font-semibold mb-6">
          Pranje tepiha za Kruševac, Varvarin, Ćićevac, Paraćin i okolna mesta Rasinskog okruga.
        </p>
        <div className="text-slate-200 text-base leading-relaxed space-y-4 mb-8 text-left">
          <p>
            Vaš tepih svakog dana skuplja prašinu, pesak, mirise, tragove obuće, dlake kućnih ljubimaca i nečistoće koje obično usisavanje ne može potpuno da ukloni.
          </p>
          <p>
            U Tepih Servisu Fino radimo profesionalno pranje tepiha, pranje staza, dubinsko pranje nameštaja, dezinfekciju tepiha i pranje auto enterijera. Koristimo profesionalnu opremu, mašinsko dubinsko pranje, temeljno ispiranje i kontrolisano sušenje kako bi vaš tepih bio čist, svež i spreman za dom.
          </p>
          <p>
            Dolazimo po tepih na vašu adresu, peremo ga u kontrolisanim uslovima i vraćamo čistog, suvog i spremnog za upotrebu.
          </p>
          <p>
            Pokrivamo Kruševac, Varvarin, Ćićevac, Paraćin, Bačinu, Obrež, Pojate, Stalać, Bošnjane, Maskare, Mrzenicu, Jasiku, Kukljin, Dedinu, Lazaricu, Mudrakovac i okolna mesta.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:066360680"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Pozovite nas
          </a>
          <a
            href="#usluge"
            className="inline-flex items-center justify-center border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            Zakažite preuzimanje tepiha
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-7 h-7 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
