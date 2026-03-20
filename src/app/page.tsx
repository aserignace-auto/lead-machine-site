import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import Card from "@/components/Card";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";

/* ── Data ── */

const stats = [
  { value: "+340%", desc: "de leads qualifies generes en moyenne des le 1er mois" },
  { value: "-87%", desc: "de temps consacre aux taches manuelles de prospection" },
  { value: "10j", desc: "delai de mise en place de votre solution sur mesure" },
  { value: "24/7", desc: "votre systeme travaille pour vous, sans interruption" },
];

const advantages = [
  {
    icon: "\u2699",
    title: "Prospection automatique",
    text: "Identification, enrichissement et qualification des prospects 24h/24. Votre pipeline se remplit sans effort humain, avec des contacts cibles selon vos criteres precis.",
  },
  {
    icon: "\u25CE",
    title: "Scoring & qualification IA",
    text: "Chaque prospect est analyse et score automatiquement. Vos equipes se concentrent uniquement sur les contacts a fort potentiel de conversion.",
  },
  {
    icon: "\u2709",
    title: "Sequences de nurturing",
    text: "Emails et SMS personnalises, declenches au bon moment selon le comportement de chaque prospect. Zero action manuelle, taux d'ouverture maximise.",
  },
  {
    icon: "\u25C8",
    title: "Tableau de bord en temps reel",
    text: "Visualisez votre pipeline, vos metriques cles et vos performances commerciales en un coup d'oeil. Toutes vos donnees centralisees dans un seul espace.",
  },
  {
    icon: "\u221E",
    title: "Integration sans friction",
    text: "Compatible avec vos outils existants : CRM, messagerie, agenda. Deploiement cle en main en 10 jours, sans migration ni disruption de votre activite.",
  },
  {
    icon: "\u2295",
    title: "Optimisation continue",
    text: "Votre systeme apprend et s'ameliore avec le temps. Les performances s'affinent automatiquement grace a l'analyse des resultats en continu.",
  },
];

const steps = [
  {
    num: "01",
    title: "Audit & diagnostic",
    text: "Analyse de votre processus actuel, identification des axes d'automatisation et definition des objectifs mesurables.",
  },
  {
    num: "02",
    title: "Conception sur mesure",
    text: "Developpement de votre solution IA personnalisee : scraping, scoring, sequences, integrations — tout adapte a votre secteur.",
  },
  {
    num: "03",
    title: "Deploiement & formation",
    text: "Mise en production en 10 jours ouvres. Formation de votre equipe et visio de prise en main incluses.",
  },
  {
    num: "04",
    title: "Suivi & optimisation",
    text: "Accompagnement mensuel, revues de performance et ajustements continus pour maximiser vos resultats.",
  },
];

const sectors = [
  {
    tag: "Disponible maintenant",
    title: "Immobilier",
    desc: "Automatisation complete de la prospection PAP/Leboncoin, qualification IA des vendeurs et acquereurs, relances automatiques et prise de RDV autonome.",
    chips: ["Scraping PAP / Leboncoin", "Scoring vendeur IA", "Sequences email/SMS", "Prise de RDV auto"],
    href: "/immobilier",
    arrow: "Decouvrir la solution",
    dimmed: false,
  },
  {
    tag: "Bientot disponible",
    title: "BTP & Artisans",
    desc: "Generation automatique de devis, qualification des chantiers, relances clients et gestion des leads entrants en temps reel.",
    chips: ["Qualification chantiers", "Devis automatises", "Suivi IA"],
    href: null,
    arrow: "En cours de developpement",
    dimmed: true,
  },
  {
    tag: "Bientot disponible",
    title: "Sante & Bien-etre",
    desc: "Prise de RDV automatisee, rappels patients, fidelisation et reduction du taux de no-show pour cabinets et praticiens.",
    chips: ["RDV automatique", "Rappels patients", "Fidelisation IA"],
    href: null,
    arrow: "En cours de developpement",
    dimmed: true,
  },
  {
    tag: "Sur mesure",
    title: "Votre secteur",
    desc: "Votre activite ne figure pas dans la liste ? Nous concevons des systemes d'automatisation sur mesure pour tout secteur B2B.",
    chips: ["Coaching & Formation", "E-commerce B2B", "Finance & Assurance"],
    href: "#contact",
    arrow: "Discuter de mon projet",
    dimmed: false,
  },
];

const testimonials = [
  {
    quote: "Lead Machine a transforme notre prospection. En 6 semaines, nous avons triple notre nombre de RDV qualifies sans augmenter notre equipe commerciale.",
    author: "Thomas R.",
    role: "Directeur d'agence immobiliere — Paris 8e",
  },
  {
    quote: "La mise en place a ete d'une fluidite remarquable. En 10 jours, le systeme tournait seul. Je gagne minimum 3 heures par jour sur des taches que je faisais manuellement.",
    author: "Sarah M.",
    role: "Chasseuse immobiliere — Lyon",
  },
  {
    quote: "Le ROI est immediat. Le systeme identifie des vendeurs motives que je n'aurais jamais trouves moi-meme. C'est simplement un avantage concurrentiel majeur.",
    author: "Marc D.",
    role: "Promoteur immobilier — Bordeaux",
  },
];

const pricingPlans = [
  {
    tier: "Essentiel",
    amount: "Sur devis",
    period: "/ mois · sans engagement",
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
    amount: "Sur devis",
    period: "/ mois · sans engagement",
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
    amount: "Sur devis",
    period: "/ mois · sans engagement",
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
    question: "Le systeme respecte-t-il la reglementation RGPD ?",
    answer:
      "Absolument. Toutes nos sources de donnees sont conformes RGPD pour la prospection B2B. Nous n'utilisons jamais de donnees personnelles de particuliers sans consentement explicite. Nos solutions incluent systematiquement un mecanisme de desinscription conforme.",
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
  {
    question: "Quels resultats puis-je realistement esperer ?",
    answer:
      "Nos clients constatent en moyenne +340% de leads qualifies et -87% de temps consacre aux taches manuelles dans les 30 premiers jours. Nous communiquerons des objectifs personnalises lors de l'audit initial gratuit.",
  },
];

const pipelineData = [
  { title: "A contacter", cards: ["Martin D. — Agence", "Sophie R. — Promo"] },
  { title: "Email ouvert", cards: ["Jean M. — Invest."] },
  { title: "RDV pris", cards: ["Claire M. — Dev.", "Paul L. — Agence"] },
  { title: "Devis envoye", cards: ["A. Leclerc — Promo"] },
  { title: "Client actif", cards: ["M. Durand", "L. Bernard"], done: true },
];

/* ── Component ── */

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex min-h-[95vh] items-center justify-center overflow-hidden px-[6vw] pt-24 pb-20">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(201,168,76,0.07)_0%,transparent_70%)]" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 80%)",
            animation: "grid-pulse 8s ease-in-out infinite",
          }}
        />
        {/* Orbs */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-[500px] w-[500px] rounded-full blur-[80px]"
          style={{
            background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
            animation: "float 12s ease-in-out infinite",
          }}
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-12 h-[350px] w-[350px] rounded-full blur-[80px]"
          style={{
            background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
            animation: "float 15s ease-in-out infinite reverse",
          }}
        />

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
            <p className="mx-auto mt-7 max-w-[580px] text-[1.1rem] font-light leading-relaxed text-text-dimmed">
              Lead Machine deploie des systemes d&apos;automatisation par IA sur mesure qui generent
              des leads, qualifient vos prospects et convertissent — pendant que vous vous concentrez
              sur l&apos;essentiel.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="#contact" size="lg">
                Demander ma demo gratuite &rarr;
              </Button>
              <Button href="#avantages" variant="secondary" size="lg">
                Decouvrir la solution &darr;
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
          <div
            className="h-12 w-px bg-gradient-to-b from-gold/60 to-transparent"
            style={{ animation: "scroll-line 2s ease-in-out infinite" }}
          />
          <span className="text-[0.68rem] uppercase tracking-[0.15em] text-white/25">Defiler</span>
        </div>
      </section>

      {/* ── DASHBOARD MOCKUP ── */}
      <section className="px-[6vw] pb-20">
        <ScrollReveal>
          <div className="mx-auto max-w-[1000px] overflow-hidden rounded-xl border border-border bg-bg-card shadow-[0_40px_100px_rgba(0,0,0,0.6),0_0_0_1px_rgba(201,168,76,0.08)]">
            {/* Title bar */}
            <div className="flex items-center gap-2.5 border-b border-border bg-[#0D0D0D] px-5 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-3 text-[0.7rem] text-white/30">Lead Machine — Tableau de bord</span>
            </div>
            {/* Screen */}
            <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-3">
              {/* Stat cards */}
              {[
                { label: "Leads generes ce mois", value: "247", delta: "+34% vs mois dernier" },
                { label: "Taux de qualification", value: "68%", delta: "+12 pts" },
                { label: "Temps economise / sem.", value: "14h", delta: "Automatise a 87%" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-gold/10 bg-white/[0.03] p-5"
                >
                  <div className="text-[0.7rem] uppercase tracking-[0.12em] text-white/40">
                    {s.label}
                  </div>
                  <div className="mt-1 font-serif text-4xl font-semibold text-gold-light">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[0.72rem] text-green-400">
                    &uarr; {s.delta}
                  </div>
                </div>
              ))}

              {/* Pipeline */}
              <div className="col-span-full mt-2 grid grid-cols-2 gap-2.5 sm:grid-cols-5">
                {pipelineData.map((col) => (
                  <div
                    key={col.title}
                    className="rounded-md border border-white/[0.06] bg-white/[0.02] p-3"
                  >
                    <div className="mb-2.5 text-[0.62rem] uppercase tracking-[0.1em] text-white/30">
                      {col.title}
                    </div>
                    {col.cards.map((card) => (
                      <div
                        key={card}
                        className={`mb-1.5 rounded border px-2.5 py-1.5 text-[0.68rem] text-white/70 ${
                          col.done
                            ? "border-green-400/[0.18] bg-green-400/[0.05]"
                            : "border-gold/[0.15] bg-gold/[0.08]"
                        }`}
                      >
                        {card}
                        {col.done && " \u2713"}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-border bg-[linear-gradient(180deg,transparent,rgba(201,168,76,0.03),transparent)] py-20 px-[6vw]">
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <ScrollReveal key={s.value} delay={i * 80}>
              <div className="border-b border-border px-6 py-10 text-center lg:border-b-0 lg:border-r lg:last:border-r-0">
                <div className="text-gradient-gold font-serif text-[clamp(2.5rem,5vw,4rem)] font-light leading-none">
                  {s.value}
                </div>
                <div className="mt-2 text-[0.82rem] text-text-dimmed">{s.desc}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section id="avantages" className="px-[6vw] py-28">
        <ScrollReveal>
          <SectionHeader
            label="Pourquoi Lead Machine"
            title="Une IA qui travaille <em>a votre place</em>"
            subtitle="Nos systemes couvrent l'integralite de votre cycle commercial — de la detection du prospect jusqu'a la fidelisation client."
          />
        </ScrollReveal>

        <div className="mx-auto mt-16 grid max-w-[1100px] grid-cols-1 gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv, i) => (
            <ScrollReveal key={adv.title} delay={i * 60}>
              <div className="bg-bg-card p-10 transition-colors duration-300 hover:bg-gold/[0.04]">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-gold/30 text-2xl">
                  {adv.icon}
                </div>
                <h3 className="mb-3 font-serif text-2xl font-normal">{adv.title}</h3>
                <p className="text-[0.86rem] leading-[1.75] text-text-dimmed">{adv.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="fonctionnement" className="bg-[#111111] px-[6vw] py-28">
        <ScrollReveal>
          <SectionHeader
            label="Comment ca fonctionne"
            title="Operationnel en <em>10 jours</em>"
            subtitle="Un deploiement structure, sans disruption de votre activite."
          />
        </ScrollReveal>

        <div className="relative mx-auto mt-16 grid max-w-[1100px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line */}
          <div className="pointer-events-none absolute top-[30px] left-[12.5%] right-[12.5%] hidden h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30 lg:block" />

          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 80}>
              <div className="text-center px-6">
                <div className="mx-auto mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-full border border-gold/40 bg-gold/[0.06] font-serif text-xl text-gold">
                  {step.num}
                </div>
                <h3 className="mb-2.5 text-base font-medium">{step.title}</h3>
                <p className="text-[0.82rem] leading-[1.7] text-text-dimmed">{step.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── SECTORS ── */}
      <section id="secteurs" className="px-[6vw] py-28">
        <ScrollReveal>
          <SectionHeader
            label="Secteurs d'activite"
            title="Une expertise sectorielle <em>precise</em>"
            subtitle="Nos solutions sont concues pour les specificites de votre marche, pas des outils generiques."
          />
        </ScrollReveal>

        <div className="mx-auto mt-16 grid max-w-[1100px] grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
          {sectors.map((sector, i) => {
            const content = (
              <div
                className={`relative flex flex-col gap-6 overflow-hidden bg-bg-card p-10 transition-colors duration-300 ${
                  sector.dimmed
                    ? "pointer-events-none opacity-50"
                    : "group hover:bg-gold/[0.04]"
                }`}
              >
                {/* Bottom gold line on hover */}
                {!sector.dimmed && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-gold-light scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
                )}
                <span className="text-[0.68rem] uppercase tracking-[0.18em] text-gold">
                  {sector.tag}
                </span>
                <h3 className="font-serif text-3xl font-light">{sector.title}</h3>
                <p className="text-[0.86rem] leading-[1.75] text-text-dimmed">{sector.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {sector.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-gold/25 px-3 py-1 text-[0.7rem] tracking-wider text-gold-lighter"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
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

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#111111] px-[6vw] py-28">
        <ScrollReveal>
          <SectionHeader
            label="Temoignages"
            title="Ce que disent nos <em>clients</em>"
          />
        </ScrollReveal>

        <div className="mx-auto mt-16 grid max-w-[1100px] grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.author} delay={i * 80}>
              <div className="bg-bg-card p-10">
                <div className="mb-5 text-[0.95rem] tracking-[0.15em] text-gold">
                  \u2605\u2605\u2605\u2605\u2605
                </div>
                <p className="mb-6 font-serif text-[1.1rem] font-light italic leading-[1.65] text-white/85">
                  &laquo; {t.quote} &raquo;
                </p>
                <div className="text-sm font-medium">{t.author}</div>
                <div className="mt-1 text-[0.74rem] text-text-dimmed">{t.role}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="offres" className="px-[6vw] py-28">
        <ScrollReveal>
          <SectionHeader
            label="Nos offres"
            title="Des forfaits <em>sans engagement</em>"
            subtitle="Demarrez au niveau qui correspond a vos besoins. Resiliez quand vous voulez."
          />
        </ScrollReveal>

        <div className="mx-auto mt-16 grid max-w-[1000px] grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <ScrollReveal key={plan.tier} delay={i * 80}>
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
                <div className="mt-1 mb-8 text-[0.78rem] text-text-dimmed">{plan.period}</div>
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
                  Demander un devis
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-[#111111] px-[6vw] py-28">
        <ScrollReveal>
          <SectionHeader
            label="Questions frequentes"
            title="Tout ce que vous <em>devez savoir</em>"
          />
        </ScrollReveal>

        <div className="mt-16">
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="px-[6vw] py-28">
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
                <p className="mb-8 text-[0.86rem] leading-[1.8] text-text-dimmed">
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
                    className="flex items-center gap-3 text-[0.86rem] text-text-dimmed"
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
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
