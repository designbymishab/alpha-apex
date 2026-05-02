"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "A deep dive into your organization's current state, identifying core inefficiencies, market positioning, and untapped opportunities.",
  },
  {
    number: "02",
    title: "Framework",
    description:
      "We architect a bespoke performance framework, establishing clear KPIs, leadership structures, and operational workflows.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Working alongside your leadership to execute the strategy, ensuring alignment, rapid deployment, and minimal operational friction.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Continuous monitoring and iterative improvements ensure the strategy not only lands effectively but scales as your organization grows.",
  },
];

export function Process() {
  return (
    <section id="process" className="section-padding relative overflow-hidden bg-black">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[300px] bg-[var(--accent)]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-overline mb-4 block">The Methodology</span>
            <h2 className="text-display mt-4 mb-6">
              A systematic approach <br />
              to <span className="italic text-[var(--text-secondary)]">driving growth</span>
            </h2>
          </div>
          <p className="text-body max-w-sm pb-2">
            Every engagement follows our battle-tested methodology, refined over hundreds of successful projects — no guesswork needed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden group hover:border-white/10 transition-all duration-500 flex flex-col min-h-[320px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Massive background number */}
              <div className="absolute -top-6 -right-4 text-[140px] font-serif font-bold text-white/5 leading-none group-hover:text-[var(--accent)]/10 transition-colors duration-500 pointer-events-none select-none">
                {step.number}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-auto group-hover:bg-[var(--accent)]/10 group-hover:border-[var(--accent)]/20 transition-all duration-500">
                  <span className="text-sm font-medium text-white group-hover:text-[var(--accent)] transition-colors">
                    {step.number}
                  </span>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-[var(--accent)] transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Glowing hover line at bottom */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[var(--accent)] to-transparent group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
