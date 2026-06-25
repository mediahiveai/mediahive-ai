"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { servicePillars } from "@/lib/data";

function PillarImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc("/images/showcase-web.jpg")}
      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      loading="lazy"
    />
  );
}

export function WhatWeBuild() {
  return (
    <section id="services" className="border-y border-black/5 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="section-label">Services</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-black sm:text-4xl md:text-5xl">
            Everything your business needs to{" "}
            <span className="gradient-text-enterprise">win online.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
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
              className="group card-rye overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden bg-surface-2">
                <PillarImage src={s.image} alt={s.title} />
              </div>
              <div className="p-7">
                <span className="inline-block rounded-full bg-rye px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
                  {s.tag}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-black">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.desc}</p>
                <ul className="mt-5 space-y-2 border-t border-black/5 pt-5">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-ink">
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
