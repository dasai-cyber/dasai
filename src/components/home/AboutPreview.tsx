import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { AnimatedSection } from "../ui/AnimatedSection";
import {
  ShieldCheck,
  Cpu,
  Users,
  Truck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export function AboutPreview() {
  const highlights = [
    {
      title: "Flota Propia y Dedicada",
      desc: "Unidades modernas equipadas para distribución urbana y transporte troncal.",
      icon: Truck,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Trazabilidad & Tecnología",
      desc: "Monitoreo GPS 24/7 y comprobante digital con firma y geolocalización.",
      icon: Cpu,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "Conductores Certificados",
      desc: "Personal profesional con inducciones de seguridad y rigurosos protocolos.",
      icon: Users,
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "Seguridad Garantizada",
      desc: "Custodia de mercadería y cobertura integral de carga en cada viaje.",
      icon: ShieldCheck,
      color: "text-indigo-600 bg-indigo-50",
    },
  ];

  return (
    <AnimatedSection className="py-16 sm:py-24 bg-slate-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image & Operational Composition (Col 1-6) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-corporate-lg border border-slate-200 bg-white">
              <Image
                src="/images/fleet/camion-34.svg"
                alt="Operación logística DASAI"
                fill
                className="object-contain p-4"
              />
            </div>

            {/* Experience Badge Card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#0F2C59] text-white p-5 rounded-2xl shadow-xl border border-white/10 max-w-xs">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black text-[#FF8A3D]">+12</span>
                <div className="text-xs font-semibold leading-tight text-slate-200">
                  Años liderando operaciones logísticas seguras
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Value Pillars (Col 7-12) */}
          <div className="lg:col-span-6 space-y-6">
            <SectionTitle
              align="left"
              badge="Sobre Nosotros"
              title="Una logística que se mueve contigo"
              subtitle="Somos una empresa especializada en transporte y distribución, comprometida con entregar soluciones eficientes, seguras y adaptadas a las necesidades operativas de cada cliente."
              className="mb-6"
            />

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2 hover:border-[#0F2C59]/30 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-xl shrink-0 ${item.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <Button
                href="/nosotros"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Conoce nuestra empresa
              </Button>
              <Button href="/contacto" variant="ghost" size="lg">
                Hablar con un asesor
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
