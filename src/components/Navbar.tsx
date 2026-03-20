"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/immobilier", label: "Immobilier" },
  { href: "/recrutement", label: "Recrutement" },
  { href: "/a-propos", label: "\u00c0 propos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" onClick={() => setMobileOpen(false)}>
          <span className="font-serif text-2xl font-bold tracking-wider text-gradient-gold">
            LEAD MACHINE
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-dimmed transition-colors duration-200 hover:text-gold-light"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/rdv"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-2.5 text-sm font-semibold text-bg-primary transition-all duration-300 hover:shadow-[0_0_24px_rgba(201,168,76,0.3)] hover:scale-105"
          >
            Prendre RDV
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
        >
          <div className="flex w-6 flex-col gap-1.5">
            <span
              className={`block h-0.5 w-full bg-text-primary transition-all duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-text-primary transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-text-primary transition-all duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg-primary/98 backdrop-blur-lg transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-serif font-semibold text-text-primary transition-colors duration-200 hover:text-gold-light"
              style={{
                transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.4s ease, transform 0.4s ease, color 0.2s ease",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/rdv"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-3 text-lg font-semibold text-bg-primary transition-all duration-300 hover:shadow-[0_0_24px_rgba(201,168,76,0.3)]"
            style={{
              transitionDelay: mobileOpen ? `${navLinks.length * 50}ms` : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            Prendre RDV
          </Link>
        </div>
      </div>
    </header>
  );
}
