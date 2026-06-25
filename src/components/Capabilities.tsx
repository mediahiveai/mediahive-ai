"use client";

import { motion } from "framer-motion";
import { capabilities, enterpriseStats } from "@/lib/data";

export function Capabilities() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_50%,rgba(254,195,0,0.08),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="section-label">Services</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Full-stack enterprise delivery.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60">
            From corporate websites to bespoke CRM and compliance-ready automation —
            every engagement is scoped, integrated, and delivered by one team.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:border-rye/30 hover:bg-white/[0.07]"
            >
              <span className="text-xs font-bold text-rye">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-white">{cap.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{cap.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-4"
        >
          {enterpriseStats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="font-display text-4xl font-extrabold text-rye sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-white/50">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
