"use client";
import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/Badge";
import { CalendlyInline } from "@/components/ui/CalendlyInline";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Image from "next/image";

export function CTAFinal() {
  const t = useTranslations("cta_final");

  return (
    <section id="contact" className="relative pt-20 md:pt-28 pb-12 md:pb-16 overflow-hidden ambient-multi">
      {/* Multi-color LED ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 30%, rgba(59,130,246,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(168,85,247,0.1) 0%, transparent 60%)",
        }}
      />
      {/* Faint brand mark */}
      <div className="absolute -bottom-10 right-0 w-[40vw] max-w-md aspect-square opacity-[0.07] pointer-events-none hidden md:block">
        <Image
          src="/images/brand/OLIK 2.jpg"
          alt=""
          fill
          className="object-contain"
          style={{ mixBlendMode: "screen" }}
          sizes="40vw"
        />
      </div>

      <div className="relative container-wide">
        <div className="grid grid-cols-12 gap-6 items-stretch">
          <div className="col-span-12 md:col-span-7">
            <SectionReveal>
              <Badge number="09">{t("badge")}</Badge>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2
                className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-balance leading-[0.95]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-white">{t("headline")}</span>{" "}
                <span
                  className="italic"
                  style={{
                    color: "var(--color-led-blue-bright)",
                    textShadow: "0 0 40px var(--color-led-blue-glow)",
                  }}
                >
                  {t("headline2")}
                </span>
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <p className="mt-8 text-lg text-[var(--color-text-muted)] leading-relaxed max-w-xl">
                {t("subheadline")}
              </p>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row gap-6 items-start">
                <MagneticButton>
                  <Link
                    href="/kontakt"
                    className="group inline-flex items-center justify-between gap-6 rounded-full pl-7 pr-2 py-2 text-sm font-semibold text-white transition-all duration-300 hover:gap-8"
                    style={{
                      background: "var(--color-led-blue)",
                      boxShadow: "0 8px 32px var(--color-led-blue-glow)",
                    }}
                  >
                    <span>{t("cta")}</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-[-45deg]">
                      <ArrowRight size={18} />
                    </span>
                  </Link>
                </MagneticButton>
                <a
                  href="mailto:kontakt@olikmanagement.com"
                  className="group inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors mt-3"
                >
                  <span className="link-underline">kontakt@olikmanagement.com</span>
                </a>
              </div>
            </SectionReveal>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-7">
            <SectionReveal delay={0.2}>
              <div className="relative rounded-3xl border border-white/[0.08] bg-[var(--color-bg-elevated)] overflow-hidden">
                <div
                  className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-led-blue-glow) 0%, transparent 60%)",
                  }}
                />
                <div className="relative px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
                  <span
                    className="eyebrow flex items-center gap-2"
                    style={{ color: "var(--color-led-blue-bright)" }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        background: "var(--color-led-blue-bright)",
                        boxShadow: "0 0 12px var(--color-led-blue-glow)",
                      }}
                    />
                    Calendly · 30 min
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                    <span
                      className="h-1.5 w-1.5 rounded-full animate-pulse"
                      style={{
                        background: "var(--color-led-green-bright)",
                        boxShadow: "0 0 12px var(--color-led-green-glow)",
                      }}
                    />
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
