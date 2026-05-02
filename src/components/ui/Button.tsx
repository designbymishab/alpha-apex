import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", icon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold tracking-wider uppercase transition-all duration-300 rounded-full",
          {
            "bg-[var(--accent)] text-black hover:bg-[var(--accent-hover)]": variant === "primary",
            "bg-transparent text-white border border-white/10 hover:bg-white/5": variant === "secondary",
            "bg-transparent text-white/70 hover:text-white": variant === "ghost",
            "h-10 px-4 text-xs": size === "sm",
            "h-12 px-6 text-sm": size === "md",
            "h-14 px-8 text-sm": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
        {icon && <span className="shrink-0">{icon}</span>}
      </button>
    );
  }
);
Button.displayName = "Button";
