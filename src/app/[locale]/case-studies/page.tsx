import { useTranslations } from "next-intl";
import { PageHero } from "@/components/sections/PageHero";
import { Results } from "@/components/sections/Results";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTAFinal } from "@/components/sections/CTAFinal";

export default function CaseStudiesPage() {
  const t = useTranslations("pages.case_hero");
  return (
    <>
      <PageHero
        number={t("number")}
        eyebrow={t("eyebrow")}
        title={t("title")}
        titleAccent={t("titleAccent")}
        description={t("description")}
      />
      <Results />
      <Testimonials />
      <CTAFinal />
    </>
  );
}
