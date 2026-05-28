import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "full" | "mark" | "wordmark";
  className?: string;
  monochrome?: boolean;
};

const BLUE = "#2563eb";

export function Logo({ variant = "full", className, monochrome = false }: LogoProps) {
  const blue = monochrome ? "#ffffff" : BLUE;
  const ink = monochrome ? "#0a0a12" : "#ffffff";

  // The brand mark: thick blue ring with white checkmark whose long arm
  // breaks out beyond the upper-right edge of the ring.
  const Mark = (
    <g>
      <circle
        cx="50"
        cy="50"
        r="34"
        fill="none"
        stroke={blue}
        strokeWidth="14"
      />
      <path
        d="M22 52 L42 70 L86 18"
        stroke={ink}
        strokeWidth="13"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>
  );

  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("block", className)}
        aria-hidden="true"
      >
        {Mark}
      </svg>
    );
  }

  if (variant === "wordmark") {
    return (
      <svg
        viewBox="0 0 320 110"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("block", className)}
        aria-label="Olik Management"
      >
        <text
          x="0"
          y="74"
          fill={monochrome ? "#0a0a12" : "#ffffff"}
          fontFamily="var(--font-display), 'Syne', system-ui, sans-serif"
          fontWeight="800"
          fontSize="92"
          letterSpacing="-2"
        >
          OLIK
        </text>
        <text
          x="2"
          y="100"
          fill={monochrome ? "rgba(10,10,18,0.85)" : "rgba(255,255,255,0.95)"}
          fontFamily="var(--font-display), 'Syne', system-ui, sans-serif"
          fontWeight="700"
          fontSize="18"
          letterSpacing="5.5"
        >
          MANAGEMENT
        </text>
      </svg>
    );
  }

  // Full: mark + wordmark side by side, sized to match the brand proportions
  return (
    <svg
      viewBox="0 0 420 110"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("block", className)}
      aria-label="Olik Management"
    >
      <g transform="translate(0,5)">{Mark}</g>
      <g transform="translate(115,0)">
        <text
          x="0"
          y="74"
          fill={monochrome ? "#0a0a12" : "#ffffff"}
          fontFamily="var(--font-display), 'Syne', system-ui, sans-serif"
          fontWeight="800"
          fontSize="78"
          letterSpacing="-1.5"
        >
          OLIK
        </text>
        <text
          x="3"
          y="98"
          fill={monochrome ? "rgba(10,10,18,0.85)" : "rgba(255,255,255,0.95)"}
          fontFamily="var(--font-display), 'Syne', system-ui, sans-serif"
          fontWeight="700"
          fontSize="15"
          letterSpacing="4.8"
        >
          MANAGEMENT
        </text>
      </g>
    </svg>
  );
}
