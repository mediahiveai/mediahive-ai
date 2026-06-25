"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { divisions } from "@/lib/data";

export function Divisions() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-label">What We Do</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-black sm:text-4xl">
            Four divisions. One team. Full stack delivery.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {divisions.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-rye group overflow-hidden"
            >
              <div className="border-b border-black/5 bg-surface p-8 sm:p-10">
                <h3 className="font-display text-2xl font-extrabold text-black sm:text-3xl">
                  {d.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">{d.desc}</p>
                <a
                  href={d.href}
                  className="btn-rye mt-6 inline-flex"
                >
                  {d.cta}
                </a>
              </div>
              <div className="p-8 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-wider text-rye-dark">
                  How We Make It Happen
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{d.approach}</p>
                <a
                  href={d.href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-black transition group-hover:text-rye-dark"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
