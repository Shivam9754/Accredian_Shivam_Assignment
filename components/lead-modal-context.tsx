"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

interface LeadModalContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const LeadModalContext = createContext<LeadModalContextValue | undefined>(
  undefined
);

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      isOpen,
      openModal: () => setIsOpen(true),
      closeModal: () => setIsOpen(false),
    }),
    [isOpen]
  );

  return (
    <LeadModalContext.Provider value={value}>
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const ctx = useContext(LeadModalContext);
  if (!ctx) throw new Error("useLeadModal must be used within LeadModalProvider");
  return ctx;
}
