"use client";

import { motion } from "framer-motion";
import { industries } from "@/lib/data";
import { Landmark, HeartPulse, Briefcase, Store, Dumbbell, Building2 } from "lucide-react";

const icons = [Landmark, Building2, Dumbbell, HeartPulse, Briefcase, Store];

export function Industries() {
  return (
    <section id="industries" className="border-t border-zinc-200 bg-zinc-50 py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">Verticals</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-zinc-900 sm:mt-4 sm:text-4xl md:text-5xl">
          Proven across <span className="gradient-text">industries.</span>
        </h2>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const Icon = icons[i] ?? Building2;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-zinc-300 sm:p-7"
              >
                <Icon className="h-5 w-5 text-electric" />
                <h3 className="mt-3 font-display text-lg font-bold text-zinc-900 sm:text-xl">
                  {ind.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{ind.desc}</p>
                <p className="mt-4 text-xs font-semibold text-electric">{ind.stat}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
