"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { Badge } from "@/components/ui/Badge";

const stats = [
  { key: "stat1", color: "var(--color-led-blue-bright)", glow: "var(--color-led-blue-glow)" },
  { key: "stat2", color: "var(--color-led-green-bright)", glow: "var(--color-led-green-glow)" },
  { key: "stat3", color: "var(--color-led-violet-bright)", glow: "var(--color-led-violet-glow)" },
  { key: "stat4", color: "var(--color-led-pink-bright)", glow: "var(--color-led-pink-glow)" },
] as const;

export function Numbers() {
  const t = useTranslations("numbers");

  return (
    <section className="relative py-20 md:py-28 overflow-hidden ambient-pink-violet">
      {/* Warm scenario ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(239,68,68,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide">
        <div className="grid grid-cols-12 gap-6 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-8">
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
          <div className="col-span-12 md:col-span-4 md:pt-12">
            <SectionReveal delay={0.2}>
              <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed">
                {t("subheadline")}
              </p>
            </SectionReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] rounded-3xl overflow-hidden">
          {stats.map((s, i) => (
            <SectionReveal key={s.key} delay={0.1 * i}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
                className="relative bg-[var(--color-bg)] p-10 md:p-14 h-full min-h-[280px] flex flex-col justify-between group overflow-hidden"
              >
                {/* LED glow on hover */}
                <div
                  className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                  style={{ background: s.color, filter: "blur(80px)" }}
                />

                <div className="relative flex items-center gap-3">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: s.color, boxShadow: `0 0 16px ${s.glow}` }}
                  />
                  <span className="num-marker">{String(i + 1).padStart(2, "0")} / 04</span>
                </div>

                <div className="relative">
                  <p
                    className="text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.85] mb-6 group-hover:scale-[1.02] transition-transform duration-500 origin-left"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: s.color,
                      textShadow: `0 0 60px ${s.glow}`,
                    }}
                  >
                    <AnimatedNumber value={t(`stats.${s.key}_value`)} />
                  </p>
                  <p className="text-base md:text-lg text-white/90 leading-snug max-w-md">
                    {t(`stats.${s.key}_label`)}
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
