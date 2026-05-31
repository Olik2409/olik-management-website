"use client";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown, Zap, Activity, TrendingUp, Clock } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { SplitText } from "@/components/ui/SplitText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AuroraShader } from "@/components/ui/animated-shader-background";
import { DashboardCard } from "@/components/ui/DashboardCard";

export function Hero() {
  const t = useTranslations("hero");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const metrics = [
    {
      value: t("metric1_value"),
      label: t("metric1_label"),
      color: "var(--color-led-blue-bright)",
      icon: Zap,
      delta: "−68%",
      deltaLabel: t("metric1_delta_label"),
      up: true,
      spark: "0,24 13,22 26,23 40,16 53,18 66,9 80,6",
    },
    {
      value: t("metric2_value"),
      label: t("metric2_label"),
      color: "var(--color-led-green-bright)",
      icon: Activity,
      delta: "100%",
      deltaLabel: t("metric2_delta_label"),
      up: true,
      spark: "0,18 13,16 26,17 40,15 53,16 66,14 80,15",
    },
    {
      value: t("metric3_value"),
      label: t("metric3_label"),
      color: "var(--color-led-violet-bright)",
      icon: TrendingUp,
      delta: "+391%",
      deltaLabel: t("metric3_delta_label"),
      up: true,
      spark: "0,26 13,22 26,24 40,15 53,17 66,8 80,3",
    },
    {
      value: t("metric4_value"),
      label: t("metric4_label"),
      color: "var(--color-led-pink-bright)",
      icon: Clock,
      delta: t("metric4_delta"),
      deltaLabel: t("metric4_delta_label"),
      up: true,
      spark: "0,22 13,20 26,21 40,14 53,16 66,11 80,9",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[var(--color-bg)]"
    >
      {/* WebGL Aurora Shader background */}
      <AuroraShader />

      {/* Giant brand watermark behind content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className="font-bold leading-none select-none whitespace-nowrap"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "26vw",
            letterSpacing: "-0.04em",
            background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(59,130,246,0.04) 60%, transparent 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          OLIK
        </span>
      </div>

      {/* Readability scrim */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 35% 45%, rgba(5,5,7,0.55) 0%, rgba(5,5,7,0.35) 50%, rgba(5,5,7,0.2) 100%)",
        }}
      />
      {/* Bottom fade into next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, var(--color-bg) 100%)",
        }}
      />
      {/* Film grain overlay for texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <motion.div
        style={{ y: titleY, opacity: fadeOut }}
        className="relative z-20 flex md:min-h-[100svh] flex-col justify-start md:justify-center container-wide pt-24 md:pt-28 pb-8 md:pb-24"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 md:mb-8"
        >
          <div
            className="inline-flex items-center gap-3 rounded-full px-5 py-2.5 border"
            style={{
              background: "rgba(10,10,24,0.7)",
              borderColor: "rgba(0,255,157,0.25)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span
              className="flex h-2 w-2 rounded-full animate-pulse"
              style={{ background: "var(--color-led-green-bright)", boxShadow: "0 0 16px var(--color-led-green-glow)" }}
            />
            <span
              className="text-sm sm:text-base font-semibold tracking-wide"
              style={{ color: "var(--color-led-green-bright)", fontFamily: "var(--font-mono)" }}
            >
              {t("badge")}
            </span>
          </div>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 flex-1 items-center lg:items-stretch">
          {/* Headline column */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
            <h1
              className="font-bold text-white leading-[1.0]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.25rem, 5.5vw, 4.75rem)",
              }}
            >
              <SplitText
                as="span"
                text={t("headline1")}
                splitBy="word"
                stagger={0.05}
                delay={0.5}
                trigger="mount"
                className="block"
              />
              <SplitText
                as="span"
                text={t("headline2")}
                splitBy="word"
                stagger={0.05}
                delay={0.72}
                trigger="mount"
                className="block text-[var(--color-text-muted)] italic"
              />
              <SplitText
                as="span"
                text={t("headline3")}
                splitBy="word"
                stagger={0.05}
                delay={0.96}
                trigger="mount"
                className="block mt-2"
              />
              <SplitText
                as="span"
                text={t("headline4")}
                splitBy="word"
                stagger={0.05}
                delay={1.18}
                trigger="mount"
                className="block"
                style={{ color: "var(--color-led-blue-bright)", textShadow: "0 0 32px var(--color-led-blue-glow)" }}
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
              className="mt-8 text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-lg"
            >
              {t("subheadline")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.75, ease: "easeOut" }}
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
            >
              <MagneticButton>
                <Link
                  href="/kontakt"
                  className="group inline-flex items-center justify-between gap-5 rounded-full pl-6 pr-1.5 py-1.5 text-sm font-semibold text-white transition-all duration-300"
                  style={{
                    background: "var(--color-led-blue)",
                    boxShadow: "0 8px 32px var(--color-led-blue-glow)",
                  }}
                >
                  <span>{t("cta_primary")}</span>
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-[-45deg]"
                    style={{ background: "rgba(255,255,255,0.18)" }}
                  >
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </MagneticButton>

              <a
                href="#system"
                className="group inline-flex items-center gap-2.5 text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                <span className="link-underline">{t("cta_secondary")}</span>
                <ArrowDown size={13} className="transition-transform group-hover:translate-y-0.5" />
              </a>
            </motion.div>
          </div>

          {/* Dashboard card – desktop (vertical) */}
          <motion.div
            initial={{ opacity: 0, x: 32, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
            className="hidden lg:flex col-span-5 flex-col"
          >
            <DashboardCard metrics={metrics} />
          </motion.div>
        </div>

        {/* Dashboard card – mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="lg:hidden mt-10"
        >
          <DashboardCard metrics={metrics} compact />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden md:flex items-center gap-2 text-[var(--color-text-dim)]"
      >
        <span className="num-marker">{t("scroll_hint")}</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={12} />
        </motion.div>
      </motion.div>
    </section>
  );
}
