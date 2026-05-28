"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/Badge";
import { Plus } from "lucide-react";

const qKeys = ["q1","q2","q3","q4","q5","q6"] as const;

export function FAQ() {
  const t = useTranslations("faq");
  const [open, setOpen] = useState<string | null>("q1");

  return (
    <section id="faq" className="relative py-32 md:py-48 bg-[var(--color-bg-elevated)]">
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-8">
            <SectionReveal><Badge number="08">{t("badge")}</Badge></SectionReveal>
            <SectionReveal delay={0.1}>
              <h2
                className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-balance leading-[0.95]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-white">{t("headline")}</span>
              </h2>
            </SectionReveal>
          </div>
        </div>

        <div className="max-w-4xl">
          {qKeys.map((key, i) => {
            const isOpen = open === key;
            return (
              <SectionReveal key={key} delay={0.04 * i}>
                <div className="border-b border-white/[0.08]">
                  <button
                    onClick={() => setOpen(isOpen ? null : key)}
                    className="w-full flex items-start justify-between gap-6 py-6 md:py-8 text-left group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-6 md:gap-8 flex-1">
                      <span className="num-marker pt-2 hidden md:block">{String(i + 1).padStart(2, "0")}</span>
                      <span
                        className="text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-[var(--color-accent-bright)] transition-colors duration-300"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {t(`items.${key}.q`)}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] mt-1"
                      style={{
                        background: isOpen ? "var(--color-accent)" : "transparent",
                        borderColor: isOpen ? "var(--color-accent)" : undefined,
                      }}
                    >
                      <Plus size={16} className="text-white" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="md:pl-20 pb-8 text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
                          {t(`items.${key}.a`)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
