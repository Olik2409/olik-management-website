"use client";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { SplitText } from "@/components/ui/SplitText";
import { LedOrbs } from "@/components/ui/LedOrbs";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  const t = useTranslations("hero");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[var(--color-bg)]"
    >
      {/* Animated LED orbs background */}
      <LedOrbs variant="hero" />

      {/* Aurora-like base gradient */}
      <div className="absolute inset-0 mesh-bg opacity-90" />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 70% at 50% 50%, transparent 0%, rgba(5,5,7,0.7) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: titleY, opacity: fadeOut }}
        className="relative z-20 flex min-h-[100svh] flex-col container-wide pt-36 md:pt-44 pb-20 md:pb-28"
      >
        {/* Side annotation */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden md:flex items-center gap-3 mb-auto"
        >
          <span className="flex h-2 w-2 rounded-full bg-[var(--color-led-green-bright)]" style={{ boxShadow: "0 0 16px var(--color-led-green-glow)" }} />
          <span className="num-marker">[ {t("badge")} ]</span>
          <span className="h-px w-16 bg-gradient-to-r from-white/40 to-transparent" />
        </motion.div>

        {/* Headline – editorial split */}
        <div className="mt-12 md:mt-0">
          <h1 className="text-[44px] leading-[0.92] sm:text-6xl md:text-7xl lg:text-[112px] xl:text-[136px] font-bold text-white text-balance">
            <SplitText
              as="span"
              text={t("headline1")}
              splitBy="word"
              stagger={0.06}
              delay={0.5}
              trigger="mount"
              className="block"
            />
            <SplitText
              as="span"
              text={t("headline2")}
              splitBy="word"
              stagger={0.06}
              delay={0.75}
              trigger="mount"
              className="block text-[var(--color-text-muted)] italic"
              style={{ fontStyle: "italic" }}
            />
            <SplitText
              as="span"
              text={t("headline3")}
              splitBy="word"
              stagger={0.06}
              delay={1.05}
              trigger="mount"
              className="block mt-2 md:mt-4"
            />
            <span className="block">
              <SplitText
                as="span"
                text={t("headline4")}
                splitBy="word"
                stagger={0.06}
                delay={1.3}
                trigger="mount"
                className="inline-block"
                style={{ color: "var(--color-led-blue-bright)", textShadow: "0 0 40px var(--color-led-blue-glow)" }}
              />
            </span>
          </h1>
        </div>

        {/* Sub + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7, ease: "easeOut" }}
          className="mt-12 md:mt-20 grid grid-cols-12 gap-6"
        >
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-md">
              {t("subheadline")}
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-7 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 md:justify-end">
            <MagneticButton>
              <Link
                href="/kontakt"
                className="group inline-flex items-center justify-between gap-6 rounded-full pl-7 pr-2 py-2 text-sm font-semibold text-white transition-all duration-300 hover:gap-8"
                style={{
                  background: "var(--color-led-blue)",
                  boxShadow: "0 8px 32px var(--color-led-blue-glow)",
                }}
              >
                <span>{t("cta_primary")}</span>
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-[-45deg]"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                >
                  <ArrowRight size={18} />
                </span>
              </Link>
            </MagneticButton>

            <a
              href="#system"
              className="group inline-flex items-center gap-3 text-sm font-medium text-white/80 hover:text-white transition-colors self-start sm:self-auto"
            >
              <span className="link-underline">{t("cta_secondary")}</span>
              <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </motion.div>

        {/* Bottom row with metrics ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-8"
        >
          {[
            { label: t("metric1_label"), value: t("metric1_value"), color: "var(--color-led-blue-bright)" },
            { label: t("metric2_label"), value: t("metric2_value"), color: "var(--color-led-green-bright)" },
            { label: t("metric3_label"), value: t("metric3_value"), color: "var(--color-led-violet-bright)" },
            { label: t("metric4_label"), value: t("metric4_value"), color: "var(--color-led-pink-bright)" },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.1 + i * 0.08 }}
              className="flex flex-col gap-1.5"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: m.color, boxShadow: `0 0 12px ${m.color}` }}
                />
                <span className="num-marker">{String(i + 1).padStart(2, "0")} / 04</span>
              </div>
              <p
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {m.value}
              </p>
              <p className="text-xs text-[var(--color-text-muted)] leading-tight">{m.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden md:flex items-center gap-2 text-[var(--color-text-dim)]"
      >
        <span className="num-marker">{t("scroll_hint")}</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={12} />
        </motion.div>
      </motion.div>
    </section>
  );
}
