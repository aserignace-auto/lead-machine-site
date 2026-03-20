import Link from "next/link";
import { Zap, Target, Link2, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";
import type { ReactNode } from "react";

/* ── Data ── */

const stats = [
  { value: "x3", desc: "Leads qualifies" },
  { value: "-80%", desc: "Temps de prospection" },
  { value: "10 jours", desc: "Mise en place" },
  { value: "24/7", desc: "Actif en continu" },
];

const advantages: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: <Zap size={20} />,
    title: "Prospection automatique",
    text: "Identification, enrichissement et qualification de vos prospects 24h/24. Votre pipeline se remplit sans effort, avec des contacts cibles selon vos criteres.",
  },
  {
    icon: <Target size={20} />,
    title: "Scoring & qualification IA",
    text: "Chaque prospect est analyse et score automatiquement. Vos equipes se concentrent uniquement sur les contacts a fort potentiel de conversion.",
  },
  {
    icon: <Link2 size={20} />,
    title: "Integration sans friction",
    text: "Compatible avec vos outils existants : CRM, messagerie, agenda. Deploiement cle en main en 10 jours, sans migration ni disruption.",
  },
];

const steps = [
  { num: "01", title: "Audit & diagnostic", text: "Analyse de votre processus et definition d'objectifs mesurables." },
  { num: "02", title: "Conception sur mesure", text: "Developpement de votre solution IA adaptee a votre secteur." },
  { num: "03", title: "Deploiement & formation", text: "Mise en production en 10 jours avec formation incluse." },
  { num: "04", title: "Suivi & optimisation", text: "Accompagnement mensuel et ajustements continus." },
];

const sectors = [
  {
    tag: "Disponible maintenant",
    title: "Immobilier",
    desc: "Prospection PAP/Leboncoin automatisee, qualification IA des vendeurs et acquereurs, relances et prise de RDV autonome.",
    href: "/immobilier",
    arrow: "Decouvrir la solution",
    dimmed: false,
  },
  {
    tag: "Bientot disponible",
    title: "BTP & Artisans",
    desc: "Generation de devis, qualification des chantiers et gestion des leads entrants en temps reel.",
    href: null,
    arrow: "En cours de developpement",
    dimmed: true,
  },
  {
    tag: "Bientot disponible",
    title: "Sante & Bien-etre",
    desc: "Prise de RDV automatisee, rappels patients et reduction du taux de no-show.",
    href: null,
    arrow: "En cours de developpement",
    dimmed: true,
  },
  {
    tag: "Sur mesure",
    title: "Votre secteur",
    desc: "Votre activite ne figure pas dans la liste ? Nous concevons des systemes sur mesure pour tout secteur B2B.",
    href: "#contact",
    arrow: "Discuter de mon projet",
    dimmed: false,
  },
];

const pricingPlans = [
  {
    tier: "Essentiel",
    amount: "1 000\u20AC",
    period: "HT + 100\u20AC/mois",
    note: "1er mois de recurrence offert",
    features: [
      "Systeme de prospection automatise",
      "Sequences email & SMS",
      "Tableau de bord Google Sheets",
      "Support par email",
      "Mise en place en 10 jours",
    ],
    featured: false,
  },
  {
    tier: "Performance",
    amount: "2 500\u20AC",
    period: "HT + 250\u20AC/mois",
    note: "1er mois de recurrence offert",
    features: [
      "Tout le forfait Essentiel",
      "Scoring IA avance des prospects",
      "Integration CRM complete",
      "Prise de RDV automatique",
      "Suivi mensuel avec Maxime",
      "Acces tableau de bord premium",
    ],
    featured: true,
  },
  {
    tier: "Excellence",
    amount: "5 000\u20AC",
    period: "HT + 500\u20AC/mois",
    note: "1er mois de recurrence offert",
    features: [
      "Tout le forfait Performance",
      "Automatisation complete sur mesure",
      "Multi-canaux (email, SMS, LinkedIn)",
      "Reporting IA avance & predictif",
      "Accompagnement strategique mensuel",
      "SLA prioritaire — reponse sous 4h",
    ],
    featured: false,
  },
];

const faqItems = [
  {
    question: "Combien de temps faut-il pour que le systeme soit operationnel ?",
    answer:
      "Notre engagement contractuel est de 10 jours ouvres a compter de la reception de vos informations techniques. La majorite de nos clients sont operationnels entre 7 et 9 jours. Le deploiement comprend la configuration, les tests complets et une visio de prise en main de 45 minutes.",
  },
  {
    question: "Est-ce compatible avec mon CRM actuel ?",
    answer:
      "Nos systemes s'integrent avec la quasi-totalite des CRM du marche : HubSpot, Salesforce, Pipedrive, Odoo, et bien d'autres. Si vous n'avez pas de CRM, nous fournissons un tableau de bord Google Sheets entierement structure pour demarrer immediatement.",
  },
  {
    question: "Puis-je resilier a tout moment ?",
    answer:
      "Oui. Nos abonnements sont sans engagement de duree minimale. La resiliation s'effectue par simple notification ecrite avec un preavis de 30 jours calendaires. Aucune penalite de sortie.",
  },
  {
    question: "Ai-je besoin de competences techniques ?",
    answer:
      "Aucune. Lead Machine est pense pour etre utilise par des commerciaux et dirigeants, pas des developpeurs. Tout est configure et gere par notre equipe. Une formation complete est incluse dans chaque deploiement.",
  },
];

/* ── Component ── */

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex min-h-[95vh] items-center justify-center overflow-hidden px-5 pt-28 pb-20 md:px-[6vw] md:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(201,168,76,0.07)_0%,transparent_70%)]" />

        <div className="relative z-10 max-w-[860px] text-center">
          <ScrollReveal>
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-gold/30 px-5 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold shadow-[0_0_8px_var(--gold)]" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
              Intelligence Artificielle &middot; Automatisation B2B
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-serif text-[clamp(2rem,7vw,6.5rem)] font-light leading-[1.08] tracking-tight">
              Votre croissance,
              <br />
              <em className="text-gradient-gold not-italic">automatisee a 360&deg;</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mx-auto mt-8 max-w-[580px] text-base font-light leading-relaxed text-text-dimmed md:text-[1.15rem]">
              Lead Machine deploie des systemes d&apos;automatisation par IA sur mesure qui generent
              des leads, qualifient vos prospects et convertissent — pendant que vous vous concentrez
              sur l&apos;essentiel.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-10 flex flex-col items-center gap-4 md:mt-12 md:flex-row md:justify-center">
              <Button href="#contact" size="lg" className="w-full md:w-auto">
                Demander ma demo gratuite &rarr;
              </Button>
              <Button href="#avantages" variant="secondary" size="lg" className="w-full md:w-auto">
                Decouvrir la solution &darr;
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-border bg-[linear-gradient(180deg,transparent,rgba(201,168,76,0.03),transparent)] px-5 py-16 md:px-[6vw] md:py-24">
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-0">
          {stats.map((s) => (
            <ScrollReveal key={s.value}>
              <div className="px-4 py-4 text-center md:px-6 md:py-8 lg:border-r lg:border-border lg:last:border-r-0">
                <div className="text-gradient-gold font-serif text-[clamp(2.2rem,5.5vw,4.5rem)] font-light leading-none">
                  {s.value}
                </div>
                <div className="mt-3 text-sm text-text-dimmed md:text-base">{s.desc}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section id="avantages" className="px-5 py-20 md:px-[6vw] md:py-36">
        <ScrollReveal>
          <SectionHeader
            label="Pourquoi Lead Machine"
            title="Une IA qui travaille <em>a votre place</em>"
            subtitle="De la detection du prospect jusqu'a la conversion — tout est automatise."
          />
        </ScrollReveal>

        <div className="mx-auto mt-14 flex max-w-[900px] flex-col gap-0 md:mt-20">
          {advantages.map((adv, i) => (
            <ScrollReveal key={adv.title} delay={i * 80}>
              <div
                className={`flex flex-col gap-5 px-6 py-8 sm:flex-row sm:items-start sm:gap-8 md:px-10 md:py-10 ${
                  i % 2 === 1 ? "bg-[#181818]" : "bg-transparent"
                } transition-colors duration-300 hover:bg-gold/[0.04]`}
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.06] text-gold">
                  {adv.icon}
                </div>
                <div>
                  <h3 className="mb-2 font-serif text-2xl font-normal">{adv.title}</h3>
                  <p className="text-base leading-[1.75] text-text-dimmed">{adv.text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="fonctionnement" className="bg-[#181818] px-5 py-20 md:px-[6vw] md:py-36">
        <ScrollReveal>
          <SectionHeader
            label="Comment ca fonctionne"
            title="Operationnel en <em>10 jours</em>"
            subtitle="Un deploiement structure, sans disruption de votre activite."
          />
        </ScrollReveal>

        {/* Desktop: horizontal with connecting line */}
        <div className="relative mx-auto mt-14 hidden max-w-[1100px] grid-cols-4 gap-10 lg:grid lg:mt-20">
          <div className="pointer-events-none absolute top-[30px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 100}>
              <div className="text-center px-4">
                <div className="mx-auto mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-full border border-gold/40 bg-gold/[0.06] font-serif text-xl text-gold">
                  {step.num}
                </div>
                <h3 className="mb-3 text-lg font-medium">{step.title}</h3>
                <p className="text-base leading-[1.7] text-text-dimmed">{step.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile/Tablet: vertical timeline with gold line */}
        <div className="relative mx-auto mt-14 max-w-[600px] lg:hidden">
          {/* Gold connecting line */}
          <div className="absolute top-2 bottom-2 left-[19px] w-px bg-gradient-to-b from-gold/50 via-gold/30 to-gold/10" />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 80}>
                <div className="relative flex gap-6 pl-0">
                  <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-gold/40 bg-[#181818] font-serif text-sm text-gold">
                    {step.num}
                  </div>
                  <div className="pt-1">
                    <h3 className="mb-1.5 text-lg font-medium">{step.title}</h3>
                    <p className="text-base leading-[1.7] text-text-dimmed">{step.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORS ── */}
      <section id="secteurs" className="px-5 py-20 md:px-[6vw] md:py-36">
        <ScrollReveal>
          <SectionHeader
            label="Secteurs d'activite"
            title="Une expertise sectorielle <em>precise</em>"
            subtitle="Des solutions concues pour les specificites de votre marche."
          />
        </ScrollReveal>

        <div className="mx-auto mt-14 grid max-w-[1100px] grid-cols-1 gap-5 md:mt-20 md:grid-cols-2 md:gap-6">
          {sectors.map((sector, i) => {
            const content = (
              <div
                className={`relative flex h-full flex-col gap-5 overflow-hidden rounded-xl border border-border bg-bg-card p-8 transition-colors duration-300 md:p-12 ${
                  sector.dimmed
                    ? "pointer-events-none opacity-50"
                    : "group hover:bg-gold/[0.04] hover:border-gold/20"
                }`}
              >
                {!sector.dimmed && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-gold-light scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
                )}
                <span className="text-xs uppercase tracking-[0.18em] text-white/75">
                  {sector.tag}
                </span>
                <h3 className="font-serif text-3xl font-light">{sector.title}</h3>
                <p className="text-base leading-[1.75] text-text-dimmed">{sector.desc}</p>
                <span
                  className={`text-sm font-medium uppercase tracking-wider transition-all duration-200 ${
                    sector.dimmed
                      ? "text-white/70"
                      : "text-gold group-hover:tracking-[0.14em]"
                  }`}
                >
                  {sector.arrow} {!sector.dimmed && <ArrowRight size={14} className="inline ml-1" />}
                </span>
              </div>
            );

            return (
              <ScrollReveal key={sector.title} delay={i * 60}>
                {sector.href ? (
                  <Link href={sector.href} className="block no-underline text-inherit">
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="offres" className="px-5 py-20 md:px-[6vw] md:py-36">
        <ScrollReveal>
          <SectionHeader
            label="Nos offres"
            title="Des forfaits <em>sans engagement</em>"
            subtitle="Demarrez au niveau qui correspond a vos besoins. Resiliez quand vous voulez."
          />
        </ScrollReveal>

        <div className="mx-auto mt-14 grid max-w-[1000px] grid-cols-1 gap-px border border-border bg-border md:mt-20 md:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <ScrollReveal key={plan.tier} delay={i * 60}>
              <div
                className={`relative p-8 md:p-10 ${
                  plan.featured ? "bg-gold/[0.05]" : "bg-bg-card"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-gold px-4 py-1 text-xs font-bold uppercase tracking-[0.15em] text-bg-primary whitespace-nowrap">
                    Le plus populaire
                  </div>
                )}
                <div className="text-xs uppercase tracking-[0.18em] text-text-dimmed mb-4">
                  {plan.tier}
                </div>
                <div className="font-serif text-4xl font-light text-gold-light leading-none md:text-5xl">
                  {plan.amount}
                </div>
                <div className="mt-1 text-sm text-text-dimmed">{plan.period}</div>
                {plan.note && (
                  <div className="mt-1 mb-8 text-xs text-green-400">{plan.note}</div>
                )}
                {!plan.note && <div className="mb-8" />}
                <ul className="mb-8 flex flex-col gap-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-base text-white/75">
                      <span className="flex-shrink-0 text-gold">&mdash;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`block w-full rounded-sm py-3.5 text-center text-sm uppercase tracking-[0.12em] transition-all duration-200 no-underline ${
                    plan.featured
                      ? "bg-gold font-semibold text-bg-primary"
                      : "border border-gold/35 text-gold hover:bg-gold/10"
                  }`}
                >
                  Demarrer maintenant
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-[#181818] px-5 py-20 md:px-[6vw] md:py-36">
        <ScrollReveal>
          <SectionHeader
            label="Questions frequentes"
            title="Tout ce que vous <em>devez savoir</em>"
          />
        </ScrollReveal>

        <div className="mt-20">
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="px-5 py-20 md:px-[6vw] md:py-36">
        <ScrollReveal>
          <div className="mx-auto max-w-[1100px] grid grid-cols-1 gap-0 overflow-hidden rounded-xl border border-border md:grid-cols-2">
            {/* Left info */}
            <div className="flex flex-col justify-between border-b border-border bg-bg-card p-8 md:border-b-0 md:border-r md:p-12">
              <div>
                <span className="mb-6 block text-xs uppercase tracking-[0.2em] text-white/75">
                  Demarrer maintenant
                </span>
                <h2 className="mb-6 font-serif text-3xl font-light leading-[1.2] md:text-4xl">
                  Demandez votre
                  <br />
                  <em className="text-gradient-gold not-italic">demo gratuite</em>
                </h2>
                <p className="mb-8 text-base leading-[1.8] text-text-dimmed">
                  Un audit de 30 minutes pour analyser votre processus actuel et vous presenter
                  concretement ce qu&apos;un systeme Lead Machine peut generer pour votre activite.
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  "Demo en direct sur un vrai cas de votre secteur",
                  "Analyse de votre potentiel d'automatisation",
                  "Proposition personnalisee sous 48h",
                  "Sans engagement — sans carte bancaire",
                ].map((perk) => (
                  <li
                    key={perk}
                    className="flex items-center gap-3 text-base text-text-dimmed"
                  >
                    <span className="flex-shrink-0 text-xs text-gold">{"\u2726"}</span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right form */}
            <div className="bg-[#0F0F0F] p-8 md:p-12">
              <ContactForm />
              <div className="mt-6 text-center">
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-xs uppercase tracking-[0.15em] text-white/70">ou</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <a
                  href="/rdv"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-gold/30 px-6 py-3 text-sm font-medium tracking-wide text-gold transition-all hover:border-gold/60 hover:bg-gold/5 md:w-auto"
                >
                  Reservez directement un creneau Calendly
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
