"use client";

import { ArrowRight } from "lucide-react";
import { useLeadModal } from "./lead-modal-context";

interface CtaButtonProps {
  label?: string;
  variant?: "solid" | "ghost";
  className?: string;
}

export function CtaButton({
  label = "Enquire Now",
  variant = "solid",
  className = "",
}: CtaButtonProps) {
  const { openModal } = useLeadModal();

  const base =
    "inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-200";
  const solid =
    "bg-accent text-white hover:bg-accent-600 shadow-[0_0_0_1px_rgba(29,74,245,0.3)]";
  const ghost =
    "border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 hover:border-accent hover:text-accent";

  return (
    <button
      type="button"
      onClick={openModal}
      className={`${base} ${variant === "solid" ? solid : ghost} ${className}`}
    >
      {label}
      <ArrowRight className="h-4 w-4" />
    </button>
  );
}
