"use client";

import { motion } from "framer-motion";

export function IntroSection() {
  return (
    <section className="border-y border-black/5 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl font-bold leading-snug text-black sm:text-3xl md:text-4xl">
            We help businesses create, grow, and scale with purpose.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            At MediaHive AI, we build websites, applications, CRM systems, and AI automation
            that get found, get remembered, and get results — for corporate teams and
            enterprise organisations alike.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
