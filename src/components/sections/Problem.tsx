"use client";
import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { Badge } from "@/components/ui/Badge";

export function Problem() {
  const t = useTranslations("problem");
  const stats = ["stat1","stat2","stat3","stat4"] as const;
  const steps = ["step1","step2","step3","step4","step5"] as const;

  return (
    <section id="problem" className="relative py-32 md:py-48 overflow-hidden">
      <div className="container-wide">
        {/* Heading – editorial scale */}
        <div className="grid grid-cols-12 gap-6 mb-20 md:mb-32">
          <div className="col-span-12 md:col-span-7 lg:col-span-8">
            <SectionReveal>
              <Badge number="02">{t("badge")}</Badge>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2
                className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-balance leading-[0.95]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-white">{t("headline").split(" ")[0]}</span>{" "}
                <span className="text-[var(--color-text-muted)] italic">{t("headline").split(" ").slice(1).join(" ")}</span>
              </h2>
            </SectionReveal>
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-4 md:pt-12">
            <SectionReveal delay={0.2}>
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                {t("subheadline")}
              </p>
            </SectionReveal>
          </div>
        </div>

        {/* Scenario timeline */}
        <SectionReveal>
          <div className="relative mb-24 md:mb-32">
            <p className="eyebrow mb-8">Realny scenariusz</p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
              {steps.map((s, i) => (
                <div
                  key={s}
                  className="bg-[var(--color-bg)] p-6 md:p-7 relative"
                >
                  <span
                    className="num-marker block mb-4"
                    style={{ color: i === 4 ? "#f87171" : undefined }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: i === 4 ? "#fca5a5" : "var(--color-text)",
                      fontWeight: i === 4 ? 500 : 400,
                    }}
                  >
                    {t(`scenario.${s}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Stats grid – editorial big numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {stats.map((key, i) => (
            <SectionReveal key={key} delay={0.08 * i}>
              <div className="bg-[var(--color-bg)] p-6 md:p-8 h-full flex flex-col justify-between min-h-[200px] group hover:bg-[var(--color-surface)] transition-colors duration-500">
                <span className="num-marker">{String(i + 1).padStart(2, "0")} / 04</span>
                <div>
                  <p
                    className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-accent-bright)",
                    }}
                  >
                    <AnimatedNumber value={t(`stats.${key}_value`)} />
                  </p>
                  <p className="text-xs md:text-sm text-[var(--color-text-muted)] leading-snug">
                    {t(`stats.${key}_label`)}
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
