"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function Founder() {
  return (
    <section className="section-padding relative bg-black/50">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Founder Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-[var(--radius-2xl)] overflow-hidden border border-white/5 aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/Founder-image.png"
                alt="Founder of Alpha Group"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8">
                <div className="font-serif text-3xl text-white font-medium leading-none mb-2">Anees</div>
                <div className="text-xs uppercase tracking-widest text-[var(--accent)]">Founder & Visionary Leader</div>
              </div>
            </div>
            
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-[var(--accent)]/30 rounded-bl-[var(--radius-2xl)] -z-10 hidden lg:block" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-overline mb-6 block">Leadership</span>
            <h2 className="text-display mb-6">
              A Vision for <span className="italic text-[var(--text-secondary)]">Excellence</span>
            </h2>
            <p className="text-body text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
              Under the strategic leadership of our founder, Anees, Alpha Apex Advisory Group was established with a singular mission: to redefine corporate governance and drive sustainable growth for modern enterprises. 
            </p>
            <p className="text-body text-lg text-[var(--text-secondary)] mb-10 leading-relaxed">
              With deep expertise in transformative business strategies, Anees has shaped Alpha Group into a beacon of high-end consulting, characterized by absolute clarity, long-term partnerships, and measurable, high-impact results.
            </p>
            
            <Link href="/about">
              <Button variant="secondary">
                Connect on LinkedIn
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
