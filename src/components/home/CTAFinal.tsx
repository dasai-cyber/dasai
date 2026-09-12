import React from "react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { COMPANY_DATA } from "@/lib/company";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTAFinal() {
  const whatsappUrl = `https://wa.me/${COMPANY_DATA.whatsappRaw}?text=${encodeURIComponent(
    "Hola, quisiera conversar con un ejecutivo de DASAI para evaluar soluciones de transporte para mi empresa."
  )}`;

  return (
    <section className="relative py-20 sm:py-24 bg-gradient-to-r from-[#240046] via-[#3A0CA3] to-[#10002B] text-white overflow-hidden">
      {/* Background kinetic lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F72585] rounded-full blur-[160px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7209B7] rounded-full blur-[140px] opacity-25 pointer-events-none" />

      <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#F72585]/30 backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F72585]" />
          <span className="text-xs font-bold text-pink-100">
            Respuesta Rápida y Asesoría Logística Personalizada
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
          ¿Necesitas una solución logística para tu negocio?
        </h2>

        <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
          Hablemos sobre tu operación y encontremos la mejor alternativa para transportar, distribuir y entregar tus productos con total seguridad y puntualidad.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            href="/cotizar"
            variant="accent"
            size="xl"
            rightIcon={<ArrowRight className="w-5 h-5" />}
            className="w-full sm:w-auto shadow-accent text-base"
          >
            Quiero cotizar
          </Button>

          <Button
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="xl"
            leftIcon={<MessageCircle className="w-5 h-5" />}
            className="w-full sm:w-auto text-base"
          >
            Hablar por WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}
