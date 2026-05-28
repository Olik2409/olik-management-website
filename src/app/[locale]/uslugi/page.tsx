import { PageHero } from "@/components/sections/PageHero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CTAFinal } from "@/components/sections/CTAFinal";

export default function UslugiPage() {
  return (
    <>
      <PageHero
        number="USŁUGI"
        eyebrow="Co budujemy"
        title="System wzrostu"
        titleAccent="szyty pod Twój biznes."
        description="Performance ads + AI automatyzacje + dashboard. Cztery poziomy współpracy – od pojedynczych kampanii do kompletnej maszyny sprzedaży 24/7."
      />
      <Services />
      <Process />
      <CTAFinal />
    </>
  );
}
