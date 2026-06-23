"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs, leadership } from "@/lib/data";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-zinc-200 bg-white py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-zinc-900 sm:mt-4 sm:text-4xl">
              Questions, answered.
            </h2>

            <div className="mt-8 space-y-2 sm:mt-10">
              {faqs.map((f, i) => (
                <div key={f.q} className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <span className="pr-4 text-sm font-medium text-zinc-900">{f.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-zinc-400 transition ${open === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-500">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">Leadership</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-zinc-900 sm:text-4xl">
              The team behind MediaHive.
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {leadership.map((p) => (
                <div key={p.name} className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-electric to-purple text-xs font-bold text-white">
                    {p.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <p className="mt-3 text-sm font-semibold text-zinc-900">{p.name}</p>
                  <p className="text-xs text-electric">{p.role}</p>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-500">{p.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
