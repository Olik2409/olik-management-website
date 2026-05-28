"use client";
import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const rowKeys = ["r1", "r2", "r3", "r4", "r5", "r6"] as const;

export function Comparison() {
  const t = useTranslations("comparison");

  return (
    <section className="relative pt-10 md:pt-14 pb-20 md:pb-28 overflow-hidden ambient-blue-violet">
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-6 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-8">
            <SectionReveal>
              <Badge number="06">{t("badge")}</Badge>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2
                className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-balance leading-[0.95]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-[var(--color-text-muted)] italic">{t("headline")}</span>{" "}
                <span className="text-white">{t("headline2")}</span>
              </h2>
            </SectionReveal>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-px bg-white/[0.06] rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="hidden md:block col-span-4 bg-[var(--color-bg)] p-6">
            <span className="eyebrow">{t("criterion")}</span>
          </div>
          <div className="col-span-6 md:col-span-4 bg-[var(--color-bg)] p-6 flex items-center gap-2">
            <X size={16} className="text-red-400/70" />
            <span className="eyebrow text-[var(--color-text-dim)]">{t("col_typical")}</span>
          </div>
          <div className="col-span-6 md:col-span-4 bg-[var(--color-bg)] p-6 flex items-center gap-2 justify-end md:justify-start">
            <Check size={16} style={{ color: "var(--color-led-green-bright)" }} />
            <span
              className="eyebrow"
              style={{ color: "var(--color-led-green-bright)" }}
            >
              {t("col_olik")}
            </span>
          </div>

          {rowKeys.map((key, i) => (
            <SectionReveal key={key} delay={0.04 * i} className="col-span-12 contents">
              <motion.div
                whileHover={{ x: 0 }}
                className="hidden md:flex col-span-4 bg-[var(--color-bg)] p-6 md:p-8 items-center group hover:bg-[var(--color-bg-elevated)] transition-colors duration-300"
              >
                <p
                  className="text-lg md:text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t(`rows.${key}.label`)}
                </p>
              </motion.div>
              <div className="col-span-12 md:hidden bg-[var(--color-bg)] px-4 pt-4">
                <p
                  className="text-lg font-bold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t(`rows.${key}.label`)}
                </p>
              </div>
              <div className="col-span-6 md:col-span-4 bg-[var(--color-bg)] p-6 md:p-8">
                <p className="text-sm md:text-base text-[var(--color-text-dim)] line-through decoration-[var(--color-text-faint)] leading-snug">
                  {t(`rows.${key}.typical`)}
                </p>
              </div>
              <div className="col-span-6 md:col-span-4 bg-[var(--color-bg)] p-6 md:p-8">
                <p className="text-sm md:text-base text-white font-medium leading-snug">
                  {t(`rows.${key}.olik`)}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
