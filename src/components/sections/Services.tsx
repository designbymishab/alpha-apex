"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import {
  TrendingUp,
  Cpu,
  BarChart3,
  Users,
  Shield,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Strategic Advisory",
    description:
      "Navigate complex market dynamics with data-driven strategies that position your business for long-term success.",
    image: "/images/services-strategy.png",
  },
  {
    icon: Cpu,
    title: "Digital Transformation",
    description:
      "Modernize your technology infrastructure and unlock new digital revenue streams.",
    image: "/images/service-digital.png",
  },
  {
    icon: Users,
    title: "Leadership & Governance",
    description:
      "Build high-performance teams with executive coaching and organizational design.",
    image: "/images/service-leadership.png",
  },
  {
    icon: BarChart3,
    title: "Performance Optimization",
    description:
      "Identify inefficiencies and implement systems that drive measurable improvements.",
    image: null,
  },
  {
    icon: Shield,
    title: "Risk & Compliance",
    description:
      "Strengthen your risk framework with proactive compliance and regulatory navigation.",
    image: null,
  },
  {
    icon: Zap,
    title: "Innovation Labs",
    description:
      "Accelerate innovation from concept validation to market-ready solutions.",
    image: null,
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="container-main max-w-6xl">
        <div className="mb-16">
          <span className="text-overline">What It Does</span>
          <h2 className="text-display mt-4 mb-4">
            Expertise that delivers impact, <br />
            <span className="italic text-[var(--text-secondary)]">automated end to end</span>
          </h2>
          <p className="text-body max-w-2xl">
            We combine deep industry knowledge with modern methodologies to solve your most critical business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="glass-card overflow-hidden group cursor-pointer flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
            <Link href="/strategy" className="flex flex-col h-full w-full">
              {service.image && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover opacity-40 grayscale group-hover:opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                </div>
              )}
              
              <div className="p-8 relative flex-grow flex flex-col">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <service.icon size={20} className="text-[var(--text-primary)]" />
                </div>

                <h3 className="text-xl font-medium text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mt-auto flex items-center gap-2 text-[var(--accent)] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More <ArrowUpRight size={14} />
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
