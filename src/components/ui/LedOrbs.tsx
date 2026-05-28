"use client";
import { motion } from "framer-motion";

export function LedOrbs({ variant = "hero" }: { variant?: "hero" | "subtle" | "dense" }) {
  const orbs =
    variant === "hero"
      ? [
          { color: "var(--color-led-blue)", size: 480, x: "20%", y: "30%", delay: 0 },
          { color: "var(--color-led-violet-bright)", size: 360, x: "75%", y: "60%", delay: 2 },
          { color: "var(--color-led-green-bright)", size: 320, x: "55%", y: "85%", delay: 4 },
          { color: "var(--color-led-pink-bright)", size: 280, x: "90%", y: "15%", delay: 6 },
        ]
      : variant === "dense"
      ? [
          { color: "var(--color-led-blue)", size: 380, x: "15%", y: "25%", delay: 0 },
          { color: "var(--color-led-violet-bright)", size: 300, x: "85%", y: "70%", delay: 3 },
          { color: "var(--color-led-pink-bright)", size: 260, x: "50%", y: "10%", delay: 5 },
        ]
      : [
          { color: "var(--color-led-blue)", size: 280, x: "10%", y: "40%", delay: 0 },
          { color: "var(--color-led-violet)", size: 260, x: "80%", y: "70%", delay: 4 },
        ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: o.size,
            height: o.size,
            left: o.x,
            top: o.y,
            background: o.color,
            filter: "blur(120px)",
            opacity: 0.4,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 20 + i * 4,
            delay: o.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
