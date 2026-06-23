"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { whatWeBuild } from "@/lib/data";
import { cn } from "@/lib/utils";

export function WhatWeBuild() {
  const [active, setActive] = useState(whatWeBuild[0].id);
  const item = whatWeBuild.find((w) => w.id === active)!;

  return (
    <section id="build" className="relative overflow-hidden border-t border-zinc-100 bg-white py-20 md:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
            Capabilities
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl md:text-5xl">
            Enterprise systems.{" "}
            <span className="gradient-text">Built to spec.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-500 sm:text-lg">
            Websites, web apps, marketing agency infrastructure, CRM systems, and
            automation — engineered for organisations like HSBC, Tower Hamlets, and
            Fitness First. Select a capability to see what&apos;s included.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none lg:flex-col lg:overflow-visible lg:pb-0">
            {whatWeBuild.map((w) => (
              <button
                key={w.id}
                onClick={() => setActive(w.id)}
                className={cn(
                  "shrink-0 rounded-xl border px-4 py-3 text-left transition-all duration-200 lg:w-full",
                  active === w.id
                    ? "border-zinc-300 bg-zinc-50 text-zinc-900 shadow-sm"
                    : "border-zinc-200 bg-white text-zinc-500 hover:border-zinc-300 hover:text-zinc-800"
                )}
              >
                <p className="text-sm font-semibold">{w.title}</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-widest text-zinc-400">
                  {w.tag}
                </p>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm sm:rounded-3xl"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-electric">
                    {item.tag}
                  </p>
                  <p className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
                    {item.title}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">{item.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-600"
                    >
                      {h}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
