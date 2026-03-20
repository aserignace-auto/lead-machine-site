'use client';

import { useState, useCallback, useMemo, FormEvent } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

/* ── Data ── */
const STATS = [
  { big: '100%', desc: 'télétravail — travaillez depuis où vous voulez' },
  { big: '0\u20AC', desc: 'de frais — outils, formations et supports fournis' },
  { big: '10j', desc: 'pour être autonome après la première vente' },
  { big: '5/10', desc: 'paiement garanti entre le 5 et le 10 du mois' },
];

const SETTER_MISSIONS = [
  'Prospecter par téléphone sur des listes pré-qualifiées par notre IA',
  'Identifier les décideurs et qualifier le besoin (budget, timing, autorité)',
  'Traiter les objections de premier niveau et maintenir l\u2019intérêt',
  'Planifier les RDV découverte et les transmettre au Closer',
  'Renseigner le CRM après chaque appel (obligatoire)',
  'Reporter chaque vendredi : appels, RDV posés, taux de qualification',
];

const SETTER_PROFILE = [
  'Tu adores téléphoner et tu ne te laisses pas décourager par les refus',
  'Tu sais écouter, reformuler et créer un lien rapidement',
  'Tu es organisé, rigoureux dans le suivi CRM',
  'Expérience en prospection téléphonique appréciée (non obligatoire)',
  'Statut indépendant (auto-entrepreneur ou équivalent)',
];

const CLOSER_MISSIONS = [
  'Préparer chaque RDV en lisant les notes CRM du Setter',
  'Conduire le RDV discovery (30 min) : diagnostic, douleurs, enjeux',
  'Créer et présenter la proposition commerciale sur mesure',
  'Présenter les 3 forfaits et guider vers le meilleur choix',
  'Traiter les objections prix, timing et confiance',
  'Suivre les devis et relancer jusqu\u2019à la signature',
];

const CLOSER_PROFILE = [
  'Tu as déjà de l\u2019expérience en closing ou en vente B2B (obligatoire)',
  'Tu maîtrises les techniques de vente (SONCAS, SPIN, etc.)',
  'Tu es à l\u2019aise en visio et tu sais créer de la confiance rapidement',
  'Tu es orienté résultats, rigoureux dans le suivi des devis',
  'Statut indépendant (auto-entrepreneur ou équivalent)',
];

const SETTER_CHIPS = [
  { label: '100% Remote', green: false },
  { label: 'Commission uniquement', green: false },
  { label: 'Outils fournis', green: false },
  { label: 'Formation assurée', green: false },
  { label: 'Paiement 5-10 du mois', green: true },
];

const CLOSER_CHIPS = [
  { label: '100% Remote', green: false },
  { label: 'RDV fournis par les Setters', green: false },
  { label: 'Devis générés automatiquement', green: false },
  { label: 'Primes sur récurrence', green: true },
  { label: 'Paiement 5-10 du mois', green: true },
];

const SETTER_COMMISSION = [
  { label: 'Commission sur chaque vente issue de tes RDV', val: '20%' },
  { label: 'Base de calcul', val: 'CA HT client' },
  { label: 'Déclenchement', val: "À l'encaissement" },
  { label: 'Versement', val: '5 au 10 / mois' },
];

const CLOSER_COMMISSION = [
  { label: 'Commission sur chaque vente conclue', val: '30%' },
  { label: 'Prime forfait récurrent intermédiaire', val: '+ 50 \u20AC HT' },
  { label: 'Prime forfait récurrent premium', val: '+ 100 \u20AC HT' },
  { label: 'Base de calcul', val: 'CA HT client' },
  { label: 'Versement', val: '5 au 10 / mois' },
];

const SETTER_EXAMPLE = {
  scenario: 'Scénario réaliste — 5 RDV qualifiés / semaine',
  rows: [
    { label: 'RDV posés / mois', val: '~20' },
    { label: 'Taux de closing closers (30%)', val: '~2 ventes/mois' },
    { label: 'Panier moyen client HT', val: '2 500 \u20AC' },
    { label: 'Commission 20% sur 2 ventes', val: '1 000 \u20AC' },
  ],
  total: { label: 'Commission mensuelle estimée', val: '~1 000 \u20AC' },
};

const CLOSER_EXAMPLE = {
  scenario: 'Scénario réaliste — 3 RDV / semaine, 30% close rate',
  rows: [
    { label: 'RDV reçus / mois', val: '~13' },
    { label: 'Ventes conclues (30% close rate)', val: '~4 ventes' },
    { label: 'Panier moyen client HT', val: '2 500 \u20AC' },
    { label: 'Commission 30% sur 4 ventes', val: '3 000 \u20AC' },
    { label: 'Primes récurrence (moy. 75 \u20AC \u00D7 4)', val: '+ 300 \u20AC' },
  ],
  total: { label: 'Commission mensuelle estimée', val: '~3 300 \u20AC' },
};

const STEPS = [
  {
    num: '01',
    title: 'Candidature & entretien',
    text: 'Tu remplis le formulaire ci-dessous. Nous examinons ta candidature et t\u2019invitons à un entretien de 20 minutes pour valider ta motivation, ta situation et ton profil.',
  },
  {
    num: '02',
    title: 'Onboarding & formation',
    text: "Tu reçois le kit complet : scripts d'appel, réponses aux objections, guide des offres, accès aux outils de présentation. Une visio de briefing de 45 minutes est incluse.",
  },
  {
    num: '03',
    title: '1ère vente & accès CRM',
    text: 'Tu réalises ta première vente en autonomie. Dès qu\u2019elle est encaissée, tu débloques l\u2019accès complet au CRM, aux listes de leads qualifiés et au flux de RDV (pour les Closers).',
  },
];

const PERKS = [
  'Entretien de 20 min pour se connaître',
  'Kit d\u2019onboarding complet fourni dès validation',
  'Pas de quota imposé — votre rythme, vos résultats',
  'Paiement ponctuel garanti entre le 5 et le 10',
  'Évolution possible vers Manager',
];

/* ── Job Panel Component ── */
function JobPanel({
  role,
  roleLabel,
  subtitle,
  description,
  missions,
  profile,
  chips,
  commissionTitle,
  commissionRows,
  example,
  accessNote,
  footerNote,
}: {
  role: string;
  roleLabel: string;
  subtitle: string;
  description: string;
  missions: string[];
  profile: string[];
  chips: { label: string; green: boolean }[];
  commissionTitle: string;
  commissionRows: { label: string; val: string }[];
  example: { scenario: string; rows: { label: string; val: string }[]; total: { label: string; val: string } };
  accessNote: string;
  footerNote: string;
}) {
  return (
    <section className={`px-5 py-20 md:px-[6vw] ${role === 'setter' ? 'bg-[#181818]' : 'bg-bg-primary'}`}>
      <ScrollReveal>
        <div className="mb-12">
          <span className="mb-3 block text-xs uppercase tracking-[0.22em] text-white/75">
            Fiche de poste — {role === 'setter' ? 'Setter' : 'Closer'}
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.15]">
            {role === 'setter' ? 'Le Setter :' : 'Le Closer :'}
            <br />
            <em className="text-gold-light italic">{subtitle}</em>
          </h2>
          <p className="mt-3 max-w-[560px] text-[0.9rem] text-text-dimmed">{description}</p>
        </div>
      </ScrollReveal>

      <div className="mx-auto grid max-w-[1100px] grid-cols-1 border border-border bg-border lg:grid-cols-2" style={{ gap: 0 }}>
        {/* Left - Role details */}
        <div className="border-b border-border bg-bg-card p-6 lg:border-b-0 lg:border-r lg:p-10">
          <span className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/75">{roleLabel}</span>
          <div className="font-serif text-3xl font-light md:text-4xl">Ton role au quotidien</div>
          <p className="mt-4 text-base leading-[1.8] text-text-dimmed">{description}</p>

          <span className="mb-3 mt-6 block text-xs uppercase tracking-[0.16em] text-white/75">
            Missions principales
          </span>
          <ul className="flex flex-col gap-2">
            {missions.map((m) => (
              <li key={m} className="flex gap-2.5 text-base text-white/78">
                <span className="flex-shrink-0 text-gold">&mdash;</span>
                {m}
              </li>
            ))}
          </ul>

          <span className="mb-3 mt-6 block text-xs uppercase tracking-[0.16em] text-white/75">
            Profil recherche
          </span>
          <ul className="flex flex-col gap-2">
            {profile.map((p) => (
              <li key={p} className="flex gap-2.5 text-base text-white/78">
                <span className="flex-shrink-0 text-gold">&mdash;</span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span
                key={c.label}
                className={`rounded-full border px-3 py-1 text-xs tracking-wide ${
                  c.green
                    ? 'border-green-400/30 text-green-300'
                    : 'border-gold/25 text-gold-lighter'
                }`}
              >
                {c.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right - Commission & examples */}
        <div className="bg-[#0D0D0D] p-6 lg:p-10">
          {/* Commission box */}
          <div className="mb-6 rounded-md border border-gold/20 bg-gold/6 p-4 md:p-5">
            <div className="mb-4 text-xs uppercase tracking-[0.16em] text-white/75">{commissionTitle}</div>
            {commissionRows.map((r) => (
              <div
                key={r.label}
                className="flex items-baseline justify-between border-b border-gold/10 py-1.5 text-base last:border-b-0"
              >
                <span className="text-text-dimmed">{r.label}</span>
                <span className="font-serif text-xl text-gold-light">{r.val}</span>
              </div>
            ))}
          </div>

          {/* Example */}
          <span className="mb-3 block text-xs uppercase tracking-[0.16em] text-white/75">
            Exemple de revenus
          </span>
          <div className="mb-5 rounded-md border border-white/6 bg-white/3 p-4 md:p-5">
            <div className="mb-3 text-xs uppercase tracking-[0.12em] text-white/70">
              {example.scenario}
            </div>
            {example.rows.map((r) => (
              <div key={r.label} className="flex items-baseline justify-between border-b border-gold/10 py-1.5 text-base">
                <span className="text-text-dimmed">{r.label}</span>
                <span className="text-base font-medium text-text-primary">{r.val}</span>
              </div>
            ))}
            <div className="flex items-baseline justify-between pt-1.5 text-base">
              <span className="text-text-primary">{example.total.label}</span>
              <span className="font-serif text-3xl text-green-400">{example.total.val}</span>
            </div>
          </div>

          {/* Access note */}
          <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-white/75">
            Condition d&apos;acces au CRM
          </span>
          <p className="text-base leading-[1.75] text-text-dimmed">{accessNote}</p>

          <div className="mt-5 rounded border border-gold/20 bg-gold/6 p-4 text-base text-gold-lighter">
            <span className="mr-1">{'\u2726'}</span> {footerNote}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Earnings Simulator ── */
function EarningsSimulator() {
  const [role, setRole] = useState<'setter' | 'closer'>('setter');
  const [rdv, setRdv] = useState(5);
  const [closeRate, setCloseRate] = useState(30);
  const [panier, setPanier] = useState(2500);
  const [forfait, setForfait] = useState(50);

  const results = useMemo(() => {
    const rdvMois = Math.round(rdv * 4.3);
    const ventes = Math.round(rdvMois * (closeRate / 100));
    const tauxComm = role === 'setter' ? 0.2 : 0.3;
    const comm = Math.round(ventes * panier * tauxComm);
    const primesTotal = role === 'closer' ? ventes * forfait : 0;
    const total = comm + primesTotal;
    return { rdvMois, ventes, comm, primesTotal, total, tauxComm };
  }, [role, rdv, closeRate, panier, forfait]);

  return (
    <div className="mx-auto max-w-[900px] grid grid-cols-1 border border-border bg-border lg:grid-cols-2" style={{ gap: 0 }}>
      <div className="border-b border-border bg-bg-card p-6 lg:border-b-0 lg:border-r lg:p-8">
        <div className="mb-6 font-serif text-2xl font-light">Votre profil commercial</div>

        <div className="mb-5">
          <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-text-dimmed">Mon rôle</span>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as 'setter' | 'closer')}
            className="w-full cursor-pointer appearance-none rounded-sm border border-white/10 bg-white/4 px-4 py-3 text-[0.88rem] text-text-primary outline-none transition-colors focus:border-gold/40"
          >
            <option value="setter">Setter (20% du CA HT)</option>
            <option value="closer">Closer (30% du CA HT + primes)</option>
          </select>
        </div>

        <div className="mb-5">
          <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-text-dimmed">
            RDV qualifiés posés ou reçus / semaine : <span className="text-gold-light">{rdv}</span>
          </span>
          <input
            type="range"
            min={1}
            max={20}
            value={rdv}
            onChange={(e) => setRdv(Number(e.target.value))}
            className="w-full accent-gold"
          />
        </div>

        <div className="mb-5">
          <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-text-dimmed">
            Taux de closing des ventes : <span className="text-gold-light">{closeRate}%</span>
          </span>
          <input
            type="range"
            min={10}
            max={60}
            value={closeRate}
            onChange={(e) => setCloseRate(Number(e.target.value))}
            className="w-full accent-gold"
          />
        </div>

        <div className="mb-5">
          <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-text-dimmed">
            Panier moyen client HT : <span className="text-gold-light">{panier} \u20AC</span>
          </span>
          <input
            type="range"
            min={500}
            max={5000}
            step={100}
            value={panier}
            onChange={(e) => setPanier(Number(e.target.value))}
            className="w-full accent-gold"
          />
        </div>

        {role === 'closer' && (
          <div className="mb-5">
            <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-text-dimmed">
              Forfait récurrence moyen vendu
            </span>
            <select
              value={forfait}
              onChange={(e) => setForfait(Number(e.target.value))}
              className="w-full cursor-pointer appearance-none rounded-sm border border-white/10 bg-white/4 px-4 py-3 text-[0.88rem] text-text-primary outline-none transition-colors focus:border-gold/40"
            >
              <option value={0}>Entrée de gamme (prime 0 \u20AC)</option>
              <option value={50}>Intermédiaire (prime 50 \u20AC HT)</option>
              <option value={100}>Premium (prime 100 \u20AC HT)</option>
            </select>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center gap-4 bg-[#0D0D0D] p-6 lg:p-8">
        <div className="mb-2 text-xs uppercase tracking-[0.16em] text-white/75">
          Projection mensuelle — {role === 'setter' ? 'Setter (20%)' : 'Closer (30% + primes)'}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-md border border-gold/15 bg-gold/6 p-4">
            <div className="text-xs uppercase tracking-[0.14em] text-white/75">RDV / mois</div>
            <div className="font-serif text-3xl font-light text-gold-light">{results.rdvMois}</div>
            <div className="mt-1 text-xs text-white/70">{rdv}/sem</div>
          </div>
          <div className="rounded-md border border-gold/15 bg-gold/6 p-4">
            <div className="text-xs uppercase tracking-[0.14em] text-white/75">Ventes / mois</div>
            <div className="font-serif text-3xl font-light text-gold-light">{results.ventes}</div>
            <div className="mt-1 text-xs text-white/70">{closeRate}% close rate</div>
          </div>
        </div>

        <div className="rounded-md border border-gold/15 bg-gold/6 p-4">
          <div className="text-xs uppercase tracking-[0.14em] text-white/75">Commission {results.tauxComm * 100}%</div>
          <div className="font-serif text-4xl font-light text-green-400">
            {results.comm.toLocaleString('fr-FR')} \u20AC
          </div>
          <div className="mt-1 text-xs text-white/75">
            {results.ventes} ventes &times; {panier.toLocaleString('fr-FR')} \u20AC &times; {results.tauxComm * 100}%
          </div>
        </div>

        {role === 'closer' && forfait > 0 && (
          <div className="rounded-md border border-gold/15 bg-gold/6 p-4">
            <div className="text-xs uppercase tracking-[0.14em] text-white/75">Primes récurrence</div>
            <div className="font-serif text-3xl font-light text-gold-light">
              + {results.primesTotal.toLocaleString('fr-FR')} \u20AC
            </div>
            <div className="mt-1 text-xs text-white/75">
              {results.ventes} ventes &times; {forfait} \u20AC/vente
            </div>
          </div>
        )}

        <div className="rounded-md border border-green-400/20 bg-green-400/6 p-5">
          <div className="text-xs uppercase tracking-[0.14em] text-white/75">Total mensuel estime</div>
          <div className="font-serif text-5xl font-light text-green-400">
            {results.total.toLocaleString('fr-FR')} \u20AC
          </div>
          <div className="mt-2 text-sm text-white/75">
            soit ~{Math.round(results.total * 12).toLocaleString('fr-FR')} \u20AC / an
          </div>
          <p className="mt-3 border-t border-white/6 pt-3 text-xs leading-relaxed text-white/70">
            Estimation indicative basee sur les parametres saisis. Panier moyen reel : 2 500\u20AC HT.
            Les resultats dependent de votre implication et du marche.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Main Page ── */
export default function RecrutementPage() {
  const [activeRole, setActiveRole] = useState<'setter' | 'closer'>('setter');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleTab = useCallback((role: 'setter' | 'closer') => {
    setActiveRole(role);
  }, []);

  const [formSending, setFormSending] = useState(false);

  const handleApply = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSending(true);
    const fd = new FormData(e.currentTarget);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "recrutement",
          prenom: fd.get("prenom"),
          nom: fd.get("nom"),
          email: fd.get("email"),
          telephone: fd.get("telephone"),
          poste: fd.get("poste"),
          experience: fd.get("experience"),
          motivation: fd.get("motivation"),
        }),
      });
    } catch {}
    setFormSubmitted(true);
    setFormSending(false);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-5 pt-28 pb-16 text-center md:px-[6vw]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(201,168,76,0.07)_0%,transparent_70%)]" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)',
            backgroundSize: '70px 70px',
            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 80%)',
          }}
        />
        {/* Floating orbs */}
        <div className="animate-[float_14s_ease-in-out_infinite] pointer-events-none absolute -top-20 -right-20 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.1)_0%,transparent_70%)] blur-[90px]" />
        <div className="animate-[float_18s_ease-in-out_infinite_reverse] pointer-events-none absolute -left-15 bottom-10 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_70%)] blur-[90px]" />

        <div className="relative z-10 max-w-[820px]">
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-gold/30 px-5 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold shadow-[0_0_8px_var(--gold)]" />
            Recrutement &middot; Commission uniquement &middot; 100% remote
          </div>

          <h1 className="font-serif text-[clamp(2rem,6vw,6rem)] font-light leading-[1.08] tracking-tight">
            Rejoignez l&apos;équipe
            <br />
            <em className="text-gradient-gold italic">Lead Machine</em>
          </h1>

          <p className="mx-auto mt-6 max-w-[600px] text-base font-light text-text-dimmed md:text-[1.05rem]">
            Nous recrutons des commerciaux ambitieux qui veulent gagner à la hauteur de leurs résultats. Pas
            de salaire fixe, pas de plafond. Vos revenus dépendent uniquement de vous.
          </p>

          {/* Role Toggle */}
          <div className="mx-auto mt-10 flex w-full max-w-[640px] flex-col overflow-hidden rounded border border-border bg-border sm:flex-row" style={{ gap: '1px' }}>
            <button
              onClick={() => handleTab('setter')}
              className={`flex-1 min-h-[48px] py-4 text-base font-medium tracking-wide transition-colors ${
                activeRole === 'setter'
                  ? 'bg-gold/12 text-gold-light'
                  : 'bg-bg-card text-text-dimmed hover:bg-white/4 hover:text-text-primary'
              }`}
            >
              Je cherche a faire du Setting
            </button>
            <button
              onClick={() => handleTab('closer')}
              className={`flex-1 min-h-[48px] py-4 text-base font-medium tracking-wide transition-colors ${
                activeRole === 'closer'
                  ? 'bg-gold/12 text-gold-light'
                  : 'bg-bg-card text-text-dimmed hover:bg-white/4 hover:text-text-primary'
              }`}
            >
              Je cherche a faire du Closing
            </button>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="grid grid-cols-2 border-y border-border bg-gold/2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <ScrollReveal key={s.big} delay={i * 80}>
            <div className="border-r border-border p-4 text-center last:border-r-0 md:p-6 lg:p-8">
              <div className="text-gradient-gold font-serif text-[clamp(1.8rem,4vw,3rem)] font-light leading-none">
                {s.big}
              </div>
              <div className="mt-1.5 text-xs text-text-dimmed md:text-sm">{s.desc}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* ── JOB PANELS ── */}
      {activeRole === 'setter' && (
        <JobPanel
          role="setter"
          roleLabel="Setter — Prise de RDV"
          subtitle="moteur de la machine"
          description="Tu es le premier contact entre Lead Machine et les prospects. Tu utilises nos outils IA pour identifier des cibles chaudes, tu les contactes par téléphone, email ou SMS, tu qualifies leur besoin et tu poses un RDV découverte pour le Closer."
          missions={SETTER_MISSIONS}
          profile={SETTER_PROFILE}
          chips={SETTER_CHIPS}
          commissionTitle="Rémunération Setter"
          commissionRows={SETTER_COMMISSION}
          example={SETTER_EXAMPLE}
          accessNote="La première vente est réalisée en autonomie, sans support de l'équipe. Une fois conclue et encaissée, elle débloque l'accès complet au CRM et aux listes de leads qualifiés."
          footerNote="Pas de salaire fixe — pas de plafond. Tes revenus croissent avec tes résultats."
        />
      )}

      {activeRole === 'closer' && (
        <JobPanel
          role="closer"
          roleLabel="Closer — Vente & Conversion"
          subtitle="convertisseur d'élite"
          description="Tu reçois des RDV préparés par les Setters, des prospects déjà qualifiés qui ont accepté d'en savoir plus. Ta mission : comprendre profondément le besoin, présenter la solution qui correspond, traiter les objections et transformer en client payant."
          missions={CLOSER_MISSIONS}
          profile={CLOSER_PROFILE}
          chips={CLOSER_CHIPS}
          commissionTitle="Rémunération Closer"
          commissionRows={CLOSER_COMMISSION}
          example={CLOSER_EXAMPLE}
          accessNote="La première vente est réalisée en autonomie. Une fois encaissée, elle débloque l'accès au CRM complet et au flux de RDV qualifiés fournis par l'équipe de Setters."
          footerNote="Le Closer peut aussi faire du Setting et inversement — rémunéré selon l'acte réalisé."
        />
      )}

      {/* ── ONBOARDING STEPS ── */}
      <section className="bg-[#181818] px-5 py-20 md:px-[6vw]">
        <ScrollReveal>
          <div className="mb-12">
            <span className="mb-3 block text-xs uppercase tracking-[0.22em] text-white/75">
              Comment ça se passe
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.15]">
              Rejoindre Lead Machine
              <br />
              <em className="text-gold-light italic">en 3 étapes</em>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-[1100px] grid-cols-1 border border-border bg-border md:grid-cols-3" style={{ gap: '1px' }}>
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 80}>
              <div className="bg-bg-card p-6 md:p-8">
                <div className="font-serif text-5xl font-light leading-none text-gold/18">{step.num}</div>
                <div className="mt-3 text-base font-medium text-text-primary">{step.title}</div>
                <p className="mt-2 text-base leading-[1.75] text-text-dimmed">{step.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── EARNINGS SIMULATOR ── */}
      <section className="px-5 py-20 md:px-[6vw]">
        <ScrollReveal>
          <div className="mb-12">
            <span className="mb-3 block text-xs uppercase tracking-[0.22em] text-white/75">
              Simulateur de revenus
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.15]">
              Estimez vos
              <br />
              <em className="text-gold-light italic">revenus potentiels</em>
            </h2>
            <p className="mt-3 max-w-[560px] text-[0.9rem] text-text-dimmed">
              Ajustez les paramètres selon vos objectifs pour voir ce que vous pourriez gagner avec Lead Machine.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <EarningsSimulator />
        </ScrollReveal>
      </section>

      {/* ── APPLICATION FORM ── */}
      <section className="bg-[#181818] px-5 py-20 md:px-[6vw]" id="candidature">
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 border border-border bg-border lg:grid-cols-2" style={{ gap: 0 }}>
          {/* Left */}
          <div className="border-b border-border bg-bg-card p-6 lg:border-b-0 lg:border-r lg:p-10">
            <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-white/75">
              Postuler maintenant
            </span>
            <h2 className="font-serif text-4xl font-light leading-[1.2]">
              Rejoignez
              <br />
              <em className="text-gold-light italic">l&apos;équipe</em>
            </h2>
            <p className="mt-4 text-base leading-[1.8] text-text-dimmed">
              Remplissez ce formulaire. Nous examinons chaque candidature et revenons vers vous sous 48h pour
              un premier echange de 20 minutes.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {PERKS.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-base text-text-dimmed">
                  <span className="mt-1 flex-shrink-0 text-xs text-gold">{'\u2726'}</span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Form */}
          <div className="bg-[#0F0F0F] p-6 lg:p-10">
            <form onSubmit={handleApply}>
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-text-dimmed">
                    Prénom *
                  </label>
                  <input name="prenom" type="text" required placeholder="Jean"
                    className="w-full rounded-sm border border-white/10 bg-white/4 px-4 py-3 text-[0.88rem] text-text-primary outline-none transition-colors placeholder:text-white/70 focus:border-gold/45 focus:bg-gold/4"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-text-dimmed">
                    Nom *
                  </label>
                  <input name="nom" type="text" required placeholder="Dupont"
                    className="w-full rounded-sm border border-white/10 bg-white/4 px-4 py-3 text-[0.88rem] text-text-primary outline-none transition-colors placeholder:text-white/70 focus:border-gold/45 focus:bg-gold/4"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-text-dimmed">
                  Email *
                </label>
                <input name="email" type="email" required placeholder="jean@email.fr"
                  className="w-full rounded-sm border border-white/10 bg-white/4 px-4 py-3 text-[0.88rem] text-text-primary outline-none transition-colors placeholder:text-white/70 focus:border-gold/45 focus:bg-gold/4"
                />
              </div>

              <div className="mb-4">
                <label className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-text-dimmed">
                  Telephone *
                </label>
                <input name="telephone" type="tel" required placeholder="+33 6 xx xx xx xx"
                  className="w-full rounded-sm border border-white/10 bg-white/4 px-4 py-3 text-[0.88rem] text-text-primary outline-none transition-colors placeholder:text-white/70 focus:border-gold/45 focus:bg-gold/4"
                />
              </div>

              <div className="mb-4">
                <label className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-text-dimmed">
                  Role souhaite *
                </label>
                <select name="poste" required defaultValue=""
                  className="w-full cursor-pointer appearance-none rounded-sm border border-white/10 bg-white/4 px-4 py-3 text-[0.88rem] text-text-primary outline-none transition-colors focus:border-gold/45 focus:bg-gold/4"
                >
                  <option value="" disabled>Selectionner</option>
                  <option>Setter uniquement</option>
                  <option>Closer uniquement</option>
                  <option>Setter &amp; Closer</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-text-dimmed">
                  Experience commerciale
                </label>
                <select name="experience" defaultValue=""
                  className="w-full cursor-pointer appearance-none rounded-sm border border-white/10 bg-white/4 px-4 py-3 text-[0.88rem] text-text-primary outline-none transition-colors focus:border-gold/45 focus:bg-gold/4"
                >
                  <option value="" disabled>Votre niveau</option>
                  <option>Debutant (moins de 1 an)</option>
                  <option>Intermediaire (1 a 3 ans)</option>
                  <option>Confirme (3 a 5 ans)</option>
                  <option>Expert (+ 5 ans)</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-text-dimmed">
                  Pourquoi Lead Machine ? (court)
                </label>
                <textarea name="motivation" rows={3}
                  placeholder="Qu'est-ce qui vous attire dans cette opportunite ?"
                  className="w-full resize-none rounded-sm border border-white/10 bg-white/4 px-4 py-3 text-[0.88rem] text-text-primary outline-none transition-colors placeholder:text-white/70 focus:border-gold/45 focus:bg-gold/4"
                />
              </div>

              <button
                type="submit"
                disabled={formSubmitted}
                className={`w-full rounded-sm px-4 py-3.5 text-[0.88rem] font-semibold uppercase tracking-wider transition-all ${
                  formSubmitted
                    ? 'cursor-default bg-gradient-to-br from-green-400 to-green-500 text-bg-primary'
                    : 'bg-gradient-gold text-bg-primary shadow-[0_4px_20px_rgba(201,168,76,0.2)] hover:-translate-y-0.5 hover:opacity-90'
                }`}
              >
                {formSubmitted
                  ? '\u2713 Candidature reçue — Nous vous contactons sous 48h'
                  : 'Envoyer ma candidature →'}
              </button>
              <p className="mt-3 text-center text-xs text-white/28">
                Réponse sous 48h &middot; Entretien de 20 min &middot; Sans engagement
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
