"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteFormSchema, type QuoteFormData } from "@/lib/validations";
import { Button } from "../ui/Button";
import { COMPANY_DATA } from "@/lib/company";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Truck,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Building,
} from "lucide-react";
import confetti from "canvas-confetti";

interface QuoteFormProps {
  initialService?: string;
  initialVehicle?: string;
  initialRegion?: string;
}

export function QuoteForm({
  initialService = "distribucion",
  initialVehicle = "furgon",
  initialRegion = "rm",
}: QuoteFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      phone: "",
      email: "",
      region: initialRegion,
      city: "",
      serviceType: initialService as any,
      vehicleType: initialVehicle as any,
      estimatedVolume: "",
      frequency: "diario",
      origin: "",
      destination: "",
      description: "",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Error al enviar la cotización");
      }

      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
      reset();
    } catch (err: any) {
      setErrorMessage(
        err.message || "Ocurrió un error al procesar tu solicitud. Por favor intenta nuevamente o contáctanos por WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-100 shadow-xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div>
          <h3 className="text-2xl font-extrabold text-[#0F2C59]">
            ¡Solicitud de Cotización Recibida!
          </h3>
          <p className="mt-3 text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
            Hemos recibido tus requerimientos logísticos. Un ejecutivo comercial de DASAI se pondrá en contacto contigo en menos de 2 horas hábiles.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500 max-w-md mx-auto">
          ¿Requieres atención inmediata? Puedes llamarnos directamente al{" "}
          <a href={`tel:${COMPANY_DATA.phoneRaw}`} className="font-bold text-[#0F2C59] underline">
            {COMPANY_DATA.phone}
          </a>
        </div>

        <Button
          onClick={() => setIsSubmitted(false)}
          variant="primary"
          size="md"
        >
          Enviar otra cotización
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-corporate-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Anti-spam honeypot */}
        <input
          type="text"
          name="website_url_honey"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {errorMessage && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Section 1: Contact Information */}
        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-wider text-[#0F2C59] pb-2 border-b border-slate-100 flex items-center gap-2">
            <Building className="w-4 h-4 text-[#FF6B00]" />
            1. Datos de Contacto y Empresa
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Nombre *
              </label>
              <input
                type="text"
                {...register("firstName")}
                placeholder="Juan"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                  errors.firstName
                    ? "border-red-400 bg-red-50/50"
                    : "border-slate-300 focus:border-[#0F2C59]"
                }`}
              />
              {errors.firstName && (
                <p className="text-[11px] text-red-500 mt-1">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Apellido *
              </label>
              <input
                type="text"
                {...register("lastName")}
                placeholder="Pérez"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                  errors.lastName
                    ? "border-red-400 bg-red-50/50"
                    : "border-slate-300 focus:border-[#0F2C59]"
                }`}
              />
              {errors.lastName && (
                <p className="text-[11px] text-red-500 mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Empresa (Opcional)
              </label>
              <input
                type="text"
                {...register("company")}
                placeholder="Nombre de tu empresa"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0F2C59]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Teléfono de Contacto *
              </label>
              <input
                type="tel"
                {...register("phone")}
                placeholder="+56 9 1234 5678"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                  errors.phone
                    ? "border-red-400 bg-red-50/50"
                    : "border-slate-300 focus:border-[#0F2C59]"
                }`}
              />
              {errors.phone && (
                <p className="text-[11px] text-red-500 mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Correo Electrónico *
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="contacto@empresa.cl"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                  errors.email
                    ? "border-red-400 bg-red-50/50"
                    : "border-slate-300 focus:border-[#0F2C59]"
                }`}
              />
              {errors.email && (
                <p className="text-[11px] text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Section 2: Service & Vehicle Selection */}
        <div className="space-y-4 pt-2">
          <h4 className="text-xs font-black uppercase tracking-wider text-[#0F2C59] pb-2 border-b border-slate-100 flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#FF6B00]" />
            2. Tipo de Servicio y Vehículo Requerido
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Tipo de Servicio *
              </label>
              <select
                {...register("serviceType")}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0F2C59] bg-white"
              >
                <option value="distribucion">Distribución Programada & Multipunto</option>
                <option value="ultima-milla">Última Milla B2B / B2C</option>
                <option value="transporte-carga">Transporte de Carga General / Pesada</option>
                <option value="ecommerce">Repartos E-Commerce (Same / Next Day)</option>
              </select>
              {errors.serviceType && (
                <p className="text-[11px] text-red-500 mt-1">{errors.serviceType.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Tipo de Vehículo Requerido *
              </label>
              <select
                {...register("vehicleType")}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0F2C59] bg-white"
              >
                <option value="furgon">Furgón Utilitario (1.6 Ton / 10.5 m³)</option>
                <option value="camioneta">Camioneta Urbana (850 Kg / 3.5 m³)</option>
                <option value="camion-34">Camión 3/4 (4.5 Ton / 22 m³)</option>
                <option value="camion-pesado">Camión Pesado (10.5 Ton / 45 m³)</option>
                <option value="especial">Flota Especial (Rampa Hidráulica / Frío)</option>
                <option value="por-definir">Por Definir (Asesoría DASAI)</option>
              </select>
              {errors.vehicleType && (
                <p className="text-[11px] text-red-500 mt-1">{errors.vehicleType.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Cantidad Estimada de Pedidos / Bultos
              </label>
              <input
                type="text"
                {...register("estimatedVolume")}
                placeholder="Ej: 50 entregas/día o 6 pallets"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0F2C59]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Frecuencia del Servicio *
              </label>
              <select
                {...register("frequency")}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0F2C59] bg-white"
              >
                <option value="diario">Ruta Diaria Recurrente</option>
                <option value="semanal">Semanal (Días fijos)</option>
                <option value="mensual">Mensual / Programado</option>
                <option value="unico">Servicio Único / Puntual</option>
                <option value="a-convenir">A convenir según volumen</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 3: Origin & Destination */}
        <div className="space-y-4 pt-2">
          <h4 className="text-xs font-black uppercase tracking-wider text-[#0F2C59] pb-2 border-b border-slate-100 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#FF6B00]" />
            3. Ruta, Origen y Destino
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Región Principal *
              </label>
              <select
                {...register("region")}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0F2C59] bg-white"
              >
                {COMPANY_DATA.coverageRegions.map((reg) => (
                  <option key={reg.id} value={reg.id}>
                    {reg.name} ({reg.code})
                  </option>
                ))}
                <option value="otras">Otras Regiones de Chile</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Ciudad / Comuna Base *
              </label>
              <input
                type="text"
                {...register("city")}
                placeholder="Ej: Santiago, Pudahuel, Viña del Mar"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                  errors.city
                    ? "border-red-400 bg-red-50/50"
                    : "border-slate-300 focus:border-[#0F2C59]"
                }`}
              />
              {errors.city && (
                <p className="text-[11px] text-red-500 mt-1">{errors.city.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Punto de Origen (Retiro) *
              </label>
              <input
                type="text"
                {...register("origin")}
                placeholder="Ej: CD Quilicura / Bodega Central"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                  errors.origin
                    ? "border-red-400 bg-red-50/50"
                    : "border-slate-300 focus:border-[#0F2C59]"
                }`}
              />
              {errors.origin && (
                <p className="text-[11px] text-red-500 mt-1">{errors.origin.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Punto de Destino (Entrega) *
              </label>
              <input
                type="text"
                {...register("destination")}
                placeholder="Ej: Locales Quinta Región / Clientes RM"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                  errors.destination
                    ? "border-red-400 bg-red-50/50"
                    : "border-slate-300 focus:border-[#0F2C59]"
                }`}
              />
              {errors.destination && (
                <p className="text-[11px] text-red-500 mt-1">{errors.destination.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Descripción del Requerimiento y Mercadería *
            </label>
            <textarea
              rows={3}
              {...register("description")}
              placeholder="Describe el tipo de carga, horarios preferidos, condiciones de estiba o cualquier detalle relevante..."
              className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                errors.description
                  ? "border-red-400 bg-red-50/50"
                  : "border-slate-300 focus:border-[#0F2C59]"
              }`}
            />
            {errors.description && (
              <p className="text-[11px] text-red-500 mt-1">{errors.description.message}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-slate-100">
          <Button
            type="submit"
            variant="accent"
            size="xl"
            isLoading={isSubmitting}
            className="w-full text-base font-black shadow-accent tracking-wide uppercase"
            rightIcon={<Send className="w-5 h-5" />}
          >
            Solicitar Cotización Inmediata
          </Button>

          <p className="text-[11px] text-slate-400 text-center mt-3">
            Tus datos están protegidos por nuestros protocolos de confidencialidad comercial.
          </p>
        </div>
      </form>
    </div>
  );
}
