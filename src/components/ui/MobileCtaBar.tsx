"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CalendarDays } from "lucide-react";

export function MobileCtaBar() {
  const t = useTranslations("nav");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
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
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 pb-[env(safe-area-inset-bottom,16px)]"
          style={{ background: "linear-gradient(to top, var(--color-bg) 60%, transparent)" }}
        >
          <Link
            href="/#contact"
            className="flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold text-black"
            style={{ background: "var(--color-accent)" }}
          >
            <CalendarDays size={16} />
            {t("cta")}
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
