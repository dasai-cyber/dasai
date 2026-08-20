"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobApplicationSchema, type JobApplicationData } from "@/lib/validations";
import { Button } from "../ui/Button";
import { Send, CheckCircle2, AlertCircle, Briefcase } from "lucide-react";

export function JobApplicationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<JobApplicationData>({
    resolver: zodResolver(jobApplicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: "conductor-a4",
      experienceYears: "2 a 5 años",
      licenseType: "A4 / A5",
      message: "",
    },
  });

  const onSubmit = async (data: JobApplicationData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Error al enviar postulación");
      }

      setIsSubmitted(true);
      reset();
    } catch (err: any) {
      setErrorMessage(
        "No fue posible registrar tu postulación en este momento. Por favor reintenta más tarde."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 rounded-3xl bg-white border border-emerald-200 text-center space-y-4 shadow-sm animate-in fade-in duration-200">
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-[#0F2C59]">
          ¡Postulación Recibida con Éxito!
        </h3>
        <p className="text-xs text-slate-600 max-w-sm mx-auto">
          Tus antecedentes han sido ingresados a nuestra base de talentos. Si tu perfil calza con las vacantes activas, el equipo de Selección te contactará.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="primary" size="sm">
          Enviar otra postulación
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {errorMessage && (
        <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs font-semibold flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Nombre *
          </label>
          <input
            type="text"
            {...register("firstName")}
            placeholder="Carlos"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
              errors.firstName ? "border-red-400 bg-red-50/50" : "border-slate-300 focus:border-[#0F2C59]"
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
            placeholder="González"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
              errors.lastName ? "border-red-400 bg-red-50/50" : "border-slate-300 focus:border-[#0F2C59]"
            }`}
          />
          {errors.lastName && (
            <p className="text-[11px] text-red-500 mt-1">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Correo Electrónico *
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="carlos@email.com"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
              errors.email ? "border-red-400 bg-red-50/50" : "border-slate-300 focus:border-[#0F2C59]"
            }`}
          />
          {errors.email && (
            <p className="text-[11px] text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Teléfono Móvil *
          </label>
          <input
            type="tel"
            {...register("phone")}
            placeholder="+56 9 8765 4321"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
              errors.phone ? "border-red-400 bg-red-50/50" : "border-slate-300 focus:border-[#0F2C59]"
            }`}
          />
          {errors.phone && (
            <p className="text-[11px] text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Cargo de Interés *
          </label>
          <select
            {...register("position")}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0F2C59] bg-white"
          >
            <option value="conductor-a4">Conductor Camión (Licencia A4)</option>
            <option value="conductor-a5">Conductor Camión Articulado (A5)</option>
            <option value="conductor-a2">Conductor Reparto / Furgón (A2/B)</option>
            <option value="peoneta-auxiliar">Auxiliar de Carga / Peoneta</option>
            <option value="operador-bodega">Operador de Bodega / Logística</option>
            <option value="ejecutivo-logistico">Ejecutivo de Tráfico & Monitoreo</option>
            <option value="otro">Otro Perfil</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Tipo de Licencia de Conducir
          </label>
          <input
            type="text"
            {...register("licenseType")}
            placeholder="Ej: A4 vigente sin anotaciones"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0F2C59]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Años de Experiencia *
          </label>
          <select
            {...register("experienceYears")}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0F2C59] bg-white"
          >
            <option value="Menos de 1 año">Menos de 1 año</option>
            <option value="1 a 2 años">1 a 2 años</option>
            <option value="2 a 5 años">2 a 5 años</option>
            <option value="Más de 5 años">Más de 5 años</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">
          Comentarios o Resumen Laboral
        </label>
        <textarea
          rows={3}
          {...register("message")}
          placeholder="Cuéntanos brevemente sobre tu experiencia en rutas, tipos de camiones que has manejado..."
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0F2C59]"
        />
      </div>

      <Button
        type="submit"
        variant="accent"
        size="lg"
        isLoading={isSubmitting}
        className="w-full"
        rightIcon={<Send className="w-4 h-4" />}
      >
        Enviar Postulación
      </Button>
    </form>
  );
}
