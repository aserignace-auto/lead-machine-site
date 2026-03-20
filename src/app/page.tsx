import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";

/* ── Data ── */

const stats = [
  { value: "x3", desc: "Leads qualifies" },
  { value: "-80%", desc: "Temps de prospection" },
  { value: "10 jours", desc: "Mise en place" },
  { value: "24/7", desc: "Actif en continu" },
];

const advantages = [
  {
    icon: "\u2699",
    title: "Prospection automatique",
    text: "Identification, enrichissement et qualification de vos prospects 24h/24. Votre pipeline se remplit sans effort, avec des contacts cibles selon vos criteres.",
  },
  {
    icon: "\u25CE",
    title: "Scoring & qualification IA",
    text: "Chaque prospect est analyse et score automatiquement. Vos equipes se concentrent uniquement sur les contacts a fort potentiel de conversion.",
  },
  {
    icon: "\u221E",
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
      <section className="relative flex min-h-[95vh] items-center justify-center overflow-hidden px-[6vw] pt-28 pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(201,168,76,0.07)_0%,transparent_70%)]" />

        <div className="relative z-10 max-w-[860px] text-center">
          <ScrollReveal>
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-gold/30 px-5 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold shadow-[0_0_8px_var(--gold)]" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
              Intelligence Artificielle &middot; Automatisation B2B
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-serif text-[clamp(3rem,7vw,6.5rem)] font-light leading-[1.08] tracking-tight">
              Votre croissance,
              <br />
              <em className="text-gradient-gold not-italic">automatisee a 360&deg;</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mx-auto mt-8 max-w-[580px] text-[1.15rem] font-light leading-relaxed text-text-dimmed">
              Lead Machine deploie des systemes d&apos;automatisation par IA sur mesure qui generent
              des leads, qualifient vos prospects et convertissent — pendant que vous vous concentrez
              sur l&apos;essentiel.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Button href="#contact" size="lg">
                Demander ma demo gratuite &rarr;
              </Button>
              <Button href="#avantages" variant="secondary" size="lg">
                Decouvrir la solution &darr;
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-border bg-[linear-gradient(180deg,transparent,rgba(201,168,76,0.03),transparent)] py-24 px-[6vw]">
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0">
          {stats.map((s) => (
            <ScrollReveal key={s.value}>
              <div className="px-6 py-8 text-center lg:border-r lg:border-border lg:last:border-r-0">
                <div className="text-gradient-gold font-serif text-[clamp(3rem,5.5vw,4.5rem)] font-light leading-none">
                  {s.value}
                </div>
                <div className="mt-3 text-[0.95rem] text-text-dimmed">{s.desc}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section id="avantages" className="px-[6vw] py-36">
        <ScrollReveal>
          <SectionHeader
            label="Pourquoi Lead Machine"
            title="Une IA qui travaille <em>a votre place</em>"
            subtitle="De la detection du prospect jusqu'a la conversion — tout est automatise."
          />
        </ScrollReveal>

        <div className="mx-auto mt-20 grid max-w-[1100px] grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {advantages.map((adv) => (
            <ScrollReveal key={adv.title}>
              <div className="bg-bg-card p-12 transition-colors duration-300 hover:bg-gold/[0.04]">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-lg border border-gold/30 text-2xl">
                  {adv.icon}
                </div>
                <h3 className="mb-4 font-serif text-2xl font-normal">{adv.title}</h3>
                <p className="text-[0.95rem] leading-[1.75] text-text-dimmed">{adv.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="fonctionnement" className="bg-[#111111] px-[6vw] py-36">
        <ScrollReveal>
          <SectionHeader
            label="Comment ca fonctionne"
            title="Operationnel en <em>10 jours</em>"
            subtitle="Un deploiement structure, sans disruption de votre activite."
          />
        </ScrollReveal>

        <div className="relative mx-auto mt-20 grid max-w-[1100px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute top-[30px] left-[12.5%] right-[12.5%] hidden h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30 lg:block" />

          {steps.map((step) => (
            <ScrollReveal key={step.num}>
              <div className="text-center px-6">
                <div className="mx-auto mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-full border border-gold/40 bg-gold/[0.06] font-serif text-xl text-gold">
                  {step.num}
                </div>
                <h3 className="mb-3 text-lg font-medium">{step.title}</h3>
                <p className="text-[0.95rem] leading-[1.7] text-text-dimmed">{step.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── SECTORS ── */}
      <section id="secteurs" className="px-[6vw] py-36">
        <ScrollReveal>
          <SectionHeader
            label="Secteurs d'activite"
            title="Une expertise sectorielle <em>precise</em>"
            subtitle="Des solutions concues pour les specificites de votre marche."
          />
        </ScrollReveal>

        <div className="mx-auto mt-20 grid max-w-[1100px] grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
          {sectors.map((sector) => {
            const content = (
              <div
                className={`relative flex flex-col gap-5 overflow-hidden bg-bg-card p-12 transition-colors duration-300 ${
                  sector.dimmed
                    ? "pointer-events-none opacity-50"
                    : "group hover:bg-gold/[0.04]"
                }`}
              >
                {!sector.dimmed && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-gold-light scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
                )}
                <span className="text-[0.7rem] uppercase tracking-[0.18em] text-gold">
                  {sector.tag}
                </span>
                <h3 className="font-serif text-3xl font-light">{sector.title}</h3>
                <p className="text-[0.95rem] leading-[1.75] text-text-dimmed">{sector.desc}</p>
                <span
                  className={`text-sm font-medium uppercase tracking-wider transition-all duration-200 ${
                    sector.dimmed
                      ? "text-white/25"
                      : "text-gold group-hover:tracking-[0.14em]"
                  }`}
                >
                  {sector.arrow} {!sector.dimmed && "\u2192"}
                </span>
              </div>
            );

            return (
              <ScrollReveal key={sector.title}>
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
      <section id="offres" className="px-[6vw] py-36">
        <ScrollReveal>
          <SectionHeader
            label="Nos offres"
            title="Des forfaits <em>sans engagement</em>"
            subtitle="Demarrez au niveau qui correspond a vos besoins. Resiliez quand vous voulez."
          />
        </ScrollReveal>

        <div className="mx-auto mt-20 grid max-w-[1000px] grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <ScrollReveal key={plan.tier}>
              <div
                className={`relative p-10 ${
                  plan.featured ? "bg-gold/[0.05]" : "bg-bg-card"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-gold px-4 py-1 text-[0.62rem] font-bold uppercase tracking-[0.15em] text-bg-primary whitespace-nowrap">
                    Le plus populaire
                  </div>
                )}
                <div className="text-[0.72rem] uppercase tracking-[0.18em] text-text-dimmed mb-4">
                  {plan.tier}
                </div>
                <div className="font-serif text-5xl font-light text-gold-light leading-none">
                  {plan.amount}
                </div>
                <div className="mt-1 text-[0.78rem] text-text-dimmed">{plan.period}</div>
                {plan.note && (
                  <div className="mt-1 mb-8 text-[0.68rem] text-green-400">{plan.note}</div>
                )}
                {!plan.note && <div className="mb-8" />}
                <ul className="mb-8 flex flex-col gap-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-[0.84rem] text-white/75">
                      <span className="flex-shrink-0 text-gold">&mdash;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`block rounded-sm py-3.5 text-center text-[0.8rem] uppercase tracking-[0.12em] transition-all duration-200 no-underline ${
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
      <section id="faq" className="bg-[#111111] px-[6vw] py-36">
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
      <section id="contact" className="px-[6vw] py-36">
        <ScrollReveal>
          <div className="mx-auto max-w-[1100px] grid grid-cols-1 border border-border bg-border md:grid-cols-2">
            {/* Left info */}
            <div className="flex flex-col justify-between border-b border-border bg-bg-card p-12 md:border-b-0 md:border-r">
              <div>
                <span className="mb-6 block text-[0.7rem] uppercase tracking-[0.2em] text-gold">
                  Demarrer maintenant
                </span>
                <h2 className="mb-6 font-serif text-4xl font-light leading-[1.2]">
                  Demandez votre
                  <br />
                  <em className="text-gradient-gold not-italic">demo gratuite</em>
                </h2>
                <p className="mb-8 text-[0.95rem] leading-[1.8] text-text-dimmed">
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
                    className="flex items-center gap-3 text-[0.95rem] text-text-dimmed"
                  >
                    <span className="flex-shrink-0 text-[0.58rem] text-gold">{"\u2726"}</span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right form */}
            <div className="bg-[#0F0F0F] p-12">
              <ContactForm />
              <div className="mt-6 text-center">
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-[0.72rem] uppercase tracking-[0.15em] text-white/30">ou</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <a
                  href="/rdv"
                  className="inline-flex items-center gap-2 rounded-sm border border-gold/30 px-6 py-3 text-[0.82rem] font-medium tracking-wide text-gold transition-all hover:border-gold/60 hover:bg-gold/5"
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
