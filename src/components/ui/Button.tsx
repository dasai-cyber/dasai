"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none select-none active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-[#0F2C59] text-white hover:bg-[#081B38] focus:ring-[#0F2C59] shadow-md hover:shadow-lg",
    secondary:
      "bg-[#00C29A] text-white hover:bg-[#00A885] focus:ring-[#00C29A] shadow-md",
    accent:
      "bg-[#FF6B00] text-white hover:bg-[#E05E00] focus:ring-[#FF6B00] shadow-accent hover:shadow-lg",
    outline:
      "border-2 border-[#0F2C59] text-[#0F2C59] hover:bg-[#0F2C59] hover:text-white focus:ring-[#0F2C59]",
    ghost:
      "text-[#0F2C59] hover:bg-slate-100 focus:ring-slate-300",
    white:
      "bg-white text-[#0F2C59] hover:bg-slate-100 focus:ring-white shadow-lg",
  };

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5",
    xl: "text-lg px-8 py-4 gap-3",
  };

  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={props.target} rel={props.rel}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
}
