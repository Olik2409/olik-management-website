"use client";

interface Props {
  items: string[];
  color?: string;
}

export function MarqueeTicker({ items, color }: Props) {
  const accent = color ?? "var(--color-led-blue-bright)";
  return (
    <div className="relative w-full overflow-hidden border-y border-white/[0.06] bg-[var(--color-bg)] py-6 md:py-8">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-8 text-3xl md:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-white/90">{item}</span>
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: accent, boxShadow: `0 0 20px ${accent}` }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
