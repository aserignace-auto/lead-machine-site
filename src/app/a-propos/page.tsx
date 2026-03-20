import ScrollReveal from '@/components/ScrollReveal';
import Button from '@/components/Button';
import Link from 'next/link';

/* ── Data ── */

const VALUES = [
  {
    icon: '\u2699',
    title: 'Resultats avant tout',
    text: 'On ne vous vend pas de la technologie. On vous vend des resultats mesurables. Si votre systeme ne genere pas plus de leads, on l\u2019optimise jusqu\u2019a ce que ce soit le cas.',
  },
  {
    icon: '\u2295',
    title: 'Transparence totale',
    text: 'Pas de magie noire, pas de jargon. On vous explique exactement ce que fait votre systeme, pourquoi, et comment mesurer son impact. Vous restez maitre de votre outil.',
  },
  {
    icon: '\u221E',
    title: 'Partenariat, pas transaction',
    text: 'Votre succes est notre succes. On ne signe pas un contrat et on disparait. On reste a vos cotes chaque mois pour ajuster, optimiser et faire grandir votre systeme avec vous.',
  },
  {
    icon: '\u25CE',
    title: 'Simplicite operationnelle',
    text: 'Un bon systeme IA doit simplifier votre vie, pas la compliquer. Si l\u2019outil vous prend plus de temps qu\u2019il ne vous en fait gagner, on a rate notre objectif.',
  },
];

const TEAM = [
  {
    initial: 'M',
    name: 'Maxime',
    role: 'Fondateur & Responsable Commercial',
    text: 'A la tete de MRC et de Lead Machine, Maxime pilote la strategie commerciale, les relations clients et le developpement des offres. Passionne par la performance sous toutes ses formes — sportive, commerciale, entrepreneuriale — il a construit Lead Machine pour rendre accessible a tous ce que les grandes entreprises font depuis des annees.',
  },
  {
    initial: 'B',
    name: 'Bilel',
    role: 'Responsable Technique & Partenaire',
    text: 'Bilel est le cerveau technique de Lead Machine. Il concoit, developpe et deploie chaque solution sur mesure dans un delai de 10 jours. Expert en automatisation, APIs et integrations IA, il garantit que chaque systeme livre est robuste, scalable et parfaitement adapte aux besoins specifiques de chaque client.',
  },
];

const ENGAGEMENTS = [
  {
    icon: '\u25CE',
    title: '10 jours de delai garanti',
    text: 'Votre solution est mise en place dans les 10 jours ouvres suivant la reception de vos informations techniques. C\u2019est notre engagement contractuel, pas une promesse marketing.',
  },
  {
    icon: '\u25C8',
    title: 'Reporting mensuel systematique',
    text: 'Le 1er de chaque mois, vous recevez un rapport detaillant les performances de votre systeme : leads generes, taux de conversion, actions declenchees. Aucune boite noire.',
  },
  {
    icon: '\u25C6',
    title: 'Sans engagement, sans piege',
    text: 'Nos abonnements sont resiliables a tout moment avec 30 jours de preavis. Pas de penalite de sortie, pas de contrat longue duree impose. Votre confiance se merite chaque mois.',
  },
];

export default function AProposPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-[6vw] pt-28 pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_70%_50%,rgba(201,168,76,0.07)_0%,transparent_70%)]" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,168,76,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.035) 1px, transparent 1px)',
            backgroundSize: '70px 70px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 30% 50%, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 30% 50%, black 20%, transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          {/* Left content */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-gold/30 px-4 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-gold">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold shadow-[0_0_8px_var(--gold)]" />
              MRC &middot; Lead Machine &middot; Fonde par Maxime
            </div>

            <h1 className="font-serif text-[clamp(2.5rem,5vw,5rem)] font-light leading-[1.1] tracking-tight">
              Nous croyons que votre
              <br />
              croissance ne devrait pas
              <br />
              dependre de votre{' '}
              <em className="text-gradient-gold italic">temps disponible.</em>
            </h1>

            <p className="mt-5 max-w-[540px] text-[0.95rem] leading-[1.8] text-text-dimmed">
              Lead Machine est une jeune entreprise specialisee dans l&apos;automatisation par IA pour les
              professionnels B2B. Notre mission : vous rendre le temps que vous perdez sur des taches
              repetitives — et l&apos;utiliser pour faire croitre votre activite.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/rdv" size="md">
                Rencontrer Maxime &rarr;
              </Button>
              <Button href="/immobilier" variant="secondary" size="md">
                Decouvrir nos solutions
              </Button>
            </div>
          </div>

          {/* Right - Profile card */}
          <div className="hidden w-[300px] flex-shrink-0 overflow-hidden rounded-[10px] border border-border bg-bg-card shadow-[0_30px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(201,168,76,0.06)] lg:block">
            <div className="flex h-60 items-center justify-center bg-gradient-to-br from-gold/15 to-gold/4 text-7xl tracking-tighter">
              M
            </div>
            <div className="p-6">
              <div className="font-serif text-3xl font-normal">Maxime</div>
              <div className="mt-1 text-[0.72rem] uppercase tracking-[0.14em] text-gold">
                Fondateur &amp; CEO — MRC
              </div>
              <div className="mt-4 flex flex-col gap-2">
                {[
                  { lbl: 'Entreprise', val: 'MRC — SASU' },
                  { lbl: 'Marque', val: 'Lead Machine' },
                  { lbl: 'Domaine', val: 'Automatisation IA B2B' },
                  { lbl: 'Localisation', val: 'France' },
                ].map((s) => (
                  <div
                    key={s.lbl}
                    className="flex justify-between border-b border-white/5 py-1 text-[0.78rem] last:border-b-0"
                  >
                    <span className="text-text-dimmed">{s.lbl}</span>
                    <span className="font-medium text-gold-light">{s.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="px-[6vw] py-20">
        <ScrollReveal>
          <div className="mb-12">
            <span className="mb-3 block text-[0.7rem] uppercase tracking-[0.22em] text-gold">
              Notre histoire
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.15]">
              Pourquoi Lead Machine
              <br />
              <em className="text-gold-light italic">existe</em>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-[1100px]">
          <ScrollReveal>
            <div className="rounded-lg border border-border bg-bg-card p-10">
              <div className="mb-6 font-serif text-3xl font-light">Le probleme qu&apos;on a voulu resoudre</div>
              <p className="mb-5 text-[0.88rem] leading-[1.9] text-text-dimmed">
                En travaillant avec des professionnels B2B de secteurs varies, nous avons observe le meme
                probleme partout :{' '}
                <strong className="font-medium text-text-primary">
                  les meilleurs d&apos;entre eux passaient la moitie de leur journee sur des taches que
                  n&apos;importe quel programme pourrait faire a leur place.
                </strong>
              </p>
              <p className="mb-5 text-[0.88rem] leading-[1.9] text-text-dimmed">
                Un agent immobilier qui passe 3 heures sur PAP chaque matin. Un coach qui relance ses prospects
                a la main dans une feuille Excel. Un artisan qui oublie de rappeler un client parce qu&apos;il
                etait sur un chantier.{' '}
                <strong className="font-medium text-text-primary">
                  Ce n&apos;est pas un probleme de motivation — c&apos;est un probleme de systeme.
                </strong>
              </p>
              <p className="text-[0.88rem] leading-[1.9] text-text-dimmed">
                Lead Machine est ne de cette conviction : si vous etes bon dans votre metier, vous meritez un
                systeme qui travaille pour vous en dehors de vos heures — et qui vous ramene uniquement les
                opportunites qui valent votre attention.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── VISION QUOTE ── */}
      <section className="bg-[#111111] px-[6vw] py-20">
        <ScrollReveal>
          <div className="mx-auto max-w-[900px] rounded-lg border border-gold/20 bg-bg-card p-12 text-center lg:p-16">
            <p className="font-serif text-[clamp(1.5rem,3vw,2.3rem)] font-light italic leading-[1.4] text-white/90">
              &laquo; Je veux que dans 5 ans, chaque professionnel B2B en France ait acces a un systeme IA qui
              travaille pour lui la nuit — et lui ramene des opportunites qualifiees le matin.{' '}
              <em className="text-gradient-gold not-italic">C&apos;est la mission de Lead Machine.</em> &raquo;
            </p>
            <div className="mt-6 text-[0.8rem] tracking-wide text-text-dimmed">
              — <strong className="font-medium text-gold">Maxime</strong>, Fondateur de Lead Machine &amp; MRC
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── VALUES ── */}
      <section className="px-[6vw] py-20">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <span className="mb-3 block text-[0.7rem] uppercase tracking-[0.22em] text-gold">
              Ce en quoi nous croyons
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.15]">
              Nos <em className="text-gold-light italic">valeurs</em>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-[1100px] grid-cols-1 border border-border bg-border sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '1px' }}>
          {VALUES.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 80}>
              <div className="bg-bg-card p-8 text-center transition-colors hover:bg-gold/4">
                <span className="mb-4 block text-3xl">{v.icon}</span>
                <div className="font-serif text-xl font-light">{v.title}</div>
                <p className="mt-3 text-[0.82rem] leading-[1.75] text-text-dimmed">{v.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="bg-[#111111] px-[6vw] py-20">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <span className="mb-3 block text-[0.7rem] uppercase tracking-[0.22em] text-gold">L&apos;equipe</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.15]">
              Les personnes derriere
              <br />
              <em className="text-gold-light italic">Lead Machine</em>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mx-auto grid max-w-[900px] grid-cols-1 border border-border bg-border md:grid-cols-2" style={{ gap: '1px' }}>
            {TEAM.map((member) => (
              <div key={member.name} className="grid grid-cols-[70px_1fr] items-start gap-5 bg-bg-card p-8">
                <div className="flex h-[70px] w-[70px] flex-shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/7 font-serif text-2xl">
                  {member.initial}
                </div>
                <div>
                  <div className="font-serif text-xl font-light">{member.name}</div>
                  <div className="mt-0.5 text-[0.68rem] uppercase tracking-[0.15em] text-gold">
                    {member.role}
                  </div>
                  <p className="mt-2.5 text-[0.82rem] leading-[1.75] text-text-dimmed">{member.text}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── CLIENT ENGAGEMENTS ── */}
      <section className="px-[6vw] py-20">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <span className="mb-3 block text-[0.7rem] uppercase tracking-[0.22em] text-gold">
              Nos engagements clients
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.15]">
              Ce que vous pouvez
              <br />
              <em className="text-gold-light italic">attendre de nous</em>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-[1100px] grid-cols-1 border border-border bg-border md:grid-cols-3" style={{ gap: '1px' }}>
          {ENGAGEMENTS.map((eng, i) => (
            <ScrollReveal key={eng.title} delay={i * 80}>
              <div className="bg-bg-card p-8">
                <span className="mb-4 block text-3xl">{eng.icon}</span>
                <div className="font-serif text-2xl font-light">{eng.title}</div>
                <p className="mt-3 text-[0.83rem] leading-[1.8] text-text-dimmed">{eng.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border bg-[radial-gradient(ellipse_60%_100%_at_50%_100%,rgba(201,168,76,0.08)_0%,transparent_70%)] px-[6vw] py-20 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light">
            Vous partagez
            <br />
            cette <em className="text-gold-light italic">vision ?</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[500px] text-[0.9rem] text-text-dimmed">
            Rencontrez Maxime en 30 minutes pour voir si Lead Machine peut accelerer votre croissance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/rdv" size="md">
              Reserver un appel avec Maxime &rarr;
            </Button>
            <Button href="/immobilier" variant="secondary" size="md">
              Decouvrir nos solutions
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
