"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  variant?: "glass" | "solid";
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export function Card({
  variant = "glass",
  children,
  className,
  hover = true,
  padding = "md",
}: CardProps) {
  const paddingMap = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <motion.div
      className={cn(
        variant === "glass" ? "glass-card" : "bg-[var(--surface-solid)] border border-[var(--border-default)] rounded-[var(--radius-xl)]",
        paddingMap[padding],
        hover && "transition-all duration-300",
        className
      )}
      whileHover={hover ? { y: -4 } : undefined}
    >
      {children}
    </motion.div>
  );
}
