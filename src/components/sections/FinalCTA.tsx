"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="section-padding relative overflow-hidden bg-black">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-main relative z-10 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-display mb-8">
            Ready to reach your <br />
            <span className="italic text-[var(--text-secondary)]">highest point of performance?</span>
          </h2>
          <p className="text-body text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Join the ranks of high-performing organizations that have transformed their future with Alpha Apex Advisory Service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Schedule a Consultation
              </Button>
            </Link>
            <Link href="/strategy">
              <Button size="lg" variant="secondary">
                View Our Strategy
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
