"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { intelligenceField } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProductField() {
  const [active, setActive] = useState(intelligenceField[0].id);
  const layer = intelligenceField.find((l) => l.id === active)!;

  return (
    <section id="platform" className="relative overflow-hidden border-t border-white/[0.06] bg-zinc-950 py-16 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(0,102,255,0.06),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">Intelligence Field</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:mt-4 sm:text-4xl md:text-5xl">
            Four layers.
            <br />
            <span className="gradient-text">One system.</span>
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:mt-6 sm:text-lg">
            Enterprise data, AI, automation, and impact — unified from signal to measurable ROI.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:mt-16 lg:grid-cols-[260px_1fr] lg:gap-8">
          <div className="flex flex-row gap-2 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-none lg:flex-col lg:overflow-visible lg:pb-0">
            {intelligenceField.map((l) => (
              <button
                key={l.id}
                onClick={() => setActive(l.id)}
                className={cn(
                  "w-[160px] shrink-0 snap-start rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 sm:w-[180px] lg:w-full lg:px-5 lg:py-4",
                  active === l.id
                    ? "border-white/20 bg-white/[0.08]"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-white/12"
                )}
              >
                <span className="text-[10px] font-bold tracking-widest" style={{ color: l.color }}>
                  LAYER {l.layer}
                </span>
                <p className="mt-1 text-sm font-semibold text-white">{l.name}</p>
              </button>
            ))}
          </div>

          {/* Active layer detail + field visualization */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-sm sm:rounded-3xl sm:p-8 md:p-10"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: layer.color }}>
                    {layer.tagline}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
                    {layer.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {layer.products.map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-400"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
                {layer.description}
              </p>

              {/* Field node visualization */}
              <div className="relative mt-10 h-48 overflow-hidden rounded-2xl border border-white/[0.06] bg-black/40">
                <div
                  className="field-pulse absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                  style={{ background: layer.color, opacity: 0.15 }}
                />
                <div className="relative flex h-full items-center justify-center gap-4 px-6 flex-wrap">
                  {layer.nodes.map((node, i) => (
                    <motion.div
                      key={node}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.08 }}
                      className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-medium text-zinc-300"
                    >
                      <span
                        className="mr-2 inline-block h-1.5 w-1.5 rounded-full"
                        style={{ background: layer.color }}
                      />
                      {node}
                    </motion.div>
                  ))}
                </div>
                {/* Connection lines SVG */}
                <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-20">
                  <line x1="20%" y1="50%" x2="80%" y2="50%" stroke={layer.color} strokeWidth="1" strokeDasharray="4 4" />
                </svg>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
