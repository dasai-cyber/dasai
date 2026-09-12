"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Clock,
  Truck,
  PackageCheck,
  Route,
  ShoppingBag,
  ShieldCheck,
  Search,
} from "lucide-react";
import { Container } from "./Container";
import { Button } from "../ui/Button";
import { COMPANY_DATA } from "@/lib/company";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    {
      label: "Servicios",
      href: "/servicios",
      hasDropdown: true,
    },
    { label: "Flota", href: "/flota" },
    { label: "Cobertura", href: "/cobertura" },
    { label: "Trabaja con Nosotros", href: "/trabaja-con-nosotros" },
    { label: "Seguimiento", href: "/seguimiento", isHighlighted: true },
    { label: "Contacto", href: "/contacto" },
  ];

  const serviceSublinks = [
    {
      title: "Última Milla",
      desc: "Entrega final B2B y B2C con comprobante digital",
      href: "/servicios/ultima-milla",
      icon: PackageCheck,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Distribución Programada",
      desc: "Rutas multipunto periódicas y locales comerciales",
      href: "/servicios/distribucion",
      icon: Route,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "Transporte de Carga",
      desc: "Camiones de alto volumen y transferencias troncales",
      href: "/servicios/transporte-carga",
      icon: Truck,
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "Repartos E-Commerce",
      desc: "Soluciones Same Day y Next Day para tiendas online",
      href: "/servicios/ecommerce",
      icon: ShoppingBag,
      color: "text-indigo-600 bg-indigo-50",
    },
  ];

  return (
    <>
      {/* Top Corporate Info Bar (Desktop) */}
      <div className="hidden lg:block bg-[#240046] text-slate-300 text-xs py-2 border-b border-white/10 select-none">
        <Container className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-[#F72585]" />
              <span>Central Comercial: <a href={`tel:${COMPANY_DATA.phoneRaw}`} className="hover:text-white font-medium transition-colors">{COMPANY_DATA.phone}</a></span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-3.5 h-3.5 text-[#B5179E]" />
              <span>{COMPANY_DATA.schedule}</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 text-pink-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#F72585]" />
              <span>Flota Monitoreada GPS 24/7</span>
            </div>
            <span className="text-slate-600">|</span>
            <Link
              href="/trabaja-con-nosotros"
              className="text-slate-300 hover:text-[#F72585] transition-colors"
            >
              Trabaja con Nosotros
            </Link>
            <span className="text-slate-600">|</span>
            <Link
              href="/blog"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Blog Logístico
            </Link>
          </div>
        </Container>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200"
            : "bg-white py-4 border-b border-slate-100"
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0" aria-label="DASAI Inicio">
            <div className="relative h-11 w-11 rounded-full overflow-hidden shadow-md border-2 border-[#F72585]/30 group-hover:scale-105 transition-transform shrink-0">
              <Image
                src="/images/logo/logo_dasai.png"
                alt="DASAI Logo"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight leading-none text-[#480CA8] group-hover:text-[#F72585] transition-colors">
                DASAI
              </span>
              <span className="text-[9px] font-extrabold tracking-wider text-[#F72585] uppercase mt-0.5">
                Logística &amp; Distribución
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition-colors",
                        isActive
                          ? "text-[#480CA8] bg-[#F3EEF9]"
                          : "text-slate-700 hover:text-[#480CA8] hover:bg-[#FCF9FF]"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          servicesDropdownOpen ? "rotate-180 text-[#F72585]" : "text-slate-400"
                        )}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 overflow-hidden">
                          <div className="p-2 border-b border-slate-100 mb-1">
                            <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                              Nuestras Soluciones
                            </span>
                          </div>
                          {serviceSublinks.map((sub) => {
                            const Icon = sub.icon;
                            return (
                              <Link
                                key={sub.title}
                                href={sub.href}
                                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FCF9FF] transition-colors group"
                              >
                                <div className={cn("p-2 rounded-lg shrink-0", sub.color)}>
                                  <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                  <div className="text-sm font-bold text-slate-800 group-hover:text-[#480CA8] transition-colors">
                                    {sub.title}
                                  </div>
                                  <p className="text-xs text-slate-500 line-clamp-1">
                                    {sub.desc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                          <div className="mt-1 pt-2 border-t border-slate-100 p-2 bg-[#FCF9FF] rounded-b-xl flex items-center justify-between">
                            <Link
                              href="/servicios"
                              className="text-xs font-bold text-[#F72585] hover:text-[#D81159] flex items-center gap-1"
                            >
                              Ver todos los servicios &rarr;
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-1.5",
                    isActive
                      ? "text-[#480CA8] bg-[#F3EEF9]"
                      : link.isHighlighted
                      ? "text-[#F72585] bg-[#F72585]/10 hover:bg-[#F72585]/15"
                      : "text-slate-700 hover:text-[#480CA8] hover:bg-[#FCF9FF]"
                  )}
                >
                  {link.isHighlighted && <Search className="w-3.5 h-3.5 text-[#F72585]" />}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              href="/cotizar"
              variant="accent"
              size="md"
              className="shadow-accent"
            >
              Cotiza ahora
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              href="/cotizar"
              variant="accent"
              size="sm"
              className="py-1.5 px-3 text-xs"
            >
              Cotizar
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#480CA8] hover:bg-[#F3EEF9] focus:outline-none"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#480CA8]" />
              ) : (
                <Menu className="w-6 h-6 text-[#480CA8]" />
              )}
            </button>
          </div>
        </Container>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-2xl p-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-1 pb-4 border-b border-slate-100">
              <Link
                href="/"
                className={cn(
                  "px-4 py-3 text-base font-bold rounded-xl transition-colors",
                  pathname === "/" ? "bg-[#480CA8] text-white" : "text-slate-800 hover:bg-[#FCF9FF]"
                )}
              >
                Inicio
              </Link>
              <Link
                href="/nosotros"
                className={cn(
                  "px-4 py-3 text-base font-bold rounded-xl transition-colors",
                  pathname === "/nosotros" ? "bg-[#480CA8] text-white" : "text-slate-800 hover:bg-[#FCF9FF]"
                )}
              >
                Nosotros
              </Link>

              {/* Mobile Services Accordion */}
              <div className="rounded-xl bg-[#FCF9FF] p-3 space-y-2 border border-[#EADBFC]">
                <div className="flex items-center justify-between font-bold text-slate-900 px-1">
                  <span>Servicios de Transporte</span>
                  <Link href="/servicios" className="text-xs text-[#F72585] font-bold">Ver catálogo</Link>
                </div>
                <div className="grid grid-cols-1 gap-1.5 pt-1">
                  {serviceSublinks.map((sub) => (
                    <Link
                      key={sub.title}
                      href={sub.href}
                      className="px-3 py-2 text-sm text-slate-700 hover:text-[#480CA8] bg-white rounded-lg border border-slate-100 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#F72585]"></span>
                      {sub.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/flota"
                className={cn(
                  "px-4 py-3 text-base font-bold rounded-xl transition-colors",
                  pathname === "/flota" ? "bg-[#480CA8] text-white" : "text-slate-800 hover:bg-[#FCF9FF]"
                )}
              >
                Nuestra Flota
              </Link>
              <Link
                href="/cobertura"
                className={cn(
                  "px-4 py-3 text-base font-bold rounded-xl transition-colors",
                  pathname === "/cobertura" ? "bg-[#480CA8] text-white" : "text-slate-800 hover:bg-[#FCF9FF]"
                )}
              >
                Cobertura Nacional
              </Link>
              <Link
                href="/seguimiento"
                className={cn(
                  "px-4 py-3 text-base font-bold rounded-xl transition-colors flex items-center justify-between",
                  pathname === "/seguimiento" ? "bg-[#F72585] text-white" : "bg-[#F72585]/10 text-[#F72585] hover:bg-[#F72585]/15"
                )}
              >
                <span>Rastrear Pedido</span>
                <Search className="w-4 h-4" />
              </Link>
              <Link
                href="/contacto"
                className={cn(
                  "px-4 py-3 text-base font-bold rounded-xl transition-colors",
                  pathname === "/contacto" ? "bg-[#480CA8] text-white" : "text-slate-800 hover:bg-[#FCF9FF]"
                )}
              >
                Contacto
              </Link>
              <Link
                href="/trabaja-con-nosotros"
                className="px-4 py-2.5 text-sm font-semibold text-[#7209B7] hover:bg-[#FCF9FF] rounded-xl"
              >
                Trabaja con Nosotros (Conductores)
              </Link>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-4 space-y-2">
              <Button href="/cotizar" variant="accent" size="lg" className="w-full">
                Solicitar Cotización
              </Button>
              <a
                href={`tel:${COMPANY_DATA.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 text-sm font-bold text-[#480CA8] bg-[#F3EEF9] rounded-xl w-full"
              >
                <Phone className="w-4 h-4 text-[#480CA8]" />
                Llamar a Central {COMPANY_DATA.phone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
