import { CtaButton } from "./cta-button";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* directional gradient glow behind the headline — dark-mode signature moment */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-220px] h-[520px] w-[900px] -translate-x-1/2 opacity-0 blur-3xl dark:opacity-100"
        style={{
          background:
            "radial-gradient(closest-side, rgba(29,74,245,0.22), rgba(29,74,245,0.08) 45%, rgba(29,74,245,0) 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-[0.06] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div
              aria-hidden
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-500 dark:border-neutral-800 dark:text-neutral-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Enterprise learning, built for scale
            </div>

            <h1 
              // UPGRADED: Increased text sizes to text-5xl on mobile, sm:text-6xl on tablet, and lg:text-7xl on desktop
              className="max-w-2xl bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text text-5xl font-semibold leading-[1.08] tracking-tightest text-transparent dark:from-white dark:to-neutral-400 sm:text-6xl lg:text-7xl"
            >
              Next-gen expertise for your enterprise.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
              Cultivate high-performance teams through expert learning — tailored
              programs, real practitioners, measured against outcomes your
              business actually tracks.
            </p>

            <div className="mt-9 flex items-center gap-3">
              <CtaButton />
              <a
                href="#track-record"
                className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                See the track record →
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-white/85 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:shadow-[0_40px_120px_rgba(30,64,175,0.12)] dark:border-neutral-800 dark:bg-surface-dark-raised">
            <img
              src="/images/hero-photo.jpg"
              alt="Team collaborating in a modern enterprise workspace"
              className="h-[280px] w-full object-cover sm:h-[340px] lg:h-[420px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent px-6 py-5 text-sm text-white">
              <p className="font-medium">Powered learning design for faster adoption.</p>
              <p className="mt-1 text-xs text-neutral-200">
                A strong real-world scene to anchor your enterprise training story.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* razor-thin bottom border, no glow/mesh */}
      <div className="mt-24 border-t border-neutral-200 dark:border-neutral-800" />
    </section>
  );
}