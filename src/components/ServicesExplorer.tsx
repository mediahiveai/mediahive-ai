"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { whatWeBuild } from "@/lib/data";
import { cn } from "@/lib/utils";

function ServiceImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc("/images/showcase-web.jpg")}
      className="h-full w-full object-cover"
      loading="lazy"
    />
  );
}

export function ServicesExplorer() {
  const [active, setActive] = useState(whatWeBuild[0].id);
  const item = whatWeBuild.find((w) => w.id === active)!;

  return (
    <section id="platform" className="border-y border-black/5 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="max-w-3xl">
          <p className="section-label">Enterprise Delivery</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-black sm:text-4xl md:text-5xl">
            Every service,{" "}
            <span className="gradient-text-enterprise">built to integrate.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            Websites, apps, CRM, automation, and growth systems — scoped, quoted, and
            delivered with clear timelines. Select a capability to explore scope and
            typical delivery.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[280px_1fr] lg:gap-8">
          <div className="flex flex-row gap-2 overflow-x-auto pb-2 scrollbar-none lg:flex-col lg:overflow-visible lg:pb-0">
            {whatWeBuild.map((w) => (
              <button
                key={w.id}
                type="button"
                onClick={() => setActive(w.id)}
                className={cn(
                  "w-[200px] shrink-0 rounded-2xl border px-4 py-4 text-left transition-all duration-300 sm:w-[220px] lg:w-full",
                  active === w.id
                    ? "border-black/20 bg-surface shadow-sm"
                    : "border-black/8 bg-white hover:border-black/15 hover:bg-surface/60"
                )}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-ink-light">
                  {w.tag}
                </p>
                <p className="mt-1.5 text-sm font-bold text-black">{w.title}</p>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden rounded-2xl border border-black/8 bg-surface shadow-sm"
            >
              <div className="relative aspect-[16/7] overflow-hidden bg-zinc-200">
                <ServiceImage src={item.image} alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-rye">
                    {item.tag}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-3xl">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
                  {item.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs font-medium text-ink-muted"
                    >
                      {h}
                    </span>
                  ))}
                </div>
                <a href="#contact" className="btn-dark mt-8 inline-flex">
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
