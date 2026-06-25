"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clientLogos } from "@/lib/data";

interface ClientLogosProps {
  variant?: "marquee" | "slider";
  className?: string;
}

export function ClientLogos({ variant = "marquee", className = "" }: ClientLogosProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (variant !== "slider") return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % clientLogos.length);
    }, 3500);
    return () => clearInterval(id);
  }, [variant]);

  useEffect(() => {
    if (variant !== "slider" || !trackRef.current) return;
    const card = trackRef.current.querySelector<HTMLElement>("[data-client-card]");
    if (!card) return;
    const gap = 16;
    trackRef.current.scrollTo({
      left: active * (card.offsetWidth + gap),
      behavior: "smooth",
    });
  }, [active, variant]);

  const prev = () => setActive((i) => (i - 1 + clientLogos.length) % clientLogos.length);
  const next = () => setActive((i) => (i + 1) % clientLogos.length);

  if (variant === "slider") {
    return (
      <div className={`relative ${className}`}>
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scrollbar-none"
        >
          {clientLogos.map((client) => (
            <div
              key={client.name}
              data-client-card
              className="flex w-[calc(50%-8px)] shrink-0 snap-start flex-col items-center justify-center rounded-xl border border-black/8 bg-white px-4 py-8 sm:w-[calc(33.333%-11px)]"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-11 w-auto max-w-[160px] object-contain sm:h-12 sm:max-w-[180px]"
              />
              <p className="mt-4 text-center text-sm font-bold text-black">{client.name}</p>
              {client.subtitle && (
                <p className="mt-1 text-center text-xs text-ink-light">{client.subtitle}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous clients"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white transition hover:border-rye hover:bg-rye/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {clientLogos.map((c, i) => (
              <button
                key={c.name}
                aria-label={`Show ${c.name}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-6 bg-rye" : "w-2 bg-black/15"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next clients"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white transition hover:border-rye hover:bg-rye/10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <div className="flex animate-marquee items-center gap-12 sm:gap-20">
        {[...clientLogos, ...clientLogos].map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="flex shrink-0 flex-col items-center gap-2 px-3"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-10 w-auto max-w-[130px] object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-12"
            />
            {client.subtitle && (
              <span className="whitespace-nowrap text-[10px] font-medium text-ink-light">
                {client.subtitle}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
