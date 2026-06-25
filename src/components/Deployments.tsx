"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { deployments } from "@/lib/data";

export function Deployments() {
  const [idx, setIdx] = useState(0);
  const d = deployments[idx];

  return (
    <section id="deployments" className="border-y border-black/5 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <p className="section-label">Projects Hub</p>
        <h2 className="mt-4 font-display text-3xl font-extrabold text-black sm:text-4xl md:text-5xl">
          Enterprise proof in practice.
        </h2>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap">
          {deployments.map((dep, i) => (
            <button
              key={dep.org}
              type="button"
              onClick={() => setIdx(i)}
              className={`flex shrink-0 items-center gap-2.5 rounded-full border px-4 py-2.5 text-sm font-semibold transition sm:px-5 ${
                i === idx
                  ? "border-rye bg-rye text-black shadow-sm"
                  : "border-black/10 bg-white text-ink-muted hover:border-rye/40 hover:text-black"
              }`}
            >
              <img
                src={dep.logo}
                alt=""
                className={`h-5 w-auto object-contain ${i === idx ? "max-w-[72px]" : "max-w-[64px] opacity-80"}`}
              />
              <span className="hidden sm:inline">{dep.org}</span>
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={d.org}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="relative aspect-video overflow-hidden bg-surface"
              >
                <img
                  src={d.poster}
                  alt={`${d.org} — ${d.vertical}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 rounded-xl bg-white px-4 py-3 shadow-md">
                  <img
                    src={d.logo}
                    alt={d.org}
                    className="h-7 w-auto max-w-[120px] object-contain"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="border-t border-black/5 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-rye-dark">{d.vertical}</p>
              <p className="mt-1 font-display text-2xl font-extrabold text-black">{d.org}</p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col justify-center"
            >
              <p className="text-sm font-semibold text-ink-muted">{d.system}</p>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-black md:text-3xl">
                {d.headline}
              </h3>

              <div className="mt-8 grid grid-cols-1 gap-4 xs:grid-cols-3">
                {[
                  { v: d.result, l: "Impact" },
                  { v: d.metric, l: "Metric" },
                  { v: d.timeline, l: "Timeline" },
                ].map((m) => (
                  <div key={m.l} className="card-rye p-4 text-center">
                    <p className="font-display text-base font-extrabold text-black sm:text-lg">
                      {m.v}
                    </p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-ink-light">
                      {m.l}
                    </p>
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn-rye mt-8 w-fit">
                Start a Project
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
