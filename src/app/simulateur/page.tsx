import type { Metadata } from "next";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import Calculator from "./Calculator";

export const metadata: Metadata = {
  title: "Simulateur de Rentabilit\u00e9 | Lead Machine",
  description:
    "Calculez gratuitement en combien de jours votre syst\u00e8me Lead Machine est rentabilis\u00e9. Simulation instantan\u00e9e, sans inscription.",
};

export default function SimulateurPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-[6vw] pt-28 pb-16 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(201,168,76,0.07)_0%,transparent_70%)]" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[800px]">
          <ScrollReveal>
            <span className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-gold/30 px-4 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-gold">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold shadow-[0_0_8px_var(--gold)]" />
              Outil gratuit &middot; Calcul instantan&eacute; &middot; Sans
              inscription
            </span>
            <h1 className="font-serif text-[clamp(2.8rem,6vw,6rem)] font-light leading-[1.08] tracking-tight">
              Simulez la
              <br />
              <em className="text-gradient-gold italic">rentabilit&eacute;</em>
              <br />
              de votre IA
            </h1>
            <p className="mx-auto mt-5 max-w-[580px] text-base leading-relaxed text-text-dimmed">
              Renseignez vos chiffres actuels et d&eacute;couvrez en combien de
              jours et de leads un syst&egrave;me Lead Machine est
              rentabilis&eacute; &mdash; et ce qu&apos;il vous rapporte chaque
              mois.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SIMULATOR ── */}
      <section className="px-[6vw] pb-0">
        <Calculator />
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border bg-bg-primary px-[6vw] py-20 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light">
            Les chiffres vous parlent ?
            <br />
            <em className="text-gold-light italic">
              Passons &agrave; l&apos;action.
            </em>
          </h2>
          <p className="mx-auto mt-5 max-w-[500px] text-sm text-text-dimmed">
            Demandez votre appel d&eacute;couverte gratuit de 30 minutes pour
            valider ces estimations sur votre cas pr&eacute;cis et voir la
            solution en live.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/rdv" size="lg">
              R&eacute;server mon appel gratuit &rarr;
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Envoyer mes coordonn&eacute;es
            </Button>
          </div>
          <p className="mt-6 text-xs text-white/[0.22]">
            Simulation personnalis&eacute;e &middot; R&eacute;sultats
            r&eacute;els bas&eacute;s sur votre activit&eacute; &middot; Sans
            engagement
          </p>
        </ScrollReveal>
      </section>
    </>
  );
}
