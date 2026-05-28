"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/Badge";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, Target, Brain, Zap, BarChart3 } from "lucide-react";
import { useState } from "react";

const tools = [
  {
    key: "t1",
    color: "var(--color-led-blue-bright)",
    glow: "var(--color-led-blue-glow)",
    Icon: Target,
    accent: "PERFORMANCE",
  },
  {
    key: "t2",
    color: "var(--color-led-violet-bright)",
    glow: "var(--color-led-violet-glow)",
    Icon: Brain,
    accent: "INTELLIGENCE",
  },
  {
    key: "t3",
    color: "var(--color-led-green-bright)",
    glow: "var(--color-led-green-glow)",
    Icon: Zap,
    accent: "AUTOMATION",
  },
  {
    key: "t4",
    color: "var(--color-led-pink-bright)",
    glow: "var(--color-led-pink-glow)",
    Icon: BarChart3,
    accent: "VISIBILITY",
  },
] as const;

export function GrowthTools() {
  const t = useTranslations("growthTools");
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" className="relative py-32 md:py-48 overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-6 mb-20 md:mb-28">
          <div className="col-span-12 md:col-span-8">
            <SectionReveal>
              <Badge number="02">{t("badge")}</Badge>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2
                className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-balance leading-[0.95]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-white">{t("headline1")}</span>{" "}
                <span className="text-[var(--color-text-muted)] italic">{t("headline2")}</span>
              </h2>
            </SectionReveal>
          </div>
          <div className="col-span-12 md:col-span-4 md:pt-12">
            <SectionReveal delay={0.2}>
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                {t("subheadline")}
              </p>
            </SectionReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {tools.map((tool, i) => {
            const { Icon } = tool;
            const isHovered = hovered === tool.key;
            const features = t.raw(`tools.${tool.key}.features`) as string[];
            return (
              <SectionReveal key={tool.key} delay={0.1 * i}>
                <motion.div
                  onHoverStart={() => setHovered(tool.key)}
                  onHoverEnd={() => setHovered(null)}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group relative rounded-3xl overflow-hidden h-full p-px"
                  style={{
                    background: isHovered
                      ? `linear-gradient(135deg, ${tool.color}40, transparent 60%)`
                      : "rgba(255,255,255,0.06)",
                    transition: "background 0.5s ease",
                  }}
                >
                  <div className="relative h-full rounded-[calc(1.5rem-1px)] bg-[var(--color-bg-elevated)] p-8 md:p-10 overflow-hidden">
                    {/* LED orb that intensifies on hover */}
                    <motion.div
                      animate={{
                        opacity: isHovered ? 0.6 : 0.2,
                        scale: isHovered ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                      className="absolute -top-24 -right-24 h-72 w-72 rounded-full pointer-events-none"
                      style={{
                        background: tool.color,
                        filter: "blur(80px)",
                      }}
                    />

                    {/* Top row */}
                    <div className="relative flex items-start justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <span
                          className="flex h-2.5 w-2.5 rounded-full"
                          style={{
                            background: tool.color,
                            boxShadow: `0 0 16px ${tool.glow}`,
                          }}
                        />
                        <span className="num-marker" style={{ color: tool.color }}>
                          {tool.accent} · {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <motion.div
                        animate={{
                          rotate: isHovered ? 45 : 0,
                          background: isHovered ? tool.color : "transparent",
                        }}
                        transition={{ duration: 0.4 }}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12]"
                      >
                        <ArrowUpRight size={16} className="text-white" />
                      </motion.div>
                    </div>

                    {/* Icon with LED ring */}
                    <div className="relative mb-8">
                      <motion.div
                        animate={{ scale: isHovered ? 1.05 : 1 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center justify-center h-16 w-16 rounded-2xl border"
                        style={{
                          borderColor: tool.color,
                          background: `${tool.color}10`,
                          boxShadow: isHovered ? `0 0 40px ${tool.glow}` : "none",
                          transition: "box-shadow 0.4s ease",
                        }}
                      >
                        <Icon size={28} style={{ color: tool.color }} />
                      </motion.div>
                    </div>

                    {/* Title + desc */}
                    <h3
                      className="relative text-3xl md:text-4xl font-bold text-white mb-4 leading-[1.05]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {t(`tools.${tool.key}.title`)}
                    </h3>
                    <p className="relative text-base text-[var(--color-text-muted)] leading-relaxed mb-8 max-w-md">
                      {t(`tools.${tool.key}.desc`)}
                    </p>

                    {/* Features list with LED dots */}
                    <ul className="relative space-y-3 pt-6 border-t border-white/[0.08]">
                      {features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-3 text-sm text-white/85">
                          <span
                            className="mt-2 h-1 w-1 rounded-full shrink-0"
                            style={{
                              background: tool.color,
                              boxShadow: `0 0 8px ${tool.glow}`,
                            }}
                          />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Outcome stripe at bottom */}
                    <div
                      className="relative mt-8 -mx-8 md:-mx-10 -mb-8 md:-mb-10 px-8 md:px-10 py-5 border-t"
                      style={{ borderColor: `${tool.color}30`, background: `${tool.color}08` }}
                    >
                      <p
                        className="eyebrow mb-1"
                        style={{ color: tool.color }}
                      >
                        {t("outcome_label")}
                      </p>
                      <p className="text-sm font-medium text-white">
                        {t(`tools.${tool.key}.outcome`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal delay={0.3}>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/uslugi"
              className="group inline-flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
            >
              <span className="link-underline">{t("cta")}</span>
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
