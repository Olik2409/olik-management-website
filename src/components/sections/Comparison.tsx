"use client";
import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";

const rowKeys = ["r1","r2","r3","r4","r5","r6"] as const;

export function Comparison() {
  const t = useTranslations("comparison");

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-6 mb-20 md:mb-28">
          <div className="col-span-12 md:col-span-8">
            <SectionReveal><Badge number="05">{t("badge")}</Badge></SectionReveal>
            <SectionReveal delay={0.1}>
              <h2
                className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-balance leading-[0.95]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-[var(--color-text-muted)] italic">{t("headline")}</span>{" "}
                <span className="text-white">{t("headline2")}</span>
              </h2>
            </SectionReveal>
          </div>
        </div>

        {/* Editorial comparison rows */}
        <div className="space-y-2">
          {/* Header row */}
          <div className="grid grid-cols-12 gap-4 px-4 md:px-6 pb-4 border-b border-white/[0.08]">
            <div className="hidden md:block col-span-4">
              <span className="eyebrow">Kryterium</span>
            </div>
            <div className="col-span-6 md:col-span-4">
              <span className="eyebrow text-[var(--color-text-dim)]">{t("col_typical")}</span>
            </div>
            <div className="col-span-6 md:col-span-4 md:text-right">
              <span className="eyebrow" style={{ color: "var(--color-accent-bright)" }}>{t("col_olik")}</span>
            </div>
          </div>

          {rowKeys.map((key, i) => (
            <SectionReveal key={key} delay={0.04 * i}>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
                className="group grid grid-cols-12 gap-4 items-start md:items-center px-4 md:px-6 py-6 md:py-8 rounded-2xl hover:bg-[var(--color-bg-elevated)] transition-colors duration-500 border-b border-white/[0.04]"
              >
                <div className="col-span-12 md:col-span-4 mb-2 md:mb-0">
                  <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-dim)] mb-1 md:hidden">
                    Kryterium
                  </p>
                  <p
                    className="text-lg md:text-2xl font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t(`rows.${key}.label`)}
                  </p>
                </div>
                <div className="col-span-6 md:col-span-4">
                  <p className="text-sm md:text-base text-[var(--color-text-dim)] line-through decoration-[var(--color-text-faint)] leading-snug">
                    {t(`rows.${key}.typical`)}
                  </p>
                </div>
                <div className="col-span-6 md:col-span-4 md:text-right">
                  <p className="text-sm md:text-base text-white font-medium leading-snug">
                    {t(`rows.${key}.olik`)}
                  </p>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
