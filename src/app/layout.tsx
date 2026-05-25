import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://perionicatepiha.rs"),
  title: {
    default: "Tepih Servis Fino | Pranje tepiha Kruševac, Varvarin, Ćićevac i Paraćin",
    template: "%s | Tepih Servis Fino",
  },
  description:
    "Tepih Servis Fino nudi profesionalno pranje tepiha, staza, nameštaja i auto enterijera. Preuzimanje i dostava za Kruševac, Varvarin, Ćićevac, Paraćin i okolna mesta. Pozovite 066 360 680.",
  keywords:
    "pranje tepiha Kruševac, tepih servis Kruševac, pranje tepiha Varvarin, tepih servis fino, Bačina, dubinsko pranje nameštaja, pranje auto enterijera, preuzimanje tepiha, pranje tepiha Ćićevac, pranje tepiha Paraćin",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://perionicatepiha.rs",
    siteName: "Tepih Servis Fino",
    title: "Tepih Servis Fino | Pranje tepiha Kruševac, Varvarin, Ćićevac i Paraćin",
    description:
      "Profesionalno pranje tepiha, staza, nameštaja i auto enterijera. Preuzimanje i dostava za Kruševac, Varvarin, Ćićevac i Paraćin.",
    images: [
      {
        url: "/DJI_20260502_140758_484.JPG",
        alt: "Tepih Servis Fino - profesionalno pranje tepiha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tepih Servis Fino | Pranje tepiha Kruševac, Varvarin, Ćićevac i Paraćin",
    description:
      "Profesionalno pranje tepiha, staza, nameštaja i auto enterijera. Preuzimanje i dostava za Kruševac, Varvarin, Ćićevac i Paraćin.",
    images: ["/DJI_20260502_140758_484.JPG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tepih Servis Fino",
  description:
    "Profesionalno pranje tepiha, staza, nameštaja i auto enterijera. Preuzimanje i dostava za Kruševac, Varvarin, Ćićevac, Paraćin i okolna mesta Rasinskog okruga.",
  url: "https://perionicatepiha.rs",
  telephone: "+38166360680",
  image: "https://perionicatepiha.rs/DJI_20260502_140758_484.JPG",
  logo: "https://perionicatepiha.rs/logo.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Prvomajska 24",
    addressLocality: "Bačina",
    addressRegion: "Rasinski okrug",
    addressCountry: "RS",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.7167,
    longitude: 21.4333,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "20:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Kruševac" },
    { "@type": "City", name: "Varvarin" },
    { "@type": "City", name: "Ćićevac" },
    { "@type": "City", name: "Paraćin" },
    { "@type": "City", name: "Bačina" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Usluge pranja",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pranje tepiha" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pranje staza" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dubinsko pranje nameštaja" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dezinfekcija tepiha" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pranje auto enterijera" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Preuzimanje i dostava tepiha" } },
    ],
  },
  priceRange: "od 300 RSD/m²",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
