"use client";

import { useState } from "react";

interface TimelineStep {
  number: number;
  day: string;
  tag: string;
  title: string;
  text: string;
  items: string[];
  badge: { label: string; type: "auto" | "manual" };
}

interface Phase {
  label: string;
  steps: TimelineStep[];
}

const phases: Phase[] = [
  {
    label: "Decouverte",
    steps: [
      {
        number: 1,
        day: "J0",
        tag: "Prise de contact",
        title: "Vous demandez votre demo gratuite",
        text: "Vous remplissez le formulaire de contact ou reservez directement un creneau dans notre agenda. En moins de 24h, vous recevez une confirmation et un lien de visio.",
        items: [
          "Aucune preparation de votre cote requise",
          "L'appel dure 30 minutes exactement",
          "Aucun engagement, aucune carte bancaire",
        ],
        badge: { label: "Confirmation automatique", type: "auto" },
      },
      {
        number: 2,
        day: "J0",
        tag: "Appel decouverte — 30 min",
        title: "Nous analysons votre situation",
        text: "Maxime prend le temps de comprendre votre activite, votre processus commercial actuel, vos cibles et vos objectifs. Ce n'est pas un pitch — c'est un vrai diagnostic.",
        items: [
          "Analyse de votre flux de prospection actuel",
          "Identification des taches automatisables",
          "Estimation du potentiel de gains",
          "Presentation de la solution adaptee a votre secteur",
        ],
        badge: { label: "Action humaine — Maxime", type: "manual" },
      },
      {
        number: 3,
        day: "J+1",
        tag: "Proposition commerciale",
        title: "Vous recevez votre devis personnalise",
        text: "Dans les 48h suivant l'appel, vous recevez un devis detaillant precisement la solution proposee, le forfait recommande et le delai de mise en place. Pas de surprise.",
        items: [
          "Devis signable en ligne (aucune impression)",
          "CGV jointes automatiquement",
          "Paiement securise en ligne via Stripe",
        ],
        badge: { label: "Devis et signature automatises", type: "auto" },
      },
    ],
  },
  {
    label: "Deploiement",
    steps: [
      {
        number: 4,
        day: "J+1",
        tag: "Onboarding technique",
        title: "Vous remplissez votre fiche technique en 15 minutes",
        text: "Des votre paiement confirme, vous recevez un formulaire simple a remplir : votre zone geographique, vos outils existants, vos acces email, votre script de contact ideal. C'est tout.",
        items: [
          "Formulaire guide — aucune competence technique requise",
          "15 minutes maximum de votre temps",
          "Guide PDF d'utilisation envoye simultanement",
        ],
        badge: {
          label: "Email de bienvenue + formulaire automatiques",
          type: "auto",
        },
      },
      {
        number: 5,
        day: "J2 a J10",
        tag: "Developpement & configuration",
        title: "Notre equipe technique construit votre systeme",
        text: "Bilel, notre responsable technique, configure l'integralite de votre solution sur mesure : les scrapers, le scoring IA, les sequences email et SMS, les integrations avec vos outils. Vous n'avez rien a faire pendant cette phase.",
        items: [
          "Configuration du scraping sur vos plateformes cibles",
          "Parametrage du scoring IA selon votre secteur",
          "Redaction et programmation de vos sequences personnalisees",
          "Integration avec votre CRM ou creation du tableau de bord",
          "Tests complets avant livraison",
        ],
        badge: { label: "Developpement technique — Bilel", type: "manual" },
      },
    ],
  },
  {
    label: "Activation",
    steps: [
      {
        number: 6,
        day: "J10",
        tag: "Livraison",
        title: "Vous recevez vos acces et une visio de prise en main",
        text: "Votre systeme est operationnel. Vous recevez tous vos acces par email et un lien pour planifier votre visio de prise en main de 45 minutes avec l'equipe Lead Machine.",
        items: [
          "Acces tableau de bord et outils client",
          "Visio de demonstration live du systeme en action",
          "Formation a l'utilisation du pipeline",
          "Le premier lead tombe generalement dans les 24h suivant l'activation",
        ],
        badge: {
          label: "Envoi acces + lien visio automatiques",
          type: "auto",
        },
      },
      {
        number: 7,
        day: "J10+",
        tag: "Le systeme tourne en autonomie",
        title: "Votre IA travaille. Vous gerez les opportunites.",
        text: "A partir de ce moment, le systeme fonctionne 24h/24. Les prospects sont detectes, scores, contactes et relances automatiquement. Vous recevez uniquement les leads chauds, prets a etre appeles.",
        items: [
          "Prospection automatique en continu",
          "Sequences email/SMS declenchees sans intervention",
          "Leads chauds remontes dans votre pipeline en temps reel",
          "Rapport de performance hebdomadaire automatique",
        ],
        badge: { label: "Fonctionnement 100% automatise", type: "auto" },
      },
    ],
  },
  {
    label: "Optimisation",
    steps: [
      {
        number: 8,
        day: "J+30",
        tag: "Suivi mensuel",
        title: "Appel de suivi mensuel avec Maxime",
        text: "Chaque mois, Maxime vous appelle pour faire le point sur les resultats, analyser les performances et identifier les axes d'amelioration. Vos retours terrain alimentent directement les ajustements du systeme.",
        items: [
          "Analyse des metriques cles (leads, taux de conversion, CA)",
          "Ajustements des sequences email/SMS si necessaire",
          "Optimisation du scoring IA selon les retours terrain",
        ],
        badge: { label: "Suivi humain — Maxime", type: "manual" },
      },
      {
        number: 9,
        day: "Continu",
        tag: "Amelioration continue",
        title: "Le systeme apprend et s'ameliore",
        text: "Les donnees generees par votre systeme alimentent en permanence l'IA : quels messages convertissent le mieux, quels profils de prospects sont les plus chauds, quelles zones geographiques sont les plus rentables.",
        items: [
          "A/B testing automatique des sequences de contact",
          "Affinement du scoring IA selon les donnees reelles",
          "Revue trimestrielle approfondie et proposition d'evolutions",
        ],
        badge: {
          label: "Optimisation continue automatisee",
          type: "auto",
        },
      },
    ],
  },
];

export default function PhaseTabs() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <>
      {/* Tab navigation */}
      <div className="mx-auto flex max-w-4xl gap-px overflow-hidden rounded-sm border border-border bg-border">
        {phases.map((phase, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActivePhase(i)}
            className={`flex-1 px-3 py-4 text-center font-sans text-sm transition-all duration-200 ${
              activePhase === i
                ? "bg-gold/[0.12] text-gold-light"
                : "bg-bg-card text-text-dimmed hover:bg-white/[0.04] hover:text-text-primary"
            }`}
          >
            <span
              className={`block font-serif text-xl leading-none mb-1 ${
                activePhase === i ? "text-gold" : "text-gold/40"
              }`}
            >
              0{i + 1}
            </span>
            {phase.label}
          </button>
        ))}
      </div>

      {/* Phase content */}
      <div className="mx-auto mt-16 max-w-4xl">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden md:block" />

          <div className="flex flex-col gap-0.5">
            {phases[activePhase].steps.map((step, i) => (
              <div
                key={`${activePhase}-${i}`}
                className="grid grid-cols-1 gap-8 md:grid-cols-[100px_1fr]"
                style={{
                  animation: `slideUp 0.5s ease ${i * 0.12}s both`,
                }}
              >
                {/* Left: circle + day */}
                <div className="flex items-start gap-3 pt-6 md:flex-col md:items-center">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold/[0.08] font-serif text-sm text-gold">
                    {step.number}
                  </div>
                  <span className="text-[0.65rem] uppercase tracking-[0.1em] text-white/30">
                    {step.day}
                  </span>
                </div>

                {/* Right: card */}
                <div className="border border-border bg-bg-card p-8 transition-colors duration-300 hover:bg-gold/[0.03]">
                  <span className="mb-2 block text-[0.65rem] font-medium uppercase tracking-[0.18em] text-gold">
                    {step.tag}
                  </span>
                  <h3 className="mb-3 font-serif text-2xl font-light">
                    {step.title}
                  </h3>
                  <p className="mb-4 text-[0.85rem] leading-[1.8] text-text-dimmed">
                    {step.text}
                  </p>
                  <ul className="mb-4 flex flex-col gap-2">
                    {step.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex gap-2.5 text-[0.82rem] text-white/70"
                      >
                        <span className="text-gold flex-shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.12em] ${
                      step.badge.type === "auto"
                        ? "border-green-400/20 text-green-400"
                        : "border-orange-400/20 text-orange-400"
                    }`}
                  >
                    {step.badge.type === "auto" && (
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
                    )}
                    {step.badge.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
