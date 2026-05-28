import { PageHero } from "@/components/sections/PageHero";
import { Results } from "@/components/sections/Results";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTAFinal } from "@/components/sections/CTAFinal";

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        number="REZULTATY"
        eyebrow="Case Studies"
        title="Wyniki, które"
        titleAccent="zmieniają firmy."
        description="Realne projekty, realne liczby. Każdy case to system, który przetestowaliśmy, zoptymalizowaliśmy i przeskalowaliśmy razem z klientem."
      />
      <Results />
      <Testimonials />
      <CTAFinal />
    </>
  );
}
