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
    <section className="relative pt-32 md:pt-36 pb-14 md:pb-20 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,99,235,0.18) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 85% 60%, rgba(168,85,247,0.10) 0%, transparent 60%), radial-gradient(ellipse 40% 30% at 15% 80%, rgba(0,255,157,0.07) 0%, transparent 60%)",
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
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-[0.95]"
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
