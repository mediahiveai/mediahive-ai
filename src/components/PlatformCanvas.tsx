"use client";

import { motion } from "framer-motion";
import { platformNodes } from "@/lib/data";

const edges = [
  ["social", "content"],
  ["web", "content"],
  ["content", "agent"],
  ["agent", "workflow"],
  ["agent", "analytics"],
  ["workflow", "output"],
  ["analytics", "output"],
];

export function PlatformCanvas() {
  return (
    <section id="architecture" className="relative overflow-hidden border-y border-black/5 bg-surface py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="section-label">Architecture</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-black sm:text-4xl md:text-5xl">
            Connected enterprise{" "}
            <span className="gradient-text-enterprise">infrastructure.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            Data, AI, workflows, and analytics unified into a single intelligent pipeline
            — engineered for organisations at scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative mt-12 min-h-[320px] overflow-hidden rounded-3xl border border-black/8 bg-white shadow-sm sm:mt-16 sm:aspect-[16/7] sm:min-h-0"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(254,195,0,0.06),transparent)]" />

          <svg className="absolute inset-0 hidden h-full w-full sm:block" aria-hidden>
            {edges.map(([from, to]) => {
              const a = platformNodes.find((n) => n.id === from)!;
              const b = platformNodes.find((n) => n.id === to)!;
              return (
                <line
                  key={`${from}-${to}`}
                  x1={`${a.x}%`}
                  y1={`${a.y}%`}
                  x2={`${b.x}%`}
                  y2={`${b.y}%`}
                  stroke="url(#lineGrad)"
                  strokeWidth="1.5"
                  opacity="0.45"
                />
              );
            })}
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0066ff" />
                <stop offset="100%" stopColor="#9333ea" />
              </linearGradient>
            </defs>
          </svg>

          <div className="hidden sm:block">
            {platformNodes.map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.05 }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <div className="rounded-xl border border-black/8 bg-white px-4 py-2.5 text-center shadow-sm transition hover:border-rye/40 hover:shadow-md">
                  <p className="whitespace-nowrap text-xs font-semibold text-black">
                    {node.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3 p-8 sm:hidden">
            {platformNodes.map((node, i) => (
              <div key={node.id} className="flex flex-col items-center">
                <div className="rounded-xl border border-black/8 bg-white px-5 py-3 shadow-sm">
                  <p className="text-sm font-semibold text-black">{node.label}</p>
                </div>
                {i < platformNodes.length - 1 && (
                  <div className="my-1.5 h-5 w-px bg-gradient-to-b from-[#0066ff]/50 to-[#9333ea]/50" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
