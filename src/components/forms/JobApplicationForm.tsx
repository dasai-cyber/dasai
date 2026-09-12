"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { driverRegistrationSchema, type DriverRegistrationData } from "@/lib/validations";
import { Button } from "../ui/Button";
import { Send, CheckCircle2, AlertCircle, UserCheck } from "lucide-react";
import confetti from "canvas-confetti";

export function JobApplicationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DriverRegistrationData>({
    resolver: zodResolver(driverRegistrationSchema),
    defaultValues: {
      fullName: "",
      rut: "",
      address: "",
      commune: "",
      phone: "",
      secondaryPhone: "",
      email: "",
      education: "",
      licensePlate: "",
      vehicleModel: "",
      vehicleYear: "",
    },
  });

  const onSubmit = async (data: DriverRegistrationData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Error al enviar el formulario");
      }

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // Confetti fallback
      }

      setIsSubmitted(true);
      reset();
    } catch (err: any) {
      setErrorMessage(
        "No fue posible enviar los datos en este momento. Por favor revisa tu conexión o intenta más tarde."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-[#1a1f2c] border border-emerald-500/40 text-center space-y-4 shadow-2xl animate-in fade-in duration-300 max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-white">
          ¡Registro de Chofer Enviado!
        </h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
          Tus antecedentes han sido enviados exitosamente a <strong>contacto@dasai.cl</strong>. Nuestro equipo de operaciones te contactará a la brevedad.
        </p>
        <div className="pt-2">
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="primary"
            size="md"
            className="bg-[#F72585] hover:bg-[#D81159] text-white border-none font-bold shadow-lg"
          >
            Registrar otro chofer
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto bg-[#161a23] text-slate-100 rounded-2xl border border-slate-800/80 shadow-2xl overflow-hidden">
      {/* Header Modal style */}
      <div className="p-6 sm:p-8 border-b border-slate-800/80 flex items-start justify-between">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Agregar Chofer
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Completa los datos del nuevo chofer
            </p>
          </div>
        </div>
      </div>

      {/* Form Body */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 sm:p-8 space-y-5" noValidate>
        {errorMessage && (
          <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Fila 1: Nombre completo & RUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Nombre completo <span className="text-emerald-400">*</span>
            </label>
            <input
              type="text"
              {...register("fullName")}
              placeholder="Ej: Juan Pérez González"
              className={`w-full px-4 py-2.5 rounded-xl bg-[#1e2330] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                errors.fullName
                  ? "border-red-400/80 focus:border-red-400 focus:ring-red-400/20"
                  : "border-slate-700/80 focus:border-emerald-500 focus:ring-emerald-500/20"
              }`}
            />
            {errors.fullName && (
              <p className="text-[11px] text-red-400 mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              RUT <span className="text-emerald-400">*</span>
            </label>
            <input
              type="text"
              {...register("rut")}
              placeholder="Ej: 12.345.678-9"
              className={`w-full px-4 py-2.5 rounded-xl bg-[#1e2330] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                errors.rut
                  ? "border-red-400/80 focus:border-red-400 focus:ring-red-400/20"
                  : "border-slate-700/80 focus:border-emerald-500 focus:ring-emerald-500/20"
              }`}
            />
            {errors.rut && (
              <p className="text-[11px] text-red-400 mt-1">{errors.rut.message}</p>
            )}
          </div>
        </div>

        {/* Fila 2: Dirección & Comuna */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Dirección
            </label>
            <input
              type="text"
              {...register("address")}
              placeholder="Ej: Av. Providencia 1234"
              className="w-full px-4 py-2.5 rounded-xl bg-[#1e2330] border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Comuna
            </label>
            <input
              type="text"
              {...register("commune")}
              placeholder="Ej: Providencia"
              className="w-full px-4 py-2.5 rounded-xl bg-[#1e2330] border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all"
            />
          </div>
        </div>

        {/* Fila 3: Teléfono & WhatsApp / Secundario */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Teléfono <span className="text-emerald-400">*</span>
            </label>
            <input
              type="tel"
              {...register("phone")}
              placeholder="Ej: 56944771425"
              className={`w-full px-4 py-2.5 rounded-xl bg-[#1e2330] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                errors.phone
                  ? "border-red-400/80 focus:border-red-400 focus:ring-red-400/20"
                  : "border-slate-700/80 focus:border-emerald-500 focus:ring-emerald-500/20"
              }`}
            />
            {errors.phone && (
              <p className="text-[11px] text-red-400 mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              WhatsApp / Secundario
            </label>
            <input
              type="tel"
              {...register("secondaryPhone")}
              placeholder="Ej: +56 9 1122 3344"
              className={`w-full px-4 py-2.5 rounded-xl bg-[#1e2330] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                errors.secondaryPhone
                  ? "border-red-400/80 focus:border-red-400 focus:ring-red-400/20"
                  : "border-slate-700/80 focus:border-emerald-500 focus:ring-emerald-500/20"
              }`}
            />
            {errors.secondaryPhone && (
              <p className="text-[11px] text-red-400 mt-1">{errors.secondaryPhone.message}</p>
            )}
          </div>
        </div>

        {/* Fila 4: Correo electrónico & Estudios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Correo electrónico
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="nombre@correo.cl"
              className={`w-full px-4 py-2.5 rounded-xl bg-[#1e2330] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                errors.email
                  ? "border-red-400/80 focus:border-red-400 focus:ring-red-400/20"
                  : "border-slate-700/80 focus:border-emerald-500 focus:ring-emerald-500/20"
              }`}
            />
            {errors.email && (
              <p className="text-[11px] text-red-400 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Estudios
            </label>
            <input
              type="text"
              {...register("education")}
              placeholder="Ej: Media"
              className="w-full px-4 py-2.5 rounded-xl bg-[#1e2330] border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all"
            />
          </div>
        </div>

        {/* Fila 5: Patente, Modelo, Año */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-1">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Patente
            </label>
            <input
              type="text"
              {...register("licensePlate")}
              placeholder="Ej: AB-CD-12"
              className={`w-full px-4 py-2.5 rounded-xl bg-[#1e2330] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all uppercase ${
                errors.licensePlate
                  ? "border-red-400/80 focus:border-red-400 focus:ring-red-400/20"
                  : "border-slate-700/80 focus:border-emerald-500 focus:ring-emerald-500/20"
              }`}
            />
            {errors.licensePlate && (
              <p className="text-[11px] text-red-400 mt-1">{errors.licensePlate.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Modelo
            </label>
            <input
              type="text"
              {...register("vehicleModel")}
              placeholder="Ej: Kia Rio"
              className="w-full px-4 py-2.5 rounded-xl bg-[#1e2330] border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Año
            </label>
            <input
              type="text"
              {...register("vehicleYear")}
              placeholder="Ej: 2018"
              className={`w-full px-4 py-2.5 rounded-xl bg-[#1e2330] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                errors.vehicleYear
                  ? "border-red-400/80 focus:border-red-400 focus:ring-red-400/20"
                  : "border-slate-700/80 focus:border-emerald-500 focus:ring-emerald-500/20"
              }`}
            />
            {errors.vehicleYear && (
              <p className="text-[11px] text-red-400 mt-1">{errors.vehicleYear.message}</p>
            )}
          </div>
        </div>

        {/* Botón Submit */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="accent"
            size="lg"
            isLoading={isSubmitting}
            className="w-full bg-[#480CA8] hover:bg-[#560BAD] text-white font-bold text-base py-3.5 rounded-xl shadow-lg border border-purple-500/30 transition-all flex items-center justify-center gap-2"
          >
            <span>Enviar Registro de Chofer</span>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}
