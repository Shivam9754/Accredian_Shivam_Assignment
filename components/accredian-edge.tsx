// components/accredian-edge.tsx
"use client";

import { useState } from "react";

interface EdgeRow {
  standard: string;
  edge: string;
  detail: string;
}

const ROWS: EdgeRow[] = [
  {
    standard: "One-size-fits-all modules",
    edge: "Tailored Solutions",
    detail: "Programs are rebuilt around your org's actual goals and constraints, not a shared syllabus.",
  },
  {
    standard: "Generic facilitators",
    edge: "Expert Guidance",
    detail: "Sessions are led by practitioners with direct, current experience in the domain being taught.",
  },
  {
    standard: "Static slide decks",
    edge: "Custom Lab Sandbox",
    detail: "Learners apply concepts inside sandboxed environments before anything touches production.",
  },
  {
    standard: "End-of-course survey",
    edge: "Cohort Performance Dashboards",
    detail: "Live dashboards track cohort progress against skill benchmarks, not just attendance.",
  },
  {
    standard: "Fixed delivery format",
    edge: "Flexible Delivery",
    detail: "Online, offline, or blended — the format follows your team's schedule, not the vendor's calendar.",
  },
];

export function AccredianEdge() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="edge"
      className="border-t border-neutral-200 py-24 dark:border-neutral-800"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-xl">
          <span className="text-xs font-medium uppercase tracking-wide text-accent">
            Key aspects of our strategic training
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tightest text-neutral-900 dark:text-white">
            The Accredian Edge
          </h2>
        </div>

        {/* ========================================================= */}
        {/* MOBILE VIEW (Grouped Cards - Responsive layout)            */}
        {/* ========================================================= */}
        <div className="lg:hidden space-y-6">
          {/* Traditional Path Card */}
          <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/30 dark:bg-neutral-900/5 p-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
              Traditional Path
            </span>
            <h3 className="text-xl font-bold mt-1 mb-6 text-neutral-400 font-mono">
              Standard Corporate Upskilling
            </h3>
            <ul className="space-y-4">
              {ROWS.map((row) => (
                <li key={row.standard} className="flex items-start gap-3 text-sm text-neutral-500 dark:text-neutral-400 font-mono">
                  <span className="mt-0.5 text-neutral-300 dark:text-neutral-700 font-bold">✕</span>
                  <span>{row.standard}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The Accredian Edge Card */}
          <div className="rounded-lg border border-accent/20 bg-accent/[0.01] dark:bg-accent/[0.02] p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
                Strategic Path
              </span>
              <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded border border-accent/30 text-accent bg-accent/5">
                Recommended
              </span>
            </div>
            <h3 className="text-xl font-bold mt-1 mb-6 text-neutral-900 dark:text-white font-mono">
              The Accredian Edge
            </h3>
            <ul className="space-y-6">
              {ROWS.map((row) => (
                <li key={row.edge} className="flex flex-col gap-1 text-sm text-neutral-900 dark:text-white font-mono">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-accent font-bold">✓</span>
                    <span className="font-semibold">{row.edge}</span>
                  </div>
                  <p className="pl-6 text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed font-sans">
                    {row.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP VIEW (Original Interactive Stepper Table)        */}
        {/* ========================================================= */}
        <div className="hidden lg:grid overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 lg:grid-cols-[1fr_100px_1fr]">
          {/* left column header */}
          <div className="border-b border-neutral-200 p-5 lg:border-b-0 lg:border-r dark:border-neutral-800">
            <span className="text-xs font-medium uppercase tracking-wide text-neutral-400">
              Standard corporate upskilling
            </span>
          </div>
          
          {/* Center Column Header (Vs tag replacing empty gap) */}
          <div className="hidden lg:flex items-center justify-center border-b border-neutral-200 bg-neutral-50/50 p-5 dark:border-neutral-800 dark:bg-neutral-900/10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
              Vs
            </span>
          </div>
          
          {/* Right Column Header */}
          <div className="border-b border-neutral-200 p-5 lg:border-b-0 dark:border-neutral-800">
            <span className="text-xs font-medium uppercase tracking-wide text-accent">
              The Accredian Edge
            </span>
          </div>

          {ROWS.map((row, i) => {
            const isHovered = hovered === i;
            return (
              <div className="contents" key={row.edge}>
                
                {/* Standard Corporate Upskilling Row Cell */}
                <div
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className={`relative border-t border-neutral-200 p-5 text-sm transition-colors duration-200 dark:border-neutral-800 lg:border-r ${
                    isHovered
                      ? "text-neutral-400 dark:text-neutral-500 bg-neutral-50/30 dark:bg-neutral-900/5"
                      : "text-neutral-500 dark:text-neutral-400"
                  }`}
                >
                  {row.standard}
                </div>

                {/* Center Connector: Continuous Vertical Timeline Stepper */}
                <div
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className={`hidden relative items-center justify-center border-t border-neutral-200 px-6 dark:border-neutral-800 lg:flex transition-colors duration-200 ${
                    isHovered ? "bg-neutral-50/30 dark:bg-neutral-900/5" : ""
                  }`}
                >
                  {/* Background Track Line (Gray) */}
                  <div
                    className={`absolute left-1/2 w-0.5 -translate-x-1/2 bg-neutral-100 dark:bg-neutral-800 transition-colors duration-200 ${
                      i === 0 ? "top-1/2 bottom-0" : i === ROWS.length - 1 ? "top-0 bottom-1/2" : "top-0 bottom-0"
                    }`}
                  />
                  
                  {/* Hover Active filling track line (Accent color) */}
                  <div
                    className={`absolute left-1/2 w-0.5 -translate-x-1/2 bg-accent transition-all duration-300 origin-center ${
                      i === 0 ? "top-1/2 bottom-0" : i === ROWS.length - 1 ? "top-0 bottom-1/2" : "top-0 bottom-0"
                    } ${isHovered ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
                  />

                  {/* Circular indicator node */}
                  <span
                    className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-mono transition-all duration-300 ${
                      isHovered
                        ? "border-accent bg-accent text-white font-semibold shadow-sm scale-115"
                        : "border-neutral-200 bg-white text-neutral-400 dark:border-neutral-800 dark:bg-neutral-950"
                    }`}
                  >
                    0{i + 1}
                  </span>
                </div>

                {/* The Accredian Edge Row Cell */}
                <div
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className={`relative border-t border-neutral-200 p-5 text-sm font-medium text-neutral-900 transition-all duration-200 dark:border-neutral-800 dark:text-white ${
                    isHovered ? "bg-neutral-50/30 dark:bg-neutral-900/5" : ""
                  }`}
                >
                  <span
                    className={`transition-colors duration-200 ${
                      isHovered ? "text-accent" : ""
                    }`}
                  >
                    {row.edge}
                  </span>

                  {/* Interactive Floating Hover detail popup card */}
                  {isHovered && (
                    <div className="absolute left-1/2 top-full z-20 mt-2 w-64 -translate-x-1/2 rounded-md border border-neutral-200 bg-white p-3 text-xs leading-relaxed text-neutral-500 shadow-xl dark:border-neutral-800 dark:bg-surface-dark-raised dark:text-neutral-400 animate-in fade-in slide-in-from-top-1 duration-200">
                      {row.detail}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}