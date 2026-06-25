"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="bg-rye py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left"
        >
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold text-black sm:text-4xl">
              Ready to build something that wins?
            </h2>
            <p className="mt-3 text-base text-black/70">
              Websites, CRM systems, AI automation, and enterprise programmes —
              tell us what you&apos;re building and we&apos;ll respond within one business day.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-dark inline-flex">
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#deployments"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-black px-8 py-4 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-black hover:text-white"
            >
              View projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
