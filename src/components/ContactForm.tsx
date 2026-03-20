"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClasses =
    "w-full bg-white/[0.04] border border-white/10 text-text-primary font-sans text-[0.88rem] px-4 py-3.5 rounded-sm outline-none transition-all duration-200 focus:border-gold/50 focus:bg-gold/[0.04] placeholder:text-text-muted";

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-[0.7rem] font-medium uppercase tracking-[0.14em] text-text-dimmed">
            Prenom *
          </label>
          <input
            type="text"
            placeholder="Jean"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label className="mb-2 block text-[0.7rem] font-medium uppercase tracking-[0.14em] text-text-dimmed">
            Nom *
          </label>
          <input
            type="text"
            placeholder="Dupont"
            required
            className={inputClasses}
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="mb-2 block text-[0.7rem] font-medium uppercase tracking-[0.14em] text-text-dimmed">
          Email professionnel *
        </label>
        <input
          type="email"
          placeholder="jean@votre-entreprise.fr"
          required
          className={inputClasses}
        />
      </div>
      <div className="mt-4">
        <label className="mb-2 block text-[0.7rem] font-medium uppercase tracking-[0.14em] text-text-dimmed">
          Telephone
        </label>
        <input
          type="tel"
          placeholder="+33 6 xx xx xx xx"
          className={inputClasses}
        />
      </div>
      <div className="mt-4">
        <label className="mb-2 block text-[0.7rem] font-medium uppercase tracking-[0.14em] text-text-dimmed">
          Secteur d&apos;activite *
        </label>
        <select required className={`${inputClasses} cursor-pointer appearance-none`}>
          <option value="" disabled>
            Selectionner votre secteur
          </option>
          <option>Immobilier — Agence / Mandataire</option>
          <option>Immobilier — Promoteur</option>
          <option>BTP &amp; Artisans</option>
          <option>Sante &amp; Bien-etre</option>
          <option>Coaching &amp; Formation</option>
          <option>E-commerce B2B</option>
          <option>Autre secteur</option>
        </select>
      </div>
      <div className="mt-4">
        <label className="mb-2 block text-[0.7rem] font-medium uppercase tracking-[0.14em] text-text-dimmed">
          Votre objectif principal
        </label>
        <textarea
          placeholder="Ex : generer plus de mandats, automatiser ma prospection, qualifier mes leads entrants..."
          className={`${inputClasses} h-24 resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={submitted}
        className={`mt-6 w-full py-4 rounded-sm font-sans text-[0.88rem] font-semibold uppercase tracking-[0.1em] transition-all duration-200 ${
          submitted
            ? "bg-gradient-to-r from-green-400 to-green-500 text-bg-primary"
            : "bg-gradient-gold text-bg-primary shadow-[0_4px_20px_rgba(201,168,76,0.2)] hover:opacity-90 hover:-translate-y-px"
        }`}
      >
        {submitted
          ? "Demande envoyee — Nous vous contactons sous 24h"
          : "Demander ma demo gratuite"}
      </button>
      <p className="mt-3 text-center text-[0.7rem] text-white/30">
        Reponse garantie sous 24h — Donnees traitees conformement a notre
        politique RGPD
      </p>
    </form>
  );
}
