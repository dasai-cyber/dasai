import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTAFinal } from "@/components/home/CTAFinal";
import {
  PackageCheck,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Smartphone,
  MapPin,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Servicio de Última Milla B2B y B2C",
  description:
    "Entrega capilar y rápida de pedidos directamente al cliente final con comprobante digital POD, trazabilidad en tiempo real y cobertura urbana en Chile.",
};

export default function UltimaMillaPage() {
  const benefits = [
    {
      title: "Prueba de Entrega Digital (POD)",
      desc: "Fotografía y firma digital del receptor en tiempo real para respaldo inmediato.",
      icon: Smartphone,
    },
    {
      title: "Monitoreo y Ruteo Dinámico",
      desc: "Optimizamos secuencias de entrega para cumplir ventanas horarias pactadas.",
      icon: MapPin,
    },
    {
      title: "Resolución de Incidencias en Ruta",
      desc: "Gestión activa en caso de destinatario ausente o dirección con dificultades de acceso.",
      icon: ShieldCheck,
    },
    {
      title: "SLA de Entrega Superior al 98%",
      desc: "Puntualidad comprobable y altos índices de satisfacción (CSAT/NPS).",
      icon: Clock,
    },
  ];

  return (
    <>
      <PageHeader
        badge="Servicio Especializado"
        title="Última Milla B2B y B2C"
        description="Conectamos tu bodega o centro de distribución directamente con tus clientes finales o puntos comerciales con la máxima rapidez y trazabilidad."
        breadcrumbs={[
          { label: "Servicios", href: "/servicios" },
          { label: "Última Milla" },
        ]}
      />

      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                Excelencia en la Entrega Final
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2C59] tracking-tight leading-tight">
                La experiencia de entrega que tus clientes recordarán
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                La última milla es el punto de contacto más sensible entre tu marca y tu comprador. En DASAI disponemos de camionetas y furgones ágiles con conductores capacitados en atención al cliente y manejo responsable de paquetes.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                Mantenemos una comunicación fluida y trazabilidad continua mediante notificaciones de estado y comprobante digital firmado al instante de la recepción.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button
                  href="/cotizar?service=ultima-milla"
                  variant="accent"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Cotizar Última Milla
                </Button>
                <Button
                  href="/flota"
                  variant="outline"
                  size="lg"
                >
                  Ver camionetas y furgones
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-50">
                <Image
                  src="/images/fleet/camioneta.svg"
                  alt="Camioneta de reparto urbano DASAI"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <SectionTitle
            badge="Ventajas Competitivas"
            title="¿Por qué confiar tu última milla a DASAI?"
            subtitle="Diseñamos procesos operativos orientados a reducir tasas de devolución e incidencias en destino."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#0F2C59] text-white flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#0F2C59]">{b.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTAFinal />
    </>
  );
}
