"use client";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/Badge";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ArrowRight } from "lucide-react";

const stepKeys = ["step1","step2","step3","step4","step5","step6","step7"] as const;

export function System() {
  const t = useTranslations("system");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section id="system" className="relative py-32 md:py-48 overflow-hidden bg-[var(--color-bg-elevated)]">
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(37,99,235,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative container-wide">
        <div className="grid grid-cols-12 gap-6 mb-20 md:mb-28">
          <div className="col-span-12 md:col-span-7">
            <SectionReveal><Badge number="03">{t("badge")}</Badge></SectionReveal>
            <SectionReveal delay={0.1}>
              <h2
                className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-balance leading-[0.95]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-white">{t("headline")}</span>{" "}
                <span className="text-[var(--color-accent-bright)] italic">{t("headline2")}</span>
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

        {/* Steps – vertical editorial list */}
        <div ref={ref} className="relative">
          {/* Connector line */}
          <div className="absolute left-6 md:left-10 top-8 bottom-8 w-px bg-white/[0.08]" />
          <motion.div
            className="absolute left-6 md:left-10 top-8 w-px"
            style={{ background: "var(--color-accent-bright)", transformOrigin: "top" }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-6 md:left-10 top-8 w-px"
            style={{
              height: "calc(100% - 4rem)",
              background: "linear-gradient(to bottom, transparent, var(--color-accent-bright))",
              transformOrigin: "top",
            }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />

          <div className="space-y-2">
            {stepKeys.map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: "easeOut" }}
                className="relative grid grid-cols-12 gap-4 md:gap-8 items-start py-6 md:py-8 pl-16 md:pl-24 border-b border-white/[0.06] last:border-b-0 group"
              >
                {/* Step node */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 md:left-4 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="relative flex h-12 w-12 items-center justify-center rounded-full border bg-[var(--color-bg-elevated)] z-10"
                    style={{ borderColor: "var(--color-accent-bright)" }}
                  >
                    <span
                      className="text-sm font-bold"
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-accent-bright)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute inset-0 rounded-full opacity-20 blur-md" style={{ background: "var(--color-accent)" }} />
                  </motion.div>
                </div>

                <div className="col-span-12 md:col-span-4">
                  <h3
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:text-[var(--color-accent-bright)] transition-colors duration-300"
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
                    style={{ color: "var(--color-accent-bright)" }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-accent-bright)" }} />
                    {t(`steps.${key}.time`)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <SectionReveal delay={0.3}>
          <div className="mt-20 flex justify-center">
            <Link
              href="/kontakt"
              className="group inline-flex items-center justify-between gap-6 rounded-full pl-7 pr-2 py-2 text-sm font-semibold text-white transition-all duration-300 hover:gap-8"
              style={{ background: "var(--color-accent)", boxShadow: "0 8px 32px var(--color-accent-glow)" }}
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
