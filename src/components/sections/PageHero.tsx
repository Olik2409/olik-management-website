"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

interface Props {
  number: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description?: string;
}

export function PageHero({ number, eyebrow, title, titleAccent, description }: Props) {
  return (
    <section className="relative pt-40 md:pt-48 pb-20 md:pb-28 overflow-hidden">
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.12) 0%, transparent 60%)",
        }}
      />
      <div className="relative container-wide">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-8">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge number={number}>{eyebrow}</Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
              className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[112px] font-bold text-balance leading-[0.95]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-white">{title}</span>
              {titleAccent && (
                <>
                  {" "}
                  <span className="text-[var(--color-accent-bright)] italic">{titleAccent}</span>
                </>
              )}
            </motion.h1>
          </div>
          {description && (
            <div className="col-span-12 md:col-span-4 md:pb-8">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-[var(--color-text-muted)] leading-relaxed"
              >
                {description}
              </motion.p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
