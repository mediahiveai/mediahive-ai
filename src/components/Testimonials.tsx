"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section className="border-y border-black/5 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="text-center">
          <p className="section-label">What Our Clients Say</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-black sm:text-4xl">
            Behind every review is a business we helped grow.
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="card-rye border-l-4 border-l-rye p-10 text-center sm:p-14"
            >
              <p className="font-display text-xl font-bold leading-relaxed text-black sm:text-2xl md:text-3xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8">
                <p className="font-display font-bold text-black">{t.name}</p>
                <p className="mt-1 text-sm text-ink-muted">{t.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === idx ? "w-8 bg-rye" : "w-2 bg-black/15 hover:bg-black/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
