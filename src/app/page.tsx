import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { About } from "@/components/sections/About";
import { Founder } from "@/components/sections/Founder";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <About />
      <Founder />
      <Services />
      <Stats />
      <CaseStudies />
      <Process />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
