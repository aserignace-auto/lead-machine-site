import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import TestimonialGrid from "./TestimonialGrid";

export const metadata: Metadata = {
  title: "T\u00e9moignages & Cas Clients | Lead Machine",
  description:
    "D\u00e9couvrez les r\u00e9sultats concrets de nos clients : +340% de leads qualifi\u00e9s, ROI en moins de 11 jours. T\u00e9moignages v\u00e9rifi\u00e9s et chiffres r\u00e9els.",
};

const stats = [
  { value: "9,2/10", desc: "note de satisfaction moyenne client" },
  { value: "+340%", desc: "de leads qualifi\u00e9s en moyenne d\u00e8s le 1er mois" },
  { value: "100%", desc: "des clients satisfaits \u00e0 30 jours" },
  { value: "<11j", desc: "d\u00e9lai moyen de rentabilisation de l\u2019investissement" },
];

const featuredResults = [
  {
    label: "Mandats exclusifs / mois",
    before: "2\u20133 mandats",
    after: "8\u201310",
    afterLabel: "+300% en 6 semaines",
  },
  {
    label: "Leads actifs dans le pipeline",
    before: "8 contacts",
    after: "34",
    afterLabel: "\u00d74 en 3 semaines",
  },
  {
    label: "Temps de prospection / jour",
    before: "3h+ par jour",
    after: "20 min",
    afterLabel: "\u221287% de temps",
  },
  {
    label: "CA mensuel estim\u00e9",
    before: "~5 000 \u20ac / mois",
    after: "~16 K\u20ac",
    afterLabel: "+220% en 2 mois",
  },
];

const npsBreakdown = [
  { label: "R\u00e9sultats", pct: 95, score: "9,5" },
  { label: "D\u00e9ploiement", pct: 93, score: "9,3" },
  { label: "Support", pct: 90, score: "9,0" },
  { label: "Facilit\u00e9", pct: 88, score: "8,8" },
];

const caseStudies = [
  {
    sector: "Immobilier \u00b7 Agence ind\u00e9pendante \u00b7 Paris",
    title: "+220% de CA en 8 semaines",
    sub: "Agence de 2 personnes, zone Paris 8e\u201316e, sp\u00e9cialis\u00e9e mandats exclusifs",
    rows: [
      { label: "Mandats exclusifs / mois", value: "2\u20133 \u2192 8\u201310 (+300%)" },
      { label: "Temps prospection / semaine", value: "15h \u2192 2h (\u221287%)" },
      { label: "Leads actifs dans le pipeline", value: "8 \u2192 34 (\u00d74)" },
      { label: "CA mensuel", value: "5 000 \u20ac \u2192 16 000 \u20ac (+220%)" },
    ],
    quote:
      "\u00ab Je ne consulte plus PAP le matin. Je re\u00e7ois une liste de vendeurs motiv\u00e9s class\u00e9s par score. Je n\u2019appelle plus \u00e0 froid depuis 6 mois. \u00bb",
  },
  {
    sector: "Coaching Business \u00b7 Ind\u00e9pendant \u00b7 Lyon",
    title: "4 nouveaux clients en 30 jours",
    sub: "Coach business certifi\u00e9e, 100% solo, sans \u00e9quipe commerciale",
    rows: [
      { label: "Nouveaux clients / mois", value: "1\u20132 \u2192 4\u20135 (+150%)" },
      { label: "Temps relances manuelles", value: "2h/j \u2192 0 (\u2212100%)" },
      { label: "Prospects en nurturing actif", value: "0 \u2192 47 prospects" },
      { label: "D\u00e9lai de rentabilisation", value: "8 jours" },
    ],
    quote:
      "\u00ab Des prospects qui disaient non en janvier ont sign\u00e9 en avril gr\u00e2ce aux emails automatiques de suivi. De l\u2019argent r\u00e9cup\u00e9r\u00e9 sans effort. \u00bb",
  },
  {
    sector: "BTP \u00b7 \u00c9lectricien artisan \u00b7 Marseille",
    title: "+40% de taux de signature devis",
    sub: "Artisan solo, 100% du temps sur les chantiers, z\u00e9ro temps pour le commercial",
    rows: [
      { label: "Taux de signature devis", value: "35% \u2192 49% (+40%)" },
      {
        label: "Devis relanc\u00e9s automatiquement",
        value: "100% (vs 0% avant)",
      },
      { label: "CA additionnel / mois", value: "+1 800 \u20ac en moyenne" },
      { label: "D\u00e9lai de rentabilisation", value: "15 jours" },
    ],
    quote:
      "\u00ab Je suis toujours sur les chantiers. Lead Machine relance mes clients \u00e0 ma place. J\u2019ai arr\u00eat\u00e9 de perdre des contrats faute de temps. \u00bb",
  },
  {
    sector: "Services B2B \u00b7 Cabinet RH \u00b7 Paris",
    title: "\u00d73 volume de prospection sans embauche",
    sub: "Cabinet de recrutement, \u00e9quipe commerciale de 3 personnes",
    rows: [
      { label: "Leads qualifi\u00e9s / mois", value: "25 \u2192 85 (\u00d73,4)" },
      { label: "Taux de conversion", value: "12% \u2192 31% (+158%)" },
      { label: "Embauches suppl\u00e9mentaires", value: "0 (m\u00eame \u00e9quipe)" },
      { label: "D\u00e9lai de rentabilisation", value: "9 jours" },
    ],
    quote:
      "\u00ab Le scoring IA nous permet de concentrer notre \u00e9quipe sur les 20% de leads qui g\u00e9n\u00e8rent 80% du CA. C\u2019est du bon sens mis en syst\u00e8me. \u00bb",
  },
];

export default function TemoignagesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-[6vw] pt-28 pb-20 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(201,168,76,0.07)_0%,transparent_70%)]" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.035) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[820px]">
          <ScrollReveal>
            <span className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-gold/30 px-4 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-gold">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold shadow-[0_0_8px_var(--gold)]" />
              R&eacute;sultats r&eacute;els &middot; Clients v&eacute;rifi&eacute;s
              &middot; Chiffres concrets
            </span>
            <h1 className="font-serif text-[clamp(2.8rem,6vw,6rem)] font-light leading-[1.08] tracking-tight">
              Ils ont
              <br />
              <em className="text-gradient-gold italic">automatis&eacute;</em>
              <br />
              leur croissance
            </h1>
            <p className="mx-auto mt-5 max-w-[600px] text-base leading-relaxed text-text-dimmed">
              Pas des promesses marketing. Des r&eacute;sultats mesurables, des
              clients r&eacute;els, des chiffres v&eacute;rifiables. Voici ce
              que Lead Machine a concr&egrave;tement chang&eacute; pour eux.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="grid grid-cols-2 border-y border-border bg-gold/[0.02] md:grid-cols-4">
        {stats.map((s, i) => (
          <ScrollReveal key={s.value} delay={i * 80}>
            <div className="border-r border-border p-6 text-center last:border-r-0">
              <div className="font-serif text-[clamp(2rem,4vw,3rem)] font-light leading-none text-gradient-gold mb-1">
                {s.value}
              </div>
              <div className="text-xs text-text-dimmed">{s.desc}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* ── FEATURED CASE STUDY ── */}
      <section className="px-[6vw] py-24">
        <ScrollReveal>
          <SectionHeader
            label="Cas client &agrave; la une"
            title="De 2 mandats &agrave; 8 mandats <em>en un seul mois</em>"
          />
        </ScrollReveal>
        <ScrollReveal>
          <div className="mx-auto mt-14 max-w-[1100px] grid grid-cols-1 border border-border bg-border gap-px lg:grid-cols-2">
            {/* Left - Story */}
            <div className="bg-bg-card p-10 lg:border-r lg:border-border">
              <span className="mb-3 block text-[0.68rem] font-medium uppercase tracking-[0.2em] text-gold">
                Immobilier &mdash; Agence ind&eacute;pendante
              </span>
              <h3 className="font-serif text-3xl font-light mb-1">
                Thomas R.
              </h3>
              <p className="mb-6 text-sm text-text-dimmed">
                Directeur d&apos;agence &mdash; Paris 8e
              </p>
              <div className="mb-4 text-lg tracking-wider text-gold">
                {"\u2605\u2605\u2605\u2605\u2605"}
              </div>
              <blockquote className="mb-6 font-serif text-xl font-light italic leading-relaxed text-white/[0.88]">
                &laquo; Avant Lead Machine, je passais mes matin&eacute;es
                enti&egrave;res sur PAP. Maintenant je re&ccedil;ois une liste
                de vendeurs motiv&eacute;s chaque matin avec leur score. Je
                n&apos;appelle plus &agrave; froid depuis 6 mois. &raquo;
              </blockquote>
              <p className="mb-4 text-sm leading-[1.8] text-text-dimmed">
                Thomas g&egrave;re une agence immobili&egrave;re dans le 8e
                arrondissement de Paris. Sa prospection reposait
                enti&egrave;rement sur la recherche manuelle PAP et les
                recommandations. Il passait plus de 3 heures par jour sur des
                t&acirc;ches de recherche.
              </p>
              <p className="mb-5 text-sm leading-[1.8] text-text-dimmed">
                Apr&egrave;s 6 semaines avec Lead Machine, son pipeline est
                pass&eacute; de 8 &agrave; 34 leads actifs, et son taux de
                mandats exclusifs a tripl&eacute;. Il consacre maintenant ses
                matins aux visites et &agrave; la n&eacute;gociation.
              </p>
              <div className="border-t border-white/[0.07] pt-4 text-xs uppercase tracking-[0.1em] text-white/30">
                Client depuis 6 mois &middot; Forfait Performance &middot;
                Secteur Immobilier Paris
              </div>
            </div>

            {/* Right - Results */}
            <div className="bg-[#0D0D0D] p-10 flex flex-col justify-between">
              <div className="grid grid-cols-1 gap-3 mb-6 sm:grid-cols-2">
                {featuredResults.map((r) => (
                  <div
                    key={r.label}
                    className="rounded-md border border-gold/15 bg-gold/[0.06] p-4"
                  >
                    <div className="mb-1 text-[0.62rem] font-medium uppercase tracking-[0.14em] text-white/40">
                      {r.label}
                    </div>
                    <div className="mb-0.5 flex items-center gap-1.5 text-xs text-white/40">
                      <span className="rounded-full border border-red-400/30 px-1.5 py-0.5 text-[0.55rem] uppercase tracking-wider text-red-400">
                        avant
                      </span>
                      {r.before}
                    </div>
                    <div className="font-serif text-3xl font-light leading-none text-gold-light">
                      {r.after}
                    </div>
                    <div className="mt-0.5 flex items-center gap-1 text-[0.65rem] text-green-400">
                      <span className="rounded-full border border-green-400/30 px-1.5 py-0.5 text-[0.55rem] uppercase tracking-wider text-green-400">
                        apr&egrave;s
                      </span>
                      {r.afterLabel}
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded border border-gold/15 bg-gold/[0.06] p-4 text-sm leading-relaxed text-gold-lighter">
                {"\u2726"} ROI atteint d&egrave;s la 2e semaine &mdash; Le
                premier mandat g&eacute;n&eacute;r&eacute; via Lead Machine a
                couvert 3 mois d&apos;abonnement.
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── ALL TESTIMONIALS (filterable) ── */}
      <section className="bg-[#111111] px-[6vw] py-24">
        <ScrollReveal>
          <SectionHeader
            label="Tous les t&eacute;moignages"
            title="Ce qu&apos;ils en <em>disent</em>"
          />
        </ScrollReveal>
        <div className="mt-14">
          <TestimonialGrid />
        </div>
      </section>

      {/* ── NPS BAND ── */}
      <div className="border-y border-border bg-gold/[0.03] px-[6vw] py-16">
        <div className="mx-auto grid max-w-[900px] grid-cols-1 items-center gap-14 md:grid-cols-2">
          <ScrollReveal>
            <div className="text-center">
              <div className="font-serif text-[7rem] font-light leading-none text-gradient-gold">
                9,2
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-text-dimmed">
                Note de satisfaction moyenne / 10
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <div>
              <h3 className="font-serif text-2xl font-light mb-4">
                Ce que nos clients &eacute;valuent
              </h3>
              <p className="mb-5 text-sm leading-[1.8] text-text-dimmed">
                &Agrave; 30 jours de d&eacute;ploiement, chaque client est
                invit&eacute; &agrave; noter son exp&eacute;rience sur 4
                crit&egrave;res cl&eacute;s.
              </p>
              <div className="flex flex-col gap-3">
                {npsBreakdown.map((n) => (
                  <div
                    key={n.label}
                    className="flex items-center gap-3 text-xs"
                  >
                    <span className="w-20 text-right text-text-dimmed">
                      {n.label}
                    </span>
                    <div className="flex-1 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                      <div
                        className="h-full rounded-full bg-gradient-gold"
                        style={{ width: `${n.pct}%` }}
                      />
                    </div>
                    <span className="w-8 font-medium text-gold-light">
                      {n.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── DETAILED CASE STUDIES ── */}
      <section className="px-[6vw] py-24">
        <ScrollReveal>
          <SectionHeader
            label="&Eacute;tudes de cas"
            title="Les chiffres <em>avant / apr&egrave;s</em>"
          />
        </ScrollReveal>
        <div className="mx-auto mt-14 max-w-[1100px] grid grid-cols-1 border border-border bg-border gap-px md:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <ScrollReveal key={cs.title} delay={(i % 2) * 80}>
              <div className="bg-bg-card p-8 h-full">
                <span className="mb-2 block text-[0.65rem] font-medium uppercase tracking-[0.18em] text-gold">
                  {cs.sector}
                </span>
                <h3 className="font-serif text-2xl font-light mb-1">
                  {cs.title}
                </h3>
                <p className="mb-5 text-sm text-text-dimmed">{cs.sub}</p>
                <div className="mb-5 flex flex-col gap-1.5">
                  {cs.rows.map((r) => (
                    <div
                      key={r.label}
                      className="flex items-baseline justify-between border-b border-white/[0.05] py-1 text-sm last:border-b-0"
                    >
                      <span className="text-text-dimmed">{r.label}</span>
                      <span className="font-medium text-green-400">
                        {r.value}
                      </span>
                    </div>
                  ))}
                </div>
                <blockquote className="border-t border-white/[0.07] pt-4 font-serif text-sm italic leading-relaxed text-white/70">
                  {cs.quote}
                </blockquote>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border bg-[radial-gradient(ellipse_60%_100%_at_50%_100%,rgba(201,168,76,0.08)_0%,transparent_70%)] px-[6vw] py-20 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light">
            Votre nom dans
            <br />
            cette liste{" "}
            <em className="text-gold-light italic">bient&ocirc;t ?</em>
          </h2>
          <p className="mx-auto mt-5 max-w-[500px] text-sm text-text-dimmed">
            30 minutes pour voir ce que Lead Machine peut g&eacute;n&eacute;rer
            concr&egrave;tement pour votre activit&eacute;. Sans engagement.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/rdv" size="lg">
              R&eacute;server ma d&eacute;mo gratuite &rarr;
            </Button>
            <Button href="/simulateur" variant="secondary" size="lg">
              Simuler ma rentabilit&eacute;
            </Button>
          </div>
          <p className="mt-6 text-xs text-white/[0.22]">
            R&eacute;sultats r&eacute;els &middot; D&eacute;lai de mise en
            place garanti 10 jours &middot; Sans engagement
          </p>
        </ScrollReveal>
      </section>
    </>
  );
}
