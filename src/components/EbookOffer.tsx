"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Download, CheckCircle, Zap } from "lucide-react";

const EBOOK_PRICE = 199;
const ORIGINAL_PRICE = 497;
const STORAGE_KEY = "mediahive-ebook-dismissed";
const PURCHASE_KEY = "mediahive-ebook-purchased";
const PDF_URL = "/downloads/ai-marketing-agency-playbook.pdf";

const includes = [
  "Complete AI Marketing Agency startup guide",
  "How to grow your business with AI — step by step",
  "Done-for-you workflow templates (n8n + Notion)",
  "AI video creation playbook (Reels, TikTok, YouTube)",
  "Instagram & TikTok growth frameworks",
  "Automated website & CRM setup checklist",
  "Website redesign & brand transformation framework",
  "Pricing tiers, client delivery & 90-day launch plan",
  "PDF download — yours forever",
];

function getCountdownEnd(): number {
  const stored = localStorage.getItem("mediahive-ebook-countdown");
  if (stored) return parseInt(stored, 10);
  const end = Date.now() + 24 * 60 * 60 * 1000;
  localStorage.setItem("mediahive-ebook-countdown", String(end));
  return end;
}

function formatCountdown(ms: number) {
  if (ms <= 0) return { h: "00", m: "00", s: "00" };
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return {
    h: String(h).padStart(2, "0"),
    m: String(m).padStart(2, "0"),
    s: String(s).padStart(2, "0"),
  };
}

export function EbookModal() {
  const [open, setOpen] = useState(false);
  const [purchased, setPurchased] = useState(false);
  const [email, setEmail] = useState("");
  const [processing, setProcessing] = useState(false);
  const [countdown, setCountdown] = useState({ h: "23", m: "59", s: "59" });

  useEffect(() => {
    const bought = localStorage.getItem(PURCHASE_KEY);
    if (bought) {
      setPurchased(true);
      return;
    }
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      const timer = setTimeout(() => setOpen(true), 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-ebook-modal", handler);
    return () => window.removeEventListener("open-ebook-modal", handler);
  }, []);

  useEffect(() => {
    const end = getCountdownEnd();
    const tick = () => setCountdown(formatCountdown(end - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  };

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setProcessing(true);
    setTimeout(() => {
      localStorage.setItem(PURCHASE_KEY, email);
      setPurchased(true);
      setProcessing(false);
      setOpen(true);
    }, 1500);
  };

  const downloadPdf = () => {
    const a = document.createElement("a");
    a.href = PDF_URL;
    a.download = "MediaHive-AI-Marketing-Agency-Playbook.pdf";
    a.click();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          onClick={dismiss}
        >
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-t-3xl border border-white/10 bg-zinc-950 sm:rounded-3xl"
          >
            <button
              onClick={dismiss}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header gradient */}
            <div className="relative bg-gradient-to-br from-electric/20 via-purple/20 to-transparent px-6 pb-6 pt-8 sm:px-8 sm:pt-10">
              {!purchased && (
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-bold text-red-400">
                  <Zap className="h-3 w-3" />
                  LIMITED TIME OFFER
                </div>
              )}

              <h2 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                {purchased ? (
                  <>Your playbook is ready.</>
                ) : (
                  <>
                    Start Your Own{" "}
                    <span className="gradient-text">AI Marketing Agency</span>
                  </>
                )}
              </h2>

              {!purchased && (
                <>
                  <p className="mt-3 text-sm text-zinc-400">
                    Workflows, AI videos, social growth, automated websites — the complete
                    setup guide to transform any brand and scale your business.
                  </p>

                  {/* Countdown */}
                  <div className="mt-5 flex items-center gap-3">
                    <Clock className="h-4 w-4 text-electric" />
                    <span className="text-xs text-zinc-500">Offer expires in</span>
                    <div className="flex gap-1.5">
                      {[countdown.h, countdown.m, countdown.s].map((v, i) => (
                        <span
                          key={i}
                          className="rounded-lg bg-black/50 px-2 py-1 font-mono text-sm font-bold text-white"
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-5 flex items-baseline gap-3">
                    <span className="font-display text-4xl font-bold text-white">
                      ${EBOOK_PRICE}
                    </span>
                    <span className="text-lg text-zinc-600 line-through">${ORIGINAL_PRICE}</span>
                    <span className="rounded-full bg-electric/20 px-2 py-0.5 text-xs font-bold text-electric">
                      SAVE 60%
                    </span>
                  </div>
                </>
              )}
            </div>

            <div className="px-6 pb-8 sm:px-8">
              {purchased ? (
                <div className="py-4 text-center">
                  <CheckCircle className="mx-auto h-12 w-12 text-electric" />
                  <p className="mt-4 text-sm text-zinc-400">
                    Thank you! Your AI Marketing Agency Playbook is ready to download.
                  </p>
                  <button
                    onClick={downloadPdf}
                    className="mt-6 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-white py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF Playbook
                  </button>
                </div>
              ) : (
                <>
                  <ul className="mt-2 space-y-2">
                    {includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-zinc-400">
                        <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-electric" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <form onSubmit={handlePurchase} className="mt-6 space-y-3">
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-black px-4 py-3.5 text-base text-white outline-none focus:border-electric/40 sm:text-sm"
                    />
                    <button
                      type="submit"
                      disabled={processing}
                      className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-purple py-3.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
                    >
                      {processing ? "Processing..." : `Get Instant Access — $${EBOOK_PRICE}`}
                    </button>
                    <p className="text-center text-[10px] text-zinc-600">
                      One-time payment. Instant PDF download. 30-day money-back guarantee.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Persistent ebook CTA section */
export function EbookSection() {
  const [purchased, setPurchased] = useState(false);

  useEffect(() => {
    setPurchased(!!localStorage.getItem(PURCHASE_KEY));
  }, []);

  return (
    <section id="ebook" className="relative overflow-hidden border-y border-white/[0.06] bg-zinc-950 py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(0,102,255,0.08),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-bold text-red-400">
              <Clock className="h-3 w-3" />
              Limited Time — $199 (was $497)
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Learn to grow.{" "}
              <span className="gradient-text">Launch your agency.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
              We teach you how to use AI to grow any business, launch your own marketing
              agency, build automated workflows, redesign brands, and set up CRM systems
              that scale — the complete playbook to transform and grow.
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {includes.slice(0, 6).map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-zinc-500">
                  <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-electric" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black p-6 sm:p-8">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-5xl font-bold text-white">$199</span>
              <span className="text-xl text-zinc-600 line-through">$497</span>
            </div>
            <p className="mt-2 text-sm text-zinc-500">One-time payment · Instant PDF download</p>

            {purchased ? (
              <a
                href={PDF_URL}
                download
                className="mt-6 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-white py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                <Download className="h-4 w-4" />
                Download Your Playbook
              </a>
            ) : (
              <button
                onClick={() => {
                  sessionStorage.removeItem(STORAGE_KEY);
                  window.dispatchEvent(new Event("open-ebook-modal"));
                }}
                className="mt-6 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-purple py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Get Instant Access — $199
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
