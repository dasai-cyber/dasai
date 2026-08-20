"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { Button } from "../ui/Button";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Error al enviar mensaje");
      }

      setIsSubmitted(true);
      reset();
    } catch (err: any) {
      setErrorMessage(
        "No se pudo enviar el mensaje en este momento. Por favor contáctanos por teléfono o WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 rounded-3xl bg-white border border-emerald-200 text-center space-y-4 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-[#0F2C59]">
          ¡Mensaje Enviado con Éxito!
        </h3>
        <p className="text-xs text-slate-600 max-w-sm mx-auto">
          Hemos recibido tu consulta y te responderemos a la brevedad posible.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="primary" size="sm">
          Enviar otro mensaje
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

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">
          Nombre Completo *
        </label>
        <input
          type="text"
          {...register("name")}
          placeholder="Juan Pérez"
          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
            errors.name ? "border-red-400 bg-red-50/50" : "border-slate-300 focus:border-[#0F2C59]"
          }`}
        />
        {errors.name && (
          <p className="text-[11px] text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Correo Electrónico *
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="juan@empresa.cl"
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
            Teléfono *
          </label>
          <input
            type="tel"
            {...register("phone")}
            placeholder="+56 9 1234 5678"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
              errors.phone ? "border-red-400 bg-red-50/50" : "border-slate-300 focus:border-[#0F2C59]"
            }`}
          />
          {errors.phone && (
            <p className="text-[11px] text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">
          Asunto *
        </label>
        <input
          type="text"
          {...register("subject")}
          placeholder="Consulta comercial / Alianza operativa"
          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
            errors.subject ? "border-red-400 bg-red-50/50" : "border-slate-300 focus:border-[#0F2C59]"
          }`}
        />
        {errors.subject && (
          <p className="text-[11px] text-red-500 mt-1">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">
          Mensaje *
        </label>
        <textarea
          rows={4}
          {...register("message")}
          placeholder="Escribe tu mensaje o consulta..."
          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
            errors.message ? "border-red-400 bg-red-50/50" : "border-slate-300 focus:border-[#0F2C59]"
          }`}
        />
        {errors.message && (
          <p className="text-[11px] text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        className="w-full"
        rightIcon={<Send className="w-4 h-4" />}
      >
        Enviar Mensaje
      </Button>
    </form>
  );
}
