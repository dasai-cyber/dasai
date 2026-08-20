import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { CTAFinal } from "@/components/home/CTAFinal";
import {
  ShoppingBag,
  Zap,
  RotateCcw,
  Clock,
  ArrowRight,
  Code,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Repartos y Logística para E-Commerce",
  description:
    "Soluciones Same Day y Next Day para tiendas online, plataformas Shopify, WooCommerce y Vtex con tracking online y gestión de devoluciones en Chile.",
};

export default function EcommercePage() {
  const features = [
    {
      title: "Same Day Delivery (Mismo Día)",
      desc: "Entregas prioritarias el mismo día para compras realizadas antes del corte horario.",
      icon: Zap,
    },
    {
      title: "Next Day Garantizado",
      desc: "Despachos entregados al día hábil siguiente en toda la Región Metropolitana y Valparaíso.",
      icon: Clock,
    },
    {
      title: "Logística Inversa (Devoluciones)",
      desc: "Retiro y reingreso de cambios y devoluciones directamente en el domicilio del comprador.",
      icon: RotateCcw,
    },
    {
      title: "Integración API & Webhooks",
      desc: "Preparados para conexión con tiendas Shopify, WooCommerce, Vtex y ERPs.",
      icon: Code,
    },
  ];

  return (
    <>
      <PageHeader
        badge="E-Commerce & D2C"
        title="Repartos Especializados para E-Commerce"
        description="Acelera la conversión y fideliza a tus compradores digitales con entregas ultrarrápidas, trazabilidad en vivo y una experiencia de unboxing impecable."
        breadcrumbs={[
          { label: "Servicios", href: "/servicios" },
          { label: "E-Commerce" },
        ]}
      />

      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                Velocidad para Ventas Digitales
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2C59] tracking-tight leading-tight">
                El motor logístico que tu tienda online necesita para crecer
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                En el comercio electrónico actual, la velocidad de entrega define la satisfacción del cliente. En DASAI retiramos los pedidos directamente en tu bodega o centro de fulfillment y los entregamos con altas tasas de efectividad en el primer intento.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                Tus compradores reciben enlaces de seguimiento en tiempo real para conocer exactamente cuándo llegará su paquete.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button
                  href="/cotizar?service=ecommerce"
                  variant="accent"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Cotizar Plan E-Commerce
                </Button>
                <Button href="/seguimiento" variant="outline" size="lg">
                  Ver Portal de Trazabilidad
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-50">
                <Image
                  src="/images/fleet/camioneta.svg"
                  alt="Reparto e-commerce DASAI"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>

          <SectionTitle
            badge="Capacidades Digitales"
            title="Diseñado para la velocidad del E-Commerce"
            subtitle="Desde picos de alta demanda Cyber hasta despachos diarios regulares."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#0F2C59] text-white flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#0F2C59]">{f.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
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
