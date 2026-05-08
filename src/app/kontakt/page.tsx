import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kontakt | Tepih Servis Fino – Kruševac, Varvarin, Bačina",
  description:
    "Kontaktirajte Tepih Servis Fino. Pranje tepiha u Kruševcu, Varvarinu i okolini. Adresa: Prvomajska 24, Bačina. Telefon: 066 360 680.",
};

const contactItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    label: "Telefon",
    value: "066 360 680",
    href: "tel:066360680",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    label: "Adresa",
    value: "Prvomajska 24, Bačina",
    href: "https://maps.google.com/?q=Prvomajska+24+Bačina+Srbija",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    label: "Radno vreme",
    value: "Pon – Sub: 07:00 – 20:00",
    href: null,
  },
];

export default function KontaktPage() {
  return (
    <>
      <Header />

      <main className="pt-16">
        {/* Page title */}
        <div className="bg-slate-900 py-14 text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Stupite u kontakt
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Kontakt</h1>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Pozovite nas ili nas pronađite na adresi — tu smo da pomognemo.
          </p>
        </div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* Left: contact info */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center text-white shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-slate-900 font-semibold text-lg hover:text-blue-700 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-900 font-semibold text-lg">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Big call CTA */}
              <a
                href="tel:066360680"
                className="mt-2 flex items-center justify-center gap-3 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-5 rounded-2xl text-xl transition-colors shadow-md"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Pozovite: 066 360 680
              </a>
            </div>

            {/* Right: map */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100 h-[480px] lg:h-[520px]">
                <iframe
                  src="https://maps.google.com/maps?q=Prvomajska+24+Ba%C4%8Dina+Srbija&output=embed&z=16&hl=sr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tepih Servis Fino – lokacija"
                />
              </div>
              <p className="mt-3 text-slate-400 text-sm text-center">
                Prvomajska 24, Bačina
              </p>
            </div>
          </div>
        </div>

        {/* Services reminder */}
        <div className="bg-slate-50 border-t border-slate-100 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Naše usluge</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Preuzimanje tepiha",
                "Pranje tepiha",
                "Sušenje tepiha",
                "Dubinsko pranje nameštaja",
                "Dubinsko pranje auto enterijera",
              ].map((s) => (
                <span
                  key={s}
                  className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
