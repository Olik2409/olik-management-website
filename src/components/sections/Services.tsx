"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const tierKeys = ["t1", "t2", "t3", "t4"] as const;
const tierColors = [
  "var(--color-led-blue-bright)",
  "var(--color-led-violet-bright)",
  "var(--color-led-green-bright)",
  "var(--color-led-pink-bright)",
];
const popularTier = "t3";

export function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-6 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-7">
            <SectionReveal>
              <Badge number="04">{t("badge")}</Badge>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2
                className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-balance leading-[0.95]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-white">{t("headline")}</span>{" "}
                <span className="text-[var(--color-text-muted)] italic">{t("headline2")}</span>
              </h2>
            </SectionReveal>
          </div>
          <div className="col-span-12 md:col-span-5 md:pt-12">
            <SectionReveal delay={0.2}>
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                {t("subheadline")}
              </p>
            </SectionReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {tierKeys.map((tier, i) => {
            const isPopular = tier === popularTier;
            const color = tierColors[i];
            const features = t.raw(`tiers.${tier}.features`) as string[];
            return (
              <SectionReveal key={tier} delay={0.08 * i}>
                <div
                  className={cn(
                    "group relative flex flex-col p-8 md:p-10 h-full rounded-3xl border transition-all duration-500 hover:-translate-y-1 overflow-hidden",
                    isPopular
                      ? "bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-bg-elevated)]"
                      : "border-white/[0.08] bg-[var(--color-bg-elevated)] hover:border-white/[0.16]"
                  )}
                  style={isPopular ? { borderColor: color } : {}}
                >
                  <div
                    className="absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                    style={{ background: color, filter: "blur(80px)" }}
                  />

                  {isPopular && (
                    <div className="absolute top-6 right-6">
                      <span
                        className="rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase"
                        style={{
                          background: color,
                          color: "#0a0a12",
                          boxShadow: `0 0 16px ${color}`,
                        }}
                      >
                        {t("badge_popular")}
                      </span>
                    </div>
                  )}

                  <div className="relative flex items-center gap-3 mb-5">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        background: color,
                        boxShadow: `0 0 12px ${color}`,
                      }}
                    />
                    <span className="num-marker" style={{ color }}>
                      {String(i + 1).padStart(2, "0")} / 04
                    </span>
                  </div>

                  <h3
                    className="relative text-3xl md:text-4xl font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t(`tiers.${tier}.name`)}
                  </h3>
                  <p className="relative text-sm text-[var(--color-text-muted)] mb-8 leading-relaxed">
                    {t(`tiers.${tier}.for`)}
                  </p>

                  <ul className="relative space-y-3 mb-8 flex-1">
                    {features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-3 text-sm text-white/90">
                        <Check size={14} className="mt-1 shrink-0" style={{ color }} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className="relative rounded-2xl p-5 border"
                    style={{
                      background: isPopular ? `${color}10` : "var(--color-surface)",
                      borderColor: isPopular ? `${color}40` : "var(--color-border-subtle)",
                    }}
                  >
                    <p className="eyebrow mb-2" style={{ color: isPopular ? color : undefined }}>
                      {t("outcome_label")}
                    </p>
                    <p className="text-sm font-medium text-white">{t(`tiers.${tier}.outcome`)}</p>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal delay={0.3}>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
            >
              <span className="link-underline">Umów discovery call</span>
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
