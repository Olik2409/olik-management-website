"use client";
import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/Badge";
import { X, Check } from "lucide-react";

const rowKeys = ["r1","r2","r3","r4","r5","r6"] as const;

export function Comparison() {
  const t = useTranslations("comparison");

  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-secondary)]">
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

        {/* Desktop table */}
        <SectionReveal delay={0.2}>
          <div className="hidden md:block rounded-2xl border border-[var(--color-border)] overflow-hidden">
            <div className="grid grid-cols-3 bg-[var(--color-surface)]">
              <div className="p-5 border-r border-[var(--color-border)]">
                <span className="text-sm font-semibold text-[var(--color-text-muted)]">Kryterium</span>
              </div>
              <div className="p-5 border-r border-[var(--color-border)]">
                <span className="text-sm font-semibold text-[var(--color-text-secondary)]">{t("col_typical")}</span>
              </div>
              <div className="p-5" style={{ background: "var(--color-accent-muted)" }}>
                <span className="text-sm font-semibold" style={{ color: "var(--color-accent)" }}>{t("col_olik")}</span>
              </div>
            </div>
            {rowKeys.map((key, i) => (
              <div
                key={key}
                className="grid grid-cols-3 border-t border-[var(--color-border)]"
                style={{ background: i % 2 === 0 ? "var(--color-bg)" : "var(--color-surface)" }}
              >
                <div className="p-5 border-r border-[var(--color-border)]">
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">
                    {t(`rows.${key}.label`)}
                  </span>
                </div>
                <div className="p-5 border-r border-[var(--color-border)] flex items-start gap-2">
                  <X size={14} className="mt-0.5 shrink-0 text-red-400" />
                  <span className="text-sm text-[var(--color-text-muted)]">
                    {t(`rows.${key}.typical`)}
                  </span>
                </div>
                <div className="p-5 flex items-start gap-2">
                  <Check size={14} className="mt-0.5 shrink-0" style={{ color: "var(--color-accent)" }} />
                  <span className="text-sm text-[var(--color-text-primary)] font-medium">
                    {t(`rows.${key}.olik`)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {rowKeys.map((key, i) => (
            <SectionReveal key={key} delay={0.1 * i}>
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
                <div className="px-4 py-3 border-b border-[var(--color-border)]">
                  <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                    {t(`rows.${key}.label`)}
                  </span>
                </div>
                <div className="grid grid-cols-2 divide-x divide-[var(--color-border)]">
                  <div className="p-4 flex items-start gap-2">
                    <X size={13} className="mt-0.5 shrink-0 text-red-400" />
                    <span className="text-xs text-[var(--color-text-muted)]">
                      {t(`rows.${key}.typical`)}
                    </span>
                  </div>
                  <div className="p-4 flex items-start gap-2" style={{ background: "var(--color-accent-muted)" }}>
                    <Check size={13} className="mt-0.5 shrink-0" style={{ color: "var(--color-accent)" }} />
                    <span className="text-xs font-medium text-[var(--color-text-primary)]">
                      {t(`rows.${key}.olik`)}
                    </span>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
