import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "accent" | "neutral";
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  variant = "accent",
  children,
  className,
  icon,
}: BadgeProps) {
  return (
    <span
      className={cn(
        variant === "accent" ? "badge" : "badge-neutral",
        className
      )}
    >
      {icon && <span className="inline-flex">{icon}</span>}
      {children}
    </span>
  );
}
