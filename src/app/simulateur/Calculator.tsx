"use client";

import { useState, useCallback, useMemo } from "react";

/* ── Forfait costs ── */
const forfaits = {
  essent: { setup: 500, monthly: 300, label: "Essentiel" },
  perf: { setup: 800, monthly: 550, label: "Performance" },
  excel: { setup: 1200, monthly: 900, label: "Excellence" },
} as const;

type ForfaitKey = keyof typeof forfaits;

/* ── Sector boosts ── */
const secteurBoost: Record<string, number> = {
  immo: 1,
  promo: 0.9,
  btp: 0.8,
  sante: 0.75,
  coaching: 0.9,
  ecom: 1.1,
  services: 1.05,
  autre: 0.85,
};

/* ── Benchmark presets ── */
const benchData: Record<
  string,
  {
    leads: number;
    close: number;
    ca: number;
    marge: number;
    secteur: string;
    forfait: ForfaitKey;
    abo: number;
  }
> = {
  immo: { leads: 20, close: 12, ca: 2500, marge: 42, secteur: "immo", forfait: "perf", abo: 350 },
  coaching: { leads: 15, close: 20, ca: 1800, marge: 55, secteur: "coaching", forfait: "perf", abo: 250 },
  btp: { leads: 10, close: 18, ca: 4000, marge: 38, secteur: "btp", forfait: "essent", abo: 400 },
  services: { leads: 25, close: 15, ca: 2000, marge: 45, secteur: "services", forfait: "perf", abo: 300 },
};

function fmt(n: number): string {
  return Math.round(n).toLocaleString("fr-FR");
}

function fmtEur(n: number): string {
  return `${fmt(n)} \u20ac`;
}

export default function Calculator() {
  const [secteur, setSecteur] = useState("immo");
  const [leadsNow, setLeadsNow] = useState(20);
  const [closeNow, setCloseNow] = useState(15);
  const [ca, setCa] = useState(2000);
  const [marge, setMarge] = useState(40);
  const [forfaitKey, setForfaitKey] = useState<ForfaitKey>("perf");
  const [withRecurr, setWithRecurr] = useState(true);
  const [abo, setAbo] = useState(300);

  /* ── Calculations ── */
  const results = useMemo(() => {
    const f = forfaits[forfaitKey];
    const boost = secteurBoost[secteur] ?? 1;

    const leadsAI = Math.round(leadsNow * 3.4 * boost);
    const closeAI = Math.min((closeNow / 100) * 2.6, 0.65);
    const clientsBefore = Math.round(leadsNow * (closeNow / 100));
    const clientsAI = Math.round(leadsAI * closeAI);
    const caMonthBefore = clientsBefore * ca;
    const caMonthAI = clientsAI * ca;
    const caAdd = caMonthAI - caMonthBefore;
    const margeAdd = caAdd * (marge / 100) - f.monthly;
    const daysToROI = Math.ceil(f.setup / Math.max(margeAdd / 30, 1));
    const mrr6 = withRecurr ? clientsAI * abo * 6 : 0;

    return {
      leadsAI,
      closeAI,
      clientsBefore,
      clientsAI,
      caMonthBefore,
      caMonthAI,
      caAdd,
      margeAdd: Math.max(margeAdd, 0),
      daysToROI,
      mrr6,
      setup: f.setup,
      monthly: f.monthly,
    };
  }, [secteur, leadsNow, closeNow, ca, marge, forfaitKey, withRecurr, abo]);

  /* ── Apply benchmark ── */
  const applyBench = useCallback((key: string) => {
    const d = benchData[key];
    if (!d) return;
    setSecteur(d.secteur);
    setLeadsNow(d.leads);
    setCloseNow(d.close);
    setCa(d.ca);
    setMarge(d.marge);
    setForfaitKey(d.forfait);
    setAbo(d.abo);
  }, []);

  return (
    <>
      {/* ── CALCULATOR 2-COLUMN ── */}
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 border border-border bg-border gap-px lg:grid-cols-2">
        {/* ── LEFT: INPUTS ── */}
        <div className="bg-bg-card p-8 lg:p-10">
          <h2 className="font-serif text-3xl font-light mb-2">
            Vos donn&eacute;es actuelles
          </h2>
          <p className="mb-8 text-sm text-text-dimmed">
            Ajustez chaque param&egrave;tre pour affiner la simulation.
          </p>

          {/* Sector */}
          <InputGroup label="Secteur d'activit\u00e9">
            <select
              value={secteur}
              onChange={(e) => setSecteur(e.target.value)}
              className="w-full rounded-sm border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-gold/40"
            >
              <option value="immo">Immobilier (agence / mandataire)</option>
              <option value="promo">Immobilier (promoteur)</option>
              <option value="btp">BTP &amp; Artisans</option>
              <option value="sante">Sant&eacute; &amp; Bien-&ecirc;tre</option>
              <option value="coaching">Coaching &amp; Formation</option>
              <option value="ecom">E-commerce B2B</option>
              <option value="services">Services aux entreprises</option>
              <option value="autre">Autre secteur</option>
            </select>
          </InputGroup>

          {/* Leads */}
          <SliderGroup
            label="Leads qualifi\u00e9s g\u00e9n\u00e9r\u00e9s / mois actuellement"
            value={leadsNow}
            onChange={setLeadsNow}
            min={1}
            max={200}
            step={1}
            displayVal={String(leadsNow)}
            marks={["1", "50", "100", "200"]}
          />

          {/* Conversion rate */}
          <SliderGroup
            label="Taux de conversion lead \u2192 client actuel"
            value={closeNow}
            onChange={setCloseNow}
            min={1}
            max={60}
            step={1}
            displayVal={`${closeNow}%`}
            marks={["1%", "15%", "30%", "60%"]}
          />

          {/* CA per client */}
          <SliderGroup
            label="CA HT moyen g\u00e9n\u00e9r\u00e9 par client converti"
            value={ca}
            onChange={setCa}
            min={200}
            max={20000}
            step={100}
            displayVal={`${ca.toLocaleString("fr-FR")} \u20ac`}
            marks={["200 \u20ac", "5 000 \u20ac", "10 000 \u20ac", "20 000 \u20ac"]}
          />

          {/* Margin */}
          <SliderGroup
            label="Marge nette sur chaque client (apr\u00e8s commissions)"
            value={marge}
            onChange={setMarge}
            min={5}
            max={90}
            step={1}
            displayVal={`${marge}%`}
            marks={["5%", "25%", "50%", "90%"]}
          />

          <div className="my-5 h-px bg-border" />

          {/* Forfait */}
          <InputGroup label="Forfait Lead Machine envisag\u00e9">
            <select
              value={forfaitKey}
              onChange={(e) => setForfaitKey(e.target.value as ForfaitKey)}
              className="w-full rounded-sm border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-gold/40"
            >
              <option value="essent">
                Essentiel (mise en place + abonnement entr&eacute;e)
              </option>
              <option value="perf">
                Performance (mise en place + abonnement interm&eacute;diaire)
              </option>
              <option value="excel">
                Excellence (mise en place + abonnement premium)
              </option>
            </select>
          </InputGroup>

          {/* Recurring toggle */}
          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-text-dimmed">
              Inclure les revenus r&eacute;currents mensuels
            </span>
            <label className="relative inline-flex h-6 w-11 cursor-pointer">
              <input
                type="checkbox"
                checked={withRecurr}
                onChange={(e) => setWithRecurr(e.target.checked)}
                className="peer sr-only"
              />
              <span className="absolute inset-0 rounded-full bg-white/10 transition-colors peer-checked:bg-gold/30" />
              <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white/40 transition-transform peer-checked:translate-x-5 peer-checked:bg-gold" />
            </label>
          </div>

          {/* Recurring subscription slider */}
          {withRecurr && (
            <div className="mt-5">
              <SliderGroup
                label="Abonnement r\u00e9current moyen par client / mois"
                value={abo}
                onChange={setAbo}
                min={50}
                max={2000}
                step={50}
                displayVal={`${abo.toLocaleString("fr-FR")} \u20ac`}
                marks={["50 \u20ac", "500 \u20ac", "1 000 \u20ac", "2 000 \u20ac"]}
              />
            </div>
          )}
        </div>

        {/* ── RIGHT: RESULTS ── */}
        <div className="bg-bg-primary p-8 lg:p-10 flex flex-col gap-4">
          <h2 className="font-serif text-3xl font-light mb-1">
            Votre simulation
          </h2>
          <p className="text-xs text-white/35 mb-2">
            Mise &agrave; jour en temps r&eacute;el
          </p>

          {/* Big KPI - ROI days */}
          <div className="rounded-lg border border-gold/20 bg-gold/[0.06] p-6 text-center">
            <div className="mb-2 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/40">
              Rentabilisation de l&apos;investissement Lead Machine
            </div>
            <div className="font-serif text-5xl font-light leading-none text-gold-light">
              {results.daysToROI <= 30
                ? `${results.daysToROI} jours`
                : `${Math.ceil(results.daysToROI / 30)} mois`}
            </div>
            <div className="mt-1 text-xs text-white/40">
              Pour rentabiliser l&apos;investissement initial (
              {fmtEur(results.setup)})
            </div>
          </div>

          {/* 4 KPI cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <KpiCard
              label="Leads g\u00e9n\u00e9r\u00e9s / mois avec IA"
              value={String(results.leadsAI)}
              sub={`+${fmt(results.leadsAI - leadsNow)} leads suppl\u00e9mentaires vs maintenant`}
              color="gold"
            />
            <KpiCard
              label="CA additionnel / mois"
              value={fmtEur(results.caAdd)}
              sub={`Soit +${Math.round((results.caAdd / Math.max(results.caMonthBefore, 1)) * 100)}% par rapport \u00e0 aujourd\u2019hui`}
              color="green"
              highlight
            />
            <KpiCard
              label="Nouveaux clients / mois"
              value={String(results.clientsAI)}
              sub={`+${results.clientsAI - results.clientsBefore} clients de plus qu\u2019actuellement`}
              color="gold"
            />
            <KpiCard
              label="Marge additionnelle / mois"
              value={fmtEur(results.margeAdd)}
              sub="Apr\u00e8s d\u00e9duction de l\u2019abonnement"
              color="green"
              highlight
            />
          </div>

          {/* MRR at 6 months */}
          {withRecurr && (
            <KpiCard
              label="MRR r\u00e9current estim\u00e9 \u00e0 6 mois"
              value={fmtEur(results.mrr6)}
              sub={`${results.clientsAI} clients actifs \u00d7 ${fmtEur(abo)} \u00d7 6 mois`}
              color="gold"
            />
          )}

          {/* Breakdown table */}
          <div className="rounded-md border border-white/[0.06] bg-white/[0.02] p-4">
            <div className="mb-3 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-white/35">
              D&eacute;tail du calcul
            </div>
            <BreakdownRow label="Leads actuels / mois" value={String(leadsNow)} />
            <BreakdownRow
              label="Leads avec IA (\u00d73,4 en moyenne)"
              value={`${results.leadsAI} leads`}
              gold
            />
            <BreakdownRow
              label="Taux de conversion am\u00e9lior\u00e9 par IA"
              value={`${Math.round(results.closeAI * 100)}% (vs ${closeNow}% actuellement)`}
              gold
            />
            <BreakdownRow
              label="CA g\u00e9n\u00e9r\u00e9 avant Lead Machine / mois"
              value={fmtEur(results.caMonthBefore)}
            />
            <BreakdownRow
              label="CA g\u00e9n\u00e9r\u00e9 avec Lead Machine / mois"
              value={fmtEur(results.caMonthAI)}
              gold
            />
            <BreakdownRow
              label="Co\u00fbt mensuel abonnement Lead Machine"
              value={`\u2212${fmtEur(results.monthly)} / mois`}
              red
            />
            <div className="mt-2 border-t border-gold/15 pt-2">
              <BreakdownRow
                label="Gain net mensuel estim\u00e9"
                value={`${fmtEur(results.margeAdd)} / mois`}
                green
                bold
              />
            </div>
          </div>

          <p className="text-[0.68rem] leading-relaxed text-white/[0.28]">
            * Simulation bas&eacute;e sur les ratios moyens observ&eacute;s chez
            nos clients : &times;3,4 de leads g&eacute;n&eacute;r&eacute;s,
            +260% de taux de conversion. Les performances varient selon le
            secteur, la zone g&eacute;ographique et l&apos;implication. Cette
            simulation est indicative et non contractuelle.
          </p>
        </div>
      </div>

      {/* ── SECTOR BENCHMARKS ── */}
      <SectorBenchmarks applyBench={applyBench} />
    </>
  );
}

/* ────────────────────────────────────
   Sub-components
   ──────────────────────────────────── */

function InputGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <label className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white/45">
        {label}
      </label>
      {children}
    </div>
  );
}

function SliderGroup({
  label,
  value,
  onChange,
  min,
  max,
  step,
  displayVal,
  marks,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  displayVal: string;
  marks: string[];
}) {
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center justify-between text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white/45">
        <span>{label}</span>
        <span className="font-serif text-xl font-light normal-case tracking-normal text-gold-light">
          {displayVal}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full cursor-pointer accent-gold h-0.5 mb-1"
      />
      <div className="flex justify-between text-[0.65rem] text-white/25">
        {marks.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  );
}

function KpiCard({
  label,
  value,
  sub,
  color,
  highlight,
}: {
  label: string;
  value: string;
  sub: string;
  color: "gold" | "green";
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-md border p-4 ${
        highlight
          ? "border-green-400/15 bg-green-400/[0.05]"
          : "border-white/[0.06] bg-white/[0.03]"
      }`}
    >
      <div className="mb-1 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white/35">
        {label}
      </div>
      <div
        className={`font-serif text-2xl leading-none ${
          color === "green" ? "text-green-400" : "text-gold-light"
        }`}
      >
        {value}
      </div>
      <div className="mt-1 text-[0.68rem] text-white/35">{sub}</div>
    </div>
  );
}

function BreakdownRow({
  label,
  value,
  gold,
  green,
  red,
  bold,
}: {
  label: string;
  value: string;
  gold?: boolean;
  green?: boolean;
  red?: boolean;
  bold?: boolean;
}) {
  let valColor = "";
  if (gold) valColor = "text-gold-light";
  if (green) valColor = "text-green-400";
  if (red) valColor = "text-red-400";

  return (
    <div className="flex items-baseline justify-between border-b border-white/[0.04] py-1 text-sm last:border-b-0">
      <span className={`text-text-dimmed ${bold ? "text-text-primary font-medium" : ""}`}>
        {label}
      </span>
      <span className={`font-medium ${valColor}`}>{value}</span>
    </div>
  );
}

/* ── Sector Benchmarks Section ── */
function SectorBenchmarks({
  applyBench,
}: {
  applyBench: (key: string) => void;
}) {
  const [active, setActive] = useState("immo");

  const benchmarks = [
    {
      key: "immo",
      label: "Immobilier",
      leadsBefore: "~20 / mois",
      leadsAfter: "~68 / mois",
      roi: "11 jours",
    },
    {
      key: "coaching",
      label: "Coaching & Formation",
      leadsBefore: "~15 / mois",
      leadsAfter: "~51 / mois",
      roi: "8 jours",
    },
    {
      key: "btp",
      label: "BTP & Artisans",
      leadsBefore: "~10 / mois",
      leadsAfter: "~34 / mois",
      roi: "15 jours",
    },
    {
      key: "services",
      label: "Services B2B",
      leadsBefore: "~25 / mois",
      leadsAfter: "~85 / mois",
      roi: "9 jours",
    },
  ];

  return (
    <div className="mt-0 bg-[#111111] px-[6vw] py-20">
      <div className="mb-12 text-center">
        <span className="mb-3 block text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
          Benchmarks sectoriels
        </span>
        <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-tight">
          R&eacute;sultats moyens{" "}
          <em className="text-gold-light italic">par secteur</em>
        </h2>
      </div>
      <div className="mx-auto max-w-[1100px] grid grid-cols-1 border border-border bg-border gap-px sm:grid-cols-2 lg:grid-cols-4">
        {benchmarks.map((b) => (
          <button
            key={b.key}
            type="button"
            onClick={() => {
              setActive(b.key);
              applyBench(b.key);
            }}
            className={`bg-bg-card p-6 text-left transition-colors border-b-2 ${
              active === b.key
                ? "bg-gold/[0.06] border-b-gold"
                : "border-b-transparent hover:bg-gold/[0.04] hover:border-b-gold/30"
            }`}
          >
            <div className="mb-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-gold">
              {b.label}
            </div>
            <div className="mt-3 text-xs text-white/40">Leads avant</div>
            <div className="font-serif text-xl font-light text-text-dimmed">
              {b.leadsBefore}
            </div>
            <div className="mt-3 text-xs text-white/40">Leads avec IA</div>
            <div className="font-serif text-xl font-light text-green-400">
              {b.leadsAfter}
            </div>
            <div className="mt-3 text-xs text-white/40">ROI moyen</div>
            <div className="font-serif text-xl font-light text-green-400">
              {b.roi}
            </div>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-gold/30 px-3 py-1 text-xs uppercase tracking-wider text-gold transition-colors hover:bg-gold/10">
              Appliquer &rarr;
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
