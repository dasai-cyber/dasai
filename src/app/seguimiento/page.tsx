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
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 rounded-2xl border border-slate-300 text-sm font-bold text-slate-900 uppercase placeholder:normal-case placeholder:font-normal focus:outline-none focus:border-[#0F2C59]"
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
                        ? "bg-[#0F2C59] text-white border-[#0F2C59]"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
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
                    <h2 className="text-2xl sm:text-3xl font-black text-[#0F2C59] mt-0.5 font-mono">
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

                {/* Key Dispatch Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-bold uppercase">
                      <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" />
                      Origen
                    </div>
                    <p className="text-sm font-extrabold text-slate-800 mt-1">
                      {activeOrder.origin}
                    </p>
                    <span className="text-[11px] text-slate-500">{activeOrder.senderCompany}</span>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-bold uppercase">
                      <MapPin className="w-3.5 h-3.5 text-[#00C29A]" />
                      Destino
                    </div>
                    <p className="text-sm font-extrabold text-slate-800 mt-1">
                      {activeOrder.destination}
                    </p>
                    <span className="text-[11px] text-slate-500">{activeOrder.recipientName}</span>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-bold uppercase">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      Despacho
                    </div>
                    <p className="text-sm font-extrabold text-slate-800 mt-1">
                      {activeOrder.createdAt}
                    </p>
                    <span className="text-[11px] text-slate-500">Última act: {activeOrder.lastUpdate}</span>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-bold uppercase">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      Entrega Estimada
                    </div>
                    <p className="text-sm font-extrabold text-[#FF6B00] mt-1">
                      {activeOrder.estimatedDelivery}
                    </p>
                    <span className="text-[11px] text-emerald-600 font-bold">● Ventana en curso</span>
                  </div>
                </div>

                {/* Assigned Vehicle & Driver Info */}
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#0F2C59] text-white flex items-center justify-center">
                      <Truck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-[#0F2C59] block">
                        Unidad Asignada: {activeOrder.vehicleAssigned}
                      </span>
                      <span className="text-slate-600">
                        {activeOrder.driverName || "Conductor Certificado DASAI"}
                      </span>
                    </div>
                  </div>
                  <span className="text-blue-900 font-bold flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-[#00C29A]" />
                    Monitoreo Satelital Activo
                  </span>
                </div>
              </div>

              {/* Timeline Stages View */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-lg font-black text-[#0F2C59] pb-4 border-b border-slate-100 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#FF6B00]" />
                  Línea de Tiempo Operativa
                </h3>

                <div className="space-y-8 relative pl-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
                  {activeOrder.stages.map((stage, idx) => (
                    <div key={stage.id} className="relative flex items-start gap-4">
                      {/* Timeline Dot Indicator */}
                      <span
                        className={`absolute -left-6 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          stage.completed
                            ? "bg-[#00C29A] border-[#00C29A] text-white"
                            : stage.current
                            ? "bg-[#FF6B00] border-[#FF6B00] text-white animate-pulse"
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
                                ? "text-[#FF6B00]"
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
