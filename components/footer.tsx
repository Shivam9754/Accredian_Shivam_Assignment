import type { SVGProps } from "react";
import { CtaButton } from "./cta-button";

const SOCIALS = [
  {
    icon: YouTubeIcon,
    href: "https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA",
    label: "YouTube",
  },
  {
    icon: InstagramIcon,
    href: "https://instagram.com/accredian_edu",
    label: "Instagram",
  },
  {
    icon: XIcon,
    href: "https://x.com/accredianedu",
    label: "X",
  },
  {
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/school/accredianedu/",
    label: "LinkedIn",
  },
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com/accredianlearn",
    label: "Facebook",
  },
];

function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="2" y="5" width="20" height="14" rx="4" fill="#FF0000" />
      <path d="M10 9.5L15.5 12L10 14.5V9.5Z" fill="#fff" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="instaGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f58529" />
          <stop offset="50%" stopColor="#dd2a7b" />
          <stop offset="100%" stopColor="#515bd4" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="18" height="18" rx="6" fill="url(#instaGradient)" />
      <circle cx="12" cy="12" r="4.5" fill="rgba(255,255,255,0.9)" />
      <circle cx="12" cy="12" r="3" fill="#151515" />
      <circle cx="17" cy="6.5" r="1.2" fill="#fff" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="7" fill="#1D9BF0" />
      <path d="M8 8L16 16M16 8L8 16" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#0A66C2" />
      <path d="M7.5 10.5V16.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <path d="M7.5 8.25C8.88071 8.25 10 7.13071 10 5.75C10 4.36929 8.88071 3.25 7.5 3.25C6.11929 3.25 5 4.36929 5 5.75C5 7.13071 6.11929 8.25 7.5 8.25Z" fill="#fff" />
      <path d="M11.5 16.5V11.5C11.5 10.3954 12.3954 9.5 13.5 9.5H13.5156C14.6202 9.5 15.5156 10.3954 15.5156 11.5V16.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#1877F2" />
      <path d="M14.5 8.5H16.75L16.5 11H14.5V16H12V11H10.5V8.5H12.5V7.25C12.5 6.48859 13.0886 5.9 13.85 5.9H16V8.5H14.5Z" fill="#fff" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 pt-16 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 border-b border-neutral-200 pb-12 dark:border-neutral-800 sm:flex-row sm:items-start sm:justify-between">
          {/* brand + CTA */}
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-[15px] font-semibold tracking-tight text-neutral-900 dark:text-white">
                accredian
              </span>
            </a>
            <div className="mt-5 flex items-center gap-4">
              <CtaButton />
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                Speak with Our Advisor
              </span>
            </div>
            <div className="mt-6 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
              <img
                src="/images/footer-office.png"
                alt="Accredian office environment"
                className="h-40 w-full object-cover"
              />
            </div>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 text-neutral-400 transition-colors hover:border-accent hover:text-accent dark:border-neutral-800"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 gap-12 sm:gap-16">
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                Accredian
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                  >
                    Why Accredian
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                Contact Us
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a
                    href="mailto:enterprise@accredian.com"
                    className="text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                  >
                    enterprise@accredian.com
                  </a>
                </li>
                <li className="max-w-[220px] leading-relaxed text-neutral-600 dark:text-neutral-300">
                  4th Floor, 250, Phase IV,
                  <br />
                  Udyog Vihar, Sector 18,
                  <br />
                  Gurugram, Haryana
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 py-6 text-xs text-neutral-400 sm:flex-row sm:items-center">
          <span>
            © 2026 Accredian, a brand of FullStack Education Pvt Ltd. All
            rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
