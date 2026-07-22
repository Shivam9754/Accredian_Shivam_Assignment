import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrackRecord } from "@/components/track-record";
import { HowItWorks } from "@/components/how-it-works";
import { TailoredSegmentation } from "@/components/tailored-segmentation";
import { StrategicSkills } from "@/components/strategic-skills";
import { AccredianEdge } from "@/components/accredian-edge";
import { CtaButton } from "@/components/cta-button";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-light dark:bg-surface-dark">
      <Navbar />
      <Hero />
      <TrackRecord />
      <HowItWorks />
      <TailoredSegmentation />
      <StrategicSkills />
      <AccredianEdge />

      <section className="border-t border-neutral-200 py-24 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-neutral-200 bg-white p-10 shadow-sm dark:border-neutral-800 dark:bg-surface-dark-raised sm:flex-row sm:items-center sm:gap-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tightest text-neutral-900 dark:text-white">
                Want to learn more about our training solutions?
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-neutral-500 dark:text-neutral-400">
                Get expert guidance for your team&apos;s success, then use the enquiry form to tell us your goals, delivery preferences and cohort priorities.
              </p>
            </div>
            <CtaButton label="Contact Us" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
