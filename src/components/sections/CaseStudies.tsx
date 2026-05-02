"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

const caseStudies = [
  {
    category: "Fintech",
    title: "Scaling a fintech startup from Series A to $500M valuation",
    description:
      "Developed go-to-market strategy, optimized unit economics, and built the operational framework for rapid, sustainable growth.",
    metrics: [
      { label: "Revenue Growth", value: "340%" },
      { label: "Time to Market", value: "-60%" },
    ],
    image: "/images/case-fintech.png",
  },
  {
    category: "Healthcare",
    title: "Digital transformation for a national healthcare provider",
    description:
      "End-to-end modernization of patient management systems, reducing wait times and improving care quality across 120+ facilities.",
    metrics: [
      { label: "Efficiency Gain", value: "85%" },
      { label: "Cost Reduction", value: "$12M" },
    ],
    image: "/images/case-healthcare.png",
  },
  {
    category: "Manufacturing",
    title: "Operational excellence for Fortune 500 manufacturer",
    description:
      "Redesigned supply chain operations, implemented predictive analytics, and achieved record throughput with reduced overhead.",
    metrics: [
      { label: "Throughput", value: "+120%" },
      { label: "Waste Reduction", value: "45%" },
    ],
    image: "/images/case-manufacturing.png",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding relative">
      <div className="container-main max-w-6xl">
        <div className="mb-16">
          <span className="text-overline">Case Studies</span>
          <h2 className="text-display mt-4 mb-4">
            Results that speak volumes, <br />
            <span className="italic text-[var(--text-secondary)]">across every industry</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              className="glass-card overflow-hidden group cursor-pointer flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
            <Link href="/case-studies" className="block h-full">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                <div className="absolute top-6 left-6">
                  <Badge>{study.category}</Badge>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow mt-[-20px] relative z-10">
                <h3 className="text-xl font-serif font-medium text-white mb-4 leading-snug">
                  {study.title}
                </h3>
                
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8 flex-grow">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5 mt-auto">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="font-serif text-2xl font-medium text-[var(--accent)] mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs text-[var(--text-tertiary)] uppercase tracking-wider">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
