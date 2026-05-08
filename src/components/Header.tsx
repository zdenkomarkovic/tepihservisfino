"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    { label: "Usluge", href: isHome ? "#usluge" : "/#usluge" },
    { label: "Cenovnik", href: isHome ? "#cenovnik" : "/#cenovnik" },
    { label: "Galerija", href: isHome ? "#galerija" : "/#galerija" },
    { label: "Kontakt", href: "/kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Tepih Servis Fino"
            width={48}
            height={48}
            className="rounded-xl"
            priority
          />
          <div className="flex flex-col leading-tight">
            <span className="text-blue-700 font-bold text-lg tracking-tight">
              Tepih Servis <span className="text-blue-500">Fino</span>
            </span>
            <span className="text-slate-400 text-xs">Bačina, Prvomajska 24</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-medium transition-colors ${
                pathname === link.href
                  ? "text-blue-700"
                  : "text-slate-600 hover:text-blue-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:066360680"
            className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-xl font-semibold transition-colors text-sm"
          >
            066 360 680
          </a>
        </nav>

        {/* Mobile: call + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:066360680"
            className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Pozovi
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-slate-600"
            aria-label="Meni"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-2 flex flex-col">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-3 text-slate-700 font-medium ${
                i < navLinks.length - 1 ? "border-b border-slate-100" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
