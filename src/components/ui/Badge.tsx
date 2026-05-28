import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent-muted)] px-3 py-1 text-xs font-medium uppercase tracking-widest text-[var(--color-accent)]",
        className
      )}
    >
      {children}
    </span>
  );
}
