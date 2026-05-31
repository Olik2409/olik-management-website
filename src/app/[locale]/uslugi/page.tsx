import type { Metadata } from "next";
import { useTranslations, useLocale } from "next-intl";
import { PageHero } from "@/components/sections/PageHero";
import { Services } from "@/components/sections/Services";
import { Comparison } from "@/components/sections/Comparison";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { FAQPageSchema } from "@/components/seo/FAQPageSchema";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

const BASE = "https://olikmanagement.com";
const FAQ_KEYS = ["q1", "q2", "q3", "q4", "q5", "q6"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isPl = locale === "pl";

  const plUrl = `${BASE}/uslugi`;
  const enUrl = `${BASE}/en/uslugi`;
  const canonical = isPl ? plUrl : enUrl;

  const title = isPl
    ? "Usługi | Meta Ads, Google Ads, AI Automation – Olik Management"
    : "Services | Meta Ads, Google Ads, AI Automation – Olik Management";
  const description = isPl
    ? "Performance Ads, Brand & Tracking, AI Lead Automation, Growth Engine. Server-side tracking CAPI, chatbot AI, voice AI, live dashboard dla B2B i e-commerce."
    : "Performance Ads, Brand & Tracking, AI Lead Automation, Growth Engine. CAPI tracking, AI chatbot, voice AI, live dashboard for B2B and e-commerce.";
  const ogTitle = isPl
    ? "4 filary kompletnego systemu sprzedaży | Olik Management"
    : "4 pillars of a complete sales system | Olik Management";

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
      title: ogTitle,
      description,
      url: canonical,
      locale: isPl ? "pl_PL" : "en_US",
    },
    twitter: {
      title: ogTitle,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export default function UslugiPage() {
  const t = useTranslations("pages.services_hero");
  const faq = useTranslations("faq");
  const locale = useLocale();

  const faqItems = FAQ_KEYS.map((key) => ({
    question: faq(`items.${key}.q`),
    answer: faq(`items.${key}.a`),
  }));

  return (
    <>
      <FAQPageSchema items={faqItems} />
      <ServiceSchema locale={locale} />
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
