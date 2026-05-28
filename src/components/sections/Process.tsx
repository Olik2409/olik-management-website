"use client";
import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/Badge";

const stepKeys = ["s1","s2","s3","s4"] as const;

export function Process() {
  const t = useTranslations("process");

  return (
    <section id="process" className="py-24 md:py-32 bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center mb-16">
          <SectionReveal><Badge>{t("badge")}</Badge></SectionReveal>
          <SectionReveal delay={0.1}>
            <h2
              className="mt-4 text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
            >
              {t("headline")}{" "}
              <span style={{ color: "var(--color-accent)" }}>{t("headline2")}</span>
            </h2>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stepKeys.map((key, i) => (
            <SectionReveal key={key} delay={0.12 * i}>
              <div className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 h-full">
                {/* Step number */}
                <div
                  className="text-6xl font-bold mb-4 leading-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-accent)",
                    opacity: 0.25,
                  }}
                >
                  {t(`steps.${key}.num`)}
                </div>
                <h3
                  className="text-lg font-bold text-[var(--color-text-primary)] mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t(`steps.${key}.name`)}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {t(`steps.${key}.desc`)}
                </p>

                {/* Connector arrow (not on last) */}
                {i < 3 && (
                  <div className="hidden xl:flex absolute -right-3 top-1/2 -translate-y-1/2 h-6 w-6 items-center justify-center rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] z-10">
                    <span style={{ color: "var(--color-accent)", fontSize: 10, fontWeight: 700 }}>→</span>
                  </div>
                )}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
