"use client";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/Badge";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ArrowRight } from "lucide-react";

const stepKeys = ["step1", "step2", "step3", "step4", "step5", "step6", "step7"] as const;
const stepColors = [
  "var(--color-led-blue-bright)",
  "var(--color-led-blue-bright)",
  "var(--color-led-violet-bright)",
  "var(--color-led-violet-bright)",
  "var(--color-led-green-bright)",
  "var(--color-led-green-bright)",
  "var(--color-led-pink-bright)",
];

export function System() {
  const t = useTranslations("system");
  const ref = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(listRef, { once: true, margin: "-15% 0px" });
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 80%", "end 50%"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={ref}
      id="system"
      className="relative py-20 md:py-28 overflow-hidden bg-[var(--color-bg-elevated)]"
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-[10%] h-96 w-96 rounded-full"
          style={{ background: "var(--color-led-blue)", filter: "blur(140px)", opacity: 0.15 }}
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-[10%] h-96 w-96 rounded-full"
          style={{ background: "var(--color-led-violet)", filter: "blur(140px)", opacity: 0.15 }}
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative container-wide">
        <div className="grid grid-cols-12 gap-6 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-7">
            <SectionReveal>
              <Badge number="03">{t("badge")}</Badge>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2
                className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-balance leading-[0.95]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-white">{t("headline")}</span>{" "}
                <span style={{ color: "var(--color-led-blue-bright)", textShadow: "0 0 30px var(--color-led-blue-glow)" }} className="italic">
                  {t("headline2")}
                </span>
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

        {/* Steps – vertical flow with animated SVG line */}
        <div ref={listRef} className="relative">
          {/* Background line */}
          <div className="absolute left-6 md:left-10 top-8 bottom-8 w-px bg-white/[0.06]" />

          {/* Animated LED line */}
          <svg
            className="absolute left-6 md:left-10 top-8 -translate-x-1/2 pointer-events-none"
            width="2"
            height="100%"
            style={{ height: "calc(100% - 4rem)" }}
            preserveAspectRatio="none"
          >
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="url(#led-gradient)"
              strokeWidth="2"
              style={{ pathLength }}
              filter="url(#led-glow)"
            />
            <defs>
              <linearGradient id="led-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="33%" stopColor="#a855f7" />
                <stop offset="66%" stopColor="#00ff9d" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
              <filter id="led-glow">
                <feGaussianBlur stdDeviation="2" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>

          <div className="space-y-2">
            {stepKeys.map((key, i) => {
              const color = stepColors[i];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: "easeOut" }}
                  className="relative grid grid-cols-12 gap-4 md:gap-8 items-start py-6 md:py-8 pl-16 md:pl-24 border-b border-white/[0.06] last:border-b-0 group"
                >
                  {/* Step node */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 md:left-4 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.08, type: "spring", stiffness: 200 }}
                      className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 bg-[var(--color-bg-elevated)] z-10"
                      style={{ borderColor: color }}
                    >
                      <span
                        className="text-sm font-bold"
                        style={{ fontFamily: "var(--font-display)", color }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div
                        className="absolute inset-0 rounded-full blur-md opacity-50"
                        style={{ background: color }}
                      />
                    </motion.div>
                  </div>

                  <div className="col-span-12 md:col-span-4">
                    <h3
                      className="text-xl md:text-2xl lg:text-3xl font-bold text-white transition-colors duration-300"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {t(`steps.${key}.name`)}
                    </h3>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
                      {t(`steps.${key}.desc`)}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-2 md:text-right">
                    <span
                      className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase"
                      style={{ color }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: color, boxShadow: `0 0 12px ${color}` }}
                      />
                      {t(`steps.${key}.time`)}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <SectionReveal delay={0.3}>
          <div className="mt-20 flex justify-center">
            <Link
              href="/kontakt"
              className="group inline-flex items-center justify-between gap-6 rounded-full pl-7 pr-2 py-2 text-sm font-semibold text-white transition-all duration-300 hover:gap-8"
              style={{
                background: "var(--color-led-blue)",
                boxShadow: "0 8px 32px var(--color-led-blue-glow)",
              }}
            >
              <span>{t("cta")}</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-[-45deg]">
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
