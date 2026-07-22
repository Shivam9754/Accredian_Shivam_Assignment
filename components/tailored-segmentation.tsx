"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    id: "01",
    title: "Role Profiling",
    detail:
      "We map every learner against their actual role — not a generic persona — to identify the specific skill gaps that matter for their day-to-day work.",
    image: "/images/segmentation-role-profiling.jpg.jpeg",
  },
  {
    id: "02",
    title: "Budget Mapping",
    detail:
      "Training spend is allocated against measurable outcomes, so every rupee traces back to a skill gap it was meant to close.",
    image: "/images/segmentation-budget-mapping.jpg.jpeg",
  },
  {
    id: "03",
    title: "Cohort Alignment",
    detail:
      "Learners are grouped by level and domain, not just by department, so every session speaks directly to the people in the room.",
    image: "/images/segmentation-cohort-alignment.jpg",
  },
  {
    id: "04",
    title: "Creative Sandbox",
    detail:
      "Hands-on labs let teams apply concepts against real, sandboxed problems before anything touches production.",
    image: "/images/segmentation-creative-sandbox.jpg.jpeg",
  },
  {
    id: "05",
    title: "Production Deploy",
    detail:
      "The final phase moves learning into practice with structured checkpoints, so new skills show up in real output — not just in a certificate.",
    image: "/images/segmentation-production-deploy.jpg.jpeg",
  },
] as const;

function SegmentationIllustration({ id }: { id: string }) {
  const common = {
    width: 64,
    height: 64,
    viewBox: "0 0 64 64",
    fill: "none",
    className: "h-16 w-16",
  };

  switch (id) {
    case "01":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="8" y="8" width="48" height="48" rx="14" fill="#eff6ff" />
          <circle cx="24" cy="28" r="6" fill="#1d4af5" />
          <circle cx="38" cy="24" r="4" fill="#60a5fa" />
          <circle cx="38" cy="38" r="4" fill="#93c5fd" />
          <path d="M18 42c4-4 10-4 14 0" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "02":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="8" y="8" width="48" height="48" rx="14" fill="#eff6ff" />
          <rect x="18" y="34" width="8" height="14" rx="2" fill="#1d4af5" />
          <rect x="30" y="26" width="8" height="22" rx="2" fill="#60a5fa" />
          <rect x="42" y="20" width="8" height="28" rx="2" fill="#93c5fd" />
          <path d="M18 44l10-8 8 6 10-12" stroke="#1d4af5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "03":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="8" y="8" width="48" height="48" rx="14" fill="#eff6ff" />
          <circle cx="22" cy="22" r="5" fill="#1d4af5" />
          <circle cx="42" cy="22" r="5" fill="#60a5fa" />
          <circle cx="22" cy="42" r="5" fill="#93c5fd" />
          <circle cx="42" cy="42" r="5" fill="#1e40af" />
          <path d="M27 22h10M27 42h10M22 27v10M42 27v10" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "04":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="8" y="8" width="48" height="48" rx="14" fill="#eff6ff" />
          <path d="M18 30l14-10 14 10v14a2 2 0 0 1-2 2H20a2 2 0 0 1-2-2V30Z" fill="#60a5fa" />
          <path d="M18 30l14 10 14-10" stroke="#1d4af5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32 20v10" stroke="#1d4af5" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "05":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="8" y="8" width="48" height="48" rx="14" fill="#eff6ff" />
          <path d="M26 40l6-10 12-4-8 12-10 2Z" fill="#1d4af5" />
          <path d="M34 18l10 6-4 8-10-6 4-8Z" fill="#60a5fa" />
          <path d="M22 46l20-20" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
          <circle cx="38" cy="24" r="3" fill="#93c5fd" />
        </svg>
      );
    default:
      return null;
  }
}

export function TailoredSegmentation() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const totalSteps = STEPS.length;
    const maxIndex = totalSteps - 1;
    let ticking = false;

    const updateProgress = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
        const clamped = Math.min(Math.max(progress, 0), 1);
        const position = clamped * maxIndex;
        const nextIndex = Math.min(maxIndex, Math.floor(position));
        const stepProgress = Math.round((position - nextIndex) * 100);

        setActiveIndex(nextIndex);
        setProgress(stepProgress);
        ticking = false;
      });
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  function handleStepClick(index: number) {
    setActiveIndex(index);
    setProgress(0);
  }

  const active = STEPS[activeIndex];

  return (
    <section
      id="segmentation"
      ref={sectionRef}
      className="border-t border-neutral-200 py-24 dark:border-neutral-800"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-xl">
          <span className="text-xs font-medium uppercase tracking-wide text-accent">
            Explore custom-fit courses
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tightest text-neutral-900 dark:text-white">
            Tailored course segmentation
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-[340px_1fr]">
          {/* left: vertical stepper */}
          <div className="relative space-y-1">
            {/* Background Track Line */}
            <div className="absolute left-[11px] top-[32px] bottom-[32px] w-0.5 bg-neutral-100 dark:bg-neutral-800" />
            
            {/* Active filling track line */}
            <div
              className="absolute left-[11px] top-[32px] w-0.5 bg-accent transition-all duration-300 ease-out"
              style={{
                height: `calc((100% - 64px) * ${(activeIndex + progress / 100) / (STEPS.length - 1)})`,
              }}
            />

            {STEPS.map((step, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;
              return (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(index)}
                  className="group relative flex w-full items-start rounded-md py-4 pl-10 pr-3 text-left transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
                >
                  {/* Timeline Circular Node */}
                  <span
                    className={`absolute left-0 top-[18px] flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-mono transition-all duration-300 z-10 ${
                      isActive
                        ? "border-accent bg-accent text-white font-semibold shadow-sm"
                        : isPast
                        ? "border-accent bg-accent text-white"
                        : "border-neutral-200 bg-white text-neutral-400 dark:border-neutral-800 dark:bg-neutral-950"
                    }`}
                  >
                    {step.id}
                  </span>

                  {/* Step Title Content */}
                  <span className="flex-1">
                    <span
                      className={`block text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-neutral-900 dark:text-white"
                          : "text-neutral-500 dark:text-neutral-400"
                      }`}
                    >
                      {step.title}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* right: fading detail panel */}
          <div className="relative rounded-lg border border-neutral-200 p-8 dark:border-neutral-800">
            <div key={active.id} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-sky-50 dark:bg-white/5">
                  <SegmentationIllustration id={active.id} />
                </div>
                <div>
                  <span className="font-mono text-xs text-accent">{active.id}</span>
                  <h3 className="mt-2 text-xl font-semibold text-neutral-900 dark:text-white">
                    {active.title}
                  </h3>
                </div>
              </div>
              <div className="mb-6 overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
                <img
                  src={active.image}
                  alt={`${active.title} illustration`}
                  className="h-48 w-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/images/segmentation-support.jpg";
                  }}
                />
              </div>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                {active.detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}