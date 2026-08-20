import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { CTAFinal } from "@/components/home/CTAFinal";
import {
  ShieldCheck,
  Target,
  Compass,
  CheckCircle2,
  Users,
  Award,
  Truck,
  TrendingUp,
  HeartHandshake,
  Clock,
  Sparkles,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce la historia, misión, valores y el equipo humano detrás de DASAI Logística y Distribución en Chile.",
};

export default function NosotrosPage() {
  const values = [
    {
      title: "Confianza",
      desc: "Construimos relaciones transparentes y sólidas con nuestros clientes basadas en la verdad y el cumplimiento irrestricto.",
      icon: HeartHandshake,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Responsabilidad",
      desc: "Asumimos la custodia de cada bulto y pedido como si fuera propio, cuidando cada detalle de la cadena de suministro.",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "Seguridad",
      desc: "Implementamos los más altos estándares preventivos, telemetría satelital 24/7 y protocolos estrictos de ruta.",
      icon: LockIconPlaceholder,
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "Puntualidad",
      desc: "Honramos los acuerdos de servicio (SLA) y ventanas horarias con indicadores de cumplimiento auditables.",
      icon: Clock,
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      title: "Compromiso",
      desc: "Nos involucramos a fondo con los objetivos de crecimiento y la experiencia de los clientes finales de cada empresa.",
      icon: Target,
      color: "text-rose-600 bg-rose-50",
    },
    {
      title: "Innovación",
      desc: "Incorporamos herramientas tecnológicas de ruteo dinámico, comprobantes digitales y trazabilidad continua.",
      icon: Sparkles,
      color: "text-cyan-600 bg-cyan-50",
    },
  ];

  function LockIconPlaceholder(props: any) {
    return <ShieldCheck {...props} />;
  }

  const leadershipTeam = [
    {
      name: "Dirección de Operaciones & Flota",
      role: "Gestión Operativa y Rutas",
      desc: "Supervisa la asignación de flota, mantenimiento preventivo y cumplimiento en ruta.",
      icon: Truck,
    },
    {
      name: "Mesa de Tráfico & Trazabilidad",
      role: "Torre de Control 24/7",
      desc: "Monitorea en tiempo real los despachos satelitales y coordina la resolución de incidencias.",
      icon: Zap,
    },
    {
      name: "Equipo de Conductores Profesionales",
      role: "Personal en Terreno",
      desc: "Conductores calificados con inducción permanente en servicio al cliente y seguridad vial.",
      icon: Users,
    },
    {
      name: "Atención a Clientes Corporativos",
      role: "Soporte Comercial y Post-Venta",
      desc: "Acompañamiento dedicado para integración de cuentas y reportabilidad periódica.",
      icon: Award,
    },
  ];

  return (
    <>
      <PageHeader
        badge="Nuestra Empresa"
        title="Una logística que se mueve contigo"
        description="En DASAI nacimos para elevar el estándar de transporte y distribución en Chile, combinando la solidez de una flota propia con tecnología ágil de trazabilidad."
        breadcrumbs={[{ label: "Nosotros" }]}
      />

      {/* History & Story Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                Nuestra Trayectoria
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2C59] tracking-tight leading-tight">
                Más de una década moviendo la carga de empresas que no pueden detenerse
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                DASAI se fundó con el objetivo de ofrecer a las empresas un servicio de transporte transparente, puntual y tecnológicamente conectado. Entendemos que cada paquete, bulto o pallet representa una promesa comercial ante un cliente final.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                Desde nuestras primeras camionetas de reparto urbano hasta nuestra actual flota integrada de camiones de alto tonelaje y furgones de última milla, hemos mantenido la misma obsesión: <strong>garantizar que tu mercadería llegue a tiempo y en perfecto estado</strong>.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4 border-t border-slate-100">
                <div className="bg-slate-50 p-4 rounded-2xl">
                  <span className="text-3xl font-black text-[#0F2C59]">+500K</span>
                  <p className="text-xs font-bold text-slate-700 mt-1">
                    Entregas completadas
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl">
                  <span className="text-3xl font-black text-[#00C29A]">99.2%</span>
                  <p className="text-xs font-bold text-slate-700 mt-1">
                    Efectividad en entregas (OTIF)
                  </p>
                </div>
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
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0F2C59] text-white flex items-center justify-center shadow-md">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0F2C59]">Nuestra Misión</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Proveer soluciones integrales de transporte, distribución y última milla que impulsen la competitividad y tranquilidad de nuestros clientes, mediante una flota moderna, tecnología de punta y un equipo humano con vocación de servicio.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FF6B00] text-white flex items-center justify-center shadow-md">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0F2C59]">Nuestra Visión</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Consolidarnos como el operador logístico y de transporte terrestre de referencia en Chile por nuestra excelencia operacional, innovación tecnológica, sustentabilidad de flota y cercanía con nuestros aliados comerciales.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Corporate Values Section */}
      <section className="py-20 sm:py-28 bg-white">
        <Container>
          <SectionTitle
            badge="Cultura y Principios"
            title="Nuestros Valores Corporativos"
            subtitle="Los pilares éticos y operacionales que guían cada decisión y cada despacho de nuestro equipo."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0F2C59]/30 transition-all duration-300 space-y-4"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${v.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0F2C59]">{v.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Team & Operations Structure */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <Container>
          <SectionTitle
            badge="Estructura Operativa"
            title="El equipo detrás de cada entrega"
            subtitle="Una organización orientada a resultados donde cada área trabaja coordinada para que tu carga no sufra demoras."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((team, idx) => {
              const Icon = team.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#0F2C59]/5 text-[#0F2C59] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-extrabold text-[#0F2C59]">
                    {team.name}
                  </h4>
                  <span className="text-xs font-bold text-[#FF6B00] block">
                    {team.role}
                  </span>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {team.desc}
                  </p>
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
