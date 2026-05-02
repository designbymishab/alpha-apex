"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SoftAurora from "@/components/ui/SoftAurora";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20 relative overflow-hidden">
      {/* Dynamic Aurora Background */}
      <div className="fixed inset-0 z-[0] opacity-30 mix-blend-screen pointer-events-none">
        <SoftAurora
          speed={0.3}
          scale={1.5}
          brightness={1.2}
          color1="#1A3B5C"
          color2="#F59E0B"
          noiseFrequency={1.5}
          noiseAmplitude={0.5}
        />
      </div>

      <div className="container-main relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-overline">Our Legacy</span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-serif text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Pioneering strategic <span className="italic text-[var(--accent)]">excellence</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl text-white mb-6 font-serif">Who We Are</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Alpha Apex Group is a premier advisory firm specializing in strategic consulting, digital transformation, and leadership governance. We partner with the world's most ambitious organizations to solve their most complex challenges.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              With a foundation built on integrity, foresight, and relentless execution, we guide businesses to the highest point of their potential. Our team comprises industry veterans, strategic innovators, and digital pioneers dedicated to delivering outsized returns and sustainable growth.
            </p>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10" />
            <Image
              src="/images/hero-bg.png"
              alt="Alpha Apex Team"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>

        <div className="mt-32">
          <motion.h2 
            className="text-3xl text-white mb-12 text-center font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Precision", desc: "Every strategy is calculated, backed by data and executed with meticulous attention to detail." },
              { title: "Foresight", desc: "We don't just react to markets; we anticipate shifts and position our clients to lead." },
              { title: "Integrity", desc: "Uncompromising ethics and transparency form the bedrock of every partnership." }
            ].map((value, idx) => (
              <motion.div 
                key={value.title}
                className="relative bg-white/[0.02] border border-white/5 p-8 rounded-3xl overflow-hidden group hover:border-white/10 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/0 via-transparent to-[var(--accent)]/0 group-hover:from-[var(--accent)]/10 transition-all duration-500 z-0" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                     <span className="text-[var(--accent)] font-serif text-xl">{idx + 1}</span>
                  </div>
                  <h3 className="text-xl text-white mb-4 group-hover:text-[var(--accent)] transition-colors">{value.title}</h3>
                  <p className="text-[var(--text-tertiary)] text-sm leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Ecosystem Section */}
        <div className="mt-32 border-t border-white/5 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-overline mb-4 block">The Alpha Group</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
              Our Global Ecosystem
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
              Alpha Apex Group operates a diversified portfolio of specialized academies, high-end logistics networks, and wellness institutions across the globe.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                name: "Alpha Global Logistics Academy", 
                desc: "Empowering the next generation of logistics professionals through world-class training and certification.",
                link: "https://www.instagram.com/alphagloballogisticsacademy?igsh=MTV0M25tb3psNWg2YQ%3D%3D&utm_source=qr",
                tag: "Education"
              },
              { 
                name: "Alpha Academy Philippines", 
                desc: "A premier institution delivering specialized skills and career advancement opportunities in the Philippines.",
                link: "https://www.instagram.com/alpha_academy_philippines?igsh=NzczZDRpNjlpd3hm",
                tag: "Education"
              },
              { 
                name: "Alpha Logistics W.L.L", 
                desc: "Seamless, high-efficiency global logistics and supply chain management solutions tailored for modern enterprise.",
                link: "https://www.instagram.com/alpha_logistics.wll?igsh=ODR6MjFiNWkzeTUx",
                tag: "Logistics"
              },
              { 
                name: "Alpha Physio Malappuram", 
                desc: "Advanced physiotherapy and wellness services dedicated to performance recovery and holistic health.",
                link: "https://www.instagram.com/alphaphysio_malappuram?igsh=eHB5aGp3anU0MzEw&utm_source=qr",
                tag: "Healthcare"
              }
            ].map((sub, idx) => (
              <motion.a 
                href={sub.link}
                target="_blank"
                rel="noopener noreferrer"
                key={sub.name}
                className="relative bg-white/[0.01] border border-white/5 p-8 rounded-3xl overflow-hidden group hover:border-[var(--accent)]/30 hover:bg-white/[0.03] transition-all duration-500 block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/0 via-transparent to-[var(--accent)]/0 group-hover:from-[var(--accent)]/5 transition-all duration-500 z-0" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-[10px] uppercase tracking-widest text-[var(--accent)] border border-[var(--accent)]/20 px-3 py-1 rounded-full bg-[var(--accent)]/10">
                      {sub.tag}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:text-[var(--accent)] group-hover:border-[var(--accent)]/50 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl text-white mb-3 font-serif group-hover:text-[var(--accent)] transition-colors">{sub.name}</h3>
                  <p className="text-[var(--text-tertiary)] text-sm leading-relaxed">{sub.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
