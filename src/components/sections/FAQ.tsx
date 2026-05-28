"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/Badge";
import { Plus, Minus } from "lucide-react";

const qKeys = ["q1","q2","q3","q4","q5","q6"] as const;

export function FAQ() {
  const t = useTranslations("faq");
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <div className="text-center mb-16">
          <SectionReveal><Badge>{t("badge")}</Badge></SectionReveal>
          <SectionReveal delay={0.1}>
            <h2
              className="mt-4 text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
            >
              {t("headline")}
            </h2>
          </SectionReveal>
        </div>

        <div className="space-y-3">
          {qKeys.map((key, i) => {
            const isOpen = open === key;
            return (
              <SectionReveal key={key} delay={0.07 * i}>
                <div
                  className="rounded-xl border overflow-hidden transition-colors duration-300"
                  style={{
                    borderColor: isOpen ? "var(--color-accent)" : "var(--color-border)",
                    background: "var(--color-surface)",
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : key)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm md:text-base font-medium text-[var(--color-text-primary)]">
                      {t(`items.${key}.q`)}
                    </span>
                    <span
                      className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full"
                      style={{
                        background: isOpen ? "var(--color-accent)" : "var(--color-surface-elevated)",
                      }}
                    >
                      {isOpen
                        ? <Minus size={14} className="text-black" />
                        : <Plus size={14} style={{ color: "var(--color-text-muted)" }} />
                      }
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm text-[var(--color-text-secondary)] leading-relaxed">
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
