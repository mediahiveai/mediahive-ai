"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { corporateServices, industryTags } from "@/lib/data";

export function CorporateSection() {
  return (
    <section id="corporate" className="bg-black py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="section-label text-rye">Corporate</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            We do not do average. We build{" "}
            <span className="gradient-text-enterprise">brands that dominate.</span>
          </h2>
        </motion.div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <p className="border-b border-white/10 px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
            Trusted Across Every Industry
          </p>
          <div className="flex flex-wrap gap-3 p-6">
            {industryTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {corporateServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-rye flex flex-col p-8 text-black"
            >
              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">{s.desc}</p>
              <div className="mt-6 border-t border-black/5 pt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-rye-dark">
                  {s.tag}
                </p>
                <a
                  href={s.href}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-black hover:text-rye-dark"
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
