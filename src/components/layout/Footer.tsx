import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { COMPANY_DATA } from "@/lib/company";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
  ArrowUpRight,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#10002B] text-slate-300 pt-16 pb-8 border-t border-[#7209B7]/20 relative overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#480CA8] rounded-full blur-3xl opacity-25 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#F72585] rounded-full blur-3xl opacity-15 pointer-events-none" />

      <Container className="relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#240046]">
          {/* Col 1: Brand & Overview (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3.5 group shrink-0" aria-label="DASAI Inicio">
              <div className="relative h-13 w-13 rounded-full overflow-hidden shadow-lg border-2 border-[#F72585]/30 group-hover:scale-105 transition-transform bg-white shrink-0">
                <Image
                  src="/images/logo/logo_dasai.png"
                  alt="DASAI Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight leading-none text-white group-hover:text-[#F72585] transition-colors">
                  DASAI
                </span>
                <span className="text-[10px] font-bold tracking-wider text-[#F72585] uppercase mt-1">
                  Logística &amp; Distribución
                </span>
                <span className="text-[9px] text-purple-300 font-medium">
                  Calidad &amp; Servicio
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {COMPANY_DATA.description}
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-pink-300">
                <ShieldCheck className="w-4 h-4 text-[#F72585]" />
                <span>Flota Certificada y Asegurada</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-purple-300">
                <Truck className="w-4 h-4 text-[#7209B7]" />
                <span>Monitoreo 24/7</span>
              </div>
            </div>

            <div className="space-y-1 text-xs text-slate-400">
              <p className="font-semibold text-slate-200">{COMPANY_DATA.legalName}</p>
              <p>RUT: 77.892.410-K • Transporte y Logística Terrestre</p>
            </div>
          </div>

          {/* Col 2: Empresa */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Empresa
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/nosotros" className="hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/flota" className="hover:text-white transition-colors">
                  Nuestra Flota
                </Link>
              </li>
              <li>
                <Link href="/cobertura" className="hover:text-white transition-colors">
                  Cobertura Regional
                </Link>
              </li>
              <li>
                <Link href="/trabaja-con-nosotros" className="hover:text-white transition-colors flex items-center gap-1 text-[#F72585] font-semibold">
                  Trabaja con Nosotros
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog &amp; Noticias
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Servicios */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Servicios
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/servicios/ultima-milla" className="hover:text-white transition-colors">
                  Última Milla B2B / B2C
                </Link>
              </li>
              <li>
                <Link href="/servicios/distribucion" className="hover:text-white transition-colors">
                  Distribución Programada
                </Link>
              </li>
              <li>
                <Link href="/servicios/transporte-carga" className="hover:text-white transition-colors">
                  Transporte de Carga General
                </Link>
              </li>
              <li>
                <Link href="/servicios/ecommerce" className="hover:text-white transition-colors">
                  Repartos E-Commerce (Same Day)
                </Link>
              </li>
              <li>
                <Link href="/cotizar" className="hover:text-white transition-colors text-[#F72585] font-semibold flex items-center gap-1">
                  Cotizador en Línea
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F72585] shrink-0 mt-1" />
                <span className="text-xs leading-relaxed">{COMPANY_DATA.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#7209B7] shrink-0" />
                <a href={`tel:${COMPANY_DATA.phoneRaw}`} className="text-xs hover:text-white transition-colors font-medium">
                  {COMPANY_DATA.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-pink-400 shrink-0" />
                <a href={`mailto:${COMPANY_DATA.email}`} className="text-xs hover:text-white transition-colors font-medium">
                  {COMPANY_DATA.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400">{COMPANY_DATA.schedule}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_DATA.name} Logística y Distribución SpA. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/seguimiento" className="hover:text-slate-200 transition-colors">
              Seguimiento de Envíos
            </Link>
            <Link href="/contacto" className="hover:text-slate-200 transition-colors">
              Mesa de Ayuda
            </Link>
            <span className="text-slate-600">•</span>
            <span>Chile</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
