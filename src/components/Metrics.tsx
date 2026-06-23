"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { metrics } from "@/lib/data";

function Counter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 2000;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      setN(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  const display = decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString();
  return <span ref={ref}>{display}{suffix}</span>;
}

export function Metrics() {
  return (
    <section className="border-y border-white/[0.06] bg-black py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="text-center">
            <p className="font-display text-4xl font-bold text-white md:text-5xl">
              <Counter
                value={m.value}
                suffix={m.suffix}
                decimals={m.value % 1 !== 0 ? 1 : 0}
              />
            </p>
            <p className="mt-2 text-xs font-medium text-zinc-500">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
