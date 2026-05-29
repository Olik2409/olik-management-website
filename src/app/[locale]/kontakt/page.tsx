import { useTranslations } from "next-intl";
import { PageHero } from "@/components/sections/PageHero";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { CalendlyInline } from "@/components/ui/CalendlyInline";
import { Badge } from "@/components/ui/Badge";
import { AuroraShader } from "@/components/ui/animated-shader-background";

export default function KontaktPage() {
  const h = useTranslations("pages.contact_hero");
  const t = useTranslations("pages.contact");
  const expectItems = [t("expect_1"), t("expect_2"), t("expect_3"), t("expect_4")];

  return (
    <>
      <PageHero
        number={h("number")}
        eyebrow={h("eyebrow")}
        title={h("title")}
        titleAccent={h("titleAccent")}
        description={h("description")}
      />

      <section className="relative py-10 md:py-16 pb-16 md:pb-24 overflow-hidden">
        {/* Aurora background effect */}
        <AuroraShader />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(10,10,18,0.7)" }}
        />

        <div className="relative container-wide">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            {/* Calendly main */}
            <div className="col-span-12 lg:col-span-8">
              <SectionReveal>
                <div className="rounded-3xl border border-white/[0.08] bg-[var(--color-bg-elevated)] overflow-hidden">
                  <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
                    <span className="eyebrow" style={{ color: "var(--color-accent-bright)" }}>
                      {t("widget_label")}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald)] animate-pulse" />
                      {t("widget_status")}
                    </span>
                  </div>
                  <CalendlyInline url="https://calendly.com/olik-management/30min" minHeight={760} />
                </div>
              </SectionReveal>
            </div>

            {/* Info sidebar */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
              <SectionReveal delay={0.1}>
                <div className="rounded-3xl border border-white/[0.08] bg-[var(--color-bg-elevated)] p-8">
                  <Badge number="01">{t("expect_badge")}</Badge>
                  <ul className="mt-6 space-y-4">
                    {expectItems.map((p, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/90">
                        <span className="num-marker pt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.15}>
                <div className="rounded-3xl border border-white/[0.08] bg-[var(--color-bg-elevated)] p-8">
                  <Badge number="02">{t("other_badge")}</Badge>
                  <ul className="mt-6 space-y-4">
                    <li>
                      <p className="eyebrow mb-1.5">{t("email_label")}</p>
                      <a
                        href="mailto:kontakt@olikmanagement.com"
                        className="text-base text-white hover:text-[var(--color-accent-bright)] transition-colors link-underline"
                      >
                        kontakt@olikmanagement.com
                      </a>
                    </li>
                    <li>
                      <p className="eyebrow mb-1.5">{t("instagram_label")}</p>
                      <a
                        href="https://www.instagram.com/oliwier.kochanowicz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-white hover:text-[var(--color-accent-bright)] transition-colors link-underline"
                      >
                        @oliwier.kochanowicz
                      </a>
                    </li>
                  </ul>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <div className="rounded-3xl border border-[var(--color-accent)]/30 p-8" style={{ background: "var(--color-accent-soft)" }}>
                  <p className="eyebrow mb-3" style={{ color: "var(--color-accent-bright)" }}>
                    {t("response_badge")}
                  </p>
                  <p
                    className="text-3xl font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t("response_value")}
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                    {t("response_note")}
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
