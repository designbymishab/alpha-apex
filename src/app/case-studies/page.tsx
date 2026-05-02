"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const caseStudies = [
  {
    id: 1,
    title: "Global Supply Chain Optimization",
    client: "Fortune 500 Manufacturer",
    category: "Strategic Advisory",
    metrics: "+40% Efficiency | -$2M Costs",
    description: "Restructured the entire supply chain architecture, mitigating global disruptions and increasing cross-border logistical efficiency by 40%.",
    image: "/images/3.png"
  },
  {
    id: 2,
    title: "Digital Transformation & AI Integration",
    client: "Leading Financial Institution",
    category: "Digital Transformation",
    metrics: "3x Processing Speed",
    description: "Implemented custom AI-driven risk assessment models, replacing legacy systems and transforming the digital banking experience.",
    image: "/images/2.png"
  },
  {
    id: 3,
    title: "Executive Leadership Restructuring",
    client: "International Retail Chain",
    category: "Leadership & Governance",
    metrics: "100% Retention in Top Tier",
    description: "Developed a new governance framework and leadership pipeline during a high-stakes merger, ensuring operational continuity.",
    image: "/images/4.png"
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20 relative overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-600/10 blur-[150px] pointer-events-none" />

      <div className="container-main relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-overline">Proven Results</span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-serif text-white mb-8 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Turning complex challenges into <span className="italic text-[var(--accent)]">historic victories</span>
        </motion.h1>

        <motion.p
          className="text-[var(--text-secondary)] text-lg max-w-2xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Explore how Alpha Apex Group has partnered with industry leaders across the globe to redefine what's possible in their sectors.
        </motion.p>

        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={study.id}
              className={`flex flex-col gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col items-start">
                <span className="text-xs uppercase tracking-widest text-[var(--accent)] mb-4">{study.category}</span>
                <h2 className="text-3xl text-white font-serif mb-4">{study.title}</h2>
                <p className="text-[var(--text-tertiary)] text-sm mb-6 uppercase tracking-wider">{study.client}</p>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                  {study.description}
                </p>
                <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-lg mb-8 inline-block">
                  <span className="text-white font-medium">{study.metrics}</span>
                </div>
                
                <Link href="/contact">
                  <Button variant="secondary">Discuss Similar Solutions</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
