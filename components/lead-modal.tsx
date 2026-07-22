"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { X, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useLeadModal } from "./lead-modal-context";

type Status = "idle" | "submitting" | "success" | "error";

export function LeadModal() {
  const { isOpen, closeModal } = useLeadModal();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

  // Reset state a beat after close so the closing animation doesn't flash content.
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setStatus("idle");
        setErrorMessage(null);
      }, 250);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") || ""),
      workEmail: String(formData.get("workEmail") || ""),
      companyName: String(formData.get("companyName") || ""),
      message: String(formData.get("message") || ""),
    };

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={closeModal}
      />

      <div
        ref={dialogRef}
        className="relative w-full max-w-4xl overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-white shadow-[0_24px_70px_-28px_rgba(15,23,42,0.35)] transition-transform duration-500 ease-out animate-in fade-in slide-in-from-bottom-8 dark:border-neutral-800 dark:bg-surface-dark-raised"
      >
        <button
          onClick={closeModal}
          aria-label="Close dialog"
          className="absolute right-4 top-4 z-10 rounded-md p-1 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        {status === "success" ? (
          <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="hidden lg:block relative overflow-hidden rounded-bl-[1.5rem] rounded-tl-[1.5rem] bg-slate-950 text-white">
            <img
              src="/images/contact-photo.jpg"
              alt="Team collaborating on a learning strategy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/70" />
            <div className="relative flex h-full flex-col justify-between p-10">
              <div className="space-y-4">
                <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/90">
                  Enterprise enquiry
                </span>
                <h3 className="text-2xl font-semibold tracking-tight">
                  Your request is on the way
                </h3>
                <p className="max-w-sm text-sm leading-6 text-white/80">
                  We&apos;ve received your note. One of our advisors will be in touch during the next working day.
                </p>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/10 p-4 text-sm text-white/85 shadow-inner">
                <p className="font-semibold">What happens next</p>
                <p className="mt-2 text-xs leading-5 text-white/75">
                  Your message is routed to our enterprise team, who will connect you with the right learning advisor.
                </p>
              </div>
            </div>
             </div>
            <div className="space-y-6 p-6 sm:p-8">
              <div className="space-y-3">
                <CheckCircle2 className="h-10 w-10 text-accent" />
                <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                  Thanks — we got it.
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  An advisor will reach out within one working day.
                </p>
              </div>
              <button
                onClick={closeModal}
                className="mt-2 inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:border-accent hover:text-accent dark:border-neutral-800 dark:bg-surface-dark-raised dark:text-white"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="hidden lg:block relative overflow-hidden rounded-bl-[1.5rem] rounded-tl-[1.5rem] bg-slate-950 text-white">
              <img
                src="/images/contact-photo.jpg"
                alt="Team collaborating on a learning strategy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/70" />
              <div className="relative flex h-full flex-col justify-between p-10">
                <div className="space-y-4">
                  <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/90">
                    Tailored enterprise inquiry
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    Start the conversation
                  </h3>
                  <p className="max-w-sm text-sm leading-6 text-white/80">
                    Share your team’s needs and we’ll propose the right learning path, delivery model, and next steps.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/15 bg-white/10 p-4 text-sm text-white/85 shadow-inner">
                  <p className="font-semibold">Quick response</p>
                  <p className="mt-2 text-xs leading-5 text-white/75">
                    Our advisors reply within one working day with a custom follow-up.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3
                id="lead-modal-title"
                className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white"
              >
                Enquire Now
              </h3>
              <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                Tell us about your team and the outcomes you want to achieve.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <Field
                  name="fullName"
                  label="Full Name"
                  placeholder="Jane Doe"
                  required
                />
                <Field
                  name="workEmail"
                  label="Work Email"
                  placeholder="jane@company.com"
                  type="email"
                  required
                />
                <Field
                  name="companyName"
                  label="Company Name"
                  placeholder="Acme Corp"
                  required
                />
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-medium text-neutral-500 dark:text-neutral-400"
                  >
                    Message <span className="text-neutral-400">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="What are you looking to solve for?"
                    className="w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-3 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-accent dark:border-neutral-800 dark:text-white"
                  />
                </div>

                {status === "error" && errorMessage && (
                  <div className="flex items-start gap-2 rounded-2xl border border-accent/30 bg-accent/5 px-3 py-2 text-sm text-accent">
                    <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-medium text-white transition duration-300 ease-out hover:bg-accent-600 disabled:opacity-60"
                >
                  {status === "submitting" && (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  )}
                  {status === "submitting" ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface FieldProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

function Field({ name, label, placeholder, type = "text", required }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-medium text-neutral-500 dark:text-neutral-400"
      >
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-accent dark:border-neutral-800 dark:text-white"
      />
    </div>
  );
}
