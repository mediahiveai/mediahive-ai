import { Logo } from "./Logo";
import {
  COMPANY_ADDRESS,
  COMPANY_NAME,
  COMPANY_NUMBER,
} from "@/lib/contact";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Corporate", href: "#corporate" },
      { label: "Enterprise", href: "#enterprise" },
      { label: "What We Do", href: "#services" },
      { label: "Projects", href: "#deployments" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Industries", href: "#industries" },
      { label: "Team", href: "#team" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Connect",
    links: [{ label: "Contact Us", href: "#contact" }],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo theme="dark" />
            <h5 className="mt-6 font-display text-lg font-bold">
              Turning companies into brands that matter.
            </h5>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/50">
              The agile AI and digital agency. Industry veterans, bright minds, and forward
              thinkers — data, technical expertise, and creativity at the heart of everything we do.
            </p>
            <div className="mt-6 space-y-1 text-sm text-white/50">
              <p className="font-medium text-white/70">
                {COMPANY_NAME} · Company No. {COMPANY_NUMBER}
              </p>
              <p>{COMPANY_ADDRESS.line1}</p>
              <p>{COMPANY_ADDRESS.line2}</p>
              <p>
                {COMPANY_ADDRESS.city}, {COMPANY_ADDRESS.postcode}
              </p>
              <p>{COMPANY_ADDRESS.country}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-bold uppercase tracking-widest text-rye">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-white/60 transition hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <span>
            &copy; {new Date().getFullYear()} {COMPANY_NAME} · Company No. {COMPANY_NUMBER} · All
            Rights Reserved
          </span>
          <span className="font-bold tracking-widest text-rye">mediahive.ai</span>
        </div>
      </div>
    </footer>
  );
}
