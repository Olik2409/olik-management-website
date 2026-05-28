"use client";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("hero");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[var(--color-bg)]"
    >
      {/* Cinematic background photo with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imageY }}>
        <Image
          src="/images/brand/bg-texture.jpeg"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center scale-110"
          sizes="100vw"
        />
      </motion.div>

      {/* Multi-layer cinematic overlay */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{ opacity: overlayOpacity }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,11,31,0.45) 0%, rgba(5,11,31,0.2) 40%, rgba(5,11,31,0.85) 90%, rgba(5,11,31,1) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 30% 50%, transparent 0%, rgba(5,11,31,0.55) 100%)",
          }}
        />
      </motion.div>

      {/* Film grain */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content – editorial bottom-left layout */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-20 flex min-h-[100svh] flex-col container-wide pt-32 md:pt-40 pb-24 md:pb-32"
      >
        {/* Side annotation – top left */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden md:flex items-center gap-3 mb-auto"
        >
          <span className="num-marker">[01 / Performance Marketing & AI]</span>
          <span className="h-px w-12 bg-[var(--color-text-faint)]" />
        </motion.div>

        {/* Headline block */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] as never }}
            className="col-span-12 lg:col-span-9"
          >
            <h1 className="text-[44px] leading-[0.95] sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[104px] font-bold text-white text-balance">
              <span className="block">{t("headline1")}{" "}</span>
              <span className="block text-[var(--color-text-muted)] italic" style={{fontStyle:"italic"}}>{t("headline2")}</span>
              <span className="block mt-2 md:mt-4">{t("headline3")}</span>
              <span className="block">
                <span className="relative inline-block">
                  <span style={{ color: "var(--color-accent-bright)" }}>{t("headline4")}</span>
                </span>
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1, ease: "easeOut" }}
            className="col-span-12 lg:col-span-3 lg:pb-3"
          >
            <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-md">
              {t("subheadline")}
            </p>
          </motion.div>
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: "easeOut" }}
          className="mt-12 md:mt-16 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10"
        >
          <Link
            href="/kontakt"
            className="group inline-flex items-center justify-between gap-6 rounded-full pl-7 pr-2 py-2 text-sm font-semibold text-white transition-all duration-300 hover:gap-8 self-start"
            style={{
              background: "var(--color-accent)",
              boxShadow: "0 8px 32px var(--color-accent-glow)",
            }}
          >
            <span>{t("cta_primary")}</span>
            <span
              className="flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-[-45deg]"
              style={{ background: "rgba(255,255,255,0.18)" }}
            >
              <ArrowRight size={18} />
            </span>
          </Link>

          <a
            href="#system"
            className="group inline-flex items-center gap-3 text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            <span className="link-underline">{t("cta_secondary")}</span>
            <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
          </a>
        </motion.div>

        {/* Bottom row – trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-20 md:mt-32 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-t border-white/10 pt-6"
        >
          <div className="flex items-center gap-4">
            <span className="num-marker">{t("trust_label")}</span>
            <div className="flex items-center gap-5 text-sm text-white/60">
              <span>E-commerce</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>B2B</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>Usługi</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 text-[var(--color-text-dim)]">
            <span className="num-marker">{t("scroll_hint")}</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown size={12} />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
