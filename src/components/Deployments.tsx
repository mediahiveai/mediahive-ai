"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { deployments } from "@/lib/data";

export function Deployments() {
  const [idx, setIdx] = useState(0);
  const d = deployments[idx];

  return (
    <section id="deployments" className="relative overflow-hidden border-t border-white/[0.06] bg-zinc-950 py-16 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_0%_50%,rgba(147,51,234,0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">Deployments</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:mt-4 sm:text-4xl md:text-5xl">
          Enterprise <span className="gradient-text">proof.</span>
        </h2>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none sm:mt-10 sm:flex-wrap sm:overflow-visible">
          {deployments.map((dep, i) => (
            <button
              key={dep.org}
              onClick={() => setIdx(i)}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition min-h-[40px] ${
                i === idx
                  ? "border-white/30 bg-white/10 text-white"
                  : "border-white/[0.08] text-zinc-500 hover:border-white/15 hover:text-white"
              }`}
            >
              {dep.org}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm sm:rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.video
                key={d.video}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                autoPlay
                muted
                loop
                playsInline
                poster={d.poster}
                className="aspect-video w-full object-cover"
              >
                <source src={d.video} type="video/mp4" />
              </motion.video>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-electric sm:text-xs">
                {d.vertical}
              </p>
              <p className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">{d.org}</p>
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
              <p className="text-sm font-medium text-zinc-400">{d.system}</p>
              <h3 className="mt-3 font-display text-xl font-bold text-white sm:text-2xl md:text-3xl">
                {d.headline}
              </h3>

              <div className="mt-6 grid grid-cols-1 gap-3 xs:grid-cols-3 sm:mt-8 sm:gap-4">
                {[
                  { v: d.result, l: "Impact" },
                  { v: d.metric, l: "Metric" },
                  { v: d.timeline, l: "Timeline" },
                ].map((m) => (
                  <div key={m.l} className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 sm:p-4">
                    <p className="font-display text-base font-bold gradient-text sm:text-lg">{m.v}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-widest text-zinc-500">{m.l}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
