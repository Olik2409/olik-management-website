import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { SITE_URL as BASE } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isPl = locale === "pl";

  const plUrl = `${BASE}/o-nas`;
  const enUrl = `${BASE}/en/o-nas`;
  const canonical = isPl ? plUrl : enUrl;

  const title = isPl
    ? "O nas | Kim jesteśmy – Olik Management"
    : "About us | Who we are – Olik Management";
  const description = isPl
    ? "Olik Management to polska agencja performance marketingu. Budujemy systemy sprzedaży oparte o Meta Ads, Google Ads i automatyzacje AI dla firm B2B i e-commerce."
    : "Olik Management is a Polish performance marketing agency. We build sales systems based on Meta Ads, Google Ads and AI automations for B2B and e-commerce companies.";

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
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/Badge";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { AuroraShader } from "@/components/ui/animated-shader-background";
import Image from "next/image";

export default function ONasPage() {
  const h = useTranslations("pages.about_hero");
  const t = useTranslations("pages.about");

  const values = [
    { num: "01", title: t("v1_title"), desc: t("v1_desc") },
    { num: "02", title: t("v2_title"), desc: t("v2_desc") },
    { num: "03", title: t("v3_title"), desc: t("v3_desc") },
  ];

  return (
    <>
      <PageHero
        number={h("number")}
        eyebrow={h("eyebrow")}
        title={h("title")}
        titleAccent={h("titleAccent")}
        description={h("description")}
      />

      {/* Manifesto */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 15% 0%, rgba(59,130,246,0.10) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 90% 100%, rgba(0,255,157,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="relative container-tight">
          <div className="grid grid-cols-12 gap-6 mb-10 md:mb-16">
            <div className="col-span-12 md:col-span-8 md:col-start-3">
              <SectionReveal>
                <p className="eyebrow mb-6">{t("manifest_eyebrow")}</p>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p
                  className="text-xl md:text-2xl lg:text-3xl text-white leading-tight font-medium text-balance"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("manifest_1")}
                  <span className="text-[var(--color-text-muted)] italic"> {t("manifest_quote")}</span>
                  &nbsp;{t("manifest_2")}
                  <span className="text-[var(--color-accent-bright)] italic"> {t("manifest_accent")}</span>
                  {t("manifest_3")}
                </p>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="relative py-12 md:py-24 bg-[var(--color-bg-elevated)] overflow-hidden">
        {/* Aurora background effect */}
        <AuroraShader />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(10,10,18,0.6)" }}
        />

        <div className="relative container-wide">
          <div className="grid grid-cols-12 gap-6 md:gap-12 items-center">
            <div className="col-span-12 md:col-span-5">
              <SectionReveal>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/[0.08]">
                  <Image
                    src="/images/brand/Owner.png"
                    alt="Oliwier Kochanowicz – Olik Management"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 768px) 40vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </SectionReveal>
            </div>
            <div className="col-span-12 md:col-span-7 md:pl-8">
              <SectionReveal delay={0.1}>
                <Badge number="01">{t("founder_badge")}</Badge>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <h2
                  className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[0.95]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("founder_title")} &nbsp;
                  <span className="text-[var(--color-text-muted)] italic">{t("founder_title_accent")}</span>
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <p className="mt-6 text-lg text-[var(--color-text-muted)] leading-relaxed">
                  {t("founder_p1")}
                </p>
              </SectionReveal>
              <SectionReveal delay={0.25}>
                <p className="mt-4 text-lg text-[var(--color-text-muted)] leading-relaxed">
                  {t("founder_p2")}
                </p>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-12 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 85% 0%, rgba(168,85,247,0.10) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 10% 90%, rgba(244,114,182,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="relative container-wide">
          <div className="grid grid-cols-12 gap-6 mb-10 md:mb-16">
            <div className="col-span-12 md:col-span-8">
              <SectionReveal><Badge number="02">{t("values_badge")}</Badge></SectionReveal>
              <SectionReveal delay={0.1}>
                <h2
                  className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance leading-[0.95]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("values_title")}
                </h2>
              </SectionReveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-3xl overflow-hidden">
            {values.map((v, i) => (
              <SectionReveal key={v.num} delay={0.1 * i}>
                <div className="bg-[var(--color-bg)] p-6 md:p-10 h-full flex flex-col">
                  <span
                    className="text-5xl md:text-6xl font-bold mb-6"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-accent-bright)" }}
                  >
                    {v.num}
                  </span>
                  <h3
                    className="text-2xl font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CTAFinal />
    </>
  );
}
