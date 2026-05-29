import { useTranslations } from "next-intl";
import { PageHero } from "@/components/sections/PageHero";
import { Services } from "@/components/sections/Services";
import { Comparison } from "@/components/sections/Comparison";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";

export default function UslugiPage() {
  const t = useTranslations("pages.services_hero");
  return (
    <>
      <PageHero
        number={t("number")}
        eyebrow={t("eyebrow")}
        title={t("title")}
        titleAccent={t("titleAccent")}
        description={t("description")}
      />
      <Services />
      <Comparison />
      <Process />
      <FAQ />
      <CTAFinal />
    </>
  );
}
