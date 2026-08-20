"use client";

import React from "react";
import Image from "next/image";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  MapPin,
  Clock,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center bg-gradient-to-b from-[#0F2C59] via-[#0D2447] to-[#081B38] text-white overflow-hidden py-16 lg:py-20">
      {/* Background Graphic Grid & Radial Lighting */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38BDF8_1.2px,transparent_1.2px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#00C29A] rounded-full blur-[140px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#FF6B00] rounded-full blur-[160px] opacity-15 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Commercial Copy & Primary CTAs (Col 1-7) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Top Kinetic Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6B00]"></span>
              </span>
              <span className="text-xs font-bold tracking-wide text-slate-200">
                Operaciones Logísticas de Alta Capacidad • Chile
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6.5xl font-black tracking-tight leading-[1.08] text-white">
              Movemos tu negocio.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#FF8A3D]">
                Entregamos confianza.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Soluciones integrales de transporte, distribución programada y última milla con flota propia, monitoreo satelital en tiempo real y cumplimiento garantizado.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                href="/cotizar"
                variant="accent"
                size="xl"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="shadow-accent text-base"
              >
                Cotiza tu servicio
              </Button>
              <Button
                href="/servicios"
                variant="outline"
                size="xl"
                className="border-white/30 text-white hover:bg-white hover:text-[#0F2C59] text-base"
              >
                Conoce nuestros servicios
              </Button>
            </div>

            {/* Quick Value Metrics Ribbon */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#00C29A] shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Flota Propia Asegurada</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#FF8A3D] shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Same Day &amp; Next Day</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">SLA 99.2% Cumplimiento</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#00C29A] shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Cobertura Regional</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Fleet & Tech Scene (Col 8-12) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Vector Illustration of Logistics Fleet */}
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0B1C38]">
                <Image
                  src="/images/hero/hero-logistics.svg"
                  alt="Flota de transporte y distribución DASAI"
                  fill
                  priority
                  className="object-contain p-2"
                />
              </div>

              {/* Floating Live Badge 1: Location & Route */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white text-slate-800 p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#00C29A] flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Trazabilidad en Vivo
                  </div>
                  <div className="text-sm font-extrabold text-slate-900">
                    45 Unidades en Ruta
                  </div>
                </div>
              </div>

              {/* Floating Live Badge 2: OTIF Badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#0F2C59] text-white p-3.5 rounded-2xl shadow-xl border border-white/20 items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00] text-white flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-300">
                    Efectividad Operativa
                  </div>
                  <div className="text-sm font-black text-[#00C29A]">
                    99.2% OTIF On-Time
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
