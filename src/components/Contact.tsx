"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { CONTACT_EMAIL, submitContactForm } from "@/lib/contact";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await submitContactForm(e.currentTarget);
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/[0.06] bg-zinc-950 py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,rgba(0,102,255,0.08),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Partner with{" "}
              <span className="gradient-text">MediaHive AI.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Speak with our enterprise team about websites, applications, CRM systems,
              automation, and digital transformation. We respond within one business day.
            </p>
            <div className="mt-8 space-y-3 border-t border-white/[0.06] pt-8">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="block text-sm font-medium text-white hover:text-electric"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="text-xs text-zinc-500">
                Or fill in the form — your message goes straight to our inbox.
              </p>
              <p className="text-xs text-zinc-500">
                Enterprise programmes from £50,000 · Global delivery
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8"
          >
            {sent ? (
              <div className="flex flex-col items-center py-10 text-center sm:py-12">
                <CheckCircle className="h-10 w-10 text-electric" />
                <p className="mt-4 font-display text-xl font-bold text-white">
                  Message sent.
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Thank you — we&apos;ll reply to your email within one business day.
                </p>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                <input type="checkbox" name="botcheck" className="hidden" />

                {[
                  { id: "name", name: "name", label: "Full Name", required: true },
                  { id: "company", name: "company", label: "Organisation", required: true },
                  { id: "email", name: "email", label: "Work Email", type: "email", required: true },
                  { id: "role", name: "role", label: "Role / Title", required: false },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="mb-1.5 block text-xs font-medium text-zinc-400">
                      {f.label}{f.required && " *"}
                    </label>
                    <input
                      id={f.id}
                      name={f.name}
                      type={f.type || "text"}
                      required={f.required}
                      disabled={loading}
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-base text-white outline-none transition focus:border-electric/40 disabled:opacity-50 sm:text-sm"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-zinc-400">
                    Project overview *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    disabled={loading}
                    placeholder="Tell us about your requirements — websites, apps, CRM, automation, etc."
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-base text-white outline-none transition placeholder:text-zinc-600 focus:border-electric/40 disabled:opacity-50 sm:text-sm"
                  />
                </div>

                {error && (
                  <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-3 py-2 text-xs text-red-400">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-white py-3.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200 disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
