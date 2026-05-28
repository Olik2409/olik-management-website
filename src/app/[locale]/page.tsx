import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/ui/MobileCtaBar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { System } from "@/components/sections/System";
import { Services } from "@/components/sections/Services";
import { Comparison } from "@/components/sections/Comparison";
import { Results } from "@/components/sections/Results";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";

export default function HomePage() {
  return (
    <SmoothScroll>
      <Header />
      <main>
        <Hero />
        <Problem />
        <System />
        <Services />
        <Comparison />
        <Results />
        <Process />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <MobileCtaBar />
    </SmoothScroll>
  );
}
