"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, Loader2 } from "lucide-react";
import { sendToClaude, CLAUDE_STARTERS, type ChatMessage } from "@/lib/claude";

export function ClaudeAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    const t = window.setTimeout(() => inputRef.current?.focus(), 150);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(t);
    };
  }, [open, close]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: ChatMessage = { role: "user", content: text.trim() };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const reply = await sendToClaude(next);
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch {
      setError("Unable to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            key="chat-fab"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-rye shadow-lg shadow-rye/30 transition hover:scale-105 sm:bottom-6 sm:right-6"
            aria-label="Open AI advisor"
          >
            <MessageCircle className="h-6 w-6 text-black" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              key="chat-backdrop"
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[2px] sm:bg-black/30"
              aria-label="Close chat"
            />

            <motion.div
              key="chat-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="chat-title"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-0 right-0 z-[60] flex h-[100dvh] w-full flex-col border-l border-white/10 bg-zinc-950 sm:bottom-6 sm:right-6 sm:h-[560px] sm:w-[400px] sm:rounded-2xl sm:border sm:shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rye">
                    <Sparkles className="h-4 w-4 text-black" />
                  </div>
                  <div>
                    <p id="chat-title" className="text-sm font-semibold text-white">
                      MediaHive Advisor
                    </p>
                    <p className="text-[10px] text-zinc-500">Ask us anything</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={close}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-300 transition hover:border-rye/50 hover:bg-white/10 hover:text-white"
                  aria-label="Close chat"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-4">
                {messages.length === 0 && (
                  <div className="space-y-3">
                    <p className="text-sm text-zinc-400">
                      Ask about custom CRMs, website redesigns, agency training,
                      workflows, SEO, or growing your business with AI.
                    </p>
                    <div className="flex flex-col gap-2">
                      {CLAUDE_STARTERS.map((q) => (
                        <button
                          key={q}
                          type="button"
                          onClick={() => send(q)}
                          className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-left text-xs text-zinc-300 transition hover:border-rye/40 hover:bg-white/[0.06]"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`mb-3 flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        m.role === "user"
                          ? "bg-rye text-black"
                          : "border border-white/10 bg-white/[0.04] text-zinc-300"
                      }`}
                    >
                      {m.content}
                    </div>
                  </div>
                ))}

                {loading && (
                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Thinking...
                  </div>
                )}

                {error && (
                  <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-3 py-2 text-xs text-red-400">
                    {error}
                  </div>
                )}

                <div ref={bottomRef} />
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="border-t border-white/10 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
              >
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about CRM, redesign, agency training..."
                    disabled={loading}
                    className="flex-1 rounded-xl border border-white/10 bg-black px-3 py-2.5 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-rye/50 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rye text-black transition hover:bg-rye-dark disabled:opacity-40"
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
