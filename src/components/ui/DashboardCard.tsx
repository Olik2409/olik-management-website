"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import type { LucideIcon } from "lucide-react";

interface Metric {
  value: string;
  label: string;
  color: string;
  icon: LucideIcon;
  delta: string;
  deltaLabel: string;
  up: boolean;
  spark: string;
}

interface Props {
  metrics: Metric[];
  compact?: boolean;
}

export function DashboardCard({ metrics, compact = false }: Props) {
  const t = useTranslations("dashboard");
  const activity = [
    { dot: "var(--color-led-green-bright)", text: t("a1_text"), time: t("a1_time") },
    { dot: "var(--color-led-blue-bright)", text: t("a2_text"), time: t("a2_time") },
    { dot: "var(--color-led-violet-bright)", text: t("a3_text"), time: t("a3_time") },
  ];

  return (
    <div
      className="relative rounded-2xl border overflow-hidden flex flex-col h-full"
      style={{
        background: "rgba(8,8,20,0.88)",
        borderColor: "rgba(59,130,246,0.3)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        boxShadow:
          "0 0 0 1px rgba(59,130,246,0.1), 0 24px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute -top-20 -right-20 h-60 w-60 rounded-full pointer-events-none"
        style={{ background: "var(--color-led-blue)", filter: "blur(80px)", opacity: 0.14 }}
      />
      <div
        className="absolute -bottom-24 -left-12 h-56 w-56 rounded-full pointer-events-none"
        style={{ background: "var(--color-led-violet)", filter: "blur(80px)", opacity: 0.11 }}
      />

      {/* Header bar */}
      <div
        className="relative flex items-center justify-between px-5 py-3.5 border-b shrink-0"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="flex items-center gap-2.5">
          <span
            className="h-2 w-2 rounded-full animate-pulse"
            style={{ background: "var(--color-led-green-bright)", boxShadow: "0 0 12px var(--color-led-green-glow)" }}
          />
          <span className="num-marker text-white/75 text-[11px] tracking-widest">OLIK DASHBOARD · LIVE</span>
        </div>
        <span className="text-[10px] text-white/30 font-mono">{t("live_update")}</span>
      </div>

      {/* Metric rows – vertical, fill height */}
      <div className="relative flex flex-col flex-1">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.9 + i * 0.1 }}
              className={`relative flex-1 flex items-center gap-4 ${i > 0 ? "border-t" : ""} ${compact ? "px-4 py-4" : "px-5 py-5"}`}
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              {/* Left accent bar */}
              <span
                className="absolute left-0 top-0 bottom-0 w-[2px]"
                style={{ background: m.color, opacity: 0.5, boxShadow: `0 0 12px ${m.color}` }}
              />

              {/* Icon chip */}
              <div
                className="flex items-center justify-center rounded-xl shrink-0"
                style={{
                  width: compact ? 38 : 44,
                  height: compact ? 38 : 44,
                  background: `${m.color}1a`,
                  border: `1px solid ${m.color}33`,
                }}
              >
                <Icon size={compact ? 17 : 19} style={{ color: m.color }} />
              </div>

              {/* Label + delta */}
              <div className="flex-1 min-w-0">
                <p className="text-[13px] text-white/65 leading-snug font-medium truncate">{m.label}</p>
                <div className="mt-1 flex items-center gap-1.5">
                  <span
                    className="text-[11px] font-bold leading-none"
                    style={{ color: m.color }}
                  >
                    {m.delta}
                  </span>
                  <span className="text-[10px] text-white/35 leading-none truncate">{m.deltaLabel}</span>
                </div>
              </div>

              {/* Value + sparkline */}
              <div className="flex flex-col items-end shrink-0">
                <p
                  className={`font-bold leading-none ${compact ? "text-2xl" : "text-[28px]"}`}
                  style={{
                    fontFamily: "var(--font-display)",
                    color: m.color,
                    textShadow: `0 0 24px ${m.color}70`,
                  }}
                >
                  {m.value}
                </p>
                <svg className="mt-2" width={compact ? 64 : 84} height="20" viewBox="0 0 80 28" preserveAspectRatio="none">
                  <polyline
                    points={m.spark}
                    fill="none"
                    stroke={m.color}
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.55"
                  />
                </svg>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Activity feed */}
      <div
        className={`relative border-t shrink-0 ${compact ? "px-4 py-3.5" : "px-5 py-4"}`}
        style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.015)" }}
      >
        <p className="eyebrow text-[10px] text-white/40 mb-3 tracking-widest uppercase">{t("activity_title")}</p>
        <div className="space-y-2.5">
          {activity.map((ev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 2.4 + i * 0.1 }}
              className="flex items-center gap-2.5"
            >
              <span
                className="h-1.5 w-1.5 rounded-full shrink-0"
                style={{ background: ev.dot, boxShadow: `0 0 8px ${ev.dot}` }}
              />
              <span className="text-xs text-white/70 flex-1 leading-tight truncate">{ev.text}</span>
              <span className="text-[10px] text-white/30 shrink-0">{ev.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
