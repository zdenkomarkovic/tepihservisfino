import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyChoose from "@/components/WhyChoose";
import Area from "@/components/Area";
import Pricing from "@/components/Pricing";
import VAK from "@/components/VAK";
import ForWho from "@/components/ForWho";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Process />
        <WhyChoose />
        <Area />
        <Pricing />
        <VAK />
        <ForWho />
        <FAQ />
        <Contact />
        <Gallery />

        {/* Dodatni SEO blok za dno stranice */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Tepih servis za Kruševac, Varvarin, Ćićevac i Paraćin
            </h2>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                Ako tražite pouzdan tepih servis u Kruševcu, pranje tepiha u Varvarinu, tepih servis u Ćićevcu ili pranje tepiha u Paraćinu, Tepih Servis Fino vam nudi profesionalnu i praktičnu uslugu uz preuzimanje i dostavu.
              </p>
              <p>
                Radimo dubinsko pranje tepiha, mašinsko pranje staza, dezinfekciju tepiha, dubinsko pranje nameštaja i pranje auto enterijera. Naša usluga je namenjena domaćinstvima, poslovnim prostorima, lokalima, apartmanima, kancelarijama i svima koji žele čistiji i svežiji prostor.
              </p>
              <p>
                Tepisi, staze, ugaone garniture, fotelje, stolice i dušeci svakodnevno skupljaju prašinu, mirise i nečistoće. Profesionalno dubinsko pranje pomaže da prostor bude prijatniji, uredniji i higijenski bolji za svakodnevni boravak.
              </p>
              <p>
                Pozovite 066 360 680 i zakažite profesionalno pranje tepiha za Kruševac, Varvarin, Ćićevac, Paraćin i okolna mesta.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
