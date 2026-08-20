import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTAFinal } from "@/components/home/CTAFinal";
import { COMPANY_DATA } from "@/lib/company";
import {
  ShieldCheck,
  Radio,
  Truck,
  Layers,
  ArrowRight,
  Wrench,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nuestra Flota de Vehículos",
  description:
    "Conoce nuestra flota de camionetas de reparto urbano, furgones de gran volumen, camiones 3/4 y camiones pesados con telemetría satelital en Chile.",
};

export default function FlotaPage() {
  return (
    <>
      <PageHeader
        badge="Flota Propia"
        title="Unidades preparadas para cada desafío operativo"
        description="Nuestra flota propia asegura disponibilidad inmediata, cumplimiento de mantenimientos preventivos y choferes con inducción permanente."
        breadcrumbs={[{ label: "Flota" }]}
      />

      {/* Fleet Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="space-y-16">
            {COMPANY_DATA.fleet.map((veh, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={veh.id}
                  id={veh.id}
                  className="rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10"
                >
                  {/* Vehicle Image (Col 1-5 or 8-12) */}
                  <div
                    className={`relative aspect-[16/10] w-full rounded-2xl bg-white border border-slate-200 p-4 shadow-sm flex items-center justify-center overflow-hidden ${
                      isEven ? "lg:col-span-5 lg:order-2" : "lg:col-span-5"
                    }`}
                  >
                    <Image
                      src={veh.image}
                      alt={veh.title}
                      fill
                      className="object-contain p-2"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="primary" size="sm">
                        Flota Certificada DASAI
                      </Badge>
                    </div>
                  </div>

                  {/* Vehicle Details & Specifications (Col 6-12 or 1-7) */}
                  <div
                    className={`space-y-5 ${
                      isEven ? "lg:col-span-7 lg:order-1" : "lg:col-span-7"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="accent" size="sm">
                        {veh.category.toUpperCase()}
                      </Badge>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                        <Radio className="w-3 h-3" />
                        GPS Satelital Activo
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-[#0F2C59]">
                      {veh.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {veh.description}
                    </p>

                    {/* Spec Indicators */}
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
                        <span className="text-[10px] font-bold uppercase text-slate-400 block">
                          Capacidad Carga
                        </span>
                        <span className="text-base font-black text-[#0F2C59]">
                          {veh.capacityKg >= 1000
                            ? `${(veh.capacityKg / 1000).toFixed(1)} Ton`
                            : `${veh.capacityKg} Kg`}
                        </span>
                      </div>

                      <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
                        <span className="text-[10px] font-bold uppercase text-slate-400 block">
                          Volumen Útil
                        </span>
                        <span className="text-base font-black text-[#0F2C59]">
                          {veh.volumeM3} m³
                        </span>
                      </div>

                      <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
                        <span className="text-[10px] font-bold uppercase text-slate-400 block">
                          Capacidad Pallets
                        </span>
                        <span className="text-base font-black text-[#00C29A]">
                          {veh.palletCapacity ? `${veh.palletCapacity} Std` : "N/A"}
                        </span>
                      </div>
                    </div>

                    {/* Key features */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                        Equipamiento y Seguridad:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {veh.features.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-center gap-2 text-xs text-slate-700"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00C29A] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recommended Usage Note */}
                    <div className="bg-blue-50/80 border border-blue-100 p-3.5 rounded-2xl">
                      <span className="text-xs font-bold text-blue-900 block mb-0.5">
                        Uso Operativo Recomendado:
                      </span>
                      <p className="text-xs text-blue-800 leading-tight">
                        {veh.recommendedUsage}
                      </p>
                    </div>

                    {/* Action */}
                    <div className="pt-2">
                      <Button
                        href={`/cotizar?vehicle=${veh.id}`}
                        variant="accent"
                        size="md"
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                      >
                        Cotizar con este tipo de vehículo
                      </Button>
                    </div>
                  </div>
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
