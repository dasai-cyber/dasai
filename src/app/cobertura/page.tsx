import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTAFinal } from "@/components/home/CTAFinal";
import { COMPANY_DATA } from "@/lib/company";
import {
  MapPin,
  Clock,
  Building,
  CheckCircle,
  Truck,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cobertura Regional y Rutas en Chile",
  description:
    "Rutas de transporte y distribución en Región Metropolitana, Valparaíso, O'Higgins, Maule y Biobío con tiempos de tránsito garantizados.",
};

export default function CoberturaPage() {
  return (
    <>
      <PageHeader
        badge="Red Logística Nacional"
        title="Cobertura en las principales regiones comerciales de Chile"
        description="Conectamos centros productivos, bodegas centrales y clientes finales a través de corredores troncales y hubs estratégicos."
        breadcrumbs={[{ label: "Cobertura" }]}
      />

      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            {/* Map Visual (Col 1-5) */}
            <div className="lg:col-span-5 sticky top-24">
              <div className="relative w-full aspect-[5/7] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-[#0B132B]">
                <Image
                  src="/images/icons/chile-map.svg"
                  alt="Mapa de cobertura regional de DASAI"
                  fill
                  className="object-contain p-3"
                />
              </div>

              <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00C29A] shrink-0" />
                <span>Rutas monitoreadas 24/7 con trazabilidad GPS continua.</span>
              </div>
            </div>

            {/* Regions List (Col 6-12) */}
            <div className="lg:col-span-7 space-y-8">
              {COMPANY_DATA.coverageRegions.map((region) => (
                <div
                  key={region.id}
                  id={region.id}
                  className="p-6 sm:p-8 rounded-3xl bg-[#FCF9FF] border border-[#EADBFC] shadow-sm space-y-5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#EADBFC]">
                    <div>
                      <Badge variant="accent" size="sm">
                        {region.code} • Corredor Activo
                      </Badge>
                      <h3 className="text-2xl font-black text-[#10002B] mt-1.5">
                        {region.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-xl border border-[#EADBFC] text-xs font-bold text-slate-800">
                      <Clock className="w-4 h-4 text-[#F72585]" />
                      <span>{region.transitTime}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-100 text-[#F72585] flex items-center justify-center shrink-0 font-bold">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Hub Operativo de Despacho:
                      </span>
                      <p className="text-sm font-bold text-slate-900">
                        {region.hub}
                      </p>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                      Comunas y Zonas con Cobertura:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {region.cities.map((city, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-1.5"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-[#00C29A]" />
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      Despachos diarios y frecuencias dedicadas
                    </span>
                    <Button
                      href={`/cotizar?region=${region.id}`}
                      variant="primary"
                      size="sm"
                      rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      Cotizar en {region.code}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTAFinal />
    </>
  );
}
