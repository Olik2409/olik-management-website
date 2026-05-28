"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ExternalLink, Link2, Mail, Phone } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Image
              src="/images/brand/logo.png"
              alt="Olik Management"
              width={130}
              height={34}
              className="h-9 w-auto object-contain mb-4"
            />
            <p className="text-sm font-semibold text-[var(--color-accent)] mb-2">
              {t("tagline")}
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-sm">
              {t("desc")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4 uppercase tracking-wider">
              {t("links_title")}
            </h3>
            <ul className="space-y-2">
              {(["home", "services", "process", "contact"] as const).map((key) => (
                <li key={key}>
                  <Link
                    href={key === "home" ? "/" : `/#${key}`}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    {t(`links.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4 uppercase tracking-wider">
              {t("contact_title")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${t("email")}`}
                  className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <Mail size={14} />
                  {t("email")}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${t("phone").replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <Phone size={14} />
                  {t("phone")}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/oliwier.kochanowicz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
              >
                <ExternalLink size={16} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
              >
                <Link2 size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">{t("copyright")}</p>
          <Link
            href="/polityka-prywatnosci"
            className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
          >
            {t("privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
