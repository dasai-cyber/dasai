import React from "react";
import Image from "next/image";
import { Container } from "../layout/Container";
import { COMPANY_DATA } from "@/lib/company";

export function ClientsTrust() {
  // Multiply the logo list to guarantee a seamless, continuous infinite scroll loop
  const logos = COMPANY_DATA.clientLogos;
  const marqueeItems = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-slate-100 overflow-hidden relative">
      <Container>
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6C5E8A]">
            Empresas que confían en nuestras operaciones de transporte
          </span>
        </div>
      </Container>

      {/* Marquee Carousel Container with side gradient masks */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Left and Right Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Scrolling Track */}
        <div className="animate-marquee flex items-center gap-6 sm:gap-10">
          {marqueeItems.map((client, idx) => (
            <div
              key={idx}
              className="w-52 sm:w-64 h-24 sm:h-28 px-6 sm:px-8 rounded-2xl bg-[#FCF9FF] border border-[#EADBFC] hover:bg-white hover:border-[#7209B7]/50 hover:shadow-lg transition-all duration-300 flex items-center justify-center shrink-0 group cursor-default"
            >
              {client.logo && (
                <div className="relative w-full h-14 flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    width={220}
                    height={60}
                    className="max-h-12 w-auto object-contain transition-all duration-300 filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
