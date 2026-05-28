"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/Badge";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const keys = ["q1", "q2", "q3"] as const;
const colors = [
  "var(--color-led-blue-bright)",
  "var(--color-led-violet-bright)",
  "var(--color-led-green-bright)",
];

export function Testimonials() {
  const t = useTranslations("testimonials");
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((i) => (i + 1) % keys.length);
  const prev = () => setIdx((i) => (i - 1 + keys.length) % keys.length);

  const cur = keys[idx];
  const color = colors[idx];

  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-[var(--color-bg-elevated)]">
      <div
        className="absolute inset-0 transition-all duration-1000 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${color}15 0%, transparent 60%)`,
        }}
      />

      <div className="relative container-tight">
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-8">
            <SectionReveal>
              <Badge number="05">{t("badge")}</Badge>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2
                className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-balance leading-[0.95]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-white">{t("headline")}</span>{" "}
                <span className="text-[var(--color-text-muted)] italic">{t("headline2")}</span>
              </h2>
            </SectionReveal>
          </div>
        </div>

        <SectionReveal>
          <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-[var(--color-bg)] min-h-[480px] md:min-h-[420px]">
            {/* Animated LED border */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${color}40, transparent 60%)`,
                opacity: 0.4,
              }}
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Big quote mark */}
            <div className="absolute top-8 right-8 md:top-12 md:right-12 opacity-15">
              <Quote
                size={140}
                style={{ color, filter: `drop-shadow(0 0 24px ${color})` }}
              />
            </div>

            <div className="relative h-full p-8 md:p-16 flex flex-col justify-between gap-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={cur}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <p
                    className="text-2xl md:text-3xl lg:text-4xl text-white leading-[1.25] font-medium text-balance max-w-3xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    &ldquo;{t(`items.${cur}.quote`)}&rdquo;
                  </p>

                  <div className="mt-12 flex items-center gap-5">
                    <div
                      className="flex items-center justify-center h-14 w-14 rounded-full text-lg font-bold"
                      style={{
                        background: `${color}20`,
                        color,
                        border: `1px solid ${color}40`,
                        boxShadow: `0 0 24px ${color}30`,
                      }}
                    >
                      {t(`items.${cur}.initials`)}
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white">{t(`items.${cur}.name`)}</p>
                      <p className="text-sm text-[var(--color-text-muted)]">{t(`items.${cur}.role`)}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {keys.map((k, i) => (
                    <button
                      key={k}
                      onClick={() => setIdx(i)}
                      className="h-1.5 rounded-full transition-all duration-500"
                      style={{
                        width: i === idx ? 32 : 8,
                        background: i === idx ? colors[i] : "rgba(255,255,255,0.16)",
                        boxShadow: i === idx ? `0 0 12px ${colors[i]}` : "none",
                      }}
                      aria-label={`Show testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={prev}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] text-white/80 hover:border-white/40 hover:text-white transition-all"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] text-white/80 hover:border-white/40 hover:text-white transition-all"
                    aria-label="Next"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
