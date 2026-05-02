"use client";

import LogoLoop from "@/components/ui/LogoLoop";

const imageLogos = [
  { src: "/images/sub-business-logos/1.png", alt: "Partner 1" },
  { src: "/images/sub-business-logos/2.png", alt: "Partner 2" },
  { src: "/images/sub-business-logos/3.png", alt: "Partner 3" },
  { src: "/images/sub-business-logos/4.png", alt: "Partner 4" },
  { src: "/images/sub-business-logos/5.png", alt: "Partner 5" },
];

export function TrustBar() {
  return (
    <section className="py-16 border-b border-white/5 bg-black overflow-hidden relative">
      <div className="container-main max-w-5xl">
        <p className="text-center text-[10px] uppercase tracking-[0.2em] text-[var(--text-tertiary)] mb-12">
          Trusted by leading organizations
        </p>
        
        <div className="relative w-full overflow-hidden" style={{ height: '120px' }}>
          {/* @ts-ignore */}
          <LogoLoop
            logos={imageLogos}
            speed={40}
            direction="left"
            logoHeight={100}
            gap={120}
            hoverSpeed={15}
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Trusted Partners"
          />
        </div>
      </div>
    </section>
  );
}
