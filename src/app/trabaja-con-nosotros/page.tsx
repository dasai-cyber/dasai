import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";
import {
  ShieldCheck,
  Heart,
  TrendingUp,
  Award,
  Truck,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Trabaja con Nosotros — Únete al Equipo DASAI",
  description:
    "Postula para integrarte a nuestro equipo de conductores profesionales (A2, A4, A5), auxiliares y operadores logísticos en Chile.",
};

export default function TrabajaConNosotrosPage() {
  const benefits = [
    {
      title: "Contrato Estable & Beneficios",
      desc: "Seguridad laboral con remuneraciones acorde al mercado, imposiciones al día y bonos por cumplimiento.",
      icon: ShieldCheck,
    },
    {
      title: "Flota Moderna & Bien Mantenida",
      desc: "Vehículos con mantenimiento preventivo riguroso, aire acondicionado y tecnología de asistencia.",
      icon: Truck,
    },
    {
      title: "Ambiente Colaborativo",
      desc: "Respeto, compañerismo y canales de comunicación abiertos con la jefatura de tráfico.",
      icon: Heart,
    },
    {
      title: "Capacitación Continua",
      desc: "Inducciones periódicas en conducción eficiente, seguridad vial y primeros auxilios.",
      icon: Award,
    },
  ];

  return (
    <>
      <PageHeader
        badge="Bolsa de Empleo"
        title="Forma parte del equipo de transporte DASAI"
        description="Buscamos conductores profesionales, peonetas y personal logístico comprometido con la excelencia y la puntualidad."
        breadcrumbs={[{ label: "Trabaja con Nosotros" }]}
      />

      <section className="py-16 sm:py-24 bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Benefits & Culture (Col 1-5) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                  ¿Por qué trabajar en DASAI?
                </span>
                <h3 className="text-2xl font-black text-[#0F2C59]">
                  Crecemos junto a las personas que mueven nuestras rutas
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Sabemos que el valor de una empresa logística reside en sus conductores y operadores de terreno. Por eso cuidamos a nuestro equipo con condiciones dignas, respeto y respaldo permanente.
                </p>

                <div className="space-y-4 pt-2">
                  {benefits.map((b, idx) => {
                    const Icon = b.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#0F2C59] flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">
                            {b.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                            {b.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Application Form (Col 6-12) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-corporate-lg space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-[#0F2C59]">
                    Envía tu postulación
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Completa tus datos personales y experiencia laboral para ser considerado en nuestros procesos de selección.
                  </p>
                </div>

                <JobApplicationForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
