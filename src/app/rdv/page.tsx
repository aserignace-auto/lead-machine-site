'use client';

import { useState, useCallback, useMemo, FormEvent } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/SectionHeader';

/* ── Calendar constants ── */
const MONTHS = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
];
const DAY_NAMES_SHORT = ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'];
const DAY_NAMES_LONG = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
const SLOTS = ['09:00', '09:30', '10:00', '10:30', '11:00', '14:00', '14:30', '15:00', '15:30', '16:00', '17:00'];

const SECTORS = [
  'Immobilier — Agence / Mandataire',
  'Immobilier — Promoteur / Investisseur',
  'BTP & Artisans',
  'Santé & Bien-être',
  'Coaching & Formation',
  'E-commerce B2B',
  'Services aux entreprises',
  'Finance & Assurance',
  'Autre secteur',
];

const AGENDA_ITEMS = [
  {
    time: '0\u20138',
    title: 'Diagnostic de votre situation',
    text: 'Votre activité, votre processus actuel, le nombre de leads que vous générez, comment vous prospectez aujourd\u2019hui et ce qui vous prend le plus de temps.',
  },
  {
    time: '8\u201318',
    title: 'Identification des opportunités',
    text: 'Analyse des axes d\u2019automatisation spécifiques à votre secteur. Estimation du potentiel de leads, du gain de temps et de l\u2019impact sur votre chiffre d\u2019affaires.',
  },
  {
    time: '18\u201325',
    title: 'Présentation de la solution',
    text: 'Démonstration concrète des fonctionnalités adaptées à votre profil. Pipeline, séquences, scoring IA — vous voyez exactement ce que votre système ferait.',
  },
  {
    time: '25\u201330',
    title: 'Questions & prochaines étapes',
    text: 'Réponses à vos questions sur les prix, les délais, les intégrations. Si ça vous convient, nous définissons ensemble les prochaines étapes. Aucune obligation.',
  },
];

const GUARANTEES = [
  {
    icon: '\uD83C\uDFAF',
    title: 'Zéro engagement',
    text: 'Cet appel n\u2019engage à rien. Aucune carte bancaire, aucun contrat. Vous repartez avec des informations utiles, que vous travailliez avec nous ou non.',
  },
  {
    icon: '\u23F1',
    title: '30 minutes chrono',
    text: 'Nous respectons votre temps. L\u2019appel dure exactement 30 minutes. Pas de débordement, pas de relance excessive après l\u2019appel si vous ne donnez pas suite.',
  },
  {
    icon: '\uD83D\uDCA1',
    title: 'Valeur immédiate',
    text: 'Même si vous ne devenez pas client, vous repartez avec une analyse concrète de vos axes d\u2019amélioration commerciale et des pistes actionnables.',
  },
];

const HERO_BENEFITS = [
  'Diagnostic de votre processus commercial actuel',
  'Estimation du potentiel d\u2019automatisation pour votre secteur',
  'Présentation de la solution adaptée à vos besoins',
  'Questions / réponses sans tabou sur les résultats et les prix',
];

const INFO_ITEMS = [
  { icon: '\uD83D\uDCC5', label: 'Format', value: 'Visio (Zoom / Google Meet) ou téléphone — au choix' },
  { icon: '\u23F1', label: 'Durée', value: '30 minutes exactement' },
  { icon: '\u2709\uFE0F', label: 'Confirmation', value: 'Email immédiat + rappel J-1 et H-1' },
  { icon: '\uD83D\uDD12', label: 'Confidentialité', value: 'Vos données ne sont jamais partagées avec des tiers' },
];

/* ── Calendar Component ── */
function Calendar({
  selectedDate,
  selectedSlot,
  onSelectDate,
  onSelectSlot,
  month,
  year,
  onPrevMonth,
  onNextMonth,
}: {
  selectedDate: Date | null;
  selectedSlot: string | null;
  onSelectDate: (day: number) => void;
  onSelectSlot: (slot: string) => void;
  month: number;
  year: number;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const calendarDays = useMemo(() => {
    const firstDay = new Date(year, month, 1);
    const startDay = (firstDay.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const blanks = Array.from({ length: startDay }, (_, i) => ({
      key: `blank-${i}`,
      day: 0,
      isPast: true,
      isWeekend: true,
    }));

    const days = Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1;
      const date = new Date(year, month, day);
      const dow = date.getDay();
      return {
        key: `day-${day}`,
        day,
        isPast: date < today,
        isWeekend: dow === 0 || dow === 6,
      };
    });

    return [...blanks, ...days];
  }, [month, year, today]);

  const showSlots = selectedDate !== null &&
    selectedDate.getMonth() === month &&
    selectedDate.getFullYear() === year;

  const selectedDateLabel = selectedDate
    ? `${DAY_NAMES_LONG[selectedDate.getDay()]} ${selectedDate.getDate()} ${MONTHS[selectedDate.getMonth()]}`
    : '';

  return (
    <div className="rounded-[10px] border border-border bg-bg-card overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(201,168,76,0.06)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border bg-[#0D0D0D] px-5 py-3.5">
        <span className="text-[0.78rem] font-medium tracking-wide text-text-primary">
          Choisir un créneau
        </span>
        <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-[0.65rem] tracking-wider text-green-300">
          30 min &middot; Visio ou Téléphone
        </span>
      </div>

      {/* Calendar */}
      <div className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-serif text-xl font-normal text-text-primary">
            {MONTHS[month]} {year}
          </span>
          <div className="flex gap-1.5">
            <button
              onClick={onPrevMonth}
              className="flex h-7 w-7 items-center justify-center rounded border border-white/8 bg-white/6 text-sm text-text-dimmed transition-colors hover:bg-gold/10 hover:text-gold"
            >
              &lsaquo;
            </button>
            <button
              onClick={onNextMonth}
              className="flex h-7 w-7 items-center justify-center rounded border border-white/8 bg-white/6 text-sm text-text-dimmed transition-colors hover:bg-gold/10 hover:text-gold"
            >
              &rsaquo;
            </button>
          </div>
        </div>

        {/* Day names */}
        <div className="mb-2 grid grid-cols-7 gap-0.5">
          {DAY_NAMES_SHORT.map((name) => (
            <div key={name} className="py-1 text-center text-[0.62rem] uppercase tracking-wider text-white/30">
              {name}
            </div>
          ))}
        </div>

        {/* Dates */}
        <div className="grid grid-cols-7 gap-0.5">
          {calendarDays.map((d) => {
            if (d.day === 0) {
              return <div key={d.key} className="p-2" />;
            }
            const unavailable = d.isPast || d.isWeekend;
            const isSelected =
              selectedDate !== null &&
              selectedDate.getDate() === d.day &&
              selectedDate.getMonth() === month &&
              selectedDate.getFullYear() === year;

            return (
              <button
                key={d.key}
                disabled={unavailable}
                onClick={() => onSelectDate(d.day)}
                className={`rounded p-2 text-center text-[0.78rem] transition-colors ${
                  isSelected
                    ? 'bg-gold font-semibold text-bg-primary'
                    : unavailable
                      ? 'cursor-default text-white/20'
                      : 'cursor-pointer bg-white/4 text-text-primary hover:bg-gold/12 hover:text-gold-light'
                }`}
              >
                {d.day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time slots */}
      {showSlots && (
        <div className="px-5 pb-5">
          <div className="mb-3 text-[0.68rem] uppercase tracking-[0.14em] text-white/35">
            Créneaux disponibles — {selectedDateLabel}
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {SLOTS.map((slot) => (
              <button
                key={slot}
                onClick={() => onSelectSlot(slot)}
                className={`rounded border px-2 py-2 text-center text-[0.78rem] transition-colors ${
                  selectedSlot === slot
                    ? 'border-gold/50 bg-gold/15 text-gold-light'
                    : 'border-white/8 bg-white/4 text-text-dimmed hover:border-gold/30 hover:bg-gold/10 hover:text-gold-light'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Main Page ── */
export default function RdvPage() {
  const [calMonth, setCalMonth] = useState(3); // April
  const [calYear, setCalYear] = useState(2026);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handlePrevMonth = useCallback(() => {
    setCalMonth((m) => {
      if (m === 0) {
        setCalYear((y) => y - 1);
        return 11;
      }
      return m - 1;
    });
  }, []);

  const handleNextMonth = useCallback(() => {
    setCalMonth((m) => {
      if (m === 11) {
        setCalYear((y) => y + 1);
        return 0;
      }
      return m + 1;
    });
  }, []);

  const handleSelectDate = useCallback(
    (day: number) => {
      setSelectedDate(new Date(calYear, calMonth, day));
      setSelectedSlot(null);
    },
    [calYear, calMonth],
  );

  const handleSelectSlot = useCallback((slot: string) => {
    setSelectedSlot(slot);
    document.getElementById('reserver')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const slotLabel = useMemo(() => {
    if (!selectedDate || !selectedSlot) {
      return selectedDate
        ? 'Choisissez un créneau horaire'
        : 'Aucun créneau sélectionné — choisissez une date dans le calendrier ci-dessus';
    }
    return `${DAY_NAMES_LONG[selectedDate.getDay()]} ${selectedDate.getDate()} ${MONTHS[selectedDate.getMonth()]} ${selectedDate.getFullYear()} à ${selectedSlot}`;
  }, [selectedDate, selectedSlot]);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  }, []);

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

        <div className="relative z-10 mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Content */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-gold/30 px-4 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-gold">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold shadow-[0_0_8px_var(--gold)]" />
              Appel découverte &middot; 30 minutes &middot; Gratuit
            </div>

            <h1 className="font-serif text-[clamp(2.5rem,5vw,5rem)] font-light leading-[1.1] tracking-tight">
              Planifiez votre
              <br />
              <em className="text-gradient-gold italic">appel découverte</em>
              <br />
              gratuit
            </h1>

            <p className="mt-5 text-[0.95rem] leading-[1.8] text-text-dimmed">
              30 minutes pour analyser votre situation, identifier vos axes d&apos;automatisation et vous
              présenter concrètement ce qu&apos;un système Lead Machine peut générer pour votre activité.
              Zéro engagement, zéro pression commerciale.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {HERO_BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 text-[0.85rem] text-text-dimmed">
                  <span className="text-green-400">&#10003;</span>
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Calendar */}
          <Calendar
            selectedDate={selectedDate}
            selectedSlot={selectedSlot}
            onSelectDate={handleSelectDate}
            onSelectSlot={handleSelectSlot}
            month={calMonth}
            year={calYear}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
          />
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
                Chaque minute est utilisée pour vous apporter une vraie valeur — pas un pitch commercial.
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
              Un appel <em className="text-gold-light italic">sans prise de tête</em>
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

      {/* ── BOOKING FORM ── */}
      <section className="bg-[#111111] px-[6vw] py-20" id="reserver">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 border border-border bg-border lg:grid-cols-2" style={{ gap: 0 }}>
          {/* Left info */}
          <div className="border-b border-border bg-bg-card p-10 lg:border-b-0 lg:border-r">
            <span className="mb-4 block text-[0.68rem] uppercase tracking-[0.2em] text-gold">Réservation</span>
            <h2 className="font-serif text-4xl font-light leading-[1.2]">
              Confirmez votre
              <br />
              <em className="text-gold-light italic">créneau</em>
            </h2>
            <p className="mt-4 text-[0.85rem] leading-[1.8] text-text-dimmed">
              Remplissez vos coordonnées. Vous recevrez une confirmation par email avec le lien de visio et un
              rappel 24h avant l&apos;appel.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {INFO_ITEMS.map((info) => (
                <div key={info.label} className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-gold/25 text-base">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-[0.68rem] uppercase tracking-[0.12em] text-white/35">{info.label}</div>
                    <div className="text-[0.85rem] text-text-primary">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="bg-[#0F0F0F] p-10">
            {/* Selected slot display */}
            <div className="mb-4 rounded border border-gold/25 bg-gold/8 px-4 py-3 text-[0.82rem] text-gold-lighter">
              <span className="mr-1.5">{'\uD83D\uDCC5'}</span>
              Créneau sélectionné : {slotLabel}
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[0.68rem] uppercase tracking-[0.14em] text-text-dimmed">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jean"
                    className="w-full rounded-sm border border-white/10 bg-white/4 px-4 py-3 text-[0.88rem] text-text-primary outline-none transition-colors placeholder:text-white/25 focus:border-gold/45 focus:bg-gold/4"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[0.68rem] uppercase tracking-[0.14em] text-text-dimmed">
                    Nom *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Dupont"
                    className="w-full rounded-sm border border-white/10 bg-white/4 px-4 py-3 text-[0.88rem] text-text-primary outline-none transition-colors placeholder:text-white/25 focus:border-gold/45 focus:bg-gold/4"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-1.5 block text-[0.68rem] uppercase tracking-[0.14em] text-text-dimmed">
                  Email professionnel *
                </label>
                <input
                  type="email"
                  required
                  placeholder="jean@votre-entreprise.fr"
                  className="w-full rounded-sm border border-white/10 bg-white/4 px-4 py-3 text-[0.88rem] text-text-primary outline-none transition-colors placeholder:text-white/25 focus:border-gold/45 focus:bg-gold/4"
                />
              </div>

              <div className="mb-4">
                <label className="mb-1.5 block text-[0.68rem] uppercase tracking-[0.14em] text-text-dimmed">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+33 6 xx xx xx xx"
                  className="w-full rounded-sm border border-white/10 bg-white/4 px-4 py-3 text-[0.88rem] text-text-primary outline-none transition-colors placeholder:text-white/25 focus:border-gold/45 focus:bg-gold/4"
                />
              </div>

              <div className="mb-4">
                <label className="mb-1.5 block text-[0.68rem] uppercase tracking-[0.14em] text-text-dimmed">
                  Secteur d&apos;activité *
                </label>
                <select
                  required
                  defaultValue=""
                  className="w-full cursor-pointer appearance-none rounded-sm border border-white/10 bg-white/4 px-4 py-3 text-[0.88rem] text-text-primary outline-none transition-colors focus:border-gold/45 focus:bg-gold/4"
                >
                  <option value="" disabled>Votre secteur</option>
                  {SECTORS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="mb-1.5 block text-[0.68rem] uppercase tracking-[0.14em] text-text-dimmed">
                  Format de l&apos;appel
                </label>
                <select className="w-full cursor-pointer appearance-none rounded-sm border border-white/10 bg-white/4 px-4 py-3 text-[0.88rem] text-text-primary outline-none transition-colors focus:border-gold/45 focus:bg-gold/4">
                  <option>Visio (lien envoyé par email)</option>
                  <option>Téléphone (je serai appelé)</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="mb-1.5 block text-[0.68rem] uppercase tracking-[0.14em] text-text-dimmed">
                  Votre principal défi commercial (optionnel)
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex : je manque de leads qualifiés, ma prospection prend trop de temps, je ne sais pas comment automatiser..."
                  className="w-full resize-none rounded-sm border border-white/10 bg-white/4 px-4 py-3 text-[0.88rem] text-text-primary outline-none transition-colors placeholder:text-white/25 focus:border-gold/45 focus:bg-gold/4"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full rounded-sm px-4 py-3.5 text-[0.88rem] font-semibold uppercase tracking-wider transition-all ${
                  submitted
                    ? 'cursor-default bg-gradient-to-br from-green-400 to-green-500 text-bg-primary'
                    : 'bg-gradient-gold text-bg-primary shadow-[0_4px_20px_rgba(201,168,76,0.2)] hover:-translate-y-0.5 hover:opacity-90'
                }`}
              >
                {submitted ? '\u2713 Créneau confirmé — Email de confirmation envoyé !' : 'Confirmer mon créneau \u2192'}
              </button>
              <p className="mt-3 text-center text-[0.7rem] text-white/28">
                Confirmation immédiate par email &middot; Rappel J-1 et H-1 automatiques
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
