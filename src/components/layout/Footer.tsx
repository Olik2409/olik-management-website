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
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 70% 0%, rgba(37,99,235,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative container-wide py-20 md:py-28">
        {/* Big editorial heading */}
        <div className="mb-16 md:mb-24 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-6">{t("links_title")}</p>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] text-white text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("tagline")}
            </h2>
            <Link
              href="/kontakt"
              className="group mt-8 inline-flex items-center gap-3 text-base text-[var(--color-accent-bright)] hover:text-white transition-colors"
            >
              <span className="link-underline font-medium">Umów discovery call</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="col-span-12 md:col-span-4 md:pt-4">
            <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
              {t("desc")}
            </p>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 mb-16">
          <div>
            <p className="eyebrow mb-4">Nawigacja</p>
            <ul className="space-y-3">
              {(["home","services","process","contact"] as const).map((k) => (
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
              {["Meta Ads", "Google Ads", "AI System", "Tracking & Analytics"].map((s) => (
                <li key={s}>
                  <Link href="/uslugi" className="text-sm text-white/80 hover:text-white transition-colors link-underline">
                    {s}
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

        {/* Bottom row with massive logo wordmark */}
        <div className="pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div className="flex items-center gap-4">
              <Image
                src="/images/brand/logo.png"
                alt=""
                width={110}
                height={55}
                className="h-8 w-auto object-contain opacity-60"
              />
              <p className="text-xs text-[var(--color-text-dim)]">{t("copyright")}</p>
            </div>
            <Link href="/" className="text-xs text-[var(--color-text-dim)] hover:text-white transition-colors">
              {t("privacy")}
            </Link>
          </div>
        </div>

        {/* Massive wordmark */}
        <div className="mt-16 select-none pointer-events-none overflow-hidden">
          <p
            className="text-[20vw] md:text-[14vw] font-bold leading-[0.8] text-white/[0.04] text-center"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
          >
            OLIK MANAGEMENT
          </p>
        </div>
      </div>
    </footer>
  );
}
