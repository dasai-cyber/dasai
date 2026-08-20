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
  Truck,
  Weight,
  Layers,
  ShieldCheck,
  Radio,
  ArrowRight,
} from "lucide-react";

export function FleetSection() {
  const [selectedTab, setSelectedTab] = useState<string>("all");

  const categories = [
    { id: "all", label: "Toda la Flota" },
    { id: "camionetas", label: "Camionetas Urbanas" },
    { id: "furgones", label: "Furgones Utilitarios" },
    { id: "camiones", label: "Camiones 3/4 y Pesados" },
    { id: "especial", label: "Flota Especial (Frío / Rampa)" },
  ];

  const filteredFleet =
    selectedTab === "all"
      ? COMPANY_DATA.fleet
      : COMPANY_DATA.fleet.filter((item) => item.category === selectedTab);

  return (
    <AnimatedSection className="py-20 sm:py-28 bg-[#0F2C59] text-white relative overflow-hidden" id="flota">
      {/* Background visual graphics */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00C29A] rounded-full blur-[140px] opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF6B00] rounded-full blur-[160px] opacity-15 pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle
          isDark
          badge="Flota Propia Monitoreada"
          title="Una flota preparada para cada desafío"
          subtitle="Contamos con vehículos propios en óptimas condiciones mecánicas, equipados con telemetría satelital 24/7 y choferes profesionales altamente calificados."
        />

        {/* Fleet Categories Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedTab(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                selectedTab === cat.id
                  ? "bg-[#FF6B00] text-white shadow-accent"
                  : "bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Fleet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleet.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col justify-between text-slate-900 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Vehicle SVG Image Box */}
              <div className="relative aspect-[16/10] w-full bg-slate-100 p-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.title}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="primary" size="sm">
                    Flota DASAI
                  </Badge>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="text-xl font-extrabold text-[#0F2C59] group-hover:text-[#FF6B00] transition-colors">
                    {vehicle.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {vehicle.description}
                  </p>

                  {/* Technical Specs Pills */}
                  <div className="grid grid-cols-3 gap-2 my-4 pt-3 border-t border-slate-100">
                    <div className="bg-slate-50 p-2.5 rounded-xl text-center">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Capacidad
                      </div>
                      <div className="text-sm font-black text-[#0F2C59]">
                        {vehicle.capacityKg >= 1000
                          ? `${(vehicle.capacityKg / 1000).toFixed(1)} Ton`
                          : `${vehicle.capacityKg} Kg`}
                      </div>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-xl text-center">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Volumen
                      </div>
                      <div className="text-sm font-black text-[#0F2C59]">
                        {vehicle.volumeM3} m³
                      </div>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-xl text-center">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Pallets
                      </div>
                      <div className="text-sm font-black text-[#00C29A]">
                        {vehicle.palletCapacity ? `${vehicle.palletCapacity} Std` : "N/A"}
                      </div>
                    </div>
                  </div>

                  {/* Recommended Usage Tag */}
                  <div className="bg-blue-50/70 border border-blue-100 p-3 rounded-xl">
                    <span className="text-[11px] font-bold text-blue-900 block mb-0.5">
                      Uso Recomendado:
                    </span>
                    <span className="text-xs text-blue-800 leading-tight block">
                      {vehicle.recommendedUsage}
                    </span>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-2">
                  <Button
                    href={`/cotizar?vehicle=${vehicle.id}`}
                    variant="accent"
                    size="md"
                    className="w-full"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Cotizar con este vehículo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View full fleet button */}
        <div className="mt-12 text-center">
          <Button
            href="/flota"
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white hover:text-[#0F2C59]"
          >
            Ver especificaciones técnicas de toda la flota &rarr;
          </Button>
        </div>
      </Container>
    </AnimatedSection>
  );
}
