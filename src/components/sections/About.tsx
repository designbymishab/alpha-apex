"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const values = [
  "Strategic clarity in every engagement",
  "Measurable outcomes, not just recommendations",
  "Structured leadership guidance",
  "Long-term partnership approach",
];

export function About() {
  return (
    <section className="section-padding relative">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Typography & Image Composition */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-[var(--radius-2xl)] overflow-hidden border border-white/5 aspect-[4/3]">
              <Image
                src="/images/about-team.png"
                alt="Alpha Apex Team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-8 left-8">
                <div className="font-serif text-5xl text-[var(--accent)] font-light leading-none mb-2">15+</div>
                <div className="text-xs uppercase tracking-widest text-white/70">Years of Excellence</div>
              </div>
            </div>
            
            {/* Decorative accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-[var(--accent)]/30 rounded-tl-[var(--radius-2xl)] -z-10" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-overline mb-6 block">Our Approach</span>
            <h2 className="text-display mb-6">
              Providing <span className="italic text-[var(--text-secondary)]">measurable transformation</span>
            </h2>
            <p className="text-body text-lg text-[var(--text-secondary)] mb-10 leading-relaxed">
              Alpha Apex Advisory Service is the master corporate brand
              representing strategic advisory, governance, and long-term
              growth solutions. We guide organizations to their highest
              point of performance through strategy, clarity, and execution
              discipline.
            </p>

            <ul className="space-y-4 mb-10">
              {values.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <CheckCircle
                    size={20}
                    className="shrink-0 mt-1 text-[var(--accent)]"
                  />
                  <span className="text-white font-medium">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
            
            <Link href="/about">
              <Button variant="secondary">
                Learn More About Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
