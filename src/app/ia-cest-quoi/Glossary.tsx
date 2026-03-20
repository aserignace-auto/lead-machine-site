"use client";

import { useState } from "react";

const glossaryItems = [
  {
    term: "IA",
    label: "Intelligence Artificielle",
    answer:
      "Un programme informatique capable d\u2019analyser des donn\u00e9es et de prendre des d\u00e9cisions de mani\u00e8re autonome, en apprenant de ses erreurs. Dans notre contexte : l\u2019IA analyse les profils de vos prospects et d\u00e9cide lesquels sont les plus susceptibles de convertir, sans que vous ayez \u00e0 lui dire comment faire.",
  },
  {
    term: "SCRAPING",
    label: "Extraction automatique de donn\u00e9es",
    answer:
      "Technique qui permet \u00e0 un programme de \u201clire\u201d automatiquement des pages web et d\u2019en extraire des informations structur\u00e9es \u2014 comme les noms, num\u00e9ros de t\u00e9l\u00e9phone et prix d\u2019annonces immobili\u00e8res sur PAP ou Leboncoin \u2014 sans intervention humaine.",
  },
  {
    term: "SCORING",
    label: "Notation automatique des prospects",
    answer:
      "Le scoring est l\u2019attribution d\u2019un score (souvent de 0 \u00e0 100) \u00e0 chaque prospect selon des crit\u00e8res d\u00e9finis. Plus le score est \u00e9lev\u00e9, plus le prospect est qualifi\u00e9 et prioritaire. Cela permet de ne contacter en premier que ceux qui ont le plus de chances de devenir clients.",
  },
  {
    term: "NURTURING",
    label: "S\u00e9quence de maturation",
    answer:
      "Le nurturing consiste \u00e0 maintenir une relation avec un prospect qui n\u2019est pas pr\u00eat \u00e0 acheter maintenant, en lui envoyant r\u00e9guli\u00e8rement du contenu utile. Quand son timing change, vous \u00eates le premier \u00e0 qui il pense. En moyenne, 30% des prospects nurtur\u00e9s deviennent clients dans les 6 \u00e0 12 mois.",
  },
  {
    term: "PIPELINE",
    label: "Tunnel de vente",
    answer:
      "Le pipeline est une repr\u00e9sentation visuelle du parcours de vos prospects, de la premi\u00e8re prise de contact jusqu\u2019\u00e0 la signature. Chaque prospect est dans une \u201ccolonne\u201d selon son avancement. Lead Machine structure votre pipeline en 16 \u00e9tapes pour ne jamais perdre de vue o\u00f9 en est chaque opportunit\u00e9.",
  },
  {
    term: "WEBHOOK",
    label: "D\u00e9clencheur automatique",
    answer:
      "Un webhook est un signal envoy\u00e9 automatiquement d\u2019un outil \u00e0 un autre quand un \u00e9v\u00e9nement se produit. Exemple : quand un client paie en ligne via Stripe, un webhook d\u00e9clenche automatiquement la cr\u00e9ation de son dossier, l\u2019envoi de l\u2019email de bienvenue et la notification \u00e0 l\u2019\u00e9quipe technique \u2014 sans action manuelle.",
  },
  {
    term: "MRR",
    label: "Monthly Recurring Revenue",
    answer:
      "Le MRR est votre chiffre d\u2019affaires mensuel r\u00e9current \u2014 c\u2019est-\u00e0-dire ce que vos abonnements actifs vous rapportent chaque mois, de fa\u00e7on pr\u00e9visible. C\u2019est l\u2019indicateur cl\u00e9 de la sant\u00e9 d\u2019un business bas\u00e9 sur des abonnements. Un MRR croissant signifie que votre base de clients actifs augmente.",
  },
];

export default function Glossary() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col border border-border bg-border gap-px">
      {glossaryItems.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.term} className="bg-bg-card overflow-hidden">
            <button
              type="button"
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between px-6 py-5 text-left text-sm font-medium text-text-primary transition-colors hover:text-gold-light"
            >
              <span className="flex items-center gap-3">
                <span className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-gold">
                  {item.term}
                </span>
                {item.label}
              </span>
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/30 text-sm text-gold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? "max-h-[200px] px-6 pb-5" : "max-h-0 px-6 pb-0"}`}
            >
              <p className="text-sm leading-[1.8] text-text-dimmed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
