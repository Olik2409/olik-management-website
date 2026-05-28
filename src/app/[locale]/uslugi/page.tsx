import { PageHero } from "@/components/sections/PageHero";
import { Services } from "@/components/sections/Services";
import { Comparison } from "@/components/sections/Comparison";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";

export default function UslugiPage() {
  return (
    <>
      <PageHero
        number="USŁUGI"
        eyebrow="Co budujemy"
        title="System wzrostu"
        titleAccent="szyty pod Twój biznes."
        description="Performance ads + AI automatyzacje + live dashboard. Dostosowujemy zakres do etapu Twojej firmy – od pierwszych kampanii po kompletną maszynę sprzedaży 24/7."
      />
      <Services />
      <Comparison />
      <Process />
      <FAQ />
      <CTAFinal />
    </>
  );
}
