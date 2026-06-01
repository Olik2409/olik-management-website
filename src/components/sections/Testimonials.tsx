"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/Badge";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const keys = ["q1", "q2", "q3"] as const;

// Real RGBA values – CSS var() refs can't be used with hex opacity in inline styles
const gradientColors = [
  { strong: "rgba(59,130,246,0.55)",  mid: "rgba(59,130,246,0.18)",  soft: "rgba(59,130,246,0.25)" },
  { strong: "rgba(168,85,247,0.55)",  mid: "rgba(168,85,247,0.18)",  soft: "rgba(168,85,247,0.25)" },
  { strong: "rgba(0,255,157,0.50)",   mid: "rgba(0,255,157,0.15)",   soft: "rgba(0,255,157,0.22)" },
];
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
  const gc = gradientColors[idx];

  return (
    <section className="relative py-12 md:py-24 overflow-hidden bg-[#08080f]">
      {/* Directional brand gradient using real RGBA values (CSS var() can't take hex-opacity suffix) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(125deg, ${gc.strong} 0%, ${gc.mid} 30%, transparent 58%, ${gc.soft} 85%, ${gc.strong} 100%)`,
          transition: "background 1.2s ease-in-out",
        }}
      />

      <div className="relative container-tight">
        <div className="grid grid-cols-12 gap-6 mb-10 md:mb-16">
          <div className="col-span-12 md:col-span-8">
            <SectionReveal>
              <Badge number="05">{t("badge")}</Badge>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2
                className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-balance leading-[0.95]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-white">{t("headline")}</span>{" "}
                <span className="text-[var(--color-text-muted)] italic">{t("headline2")}</span>
              </h2>
            </SectionReveal>
          </div>
        </div>

        <SectionReveal>
          <div
            className="relative rounded-3xl overflow-hidden border border-white/[0.08] md:min-h-[420px] transition-all duration-1000"
            style={{
              background:
                "linear-gradient(135deg, #1b1b33 0%, #101022 45%, #0a0a16 100%)",
            }}
          >
            {/* Brand accent gradient – corner radials with real RGBA */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 80% 100% at 0% 0%, ${gc.strong} 0%, transparent 60%), radial-gradient(ellipse 70% 90% at 100% 100%, ${gc.mid} 0%, transparent 60%)`,
                transition: "background 1.2s ease-in-out",
              }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            {/* Soft LED border sheen */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${gc.soft}, transparent 55%)`,
                transition: "background 1.2s ease-in-out",
                opacity: 0.6,
              }}
              animate={{ opacity: [0.5, 0.7, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Big quote mark */}
            <div className="absolute top-8 right-8 md:top-12 md:right-12 opacity-15">
              <Quote
                size={140}
                style={{ color, filter: `drop-shadow(0 0 24px ${color})` }}
              />
            </div>

            <div className="relative h-full p-6 md:p-16 flex flex-col justify-between gap-8 md:gap-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={cur}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <p
                    className="text-xl md:text-2xl lg:text-3xl text-white leading-[1.25] font-medium text-balance max-w-3xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    &ldquo;{t(`items.${cur}.quote`)}&rdquo;
                  </p>

                  <div className="mt-6 md:mt-10 flex items-center gap-3">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: color, boxShadow: `0 0 12px ${color}` }}
                    />
                    <span className="num-marker" style={{ color }}>
                      {t("attribution")}
                    </span>
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
