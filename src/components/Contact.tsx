"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2, Mail, MapPin } from "lucide-react";
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
    <section id="contact" className="bg-black py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-label text-rye">Contact</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl md:text-5xl">
              Tell us what you&apos;re building?
            </h2>
            <p className="mt-2 text-sm text-white/50">
              Drop us a message and let&apos;s start the conversation.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                  Got a project in mind?
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-2 flex items-center gap-3 text-lg font-bold text-white hover:text-rye"
                >
                  <Mail className="h-5 w-5 text-rye" />
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/40">On spot</p>
                <p className="mt-2 flex items-center gap-3 text-sm text-white/70">
                  <MapPin className="h-5 w-5 shrink-0 text-rye" />
                  Global delivery · Enterprise programmes from £50k
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-6 text-black sm:p-8"
          >
            {sent ? (
              <div className="flex flex-col items-center py-10 text-center sm:py-12">
                <CheckCircle className="h-10 w-10 text-rye" />
                <p className="mt-4 font-display text-xl font-extrabold">Message sent.</p>
                <p className="mt-2 text-sm text-ink-muted">
                  Thank you — we&apos;ll reply within one business day.
                </p>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                <input type="checkbox" name="botcheck" className="hidden" />

                {[
                  { id: "name", name: "name", label: "Name", required: true },
                  { id: "email", name: "email", label: "Email", type: "email", required: true },
                  { id: "phone", name: "phone", label: "Phone", required: false },
                  { id: "company", name: "company", label: "Company", required: true },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-light">
                      {f.label}{f.required && " *"}
                    </label>
                    <input
                      id={f.id}
                      name={f.name}
                      type={f.type || "text"}
                      required={f.required}
                      disabled={loading}
                      className="w-full rounded-lg border border-black/10 bg-surface px-4 py-3.5 text-base text-black outline-none transition focus:border-rye focus:ring-2 focus:ring-rye/20 disabled:opacity-50 sm:text-sm"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-light">
                    Leave us a Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    disabled={loading}
                    placeholder="Tell us about your project — websites, apps, CRM, automation..."
                    className="w-full rounded-lg border border-black/10 bg-surface px-4 py-3.5 text-base text-black outline-none transition placeholder:text-ink-light focus:border-rye focus:ring-2 focus:ring-rye/20 disabled:opacity-50 sm:text-sm"
                  />
                </div>

                {error && (
                  <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-600">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-rye flex min-h-[48px] w-full disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
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
