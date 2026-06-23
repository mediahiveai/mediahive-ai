"use client";

import { motion } from "framer-motion";
import { Sparkles, Globe, Workflow, Share2, ArrowRight } from "lucide-react";
import { socialPlatforms, growthServices } from "@/lib/data";

const icons = [Globe, Workflow, Share2, Sparkles];

export function SocialExpansion() {
  return (
    <section id="social" className="relative overflow-hidden bg-black py-20 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(147,51,234,0.1),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-light">
              Social Media Workflows
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Social growth —{" "}
              <span className="gradient-text">built as a system.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
              We don&apos;t just manage social accounts — we build automated content
              pipelines, scheduling workflows, and growth loops for Instagram, TikTok,
              LinkedIn, and every channel — wired into your website and CRM.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {growthServices.map((s, i) => {
                const Icon = icons[i] ?? Sparkles;
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5"
                  >
                    <Icon className="h-5 w-5 text-electric" />
                    <h3 className="mt-3 text-sm font-semibold text-white">{s.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-500">{s.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              Start Your Growth Plan
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Video + platform pills */}
          <div>
            <div className="overflow-hidden rounded-2xl border border-white/10 sm:rounded-3xl">
              <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-video">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                  poster="/videos/poster-social-pulse.png"
                >
                  <source src="/videos/social-pulse.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-electric">
                    Social Pulse AI
                  </p>
                  <p className="mt-1 font-display text-lg font-bold text-white sm:text-xl">
                    Content. Scheduling. Growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {socialPlatforms.map((p) => (
                <span
                  key={p.name}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-400"
                >
                  {p.name}
                </span>
              ))}
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {socialPlatforms.slice(0, 4).map((p) => (
                <div
                  key={p.name}
                  className="rounded-xl border border-white/[0.05] px-4 py-3"
                >
                  <p className="text-xs font-semibold text-white">{p.name}</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-zinc-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
