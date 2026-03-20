"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const sectors = [
  { key: "all", label: "Tous les secteurs" },
  { key: "immo", label: "Immobilier" },
  { key: "coaching", label: "Coaching" },
  { key: "btp", label: "BTP" },
  { key: "services", label: "Services B2B" },
];

const testimonials = [
  {
    sector: "immo",
    sectorLabel: "Immobilier \u00b7 Agence",
    stars: 5,
    quote:
      "\u00ab En 3 semaines, mon pipeline est pass\u00e9 de 8 \u00e0 34 leads actifs. Je ne touche plus \u00e0 PAP depuis le d\u00e9ploiement. Le syst\u00e8me d\u00e9tecte des vendeurs motiv\u00e9s que je n\u2019aurais jamais trouv\u00e9s seul. \u00bb",
    author: "Thomas R.",
    role: "Agent ind\u00e9pendant \u00b7 Paris 8e \u00b7 6 mois avec Lead Machine",
    chips: ["+300% mandats", "\u221287% temps prospection"],
  },
  {
    sector: "immo",
    sectorLabel: "Immobilier \u00b7 Mandataire",
    stars: 5,
    quote:
      "\u00ab La premi\u00e8re semaine, j\u2019\u00e9tais sceptique. La deuxi\u00e8me, j\u2019avais 3 RDV planifi\u00e9s automatiquement. Aujourd\u2019hui je g\u00e8re deux fois plus de mandats avec le m\u00eame temps de travail. \u00bb",
    author: "Sandrine M.",
    role: "N\u00e9gociatrice immobili\u00e8re \u00b7 Lyon \u00b7 4 mois avec Lead Machine",
    chips: ["\u00d72 mandats", "3 RDV auto / sem."],
  },
  {
    sector: "immo",
    sectorLabel: "Immobilier \u00b7 R\u00e9seau agences",
    stars: 5,
    quote:
      "\u00ab J\u2019ai d\u00e9ploy\u00e9 Lead Machine sur mes 4 agences simultan\u00e9ment. Le ROI a \u00e9t\u00e9 visible d\u00e8s le premier mois. La mise en place a \u00e9t\u00e9 fluide et l\u2019\u00e9quipe tr\u00e8s r\u00e9active. \u00bb",
    author: "Marc D.",
    role: "Directeur r\u00e9seau \u00b7 Bordeaux \u00b7 8 mois avec Lead Machine",
    chips: ["4 agences d\u00e9ploy\u00e9es", "ROI mois 1"],
  },
  {
    sector: "coaching",
    sectorLabel: "Coaching Business",
    stars: 5,
    quote:
      "\u00ab Je perdais 2 heures par jour \u00e0 relancer des prospects dans mon Excel. Maintenant tout est automatis\u00e9. En un mois, j\u2019ai sign\u00e9 4 nouveaux clients que le syst\u00e8me avait qualifi\u00e9s sans moi. \u00bb",
    author: "Claire B.",
    role: "Coach business certifi\u00e9e \u00b7 Paris \u00b7 3 mois avec Lead Machine",
    chips: ["4 clients en 1 mois", "2h/j r\u00e9cup\u00e9r\u00e9es"],
  },
  {
    sector: "coaching",
    sectorLabel: "Formation professionnelle",
    stars: 5,
    quote:
      "\u00ab Ce que j\u2019appr\u00e9cie le plus ? La s\u00e9quence de nurturing. Des prospects qui disaient \u2018pas maintenant\u2019 en janvier ont sign\u00e9 en avril gr\u00e2ce aux emails automatiques de suivi. De l\u2019argent laiss\u00e9 sur la table, r\u00e9cup\u00e9r\u00e9. \u00bb",
    author: "Antoine V.",
    role: "Formateur ind\u00e9pendant \u00b7 Lyon \u00b7 5 mois avec Lead Machine",
    chips: ["Nurturing 90j actif", "+30% de conversions"],
  },
  {
    sector: "btp",
    sectorLabel: "BTP \u00b7 Artisan",
    stars: 5,
    quote:
      "\u00ab Je n\u2019avais pas le temps de relancer mes devis \u2014 je suis toujours sur les chantiers. Lead Machine relance automatiquement. Mon taux de signature a augment\u00e9 de 40% en 2 mois. \u00bb",
    author: "Rachid M.",
    role: "Artisan \u00e9lectricien \u00b7 Marseille \u00b7 2 mois avec Lead Machine",
    chips: ["+40% taux signature", "Relances auto"],
  },
  {
    sector: "services",
    sectorLabel: "Services aux entreprises",
    stars: 5,
    quote:
      "\u00ab Nous avons tripl\u00e9 notre volume de prospection sans embaucher. Le scoring IA nous permet de concentrer notre \u00e9quipe commerciale sur les 20% de leads qui g\u00e9n\u00e8rent 80% du CA. \u00bb",
    author: "Julie F.",
    role: "Directrice commerciale \u00b7 Cabinet RH \u00b7 Paris \u00b7 7 mois avec Lead Machine",
    chips: ["\u00d73 volume prospection", "Sans embauche"],
  },
  {
    sector: "services",
    sectorLabel: "Conseil & Consulting",
    stars: 5,
    quote:
      "\u00ab La d\u00e9mo m\u2019a convaincu en 20 minutes. La mise en place a tenu les d\u00e9lais promis. Et les r\u00e9sultats sont mesurables d\u00e8s le premier mois. Rare dans ce secteur. \u00bb",
    author: "Philippe S.",
    role: "Consultant ind\u00e9pendant \u00b7 Nantes \u00b7 4 mois avec Lead Machine",
    chips: ["D\u00e9ploiement en 9j", "ROI mois 1"],
  },
  {
    sector: "immo",
    sectorLabel: "Immobilier \u00b7 Investisseur",
    stars: 5,
    quote:
      "\u00ab Le ROI est imm\u00e9diat. Le syst\u00e8me identifie des vendeurs motiv\u00e9s que je n\u2019aurais jamais trouv\u00e9s moi-m\u00eame. C\u2019est simplement un avantage concurrentiel majeur sur ma zone. \u00bb",
    author: "Karim D.",
    role: "Investisseur immobilier \u00b7 Bordeaux \u00b7 5 mois avec Lead Machine",
    chips: ["Avantage concurrentiel", "ROI imm\u00e9diat"],
  },
];

export default function TestimonialGrid() {
  const [activeSector, setActiveSector] = useState("all");

  const filtered =
    activeSector === "all"
      ? testimonials
      : testimonials.filter((t) => t.sector === activeSector);

  return (
    <>
      {/* Filter buttons */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
        {sectors.map((s) => (
          <button
            key={s.key}
            type="button"
            onClick={() => setActiveSector(s.key)}
            className={`rounded-full border px-4 py-2 text-xs tracking-wider transition-all duration-200 ${
              activeSector === s.key
                ? "border-gold/35 bg-gold/10 text-gold-light"
                : "border-white/[0.08] bg-bg-card text-text-dimmed hover:border-gold/35 hover:bg-gold/10 hover:text-gold-light"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Testimonial cards grid */}
      <div className="mx-auto max-w-[1100px] grid grid-cols-1 border border-border bg-border gap-px md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t, i) => (
          <ScrollReveal key={`${t.author}-${activeSector}`} delay={(i % 3) * 80}>
            <div className="bg-bg-card p-8 transition-colors hover:bg-gold/[0.03] h-full flex flex-col">
              <span className="mb-3 block text-[0.65rem] font-medium uppercase tracking-[0.16em] text-gold">
                {t.sectorLabel}
              </span>
              <div className="mb-4 text-sm tracking-wider text-gold">
                {Array.from({ length: t.stars }, (_, k) => (
                  <span key={k}>{"\u2605"}</span>
                ))}
              </div>
              <p className="mb-5 flex-1 font-serif text-base font-light italic leading-relaxed text-white/85">
                {t.quote}
              </p>
              <div>
                <div className="text-sm font-medium">{t.author}</div>
                <div className="mt-0.5 text-xs text-text-dimmed">{t.role}</div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {t.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-green-400/20 bg-green-400/[0.08] px-2.5 py-0.5 text-[0.68rem] text-green-300"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </>
  );
}
