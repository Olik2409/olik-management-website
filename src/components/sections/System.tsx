"use client";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/Badge";
import { SectionReveal } from "@/components/ui/SectionReveal";
import {
  Megaphone, Globe, Bot, Mail, Phone, Database, BarChart3, CalendarDays
} from "lucide-react";

const stepIcons = [Megaphone, Globe, Bot, Mail, Phone, Database, BarChart3];
const stepColors = [
  "#e8a045", "#f0b060", "#e8a045", "#f0b060", "#e8a045", "#f0b060", "#e8a045"
];

export function System() {
  const t = useTranslations("system");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const steps = (["step1","step2","step3","step4","step5","step6","step7"] as const).map(
    (key, i) => ({
      key,
      icon: stepIcons[i],
      color: stepColors[i],
      name: t(`steps.${key}.name`),
      desc: t(`steps.${key}.desc`),
      time: t(`steps.${key}.time`),
    })
  );

  return (
    <section id="system" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(232,160,69,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center mb-16">
          <SectionReveal><Badge>{t("badge")}</Badge></SectionReveal>
          <SectionReveal delay={0.1}>
            <h2
              className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-balance"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
            >
              {t("headline")}{" "}
              <span style={{ color: "var(--color-accent)" }}>{t("headline2")}</span>
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              {t("subheadline")}
            </p>
          </SectionReveal>
        </div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connector line - desktop */}
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-px bg-[var(--color-border)] z-0" />
          <motion.div
            className="hidden lg:block absolute top-[52px] left-0 h-px z-0"
            style={{ background: "var(--color-accent)" }}
            initial={{ width: "0%" }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 lg:gap-2">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: "easeOut" }}
                  className="relative z-10 flex flex-col items-center text-center lg:items-center"
                >
                  {/* Icon circle */}
                  <div
                    className="relative mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 bg-[var(--color-bg)]"
                    style={{ borderColor: step.color }}
                  >
                    <Icon size={20} style={{ color: step.color }} />
                    <div
                      className="absolute inset-0 rounded-full opacity-20"
                      style={{ background: step.color }}
                    />
                  </div>

                  <span
                    className="text-xs font-bold uppercase tracking-wider mb-1"
                    style={{ color: step.color }}
                  >
                    {step.time}
                  </span>
                  <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">
                    {step.name}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed max-w-[120px] hidden lg:block">
                    {step.desc}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed lg:hidden mt-1">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <SectionReveal delay={0.4}>
          <div className="mt-16 flex justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-8 py-4 text-sm font-semibold text-black hover:bg-[var(--color-accent-hover)] transition-all duration-200 hover:shadow-[var(--shadow-glow)]"
            >
              <CalendarDays size={16} />
              {t("cta")}
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
