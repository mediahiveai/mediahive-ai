"use client";

import { motion } from "framer-motion";
import {
  Globe,
  LayoutGrid,
  Megaphone,
  Database,
  Workflow,
  Search,
} from "lucide-react";
import { servicePillars } from "@/lib/data";

const icons = [Globe, LayoutGrid, Megaphone, Database, Workflow, Search];

export function ServicesOverview() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-zinc-950 py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(0,102,255,0.08),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            What We Deliver
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Websites, apps, marketing systems —{" "}
            <span className="gradient-text">built properly.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            We&apos;re a development and automation partner, not a generic agency.
            Every project is scoped, quoted, and delivered with clear timelines —
            from a single landing page to a full CRM and marketing stack.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicePillars.map((pillar, i) => {
            const Icon = icons[i] ?? Globe;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric/10">
                    <Icon className="h-5 w-5 text-electric" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-zinc-400">
                    {pillar.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                  {pillar.desc}
                </p>
                <ul className="mt-4 space-y-1.5 border-t border-white/[0.06] pt-4">
                  {pillar.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-xs text-zinc-500">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-electric" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
