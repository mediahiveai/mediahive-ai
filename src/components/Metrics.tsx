"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { metrics } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
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

  return (
    <span ref={ref}>
      {Math.round(n).toLocaleString()}
      {suffix}
    </span>
  );
}

export function Metrics() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 sm:px-6 md:grid-cols-4 md:gap-12">
        {metrics.map((m) => (
          <div key={m.label} className="text-center">
            <p className="font-display text-5xl font-extrabold text-black md:text-6xl">
              <Counter value={m.value} suffix={m.suffix} />
            </p>
            <p className="mt-2 text-sm font-medium text-ink-muted">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
