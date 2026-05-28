"use client";
import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/Badge";
import { CalendlyInline } from "@/components/ui/CalendlyInline";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export function CTAFinal() {
  const t = useTranslations("cta_final");

  return (
    <section id="contact" className="relative py-32 md:py-48 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,99,235,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative container-wide">
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-7">
            <SectionReveal><Badge number="09">{t("badge")}</Badge></SectionReveal>
            <SectionReveal delay={0.1}>
              <h2
                className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-balance leading-[0.95]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-white">{t("headline")}</span>{" "}
                <span className="text-[var(--color-accent-bright)] italic">{t("headline2")}</span>
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <p className="mt-8 text-lg text-[var(--color-text-muted)] leading-relaxed max-w-xl">
                {t("subheadline")}
              </p>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row gap-6 items-start">
                <Link
                  href="/kontakt"
                  className="group inline-flex items-center justify-between gap-6 rounded-full pl-7 pr-2 py-2 text-sm font-semibold text-white transition-all duration-300 hover:gap-8"
                  style={{ background: "var(--color-accent)", boxShadow: "0 8px 32px var(--color-accent-glow)" }}
                >
                  <span>Strona kontaktowa</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-[-45deg]">
                    <ArrowRight size={18} />
                  </span>
                </Link>
                <a
                  href="mailto:kontakt@olikmanagement.com"
                  className="group inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors mt-3"
                >
                  <span className="link-underline">kontakt@olikmanagement.com</span>
                </a>
              </div>
            </SectionReveal>
          </div>

          <div className="col-span-12 md:col-span-5">
            <SectionReveal delay={0.2}>
              <div className="rounded-3xl border border-white/[0.08] bg-[var(--color-bg-elevated)] overflow-hidden">
                <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
                  <span className="eyebrow" style={{ color: "var(--color-accent-bright)" }}>
                    Calendly · 30 min
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald)] animate-pulse" />
                    Online
                  </span>
                </div>
                <CalendlyInline url="https://calendly.com/olik-management/30min" minHeight={620} />
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
