import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { CTAFinal } from "@/components/home/CTAFinal";
import {
  Truck,
  ShieldCheck,
  MapPin,
  Layers,
  ArrowRight,
  Gauge,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Transporte de Carga General y Regional",
  description:
    "Transporte terrestre de carga pesada, mercadería paletizada y traslados industriales interregionales con camiones cerrados y custodia satelital 24/7 en Chile.",
};

export default function TransporteCargaPage() {
  const specs = [
    {
      title: "Camiones 3/4 (3.5 - 5 Toneladas)",
      capacity: "4.500 Kg | 22 m³ | 6 Pallets",
      usage: "Ideal para carga intermedia, mudanzas corporativas y abastecimiento regional.",
    },
    {
      title: "Camiones Pesados (8 - 12 Toneladas)",
      capacity: "10.500 Kg | 45 m³ | 14 Pallets",
      usage: "Para grandes lotes industriales, transferencias interbodega y carreteras troncales.",
    },
    {
      title: "Unidades con Rampa Hidráulica",
      capacity: "Rampa 1.500 Kg de levante",
      usage: "Para puntos de entrega sin andén de descarga o maquinaria pesada delicada.",
    },
    {
      title: "Monitoreo GPS Satelital y Geocercas",
      capacity: "Seguimiento 24/7 en carretera",
      usage: "Botón de pánico, sensores de apertura de puertas y protocolos de seguridad vial.",
    },
  ];

  return (
    <>
      <PageHeader
        badge="Alto Tonelaje"
        title="Transporte de Carga General y Regional"
        description="Capacidad robusta para trasladar grandes volúmenes, pallets y mercancías industriales entre centros de distribución y regiones con máxima seguridad."
        breadcrumbs={[
          { label: "Servicios", href: "/servicios" },
          { label: "Transporte de Carga" },
        ]}
      />

      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                Fuerza y Seguridad en Carretera
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2C59] tracking-tight leading-tight">
                Camiones preparados para el rigor del transporte industrial
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Nuestra división de carga pesada cuenta con unidades cerradas de aluminio y plataformas equipadas para proteger tu mercadería contra inclemencias climáticas, vibraciones y riesgos en carretera.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                Todos nuestros viajes cuentan con cobertura de seguro de carga, choferes profesionales certificados y monitoreo permanente desde nuestra Torre de Control.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button
                  href="/cotizar?service=transporte-carga"
                  variant="accent"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Cotizar Transporte de Carga
                </Button>
                <Button href="/cobertura" variant="outline" size="lg">
                  Ver Cobertura Regional
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-50">
                <Image
                  src="/images/fleet/camion-pesado.svg"
                  alt="Camión pesado DASAI"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>

          <SectionTitle
            badge="Capacidades Técnicas"
            title="Especificaciones de Carga"
            subtitle="Configuraciones adaptadas al tipo de producto, volumen y método de estiba requerido."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {specs.map((spec, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-slate-50 border border-slate-200 space-y-3"
              >
                <h4 className="text-lg font-bold text-[#0F2C59]">{spec.title}</h4>
                <div className="inline-block px-3 py-1 rounded-lg bg-blue-50 text-blue-900 font-bold text-xs border border-blue-100">
                  {spec.capacity}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{spec.usage}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTAFinal />
    </>
  );
}
