"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/Badge";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const tierKeys = ["t1","t2","t3","t4"] as const;
const popularTier = "t3";

export function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-24 md:py-32">
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
            <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
              {t("subheadline")}
            </p>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {tierKeys.map((tier, i) => {
            const isPopular = tier === popularTier;
            const features = t.raw(`tiers.${tier}.features`) as string[];
            return (
              <SectionReveal key={tier} delay={0.1 * i}>
                <div
                  className={cn(
                    "relative flex flex-col rounded-2xl border p-6 h-full transition-all duration-300 hover:-translate-y-1",
                    isPopular
                      ? "border-[var(--color-accent)]/50 bg-[var(--color-surface-elevated)]"
                      : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-subtle)]"
                  )}
                  style={isPopular ? { boxShadow: "var(--shadow-glow)" } : {}}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-6">
                      <span className="rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-bold text-black">
                        {t("badge_popular")}
                      </span>
                    </div>
                  )}

                  <h3
                    className="text-base font-bold text-[var(--color-text-primary)] mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t(`tiers.${tier}.name`)}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] mb-6 leading-relaxed">
                    {t(`tiers.${tier}.for`)}
                  </p>

                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
                      {t("feature_label")}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                          <Check
                            size={14}
                            className="mt-0.5 shrink-0"
                            style={{ color: "var(--color-accent)" }}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="rounded-xl p-4 mt-auto"
                    style={{ background: "var(--color-accent-muted)" }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-accent)" }}>
                      {t("outcome_label")}
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {t(`tiers.${tier}.outcome`)}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal delay={0.4}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:gap-3 transition-all duration-200"
            >
              Porozmawiajmy o odpowiednim Tier dla Twojej firmy
              <ArrowRight size={16} />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
