"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [pastHero, setPastHero] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setPastHero(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const light = !pastHero;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        light
          ? "border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl"
          : "border-b border-white/[0.06] bg-zinc-950/90 backdrop-blur-xl"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#">
          <Logo theme={light ? "light" : "dark"} />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-[13px] font-medium transition",
                light ? "text-zinc-500 hover:text-zinc-900" : "text-zinc-400 hover:text-white"
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className={cn(
            "hidden rounded-full px-5 py-2 text-[13px] font-semibold transition md:inline-flex",
            light ? "bg-zinc-900 text-white hover:bg-zinc-800" : "bg-white text-zinc-900 hover:bg-zinc-200"
          )}
        >
          Contact Us
        </a>
        <button
          className={cn("md:hidden", light ? "text-zinc-900" : "text-white")}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={cn(
              "border-b px-6 py-6 md:hidden",
              light ? "border-zinc-200 bg-white" : "border-white/[0.06] bg-zinc-950"
            )}
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn("block py-2", light ? "text-zinc-700" : "text-zinc-300")}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className={cn(
                "mt-4 block rounded-full py-3 text-center text-sm font-semibold",
                light ? "bg-zinc-900 text-white" : "bg-white text-zinc-900"
              )}
            >
              Contact Us
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
