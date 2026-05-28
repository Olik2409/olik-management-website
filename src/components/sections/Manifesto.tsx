"use client";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SplitText } from "@/components/ui/SplitText";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";

export function Manifesto() {
  const t = useTranslations("manifesto");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 1, 1, 0.2]);

  return (
    <section ref={ref} id="manifesto" className="relative py-20 md:py-28 overflow-hidden ambient-blue-violet">
      {/* LED line on left */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as never }}
        style={{ transformOrigin: "top" }}
        className="absolute left-6 md:left-12 top-32 bottom-32 w-px hidden md:block"
      >
        <div
          className="h-full w-full"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--color-led-blue-bright) 30%, var(--color-led-violet-bright) 70%, transparent)",
            boxShadow: "0 0 16px var(--color-led-blue-glow)",
          }}
        />
      </motion.div>

      <div className="container-tight">
        <SectionReveal>
          <Badge number="01">{t("badge")}</Badge>
        </SectionReveal>

        <motion.div style={{ opacity }} className="mt-10 md:mt-16 max-w-5xl">
          <SplitText
            as="h2"
            text={t("line1")}
            splitBy="word"
            stagger={0.04}
            duration={0.9}
            className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white leading-[1.05] text-balance"
            style={{ fontFamily: "var(--font-display)" }}
          />
          <SplitText
            as="h2"
            text={t("line2")}
            splitBy="word"
            stagger={0.04}
            delay={0.3}
            duration={0.9}
            className="mt-4 md:mt-6 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-[var(--color-text-muted)] italic leading-[1.05] text-balance"
            style={{ fontFamily: "var(--font-display)" }}
          />
          <SplitText
            as="h2"
            text={t("line3")}
            splitBy="word"
            stagger={0.04}
            delay={0.6}
            duration={0.9}
            className="mt-4 md:mt-6 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold leading-[1.05] text-balance"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-led-green-bright)", textShadow: "0 0 30px var(--color-led-green-glow)" }}
          />
        </motion.div>

        {/* Cinematic workspace mood photo */}
        <SectionReveal>
          <div className="mt-14 md:mt-16 relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[16/6]">
            <Image
              src="/images/brand/Hero background mood shot.png"
              alt="Olik Management – system w akcji"
              fill
              className="object-cover object-center"
              sizes="(min-width: 768px) 80vw, 100vw"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(5,5,7,0.65) 0%, rgba(5,5,7,0.15) 50%, rgba(5,5,7,0.1) 100%)' }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 45%, rgba(5,5,7,0.85) 100%)' }} />
          </div>
        </SectionReveal>

        {/* Pillars row */}
        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-3xl overflow-hidden">
          {([
            { key: "p1", color: "var(--color-led-blue-bright)" },
            { key: "p2", color: "var(--color-led-violet-bright)" },
            { key: "p3", color: "var(--color-led-pink-bright)" },
          ] as const).map((p, i) => (
            <SectionReveal key={p.key} delay={0.1 * i}>
              <div className="relative bg-[var(--color-bg)] p-8 md:p-10 h-full group overflow-hidden">
                <div
                  className="absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: p.color, filter: "blur(60px)" }}
                />
                <div className="relative z-10 flex items-center gap-3 mb-6">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: p.color, boxShadow: `0 0 16px ${p.color}` }}
                  />
                  <span className="num-marker">{String(i + 1).padStart(2, "0")} / 03</span>
                </div>
                <h3
                  className="relative z-10 text-2xl md:text-3xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t(`pillars.${p.key}.title`)}
                </h3>
                <p className="relative z-10 text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed">
                  {t(`pillars.${p.key}.desc`)}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
