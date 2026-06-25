"use client";

import { motion } from "framer-motion";
import { industries } from "@/lib/data";
import { Briefcase, Heart, Landmark, Store } from "lucide-react";

const icons: Record<string, typeof Landmark> = {
  landmark: Landmark,
  briefcase: Briefcase,
  heart: Heart,
  store: Store,
};

export function Industries() {
  return (
    <section id="industries" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="section-label">Industries</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-black sm:text-4xl">
            Trusted across every sector.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const Icon = icons[ind.icon] || Briefcase;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="card-rye p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rye/20">
                  <Icon className="h-5 w-5 text-black" />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-rye-dark">
                  {ind.stat}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-black">{ind.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{ind.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
