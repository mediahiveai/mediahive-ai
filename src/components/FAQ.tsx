"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/data";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-black/5 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="section-label">FAQ</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-black sm:text-4xl">
            Questions, answered.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            Everything you need to know before starting a project with MediaHive AI.
          </p>
        </motion.div>

        <div className="mt-10 space-y-2">
          {faqs.map((f, i) => (
            <div key={f.q} className="card-rye overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="pr-4 text-sm font-semibold text-black">{f.q}</span>
                <span
                  className={`shrink-0 text-lg font-light text-ink-light transition ${open === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-ink-muted">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
