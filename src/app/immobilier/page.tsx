import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Lead Machine Immobilier — Prospection IA pour agences et mandataires",
  description:
    "Automatisez votre prospection immobiliere : scraping PAP/Leboncoin, scoring IA des vendeurs, sequences email/SMS et prise de RDV automatique.",
};

/* ── Data ── */

const stats = [
  { value: "+340%", desc: "de mandats generes en moyenne" },
  { value: "-87%", desc: "de temps de prospection" },
  { value: "10j", desc: "pour etre operationnel" },
  { value: "24/7", desc: "votre IA ne dort jamais" },
];

const problems = [
  {
    type: "before" as const,
    title: "Prospection PAP manuelle et epuisante",
    text: "Recherche manuelle sur PAP et Leboncoin, appels a froid sans donnees, fichiers Excel desorganises. Des heures perdues chaque jour pour des resultats aleatoires.",
  },
  {
    type: "after" as const,
    title: "Detection et qualification automatiques 24h/24",
    text: "Le systeme scrute les annonces en continu, score chaque vendeur par l'IA, et declenche automatiquement les sequences de contact. Vous ne recevez que des prospects chauds.",
  },
  {
    type: "before" as const,
    title: "Relances oubliees, leads perdus",
    text: "Un prospect qui ne rappelle pas est oublie. Les relances manuelles sont chronophages. Le suivi se perd dans les emails et les notes papier.",
  },
  {
    type: "after" as const,
    title: "Sequences automatiques multi-touch",
    text: "Email J0 + SMS J0+2h + relance J+2 + appel J+3 + nurturing mensuel. Chaque prospect est suivi automatiquement selon son comportement, sans aucune action manuelle.",
  },
];

const features = [
  {
    num: "01",
    tag: "Detection & Scraping",
    title: "Surveillance automatique PAP, Leboncoin & SeLoger",
    text: "Notre systeme monitore en continu les nouvelles annonces de particuliers. Chaque nouveau vendeur detecte est automatiquement importe et enrichi dans votre pipeline.",
    items: [
      "Detection en temps reel des nouvelles annonces particuliers",
      "Extraction automatique : nom, telephone, email, localisation, prix",
      "Enrichissement avec donnees publiques professionnelles",
      "Deduplication automatique et nettoyage des doublons",
      "Alertes geographiques configurables par zone de chalandise",
    ],
    demo: {
      title: "Nouveaux leads detectes — Aujourd'hui",
      rows: [
        { name: "M. Dupont — T3 Paris 15e", score: "CHAUD 92", type: "hot" as const },
        { name: "Mme Martin — Maison Versailles", score: "CHAUD 87", type: "hot" as const },
        { name: "M. Leroy — Appart. Lyon", score: "TIEDE 64", type: "warm" as const },
        { name: "Mme Bernard — Studio Paris 10e", score: "TIEDE 58", type: "warm" as const },
        { name: "M. Rousseau — T4 Boulogne", score: "FROID 31", type: "cold" as const },
      ],
    },
  },
  {
    num: "02",
    tag: "Intelligence Artificielle",
    title: "Scoring IA des vendeurs motives",
    text: "L'IA analyse des dizaines de criteres pour scorer chaque vendeur : anciennete de l'annonce, evolution du prix, termes utilises, profil de l'annonceur. Vous contactez d'abord les plus motives.",
    items: [
      "Score de motivation calcule sur 100 en temps reel",
      "Detection des baisses de prix (signal de vendeur presse)",
      "Analyse semantique de l'annonce par IA",
      "Priorisation automatique dans le pipeline",
      "Alertes en temps reel sur les leads les plus chauds",
    ],
    demo: {
      title: "Criteres de scoring IA — M. Dupont",
      scoring: [
        { label: "Anciennete annonce", pts: "+18 pts", color: "text-green-400" },
        { label: "Baisse de prix detectee", pts: "+25 pts", color: "text-green-400" },
        { label: "Mots-cles urgence", pts: "+15 pts", color: "text-green-400" },
        { label: "Prix marche coherent", pts: "+8 pts", color: "text-orange-400" },
        { label: "Contact direct visible", pts: "+20 pts", color: "text-green-400" },
      ],
      total: "86/100",
    },
  },
  {
    num: "03",
    tag: "Sequences automatisees",
    title: "Prospection multicanal email & SMS",
    text: "Des qu'un lead est importe, une sequence de contact se declenche automatiquement selon votre script personnalise. Emails et SMS au bon moment, avec le bon message.",
    items: [
      "Email de 1er contact personnalise (J0)",
      "SMS de rappel court avec lien de prise de RDV (J0+2h)",
      "Relances automatiques J+2, J+3, J+5, J+7",
      "Adaptation du message selon l'ouverture et le comportement",
      "Sequence de nurturing sur 90 jours pour les non-interesses",
    ],
    demo: {
      title: "Sequence active — M. Dupont",
      sequence: [
        { icon: "\u2709", label: "Email 1er contact", time: "J0 — 09h00", status: "OUVERT", statusClass: "bg-gold/[0.15] text-gold-light" },
        { icon: "\uD83D\uDCAC", label: "SMS avec lien Calendly", time: "J0 — 11h00", status: "ENVOYE", statusClass: "bg-green-400/10 text-green-400" },
        { icon: "\u2709", label: "Email relance #1", time: "J+2 — planifie", status: "EN ATTENTE", statusClass: "bg-white/[0.06] text-white/40" },
        { icon: "\uD83D\uDCDE", label: "Alerte appel qualification", time: "J+3 — alerte agent", status: "EN ATTENTE", statusClass: "bg-white/[0.06] text-white/40" },
      ],
    },
  },
  {
    num: "04",
    tag: "Tableau de bord",
    title: "Pilotage complet de votre activite",
    text: "Toutes vos metriques en un seul espace : leads generes, taux de conversion, mandats signes. Visualisez vos performances en temps reel et identifiez les opportunites prioritaires.",
    items: [
      "Pipeline visuel avec les 16 statuts de suivi prospect",
      "Metriques cles en temps reel (leads, RDV, mandats)",
      "Export Google Sheets synchronise automatiquement",
      "Alertes intelligentes sur les opportunites a prioriser",
      "Rapport de performance hebdomadaire automatique",
    ],
    demo: {
      title: "Tableau de bord — Cette semaine",
      dashboard: [
        { label: "Leads detectes", val: "148", delta: "+23 vs sem. prec." },
        { label: "RDV planifies", val: "12", delta: "+4 vs sem. prec." },
        { label: "Leads chauds", val: "34", delta: "Score > 75/100" },
        { label: "Taux de qualif.", val: "23%", delta: "Objectif : 20%" },
      ],
    },
  },
];

const processSteps = [
  { num: "01", title: "Appel de decouverte & audit", text: "Analyse de votre zone geographique, de vos objectifs et de vos outils existants. Definition des criteres de ciblage personnalises.", time: "J0 — 30 min" },
  { num: "02", title: "Transmission des informations techniques", text: "Vous remplissez un formulaire simple : zones de prospection, CRM utilise, acces email, script de contact souhaite.", time: "J1 — 15 min" },
  { num: "03", title: "Configuration & developpement", text: "Notre equipe configure votre systeme : scraping, scoring IA, sequences personnalisees, integration CRM et tableau de bord.", time: "J2 a J10" },
  { num: "04", title: "Livraison & formation", text: "Vos acces sont envoyes. Une visio de 45 minutes vous presente le systeme en direct. Le premier lead tombe generalement dans les 24h.", time: "J10 — 45 min" },
  { num: "05", title: "Suivi & optimisation continue", text: "Rapport mensuel de performance, ajustements des sequences et de l'IA selon les resultats. Votre systeme s'ameliore en permanence.", time: "Mensuel" },
];

const offers = [
  {
    tier: "Forfait Essentiel",
    name: "Prospecteur",
    tagline: "Pour demarrer l'automatisation de votre prospection PAP et Leboncoin.",
    features: [
      "Scraping PAP & Leboncoin sur votre zone",
      "Scoring IA des vendeurs (0-100)",
      "Sequence email automatique (3 etapes)",
      "SMS de 1er contact",
      "Tableau de bord Google Sheets",
      "Rapport hebdomadaire automatique",
      "Mise en place en 10 jours",
    ],
    featured: false,
  },
  {
    tier: "Forfait Performance",
    name: "Convertisseur",
    tagline: "La solution complete pour maximiser votre taux de mandats.",
    features: [
      "Tout le forfait Prospecteur",
      "Scraping SeLoger + LBC + PAP + Bien'ici",
      "Sequence complete email + SMS (7 etapes)",
      "Prise de RDV automatique (Calendly integre)",
      "Integration CRM (Hubspot, Pipedrive, Odoo...)",
      "Pipeline de suivi 16 statuts",
      "Nurturing automatique sur 90 jours",
      "Suivi mensuel avec l'equipe Lead Machine",
    ],
    featured: true,
  },
  {
    tier: "Forfait Excellence",
    name: "Domination",
    tagline: "Pour les structures qui veulent l'automatisation totale et un avantage concurrentiel maximal.",
    features: [
      "Tout le forfait Convertisseur",
      "Multi-zones & multi-agences",
      "Prospection LinkedIn automatisee",
      "IA predictive — anticipation des mises en vente",
      "Reporting avance & analyses predictives",
      "Accompagnement strategique mensuel",
      "SLA prioritaire — support sous 4h",
    ],
    featured: false,
  },
];

const testimonials = [
  {
    quote: "En 3 semaines, mon pipeline est passe de 8 a 34 leads actifs. Je ne touche plus a PAP depuis le deploiement. Le systeme detecte des vendeurs motives que je n'aurais jamais trouves seul.",
    author: "Thomas R.",
    role: "Agent independant — Paris 8e · 6 mois avec Lead Machine",
  },
  {
    quote: "La premiere semaine, j'etais sceptique. La deuxieme, j'avais 3 RDV planifies automatiquement. Aujourd'hui je gere deux fois plus de mandats avec le meme temps de travail.",
    author: "Sandrine M.",
    role: "Negociatrice immobiliere — Lyon · 4 mois avec Lead Machine",
  },
  {
    quote: "J'ai deploye Lead Machine sur mes 4 agences simultanement. Le ROI a ete visible des le premier mois. La mise en place a ete fluide et l'equipe tres reactive.",
    author: "Marc D.",
    role: "Directeur reseau agences — Bordeaux · 8 mois avec Lead Machine",
  },
];

const roiBefore = [
  { label: "Mandats exclusifs / mois", value: "2\u20133" },
  { label: "Temps prospection / semaine", value: "15h" },
  { label: "Taux de concretisation PAP", value: "~5%" },
  { label: "CA moyen / mois", value: "4 500 \u20AC" },
];

const roiAfter = [
  { label: "Mandats exclusifs / mois", value: "6\u20139 (+3x)", positive: true },
  { label: "Temps prospection / semaine", value: "2h (-87%)", positive: true },
  { label: "Taux de concretisation", value: "~18% (+260%)", positive: true },
  { label: "CA moyen / mois", value: "12 000 \u20AC (+167%)", gold: true },
];

const stopDoing = [
  "Parcourir manuellement PAP et Leboncoin chaque matin",
  "Appeler des vendeurs sans donnees ni qualification prealable",
  "Oublier de relancer des prospects chauds",
  "Gerer vos leads dans des fichiers Excel desorganises",
  "Manquer des opportunites faute de reactivite",
];

const startDoing = [
  "Recevoir des leads pre-qualifies directement dans votre pipeline",
  "Appeler uniquement des vendeurs motives et informes",
  "Consacrer votre temps a la negociation et aux visites",
  "Developper votre portefeuille de mandats exclusifs",
  "Avoir un avantage concurrentiel durable sur votre zone",
];

/* ── Helpers ── */

function ScoreTag({ type, label }: { type: "hot" | "warm" | "cold"; label: string }) {
  const cls = {
    hot: "bg-gold/[0.15] text-gold-light",
    warm: "bg-orange-400/10 text-orange-400",
    cold: "bg-white/[0.06] text-white/40",
  };
  return (
    <span className={`rounded px-2 py-0.5 text-[0.62rem] font-semibold ${cls[type]}`}>
      {label}
    </span>
  );
}

/* ── Page ── */

export default function ImmobilierPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative grid min-h-[90vh] items-center gap-16 overflow-hidden px-[6vw] pt-24 pb-20 lg:grid-cols-[1fr_auto]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_70%_50%,rgba(201,168,76,0.06)_0%,transparent_70%)]" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.035) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 80% at 30% 50%, black 20%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 30% 50%, black 20%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[640px]">
          <ScrollReveal>
            <div className="mb-6 flex items-center gap-2.5 text-[0.72rem] uppercase tracking-[0.12em] text-white/30">
              <Link href="/" className="text-gold no-underline hover:text-gold-light">
                Accueil
              </Link>
              <span>/</span>
              Immobilier
            </div>
          </ScrollReveal>

          <ScrollReveal delay={50}>
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-gold/30 px-5 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-gold">
              <span
                className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold shadow-[0_0_8px_var(--gold)]"
                style={{ animation: "pulse-dot 2s infinite" }}
              />
              Secteur Immobilier &middot; Disponible maintenant
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-serif text-[clamp(2.8rem,5.5vw,5.5rem)] font-light leading-[1.1] tracking-tight">
              Arretez de prospecter.
              <br />
              Laissez <em className="text-gradient-gold not-italic">l&apos;IA le faire.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="mt-7 max-w-[520px] text-base font-light leading-relaxed text-text-dimmed">
              Lead Machine deploie un systeme d&apos;automatisation complet pour agences, mandataires et
              promoteurs : detection des vendeurs motives, qualification IA, sequences de contact et
              prise de RDV automatique.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#contact" size="lg">
                Demander ma demo gratuite &rarr;
              </Button>
              <Button href="#fonctions" variant="secondary" size="lg">
                Voir les fonctions &darr;
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Live pipeline card - desktop only */}
        <ScrollReveal delay={300} className="hidden lg:block">
          <div className="relative z-10 w-[380px] flex-shrink-0 overflow-hidden rounded-xl border border-border bg-bg-card shadow-[0_30px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(201,168,76,0.06)]">
            <div className="flex items-center gap-2 border-b border-border bg-[#0D0D0D] px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-2 text-[0.66rem] text-white/30">Pipeline Immobilier — Live</span>
            </div>
            <div className="flex flex-col gap-4 p-5">
              <div className="flex items-center justify-between rounded-md border border-gold/[0.08] bg-white/[0.03] px-4 py-3">
                <div>
                  <div className="text-[0.68rem] uppercase tracking-[0.1em] text-white/40">
                    Vendeurs detectes
                  </div>
                  <div className="font-serif text-3xl text-gold-light">43</div>
                </div>
                <span className="text-[0.68rem] text-green-400">&uarr; Aujourd&apos;hui</span>
              </div>
              <div className="text-[0.62rem] uppercase tracking-[0.14em] text-white/30">
                Sequences en cours
              </div>
              {[
                { dot: "bg-green-400", text: "Email envoye — M. Dupont", badge: null },
                { dot: "bg-gold", text: "SMS relance — Mme Martin", badge: { label: "En cours", cls: "bg-gold/[0.15] text-gold-light" } },
                { dot: "bg-green-400", text: "RDV pris — M. Leclerc \u2713", badge: null },
                { dot: "bg-gold", text: "Scoring 12 nouveaux leads", badge: { label: "IA", cls: "bg-purple-500/[0.15] text-purple-400" } },
              ].map((row) => (
                <div
                  key={row.text}
                  className="flex items-center gap-3 border-b border-white/[0.04] py-2 last:border-b-0"
                >
                  <span
                    className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${row.dot}`}
                    style={row.dot === "bg-gold" ? { animation: "pulse-dot 1.5s infinite" } : undefined}
                  />
                  <span className="text-[0.72rem] text-white/70">{row.text}</span>
                  {row.badge && (
                    <span className={`ml-auto rounded px-2 py-0.5 text-[0.62rem] font-semibold ${row.badge.cls}`}>
                      {row.badge.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── STATS BAR ── */}
      <section className="flex flex-wrap border-y border-border bg-gold/[0.02]">
        {stats.map((s) => (
          <div
            key={s.value}
            className="flex-1 min-w-[50%] sm:min-w-0 border-r border-border py-8 text-center last:border-r-0"
          >
            <div className="text-gradient-gold font-serif text-[clamp(2rem,4vw,3rem)] font-light leading-none">
              {s.value}
            </div>
            <div className="mt-1 text-[0.78rem] text-text-dimmed">{s.desc}</div>
          </div>
        ))}
      </section>

      {/* ── BEFORE / AFTER ── */}
      <section className="bg-[#111111] px-[6vw] py-24">
        <ScrollReveal>
          <SectionHeader
            label="Le constat"
            title="La prospection immobiliere <em>ne devrait plus etre manuelle</em>"
            subtitle="Les professionnels de l'immobilier perdent en moyenne 3h par jour sur des taches qui peuvent etre entierement automatisees."
          />
        </ScrollReveal>

        <div className="mx-auto mt-16 grid max-w-[1000px] grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
          {problems.map((p, i) => (
            <ScrollReveal key={i} delay={i % 2 === 0 ? 0 : 80}>
              <div className="bg-bg-card p-8">
                <div
                  className={`mb-2.5 text-[0.68rem] uppercase tracking-[0.15em] ${
                    p.type === "before" ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {p.type === "before" ? "Avant Lead Machine" : "Avec Lead Machine"}
                </div>
                <h3 className="mb-2 text-base font-medium">{p.title}</h3>
                <p className="text-[0.82rem] leading-[1.7] text-text-dimmed">{p.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="fonctions" className="px-[6vw] py-24">
        <ScrollReveal>
          <SectionHeader
            label="Fonctionnalites"
            title="Un systeme complet, <em>de A a Z</em>"
            subtitle="Lead Machine couvre l'integralite du cycle de prospection immobiliere dans une solution unique et integree."
          />
        </ScrollReveal>

        <div className="mx-auto mt-16 max-w-[1100px] flex flex-col gap-px">
          {features.map((feat) => (
            <ScrollReveal key={feat.num}>
              <div className="grid grid-cols-1 border border-border bg-border md:grid-cols-2">
                {/* Info */}
                <div className="border-b border-border bg-bg-card p-10 md:border-b-0 md:border-r">
                  <div className="mb-1 font-serif text-6xl font-light text-gold/[0.15] leading-none">
                    {feat.num}
                  </div>
                  <span className="mb-3 block text-[0.65rem] uppercase tracking-[0.2em] text-gold">
                    {feat.tag}
                  </span>
                  <h3 className="mb-4 font-serif text-[1.8rem] font-normal leading-tight">
                    {feat.title}
                  </h3>
                  <p className="mb-6 text-[0.86rem] leading-[1.8] text-text-dimmed">{feat.text}</p>
                  <ul className="flex flex-col gap-2">
                    {feat.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[0.82rem] text-white/[0.72]">
                        <span className="flex-shrink-0 text-gold">&mdash;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Demo */}
                <div className="flex flex-col justify-center gap-3 bg-[#0D0D0D] p-10">
                  <div className="mb-3 text-[0.62rem] uppercase tracking-[0.14em] text-white/30">
                    {feat.demo.title}
                  </div>
                  <div className="rounded-lg border border-gold/10 bg-white/[0.03] p-5">
                    {/* Rows demo */}
                    {"rows" in feat.demo &&
                      feat.demo.rows?.map((row) => (
                        <div
                          key={row.name}
                          className="flex items-center justify-between border-b border-white/[0.04] py-2 last:border-b-0"
                        >
                          <span className="text-[0.74rem] text-white/75">{row.name}</span>
                          <ScoreTag type={row.type} label={row.score} />
                        </div>
                      ))}

                    {/* Scoring demo */}
                    {"scoring" in feat.demo && feat.demo.scoring && (
                      <>
                        {feat.demo.scoring.map((s) => (
                          <div
                            key={s.label}
                            className="flex items-center justify-between border-b border-white/[0.04] py-2 last:border-b-0"
                          >
                            <span className="text-[0.74rem] text-white/75">{s.label}</span>
                            <span className={`text-[0.72rem] ${s.color}`}>{s.pts}</span>
                          </div>
                        ))}
                        <div className="mt-4 text-right font-serif text-3xl text-gold-light">
                          Score : {feat.demo.total}
                        </div>
                      </>
                    )}

                    {/* Sequence demo */}
                    {"sequence" in feat.demo && feat.demo.sequence && (
                      <>
                        {feat.demo.sequence.map((s) => (
                          <div
                            key={s.label}
                            className="flex items-center gap-3 border-b border-white/[0.04] py-2.5 last:border-b-0"
                          >
                            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded text-base">
                              {s.icon}
                            </div>
                            <div className="flex-1">
                              <div className="text-[0.74rem] text-white/[0.78]">{s.label}</div>
                              <div className="text-[0.62rem] text-white/30">{s.time}</div>
                            </div>
                            <span
                              className={`rounded px-2 py-0.5 text-[0.62rem] font-semibold ${s.statusClass}`}
                            >
                              {s.status}
                            </span>
                          </div>
                        ))}
                      </>
                    )}

                    {/* Dashboard demo */}
                    {"dashboard" in feat.demo && feat.demo.dashboard && (
                      <div className="grid grid-cols-2 gap-2">
                        {feat.demo.dashboard.map((d) => (
                          <div
                            key={d.label}
                            className="rounded-md border border-gold/[0.08] bg-white/[0.03] p-3"
                          >
                            <div className="text-[0.6rem] uppercase tracking-[0.1em] text-white/30">
                              {d.label}
                            </div>
                            <div className="font-serif text-2xl text-gold-light leading-none mt-1">
                              {d.val}
                            </div>
                            <div className="mt-1 text-[0.64rem] text-green-400">&uarr; {d.delta}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="deploiement" className="bg-[#111111] px-[6vw] py-24">
        <ScrollReveal>
          <SectionHeader
            label="Deploiement"
            title="Operationnel en <em>10 jours</em>"
            subtitle="Un deploiement cle en main, sans competences techniques requises de votre cote."
          />
        </ScrollReveal>

        <div className="mx-auto mt-16 flex max-w-[1000px] flex-col gap-px border border-border bg-border">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 40}>
              <div className="grid grid-cols-[70px_1fr_auto] items-center gap-6 bg-bg-card px-8 py-6 transition-colors duration-300 hover:bg-gold/[0.03]">
                <div className="font-serif text-3xl font-light text-gold/30">{step.num}</div>
                <div>
                  <h3 className="text-[0.95rem] font-medium">{step.title}</h3>
                  <p className="mt-1 text-[0.8rem] text-text-dimmed">{step.text}</p>
                </div>
                <span className="hidden whitespace-nowrap rounded-full border border-gold/25 px-3 py-1 text-[0.68rem] uppercase tracking-[0.1em] text-gold sm:block">
                  {step.time}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── OFFERS ── */}
      <section id="offres" className="px-[6vw] py-24">
        <ScrollReveal>
          <SectionHeader
            label="Nos offres immobilier"
            title="Choisissez votre <em>niveau d'automatisation</em>"
            subtitle="Sans engagement de duree. Resiliation sous 30 jours. Evolution de forfait possible a tout moment."
          />
        </ScrollReveal>

        <div className="mx-auto mt-16 grid max-w-[1100px] grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {offers.map((offer, i) => (
            <ScrollReveal key={offer.name} delay={i * 80}>
              <div
                className={`relative p-10 ${
                  offer.featured ? "bg-gold/[0.04]" : "bg-bg-card"
                }`}
              >
                {offer.featured && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-gold px-4 py-1 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-bg-primary whitespace-nowrap">
                    Le plus populaire
                  </div>
                )}
                <div className="mb-3 text-[0.7rem] uppercase tracking-[0.18em] text-text-dimmed">
                  {offer.tier}
                </div>
                <div className="mb-1.5 font-serif text-3xl font-normal text-gold-light">
                  {offer.name}
                </div>
                <p className="mb-7 text-[0.8rem] leading-relaxed text-text-dimmed">
                  {offer.tagline}
                </p>
                <div className="mb-6 h-px w-10 bg-gold/30" />
                <ul className="mb-8 flex flex-col gap-2">
                  {offer.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-[0.81rem] leading-relaxed text-white/75">
                      <span className="mt-0.5 flex-shrink-0 text-[0.52rem] text-gold">
                        {"\u2726"}
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`block rounded-sm py-3.5 text-center text-[0.78rem] uppercase tracking-[0.12em] transition-all duration-200 no-underline ${
                    offer.featured
                      ? "bg-gold font-semibold text-bg-primary"
                      : "border border-gold/30 text-gold hover:bg-gold/10"
                  }`}
                >
                  Demander un devis
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── ROI ── */}
      <section id="roi" className="bg-[#111111] px-[6vw] py-24">
        <ScrollReveal>
          <SectionHeader
            label="Retour sur investissement"
            title="Un ROI <em>mesurable</em> des le premier mois"
            subtitle="Base sur les resultats moyens constates chez nos clients immobilier."
          />
        </ScrollReveal>

        <div className="mx-auto mt-16 grid max-w-[1100px] grid-cols-1 border border-border bg-border md:grid-cols-2">
          <ScrollReveal>
            <div className="border-b border-border bg-bg-card p-10 md:border-b-0 md:border-r">
              <h3 className="mb-6 font-serif text-2xl font-normal">Scenario agence — 1 agent</h3>

              {/* Before */}
              <div className="mb-4 rounded-md border border-gold/10 bg-white/[0.03] p-5">
                <div className="mb-3 text-[0.68rem] uppercase tracking-[0.15em] text-gold">
                  Avant Lead Machine
                </div>
                {roiBefore.map((r) => (
                  <div
                    key={r.label}
                    className="flex items-baseline justify-between border-b border-white/[0.04] py-1.5 text-[0.82rem] last:border-b-0"
                  >
                    <span className="text-text-dimmed">{r.label}</span>
                    <span className="font-medium">{r.value}</span>
                  </div>
                ))}
              </div>

              {/* After */}
              <div className="rounded-md border border-gold/10 bg-white/[0.03] p-5">
                <div className="mb-3 text-[0.68rem] uppercase tracking-[0.15em] text-gold">
                  Avec Lead Machine (mois 1)
                </div>
                {roiAfter.map((r) => (
                  <div
                    key={r.label}
                    className="flex items-baseline justify-between border-b border-white/[0.04] py-1.5 text-[0.82rem] last:border-b-0"
                  >
                    <span className="text-text-dimmed">{r.label}</span>
                    <span
                      className={`font-medium ${
                        r.gold ? "text-gold-light" : r.positive ? "text-green-400" : ""
                      }`}
                    >
                      {r.value}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-[0.7rem] leading-[1.7] text-white/[0.28]">
                * Resultats bases sur les donnees moyennes de nos clients. Les performances varient
                selon la zone geographique et le marche local.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="bg-[#0D0D0D] p-10">
              <h4 className="mb-5 font-serif text-xl font-normal">
                Ce que vous arretez de faire
              </h4>
              <ul className="mb-8 flex flex-col gap-3">
                {stopDoing.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.83rem] text-text-dimmed">
                    <span className="flex-shrink-0 text-red-400">{"\u2715"}</span>
                    {item}
                  </li>
                ))}
              </ul>

              <h4 className="mb-5 font-serif text-xl font-normal">
                Ce que vous faites a la place
              </h4>
              <ul className="flex flex-col gap-3">
                {startDoing.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.83rem] text-text-dimmed">
                    <span className="flex-shrink-0 text-green-400">{"\u2713"}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="px-[6vw] py-24">
        <ScrollReveal>
          <SectionHeader
            label="Temoignages"
            title="Ils ont automatise <em>leur prospection</em>"
          />
        </ScrollReveal>

        <div className="mx-auto mt-16 grid max-w-[1100px] grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.author} delay={i * 80}>
              <div className="bg-bg-card p-10">
                <div className="mb-5 text-[0.9rem] tracking-[0.15em] text-gold">
                  {"\u2605\u2605\u2605\u2605\u2605"}
                </div>
                <p className="mb-6 font-serif text-[1.05rem] font-light italic leading-[1.65] text-white/85">
                  &laquo; {t.quote} &raquo;
                </p>
                <div className="text-[0.78rem] font-medium">{t.author}</div>
                <div className="mt-1 text-[0.72rem] text-text-dimmed">{t.role}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section
        id="contact"
        className="border-t border-border px-[6vw] py-20 text-center"
        style={{
          background: "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      >
        <ScrollReveal>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light leading-tight">
            Pret a automatiser
            <br />
            votre <em className="text-gradient-gold not-italic">prospection immobiliere ?</em>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[0.9rem] text-text-dimmed">
            Demo gratuite de 30 minutes. Analyse de votre zone et simulation de vos resultats
            potentiels. Sans engagement.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/#contact" size="lg">
              Demander ma demo gratuite &rarr;
            </Button>
            <Button href="tel:+33600000000" variant="secondary" size="lg">
              Nous appeler directement
            </Button>
          </div>
          <p className="mt-6 text-[0.72rem] text-white/[0.22]">
            Reponse sous 24h &middot; Deploiement en 10 jours &middot; Sans engagement
          </p>
        </ScrollReveal>
      </section>
    </>
  );
}
