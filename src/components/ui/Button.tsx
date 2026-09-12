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
      "bg-[#480CA8] text-white hover:bg-[#3A0CA3] focus:ring-[#480CA8] shadow-md shadow-[#480CA8]/20 hover:shadow-lg",
    secondary:
      "bg-[#7209B7] text-white hover:bg-[#560BAD] focus:ring-[#7209B7] shadow-md shadow-[#7209B7]/20",
    accent:
      "bg-gradient-to-r from-[#7209B7] to-[#F72585] text-white hover:from-[#560BAD] hover:to-[#D81159] focus:ring-[#F72585] shadow-md shadow-[#F72585]/25 hover:shadow-lg hover:shadow-[#F72585]/35",
    outline:
      "border-2 border-[#480CA8] text-[#480CA8] hover:bg-[#480CA8] hover:text-white focus:ring-[#480CA8]",
    ghost:
      "text-[#480CA8] hover:bg-[#F3EEF9] focus:ring-[#7209B7]",
    white:
      "bg-white text-[#480CA8] hover:bg-[#FCF9FF] hover:text-[#7209B7] focus:ring-white shadow-lg",
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
