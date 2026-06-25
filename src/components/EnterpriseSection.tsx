"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { enterpriseHighlights, deployments } from "@/lib/data";
import { ClientLogos } from "./ClientLogos";

export function EnterpriseSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [projectIdx, setProjectIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setProjectIdx((i) => (i + 1) % deployments.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector<HTMLElement>("[data-project-card]");
    if (!card) return;
    trackRef.current.scrollTo({
      left: projectIdx * (card.offsetWidth + 16),
      behavior: "smooth",
    });
  }, [projectIdx]);

  return (
    <section id="enterprise" className="border-y border-black/5 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label">Enterprise</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-black sm:text-4xl md:text-5xl">
              Intelligence systems for global organisations.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              Trusted by HSBC, NHS England, Tower Hamlets — London Borough Council —
              Fitness First, TfL, and Canary Wharf. We deliver bespoke CRM platforms,
              compliance-ready automation, and full-stack digital transformation from £50,000.
            </p>
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-black/8 bg-white px-5 py-4">
              <Shield className="h-8 w-8 shrink-0 text-rye" />
              <div>
                <p className="font-display text-2xl font-extrabold text-black">88%</p>
                <p className="text-sm text-ink-muted">Average operational improvement</p>
              </div>
            </div>
            <a href="#contact" className="btn-dark mt-8">
              Partner With Us
            </a>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {enterpriseHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-rye p-6"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-rye-dark">
                  {item.stat}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold text-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.25em] text-ink-light">
            Our Clients
          </p>
          <ClientLogos variant="slider" />
        </motion.div>

        <div className="mt-16">
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.25em] text-ink-light">
            Featured Projects
          </p>
          <div className="relative">
            <div
              ref={trackRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scrollbar-none"
            >
              {deployments.map((d) => (
                <a
                  key={d.org}
                  href="#deployments"
                  data-project-card
                  className="group w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={d.poster}
                      alt={d.org}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-light">
                      {d.vertical}
                    </p>
                    <p className="mt-1 font-display text-lg font-bold text-black">{d.org}</p>
                    <p className="mt-2 text-sm text-ink-muted line-clamp-2">{d.headline}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-black group-hover:text-rye-dark">
                      See Project <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {deployments.map((d, i) => (
                <button
                  key={d.org}
                  aria-label={`Show ${d.org} project`}
                  onClick={() => setProjectIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === projectIdx ? "w-6 bg-rye" : "w-2 bg-black/15"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
