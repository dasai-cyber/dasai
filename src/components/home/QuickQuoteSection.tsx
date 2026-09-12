import React from "react";
import { Container } from "../layout/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { AnimatedSection } from "../ui/AnimatedSection";
import { QuoteForm } from "../forms/QuoteForm";
import { ShieldCheck, Clock, CheckCircle2, Phone } from "lucide-react";
import { COMPANY_DATA } from "@/lib/company";

export function QuickQuoteSection() {
  return (
    <AnimatedSection className="py-20 sm:py-28 bg-slate-100/70" id="cotizar-seccion">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Conversion Copy & Trust Pillars (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <SectionTitle
              align="left"
              badge="Cotización en Línea"
              title="Cuéntanos qué necesitas transportar"
              subtitle="Completa el formulario y te entregaremos una propuesta comercial y operativa ajustada al volumen y frecuencia de tu negocio en menos de 2 horas."
              className="mb-6"
            />

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <Clock className="w-5 h-5 text-[#F72585] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Respuesta Comercial Rápida
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Evaluamos la factibilidad de tu ruta y enviamos tarifas transparentes sin costos ocultos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-[#00C29A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Flota Propia Asegurada
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Garantizamos disponibilidad de vehículos con choferes contratados y seguro de carga.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Tarifas por Volumen y Frecuencia
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Planes preferenciales para contratos de distribución recurrente y operaciones e-commerce.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Phone Call Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#240046] to-[#480CA8] text-white space-y-2 border border-[#7209B7]/30 shadow-md">
              <span className="text-xs font-bold uppercase tracking-wider text-pink-200">
                ¿Prefieres hablar directamente?
              </span>
              <div className="text-lg font-black text-white flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#F72585]" />
                <a href={`tel:${COMPANY_DATA.phoneRaw}`} className="hover:underline">
                  {COMPANY_DATA.phone}
                </a>
              </div>
              <p className="text-xs text-purple-200">
                Lunes a Viernes de 08:00 a 19:00 hrs.
              </p>
            </div>
          </div>

          {/* Right Column: Embedded Form (Col 6-12) */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
