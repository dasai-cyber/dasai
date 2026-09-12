import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Badge } from "../ui/Badge";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  children?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  badge,
  title,
  description,
  breadcrumbs = [],
  children,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "relative bg-gradient-to-r from-[#240046] via-[#3A0CA3] to-[#480CA8] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden border-b border-[#7209B7]/30",
        className
      )}
    >
      {/* Background Decorative Graphic Elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F72585_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#7209B7] rounded-full blur-3xl opacity-25 pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-[#F72585] rounded-full blur-3xl opacity-20 pointer-events-none" />

      <Container className="relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center space-x-2 text-xs font-medium text-purple-200 mb-6 select-none" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Inicio</span>
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#F72585] font-bold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="max-w-3xl">
          {badge && (
            <div className="mb-4">
              <Badge variant="accent" size="md">
                {badge}
              </Badge>
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {children && <div className="mt-8">{children}</div>}
      </Container>
    </div>
  );
}
