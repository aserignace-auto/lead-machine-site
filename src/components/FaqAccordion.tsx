"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl flex flex-col gap-px bg-border border border-border">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="bg-bg-card overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-8 py-5 text-left font-sans text-[0.92rem] font-normal text-text-primary transition-colors duration-200 hover:text-gold-light"
            >
              <span>{item.question}</span>
              <span
                className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold text-sm transition-all duration-300 ${
                  isOpen ? "rotate-45 bg-gold/10" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-400 ease-in-out ${
                isOpen ? "max-h-80 pb-6 px-8" : "max-h-0 px-8"
              }`}
            >
              <p className="text-sm leading-[1.8] text-text-dimmed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
