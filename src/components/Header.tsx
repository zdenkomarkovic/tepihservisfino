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
    { label: "Početna", href: "/" },
    { label: "Usluge", href: isHome ? "#usluge" : "/#usluge" },
    { label: "Proces pranja", href: isHome ? "#proces" : "/#proces" },
    { label: "Cena", href: isHome ? "#cena" : "/#cena" },
    { label: "Područje rada", href: isHome ? "#podrucje" : "/#podrucje" },
    { label: "Galerija", href: isHome ? "#galerija" : "/#galerija" },
    { label: "Česta pitanja", href: isHome ? "#faq" : "/#faq" },
    { label: "Kontakt", href: isHome ? "#kontakt" : "/#kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.jpg"
            alt="Tepih Servis Fino"
            width={40}
            height={40}
            className="rounded-xl"
            priority
          />
          <div className="flex flex-col leading-tight">
            <span className="text-blue-700 font-bold text-base tracking-tight">
              Tepih Servis <span className="text-blue-500">Fino</span>
            </span>
            <span className="text-slate-400 text-xs">Bačina, Prvomajska 24</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-medium text-sm transition-colors ${
                pathname === link.href ? "text-blue-700" : "text-slate-600 hover:text-blue-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:066360680"
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-xl font-semibold transition-colors text-sm shrink-0"
          >
            066 360 680
          </a>
        </nav>

        {/* Mobile: call + hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href="tel:066360680"
            className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Pozovi
          </a>
          <button onClick={() => setOpen(!open)} className="p-2 text-slate-600" aria-label="Meni">
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
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-2 flex flex-col">
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
