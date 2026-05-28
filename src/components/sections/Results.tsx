"use client";
import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight } from "lucide-react";

const caseKeys = ["c1","c2","c3"] as const;
const metricKeys = ["m1","m2","m3"] as const;

export function Results() {
  const t = useTranslations("results");

  return (
    <section id="results" className="py-24 md:py-32">
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
          <SectionReveal delay={0.2}>
            <p className="mt-4 text-[var(--color-text-secondary)]">{t("subheadline")}</p>
          </SectionReveal>
        </div>

        {/* Metrics bar */}
        <SectionReveal delay={0.15}>
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8">
            {metricKeys.map((key) => (
              <div key={key} className="text-center">
                <p
                  className="text-3xl md:text-4xl font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}
                >
                  <AnimatedNumber value={t(`metrics.${key}_value`)} />
                </p>
                <p className="mt-1 text-xs md:text-sm text-[var(--color-text-secondary)]">
                  {t(`metrics.${key}_label`)}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Case studies */}
        {/* Replace with real data after onboarding */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseKeys.map((key, i) => (
            <SectionReveal key={key} delay={0.1 * i}>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 h-full flex flex-col hover:border-[var(--color-accent)]/30 transition-colors duration-300">
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      background: "var(--color-accent-muted)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {t(`cases.${key}.industry`)}
                  </span>
                  <ArrowUpRight size={16} style={{ color: "var(--color-text-muted)" }} />
                </div>

                <div className="space-y-3 flex-1">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
                      {t("case_problem")}
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {t(`cases.${key}.problem`)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
                      {t("case_action")}
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {t(`cases.${key}.action`)}
                    </p>
                  </div>
                </div>

                <div
                  className="mt-4 pt-4 border-t border-[var(--color-border)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-accent)" }}>
                    {t("case_result")}
                  </p>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                    {t(`cases.${key}.result`)}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
