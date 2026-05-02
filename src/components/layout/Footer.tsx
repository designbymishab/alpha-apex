"use client";

import { Logo } from "@/components/ui/Logo";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-32 pb-12 border-t border-white/5 bg-black relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[150px] bg-[var(--accent)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-main relative z-10 flex flex-col items-center">
        {/* Cinematic Brand Area */}
        <div className="text-center mb-24 w-full flex flex-col items-center">
          <div className="mb-12 scale-110 md:scale-125">
            <Logo height={80} />
          </div>
          <p className="text-[var(--text-secondary)] text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-12">
            Guiding enterprise organizations to their highest point of performance through strategy, clarity, and execution discipline.
          </p>
          <Link href="/contact">
            <div className="group relative inline-flex items-center justify-center cursor-pointer">
              <div className="absolute inset-0 bg-[var(--accent)] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 rounded-full" />
              <button className="relative px-8 py-4 bg-white/5 border border-white/10 rounded-full text-xs uppercase tracking-[0.3em] font-medium text-white group-hover:bg-[var(--accent)] group-hover:text-black group-hover:border-[var(--accent)] transition-all duration-500">
                Initiate Contact
              </button>
            </div>
          </Link>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <Image src="/images/fevicon/android-chrome-192x192.png" alt="Alpha Mark" width={16} height={16} className="opacity-30" />
            <p className="text-[var(--text-muted)] text-[10px] uppercase tracking-[0.2em] text-center md:text-left">
              © {currentYear} Alpha Apex Advisory Service. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "Instagram", href: "https://www.instagram.com/alpha_apex_group?igsh=d2J6end3dmwwcW9h&utm_source=qr" },
              { name: "Facebook", href: "https://www.facebook.com/share/r/1B4TDMTLwt/?mibextid=wwXIfr" },
              { name: "WhatsApp", href: "https://wa.me/97470079333" }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--text-tertiary)] hover:text-white transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
