import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Lead Machine - Automatisation IA B2B",
  description:
    "Générez des leads qualifiés en automatique grâce à l'intelligence artificielle. Solution clé en main pour l'immobilier, le BTP et les services B2B.",
  keywords: [
    "lead generation",
    "automatisation",
    "intelligence artificielle",
    "B2B",
    "immobilier",
    "prospection automatique",
  ],
  openGraph: {
    title: "Lead Machine - Automatisation IA B2B",
    description:
      "Générez des leads qualifiés en automatique grâce à l'intelligence artificielle.",
    type: "website",
    locale: "fr_FR",
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
      </body>
    </html>
  );
}
