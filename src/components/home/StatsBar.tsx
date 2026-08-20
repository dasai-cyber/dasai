"use client";

import React, { useEffect, useState, useRef } from "react";
import { Container } from "../layout/Container";
import { COMPANY_DATA } from "@/lib/company";
import { useInView } from "framer-motion";

function CounterItem({
  value,
  prefix = "",
  suffix = "",
  label,
  description,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Number(start.toFixed(value % 1 === 0 ? 0 : 1)));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center sm:text-left p-4 sm:p-6">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2C59] tracking-tight">
        <span>{prefix}</span>
        <span>{value % 1 === 0 ? Math.floor(count) : count.toFixed(1)}</span>
        <span className="text-[#FF6B00]">{suffix}</span>
      </div>
      <div className="mt-2 text-sm sm:text-base font-extrabold text-slate-800">
        {label}
      </div>
      <div className="mt-1 text-xs text-slate-500 max-w-xs line-clamp-2">
        {description}
      </div>
    </div>
  );
}

export function StatsBar() {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-10 mb-12">
      <Container>
        <div className="bg-white rounded-3xl shadow-corporate-lg border border-slate-100 p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {COMPANY_DATA.stats.map((stat) => (
              <CounterItem
                key={stat.id}
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
