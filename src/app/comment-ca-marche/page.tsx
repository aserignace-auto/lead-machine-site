import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import PhaseTabs from "@/components/PhaseTabs";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Comment ca marche — Lead Machine",
  description:
    "De votre premier contact avec Lead Machine jusqu'au systeme qui tourne en autonomie dans votre activite — voici exactement ce qui se passe a chaque etape.",
};

/* ── Data ── */

const techCards = [
  {
    icon: "\u2295",
    title: "Detection & sourcing",
    text: "Des scrapers sur mesure surveillent en temps reel les plateformes pertinentes pour votre secteur. Chaque nouvelle cible est automatiquement importee, dedupliquee et enrichie.",
    chips: ["PAP / Leboncoin", "LinkedIn", "SeLoger", "APIs B2B"],
  },
  {
    icon: "\u2234",
    title: "Scoring par IA",
    text: "Un modele d'IA analyse des dizaines de criteres pour attribuer un score de motivation a chaque prospect. Les plus chauds remontent automatiquement en tete de votre pipeline.",
    chips: ["Analyse semantique", "Score 0\u2013100", "Temps reel"],
  },
  {
    icon: "\u25C9",
    title: "Sequences multicanal",
    text: "Les sequences email et SMS se declenchent automatiquement selon le comportement de chaque prospect. Le bon message, au bon moment, sur le bon canal.",
    chips: ["Brevo", "Gmail", "SMS auto", "Calendly"],
  },
];

const beforeItems = [
  "Vous parcourez manuellement PAP et Leboncoin chaque matin",
  "Vous appelez des inconnus sans aucune donnee sur leur motivation",
  "Vous oubliez de relancer des prospects qui auraient dit oui",
  "Vos leads sont dans des fichiers Excel eparpilles",
  "Vous passez 3h/jour sur des taches qui ne generent pas de CA",
  "Votre pipeline est vide les jours ou vous n'avez pas le temps de prospecter",
  "Vous dependez entierement de votre energie et de votre disponibilite",
];

const afterItems = [
  "Votre systeme detecte les prospects pendant que vous dormez",
  "Vous recevez une liste de contacts scores et classes par motivation",
  "Chaque prospect est relance automatiquement au bon moment",
  "Tout est centralise dans un pipeline clair et actionnable",
  "Vous ne consacrez que 2h/semaine a la prospection — le reste est automatise",
  "Votre pipeline s'alimente en continu, 7j/7, 24h/24",
  "Votre croissance ne depend plus de votre temps disponible",
];

const faqItems = [
  {
    question: "Est-ce que je dois avoir des competences techniques ?",
    answer:
      "Absolument aucune. Votre seule contribution technique est de remplir un formulaire de 15 minutes au demarrage. Tout le reste — configuration, developpement, tests, maintenance — est gere par notre equipe. Vous utilisez ensuite un tableau de bord intuitif, concu pour des commerciaux, pas des developpeurs.",
  },
  {
    question: "Combien de temps me prend le systeme chaque semaine ?",
    answer:
      "En moyenne, nos clients consacrent moins de 2 heures par semaine a l'utilisation active du systeme : consulter le pipeline, qualifier les leads remontes par l'IA, et passer les appels prioritaires. Tout le reste est automatise.",
  },
  {
    question: "Que se passe-t-il si j'ai un probleme ou une question apres la mise en place ?",
    answer:
      "Vous avez acces a notre support par email, et un appel mensuel est inclus dans chaque forfait. Les forfaits superieurs beneficient d'un support prioritaire avec un delai de reponse garanti sous 4h. Vous n'etes jamais seul.",
  },
  {
    question: "Est-ce que ca fonctionne si je n'ai pas encore de CRM ?",
    answer:
      "Oui. Si vous n'avez pas de CRM, nous vous fournissons un tableau de bord Google Sheets entierement structure et synchronise automatiquement. Si vous avez deja un CRM (HubSpot, Pipedrive, Odoo...), nous nous y integrons directement.",
  },
  {
    question: "Comment le systeme genere-t-il vraiment plus de leads ?",
    answer:
      "Le systeme surveille en continu des dizaines de sources selon votre secteur (annonces PAP, LinkedIn, bases B2B...). Il detecte des opportunites que vous ne verriez jamais manuellement — parce qu'il travaille 24h/24 et peut analyser des centaines de signaux simultanement. Les leads identifies sont ensuite contactes automatiquement via des sequences optimisees.",
  },
];

/* ── Page ── */

export default function CommentCaMarchePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-[6vw] pt-24 pb-20 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(201,168,76,0.07)_0%,transparent_70%)]" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.035) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%)",
          }}
        />
        {/* Orbs */}
        <div
          className="pointer-events-none absolute -top-20 -right-16 h-[500px] w-[500px] rounded-full blur-[90px]"
          style={{
            background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)",
            animation: "float 14s ease-in-out infinite",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 -left-16 h-[300px] w-[300px] rounded-full blur-[90px]"
          style={{
            background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
            animation: "float 18s ease-in-out infinite reverse",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[820px]">
          <ScrollReveal>
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-gold/30 px-5 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-gold">
              <span
                className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold shadow-[0_0_8px_var(--gold)]"
                style={{ animation: "pulse-dot 2s infinite" }}
              />
              Transparence totale &middot; Zero jargon &middot; Etape par etape
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-serif text-[clamp(2.8rem,6vw,6rem)] font-light leading-[1.08] tracking-tight">
              Comment ca
              <br />
              <em className="text-gradient-gold not-italic">marche ?</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mx-auto mt-5 max-w-[600px] text-base text-text-dimmed">
              De votre premier contact avec Lead Machine jusqu&apos;au systeme qui tourne en
              autonomie dans votre activite — voici exactement ce qui se passe, a chaque etape, sans
              rien cacher.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-10">
              <Button href="/#contact" size="lg">
                Voir ca en demo &rarr;
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PHASE TABS ── */}
      <section className="px-[6vw] pt-24 pb-0">
        <ScrollReveal>
          <SectionHeader
            label="Le parcours complet"
            title="4 phases, <em>une seule direction</em>"
            subtitle="Chaque phase est pensee pour que vous ne fassiez que l'essentiel — et que l'IA fasse le reste."
          />
        </ScrollReveal>

        <div className="mt-10">
          <PhaseTabs />
        </div>
      </section>

      {/* ── TECHNOLOGY ── */}
      <section className="px-[6vw] py-24">
        <ScrollReveal>
          <SectionHeader
            label="Sous le capot"
            title="La technologie qui <em>fait tourner tout ca</em>"
            subtitle="Des outils eprouves, assembles et configures specifiquement pour votre activite."
          />
        </ScrollReveal>

        <div className="mx-auto mt-16 grid max-w-[1100px] grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {techCards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 80}>
              <div className="bg-bg-card p-10">
                <span className="mb-5 block text-3xl">{card.icon}</span>
                <h3 className="mb-3 font-serif text-2xl font-light">{card.title}</h3>
                <p className="mb-5 text-[0.84rem] leading-[1.8] text-text-dimmed">{card.text}</p>
                <div className="flex flex-wrap gap-1.5">
                  {card.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-gold/20 px-3 py-1 text-[0.68rem] tracking-wider text-gold-lighter"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── BEFORE / AFTER ── */}
      <section className="bg-[#111111] px-[6vw] py-24">
        <ScrollReveal>
          <SectionHeader
            label="La difference concrete"
            title="Votre quotidien, <em>avant et apres</em>"
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="mx-auto mt-16 grid max-w-[1000px] grid-cols-1 border border-border bg-border md:grid-cols-2">
            {/* Before */}
            <div className="border-b border-border bg-red-500/[0.03] p-10 md:border-b-0 md:border-r">
              <div className="mb-6 flex items-center gap-2.5 text-[0.68rem] uppercase tracking-[0.2em] text-red-400">
                <span>{"\u2715"}</span> Avant Lead Machine
              </div>
              <ul className="flex flex-col gap-4">
                {beforeItems.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.86rem] leading-[1.65] text-white/60">
                    <span className="flex-shrink-0 text-red-400">{"\u2715"}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-green-400/[0.03] p-10">
              <div className="mb-6 flex items-center gap-2.5 text-[0.68rem] uppercase tracking-[0.2em] text-green-400">
                <span>{"\u2713"}</span> Avec Lead Machine
              </div>
              <ul className="flex flex-col gap-4">
                {afterItems.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.86rem] leading-[1.65] text-white/85">
                    <span className="flex-shrink-0 text-green-400">{"\u2713"}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── FAQ ── */}
      <section className="px-[6vw] py-24">
        <ScrollReveal>
          <SectionHeader
            label="Vos questions"
            title="Ce que vous vous <em>demandez souvent</em>"
          />
        </ScrollReveal>

        <div className="mt-16">
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="border-t border-border px-[6vw] py-20 text-center"
        style={{
          background: "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      >
        <ScrollReveal>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light leading-tight">
            Pret a voir ca
            <br />
            <em className="text-gradient-gold not-italic">en action ?</em>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[0.9rem] text-text-dimmed">
            30 minutes pour voir le systeme tourner en live sur un cas concret de votre secteur. Sans
            engagement.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/#contact" size="lg">
              Reserver ma demo gratuite &rarr;
            </Button>
            <Button href="/immobilier" variant="secondary" size="lg">
              Voir la solution immobilier
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
