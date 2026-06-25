"use client";

import { motion } from "framer-motion";
import { ClientLogos } from "./ClientLogos";

export function HeroVideo() {
  return (
    <section className="relative overflow-hidden bg-surface pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-black sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Building Intelligence
            <br />
            that <span className="text-ink-muted">Wins!</span>
          </h1>

          <a href="#contact" className="btn-dark mt-10 sm:mt-12">
            Let&apos;s Talk!
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mx-auto mt-14 max-w-6xl px-4 sm:mt-20 sm:px-6"
      >
        <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.06)] sm:rounded-[2.5rem]">
          <div className="grid gap-0 md:grid-cols-[1fr_1.2fr]">
            <div className="flex flex-col justify-center border-b border-black/5 p-8 sm:p-10 md:border-b-0 md:border-r">
              <p className="font-display text-5xl font-extrabold text-black sm:text-6xl">90</p>
              <p className="mt-1 font-display text-xl font-bold text-black">Days</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                That is all it takes. No waiting. No excuses.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-ink-muted">
                Some agencies talk strategy. We talk revenue, delivery, and systems that
                actually run your business.
              </p>
              <a href="#contact" className="btn-rye mt-8 w-fit">
                Contact Us
              </a>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900 md:aspect-auto md:min-h-[320px]">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/videos/poster-flow-engine.png"
                className="h-full w-full object-cover"
              >
                <source src="/videos/hero-ai.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 text-sm italic text-white/90">
                &ldquo;We had tried two agencies before MediaHive. The difference in
                communication alone was worth the switch.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mx-auto mt-16 max-w-7xl px-5 sm:mt-20 sm:px-6">
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.25em] text-ink-light">
          Trusted by enterprise organisations
        </p>
        <ClientLogos />
      </div>
    </section>
  );
}
