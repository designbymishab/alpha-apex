"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/strategy" },
  { label: "Case Studies", href: "/case-studies" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  const menuVariants = {
    closed: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
    open: { opacity: 1, clipPath: "inset(0 0 0% 0)", transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
    }),
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[var(--z-sticky)]">
      {/* Dynamic Navbar Background (separated to prevent fixed clipping) */}
      <div
        className={`absolute inset-0 pointer-events-none transition-all duration-300 ${scrolled && !mobileOpen
            ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent border-b border-transparent"
          }`}
      />

      <div className="container-main relative z-50 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="relative z-50">
          <Logo />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--text-secondary)] hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact">
            <Button
              variant="primary"
              size="sm"
              className="rounded-full"
            >
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 text-white p-2 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Cinematic Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/95 backdrop-blur-3xl md:hidden flex flex-col justify-between pt-32 pb-12 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div custom={i} variants={linkVariants} initial="closed" animate="open" exit="closed" key={link.label}>
                  <Link
                    href={link.href}
                    className="text-5xl sm:text-6xl font-serif text-[var(--text-secondary)] hover:text-white transition-colors hover:italic flex items-center gap-4 group"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="w-0 h-px bg-[var(--accent)] group-hover:w-12 transition-all duration-300" />
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-16 flex flex-col gap-8 border-t border-white/10 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/contact" className="w-full" onClick={() => setMobileOpen(false)}>
                <Button variant="primary" className="w-full py-4 rounded-xl text-xs tracking-widest uppercase">
                  Schedule Consultation
                </Button>
              </Link>

              <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
                <div className="flex items-center gap-3">
                  <Image src="/images/fevicon/android-chrome-192x192.png" alt="Alpha Mark" width={24} height={24} className="opacity-50" />
                  <a href="mailto:apexgroupalpha@gmail.com" className="hover:text-white transition-colors">apexgroupalpha@gmail.com</a>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-white transition-colors">IG</a>
                  <a href="#" className="hover:text-white transition-colors">FB</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
