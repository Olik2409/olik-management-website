"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export function MobileCtaBar() {
  const t = useTranslations("nav");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="lg:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pt-8 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(5,11,31,0.95) 50%, transparent 100%)",
            paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
          }}
        >
          <Link
            href="/kontakt"
            className="pointer-events-auto group flex items-center justify-between rounded-full pl-6 pr-1.5 py-1.5 text-sm font-semibold text-white"
            style={{
              background: "var(--color-accent)",
              boxShadow: "0 8px 32px var(--color-accent-glow)",
            }}
          >
            <span>{t("cta")}</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <ArrowRight size={16} />
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
