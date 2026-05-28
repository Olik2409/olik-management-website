"use client";
import { useTranslations } from "next-intl";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, CalendarDays, Play } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/Badge";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
} as Variants;
const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
} as Variants;

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-bg)]">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(232,160,69,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 py-24 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            <motion.div variants={item}>
              <Badge>{t("badge")}</Badge>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl md:text-6xl xl:text-7xl font-bold text-[var(--color-text-primary)] text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("headline1")}{" "}
              <span className="text-[var(--color-text-secondary)]">{t("headline2")}</span>
              <br />
              <span className="text-[var(--color-text-primary)]">{t("headline3")}</span>{" "}
              <span
                className="relative inline-block"
                style={{ color: "var(--color-accent)" }}
              >
                {t("headline4")}
                <span
                  className="absolute -bottom-1 left-0 right-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--color-accent) 0%, transparent 100%)",
                  }}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-xl"
            >
              {t("subheadline")}
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold text-black hover:bg-[var(--color-accent-hover)] transition-all duration-200 hover:shadow-[var(--shadow-glow)]"
              >
                <CalendarDays size={16} />
                {t("cta_primary")}
              </Link>
              <a
                href="#system"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-7 py-3.5 text-sm font-medium text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]/40 hover:text-[var(--color-text-primary)] transition-all duration-200"
              >
                <Play size={14} />
                {t("cta_secondary")}
              </a>
            </motion.div>

            <motion.p
              variants={item}
              className="text-xs text-[var(--color-text-muted)]"
            >
              {t("trust_label")}{" "}
              {/* Placeholder na logotypy klientów */}
              <span className="text-[var(--color-text-secondary)]">
                E-commerce · B2B · Usługi
              </span>
            </motion.p>
          </motion.div>

          {/* Right – Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute -inset-8 rounded-3xl opacity-30"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(232,160,69,0.2) 0%, transparent 70%)",
                }}
              />
              {/* Dashboard card */}
              <div className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-elevated)]">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold text-[var(--color-text-primary)]">Live Dashboard</span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE
                  </span>
                </div>
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Leady dziś", value: "24", delta: "+12%" },
                    { label: "Kwalifikowane", value: "18", delta: "+8%" },
                    { label: "ROAS", value: "4.8x", delta: "+0.4" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl bg-[var(--color-bg)] p-4">
                      <p className="text-xs text-[var(--color-text-muted)] mb-1">{s.label}</p>
                      <p className="text-2xl font-bold text-[var(--color-text-primary)]" style={{fontFamily:"var(--font-display)"}}>{s.value}</p>
                      <p className="text-xs text-emerald-400 mt-0.5">{s.delta}</p>
                    </div>
                  ))}
                </div>
                {/* Funnel bars */}
                <div className="space-y-3">
                  {[
                    { label: "Kliknięcia", val: 100, w: "100%" },
                    { label: "Leady", val: 24, w: "42%" },
                    { label: "Kwalifikowane", val: 18, w: "30%" },
                    { label: "Umówione spotkania", val: 11, w: "18%" },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-[var(--color-text-muted)]">{row.label}</span>
                        <span className="text-[var(--color-text-secondary)]">{row.val}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[var(--color-bg)] overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: "var(--color-accent)", width: row.w }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-center text-xs text-[var(--color-text-muted)]">
                  Ostatni lead: <span className="text-emerald-400">45 sekund temu</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-muted)]"
        >
          <span className="text-xs tracking-widest uppercase">{t("scroll_hint")}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
