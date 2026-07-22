import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LeadModalProvider } from "@/components/lead-modal-context";
import { LeadModal } from "@/components/lead-modal";

export const metadata: Metadata = {
  title: "Accredian Enterprise — Next-Gen Expertise For Your Enterprise",
  description:
    "Cultivate high-performance teams through expert learning, tailored to your organization.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <LeadModalProvider>
            {children}
            <LeadModal />
          </LeadModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
