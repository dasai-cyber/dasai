import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { CTAFinal } from "@/components/home/CTAFinal";
import {
  Route,
  CheckCircle2,
  Calendar,
  Building,
  Layers,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Distribución Programada y Multipunto",
  description:
    "Distribución planificada hacia locales comerciales, sucursales y supermercados con rutas recurrentes, control de bultos y cumplimiento horario en Chile.",
};

export default function DistribucionPage() {
  const steps = [
    {
      title: "Planificación de Itinerario",
      desc: "Modelamos la ruta óptima considerando ventanas de recepción de tus locales y restricciones de tráfico.",
    },
    {
      title: "Consolidación y Carga",
      desc: "Inspección de bultos y pallets en bodega con asignación de precintos de seguridad.",
    },
    {
      title: "Distribución Multipunto",
      desc: "Despacho secuencial en cada sucursal con validación de guías de despacho.",
    },
    {
      title: "Cierre Operativo y Conciliación",
      desc: "Reporte consolidado de cumplimiento con todas las guías timbradas y respaldadas.",
    },
  ];

  return (
    <>
      <PageHeader
        badge="Distribución Periódica"
        title="Distribución Programada y Multipunto"
        description="Abastecimiento recurrente y planificado para cadenas de tiendas, supermercados, locales comerciales y distribuidores mayoristas."
        breadcrumbs={[
          { label: "Servicios", href: "/servicios" },
          { label: "Distribución" },
        ]}
      />

      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F72585]">
                Abastecimiento Comercial Eficiente
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10002B] tracking-tight leading-tight">
                Rutas periódicas diseñadas para no quebrar stock en sala
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Si tu negocio necesita abastecer diariamente o semanalmente una red de sucursales o clientes mayoristas, en DASAI estructuramos rutas fijas o flexibles que maximizan la capacidad de carga cúbica y garantizan la llegada en los horarios de recepción estipulados.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                Contamos con furgones de gran volumen y camiones 3/4 equipados con sistemas de fijación y custodia para asegurar la integridad total de la mercadería.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button
                  href="/cotizar?service=distribucion"
                  variant="accent"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Cotizar Distribución Programada
                </Button>
                <Button href="/flota" variant="outline" size="lg">
                  Ver Furgones y Camiones
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#EADBFC] bg-[#FCF9FF]">
                <Image
                  src="/images/fleet/furgon.svg"
                  alt="Furgón utilitario de distribución DASAI"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>

          <SectionTitle
            badge="Flujo Operativo"
            title="Cómo gestionamos tus rutas de distribución"
            subtitle="Control riguroso de inicio a fin para una conciliación documental sin inconsistencias."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#FCF9FF] border border-[#EADBFC] space-y-3"
              >
                <div className="text-2xl font-black text-[#F72585]">0{idx + 1}</div>
                <h4 className="text-base font-bold text-[#480CA8]">{s.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTAFinal />
    </>
  );
}
