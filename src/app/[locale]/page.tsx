import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { GrowthTools } from "@/components/sections/GrowthTools";
import { System } from "@/components/sections/System";
import { Numbers } from "@/components/sections/Numbers";
import { Process } from "@/components/sections/Process";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { MarqueeTicker } from "@/components/ui/MarqueeTicker";
import { SITE_URL as BASE } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isPl = locale === "pl";

  const plUrl = BASE;
  const enUrl = `${BASE}/en`;
  const canonical = isPl ? plUrl : enUrl;

  const title = isPl
    ? "Olik Management – Agencja Performance Marketingu | Leady 24/7"
    : "Olik Management – Performance Marketing Agency | Leads 24/7";
  const description = isPl
    ? "Meta Ads, Google Ads i system AI kwalifikujący leady w 30 sek z automatycznym follow-up. Budujemy maszyny sprzedaży dla firm B2B i e-commerce w Polsce."
    : "Meta Ads, Google Ads and AI system qualifying leads in 30 seconds with automated follow-up. We build sales machines for B2B and e-commerce.";
  const ogTitle = isPl
    ? "System, który sprzedaje 24/7 | Olik Management"
    : "The system that sells 24/7 | Olik Management";

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
      <Process />
      <CTAFinal />
    </>
  );
}
