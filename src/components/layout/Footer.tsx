"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative border-t border-white/[0.08] bg-[var(--color-bg)] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 70% 0%, rgba(37,99,235,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 20% 100%, rgba(168,85,247,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="relative container-wide pt-20 md:pt-28 pb-10 md:pb-14">

        {/* Top CTA row */}
        <div className="mb-16 md:mb-20 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-5 text-[var(--color-text-muted)]">{t("links_title")}</p>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] text-white text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("tagline")}
            </h2>
            <Link
              href="/kontakt"
              className="group mt-8 inline-flex items-center gap-3 text-base transition-colors font-semibold"
              style={{ color: "var(--color-led-blue-bright)" }}
            >
              <span className="link-underline">Umów discovery call</span>
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="col-span-12 md:col-span-5 md:pt-4">
            <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed">{t("desc")}</p>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-16 border-b border-white/[0.07]">
          <div>
            <p className="eyebrow mb-5 text-xs tracking-widest text-[var(--color-text-dim)]">Nawigacja</p>
            <ul className="space-y-4">
              {(["home", "services", "process", "contact"] as const).map((k) => (
                <li key={k}>
                  <Link
                    href={k === "home" ? "/" : k === "process" ? "/#process" : `/${k === "services" ? "uslugi" : "kontakt"}`}
                    className="text-base text-white/70 hover:text-white transition-colors link-underline font-medium"
                  >
                    {t(`links.${k}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 text-xs tracking-widest text-[var(--color-text-dim)]">Usługi</p>
            <ul className="space-y-4">
              {[
                { name: "Performance Ads", color: "var(--color-led-blue-bright)" },
                { name: "Brand & Tracking", color: "var(--color-led-violet-bright)" },
                { name: "AI Automation", color: "var(--color-led-green-bright)" },
                { name: "Live Dashboard", color: "var(--color-led-pink-bright)" },
              ].map((s) => (
                <li key={s.name}>
                  <Link
                    href="/uslugi"
                    className="group inline-flex items-center gap-2.5 text-base text-white/70 hover:text-white transition-colors font-medium"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ background: s.color, boxShadow: `0 0 10px ${s.color}` }}
                    />
                    <span className="link-underline">{s.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 text-xs tracking-widest text-[var(--color-text-dim)]">{t("contact_title")}</p>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${t("email")}`} className="text-base text-white/70 hover:text-white transition-colors link-underline font-medium break-all">
                  {t("email")}
                </a>
              </li>
              <li>
                <a href={`tel:${t("phone").replace(/\s/g, "")}`} className="text-base text-white/70 hover:text-white transition-colors link-underline font-medium">
                  {t("phone")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 text-xs tracking-widest text-[var(--color-text-dim)]">{t("social_title")}</p>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.instagram.com/oliwier.kochanowicz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-base text-white/70 hover:text-white transition-colors font-medium"
                >
                  <span className="link-underline">Instagram</span>
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a href="#" className="group inline-flex items-center gap-2 text-base text-white/70 hover:text-white transition-colors font-medium">
                  <span className="link-underline">LinkedIn</span>
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className="text-lg font-bold text-white/80 tracking-tight select-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              OLIK<span style={{ color: "var(--color-led-blue-bright)" }}> Management</span>
            </span>
            <span className="text-xs text-[var(--color-text-dim)]">{t("copyright")}</span>
          </div>
          <Link href="/" className="text-sm text-[var(--color-text-dim)] hover:text-white transition-colors">
            {t("privacy")}
          </Link>
        </div>

        {/* Watermark */}
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
