"use client";
import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/Badge";

const stepKeys = ["s1","s2","s3","s4"] as const;

export function Process() {
  const t = useTranslations("process");

  return (
    <section id="process" className="relative py-32 md:py-48">
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-6 mb-20 md:mb-28">
          <div className="col-span-12 md:col-span-8">
            <SectionReveal><Badge number="07">{t("badge")}</Badge></SectionReveal>
            <SectionReveal delay={0.1}>
              <h2
                className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-balance leading-[0.95]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-white">{t("headline")}</span>{" "}
                <span className="text-[var(--color-text-muted)] italic">{t("headline2")}</span>
              </h2>
            </SectionReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] rounded-3xl overflow-hidden">
          {stepKeys.map((key, i) => (
            <SectionReveal key={key} delay={0.1 * i}>
              <div className="relative bg-[var(--color-bg)] p-8 md:p-12 h-full flex flex-col group hover:bg-[var(--color-bg-elevated)] transition-colors duration-500">
                <div className="flex items-start justify-between mb-8">
                  <span
                    className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none text-white/[0.06] group-hover:text-[var(--color-accent)]/30 transition-colors duration-700"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t(`steps.${key}.num`)}
                  </span>
                  <span className="num-marker mt-2">krok {i + 1} / 4</span>
                </div>
                <h3
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t(`steps.${key}.name`)}
                </h3>
                <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
                  {t(`steps.${key}.desc`)}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
