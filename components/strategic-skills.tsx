"use client";

import { useState } from "react";

const SKILLS = [
  {
    icon: "innovation",
    title: "Product & Innovation Hub",
    desc: "Frameworks for shipping product decisions under real constraints, with discovery sprints, rapid prioritization, and stakeholder alignment built in.",
  },
  {
    icon: "genai",
    title: "Gen-AI Mastery",
    desc: "Applied LLM workflows built for enterprise data and guardrails, helping teams prototype safe, scalable automation for real business use cases.",
  },
  {
    icon: "leadership",
    title: "Leadership Elevation",
    desc: "Structured judgment training for managers moving into scope, focusing on escalation, decision accountability, and influence across functions.",
  },
  {
    icon: "insights",
    title: "Tech & Data Insights",
    desc: "Reading signal from noise across dashboards that matter, converting messy operational data into clear business actions.",
  },
  {
    icon: "operations",
    title: "Operations Excellence",
    desc: "Process discipline that survives contact with scale, embedding repeatable rhythms, handoffs, and impact-focused operating cadences.",
  },
  {
    icon: "digital",
    title: "Digital Enterprise",
    desc: "Cross-functional fluency for teams shipping across surfaces, aligning product, design, and delivery on shared outcomes.",
  },
  {
    icon: "fintech",
    title: "Fintech Innovation Lab",
    desc: "Regulatory-aware building for teams shipping financial products, balancing compliance, speed, and customer-facing rigor.",
  },
  {
    icon: "systems",
    title: "Systems Thinking",
    desc: "Seeing second-order effects before they hit a roadmap, mapping dependencies across people, tech, and process design.",
  },
  {
    icon: "cross-domain",
    title: "Cross-Domain Fluency",
    desc: "Enough range to work across functions without a translator, translating strategy into practical execution across teams.",
  },
] as const;

function SkillGraphic({ type }: { type: string }) {
  switch (type) {
    case "innovation":
      return (
        <svg viewBox="0 0 48 48" className="h-7 w-7" aria-hidden="true">
          <circle cx="16" cy="16" r="6" fill="#1d4af5" />
          <circle cx="32" cy="16" r="5" fill="#60a5fa" />
          <circle cx="24" cy="32" r="5" fill="#93c5fd" />
          <path d="M20 20l4 6 6-8" stroke="#1d4af5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 20c2-3 6-4 9-2" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "genai":
      return (
        <svg viewBox="0 0 48 48" className="h-7 w-7" aria-hidden="true">
          <path d="M15 16a6 6 0 1 1 8 5.5" fill="none" stroke="#1d4af5" strokeWidth="3" strokeLinecap="round" />
          <path d="M33 16a6 6 0 1 0-8 5.5" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" />
          <circle cx="24" cy="32" r="4" fill="#93c5fd" />
          <path d="M24 20v6" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "leadership":
      return (
        <svg viewBox="0 0 48 48" className="h-7 w-7" aria-hidden="true">
          <path d="M16 30l8-14 8 14" fill="none" stroke="#1d4af5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="24" cy="14" r="4" fill="#60a5fa" />
          <path d="M16 34h16" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "insights":
      return (
        <svg viewBox="0 0 48 48" className="h-7 w-7" aria-hidden="true">
          <rect x="14" y="18" width="6" height="16" rx="2" fill="#1d4af5" />
          <rect x="22" y="14" width="6" height="20" rx="2" fill="#60a5fa" />
          <rect x="30" y="24" width="6" height="10" rx="2" fill="#93c5fd" />
          <path d="M13 34l6-8 6 4 6-10 6 6" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "operations":
      return (
        <svg viewBox="0 0 48 48" className="h-7 w-7" aria-hidden="true">
          <circle cx="24" cy="24" r="6" fill="#1d4af5" />
          <path d="M24 10v6M24 32v6M10 24h6M32 24h6M17 17l4 4M27 27l4 4M17 31l4-4M27 17l4-4" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "digital":
      return (
        <svg viewBox="0 0 48 48" className="h-7 w-7" aria-hidden="true">
          <circle cx="24" cy="24" r="10" fill="#1d4af5" />
          <path d="M24 14a10 10 0 0 1 0 20M34 24a10 10 0 0 1-20 0M24 14v20" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" />
          <path d="M14 24h20" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "fintech":
      return (
        <svg viewBox="0 0 48 48" className="h-7 w-7" aria-hidden="true">
          <rect x="12" y="18" width="24" height="14" rx="4" fill="#1d4af5" />
          <path d="M16 24h16" stroke="#eff6ff" strokeWidth="3" strokeLinecap="round" />
          <circle cx="34" cy="31" r="3" fill="#60a5fa" />
          <path d="M24 21v8" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "systems":
      return (
        <svg viewBox="0 0 48 48" className="h-7 w-7" aria-hidden="true">
          <circle cx="24" cy="24" r="10" fill="#1d4af5" />
          <circle cx="24" cy="24" r="5" fill="#60a5fa" />
          <path d="M24 14v20M14 24h20" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "cross-domain":
      return (
        <svg viewBox="0 0 48 48" className="h-7 w-7" aria-hidden="true">
          <rect x="12" y="12" width="24" height="24" rx="6" fill="#1d4af5" />
          <rect x="18" y="18" width="12" height="12" rx="4" fill="#60a5fa" />
          <path d="M12 24h24M24 12v24" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

// split into rows of 3 so the "grow one, shrink neighbors" effect
// happens within each row via flex-grow, not across the whole grid.
const ROWS = [SKILLS.slice(0, 3), SKILLS.slice(3, 6), SKILLS.slice(6, 9)];

export function StrategicSkills() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="border-t border-neutral-200 py-24 dark:border-neutral-800"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-xl">
          <span className="text-xs font-medium uppercase tracking-wide text-accent">
            Who should join
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tightest text-neutral-900 dark:text-white">
            Strategic skill enhancement
          </h2>
          <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
            Hover any card to see it take the lead.
          </p>
        </div>

        <div className="space-y-px overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
          {ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-col sm:flex-row">
              {row.map((skill, i) => {
                const globalIndex = rowIndex * 3 + i;
                const isActive = hovered === skill.title;
                const isRowHovered = row.some((s) => s.title === hovered);
 
                return (
                  <div
                    key={skill.title}
                    onMouseEnter={() => setHovered(skill.title)}
                    onMouseLeave={() => setHovered(null)}
                    className={`group relative border-t border-neutral-200 bg-white p-6 shadow-sm transition-all duration-1000 ease-out first:border-t-0 dark:border-neutral-800 dark:bg-surface-dark-raised sm:border-l sm:border-t-0 sm:first:border-l-0 ${
                      isActive
                        ? "flex-[2] bg-neutral-50 shadow-[0_24px_90px_-48px_rgba(29,74,245,0.35)] dark:bg-neutral-900"
                        : isRowHovered
                        ? "flex-[0.75] opacity-70"
                        : "flex-1"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-3xl transition-all duration-1000 ${
                          isActive
                            ? "bg-accent text-white shadow-lg"
                            : "bg-sky-50 text-sky-700 dark:bg-white/5 dark:text-sky-300"
                        }`}
                      >
                        <SkillGraphic type={skill.icon} />
                      </span>
                      <span className="font-mono text-xs text-neutral-300 dark:text-neutral-700">
                        {String(globalIndex + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3
                      className={`mt-4 font-semibold text-neutral-900 transition-all duration-1000 dark:text-white ${
                        isActive ? "text-base" : "text-sm"
                      }`}
                    >
                      {skill.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                      {skill.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
