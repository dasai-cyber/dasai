import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  isDark?: boolean;
  className?: string;
}

export function SectionTitle({
  badge,
  title,
  subtitle,
  align = "center",
  isDark = false,
  className,
}: SectionTitleProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl mb-12 lg:mb-16",
        alignmentClasses[align],
        className
      )}
    >
      {badge && (
        <div className="mb-3.5">
          <Badge variant={isDark ? "accent" : "primary"}>
            {badge}
          </Badge>
        </div>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight",
          isDark ? "text-white" : "text-[#0F2C59]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed max-w-2xl",
            isDark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
