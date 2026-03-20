import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/SectionHeader';

/* ── Data ── */

const AGENDA_ITEMS = [
  {
    time: '0\u20138',
    title: 'Diagnostic de votre situation',
    text: 'Votre activite, votre processus actuel, le nombre de leads que vous generez, comment vous prospectez aujourd\u2019hui et ce qui vous prend le plus de temps.',
  },
  {
    time: '8\u201318',
    title: 'Identification des opportunites',
    text: 'Analyse des axes d\u2019automatisation specifiques a votre secteur. Estimation du potentiel de leads, du gain de temps et de l\u2019impact sur votre chiffre d\u2019affaires.',
  },
  {
    time: '18\u201325',
    title: 'Presentation de la solution',
    text: 'Demonstration concrete des fonctionnalites adaptees a votre profil. Pipeline, sequences, scoring IA — vous voyez exactement ce que votre systeme ferait.',
  },
  {
    time: '25\u201330',
    title: 'Questions & prochaines etapes',
    text: 'Reponses a vos questions sur les prix, les delais, les integrations. Si ca vous convient, nous definissons ensemble les prochaines etapes. Aucune obligation.',
  },
];

const GUARANTEES = [
  {
    icon: '\u25CE',
    title: 'Zero engagement',
    text: 'Cet appel n\u2019engage a rien. Aucune carte bancaire, aucun contrat. Vous repartez avec des informations utiles, que vous travailliez avec nous ou non.',
  },
  {
    icon: '\u25CE',
    title: '30 minutes chrono',
    text: 'Nous respectons votre temps. L\u2019appel dure exactement 30 minutes. Pas de debordement, pas de relance excessive apres l\u2019appel si vous ne donnez pas suite.',
  },
  {
    icon: '\u2299',
    title: 'Valeur immediate',
    text: 'Meme si vous ne devenez pas client, vous repartez avec une analyse concrete de vos axes d\u2019amelioration commerciale et des pistes actionnables.',
  },
];

const HERO_BENEFITS = [
  'Diagnostic de votre processus commercial actuel',
  'Estimation du potentiel d\u2019automatisation pour votre secteur',
  'Presentation de la solution adaptee a vos besoins',
  'Questions / reponses sans tabou sur les resultats et les prix',
];

/* ── Main Page ── */
export default function RdvPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-bg-primary px-[6vw] pt-28 pb-16">
        {/* Decorative backgrounds */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,rgba(201,168,76,0.07)_0%,transparent_70%)]" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,168,76,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.035) 1px, transparent 1px)',
            backgroundSize: '65px 65px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-[640px] text-center">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-gold/30 px-4 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_var(--gold)]" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
              Appel decouverte &middot; 30 minutes &middot; Gratuit
            </div>

            <h1 className="font-serif text-[clamp(2.5rem,5vw,5rem)] font-light leading-[1.1] tracking-tight">
              Planifiez votre
              <br />
              <em className="text-gradient-gold italic">appel decouverte</em>
              <br />
              gratuit
            </h1>

            <p className="mt-5 text-[0.95rem] leading-[1.8] text-text-dimmed">
              30 minutes pour analyser votre situation, identifier vos axes d&apos;automatisation et vous
              presenter concretement ce qu&apos;un systeme Lead Machine peut generer pour votre activite.
              Zero engagement, zero pression commerciale.
            </p>

            <div className="mt-8 flex flex-col gap-3 text-left mx-auto max-w-[440px]">
              {HERO_BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 text-[0.85rem] text-text-dimmed">
                  <span className="text-green-400">&#10003;</span>
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Calendly Embed */}
          <div className="mt-16">
            <ScrollReveal>
              <div className="mx-auto max-w-[900px] overflow-hidden rounded-xl border border-border bg-bg-card shadow-[0_30px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(201,168,76,0.06)]">
                <div className="flex items-center gap-2.5 border-b border-border bg-[#0D0D0D] px-5 py-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-3 text-[0.7rem] text-white/30">Reservez votre creneau</span>
                </div>
                <iframe
                  src="https://calendly.com/aserignace/nouvelle-reunion"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  className="rounded-b-lg"
                  title="Calendly - Reserver un appel decouverte"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── AGENDA ── */}
      <section className="bg-[#111111] px-[6vw] py-20">
        <div className="mx-auto max-w-[1100px]">
          <ScrollReveal>
            <div className="mb-12">
              <span className="mb-3 block text-[0.7rem] uppercase tracking-[0.22em] text-gold">
                Programme de l&apos;appel
              </span>
              <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.15]">
                Ce que nous couvrons
                <br />
                <em className="text-gold-light italic">en 30 minutes</em>
              </h2>
              <p className="mt-3 max-w-[520px] text-[0.9rem] text-text-dimmed">
                Chaque minute est utilisee pour vous apporter une vraie valeur — pas un pitch commercial.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 border border-border bg-border sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '1px' }}>
            {AGENDA_ITEMS.map((item, i) => (
              <ScrollReveal key={item.time} delay={i * 80}>
                <div className="bg-bg-card p-7">
                  <div className="font-serif text-3xl font-light leading-none text-gold-light">{item.time}</div>
                  <div className="mt-2 text-[0.68rem] uppercase tracking-[0.14em] text-white/35">Minutes</div>
                  <div className="mt-3 text-[0.95rem] font-medium text-text-primary">{item.title}</div>
                  <p className="mt-2 text-[0.8rem] leading-[1.7] text-text-dimmed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEES ── */}
      <section className="px-[6vw] py-20">
        <ScrollReveal>
          <div className="mx-auto max-w-[900px] text-center">
            <span className="mb-3 block text-[0.7rem] uppercase tracking-[0.22em] text-gold">
              Nos engagements
            </span>
            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.15]">
              Un appel <em className="text-gold-light italic">sans prise de tete</em>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-[900px] grid-cols-1 border border-border bg-border md:grid-cols-3" style={{ gap: '1px' }}>
          {GUARANTEES.map((g, i) => (
            <ScrollReveal key={g.title} delay={i * 80}>
              <div className="bg-bg-card p-8">
                <div className="mb-4 text-2xl">{g.icon}</div>
                <div className="text-[0.95rem] font-medium text-text-primary">{g.title}</div>
                <p className="mt-2 text-[0.8rem] leading-[1.7] text-text-dimmed">{g.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
