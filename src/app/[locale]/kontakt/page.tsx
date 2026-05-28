import { PageHero } from "@/components/sections/PageHero";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { CalendlyInline } from "@/components/ui/CalendlyInline";
import { Badge } from "@/components/ui/Badge";

export default function KontaktPage() {
  return (
    <>
      <PageHero
        number="KONTAKT"
        eyebrow="Zacznijmy"
        title="30 minut."
        titleAccent="Bez zobowiązań."
        description="Wybierz dogodny termin w kalendarzu. Porozmawiamy o Twoim biznesie, celach i o tym, czy nasz system jest tym, czego potrzebujesz."
      />

      <section className="py-12 md:py-20 pb-24 md:pb-32">
        <div className="container-wide">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            {/* Calendly main */}
            <div className="col-span-12 lg:col-span-8">
              <SectionReveal>
                <div className="rounded-3xl border border-white/[0.08] bg-[var(--color-bg-elevated)] overflow-hidden">
                  <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
                    <span className="eyebrow" style={{ color: "var(--color-accent-bright)" }}>
                      Discovery call · 30 min
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald)] animate-pulse" />
                      Online · Google Meet
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
                  <Badge number="01">Czego się spodziewać</Badge>
                  <ul className="mt-6 space-y-4">
                    {[
                      "Krótka prezentacja Twojego biznesu",
                      "Analiza obecnych działań marketingowych",
                      "Konkretne pomysły – zanim cokolwiek podpiszesz",
                      "Decyzja czy chcesz iść dalej (bez presji)",
                    ].map((p, i) => (
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
                  <Badge number="02">Inne sposoby</Badge>
                  <ul className="mt-6 space-y-4">
                    <li>
                      <p className="eyebrow mb-1.5">Email</p>
                      <a
                        href="mailto:kontakt@olikmanagement.com"
                        className="text-base text-white hover:text-[var(--color-accent-bright)] transition-colors link-underline"
                      >
                        kontakt@olikmanagement.com
                      </a>
                    </li>
                    <li>
                      <p className="eyebrow mb-1.5">Instagram</p>
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
                    Czas odpowiedzi
                  </p>
                  <p
                    className="text-3xl font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    &lt; 2 godziny
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                    w dni robocze. Działamy tak, jak działa nasz system.
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
