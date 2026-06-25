"use client";

import { motion } from "framer-motion";
import { servicePillars } from "@/lib/data";

export function WhatWeBuild() {
  return (
    <section id="services" className="bg-black py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="section-label text-rye">Services</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Everything your business needs to win online.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60">
            Websites, web apps, CRM systems, marketing agency infrastructure, AI automation,
            SEO, and brand redesign — scoped to your requirements and integrated with your stack.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicePillars.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-rye/30"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-7">
                <span className="inline-block rounded-full bg-rye px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
                  {s.tag}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{s.desc}</p>
                <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-white/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rye" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
