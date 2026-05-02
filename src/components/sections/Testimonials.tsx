"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Alpha Apex transformed our legacy operations into a high-performance engine. Their strategic clarity is unmatched in the advisory space.",
    author: "Robert Chen",
    role: "CEO, Global Logistics Corp",
  },
  {
    quote: "The framework they implemented provided us with clear KPIs and a measurable path to scaling our Series B startup to a market leader.",
    author: "Sarah Jenkins",
    role: "Founder, Fintech Innovators",
  },
  {
    quote: "Professional, disciplined, and focused on execution. They don't just give advice; they ensure the transformation actually lands.",
    author: "Marcus Thorne",
    role: "Director of Ops, HealthSystems",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative bg-[#050505]">
      <div className="container-main">
        <div className="text-center mb-16">
          <span className="text-overline">Testimonials</span>
          <h2 className="text-display mt-4">
            Hear from our <br />
            <span className="italic text-[var(--text-secondary)]">partners in excellence</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.author}
              className="glass-card p-8 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div>
                <Quote size={32} className="text-[var(--accent)] opacity-20 mb-6" />
                <p className="text-white text-lg leading-relaxed font-light mb-8 italic">
                  "{item.quote}"
                </p>
              </div>
              <div>
                <div className="font-semibold text-white">{item.author}</div>
                <div className="text-xs text-[var(--text-tertiary)] uppercase tracking-wider mt-1">
                  {item.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
