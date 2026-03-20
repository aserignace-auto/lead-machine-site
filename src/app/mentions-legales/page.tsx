import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Mentions legales — Lead Machine",
  description: "Mentions legales du site Lead Machine, editeur MRC SASU.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="px-[6vw] pt-32 pb-20">
      <div className="mx-auto max-w-[800px]">
        <ScrollReveal>
          <h1 className="mb-12 font-serif text-[clamp(2.5rem,5vw,4rem)] font-light leading-tight">
            Mentions <em className="text-gradient-gold not-italic">legales</em>
          </h1>
        </ScrollReveal>

        <div className="flex flex-col gap-10 text-[0.9rem] leading-[1.85] text-text-dimmed">
          <ScrollReveal>
            <div>
              <h2 className="mb-3 font-serif text-2xl font-normal text-text-primary">
                Editeur du site
              </h2>
              <p>
                <strong className="text-text-primary">MRC SASU — Lead Machine</strong>
                <br />
                Email : contact@leads-machine.com
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h2 className="mb-3 font-serif text-2xl font-normal text-text-primary">
                Hebergeur
              </h2>
              <p>
                <strong className="text-text-primary">Vercel Inc.</strong>
                <br />
                440 N Barranca Avenue #4133, Covina, CA 91723, USA
                <br />
                Site : vercel.com
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h2 className="mb-3 font-serif text-2xl font-normal text-text-primary">
                Protection des donnees personnelles (RGPD)
              </h2>
              <p>
                Les donnees personnelles collectees via les formulaires de contact et de prise de
                rendez-vous sont traitees exclusivement dans le cadre de la relation commerciale avec
                Lead Machine. Elles ne sont ni vendues ni transmises a des tiers sans consentement
                explicite.
              </p>
              <p className="mt-3">
                Conformement au Reglement General sur la Protection des Donnees (RGPD), vous disposez
                d&apos;un droit d&apos;acces, de rectification et de suppression de vos donnees personnelles. Pour
                exercer ces droits, contactez-nous a : contact@leads-machine.com.
              </p>
              <p className="mt-3">
                Vos donnees sont supprimees sur simple demande par email.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h2 className="mb-3 font-serif text-2xl font-normal text-text-primary">
                Cookies
              </h2>
              <p>
                Ce site utilise uniquement des cookies techniques necessaires a son bon fonctionnement.
                Aucun cookie publicitaire ou de tracking tiers n&apos;est utilise.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h2 className="mb-3 font-serif text-2xl font-normal text-text-primary">
                Propriete intellectuelle
              </h2>
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, logos, maquettes) est la propriete
                exclusive de MRC SASU. Toute reproduction, meme partielle, est interdite sans
                autorisation ecrite prealable.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
