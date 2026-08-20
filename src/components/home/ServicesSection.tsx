import React from "react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { AnimatedSection } from "../ui/AnimatedSection";
import { COMPANY_DATA } from "@/lib/company";
import {
  Truck,
  PackageCheck,
  Route,
  ShoppingBag,
  ArrowRight,
  Check,
} from "lucide-react";

export function ServicesSection() {
  const iconMap: Record<string, React.ElementType> = {
    TruckFast: PackageCheck,
    Route: Route,
    Container: Truck,
    ShoppingBag: ShoppingBag,
  };

  return (
    <AnimatedSection className="py-20 sm:py-28 bg-white" id="servicios">
      <Container>
        <SectionTitle
          badge="Nuestros Servicios"
          title="Soluciones para cada tipo de entrega"
          subtitle="Diseñamos esquemas logísticos a la medida para optimizar los tiempos de tránsito, reducir costos operacionales y asegurar la satisfacción de tus clientes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {COMPANY_DATA.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || PackageCheck;

            return (
              <div
                key={service.slug}
                className="group relative rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#0F2C59]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#0F2C59]/5 text-[#0F2C59] group-hover:bg-[#0F2C59] group-hover:text-white flex items-center justify-center transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant="accent" size="sm">
                      {service.badge}
                    </Badge>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0F2C59] transition-colors mb-3">
                    {service.shortTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Características Clave:
                    </span>
                    <ul className="space-y-1.5 pt-1">
                      {service.features.slice(0, 4).map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-slate-600"
                        >
                          <Check className="w-3.5 h-3.5 text-[#00C29A] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Button */}
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-[#0F2C59] group-hover:text-[#FF6B00] transition-colors py-2"
                  >
                    <span>Ver servicio completo</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Quote Prompt */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-[#0F2C59]">
              ¿Tienes una operación con requerimientos especiales?
            </h4>
            <p className="text-sm text-slate-600 mt-1">
              Personalizamos rutas dedicadas, horarios nocturnos y flotas con chofer exclusivo.
            </p>
          </div>
          <Button href="/cotizar" variant="primary" size="lg" className="shrink-0">
            Solicitar propuesta a la medida
          </Button>
        </div>
      </Container>
    </AnimatedSection>
  );
}
