import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recrutement Setter & Closer — Lead Machine",
  description:
    "Rejoignez Lead Machine en tant que Setter ou Closer. Commission 20-30% sur CA HT, 100% remote, panier moyen 2500 EUR. Candidature en 2 minutes.",
  openGraph: {
    title: "Recrutement Setter & Closer — Lead Machine",
    description:
      "Rejoignez Lead Machine. Commission 20-30%, 100% remote, panier moyen 2500 EUR.",
  },
};

export default function RecrutementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
