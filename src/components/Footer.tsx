import Link from "next/link";

const footerSections = [
  {
    title: "Solutions",
    links: [
      { href: "/immobilier", label: "Immobilier" },
      { href: "/#secteurs", label: "Autres secteurs" },
      { href: "/#offres", label: "Nos offres" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { href: "/a-propos", label: "\u00c0 propos" },
      { href: "/recrutement", label: "Recrutement" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "/rdv", label: "Prendre RDV" },
      { href: "/#contact", label: "Formulaire de contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/">
              <span className="font-serif text-2xl font-bold tracking-wider text-gradient-gold">
                LEAD MACHINE
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-dimmed">
              G&eacute;n&eacute;rez des leads qualifi&eacute;s en automatique
              gr&acirc;ce &agrave; l&apos;intelligence artificielle. Solution
              cl&eacute; en main pour les professionnels B2B.
            </p>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">
                {section.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-dimmed transition-colors duration-200 hover:text-gold-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-text-muted">
            &copy; 2026 MRC SASU &mdash; Lead Machine. Tous droits
            r&eacute;serv&eacute;s.
          </p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="text-xs text-text-muted transition-colors duration-200 hover:text-text-dimmed"
            >
              Mentions l&eacute;gales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
