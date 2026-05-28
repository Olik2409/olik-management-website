import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "full" | "mark";
  className?: string;
  monochrome?: boolean;
};

export function Logo({ variant = "full", className, monochrome = false }: LogoProps) {
  const blue = monochrome ? "#ffffff" : "#2563eb";

  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("block", className)}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="olik-mark-grad" cx="50%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="60%" stopColor={blue} />
            <stop offset="100%" stopColor="#1e3a8a" />
          </radialGradient>
          <filter id="olik-mark-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="32" cy="32" r="30" fill={monochrome ? "#ffffff" : "url(#olik-mark-grad)"} />
        <path
          d="M18 33 L28 43 L46 22"
          stroke={monochrome ? "#0a0a12" : "#ffffff"}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#olik-mark-glow)"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 280 88"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("block", className)}
      aria-label="Olik Management"
    >
      <defs>
        <radialGradient id="olik-logo-grad" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="60%" stopColor={blue} />
          <stop offset="100%" stopColor="#1e3a8a" />
        </radialGradient>
      </defs>

      {/* Circle mark */}
      <circle cx="40" cy="44" r="36" fill={monochrome ? "#ffffff" : "url(#olik-logo-grad)"} />
      <path
        d="M22 45 L34 57 L58 31"
        stroke={monochrome ? "#0a0a12" : "#ffffff"}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* OLIK wordmark */}
      <text
        x="92"
        y="50"
        fill={monochrome ? "#ffffff" : "#ffffff"}
        fontFamily="var(--font-display), 'Syne', sans-serif"
        fontWeight="800"
        fontSize="34"
        letterSpacing="-0.5"
      >
        OLIK
      </text>

      {/* MANAGEMENT subline */}
      <text
        x="93"
        y="72"
        fill={monochrome ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.7)"}
        fontFamily="'JetBrains Mono', monospace"
        fontWeight="500"
        fontSize="10"
        letterSpacing="4.5"
      >
        MANAGEMENT
      </text>
    </svg>
  );
}
