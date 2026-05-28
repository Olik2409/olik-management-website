"use client";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { SplitText } from "@/components/ui/SplitText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AuroraShader } from "@/components/ui/animated-shader-background";

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
    { value: t("metric1_value"), label: t("metric1_label"), color: "var(--color-led-blue-bright)" },
    { value: t("metric2_value"), label: t("metric2_label"), color: "var(--color-led-green-bright)" },
    { value: t("metric3_value"), label: t("metric3_label"), color: "var(--color-led-violet-bright)" },
    { value: t("metric4_value"), label: t("metric4_label"), color: "var(--color-led-pink-bright)" },
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
        className="relative z-20 flex min-h-[100svh] flex-col container-wide pt-32 md:pt-40 pb-20 md:pb-28"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-10 md:mb-14"
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
        <div className="grid grid-cols-12 gap-6 flex-1 items-center">
          {/* Headline column */}
          <div className="col-span-12 lg:col-span-7">
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

          {/* Dashboard card – desktop */}
          <motion.div
            initial={{ opacity: 0, x: 32, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
            className="hidden lg:flex col-span-5 flex-col"
          >
            <div
              className="relative rounded-2xl border overflow-hidden flex flex-col h-full"
              style={{
                background: "rgba(8,8,20,0.85)",
                borderColor: "rgba(59,130,246,0.3)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                boxShadow: "0 0 0 1px rgba(59,130,246,0.1), 0 24px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Ambient glow */}
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full pointer-events-none" style={{ background: "var(--color-led-blue)", filter: "blur(80px)", opacity: 0.14 }} />
              <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full pointer-events-none" style={{ background: "var(--color-led-violet)", filter: "blur(80px)", opacity: 0.11 }} />

              {/* Header bar */}
              <div className="relative flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: "var(--color-led-green-bright)", boxShadow: "0 0 12px var(--color-led-green-glow)" }} />
                  <span className="num-marker text-white/70 text-[11px] tracking-widest">OLIK DASHBOARD LIVE</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--color-led-blue-bright)", opacity: 0.6 }} />
                </div>
              </div>

              {/* Metrics 2×2 */}
              <div className="relative grid grid-cols-2 gap-px flex-1" style={{ background: "rgba(255,255,255,0.04)" }}>
                {metrics.map((m, i) => {
                  const sparklines = [
                    "0,22 12,18 24,20 36,11 48,15 60,8 72,12 80,4",
                    "0,24 12,20 24,16 36,18 48,10 60,14 72,6 80,8",
                    "0,20 12,22 24,14 36,16 48,8 60,12 72,5 80,9",
                    "0,26 12,22 24,24 36,14 48,18 60,10 72,14 80,6",
                  ];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.9 + i * 0.1 }}
                      className="bg-[rgba(8,8,20,0.9)] p-5 flex flex-col justify-between gap-3"
                    >
                      <p className="text-xs text-white/50 leading-snug font-medium">{m.label}</p>
                      <div>
                        <svg className="w-full mb-2" height="28" viewBox="0 0 80 28" preserveAspectRatio="none">
                          <polyline
                            points={sparklines[i]}
                            fill="none"
                            stroke={m.color}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            opacity="0.5"
                          />
                        </svg>
                        <p
                          className="text-3xl font-bold leading-none"
                          style={{ fontFamily: "var(--font-display)", color: m.color, textShadow: `0 0 24px ${m.color}70` }}
                        >
                          {m.value}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Activity feed */}
              <div className="relative border-t px-5 py-4 space-y-2.5" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <p className="eyebrow text-[10px] text-white/40 mb-3 tracking-widest">OSTATNIA AKTYWNOŚĆ</p>
                {[
                  { dot: "var(--color-led-green-bright)", text: "Nowy lead zakwalifikowany", time: "przed chwilą" },
                  { dot: "var(--color-led-blue-bright)",  text: "Kampania FB – konwersja +12%", time: "2 min temu" },
                  { dot: "var(--color-led-violet-bright)", text: "AI follow-up wysłany", time: "5 min temu" },
                ].map((ev, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 2.4 + i * 0.1 }}
                    className="flex items-center gap-2.5"
                  >
                    <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: ev.dot, boxShadow: `0 0 8px ${ev.dot}` }} />
                    <span className="text-xs text-white/70 flex-1 leading-tight">{ev.text}</span>
                    <span className="text-[10px] text-white/30 shrink-0">{ev.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dashboard metrics – mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="lg:hidden mt-10"
        >
          <div
            className="rounded-2xl border overflow-hidden"
            style={{
              background: "rgba(8,8,20,0.85)",
              borderColor: "rgba(59,130,246,0.25)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Mobile header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: "var(--color-led-green-bright)", boxShadow: "0 0 10px var(--color-led-green-glow)" }} />
              <span className="num-marker text-white/60 text-[10px] tracking-widest">OLIK DASHBOARD LIVE</span>
            </div>
            {/* Mobile 2×2 metrics */}
            <div className="grid grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.04)" }}>
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 2.1 + i * 0.07 }}
                  className="bg-[rgba(8,8,20,0.95)] p-4 flex flex-col gap-1"
                >
                  <p className="text-[11px] text-white/50 leading-tight">{m.label}</p>
                  <p
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-display)", color: m.color, textShadow: `0 0 16px ${m.color}60` }}
                  >
                    {m.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
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
