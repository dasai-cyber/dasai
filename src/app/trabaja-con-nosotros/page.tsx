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
  title: "Trabaja con Nosotros — Registro de Choferes DASAI",
  description:
    "Postula para integrarte a nuestra flota de conductores profesionales, furgones, camionetas y camiones de distribución en Chile.",
};

export default function TrabajaConNosotrosPage() {
  const benefits = [
    {
      title: "Pagos Puntuales y Rutas Claras",
      desc: "Seguridad y cumplimiento en cada servicio realizado con tarifas competitivas del mercado.",
      icon: ShieldCheck,
    },
    {
      title: "Flexibilidad de Servicios",
      desc: "Opciones para última milla, distribución programada o transporte de carga según tu disponibilidad y tipo de vehículo.",
      icon: Truck,
    },
    {
      title: "Soporte Operacional Permanente",
      desc: "Acompañamiento en ruta desde nuestra central de monitoreo y tráfico 24/7.",
      icon: Heart,
    },
    {
      title: "Crecimiento y Continuidad",
      desc: "Posibilidad de asignación recurrente de rutas y convenios comerciales estables.",
      icon: Award,
    },
  ];

  return (
    <>
      <PageHeader
        badge="Únete a la Flota"
        title="Trabaja con Nosotros — Registro de Choferes"
        description="Si tienes vehículo propio o experiencia en conducción profesional, completa tus datos para incorporarte a nuestros servicios logísticos."
        breadcrumbs={[{ label: "Trabaja con Nosotros" }]}
      />

      <section className="py-12 sm:py-20 bg-slate-950 text-slate-100 relative overflow-hidden">
        {/* Glow background effects */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#480CA8] rounded-full blur-3xl opacity-20 pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#F72585] rounded-full blur-3xl opacity-15 pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Beneficios (Col 1-5) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#161a23] rounded-2xl p-6 sm:p-8 border border-slate-800/80 shadow-xl space-y-6">
                <span className="inline-block px-3 py-1 rounded-full bg-[#480CA8]/30 border border-purple-500/30 text-xs font-extrabold uppercase tracking-wider text-[#F72585]">
                  ¿Por qué unirte a DASAI?
                </span>
                <h3 className="text-2xl font-black text-white leading-tight">
                  Mueve tus rutas con el respaldo de una empresa seria
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Buscamos choferes responsables con o sin vehículo para cubrir entregas de última milla, distribución y transporte en Santiago y regiones.
                </p>

                <div className="space-y-4 pt-2">
                  {benefits.map((b, idx) => {
                    const Icon = b.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">
                            {b.title}
                          </h4>
                          <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                            {b.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 rounded-xl bg-[#1e2330] border border-slate-700/60 text-xs text-slate-300">
                  <span className="font-bold text-emerald-400">¿Tienes dudas?</span> Escríbenos a <a href="mailto:contacto@dasai.cl" className="text-purple-400 hover:underline">contacto@dasai.cl</a> o contáctanos por WhatsApp.
                </div>
              </div>
            </div>

            {/* Formulario Agregar Chofer (Col 6-12) */}
            <div className="lg:col-span-8">
              <JobApplicationForm />
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
