"use client";

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
    <section id="products" className="relative overflow-hidden border-t border-zinc-200 bg-zinc-50 py-16 md:py-32">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">Architecture</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-zinc-900 sm:mt-4 sm:text-4xl md:text-5xl">
          Connected enterprise{" "}
          <span className="gradient-text">infrastructure.</span>
        </h2>
        <p className="mt-4 max-w-xl text-sm text-zinc-500 sm:text-base">
          Data, AI, workflows, and analytics unified into a single intelligent pipeline
          — engineered for organisations at scale.
        </p>

        <div className="relative mt-10 min-h-[280px] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 sm:mt-16 sm:min-h-0 sm:aspect-[16/7] sm:rounded-3xl">
          <div className="noise-overlay absolute inset-0" />

          <svg className="absolute inset-0 hidden h-full w-full sm:block">
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
                  strokeWidth="1"
                  opacity="0.35"
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

          {/* Desktop: positioned nodes */}
          <div className="hidden sm:block">
            {platformNodes.map((node) => (
              <div
                key={node.id}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <div className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-center shadow-sm md:px-4 md:py-2.5">
                  <p className="whitespace-nowrap text-[10px] font-semibold text-zinc-800 md:text-xs">
                    {node.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: vertical flow */}
          <div className="flex flex-col items-center gap-3 p-6 sm:hidden">
            {platformNodes.map((node, i) => (
              <div key={node.id} className="flex flex-col items-center">
                <div className="rounded-xl border border-zinc-200 bg-white px-4 py-2.5 shadow-sm">
                  <p className="text-xs font-semibold text-zinc-800">{node.label}</p>
                </div>
                {i < platformNodes.length - 1 && (
                  <div className="my-1 h-4 w-px bg-gradient-to-b from-electric/50 to-purple/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
