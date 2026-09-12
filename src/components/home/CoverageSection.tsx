"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { AnimatedSection } from "../ui/AnimatedSection";
import { COMPANY_DATA } from "@/lib/company";
import {
  MapPin,
  Clock,
  Building,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export function CoverageSection() {
  const [activeRegion, setActiveRegion] = useState<string>("rm");

  const currentRegion =
    COMPANY_DATA.coverageRegions.find((r) => r.id === activeRegion) ||
    COMPANY_DATA.coverageRegions[0];

  return (
    <AnimatedSection className="py-20 sm:py-28 bg-white" id="cobertura">
      <Container>
        <SectionTitle
          badge="Cobertura Nacional"
          title="Llegamos donde tu negocio necesita"
          subtitle="Amplía tu cobertura y llega a nuevos clientes con una operación logística robusta, preparada para escalar tu distribución en las principales regiones comerciales de Chile."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Stylized Vector Map of Chile (Col 1-5) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm aspect-[5/7] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-[#0B132B]">
              <Image
                src="/images/icons/chile-map.svg"
                alt="Mapa de cobertura logística DASAI en Chile"
                fill
                className="object-contain p-3"
              />
            </div>
          </div>

          {/* Right Column: Region Selector & Detailed Hub Cards (Col 6-12) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Region Filter Buttons */}
            <div className="flex flex-wrap gap-2 pb-2">
              {COMPANY_DATA.coverageRegions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                    activeRegion === region.id
                      ? "bg-[#480CA8] text-white shadow-md shadow-[#480CA8]/20"
                      : "bg-[#F3EEF9] text-[#480CA8] hover:bg-[#EADBFC]"
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5 text-[#F72585]" />
                  <span>{region.name}</span>
                </button>
              ))}
            </div>

            {/* Active Region Detail Card */}
            <div className="bg-[#FCF9FF] rounded-3xl p-6 sm:p-8 border border-[#EADBFC] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#EADBFC]">
                <div>
                  <Badge variant="accent" size="sm">
                    {currentRegion.code} • Zona Activa
                  </Badge>
                  <h3 className="text-2xl font-black text-[#10002B] mt-2">
                    {currentRegion.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-[#EADBFC] shadow-sm text-xs font-bold text-slate-800">
                  <Clock className="w-4 h-4 text-[#F72585]" />
                  <span>Tiempo de Tránsito: {currentRegion.transitTime}</span>
                </div>
              </div>

              {/* Hub Information */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-100 text-[#F72585] flex items-center justify-center shrink-0 font-bold">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Centro Operativo / Hub:
                  </span>
                  <p className="text-base font-bold text-slate-900">
                    {currentRegion.hub}
                  </p>
                </div>
              </div>

              {/* Covered Cities / Comunas */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Comunas y Ciudades con Cobertura Directa:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentRegion.cities.map((city, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-1.5 shadow-2xs"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#00C29A]" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Quote Button for this region */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  ¿Necesitas despachar hacia o desde esta región?
                </span>
                <Button
                  href={`/cotizar?region=${currentRegion.id}`}
                  variant="accent"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Cotizar ruta en {currentRegion.code}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
