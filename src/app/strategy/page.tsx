"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const services = [
  {
    title: "Strategic Advisory",
    description: "Navigate market volatility and secure long-term positioning. We provide C-suite executives with data-backed insights and comprehensive growth frameworks.",
    features: ["Market Entry Strategy", "M&A Advisory", "Competitive Intelligence"]
  },
  {
    title: "Digital Transformation",
    description: "Modernize legacy systems and integrate cutting-edge AI technologies to drive operational efficiency and create new value streams.",
    features: ["AI Integration Models", "Cloud Architecture", "Data Infrastructure"]
  },
  {
    title: "Leadership & Governance",
    description: "Build robust organizational structures and leadership pipelines that ensure resilience and continuous corporate evolution.",
    features: ["Board Advisory", "Executive Coaching", "Organizational Design"]
  },
  {
    title: "Innovation Labs",
    description: "Establish dedicated R&D frameworks within your enterprise to prototype, test, and scale disruptive products before the competition.",
    features: ["Rapid Prototyping", "Venture Building", "Tech Scouting"]
  }
];

export default function StrategyPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-amber-600/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="container-main relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col items-center text-center"
        >
          <span className="text-overline mb-6">Our Capabilities</span>
          <h1 className="text-4xl md:text-6xl font-serif text-white max-w-4xl leading-tight">
            Comprehensive solutions for <br />
            <span className="italic text-[var(--accent)]">enterprise dominance</span>
          </h1>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className={`relative bg-white/[0.02] border border-white/5 p-10 rounded-3xl overflow-hidden group hover:border-white/10 transition-all duration-500 ${
                idx === 0 || idx === 3 ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/0 via-transparent to-[var(--accent)]/0 group-hover:from-[var(--accent)]/10 transition-all duration-500 z-0" />
              <div className="relative z-10 h-full flex flex-col">
              <h2 className="text-2xl text-white font-serif mb-4 group-hover:text-[var(--accent)] transition-colors">{service.title}</h2>
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed h-24">
                {service.description}
              </p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-[var(--text-tertiary)] group-hover:text-[var(--text-secondary)] transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mr-4 shadow-[0_0_8px_var(--accent)]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="mt-auto">
                <Button variant="secondary" className="w-full bg-white/5 hover:bg-white/10 border-none group-hover:bg-[var(--accent)] group-hover:text-black transition-all duration-300">
                  Inquire About This Service
                </Button>
              </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl text-white font-serif mb-6">Ready to accelerate your growth?</h2>
          <p className="text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
            Our strategic advisors are ready to analyze your current position and architect a custom roadmap to industry leadership.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="primary">
              Schedule an Executive Briefing
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
