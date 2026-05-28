"use client";
import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { href: "/uslugi", label: t("services") },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/o-nas", label: "O nas" },
    { href: "/kontakt", label: t("contact") },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/[0.06] bg-[var(--color-bg)]/80 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="container-wide flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 shrink-0 z-10">
            <Image
              src="/images/brand/logo.png"
              alt="Olik Management"
              width={44}
              height={44}
              className="h-9 w-9 object-contain"
              priority
            />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-sm font-bold tracking-wide text-white" style={{fontFamily:"var(--font-display)"}}>OLIK</span>
              <span className="text-[9px] font-medium tracking-[0.22em] uppercase text-[var(--color-text-muted)] mt-0.5">Management</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 link-underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <Link
              href={pathname}
              locale={locale === "pl" ? "en" : "pl"}
              className="text-xs font-medium tracking-widest text-[var(--color-text-dim)] hover:text-white transition-colors uppercase"
            >
              {locale === "pl" ? "EN" : "PL"}
            </Link>
            <span className="h-4 w-px bg-white/15" />
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-accent-bright)] transition-colors"
            >
              {t("cta")}
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/80 group-hover:bg-white transition-colors" />
            </Link>
          </div>

          <button
            className="lg:hidden p-2 -mr-2 text-white z-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-[var(--color-bg)]"
          >
            <div className="flex h-full flex-col container-wide pt-28 pb-12">
              <nav className="flex-1 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-4 text-3xl sm:text-4xl font-bold text-white border-b border-white/[0.08]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-center justify-between pt-6"
              >
                <Link
                  href={pathname}
                  locale={locale === "pl" ? "en" : "pl"}
                  onClick={() => setMenuOpen(false)}
                  className="text-xs font-medium tracking-widest text-[var(--color-text-muted)] uppercase"
                >
                  {locale === "pl" ? "EN" : "PL"}
                </Link>
                <Link
                  href="/kontakt"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white"
                >
                  {t("cta")}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
