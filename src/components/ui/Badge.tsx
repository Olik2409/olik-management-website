import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  number,
}: {
  children: React.ReactNode;
  className?: string;
  number?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 eyebrow",
        className
      )}
    >
      {number && <span className="text-[var(--color-accent-bright)] font-semibold">{number}</span>}
      {number && <span className="h-px w-8 bg-[var(--color-text-faint)]" />}
      {children}
    </span>
  );
}
