"use client";

import { motion } from "framer-motion";
import { leadership } from "@/lib/data";

export function Team() {
  return (
    <section id="team" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="section-label">Our Team</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-black sm:text-4xl">
            The people behind MediaHive.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            AI architects, consultants, and project managers who turn your ideas into
            production systems — on time and on scope.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {leadership.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-rye p-8 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rye font-display text-lg font-extrabold text-black">
                {person.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-black">{person.name}</h3>
              <p className="mt-1 text-sm font-semibold text-rye-dark">{person.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{person.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
