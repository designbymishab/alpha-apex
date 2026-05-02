"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "$2.4B+",
    description: "Value created for clients through strategic optimization and growth initiatives",
  },
  {
    value: "200+",
    description: "Enterprise organizations guided — across 15+ different industries globally",
  },
  {
    value: "98%",
    description: "Client retention rate, demonstrating our commitment to long-term partnerships",
  },
  {
    value: "24/7",
    description: "Dedicated executive support and governance available whenever you need it",
  },
];

export function Stats() {
  return (
    <section className="section-padding relative border-y border-white/5 bg-[#050505]">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <div 
                className="font-serif text-[clamp(3.5rem,5vw,5rem)] leading-none text-[var(--accent)] font-light mb-4 tracking-tight"
                style={{ 
                  textShadow: "0 4px 20px rgba(245, 158, 11, 0.15)" 
                }}
              >
                {stat.value}
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-[250px]">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
