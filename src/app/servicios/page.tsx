import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTAFinal } from "@/components/home/CTAFinal";
import { COMPANY_DATA } from "@/lib/company";
import {
  PackageCheck,
  Route,
  Truck,
  ShoppingBag,
  Check,
  ArrowRight,
  ShieldCheck,
  Clock,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios de Transporte y Distribución",
  description:
    "Soluciones logísticas integrales: Última Milla B2B/B2C, Distribución Programada, Transporte de Carga General y Repartos E-Commerce Same Day / Next Day.",
};

export default function ServiciosPage() {
  const iconMap: Record<string, React.ElementType> = {
    TruckFast: PackageCheck,
    Route: Route,
    Container: Truck,
    ShoppingBag: ShoppingBag,
  };

  return (
    <>
      <PageHeader
        badge="Catálogo de Servicios"
        title="Soluciones logísticas adaptadas a tu escala"
        description="Desde entregas rápidas de última milla para comercio electrónico hasta transporte troncal de carga paletizada para grandes distribuidores."
        breadcrumbs={[{ label: "Servicios" }]}
      />

      {/* Services List Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="space-y-16">
            {COMPANY_DATA.services.map((service, idx) => {
              const Icon = iconMap[service.icon] || PackageCheck;
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="p-8 sm:p-12 rounded-3xl bg-[#FCF9FF] border border-[#EADBFC] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Service Text & Features (Col 1-7 or 6-12) */}
                  <div className={`space-y-6 ${isEven ? "lg:col-span-7 lg:order-2" : "lg:col-span-7"}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#480CA8] text-white flex items-center justify-center shadow-md shadow-[#480CA8]/20">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <Badge variant="accent" size="sm">
                          {service.badge}
                        </Badge>
                        <h3 className="text-2xl sm:text-3xl font-black text-[#10002B] mt-1">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                        Beneficios &amp; Especificaciones:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-white p-2.5 rounded-xl border border-[#EADBFC]"
                          >
                            <Check className="w-4 h-4 text-[#F72585] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <Button
                        href={`/servicios/${service.slug}`}
                        variant="primary"
                        size="md"
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                      >
                        Ver detalles del servicio
                      </Button>
                      <Button
                        href={`/cotizar?service=${service.slug}`}
                        variant="accent"
                        size="md"
                      >
                        Cotizar este servicio
                      </Button>
                    </div>
                  </div>

                  {/* Operational Card / Use Cases (Col 8-12 or 1-5) */}
                  <div className={`space-y-4 ${isEven ? "lg:col-span-5 lg:order-1" : "lg:col-span-5"}`}>
                    <div className="bg-white rounded-2xl p-6 border border-[#EADBFC] shadow-sm space-y-4">
                      <h4 className="text-xs font-black uppercase tracking-wider text-[#480CA8] pb-2 border-b border-[#EADBFC]">
                        Casos de Uso Frecuentes
                      </h4>
                      <ul className="space-y-2">
                        {service.useCases.map((uc, uIdx) => (
                          <li
                            key={uIdx}
                            className="text-xs text-slate-600 flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F72585]" />
                            <span>{uc}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="text-xs font-black uppercase tracking-wider text-[#480CA8] pt-2 pb-1 border-b border-[#EADBFC]">
                        Flota Asignada Típicamente
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {service.vehicles.map((veh, vIdx) => (
                          <span
                            key={vIdx}
                            className="px-2.5 py-1 rounded-lg bg-purple-50 text-[#480CA8] font-semibold text-[11px] border border-purple-100"
                          >
                            {veh}
                          </span>
                        ))}
                      </div>
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
