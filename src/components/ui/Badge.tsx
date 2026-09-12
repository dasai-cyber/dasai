import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "neutral" | "outline" | "success" | "warning";
  size?: "sm" | "md";
}

export function Badge({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-[#480CA8]/10 text-[#480CA8] border border-[#480CA8]/20",
    secondary: "bg-[#7209B7]/12 text-[#7209B7] border border-[#7209B7]/25",
    accent: "bg-[#F72585]/10 text-[#F72585] border border-[#F72585]/25",
    neutral: "bg-slate-100 text-slate-700 border border-slate-200",
    outline: "bg-transparent text-slate-700 border border-slate-300",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    warning: "bg-amber-50 text-amber-700 border border-amber-200",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 font-semibold",
    md: "text-xs px-3 py-1 font-bold",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
