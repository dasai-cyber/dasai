import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { COMPANY_DATA } from "@/lib/company";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Building,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contacto & Sucursales",
  description:
    "Comunícate con la central comercial y operativa de DASAI Logística en Pudahuel, Santiago de Chile.",
};

export default function ContactoPage() {
  const whatsappUrl = `https://wa.me/${COMPANY_DATA.whatsappRaw}?text=${encodeURIComponent(
    "Hola, quisiera comunicarme con la mesa de atención de DASAI."
  )}`;

  return (
    <>
      <PageHeader
        badge="Mesa de Ayuda & Comercial"
        title="Estamos para responder a tus requerimientos"
        description="Ponte en contacto con nuestro equipo comercial, operaciones o visítanos en nuestro Centro de Distribución y Patio de Maniobras en Pudahuel."
        breadcrumbs={[{ label: "Contacto" }]}
      />

      <section className="py-16 sm:py-24 bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Info Cards (Col 1-5) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-xl font-extrabold text-[#480CA8] pb-4 border-b border-[#EADBFC]">
                  Canales de Atención Directa
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-50 text-[#F72585] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase text-slate-400">
                        Casa Matriz &amp; CD Central
                      </span>
                      <p className="text-sm font-bold text-slate-800 mt-0.5">
                        {COMPANY_DATA.address.full}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#7209B7] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase text-slate-400">
                        Central Telefónica
                      </span>
                      <p className="text-sm font-bold text-slate-800 mt-0.5">
                        <a href={`tel:${COMPANY_DATA.phoneRaw}`} className="hover:text-[#480CA8]">
                          {COMPANY_DATA.phone}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-50 text-[#F72585] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase text-slate-400">
                        Correo Corporativo
                      </span>
                      <p className="text-sm font-bold text-slate-800 mt-0.5">
                        <a href={`mailto:${COMPANY_DATA.email}`} className="hover:text-[#480CA8]">
                          {COMPANY_DATA.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F3EEF9] text-[#7209B7] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase text-slate-400">
                        Horario de Atención
                      </span>
                      <p className="text-xs font-bold text-slate-800 mt-0.5">
                        {COMPANY_DATA.schedule}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="md"
                    className="w-full"
                    leftIcon={<MessageCircle className="w-4 h-4" />}
                  >
                    Chatear por WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form & Map (Col 6-12) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-xl font-extrabold text-[#480CA8]">
                  Envíanos un mensaje
                </h3>
                <ContactForm />
              </div>

              {/* Map Container */}
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-white p-2">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-200">
                  <iframe
                    title="Ubicación DASAI Pudahuel"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53288.75620959441!2d-70.78363748281249!3d-33.435790099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c3e5668e1467%3A0xc3bca64b4c7318aa!2sPudahuel%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1700000000000!5m2!1ses-419!2scl"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-3 text-center text-xs text-slate-500 font-medium">
                  Sector Industrial Pudahuel • Rápida conectividad con Ruta 68, Vespucio y Costanera Norte
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
