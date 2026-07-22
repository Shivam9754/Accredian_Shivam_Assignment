"use client";

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const MOVES = [
  {
    id: "01",
    kicker: "Compose",
    title: "One brief, mapped to your teams.",
    detail:
      "Pick an outcome, set the budget, choose the level. No platform picker, no separate deck per team — you build the brief once.",
    image: "/images/how-it-works-photo.jpg",
    caption: "Briefing and planning with the whole team aligned to outcomes.",
  },
  {
    id: "02",
    kicker: "Distribute",
    title: "Accredian fans it out.",
    detail:
      "The brief is translated cohort-by-cohort with role-correct mapping. Pacing and content mix follow the rules you set, automatically.",
    image: "/images/how-it-works-photo.jpg",
    caption: "Automated distribution shapes the learning flow for every cohort.",
  },
  {
    id: "03",
    kicker: "Monitor",
    title: "One place to watch it land.",
    detail:
      "Completion, engagement and skill-impact reconcile into a single view — no tab per cohort, no spreadsheet reconciliation.",
    image: "/images/how-it-works-photo.jpg",
    caption: "Visibility across completion, engagement and skill impact in one dashboard.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Visual 1 — Compose: five-step wizard                               */
/* ------------------------------------------------------------------ */

const WIZARD_STEPS = ["Goal", "Budget", "Teams", "Curriculum", "Review"];

function ComposeVisual({ active }: { active: boolean }) {
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
    if (!active) {
      setCursor(0);
      return;
    }
    const id = setInterval(() => {
      setCursor((c) => (c + 1) % (WIZARD_STEPS.length + 1));
    }, 900);
    return () => clearInterval(id);
  }, [active]);

  return (
    // Changed card to match dark website background
    <div className="w-full max-w-sm rounded-lg border border-neutral-200 bg-transparent p-5 dark:border-neutral-800">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[10px] text-neutral-400">
          accredian / plans / new{" "}
          <span className="text-neutral-300 dark:text-neutral-600">
            · auto-saved
          </span>
        </span>
      </div>
      <div className="space-y-2.5">
        {WIZARD_STEPS.map((label, i) => {
          const done = i < cursor;
          const isCurrent = i === cursor;
          return (
            <div
              key={label}
              className="flex items-center gap-3 rounded-md px-2.5 py-2 transition-colors duration-300"
              style={{
                backgroundColor: isCurrent
                  ? "rgba(29,74,245,0.08)"
                  : "transparent",
              }}
            >
              <span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] transition-all duration-300"
                style={{
                  backgroundColor: done
                    ? "#1d4af5"
                    : isCurrent
                    ? "transparent"
                    : "transparent",
                  border: done
                    ? "none"
                    : isCurrent
                    ? "1.5px solid #1d4af5"
                    : "1.5px solid rgb(212 212 212)",
                  color: done ? "white" : isCurrent ? "#1d4af5" : "#a3a3a3",
                }}
              >
                {done ? "✓" : i + 1}
              </span>
              <span
                className={`text-sm transition-colors duration-300 ${
                  isCurrent
                    ? "font-medium text-neutral-900 dark:text-white"
                    : done
                    ? "text-neutral-400 dark:text-neutral-500"
                    : "text-neutral-400 dark:text-neutral-600"
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Visual 2 — Distribute: hub & spoke, marching-ants dashed lines      */
/* ------------------------------------------------------------------ */

const COHORTS = [
  { code: "IC", label: "Individual" },
  { code: "MGR", label: "Manager" },
  { code: "LEAD", label: "Team Lead" },
  { code: "EXEC", label: "Executive" },
];

function DistributeVisual({ active }: { active: boolean }) {
  const cx = 90;
  const cy = 100;
  const positions = [
    { x: 220, y: 30 },
    { x: 260, y: 100 },
    { x: 220, y: 170 },
    { x: 150, y: 190 },
  ];

  return (
    // Changed card to match dark website background
    <div className="w-full max-w-sm rounded-lg border border-neutral-200 bg-transparent p-5 dark:border-neutral-800">
      <div className="mb-1 font-mono text-[10px] text-neutral-400">
        brief → cohorts
      </div>
      <svg viewBox="0 0 300 210" className="h-[210px] w-full">
        {positions.map((p, i) => (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={p.x}
            y2={p.y}
            stroke="#1d4af5"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity={active ? 0.55 : 0.15}
            style={{
              transition: "opacity 400ms ease",
              animation: active
                ? `dash-march 1.4s linear infinite`
                : "none",
            }}
          />
        ))}

        {/* hub */}
        <circle cx={cx} cy={cy} r="22" fill="#1d4af5" opacity="0.08" />
        <circle
          cx={cx}
          cy={cy}
          r="14"
          fill="#1d4af5"
          opacity={active ? "1" : "0.5"}
          style={{ transition: "opacity 400ms ease" }}
        />
        <text
          x={cx}
          y={cy + 3}
          textAnchor="middle"
          fontSize="8"
          fontFamily="monospace"
          fill="white"
        >
          brief
        </text>

        {/* satellites */}
        {positions.map((p, i) => (
          <g
            key={i}
            style={{
              opacity: active ? 1 : 0.35,
              transition: `opacity 400ms ease ${i * 80}ms`,
            }}
          >
            <rect
              x={p.x - 24}
              y={p.y - 12}
              width="48"
              height="24"
              rx="6"
              className="fill-neutral-50 dark:fill-neutral-900"
              stroke="#e5e5e5"
              strokeWidth="1"
            />
            <text
              x={p.x}
              y={p.y + 3}
              textAnchor="middle"
              fontSize="8"
              fontFamily="monospace"
              fontWeight="600"
              className="fill-neutral-700 dark:fill-neutral-300"
            >
              {COHORTS[i].code}
            </text>
          </g>
        ))}
      </svg>
      <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
        {COHORTS.map((c) => (
          <span
            key={c.code}
            className="font-mono text-[9px] text-neutral-400"
          >
            {c.code} <span className="text-neutral-300 dark:text-neutral-700">· {c.label}</span>
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes dash-march {
          to {
            stroke-dashoffset: -16;
          }
        }
      `}</style>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Visual 3 — Monitor: unified dashboard, cycling metric tabs          */
/* ------------------------------------------------------------------ */

const METRICS = [
  { label: "Completion", value: 92, series: [40, 55, 63, 70, 81, 87, 92] },
  { label: "Engagement", value: 76, series: [30, 38, 45, 52, 60, 68, 76] },
  { label: "Skill impact", value: 64, series: [20, 28, 33, 41, 50, 57, 64] },
];

function MonitorVisual({ active }: { active: boolean }) {
  const [tab, setTab] = useState(0);

  useEffect(() => {
    if (!active) {
      setTab(0);
      return;
    }
    const id = setInterval(() => setTab((t) => (t + 1) % METRICS.length), 1600);
    return () => clearInterval(id);
  }, [active]);

  const metric = METRICS[tab];

  return (
    // Changed card to match dark website background
    <div className="w-full max-w-sm rounded-lg border border-neutral-200 bg-transparent p-5 dark:border-neutral-800">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex gap-1.5">
          {METRICS.map((m, i) => (
            <button
              key={m.label}
              onClick={() => setTab(i)}
              className="rounded-full px-2.5 py-1 font-mono text-[9px] transition-colors duration-300"
              style={{
                backgroundColor: i === tab ? "#1d4af5" : "transparent",
                color: i === tab ? "white" : "#a3a3a3",
                border: i === tab ? "none" : "1px solid #e5e5e5",
              }}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <div key={tab} className="animate-in fade-in duration-300">
        <div className="font-mono text-2xl font-semibold text-neutral-900 dark:text-white">
          {metric.value}
          <span className="text-sm text-neutral-400">%</span>
        </div>
        <div className="mt-0.5 text-[10px] text-neutral-400">
          {metric.label} · 7 cohorts · live
        </div>

        <div className="mt-4 flex h-20 items-end gap-1.5">
          {metric.series.map((v, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm"
              style={{
                height: `${v}%`,
                background: "linear-gradient(to top, #1d4af5, #60a5fa 65%, #93c5fd)",
                transition: "height 600ms cubic-bezier(0.16,1,0.3,1)",
                transitionDelay: `${i * 60}ms`,
              }}
            />
          ))}
        </div>
        <div className="mt-1.5 flex gap-1.5 text-[8px] text-neutral-300 dark:text-neutral-700">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
            <span key={d} className="flex-1 text-center">
              {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main Sticky Horizontal Scroll Section                              */
/* ------------------------------------------------------------------ */

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      const distance = -rect.top;
      const scrollableHeight = totalHeight - viewportHeight;

      let pct = distance / scrollableHeight;
      pct = Math.min(Math.max(pct, 0), 1);
      setScrollProgress(pct);

      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const maxTranslate = Math.max(0, trackWidth - viewportWidth + 120);

      setTranslateX(pct * maxTranslate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  function goTo(index: number) {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const absoluteTop = rect.top + window.scrollY;
    const scrollableHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targetScrollY = absoluteTop + (index / (MOVES.length - 1)) * scrollableHeight;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  }

  const activeIndex = Math.min(MOVES.length - 1, Math.floor(scrollProgress * (MOVES.length - 0.01)));

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="relative border-t border-neutral-200 bg-transparent h-[300vh] dark:border-neutral-800"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-10">
        
        {/* Title portion */}
        <div className="mx-auto max-w-6xl w-full px-6 mb-8 shrink-0">
          <div className="max-w-xl">
            <span className="text-xs font-medium uppercase tracking-wide text-accent">
              How it works
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tightest text-neutral-900 dark:text-white">
              From one brief to every team, in three moves.
            </h2>
          </div>
        </div>

        {/* Step tabs progress */}
        <div className="mx-auto max-w-6xl w-full px-6 mb-8 shrink-0">
          <div className="flex gap-8 border-b border-neutral-200 dark:border-neutral-800">
            {MOVES.map((m, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={m.id}
                  onClick={() => goTo(i)}
                  className="group relative pb-4 text-left"
                >
                  <span className="font-mono text-[10px] text-accent">
                    {m.kicker} · {m.id}
                  </span>
                  <span
                    className={`block text-sm font-medium ${
                      isActive
                        ? "text-neutral-900 dark:text-white"
                        : "text-neutral-400 dark:text-neutral-600"
                    }`}
                  >
                    {m.title.split(" ").slice(0, 3).join(" ")}
                  </span>
                  <span
                    className="absolute -bottom-px left-0 h-[2px] bg-accent transition-all"
                    style={{
                      width: i === activeIndex
                        ? `${(scrollProgress * MOVES.length - i) * 100}%`
                        : i < activeIndex
                        ? "100%"
                        : "0%",
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Horizontal sliding viewport (Made transparent to blend directly with the website's background) */}
        <div className="relative w-full overflow-hidden flex-1 flex items-center">
          <div
            ref={trackRef}
            className="flex gap-10 px-6 md:px-24 transition-transform duration-100 ease-out"
            style={{
              transform: `translateX(-${translateX}px)`,
            }}
          >
            {MOVES.map((move, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={move.id}
                  // REMOVED: borders, rounded card outlines, shadow styles, and white/gray background styling
                  className="flex h-[360px] w-[85vw] max-w-4xl shrink-0 p-4 grid md:grid-cols-[1.1fr_1fr] gap-12 transition-all duration-300 sm:h-[420px]"
                >
                  {/* Left Column: Text and integrated photo panel */}
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <span className="font-mono text-xs text-accent">
                        {move.kicker} · {move.id}
                      </span>
                      <h3 className="mt-2 text-2xl font-semibold text-neutral-900 dark:text-white">
                        {move.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                        {move.detail}
                      </p>
                    </div>

                    {/* Image overlay box (changed bg to transparent so it floats seamlessly) */}
                    <div className="mt-4 flex gap-4 items-center overflow-hidden rounded-2xl border-none bg-transparent p-0">
                      <img
                        src={move.image}
                        alt={move.caption}
                        className="h-14 w-20 rounded-lg object-cover shrink-0"
                      />
                      <div className="text-xs text-neutral-600 dark:text-neutral-300 leading-snug">
                        {move.caption}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Live Interactive Visual Dashboard (changed bg to transparent) */}
                  <div className="flex items-center justify-center bg-transparent rounded-2xl p-4">
                    {index === 0 && <ComposeVisual active={isActive} />}
                    {index === 1 && <DistributeVisual active={isActive} />}
                    {index === 2 && <MonitorVisual active={isActive} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}