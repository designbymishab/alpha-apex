"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  overline?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  overline,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center max-w-3xl mx-auto",
        className
      )}
    >
      {overline && (
        <p className="text-overline mb-4">{overline}</p>
      )}
      <h2 className="text-heading mb-4">{title}</h2>
      {description && (
        <p className="text-body-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
          {description}
        </p>
      )}
    </div>
  );
}
