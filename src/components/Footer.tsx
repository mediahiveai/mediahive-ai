import { Logo } from "./Logo";

import { CONTACT_EMAIL } from "@/lib/contact";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Intelligence Field", href: "#platform" },
      { label: "Product Breakdown", href: "#breakdown" },
      { label: "Architecture", href: "#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Deployments", href: "#deployments" },
      { label: "Industries", href: "#industries" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
      { label: "Contact Us", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <Logo theme="dark" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">
              Enterprise AI systems for global organisations — trusted by HSBC,
              Tower Hamlets, and leading brands worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-zinc-500 transition hover:text-white"
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
        <div className="mt-14 flex flex-col items-center justify-between gap-2 border-t border-white/[0.06] pt-8 text-xs text-zinc-600 md:flex-row">
          <span>&copy; {new Date().getFullYear()} MediaHive AI</span>
          <span className="tracking-widest text-zinc-700">mediahive.ai</span>
        </div>
      </div>
    </footer>
  );
}
