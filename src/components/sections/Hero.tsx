"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import SoftAurora from "@/components/ui/SoftAurora";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-28 md:pt-20 px-4">
      {/* Dynamic Aurora Background */}
      <div className="absolute inset-0 z-[1] opacity-40 mix-blend-screen">
        <SoftAurora
          speed={0.5}
          scale={1.2}
          brightness={1.5}
          color1="#1A3B5C"
          color2="#F59E0B"
          noiseFrequency={2.0}
          noiseAmplitude={0.8}
          bandHeight={0.4}
          bandSpread={0.8}
          octaveDecay={0.2}
          layerOffset={0}
          colorSpeed={0.8}
          enableMouseInteraction
          mouseInfluence={0.15}
        />
      </div>

      {/* Background Image with heavy dark overlay */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Corporate Advisory"
          fill
          sizes="100vw"
          className="object-cover opacity-20 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div> */}

      {/* Background glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--accent)]/5 blur-[120px] pointer-events-none" />

      <div className="container-main relative z-10 flex flex-col items-center text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-overline">Strategic Advisory Service</span>
        </motion.div>

        <motion.h1
          className="text-hero mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Everything your business needs, <br className="hidden md:block" />
          <span className="italic text-[var(--text-secondary)] font-serif">guided to the highest point</span>
        </motion.h1>

        <motion.p
          className="text-body text-lg md:text-xl max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          From the moment you partner with Alpha Apex to the moment growth accelerates — 
          every step is handled, tracked, and optimized for peak performance.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" variant="primary" className="w-full">
              Get Started
            </Button>
          </Link>
          <Link href="/case-studies" className="w-full sm:w-auto">
            <Button size="lg" variant="secondary" className="w-full">
              View Case Studies
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative lower fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
