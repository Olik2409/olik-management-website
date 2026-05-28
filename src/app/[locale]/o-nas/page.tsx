import { PageHero } from "@/components/sections/PageHero";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Badge } from "@/components/ui/Badge";
import { CTAFinal } from "@/components/sections/CTAFinal";
import Image from "next/image";

export default function ONasPage() {
  return (
    <>
      <PageHero
        number="O NAS"
        eyebrow="Kim jesteśmy"
        title="Performance + AI"
        titleAccent="bez agencyjnej teatralności."
        description="Nie sprzedajemy raportów PDF. Budujemy systemy, które generują leady i zamykają sprzedaż – kiedy konkurencja jeszcze pisze maila."
      />

      {/* Manifesto */}
      <section className="py-16 md:py-24">
        <div className="container-tight">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-8 md:col-start-3">
              <SectionReveal>
                <p className="eyebrow mb-6">Manifest</p>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <p
                  className="text-xl md:text-2xl lg:text-3xl text-white leading-tight font-medium text-balance"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Większość agencji sprzedaje
                  <span className="text-[var(--color-text-muted)] italic"> &ldquo;prowadzenie kampanii&rdquo;</span>
                  &nbsp;– my budujemy
                  <span className="text-[var(--color-accent-bright)] italic"> kompletną maszynę sprzedaży</span>.
                  Reklama, strona, chatbot AI, follow-up, voice AI, CRM i live dashboard – wszystko ze sobą połączone, wszystko działa 24/7.
                </p>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-elevated)]">
        <div className="container-wide">
          <div className="grid grid-cols-12 gap-6 md:gap-12 items-center">
            <div className="col-span-12 md:col-span-5">
              <SectionReveal>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/[0.08]">
                  <Image
                    src="/images/brand/Owner.png"
                    alt="Oliwier Kochanowicz – Olik Management"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 768px) 40vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="eyebrow text-white/70 mb-2">Founder</p>
                    <p
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Oliwier Kochanowicz
                    </p>
                  </div>
                </div>
              </SectionReveal>
            </div>
            <div className="col-span-12 md:col-span-7 md:pl-8">
              <SectionReveal delay={0.1}>
                <Badge number="01">Założyciel</Badge>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <h2
                  className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[0.95]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Performance marketing &nbsp;
                  <span className="text-[var(--color-text-muted)] italic">to mój język.</span>
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <p className="mt-6 text-lg text-[var(--color-text-muted)] leading-relaxed">
                  Zarządzam budżetami reklamowymi B2B i e-commerce od kilku lat. Widziałem, ile pieniędzy klienci tracą, bo ich leady czekają 48 godzin na odpowiedź. Dlatego zbudowałem system, w którym to się nigdy nie zdarza.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.25}>
                <p className="mt-4 text-lg text-[var(--color-text-muted)] leading-relaxed">
                  Pracuję z firmami, które chcą skalować – nie z tymi, które szukają agencji do &ldquo;pilnowania kampanii&rdquo;. Każda decyzja musi mieć swoją liczbę. Każdy klient widzi swój dashboard live.
                </p>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-8">
              <SectionReveal><Badge number="02">Zasady</Badge></SectionReveal>
              <SectionReveal delay={0.1}>
                <h2
                  className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance leading-[0.95]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Jak pracujemy.
                </h2>
              </SectionReveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-3xl overflow-hidden">
            {[
              { num: "01", title: "Liczby, nie obietnice", desc: "Każda decyzja opiera się o dane. Każdy klient widzi swój live dashboard. Każdy raport ma konkretną liczbę – nie ogólnik." },
              { num: "02", title: "Szybkość, zawsze", desc: "Lead odpowiada w 30 sekund, my odpowiadamy w 2 godziny. Średni czas wdrożenia kampanii: 7 dni. Nowe kreacje co tydzień." },
              { num: "03", title: "System, nie pojedyncze akcje", desc: "Nie podpisujemy się pod &ldquo;pojedynczym sukcesem&rdquo;. Budujemy infrastrukturę, która działa, gdy nikt jej nie pilnuje – w nocy, w weekendy, na wakacjach." },
            ].map((v, i) => (
              <SectionReveal key={v.num} delay={0.1 * i}>
                <div className="bg-[var(--color-bg)] p-8 md:p-10 h-full flex flex-col">
                  <span
                    className="text-5xl md:text-6xl font-bold mb-6"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-accent-bright)" }}
                  >
                    {v.num}
                  </span>
                  <h3
                    className="text-2xl font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed" dangerouslySetInnerHTML={{ __html: v.desc }} />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CTAFinal />
    </>
  );
}
