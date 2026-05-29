"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/Badge";

const stepKeys = ["s1", "s2", "s3", "s4"] as const;
const colors = [
  "var(--color-led-blue-bright)",
  "var(--color-led-violet-bright)",
  "var(--color-led-pink-bright)",
  "var(--color-led-green-bright)",
];

export function Process() {
  const t = useTranslations("process");

  return (
    <section id="process" className="relative py-20 md:py-28 overflow-hidden ambient-multi">
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-6 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-8">
            <SectionReveal>
              <Badge number="07">{t("badge")}</Badge>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] rounded-3xl overflow-hidden">
          {stepKeys.map((key, i) => {
            const color = colors[i];
            return (
              <SectionReveal key={key} delay={0.1 * i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4 }}
                  className="relative bg-[var(--color-bg)] p-8 md:p-12 h-full flex flex-col group overflow-hidden"
                >
                  <div
                    className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                    style={{ background: color, filter: "blur(80px)" }}
                  />

                  <div className="relative flex items-start justify-between mb-8">
                    <span
                      className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none transition-colors duration-700"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "rgba(255,255,255,0.06)",
                      }}
                    >
                      {t(`steps.${key}.num`)}
                    </span>
                    <div className="flex items-center gap-2 mt-2">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          background: color,
                          boxShadow: `0 0 12px ${color}`,
                        }}
                      />
                      <span className="num-marker" style={{ color }}>
                        {t("step_counter", { n: i + 1 })}
                      </span>
                    </div>
                  </div>

                  <h3
                    className="relative text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[var(--color-led-blue-bright)] transition-colors duration-500"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t(`steps.${key}.name`)}
                  </h3>
                  <p className="relative text-base text-[var(--color-text-muted)] leading-relaxed">
                    {t(`steps.${key}.desc`)}
                  </p>
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
