"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";
import { productVideos } from "@/lib/data";
import { cn } from "@/lib/utils";

export function VideoShowcase() {
  const [active, setActive] = useState(productVideos[0].id);
  const [muted, setMuted] = useState(true);
  const heroRef = useRef<HTMLVideoElement>(null);
  const current = productVideos.find((v) => v.id === active)!;

  useEffect(() => {
    const v = heroRef.current;
    if (!v) return;
    v.load();
    v.play().catch(() => {});
  }, [active]);

  return (
    <section id="videos" className="relative overflow-hidden border-t border-zinc-200 bg-white py-16 md:py-32">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
            Platform Overview
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-zinc-900 sm:mt-4 sm:text-4xl md:text-5xl">
            Enterprise systems{" "}
            <span className="gradient-text">in action.</span>
          </h2>
          <p className="mt-4 text-sm text-zinc-500 sm:text-base">
            Product demonstrations across AI infrastructure, automation, CRM, and analytics.
          </p>
        </div>

        {/* Featured hero player */}
        <div className="relative mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-900 shadow-sm sm:mt-14 sm:rounded-3xl">
          <div className="relative aspect-video w-full overflow-hidden md:aspect-[2.4/1]">
            <video
              key={current.id}
              ref={heroRef}
              src={current.video}
              poster={current.poster}
              autoPlay
              muted={muted}
              loop
              playsInline
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="absolute left-4 top-4 sm:left-6 sm:top-6 md:left-10 md:top-10">
              <span className="rounded-full border border-electric/30 bg-black/50 px-2.5 py-1 text-[9px] font-bold tracking-[0.15em] text-electric backdrop-blur-md sm:px-3 sm:text-[10px] sm:tracking-[0.2em]">
                {current.preset}
              </span>
            </div>

            <button
              onClick={() => setMuted(!muted)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 backdrop-blur-md transition hover:bg-black/70 sm:right-6 sm:top-6 sm:h-10 sm:w-10 md:right-10 md:top-10"
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted ? (
                <VolumeX className="h-4 w-4 text-white" />
              ) : (
                <Volume2 className="h-4 w-4 text-white" />
              )}
            </button>

            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl md:text-4xl">
                    {current.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-zinc-400 sm:text-sm md:text-base">
                    {current.subtitle}
                  </p>
                  <p className="mt-2 hidden max-w-xl text-sm leading-relaxed text-zinc-500 sm:block">
                    {current.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile description below player */}
        <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:hidden">
          {current.description}
        </p>

        {/* Thumbnail film strip — horizontal scroll on mobile */}
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-none sm:mt-6 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-6">
          {productVideos.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={cn(
                "group relative w-[140px] shrink-0 snap-start overflow-hidden rounded-xl border text-left transition-all duration-300 sm:w-auto",
                active === item.id
                  ? "border-electric/50 ring-1 ring-electric/30"
                  : "border-white/[0.06] hover:border-white/20"
              )}
            >
              <div className="relative aspect-video overflow-hidden">
                <video
                  src={item.video}
                  poster={item.poster}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
                <div className="absolute inset-0 bg-black/30" />
                {active !== item.id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-6 w-6 fill-white/80 text-white sm:h-8 sm:w-8" />
                  </div>
                )}
                <span className="absolute bottom-1.5 left-1.5 text-[8px] font-bold tracking-widest text-white/80 sm:bottom-2 sm:left-2 sm:text-[9px]">
                  {item.preset}
                </span>
              </div>
              <div className="p-2.5 sm:p-3">
                <p className="truncate text-[11px] font-semibold text-white sm:text-xs">
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
