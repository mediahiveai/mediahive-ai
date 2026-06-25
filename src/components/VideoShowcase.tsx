"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { productVideos } from "@/lib/data";
import { cn } from "@/lib/utils";

export function VideoShowcase() {
  const [active, setActive] = useState(productVideos[0].id);
  const current = productVideos.find((v) => v.id === active)!;
  const idx = productVideos.findIndex((v) => v.id === active);

  const prev = () => {
    const i = (idx - 1 + productVideos.length) % productVideos.length;
    setActive(productVideos[i].id);
  };
  const next = () => {
    const i = (idx + 1) % productVideos.length;
    setActive(productVideos[i].id);
  };

  return (
    <section id="videos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="max-w-3xl">
          <p className="section-label">Platform Overview</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-black sm:text-4xl md:text-5xl">
            Systems we build in practice.
          </h2>
          <p className="mt-4 text-base text-ink-muted">
            CRM dashboards, automation workflows, analytics, and web platforms — built for
            real enterprise delivery.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-2xl border border-black/8 bg-black shadow-lg sm:mt-14">
          <div className="relative aspect-video w-full overflow-hidden md:aspect-[2.4/1]">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={current.image}
                alt={current.title}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute left-5 top-5 sm:left-8 sm:top-8">
              <span className="rounded-full bg-rye px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
                {current.preset}
              </span>
            </div>

            <button
              onClick={prev}
              aria-label="Previous platform"
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow transition hover:bg-white sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next platform"
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow transition hover:bg-white sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display text-xl font-extrabold text-white sm:text-2xl md:text-4xl">
                    {current.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">{current.subtitle}</p>
                  <p className="mt-2 hidden max-w-xl text-sm leading-relaxed text-white/60 sm:block">
                    {current.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:hidden">
          {current.description}
        </p>

        <div className="mt-5 flex gap-3 overflow-x-auto pb-2 scrollbar-none sm:mt-6">
          {productVideos.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={cn(
                "group relative w-[140px] shrink-0 overflow-hidden rounded-xl border text-left transition-all sm:w-[160px]",
                active === item.id
                  ? "border-rye ring-2 ring-rye/30"
                  : "border-black/10 hover:border-black/25"
              )}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-1.5 left-1.5 rounded bg-black/60 px-1.5 py-0.5 text-[8px] font-bold tracking-wider text-rye sm:text-[9px]">
                  {item.preset}
                </span>
              </div>
              <div className="bg-white p-2.5 sm:p-3">
                <p className="truncate text-[11px] font-bold text-black sm:text-xs">
                  {item.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
