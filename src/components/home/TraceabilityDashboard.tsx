"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "../layout/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { AnimatedSection } from "../ui/AnimatedSection";
import {
  Activity,
  Truck,
  CheckCircle2,
  AlertTriangle,
  Search,
  ArrowRight,
  Radio,
  MapPin,
} from "lucide-react";

export function TraceabilityDashboard() {
  const [trackingCode, setTrackingCode] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingCode.trim()) return;
    router.push(`/seguimiento?code=${encodeURIComponent(trackingCode.trim())}`);
  };

  const sampleCodes = ["DAS-8921", "DAS-4012", "DAS-1088"];

  return (
    <AnimatedSection className="py-20 sm:py-28 bg-[#0B132B] text-white relative overflow-hidden">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38BDF8_1.2px,transparent_1.2px)] [background-size:28px_28px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00C29A] rounded-full blur-[140px] opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#FF6B00] rounded-full blur-[160px] opacity-10 pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle
          isDark
          badge="Tecnología & Trazabilidad"
          title="Tu operación, siempre bajo control"
          subtitle="Conoce el estado de tus entregas y mantén visibilidad en tiempo real sobre cada etapa de tu cadena de distribución."
        />

        {/* Quick Tracking Search Bar */}
        <div className="max-w-2xl mx-auto mb-14">
          <form
            onSubmit={handleSearch}
            className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 shadow-2xl flex flex-col sm:flex-row items-center gap-2"
          >
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={trackingCode}
                onChange={(e) => setTrackingCode(e.target.value)}
                placeholder="Ingresa tu código de seguimiento (ej: DAS-8921)"
                className="w-full pl-12 pr-4 py-3.5 bg-transparent text-white placeholder:text-slate-400 focus:outline-none text-sm font-semibold uppercase"
              />
            </div>
            <Button
              type="submit"
              variant="accent"
              size="lg"
              className="w-full sm:w-auto shrink-0 shadow-accent"
            >
              Rastrear Pedido
            </Button>
          </form>

          {/* Quick Demo Chips */}
          <div className="flex items-center justify-center gap-2 mt-3 text-xs text-slate-400">
            <span>Códigos de prueba:</span>
            {sampleCodes.map((code) => (
              <button
                key={code}
                onClick={() => setTrackingCode(code)}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 font-mono transition-colors text-[11px]"
              >
                {code}
              </button>
            ))}
          </div>
        </div>

        {/* Simulated Live Ops Dashboard Container */}
        <div className="bg-[#111D40] rounded-3xl border border-white/15 p-6 sm:p-8 lg:p-10 shadow-2xl">
          {/* Dashboard Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#00C29A] animate-ping" />
              <span className="text-sm font-bold text-slate-200">
                Torre de Control DASAI • Telemetría Activa
              </span>
            </div>
            <Badge variant="secondary" size="sm">
              Sincronizado vía GPS Satelital
            </Badge>
          </div>

          {/* Key Metrics Grid (Pedidos Hoy, En Ruta, Entregados, Incidencia) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 my-8">
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">Pedidos Hoy</span>
                <Activity className="w-4 h-4 text-sky-400" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white">125</div>
              <span className="text-[11px] text-slate-400 mt-1 block">100% Asignados a flota</span>
            </div>

            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">En Ruta</span>
                <Truck className="w-4 h-4 text-[#FF8A3D]" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-[#FF8A3D]">43</div>
              <span className="text-[11px] text-[#00C29A] mt-1 block">● En ventana estimada</span>
            </div>

            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">Entregados</span>
                <CheckCircle2 className="w-4 h-4 text-[#00C29A]" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-[#00C29A]">78</div>
              <span className="text-[11px] text-slate-400 mt-1 block">Con comprobante digital</span>
            </div>

            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">Con Incidencia</span>
                <AlertTriangle className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-amber-400">4</div>
              <span className="text-[11px] text-amber-300 mt-1 block">En gestión operativa</span>
            </div>
          </div>

          {/* Simulated Active Dispatches Live Feed */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
            {/* Live Card 1 */}
            <div className="bg-[#0B132B]/80 rounded-2xl p-5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#38BDF8]">
                  DESPACHO #DAS-8921
                </span>
                <span className="text-xs font-bold text-[#FF8A3D] bg-[#FF6B00]/15 px-2.5 py-1 rounded-full border border-[#FF6B00]/30">
                  En Reparto
                </span>
              </div>
              <div className="text-sm font-bold text-white">
                Distribución Programada: Santiago &rarr; Viña del Mar
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00C29A]" />
                <span>Ubicación actual: Ruta 68 Km 92 (Placilla)</span>
              </div>
              {/* Mini progress bar */}
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-[#00C29A] to-[#38BDF8] h-full w-[80%]" />
              </div>
            </div>

            {/* Live Card 2 */}
            <div className="bg-[#0B132B]/80 rounded-2xl p-5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#38BDF8]">
                  DESPACHO #DAS-4012
                </span>
                <span className="text-xs font-bold text-[#00C29A] bg-[#00C29A]/15 px-2.5 py-1 rounded-full border border-[#00C29A]/30">
                  Entregado Conforme
                </span>
              </div>
              <div className="text-sm font-bold text-white">
                Última Milla E-Commerce: Quilicura &rarr; Providencia
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00C29A]" />
                <span>Recepción confirmada con firma y comprobante digital</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div className="bg-[#00C29A] h-full w-full" />
              </div>
            </div>
          </div>

          {/* Action to Full Tracking Page */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-300">
              Arquitectura preparada para integración directa con sistemas WMS, TMS y APIs de clientes.
            </div>
            <Button
              href="/seguimiento"
              variant="white"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Ir al portal de seguimiento
            </Button>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
