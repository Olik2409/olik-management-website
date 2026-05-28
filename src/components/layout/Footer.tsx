"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative border-t border-white/[0.06] bg-[var(--color-bg)] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 70% 0%, rgba(37,99,235,0.1) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 20% 100%, rgba(168,85,247,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative container-wide py-16 md:py-20">
        <div className="mb-12 md:mb-16 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-6">{t("links_title")}</p>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] text-white text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("tagline")}
            </h2>
            <Link
              href="/kontakt"
              className="group mt-8 inline-flex items-center gap-3 text-base transition-colors"
              style={{ color: "var(--color-led-blue-bright)" }}
            >
              <span className="link-underline font-medium">Umów discovery call</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="col-span-12 md:col-span-4 md:pt-4">
            <p className="text-base text-[var(--color-text-muted)] leading-relaxed">{t("desc")}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 mb-12">
          <div>
            <p className="eyebrow mb-4">Nawigacja</p>
            <ul className="space-y-3">
              {(["home", "services", "process", "contact"] as const).map((k) => (
                <li key={k}>
                  <Link
                    href={k === "home" ? "/" : k === "process" ? "/#process" : `/${k === "services" ? "uslugi" : "kontakt"}`}
                    className="text-sm text-white/80 hover:text-white transition-colors link-underline"
                  >
                    {t(`links.${k}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Usługi</p>
            <ul className="space-y-3">
              {[
                { name: "Performance Ads", color: "var(--color-led-blue-bright)" },
                { name: "Brand & Tracking", color: "var(--color-led-violet-bright)" },
                { name: "AI Automation", color: "var(--color-led-green-bright)" },
                { name: "Live Dashboard", color: "var(--color-led-pink-bright)" },
              ].map((s) => (
                <li key={s.name}>
                  <Link
                    href="/uslugi"
                    className="group inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                  >
                    <span
                      className="h-1 w-1 rounded-full"
                      style={{ background: s.color, boxShadow: `0 0 8px ${s.color}` }}
                    />
                    <span className="link-underline">{s.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">{t("contact_title")}</p>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${t("email")}`} className="text-sm text-white/80 hover:text-white transition-colors link-underline">
                  {t("email")}
                </a>
              </li>
              <li>
                <a href={`tel:${t("phone").replace(/\s/g, "")}`} className="text-sm text-white/80 hover:text-white transition-colors link-underline">
                  {t("phone")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">{t("social_title")}</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/oliwier.kochanowicz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <span className="link-underline">Instagram</span>
                  <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a href="#" className="group inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors">
                  <span className="link-underline">LinkedIn</span>
                  <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div className="flex items-center gap-4">
              <Image
                src="/images/brand/LOGO STRONA.png"
                alt="Olik Management"
                width={287}
                height={144}
                className="h-9 w-auto opacity-90"
                style={{ maxWidth: "130px" }}
              />
              <p className="text-xs text-[var(--color-text-dim)]">{t("copyright")}</p>
            </div>
            <Link href="/" className="text-xs text-[var(--color-text-dim)] hover:text-white transition-colors">
              {t("privacy")}
            </Link>
          </div>
        </div>

        <div className="mt-10 select-none pointer-events-none overflow-hidden">
          <p
            className="text-[13vw] md:text-[8.5vw] font-bold leading-[0.85] text-center"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.04em",
              background: "linear-gradient(180deg, rgba(59,130,246,0.18) 0%, rgba(168,85,247,0.10) 50%, transparent 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            OLIK MANAGEMENT
          </p>
        </div>
      </div>
    </footer>
  );
}
