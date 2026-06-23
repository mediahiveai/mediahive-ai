"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Video,
  Share2,
  Globe,
  Workflow,
  BarChart3,
  Bot,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const pieces = [
  {
    id: "strategy",
    label: "AI Strategy Core",
    icon: Brain,
    color: "#0066ff",
    description:
      "The brain of your stack. Defines brand voice, audience targeting, content pillars, and growth roadmap — all generated and refined by AI.",
    parts: ["Brand Voice AI", "Audience Models", "Content Calendar", "Growth Roadmap"],
  },
  {
    id: "social",
    label: "Social Pulse Engine",
    icon: Share2,
    color: "#6366f1",
    description:
      "Expands your brand across Instagram, TikTok, LinkedIn, and every platform. Auto-generates, schedules, and optimises posts tailored to each channel.",
    parts: ["Instagram Reels", "TikTok Content", "LinkedIn Posts", "Auto-Scheduler"],
  },
  {
    id: "video",
    label: "AI Video Creator",
    icon: Video,
    color: "#818cf8",
    description:
      "Produces cinematic Reels, TikToks, and ads without a production team. Scripts, visuals, captions, and exports — all automated.",
    parts: ["Script AI", "Visual Gen", "Auto Captions", "Multi-Format Export"],
  },
  {
    id: "web",
    label: "Website Builder",
    icon: Globe,
    color: "#9333ea",
    description:
      "Cinematic Framer Motion websites and landing pages — scroll-driven animations, premium dark UI, and conversion-first architecture connected to your CRM and workflows.",
    parts: ["Framer Motion", "Landing Pages", "E-commerce", "CRM Connect"],
  },
  {
    id: "workflow",
    label: "Workflow Automator",
    icon: Workflow,
    color: "#a855f7",
    description:
      "Custom automations designed around how your business actually runs. Lead capture, follow-ups, onboarding, reporting — all hands-free.",
    parts: ["Lead Capture", "Email Sequences", "Client Onboarding", "Auto Reports"],
  },
  {
    id: "agents",
    label: "Hive Agent Layer",
    icon: Bot,
    color: "#0066ff",
    description:
      "Autonomous AI workers that handle support, sales outreach, content publishing, and ops tasks with multi-step reasoning.",
    parts: ["Sales Agents", "Support Bots", "Content Agents", "Ops Automation"],
  },
  {
    id: "analytics",
    label: "Cortex Analytics",
    icon: BarChart3,
    color: "#6366f1",
    description:
      "Tracks social growth, website conversions, and campaign ROI in real time. Predictive insights show what's working before competitors catch on.",
    parts: ["Social ROI", "Conversion Tracking", "Forecast AI", "Executive Reports"],
  },
  {
    id: "content",
    label: "Genesis Content Studio",
    icon: Sparkles,
    color: "#9333ea",
    description:
      "Generates on-brand copy, ad creative, blog posts, and email sequences at scale — maintaining your voice across every touchpoint.",
    parts: ["Ad Copy", "Blog Posts", "Email Sequences", "Brand Assets"],
  },
];

export function ProductBreakdown() {
  const [active, setActive] = useState(pieces[0].id);
  const piece = pieces.find((p) => p.id === active)!;
  const Icon = piece.icon;

  return (
    <section id="breakdown" className="relative overflow-hidden border-t border-zinc-100 bg-white py-16 md:py-32">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
          Product Breakdown
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-zinc-900 sm:mt-4 sm:text-4xl md:text-5xl">
          AI, deconstructed into{" "}
          <span className="gradient-text">8 pieces.</span>
        </h2>
        <p className="mt-4 max-w-xl text-sm text-zinc-500 sm:text-base">
          Every MediaHive deployment combines these modules — pick what you need,
          or run the full stack. Click each piece to explore.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_340px] lg:gap-10">
          {/* Exploded grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {pieces.map((p, i) => {
              const PIcon = p.icon;
              return (
                <motion.button
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setActive(p.id)}
                  className={cn(
                    "group flex flex-col items-center rounded-2xl border p-4 text-center transition-all duration-300 sm:p-5",
                    active === p.id
                      ? "border-zinc-300 bg-zinc-50 scale-105 shadow-sm"
                      : "border-zinc-200 bg-white hover:border-zinc-300"
                  )}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl transition sm:h-14 sm:w-14"
                    style={{
                      background: `${p.color}18`,
                      boxShadow: active === p.id ? `0 0 24px ${p.color}30` : "none",
                    }}
                  >
                    <PIcon className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: p.color }} />
                  </div>
                  <p className="mt-3 text-[11px] font-semibold leading-tight text-zinc-900 sm:text-xs">
                    {p.label}
                  </p>
                  <span
                    className="mt-1.5 text-[9px] font-bold tracking-widest"
                    style={{ color: p.color }}
                  >
                    MODULE {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm sm:rounded-3xl sm:p-8"
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: `${piece.color}18` }}
              >
                <Icon className="h-7 w-7" style={{ color: piece.color }} />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-zinc-900 sm:text-2xl">
                {piece.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">{piece.description}</p>

              <div className="mt-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  Components
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {piece.parts.map((part) => (
                    <span
                      key={part}
                      className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600"
                    >
                      {part}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="mt-6 flex min-h-[44px] items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                Contact Us
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
