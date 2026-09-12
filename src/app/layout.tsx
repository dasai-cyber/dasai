import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsAppButton } from "@/components/whatsapp/FloatingWhatsAppButton";
import { COMPANY_DATA } from "@/lib/company";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dasai.cl"),
  title: {
    default: "DASAI — Logística, Transporte y Distribución en Chile",
    template: "%s | DASAI Logística y Distribución",
  },
  description:
    "Empresa líder en transporte, distribución programada y última milla en Chile. Flota propia monitoreada 24/7, entregas B2B/B2C seguras y trazabilidad en tiempo real.",
  keywords: [
    "transporte de carga chile",
    "distribución logística santiago",
    "última milla santiago",
    "empresa de logística chile",
    "camiones de reparto",
    "furgones de carga",
    "repartos ecommerce chile",
    "same day santiago",
    "fletes corporativos",
  ],
  authors: [{ name: "DASAI Logística SpA" }],
  creator: "DASAI Logística",
  publisher: "DASAI Logística",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://dasai.cl",
    siteName: "DASAI Logística y Distribución",
    title: "DASAI — Movemos tu negocio. Entregamos confianza.",
    description:
      "Soluciones profesionales de transporte y distribución con flota propia asegurada, trazabilidad 24/7 y cobertura en la Región Metropolitana y regiones clave de Chile.",
    images: [
      {
        url: "/images/hero/hero-logistics.svg",
        width: 1200,
        height: 630,
        alt: "DASAI Logística y Distribución",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DASAI — Logística y Transporte en Chile",
    description:
      "Distribución programada, última milla y transporte de carga con flota propia y monitoreo en tiempo real.",
    images: ["/images/hero/hero-logistics.svg"],
  },
  icons: {
    icon: [
      { url: "/images/logo/logo_dasai.png" },
      { url: "/icon.png" },
    ],
    shortcut: "/images/logo/logo_dasai.png",
    apple: "/images/logo/logo_dasai.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "TransportationService", "LocalBusiness"],
    name: COMPANY_DATA.name,
    legalName: COMPANY_DATA.legalName,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://dasai.cl",
    logo: "https://dasai.cl/images/logo/logo_dasai.png",
    description: COMPANY_DATA.description,
    telephone: COMPANY_DATA.phone,
    email: COMPANY_DATA.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_DATA.address.street,
      addressLocality: "Pudahuel",
      addressRegion: "Región Metropolitana",
      postalCode: "9020000",
      addressCountry: "CL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.4372,
      longitude: -70.7656,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:30",
        closes: "14:00",
      },
    ],
    sameAs: [
      COMPANY_DATA.social.linkedin,
      COMPANY_DATA.social.instagram,
      COMPANY_DATA.social.facebook,
    ].filter(Boolean),
  };

  return (
    <html lang="es" suppressHydrationWarning className={`${manrope.variable} font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-[#F72585] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
