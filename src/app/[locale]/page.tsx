import { useTranslations } from "next-intl";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { GrowthTools } from "@/components/sections/GrowthTools";
import { System } from "@/components/sections/System";
import { Numbers } from "@/components/sections/Numbers";
import { Comparison } from "@/components/sections/Comparison";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { MarqueeTicker } from "@/components/ui/MarqueeTicker";

export default function HomePage() {
  const t = useTranslations();
  const marqueeItems = t.raw("marquee_top") as string[];

  return (
    <>
      <Hero />
      <MarqueeTicker items={marqueeItems} />
      <Manifesto />
      <GrowthTools />
      <System />
      <Numbers />
      <Testimonials />
      <Comparison />
      <Process />
      <FAQ />
      <CTAFinal />
    </>
  );
}
