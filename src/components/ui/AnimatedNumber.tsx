"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  value: string;
  duration?: number;
}

function parseValue(val: string): { prefix: string; number: number; suffix: string } {
  const match = val.match(/^([^0-9]*)([0-9,.]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: val };
  const num = parseFloat(match[2].replace(",", ".").replace(/\s/g, ""));
  return { prefix: match[1], number: isNaN(num) ? 0 : num, suffix: match[3] };
}

function formatFinal(number: number): string {
  return Number.isInteger(number)
    ? Math.round(number).toLocaleString("pl-PL")
    : number.toFixed(1).replace(".", ",");
}

export function AnimatedNumber({ value, duration = 2000 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const { prefix, number, suffix } = parseValue(value);
  // SSR renders the final value so crawlers see real numbers (not "0").
  // The count-up animation still plays from 0 to the final value on the client.
  const [display, setDisplay] = useState(() => formatFinal(number));

  useEffect(() => {
    if (!isInView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = number * eased;
      setDisplay(
        Number.isInteger(number)
          ? Math.round(current).toLocaleString("pl-PL")
          : current.toFixed(1).replace(".", ",")
      );
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, number, duration]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}
