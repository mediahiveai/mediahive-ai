"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { enterpriseLogos } from "@/lib/data";

export function HeroVideo() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-white">
      {/* Subtle enterprise grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white to-zinc-50" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-28 text-center sm:px-6 sm:pb-24 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-[11px] font-medium tracking-wide text-zinc-500 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-electric" />
            Enterprise AI · mediahive.ai
          </div>

          <h1 className="font-display text-[2.25rem] font-extrabold leading-[1.05] tracking-tight text-zinc-900 xs:text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem]">
            Intelligence systems
            <br />
            <span className="gradient-text">for enterprise.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl px-2 text-sm leading-relaxed text-zinc-500 sm:mt-8 sm:text-base md:text-lg">
            We build websites, web applications, marketing systems, and AI automation
            for enterprise organisations — trusted by HSBC, Tower Hamlets, Fitness First,
            and brands across finance, public sector, and leisure.
          </p>

          <div className="mt-10 flex flex-col items-stretch gap-3 px-4 sm:flex-row sm:items-center sm:justify-center sm:gap-4 sm:px-0">
            <a
              href="#contact"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#deployments"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-8 py-3.5 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50"
            >
              View Deployments
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 border-t border-zinc-100 pt-10 sm:mt-24 sm:pt-12"
        >
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-400">
            Trusted by enterprise organisations
          </p>
          <div className="relative flex overflow-hidden">
            <div className="flex animate-marquee gap-10 whitespace-nowrap sm:gap-16">
              {[...enterpriseLogos, ...enterpriseLogos].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="font-display text-sm font-semibold tracking-tight text-zinc-300 sm:text-base"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
