import React from "react";
import { Container } from "../layout/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { AnimatedSection } from "../ui/AnimatedSection";
import { COMPANY_DATA } from "@/lib/company";
import {
  ShieldCheck,
  ClockCheck,
  Cpu,
  Shuffle,
} from "lucide-react";

export function WhyChooseUs() {
  const iconMap: Record<string, React.ElementType> = {
    ShieldCheck: ShieldCheck,
    ClockCheck: ClockCheck,
    Cpu: Cpu,
    Shuffle: Shuffle,
  };

  return (
    <AnimatedSection className="py-20 sm:py-28 bg-slate-50" id="beneficios">
      <Container>
        <SectionTitle
          badge="¿Por Qué Elegirnos?"
          title="El socio logístico que tu empresa necesita"
          subtitle="Diseñado para dar respuesta ágil, trazabilidad en tiempo real y la máxima confiabilidad en cada kilómetro recorrido."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COMPANY_DATA.pillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || ShieldCheck;
            return (
              <div
                key={pillar.id}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#480CA8]/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#480CA8]/10 text-[#480CA8] group-hover:bg-[#F72585] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#480CA8] transition-colors mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#480CA8]">
                  <span>Pilar 0{idx + 1}</span>
                  <span className="text-[#F72585]">Estándar DASAI</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </AnimatedSection>
  );
}
