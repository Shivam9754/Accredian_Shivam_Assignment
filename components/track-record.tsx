"use client";

import { useEffect, useState } from "react";
import { CountUp } from "./count-up";

interface Stat {
  target: number;
  suffix: string;
  label: string;
  // relative quarterly progression feeding the mini rising bars, 0-100
  quarters: number[];
  image: string;
  caption: string;
}

const STATS: Stat[] = [
  {
    target: 10000,
    suffix: "+",
    label: "Professionals trained",
    quarters: [38, 55, 74, 100],
    image: "/images/track-record-1.jpg",
    caption: "Real-world upskilling across manufacturing and operations teams.",
  },
  {
    target: 200,
    suffix: "+",
    label: "Sessions delivered",
    quarters: [30, 48, 68, 92],
    image: "/images/track-record-2.jpg",
    caption: "Hands-on sessions designed for industrial leaders and technical groups.",
  },
  {
    target: 5000,
    suffix: "+",
    label: "Active learners",
    quarters: [42, 61, 80, 100],
    image: "/images/track-record-3.jpg",
    caption: "Learner engagement layered over active production and service environments.",
  },
];

function StatCard({ stat }: { stat: Stat }) {
  const xLabels = ["Jan", "Apr", "Jul", "Oct"];
  const yLabels = ["100", "75", "50", "25", "0"];

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      // UPGRADED: Added shadow-md, a slightly tighter border, and a premium lifting hover transition
      className="overflow-hidden rounded-2xl border border-neutral-200/90 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-800 dark:bg-surface-dark-raised dark:hover:translate-y-0"
    >
      <div className="relative h-36 overflow-hidden rounded-t-lg">
        <img
          src={stat.image}
          alt={`${stat.label} illustration`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <p className="text-xs uppercase tracking-[0.18em] text-white/70">
            {stat.label}
          </p>
          <h3 className="mt-2 text-3xl font-semibold sm:text-4xl">
            <CountUp target={stat.target} suffix={stat.suffix} />
          </h3>
          <p className="mt-3 max-w-[85%] text-sm text-white/80">
            {stat.caption}
          </p>
        </div>
      </div>

      <div className="relative px-5 pb-8 pt-8">
        <div className="relative h-48">
          <div className="absolute inset-0">
            <div className="h-full grid grid-rows-4 border-l border-neutral-200/70 dark:border-neutral-700/60">
              {yLabels.slice(0, -1).map((label, index) => (
                <div
                  key={label}
                  className={`border-b ${
                    index === yLabels.length - 2
                      ? "border-transparent"
                      : "border-b border-neutral-200/70 dark:border-neutral-700/60"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative flex h-full gap-3 items-end">
            <div className="flex h-full w-10 flex-col justify-between text-[10px] text-neutral-500 dark:text-neutral-400">
              {yLabels.map((label) => (
                <span key={label} className="leading-none">
                  {label}
                </span>
              ))}
            </div>
            
            <div className="flex h-full flex-1 items-end gap-3 pb-1">
              {stat.quarters.map((value, i) => (
                <div key={i} className="relative h-full flex-1 flex flex-col justify-end">
                  <div className="absolute inset-y-0 left-0 border-l border-neutral-200/70 dark:border-neutral-700/60" />
                  <div
                    // FLAT TOP OPTION: Changed rounded-t-2xl to rounded-none as requested
                    className="relative mx-auto w-1/2 rounded-none bg-gradient-to-t from-blue-700 to-sky-400"
                    style={{
                      height: isMounted ? `${value}%` : "0%",
                      transition: `height 1100ms cubic-bezier(0.16, 1, 0.3, 1)`,
                      transitionDelay: `${i * 120}ms`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-10 right-0 h-px bg-neutral-200/70 dark:bg-neutral-700/60" />
          <div className="absolute bottom-[-16px] left-10 right-0 flex items-center justify-between text-[10px] text-neutral-500">
            {xLabels.map((label) => (
              <span key={label} className="w-full text-center">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TrackRecord() {
  return (
    <section
      id="track-record"
      // UPGRADED: Added bg-neutral-50/70 to give the section a subtle off-white backplate in light mode.
      className="border-t border-neutral-200 py-24 bg-neutral-50/70 dark:bg-transparent dark:border-neutral-800"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-xl">
          <span className="text-xs font-medium uppercase tracking-wide text-accent">
            The numbers behind our success
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tightest text-neutral-900 dark:text-white">
            Our track record
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}