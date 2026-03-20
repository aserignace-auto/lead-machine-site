import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const siteUrl = "https://lead-machine-site-nu.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lead Machine — Automatisation IA pour professionnels B2B",
    template: "%s | Lead Machine",
  },
  description:
    "Lead Machine deploie des systemes d'automatisation par IA sur mesure qui generent des leads, qualifient vos prospects et convertissent. Specialise immobilier.",
  keywords: [
    "lead generation",
    "automatisation",
    "intelligence artificielle",
    "B2B",
    "immobilier",
    "prospection automatique",
    "IA",
    "CRM",
    "leads qualifies",
  ],
  openGraph: {
    title: "Lead Machine — Automatisation IA pour professionnels B2B",
    description:
      "Generez des leads qualifies en automatique. Solution cle en main pour l'immobilier et les services B2B.",
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Lead Machine",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Machine — Automatisation IA B2B",
    description:
      "Generez des leads qualifies en automatique. Solution cle en main pour l'immobilier.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${outfit.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
