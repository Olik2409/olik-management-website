"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const caseKeys = ["c1", "c2", "c3"] as const;
const caseColors = [
  "var(--color-led-blue-bright)",
  "var(--color-led-violet-bright)",
  "var(--color-led-green-bright)",
];
const metricKeys = ["m1", "m2", "m3"] as const;
const metricColors = [
  "var(--color-led-blue-bright)",
  "var(--color-led-green-bright)",
  "var(--color-led-pink-bright)",
];

export function Results() {
  const t = useTranslations("results");

  return (
    <section id="results" className="relative py-20 md:py-28 overflow-hidden ambient-green-blue">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 20% 60%, rgba(0,255,157,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative container-wide">
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
                <span className="text-white">{t("headline")}</span>{" "}
                <span
                  className="italic"
                  style={{ color: "var(--color-led-green-bright)", textShadow: "0 0 30px var(--color-led-green-glow)" }}
                >
                  {t("headline2")}
                </span>
              </h2>
            </SectionReveal>
          </div>
          <div className="col-span-12 md:col-span-4 md:pt-12">
            <SectionReveal delay={0.2}>
              <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
                {t("subheadline")}
              </p>
            </SectionReveal>
          </div>
        </div>

        <SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-3xl overflow-hidden mb-16 md:mb-20">
            {metricKeys.map((key, i) => (
              <motion.div
                key={key}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
                className="relative bg-[var(--color-bg-elevated)] p-8 md:p-12 flex flex-col gap-4 group overflow-hidden"
              >
                <div
                  className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                  style={{ background: metricColors[i], filter: "blur(80px)" }}
                />
                <div className="relative flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: metricColors[i], boxShadow: `0 0 12px ${metricColors[i]}` }}
                  />
                  <span className="num-marker">{String(i + 1).padStart(2, "0")} / 03</span>
                </div>
                <p
                  className="relative text-5xl md:text-6xl lg:text-7xl font-bold leading-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: metricColors[i],
                    textShadow: `0 0 40px ${metricColors[i]}40`,
                  }}
                >
                  <AnimatedNumber value={t(`metrics.${key}_value`)} />
                </p>
                <p className="relative text-sm text-[var(--color-text-muted)] leading-snug max-w-xs">
                  {t(`metrics.${key}_label`)}
                </p>
              </motion.div>
            ))}
          </div>
        </SectionReveal>

        <p className="eyebrow mb-8">Wybrane realizacje</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseKeys.map((key, i) => {
            const color = caseColors[i];
            return (
              <SectionReveal key={key} delay={0.1 * i}>
                <Link href="/case-studies" className="block group">
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.4 }}
                    className="relative h-full rounded-3xl overflow-hidden bg-[var(--color-bg)] border border-white/[0.06] hover:border-white/[0.14] transition-colors duration-500"
                  >
                    <div
                      className="aspect-[4/3] relative overflow-hidden"
                      style={{
                        background:
                          i === 0
                            ? "linear-gradient(135deg, #1e1b4b 0%, #2563eb 50%, #00ff9d 100%)"
                            : i === 1
                            ? "linear-gradient(135deg, #4c1d95 0%, #8b5cf6 50%, #ec4899 100%)"
                            : "linear-gradient(135deg, #064e3b 0%, #00ff9d 50%, #2563eb 100%)",
                      }}
                    >
                      <div
                        className="absolute inset-0 mix-blend-overlay opacity-30"
                        style={{
                          backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                        <span className="num-marker text-white/80">CASE {String(i + 1).padStart(2, "0")}</span>
                        <span
                          className="flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300"
                          style={{
                            background: "rgba(255,255,255,0.1)",
                            boxShadow: `0 0 0 0 ${color}`,
                          }}
                        >
                          <ArrowUpRight size={14} className="text-white group-hover:rotate-45 transition-transform" />
                        </span>
                      </div>
                      <div className="absolute bottom-5 left-5 right-5">
                        <p className="text-xs font-semibold tracking-wider uppercase text-white/90">
                          {t(`cases.${key}.industry`)}
                        </p>
                      </div>
                    </div>

                    <div className="p-7 md:p-8">
                      <p
                        className="text-2xl md:text-3xl font-bold text-white leading-tight mb-6"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        &ldquo;{t(`cases.${key}.result`)}&rdquo;
                      </p>

                      <div className="space-y-4 pt-6 border-t border-white/[0.08]">
                        <div>
                          <p className="eyebrow mb-1.5">{t("case_problem")}</p>
                          <p className="text-sm text-[var(--color-text-muted)]">{t(`cases.${key}.problem`)}</p>
                        </div>
                        <div>
                          <p className="eyebrow mb-1.5" style={{ color }}>
                            {t("case_action")}
                          </p>
                          <p className="text-sm text-white/90">{t(`cases.${key}.action`)}</p>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal delay={0.3}>
          <div className="mt-16 flex justify-center">
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
            >
              <span className="link-underline">Zobacz wszystkie case studies</span>
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
