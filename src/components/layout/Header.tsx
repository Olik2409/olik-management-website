"use client";
import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/#services", label: t("services") },
    { href: "/#process", label: t("process") },
    { href: "/#contact", label: t("contact") },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/brand/logo.png"
            alt="Olik Management"
            width={120}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href={pathname}
            locale={locale === "pl" ? "en" : "pl"}
            className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
          >
            <Globe size={14} />
            {locale === "pl" ? "EN" : "PL"}
          </Link>
          <Link
            href="/#contact"
            className="rounded-full bg-[var(--color-accent)] px-5 py-2 text-sm font-semibold text-black hover:bg-[var(--color-accent-hover)] transition-colors duration-200"
          >
            {t("cta")}
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-[var(--color-text-secondary)]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-xl px-6 pb-6 pt-4"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 flex items-center justify-between border-t border-[var(--color-border)]">
                <Link
                  href={pathname}
                  locale={locale === "pl" ? "en" : "pl"}
                  className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)]"
                >
                  <Globe size={14} />
                  {locale === "pl" ? "EN" : "PL"}
                </Link>
                <Link
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full bg-[var(--color-accent)] px-5 py-2 text-sm font-semibold text-black"
                >
                  {t("cta")}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
