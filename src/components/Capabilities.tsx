"use client";

import { motion } from "framer-motion";
import { capabilities } from "@/lib/data";

export function Capabilities() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-zinc-950 py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_50%,rgba(147,51,234,0.06),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Services
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
          Full-stack enterprise delivery.
        </h2>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              <span className="text-[10px] font-bold text-electric">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-white">{cap.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
