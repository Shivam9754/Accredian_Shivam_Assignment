"use client";

import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "./theme-provider";
import { CtaButton } from "./cta-button";

const LINKS = [
  { href: "#track-record", label: "Stats" },
  { href: "#segmentation", label: "Segmentation" },
  { href: "#skills", label: "Skills" },
  { href: "#edge", label: "Accredian Edge" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-surface-dark/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-[15px] font-semibold tracking-tight text-neutral-900 dark:text-white">
            accredian
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 text-neutral-500 transition-colors hover:border-accent hover:text-accent dark:border-neutral-800 dark:text-neutral-400"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 text-neutral-500 transition-colors hover:border-accent hover:text-accent dark:border-neutral-800 dark:text-neutral-400 md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <CtaButton className="hidden sm:inline-flex" />
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden border-t border-neutral-200 bg-white/95 px-6 pb-4 pt-3 backdrop-blur-md dark:border-neutral-800 dark:bg-surface-dark/95`}
      >
        <nav className="flex flex-col gap-3">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-950 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-4 flex items-center justify-between gap-2">
          <CtaButton className="flex-1" />
        </div>
      </div>
    </header>
  );
}
