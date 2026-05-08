import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tepih Servis Fino | Pranje tepiha Kruševac, Varvarin, Bačina",
  description:
    "Profesionalno pranje tepiha, nameštaja i enterijera automobila u Kruševcu, Varvarinu i okolini. Preuzimanje na vašoj adresi. Bačina, Prvomajska 24. Tel: 066 360 680",
  keywords:
    "pranje tepiha Kruševac, tepih servis Kruševac, pranje tepiha Varvarin, tepih servis fino, Bačina, dubinsko pranje nameštaja, pranje auto enterijera, preuzimanje tepiha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
