"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getTrackingDetail, type TrackingDetail } from "@/lib/mock-tracking";
import {
  Search,
  Truck,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  User,
  ShieldCheck,
  Building,
  AlertCircle,
  Share2,
  Printer,
  ChevronRight,
} from "lucide-react";

function TrackingSearchComponent() {
  const searchParams = useSearchParams();
  const initialCode = searchParams.get("code") || "DAS-8921";

  const [inputCode, setInputCode] = useState(initialCode);
  const [activeOrder, setActiveOrder] = useState<TrackingDetail | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (initialCode) {
      handleLookup(initialCode);
    }
  }, [initialCode]);

  const handleLookup = (codeToSearch: string) => {
    if (!codeToSearch.trim()) return;
    setIsSearching(true);

    setTimeout(() => {
      const order = getTrackingDetail(codeToSearch);
      setActiveOrder(order);
      setIsSearching(false);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLookup(inputCode);
  };

  const sampleCodes = [
    { code: "DAS-8921", label: "En Reparto Final (Ruta 68)" },
    { code: "DAS-4012", label: "Entregado (E-Commerce Same Day)" },
    { code: "DAS-1088", label: "En Ruta 5 Sur (Carga Pesada)" },
  ];

  return (
    <>
      <PageHeader
        badge="Trazabilidad Satelital"
        title="¿Dónde está tu pedido?"
        description="Consulta en tiempo real la ubicación, estado operativo y estimación de arribo de tu envío con el código proporcionado en tu guía de despacho."
        breadcrumbs={[{ label: "Seguimiento" }]}
      />

      <section className="py-16 sm:py-20 bg-slate-50">
        <Container>
          {/* Tracking Search Input Card */}
          <div className="max-w-3xl mx-auto -mt-10 sm:-mt-12 mb-12">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-corporate-lg">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    placeholder="Ingresa tu número de seguimiento (ej: DAS-8921)"
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 rounded-2xl border border-slate-300 text-sm font-bold text-slate-900 uppercase placeholder:normal-case placeholder:font-normal focus:outline-none focus:border-[#7209B7] focus:ring-1 focus:ring-[#7209B7]"
                  />
                </div>
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  isLoading={isSearching}
                  className="shrink-0"
                >
                  Rastrear pedido
                </Button>
              </form>

              {/* Sample Code Presets */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-400 font-medium">Ejemplos activos:</span>
                {sampleCodes.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => {
                      setInputCode(item.code);
                      handleLookup(item.code);
                    }}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-colors ${
                      inputCode.toUpperCase() === item.code
                        ? "bg-[#480CA8] text-white border-[#480CA8]"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-[#FCF9FF]"
                    }`}
                  >
                    <span className="font-mono font-bold">{item.code}</span>
                    <span className="text-[10px] ml-1 opacity-80">({item.label})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tracking Result View */}
          {activeOrder && (
            <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
              {/* Order Status Header Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Orden de Despacho
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#480CA8] mt-0.5 font-mono">
                      #{activeOrder.trackingCode}
                    </h2>
                    <span className="text-xs text-slate-500 font-medium mt-1 block">
                      {activeOrder.serviceType}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`px-4 py-2 rounded-2xl text-xs font-extrabold border ${activeOrder.statusColor}`}
                    >
                      ● {activeOrder.statusLabel}
                    </span>
                  </div>
                </div>

                {/* Progress bar / route info omitted */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#FCF9FF] p-4 rounded-2xl border border-[#EADBFC]">
                    <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                      Origen / Despachador
                    </span>
                    <p className="text-sm font-bold text-slate-900 mt-1">
                      {activeOrder.origin}
                    </p>
                  </div>
                  <div className="bg-[#FCF9FF] p-4 rounded-2xl border border-[#EADBFC]">
                    <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                      Destino / Receptor
                    </span>
                    <p className="text-sm font-bold text-slate-900 mt-1">
                      {activeOrder.destination}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1 text-xs">
                    <span className="text-slate-400 font-semibold">Fecha de Despacho:</span>
                    <p className="font-bold text-slate-800">{activeOrder.createdAt}</p>
                  </div>
                  <div className="space-y-1 text-xs">
                    <span className="text-slate-400 font-semibold">Entrega Estimada:</span>
                    <p className="font-bold text-[#480CA8] text-sm">
                      {activeOrder.estimatedDelivery}
                    </p>
                    <span className="text-[11px] text-[#F72585] font-bold">● Ventana en curso</span>
                  </div>
                </div>

                {/* Assigned Vehicle & Driver Info */}
                <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#480CA8] text-white flex items-center justify-center shadow-sm">
                      <Truck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-[#480CA8] block">
                        Unidad Asignada: {activeOrder.vehicleAssigned}
                      </span>
                      <span className="text-slate-600">
                        {activeOrder.driverName || "Conductor Certificado DASAI"}
                      </span>
                    </div>
                  </div>
                  <span className="text-[#480CA8] font-bold flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-[#F72585]" />
                    Monitoreo Satelital Activo
                  </span>
                </div>
              </div>

              {/* Timeline Stages View */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-lg font-black text-[#480CA8] pb-4 border-b border-slate-100 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#F72585]" />
                  Línea de Tiempo Operativa
                </h3>

                <div className="space-y-8 relative pl-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#EADBFC]">
                  {activeOrder.stages.map((stage, idx) => (
                    <div key={stage.id} className="relative flex items-start gap-4">
                      {/* Timeline Dot Indicator */}
                      <span
                        className={`absolute -left-6 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          stage.completed
                            ? "bg-[#7209B7] border-[#7209B7] text-white"
                            : stage.current
                            ? "bg-[#F72585] border-[#F72585] text-white animate-pulse"
                            : "bg-white border-slate-300 text-transparent"
                        }`}
                      >
                        {stage.completed && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </span>

                      <div className="flex-1 space-y-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h4
                            className={`text-sm font-extrabold ${
                              stage.current
                                ? "text-[#F72585]"
                                : stage.completed
                                ? "text-slate-900"
                                : "text-slate-400"
                            }`}
                          >
                            {stage.title}
                          </h4>
                          <span className="text-xs text-slate-400 font-mono">
                            {stage.timestamp}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600">{stage.description}</p>
                        <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {stage.location}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}

export default function SeguimientoPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Cargando portal de seguimiento...</div>}>
      <TrackingSearchComponent />
    </Suspense>
  );
}
