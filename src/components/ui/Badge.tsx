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
    primary: "bg-[#0F2C59]/10 text-[#0F2C59] border border-[#0F2C59]/20",
    secondary: "bg-[#00C29A]/15 text-[#00896C] border border-[#00C29A]/30",
    accent: "bg-[#FF6B00]/10 text-[#D95B00] border border-[#FF6B00]/25",
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
