"use client";
import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { Badge } from "@/components/ui/Badge";
import { AlertCircle, Clock, TrendingUp, Users } from "lucide-react";

const icons = [TrendingUp, Users, Clock, AlertCircle];

export function Problem() {
  const t = useTranslations("problem");

  const stats = [
    { key: "stat1", icon: icons[0] },
    { key: "stat2", icon: icons[1] },
    { key: "stat3", icon: icons[2] },
    { key: "stat4", icon: icons[3] },
  ] as const;

  return (
    <section id="problem" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 20% 60%, rgba(232,160,69,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <SectionReveal>
              <Badge>{t("badge")}</Badge>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2
                className="mt-4 text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] text-balance"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("headline")}
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">
                {t("subheadline")}
              </p>
            </SectionReveal>

            {/* Scenario */}
            <SectionReveal delay={0.3}>
              <div className="mt-8 space-y-3">
                {(["step1","step2","step3","step4","step5"] as const).map((s, i) => (
                  <div key={s} className="flex items-start gap-3">
                    <div
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                      style={{
                        background: i === 4 ? "rgba(239,68,68,0.15)" : "var(--color-surface)",
                        color: i === 4 ? "rgb(239,68,68)" : "var(--color-text-muted)",
                        border: `1px solid ${i === 4 ? "rgba(239,68,68,0.3)" : "var(--color-border)"}`,
                      }}
                    >
                      {i + 1}
                    </div>
                    <p
                      className="text-sm"
                      style={{
                        color: i === 4 ? "rgb(239,68,68)" : "var(--color-text-secondary)",
                        fontWeight: i === 4 ? 500 : 400,
                      }}
                    >
                      {t(`scenario.${s}`)}
                    </p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Right – stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map(({ key, icon: Icon }, i) => (
              <SectionReveal key={key} delay={0.15 * i}>
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 hover:border-[var(--color-accent)]/30 transition-colors duration-300">
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: "var(--color-accent-muted)" }}
                  >
                    <Icon size={18} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <p
                    className="text-4xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}
                  >
                    <AnimatedNumber value={t(`stats.${key}_value`)} />
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-snug">
                    {t(`stats.${key}_label`)}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
