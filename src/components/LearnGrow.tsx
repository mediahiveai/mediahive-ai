"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  TrendingUp,
  Workflow,
  Share2,
  Sparkles,
  Users,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import { learnPrograms } from "@/lib/data";

const icons: Record<string, typeof Rocket> = {
  rocket: Rocket,
  trending: TrendingUp,
  workflow: Workflow,
  share: Share2,
  sparkles: Sparkles,
  users: Users,
};

export function LearnGrow() {
  return (
    <section id="learn" className="relative overflow-hidden border-y border-white/[0.06] bg-zinc-950 py-20 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(147,51,234,0.1),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-zinc-400">
            <GraduationCap className="h-3.5 w-3.5 text-purple-light" />
            Learn & Grow
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            We teach you how to{" "}
            <span className="gradient-text">grow and scale.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            MediaHive doesn&apos;t just build for you — we teach founders and teams how to
            grow their business, launch their own AI marketing agency, automate workflows,
            and redesign their brand for the next level.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learnPrograms.map((program, i) => {
            const Icon = icons[program.icon] ?? Sparkles;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex flex-col rounded-2xl border border-white/[0.06] bg-black/40 p-6 sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric/10">
                  <Icon className="h-5 w-5 text-electric" />
                </div>
                <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                  {program.tag}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-white">
                  {program.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">
                  {program.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {program.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-white/[0.06] px-2.5 py-0.5 text-[10px] text-zinc-500"
                    >
                      {h}
                    </span>
                  ))}
                </div>
                <a
                  href={program.cta}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-electric transition hover:text-white"
                >
                  {program.ctaLabel}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
