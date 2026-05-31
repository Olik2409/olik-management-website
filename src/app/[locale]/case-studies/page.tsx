import type { Metadata } from "next";
import { useTranslations } from "next-intl";

const BASE = "https://olikmanagement.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isPl = locale === "pl";

  const plUrl = `${BASE}/case-studies`;
  const enUrl = `${BASE}/en/case-studies`;
  const canonical = isPl ? plUrl : enUrl;

  const title = isPl
    ? "Case Studies | Wyniki kampanii – Olik Management"
    : "Case Studies | Campaign results – Olik Management";
  const description = isPl
    ? "Konkretne wyniki: ROAS, koszt leada, wzrosty konwersji. Zobacz jak systemy Olik Management działają dla firm B2B i e-commerce."
    : "Concrete results: ROAS, cost per lead, conversion growth. See how Olik Management systems work for B2B and e-commerce companies.";

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        pl: plUrl,
        en: enUrl,
        "x-default": plUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: isPl ? "pl_PL" : "en_US",
    },
    twitter: {
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}
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
