import React from "react";
import { Container } from "../layout/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { AnimatedSection } from "../ui/AnimatedSection";
import { COMPANY_DATA } from "@/lib/company";
import { ArrowRight, Check } from "lucide-react";

export function ProcessSection() {
  return (
    <AnimatedSection className="py-20 sm:py-28 bg-slate-50 relative" id="proceso">
      <Container>
        <SectionTitle
          badge="Metodología Operativa"
          title="Cómo trabajamos con tu empresa"
          subtitle="Un proceso estructurado, transparente y ágil para asegurar que cada carga viaje segura y llegue puntualmente a su destino."
        />

        <div className="relative">
          {/* Visual Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-[#0F2C59] via-[#FF6B00] to-[#00C29A] -translate-y-12 z-0" />

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {COMPANY_DATA.processSteps.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number Circle */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#0F2C59] text-white flex items-center justify-center font-black text-xl group-hover:bg-[#FF6B00] transition-colors shadow-md">
                      {step.step}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Fase 0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#0F2C59] transition-colors mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm font-bold text-[#FF6B00] mb-2">
                    {step.description}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-[#00C29A]">
                  <Check className="w-4 h-4" />
                  <span>Control de calidad DASAI</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
