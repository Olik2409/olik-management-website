"use client";
import { motion, type Variants } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface Props {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  stagger?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  splitBy?: "word" | "char";
  trigger?: "view" | "mount";
}

export function SplitText({
  text,
  className,
  style,
  delay = 0,
  stagger = 0.04,
  duration = 0.8,
  as = "span",
  splitBy = "word",
  trigger = "view",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const shouldAnimate = trigger === "mount" ? true : isInView;

  const units = splitBy === "word" ? text.split(" ") : text.split("");

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const item: Variants = {
    hidden: { y: "110%", opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration, ease: [0.22, 1, 0.36, 1] as never },
    },
  };

  const Tag = motion[as] as typeof motion.span;

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={style}
      variants={container}
      initial="hidden"
      animate={shouldAnimate ? "show" : "hidden"}
      aria-label={text}
    >
      {units.map((unit, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block overflow-hidden align-baseline"
          style={{ lineHeight: 0.95 }}
        >
          <motion.span variants={item} className="inline-block">
            {unit}
            {splitBy === "word" && i < units.length - 1 && " "}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
