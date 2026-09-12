import React, { Suspense } from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { COMPANY_DATA } from "@/lib/company";
import {
  Clock,
  ShieldCheck,
  Phone,
  MessageCircle,
  Truck,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Cotizar Servicio de Transporte y Distribución",
  description:
    "Solicita una cotización a la medida para transporte de carga, última milla, distribución programada o e-commerce con DASAI en Chile.",
};

function CotizarContent({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const service = typeof searchParams.service === "string" ? searchParams.service : "distribucion";
  const vehicle = typeof searchParams.vehicle === "string" ? searchParams.vehicle : "furgon";
  const region = typeof searchParams.region === "string" ? searchParams.region : "rm";

  const whatsappUrl = `https://wa.me/${COMPANY_DATA.whatsappRaw}?text=${encodeURIComponent(
    "Hola, quisiera solicitar una cotización directa con un ejecutivo de DASAI."
  )}`;

  return (
    <>
      <PageHeader
        badge="Cotizador en Línea"
        title="Cotiza tu operación de transporte y distribución"
        description="Completa los datos de tu requerimiento y nuestro equipo comercial te enviará una propuesta ajustada en menos de 2 horas hábiles."
        breadcrumbs={[{ label: "Cotizar" }]}
      />

      <section className="py-16 sm:py-24 bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Form (Col 1-7) */}
            <div className="lg:col-span-7">
              <QuoteForm
                initialService={service}
                initialVehicle={vehicle}
                initialRegion={region}
              />
            </div>

            {/* Right Column: Trust & Assistance (Col 8-12) */}
            <div className="lg:col-span-5 space-y-6">
              {/* SLA Guarantee Box */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-pink-50 text-[#F72585] flex items-center justify-center font-bold">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#480CA8]">
                      Compromiso de Respuesta 2 Horas
                    </h3>
                    <p className="text-xs text-slate-500">
                      Evaluación técnico-comercial sin demoras
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F72585] shrink-0 mt-0.5" />
                    <span>Propuesta tarifaria clara y sin cargos sorpresa.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F72585] shrink-0 mt-0.5" />
                    <span>Disponibilidad inmediata de flota propia y conductores.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F72585] shrink-0 mt-0.5" />
                    <span>Planes preferenciales para contratos recurrentes y e-commerce.</span>
                  </li>
                </ul>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="bg-gradient-to-r from-[#240046] to-[#480CA8] text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl border border-[#7209B7]/30">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F72585] block font-extrabold">
                  ¿Requieres asistencia inmediata?
                </span>
                <h4 className="text-xl font-extrabold text-white">
                  Habla directamente con un asesor de tráfico
                </h4>
                <p className="text-xs text-purple-100 leading-relaxed">
                  Si tu carga es urgente o requieres coordinar un retiro para hoy mismo, escríbenos por WhatsApp o comunícate a nuestra central telefónica.
                </p>

                <div className="pt-2 space-y-2">
                  <Button
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="md"
                    className="w-full"
                    leftIcon={<MessageCircle className="w-4 h-4" />}
                  >
                    Contactar por WhatsApp
                  </Button>
                  <a
                    href={`tel:${COMPANY_DATA.phoneRaw}`}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 text-xs font-bold transition-colors w-full"
                  >
                    <Phone className="w-4 h-4 text-[#F72585]" />
                    Central: {COMPANY_DATA.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default function CotizarPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> | { [key: string]: string | string[] | undefined };
}) {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-500">Cargando cotizador...</div>}>
      <CotizarWrapper searchParams={searchParams} />
    </Suspense>
  );
}

async function CotizarWrapper({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> | { [key: string]: string | string[] | undefined };
}) {
  const resolvedParams = await searchParams;
  return <CotizarContent searchParams={resolvedParams} />;
}
