import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import Glossary from "./Glossary";

export const metadata: Metadata = {
  title: "Automatisation IA : qu'est-ce que c'est ? | Lead Machine",
  description:
    "Guide complet sans jargon : ce que l'automatisation IA fait concrètement pour votre business. Les 3 piliers, idées reçues, cas concrets et glossaire.",
};

const pillars = [
  {
    icon: "\u{1F50D}",
    num: "01",
    title: "Chercher \u00e0 votre place",
    text: "L\u2019IA surveille en continu les sources o\u00f9 se trouvent vos prospects : annonces immobili\u00e8res, r\u00e9seaux sociaux professionnels, bases de donn\u00e9es B2B. Elle d\u00e9tecte chaque nouvelle opportunit\u00e9 et la remonte dans votre pipeline \u2014 sans que vous ayez \u00e0 regarder vous-m\u00eame.",
    exLabel: "Exemple concret",
    exText:
      "Un agent immobilier re\u00e7oit chaque matin une liste de 15 vendeurs particuliers qui viennent de publier des annonces dans sa zone, class\u00e9s par score de motivation. Il n\u2019a plus besoin d\u2019aller sur PAP.",
  },
  {
    icon: "\u{1F3AF}",
    num: "02",
    title: "Qualifier \u00e0 votre place",
    text: "Un mod\u00e8le d\u2019IA analyse chaque prospect selon des dizaines de crit\u00e8res \u2014 signaux d\u2019urgence, comportement en ligne, historique de contact \u2014 et lui attribue un score de priorit\u00e9. Vous savez qui appeler en premier sans avoir \u00e0 creuser dans chaque fiche.",
    exLabel: "Exemple concret",
    exText:
      "Un coaching business re\u00e7oit 50 demandes par mois. L\u2019IA les score automatiquement selon leur budget apparent, leur urgence et leur profil. Le commercial ne traite que les 15 plus qualifi\u00e9s.",
  },
  {
    icon: "\u{1F4E1}",
    num: "03",
    title: "Contacter & relancer \u00e0 votre place",
    text: "Des s\u00e9quences de messages personnalis\u00e9s se d\u00e9clenchent automatiquement selon le comportement de chaque prospect. Si quelqu\u2019un ouvre votre email mais ne r\u00e9pond pas, une relance cibl\u00e9e part automatiquement. Si quelqu\u2019un clique sur votre lien de RDV, vous en \u00eates notifi\u00e9 instantan\u00e9ment.",
    exLabel: "Exemple concret",
    exText:
      "Un prospect re\u00e7oit un email J0, un SMS J0+2h, une relance J+2 et un dernier contact J+5 \u2014 tout \u00e7a automatiquement, personnalis\u00e9 avec son pr\u00e9nom et adapt\u00e9 \u00e0 son secteur.",
  },
];

const myths = [
  {
    type: "myth" as const,
    title: "\u00ab L\u2019IA va remplacer mes commerciaux \u00bb",
    text: "L\u2019IA automatise les t\u00e2ches r\u00e9p\u00e9titives et sans valeur ajout\u00e9e (chercher, envoyer, relancer). Elle ne remplace pas la relation humaine, la n\u00e9gociation et la confiance \u2014 qui restent au c\u0153ur de toute vente. Elle lib\u00e8re vos commerciaux pour qu\u2019ils se concentrent sur ce qu\u2019ils font de mieux.",
  },
  {
    type: "reality" as const,
    title: "L\u2019IA amplifie vos commerciaux, elle ne les remplace pas",
    text: "Avec un syst\u00e8me IA, un commercial traite 3 \u00e0 5 fois plus de prospects qualifi\u00e9s qu\u2019avant, parce qu\u2019il n\u2019est plus noy\u00e9 dans la prospection manuelle. Il devient meilleur dans son m\u00e9tier parce qu\u2019il passe son temps sur ce qui compte vraiment.",
  },
  {
    type: "myth" as const,
    title: "\u00ab Il faut \u00eatre une grande entreprise pour utiliser l\u2019IA \u00bb",
    text: "C\u2019\u00e9tait vrai il y a 5 ans. Aujourd\u2019hui, les outils d\u2019automatisation IA sont accessibles \u00e0 l\u2019agent ind\u00e9pendant, au coach solo, \u00e0 l\u2019artisan ou \u00e0 la petite agence. Le co\u00fbt d\u2019un abonnement Lead Machine est inf\u00e9rieur au co\u00fbt d\u2019une demi-journ\u00e9e de prospection manuelle.",
  },
  {
    type: "reality" as const,
    title: "Les TPE et ind\u00e9pendants ont le plus \u00e0 gagner",
    text: "Une grande entreprise a d\u00e9j\u00e0 une \u00e9quipe marketing et des outils. Un professionnel ind\u00e9pendant, lui, gagne un avantage concurrentiel massif en automatisant sa prospection \u2014 parce qu\u2019il n\u2019avait pas les ressources pour le faire manuellement \u00e0 cette \u00e9chelle.",
  },
  {
    type: "myth" as const,
    title: "\u00ab Les emails automatiques, \u00e7a ne marche pas \u00bb",
    text: "Les emails g\u00e9n\u00e9riques et mal cibl\u00e9s ne marchent pas. C\u2019est diff\u00e9rent. Un email personnalis\u00e9 avec le pr\u00e9nom du prospect, mentionnant son secteur pr\u00e9cis et envoy\u00e9 au bon moment g\u00e9n\u00e8re en moyenne 40% de taux d\u2019ouverture \u2014 bien au-dessus des standards B2B.",
  },
  {
    type: "myth" as const,
    title: "\u00ab Je n\u2019ai pas besoin de \u00e7a, je me d\u00e9brouille bien \u00bb",
    text: "Peut-\u00eatre. Mais si vous vous d\u00e9brouillez bien manuellement, imaginez ce que vous feriez avec un syst\u00e8me qui g\u00e9n\u00e8re 3 \u00e0 4 fois plus de leads qualifi\u00e9s, sans effort suppl\u00e9mentaire de votre part. Ce n\u2019est pas une question de n\u00e9cessit\u00e9 \u2014 c\u2019est une question d\u2019avantage concurrentiel.",
  },
];

const useCases = [
  {
    num: "01",
    tag: "Immobilier",
    title: "Prospection PAP automatique",
    text: "Le syst\u00e8me surveille PAP, Leboncoin et SeLoger en temps r\u00e9el. Chaque nouvelle annonce de particulier est d\u00e9tect\u00e9e, le vendeur est scor\u00e9, et une s\u00e9quence email + SMS personnalis\u00e9e se d\u00e9clenche automatiquement dans les minutes qui suivent.",
    auto: "D\u00e9tection + contact en moins de 10 minutes",
  },
  {
    num: "02",
    tag: "Coaching & Formation",
    title: "Qualification automatique des leads entrants",
    text: "Chaque demande de contact est analys\u00e9e par l\u2019IA : profil LinkedIn du prospect, taille de l\u2019entreprise, intitul\u00e9 de poste, mots utilis\u00e9s dans le message. Un score est attribu\u00e9. Seuls les prospects les plus qualifi\u00e9s d\u00e9clenchent une notification imm\u00e9diate au commercial.",
    auto: "Score calcul\u00e9 en quelques secondes",
  },
  {
    num: "03",
    tag: "BTP & Artisans",
    title: "Suivi automatique des devis",
    text: "Apr\u00e8s l\u2019envoi d\u2019un devis, le syst\u00e8me relance automatiquement le client \u00e0 J+2, J+5 et J+10 avec des messages diff\u00e9rents. Si le client ouvre le devis sans signer, une notification en temps r\u00e9el permet \u00e0 l\u2019artisan d\u2019appeler au bon moment.",
    auto: "Taux de signature +40% en moyenne",
  },
  {
    num: "04",
    tag: "Services B2B",
    title: "S\u00e9quence de nurturing longue dur\u00e9e",
    text: "Un prospect qui dit \u201cpas maintenant\u201d n\u2019est pas perdu. Il entre automatiquement dans une s\u00e9quence de nurturing sur 90 jours : emails \u00e0 valeur ajout\u00e9e, \u00e9tudes de cas, articles utiles. Quand le timing change de son c\u00f4t\u00e9, il pense naturellement \u00e0 vous en premier.",
    auto: "30% des prospects nurtur\u00e9s deviennent clients",
  },
];

const comparisonColumns = [
  {
    header: "Prospection manuelle",
    sub: "Ce que vous faites aujourd\u2019hui",
    type: "bad" as const,
    items: [
      "Limit\u00e9e par votre temps disponible",
      "R\u00e9sultats irr\u00e9guliers selon votre \u00e9nergie",
      "Impossible \u00e0 scaler sans embaucher",
      "Donn\u00e9es dispers\u00e9es, relances oubli\u00e9es",
      "S\u2019arr\u00eate les week-ends et jours f\u00e9ri\u00e9s",
    ],
  },
  {
    header: "Logiciel CRM classique",
    sub: "Organise, mais ne g\u00e9n\u00e8re pas",
    type: "mid" as const,
    items: [
      "Organise vos contacts et vos relances",
      "Ne g\u00e9n\u00e8re pas de leads par lui-m\u00eame",
      "N\u00e9cessite une saisie manuelle permanente",
      "Pas de scoring automatique",
      "Outil passif \u2014 vous devez alimenter",
    ],
  },
  {
    header: "Lead Machine \u2014 IA",
    sub: "Ce que vous obtenez",
    type: "good" as const,
    highlight: true,
    items: [
      "G\u00e9n\u00e8re des leads 24h/24, 7j/7",
      "Score chaque prospect automatiquement",
      "Contacte et relance sans intervention",
      "Tout est centralis\u00e9 et tra\u00e7able",
      "S\u2019am\u00e9liore avec les donn\u00e9es au fil du temps",
    ],
  },
];

const iconMap = {
  bad: { icon: "\u2715", color: "text-red-400" },
  mid: { icon: "~", color: "text-orange-400" },
  good: { icon: "\u2713", color: "text-green-400" },
};

export default function IACestQuoiPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-[6vw] pt-28 pb-20 text-center">
        {/* Background effects */}
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
              Guide complet &middot; Sans jargon &middot; Pour les
              professionnels
            </span>
            <h1 className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] font-light leading-[1.08] tracking-tight">
              Automatisation IA :
              <br />
              <em className="text-gradient-gold italic">
                qu&apos;est-ce que
                <br />
                c&apos;est vraiment ?
              </em>
            </h1>
            <p className="mx-auto mt-5 max-w-[620px] text-base leading-relaxed text-text-dimmed">
              Vous entendez parler d&apos;intelligence artificielle et
              d&apos;automatisation partout, mais personne ne vous explique
              clairement ce que &ccedil;a fait concr&egrave;tement pour votre
              business. On corrige &ccedil;a ici.
            </p>
            <div className="mt-10">
              <Button href="/rdv" size="lg">
                Voir un exemple concret &rarr;
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── DEFINITION ── */}
      <section className="px-[6vw] py-16">
        <ScrollReveal>
          <div className="mx-auto max-w-[900px] rounded-lg border border-gold/20 bg-bg-card p-10 text-center">
            <p className="font-serif text-[clamp(1.6rem,3vw,2.5rem)] font-light italic leading-snug text-white/90">
              L&apos;automatisation par IA, c&apos;est faire faire par un{" "}
              <span className="not-italic text-gradient-gold">
                programme intelligent
              </span>{" "}
              ce que vous faisiez manuellement &mdash; mais{" "}
              <span className="not-italic text-gradient-gold">
                plus vite, plus pr&eacute;cis&eacute;ment
              </span>{" "}
              et{" "}
              <span className="not-italic text-gradient-gold">
                sans s&apos;arr&ecirc;ter.
              </span>
            </p>
            <p className="mx-auto mt-6 max-w-[700px] text-[0.92rem] leading-[1.85] text-text-dimmed">
              Concr&egrave;tement : au lieu que vous passiez 2 heures &agrave;
              chercher des prospects sur PAP, &agrave; envoyer des emails un par
              un et &agrave; vous souvenir de rappeler tel contact &mdash; un
              syst&egrave;me automatis&eacute; fait tout &ccedil;a en quelques
              minutes, 24h/24, pendant que vous vous concentrez sur ce qui
              g&eacute;n&egrave;re vraiment de la valeur : vos rendez-vous, vos
              n&eacute;gociations, vos clients.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ── 3 PILLARS ── */}
      <section className="bg-[#111111] px-[6vw] py-24">
        <ScrollReveal>
          <SectionHeader
            label="Les 3 piliers"
            title="Ce que fait concr&egrave;tement <em>un syst&egrave;me d&apos;automatisation IA</em>"
            subtitle="Pas de th&eacute;orie &mdash; ce que &ccedil;a fait vraiment dans votre quotidien commercial."
          />
        </ScrollReveal>
        <div className="mx-auto mt-14 max-w-[1100px] grid grid-cols-1 border border-border bg-border gap-px md:grid-cols-3">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.num} delay={i * 80}>
              <div className="bg-bg-card p-8 transition-colors hover:bg-gold/[0.04] h-full">
                <span className="mb-4 block text-3xl">{p.icon}</span>
                <div className="font-serif text-5xl font-light leading-none text-gold/[0.12] mb-2">
                  {p.num}
                </div>
                <h3 className="font-serif text-2xl font-light mb-3">
                  {p.title}
                </h3>
                <p className="text-sm leading-[1.8] text-text-dimmed">
                  {p.text}
                </p>
                <div className="mt-5 rounded border border-gold/15 bg-gold/[0.06] p-3">
                  <div className="text-[0.62rem] font-medium uppercase tracking-[0.15em] text-gold mb-1">
                    {p.exLabel}
                  </div>
                  <div className="text-[0.78rem] leading-relaxed text-white/70">
                    {p.exText}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── MYTH BUSTING ── */}
      <section className="px-[6vw] py-24">
        <ScrollReveal>
          <SectionHeader
            label="Id&eacute;es re&ccedil;ues"
            title="Ce que l&apos;IA <em>n&apos;est pas</em>"
            subtitle="On entend beaucoup de choses sur l&apos;IA. Voici la v&eacute;rit&eacute;."
          />
        </ScrollReveal>
        <div className="mx-auto mt-14 max-w-[1000px] grid grid-cols-1 border border-border bg-border gap-px md:grid-cols-2">
          {myths.map((m, i) => (
            <ScrollReveal key={i} delay={(i % 2) * 80}>
              <div className="bg-bg-card p-8 h-full">
                <div
                  className={`mb-2 flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.15em] ${
                    m.type === "myth" ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {m.type === "myth" ? "\u2715 Id\u00e9e re\u00e7ue" : "\u2713 La r\u00e9alit\u00e9"}
                </div>
                <h3 className="mb-2 text-base font-medium">{m.title}</h3>
                <p className="text-sm leading-[1.75] text-text-dimmed">
                  {m.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="bg-[#111111] px-[6vw] py-24">
        <ScrollReveal>
          <SectionHeader
            label="Applications concr&egrave;tes"
            title="Ce que &ccedil;a fait <em>dans la vraie vie</em>"
          />
        </ScrollReveal>
        <div className="mx-auto mt-14 max-w-[1100px] grid grid-cols-1 border border-border bg-border gap-px md:grid-cols-2">
          {useCases.map((c, i) => (
            <ScrollReveal key={c.num} delay={(i % 2) * 80}>
              <div className="bg-bg-card p-8 h-full grid grid-cols-[auto_1fr] gap-5 items-start">
                <div className="font-serif text-6xl font-light leading-none text-gold/[0.15] shrink-0">
                  {c.num}
                </div>
                <div>
                  <span className="mb-1 block text-[0.65rem] font-medium uppercase tracking-[0.18em] text-gold">
                    {c.tag}
                  </span>
                  <h3 className="font-serif text-xl font-light mb-2">
                    {c.title}
                  </h3>
                  <p className="text-[0.83rem] leading-[1.75] text-text-dimmed">
                    {c.text}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-green-400">
                    <span className="text-[0.7rem]">{"\u26A1"}</span>
                    {c.auto}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── COMPARISON MATRIX ── */}
      <section className="px-[6vw] py-24">
        <ScrollReveal>
          <SectionHeader
            label="Mise en perspective"
            title="IA, logiciel classique <em>ou ressource humaine ?</em>"
            subtitle="Pourquoi l&apos;automatisation IA change la donne par rapport aux alternatives."
          />
        </ScrollReveal>
        <div className="mx-auto mt-14 max-w-[1000px]">
          <ScrollReveal>
            <div className="grid grid-cols-1 border border-border bg-border gap-px md:grid-cols-3">
              {comparisonColumns.map((col) => (
                <div
                  key={col.header}
                  className={`bg-bg-card p-7 ${col.highlight ? "bg-gold/[0.04]" : ""}`}
                >
                  <h3
                    className={`font-serif text-xl font-normal mb-1 ${col.highlight ? "text-gold-light" : ""}`}
                  >
                    {col.header}
                  </h3>
                  <p className="mb-5 text-xs text-text-dimmed">{col.sub}</p>
                  <ul className="flex flex-col gap-2.5">
                    {col.items.map((item, idx) => (
                      <li
                        key={idx}
                        className={`flex gap-2 text-sm leading-snug ${
                          col.type === "bad"
                            ? "text-white/45"
                            : col.type === "mid"
                              ? "text-text-dimmed"
                              : ""
                        }`}
                      >
                        <span
                          className={`shrink-0 ${iconMap[col.type].color}`}
                        >
                          {iconMap[col.type].icon}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── GLOSSARY ── */}
      <section className="bg-[#111111] px-[6vw] py-24">
        <ScrollReveal>
          <SectionHeader
            label="Lexique"
            title="Les termes cl&eacute;s <em>expliqu&eacute;s simplement</em>"
          />
        </ScrollReveal>
        <div className="mx-auto mt-14 max-w-[900px]">
          <ScrollReveal>
            <Glossary />
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border bg-[radial-gradient(ellipse_60%_100%_at_50%_100%,rgba(201,168,76,0.08)_0%,transparent_70%)] px-[6vw] py-20 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light">
            La th&eacute;orie, c&apos;est bien.
            <br />
            Voir &ccedil;a{" "}
            <em className="text-gold-light italic">en action,</em> c&apos;est
            mieux.
          </h2>
          <p className="mx-auto mt-5 max-w-[500px] text-sm text-text-dimmed">
            30 minutes pour voir un syst&egrave;me Lead Machine tourner en live
            sur un cas concret de votre secteur. Sans jargon, sans engagement.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/rdv" size="lg">
              R&eacute;server ma d&eacute;mo gratuite &rarr;
            </Button>
            <Button href="/comment-ca-marche" variant="secondary" size="lg">
              Comment &ccedil;a marche ?
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
