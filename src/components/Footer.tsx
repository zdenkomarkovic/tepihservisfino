import Image from "next/image";
import Link from "next/link";

const MANIKAM_URL = "https://manikamwebsolutions.com/";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Col 1: Logo + opis */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-xl p-1 shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Tepih Servis Fino"
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
              </div>
              <div>
                <p className="text-white font-bold text-base leading-tight">
                  Tepih Servis Fino Kruševac - Varvarin
                </p>
                <p className="text-slate-400 text-xs mt-0.5">Čistoća i kvalitet na prvom mestu</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Profesionalno pranje tepiha, nameštaja i enterijera automobila. Preuzimanje i dostava
              na vašoj adresi.
            </p>
          </div>

          {/* Col 2: Brze veze */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Brze veze
            </h3>
            <nav className="flex flex-col gap-2.5 text-sm">
              <Link href="/#usluge" className="hover:text-white transition-colors">
                Usluge
              </Link>
              <Link href="/#cenovnik" className="hover:text-white transition-colors">
                Cenovnik
              </Link>
              <Link href="/#galerija" className="hover:text-white transition-colors">
                Galerija
              </Link>
              <Link href="/kontakt" className="hover:text-white transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Col 3: Kontakt info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Kontakt
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 text-blue-500 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:066360680" className="hover:text-white transition-colors">
                  066 360 680
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 text-blue-500 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Prvomajska 24, Bačina</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 text-blue-500 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Pon – Sub: 07:00 – 20:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <span>© {year} Tepih Servis Fino. Sva prava zadržana.</span>
          <span>
            Izrada sajta:{" "}
            <a
              href={MANIKAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Manikam Web Solutions
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
