"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  X,
  Send,
  CheckCheck,
  RotateCcw,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { COMPANY_DATA } from "@/lib/company";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  options?: string[];
  inputType?: "text" | "phone" | "email" | "none";
  inputPlaceholder?: string;
}

interface FormAnswers {
  experienceTransport?: string; // 1
  yearsExperience?: string; // 2
  licenseType?: string; // 3
  drivingExperienceCargoPassengers?: string; // 4
  vehicleType?: string; // 5
  vehicleOwnership?: string; // 6
  vehicleYear?: string; // 7
  vehicleDocValid?: string; // 8
  communeCity?: string; // 9
  shiftAvailability?: string; // 10
  startAvailability?: string; // 11
  fullName?: string; // 12
  phone?: string; // 13
  email?: string; // 14
  additionalNotes?: string; // 15
}

interface WhatsAppChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WhatsAppChatbotModal({ isOpen, onClose }: WhatsAppChatbotModalProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [answers, setAnswers] = useState<FormAnswers>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString("es-CL", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Initial welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages([
          {
            id: "msg-welcome-1",
            sender: "bot",
            text: "¡Hola! 👋 Bienvenido/a al asistente virtual de DASAI Logística.",
            timestamp: getCurrentTime(),
          },
          {
            id: "msg-welcome-2",
            sender: "bot",
            text: "¿Cómo te podemos ayudar hoy?",
            timestamp: getCurrentTime(),
            options: [
              "🚚 Postular como Chofer / Conductor",
              "📦 Cotizar Servicio de Transporte",
              "💬 Hablar con un Ejecutivo en WhatsApp",
            ],
          },
        ]);
        setCurrentStep(0);
      }, 500);
    }
  }, [isOpen]);

  const botReply = (
    text: string,
    options?: string[],
    inputType: "text" | "phone" | "email" | "none" = "none",
    inputPlaceholder?: string,
    delay = 600
  ) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}-${Math.random()}`,
          sender: "bot",
          text,
          timestamp: getCurrentTime(),
          options,
          inputType,
          inputPlaceholder,
        },
      ]);
    }, delay);
  };

  const handleUserSelection = (optionText: string) => {
    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        sender: "user",
        text: optionText,
        timestamp: getCurrentTime(),
      },
    ]);

    processStepFlow(optionText);
  };

  const handleTextInputSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    const text = inputText.trim();
    setInputText("");

    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        sender: "user",
        text,
        timestamp: getCurrentTime(),
      },
    ]);

    processStepFlow(text);
  };

  const processStepFlow = (value: string) => {
    switch (currentStep) {
      case 0: // Welcome menu
        if (value.includes("Postular como Chofer")) {
          setCurrentStep(1);
          botReply(
            "Excelente. Vamos a realizar un breve cuestionario para conocer tu perfil y vehículo.\n\n1. ¿Tienes experiencia en el rubro del transporte?",
            ["Sí", "No"]
          );
        } else if (value.includes("Cotizar")) {
          botReply(
            "Puedes cotizar en segundos tu servicio en nuestra plataforma online o escribirnos por WhatsApp.",
            ["Cotizar en la Web", "Abrir WhatsApp Directo"]
          );
          setCurrentStep(99);
        } else {
          // WhatsApp direct
          const directUrl = `https://wa.me/${COMPANY_DATA.whatsappRaw}?text=${encodeURIComponent(
            "Hola DASAI, me gustaría recibir atención de un ejecutivo comercial."
          )}`;
          window.open(directUrl, "_blank");
          botReply(
            "Te hemos abierto una conversación directa con nuestro equipo de atención. ¡Estamos para ayudarte!",
            ["Reiniciar conversación"]
          );
          setCurrentStep(100);
        }
        break;

      case 1: // 1. ¿Tienes experiencia en el rubro del transporte?
        setAnswers((prev) => ({ ...prev, experienceTransport: value }));
        setCurrentStep(2);
        botReply("2. ¿Cuántos años de experiencia tienes?", [
          "Sin experiencia",
          "Menos de 1 año",
          "1 a 3 años",
          "Más de 3 años",
        ]);
        break;

      case 2: // 2. ¿Cuántos años de experiencia tienes?
        setAnswers((prev) => ({ ...prev, yearsExperience: value }));
        setCurrentStep(3);
        botReply("3. Si postulas como conductor/a, ¿qué licencia de conducir tienes?", [
          "Clase B",
          "Clase A2",
          "Clase A4",
          "Clase A5",
          "Otra",
          "No tengo licencia",
        ]);
        break;

      case 3: // 3. ¿Qué licencia de conducir tienes?
        setAnswers((prev) => ({ ...prev, licenseType: value }));
        setCurrentStep(4);
        botReply(
          "4. ¿Tienes experiencia conduciendo vehículos de transporte de carga o pasajeros?",
          ["Sí", "No"]
        );
        break;

      case 4: // 4. ¿Tienes experiencia conduciendo vehículos de transporte de carga o pasajeros?
        setAnswers((prev) => ({ ...prev, drivingExperienceCargoPassengers: value }));
        setCurrentStep(5);
        botReply("5. ¿Qué tipo de vehículo de transporte tienes? 🚚", [
          "Camioneta",
          "Furgón",
          "Camión 3/4",
          "Camión rígido",
          "Camión con carro/rampla",
          "Minibús",
          "Bus",
          "Otro",
          "No tengo vehículo propio",
        ]);
        break;

      case 5: // 5. ¿Qué tipo de vehículo de transporte tienes?
        setAnswers((prev) => ({ ...prev, vehicleType: value }));
        if (value === "No tengo vehículo propio") {
          setAnswers((prev) => ({
            ...prev,
            vehicleOwnership: "No aplica",
            vehicleYear: "N/A",
            vehicleDocValid: "No aplica",
          }));
          setCurrentStep(9);
          botReply("9. ¿En qué comuna o ciudad resides?", undefined, "text", "Ej: Pudahuel, Santiago, Rancagua...");
        } else {
          setCurrentStep(6);
          botReply("6. ¿El vehículo es propio o de un tercero?", [
            "Propio",
            "De un tercero",
            "De una empresa",
            "Otro",
          ]);
        }
        break;

      case 6: // 6. ¿El vehículo es propio o de un tercero?
        setAnswers((prev) => ({ ...prev, vehicleOwnership: value }));
        setCurrentStep(7);
        botReply("7. ¿Qué año es tu vehículo?", undefined, "text", "Ej: 2022");
        break;

      case 7: // 7. ¿Qué año es tu vehículo?
        setAnswers((prev) => ({ ...prev, vehicleYear: value }));
        setCurrentStep(8);
        botReply("8. ¿Tienes la documentación del vehículo vigente?", [
          "Sí",
          "No",
          "No aplica",
        ]);
        break;

      case 8: // 8. ¿Tienes la documentación del vehículo vigente?
        setAnswers((prev) => ({ ...prev, vehicleDocValid: value }));
        setCurrentStep(9);
        botReply("9. ¿En qué comuna o ciudad resides?", undefined, "text", "Ej: Pudahuel, Maipú, San Bernardo, etc.");
        break;

      case 9: // 9. ¿En qué comuna o ciudad resides?
        setAnswers((prev) => ({ ...prev, communeCity: value }));
        setCurrentStep(10);
        botReply("10. ¿Tienes disponibilidad para trabajar en turnos?", [
          "Sí",
          "No",
          "Depende del turno",
        ]);
        break;

      case 10: // 10. ¿Tienes disponibilidad para trabajar en turnos?
        setAnswers((prev) => ({ ...prev, shiftAvailability: value }));
        setCurrentStep(11);
        botReply("11. ¿Tienes disponibilidad para comenzar a trabajar?", [
          "Inmediatamente",
          "Dentro de una semana",
          "Dentro de un mes",
          "Otra fecha",
        ]);
        break;

      case 11: // 11. ¿Tienes disponibilidad para comenzar a trabajar?
        setAnswers((prev) => ({ ...prev, startAvailability: value }));
        setCurrentStep(12);
        botReply("12. ¿Cuál es tu nombre completo?", undefined, "text", "Ej: Juan Carlos Morales");
        break;

      case 12: // 12. ¿Cuál es tu nombre completo?
        setAnswers((prev) => ({ ...prev, fullName: value }));
        setCurrentStep(13);
        botReply("13. ¿Cuál es tu número de teléfono?", undefined, "phone", "Ej: +56 9 8765 4321");
        break;

      case 13: // 13. ¿Cuál es tu número de teléfono?
        setAnswers((prev) => ({ ...prev, phone: value }));
        setCurrentStep(14);
        botReply("14. ¿Cuál es tu correo electrónico?", undefined, "email", "Ej: tu.nombre@gmail.com");
        break;

      case 14: // 14. ¿Cuál es tu correo electrónico?
        setAnswers((prev) => ({ ...prev, email: value }));
        setCurrentStep(15);
        botReply(
          "15. ¿Hay algo más que quieras contarnos sobre tu experiencia o disponibilidad?",
          ["Omitir / Ninguno"],
          "text",
          "Escribe aquí cualquier detalle adicional..."
        );
        break;

      case 15: // 15. Comentarios adicionales
        setAnswers((prev) => ({
          ...prev,
          additionalNotes: value === "Omitir / Ninguno" ? "" : value,
        }));
        setCurrentStep(16);
        botReply(
          "📋 ¡Hemos completado todas las preguntas!\n\n¿Deseas que nuestro equipo de operaciones y RRHH de DASAI te contacte?",
          ["✅ Sí, contáctenme", "❌ No por ahora"]
        );
        break;

      case 16: // Contact Decision
        if (value.includes("Sí") || value.includes("contáctenme")) {
          submitLead(true);
        } else {
          submitLead(false);
        }
        break;

      case 99: // Alternate flows
        if (value === "Cotizar en la Web") {
          window.location.href = "/cotizar";
        } else {
          window.open(`https://wa.me/${COMPANY_DATA.whatsappRaw}`, "_blank");
        }
        break;

      case 100: // Reset
        resetConversation();
        break;

      default:
        botReply("Gracias por tu respuesta. Si deseas volver a comenzar, pulsa reiniciar.", ["Reiniciar"]);
        break;
    }
  };

  const submitLead = async (wantsContact: boolean) => {
    setIsSubmitting(true);
    setIsTyping(true);

    const payload = {
      ...answers,
      fullName: answers.fullName || "Postulante Bot",
      phone: answers.phone || "No especificado",
      email: answers.email || "no-email@dasai.cl",
      requestedContact: wantsContact,
    };

    try {
      if (wantsContact) {
        await fetch("/api/bot-contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      setIsTyping(false);
      setIsSubmitting(false);
      setIsFinished(true);

      if (wantsContact) {
        botReply(
          `🎉 ¡Excelente, ${payload.fullName}! Tus datos y respuestas fueron enviados con éxito a nuestro equipo en contacto@dasai.cl.\n\nUn ejecutivo de operaciones de DASAI te contactará a la brevedad al teléfono ${payload.phone}.`,
          ["💬 Abrir conversación en WhatsApp ahora", "Reiniciar asistente"]
        );
      } else {
        botReply(
          "Entendido. Tus respuestas han quedado registradas en nuestro sistema. Si en el futuro deseas que te contactemos, puedes escribirnos cuando gustes.\n\n¡Gracias por tu interés en DASAI!",
          ["Reiniciar asistente"]
        );
      }
      setCurrentStep(100);
    } catch (err) {
      console.error(err);
      setIsTyping(false);
      setIsSubmitting(false);
      botReply(
        "Hemos recibido tus datos. En caso de requerir asistencia urgente, puedes escribirnos directamente a WhatsApp.",
        ["💬 Abrir WhatsApp Directo", "Reiniciar asistente"]
      );
      setCurrentStep(100);
    }
  };

  const resetConversation = () => {
    setMessages([]);
    setCurrentStep(0);
    setAnswers({});
    setIsFinished(false);
    setInputText("");
    setTimeout(() => {
      setCurrentStep(0);
      botReply(
        "¡Hola de nuevo! 👋 ¿En qué te podemos ayudar?",
        [
          "🚚 Postular como Chofer / Conductor",
          "📦 Cotizar Servicio de Transporte",
          "💬 Hablar con un Ejecutivo en WhatsApp",
        ]
      );
    }, 300);
  };

  const lastMessage = messages[messages.length - 1];
  const hasOptions = lastMessage && lastMessage.sender === "bot" && lastMessage.options && lastMessage.options.length > 0;
  const isInputActive = lastMessage && lastMessage.sender === "bot" && lastMessage.inputType && lastMessage.inputType !== "none";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-end justify-end p-0 sm:p-6 pointer-events-none">
      {/* Background Overlay for mobile */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs sm:hidden pointer-events-auto transition-opacity"
        onClick={onClose}
      />

      {/* Main Chatbot Window */}
      <div className="pointer-events-auto w-full sm:w-[410px] h-[100dvh] sm:h-[620px] max-h-[100dvh] sm:max-h-[85vh] bg-[#ECE5DD] sm:rounded-3xl shadow-2xl border border-slate-300/60 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-300 z-50">
        
        {/* WhatsApp Header */}
        <div className="bg-[#075E54] text-white px-4 py-3.5 flex items-center justify-between shadow-md shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden border border-white/20">
                <Image
                  src="/images/logo/logo_dasai.png"
                  alt="DASAI Bot"
                  width={36}
                  height={36}
                  className="object-contain p-0.5"
                />
              </div>
              {/* Online Green Indicator */}
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#075E54] rounded-full" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold leading-tight">DASAI Asistente Virtual</h3>
                <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
              </div>
              <p className="text-[11px] text-emerald-100 flex items-center gap-1 font-medium">
                <span>En línea</span>
                <span>•</span>
                <span>Respuesta automática</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={resetConversation}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              title="Reiniciar chat"
              aria-label="Reiniciar"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              title="Cerrar chat"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat Messages Container */}
        <div
          className="flex-1 overflow-y-auto p-4 space-y-3"
          style={{
            backgroundImage: "radial-gradient(#00000008 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        >
          {/* Encryption Note */}
          <div className="text-center my-1">
            <span className="inline-block bg-[#FFF9C4]/90 text-[#5D4037] text-[10px] px-3 py-1 rounded-lg font-medium shadow-2xs">
              🔒 Conversación oficial y segura de DASAI Logística
            </span>
          </div>

          {messages.map((msg) => {
            const isBot = msg.sender === "bot";
            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isBot ? "items-start" : "items-end"} animate-in fade-in duration-200`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-2xs text-xs sm:text-[13px] leading-relaxed relative ${
                    isBot
                      ? "bg-white text-slate-800 rounded-tl-xs border border-slate-100"
                      : "bg-[#DCF8C6] text-slate-900 rounded-tr-xs"
                  }`}
                >
                  <p className="whitespace-pre-line font-medium">{msg.text}</p>

                  <div className="flex items-center justify-end gap-1 mt-1 -mb-1 text-[10px] text-slate-400">
                    <span>{msg.timestamp}</span>
                    {!isBot && <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1]" />}
                  </div>
                </div>

                {/* Option Chips for this message */}
                {msg.options && msg.options.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleUserSelection(opt)}
                        disabled={isTyping || isSubmitting}
                        className="bg-white hover:bg-[#E7F8E8] active:bg-[#C8E6C9] text-[#075E54] border border-[#25D366]/40 hover:border-[#075E54] font-bold text-xs py-2 px-3.5 rounded-full shadow-2xs transition-all hover:scale-102 flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                      >
                        <span>{opt}</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Bot Typing Bubble */}
          {isTyping && (
            <div className="flex items-center gap-1 bg-white text-slate-400 px-3.5 py-2.5 rounded-2xl rounded-tl-xs shadow-2xs w-16 border border-slate-100">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input Bar */}
        <div className="bg-[#F0F2F5] px-3 py-2.5 border-t border-slate-200/80 shrink-0">
          <form onSubmit={handleTextInputSubmit} className="flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type={lastMessage?.inputType === "phone" ? "tel" : lastMessage?.inputType === "email" ? "email" : "text"}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={
                  lastMessage?.inputPlaceholder ||
                  (hasOptions ? "Selecciona una opción o escribe aquí..." : "Escribe un mensaje...")
                }
                disabled={isTyping || isSubmitting}
                className="w-full bg-white px-4 py-2.5 rounded-full border border-slate-300 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#075E54] focus:ring-1 focus:ring-[#075E54] disabled:bg-slate-100"
              />
            </div>

            <button
              type="submit"
              disabled={!inputText.trim() || isTyping || isSubmitting}
              className="w-10 h-10 rounded-full bg-[#075E54] hover:bg-[#128C7E] disabled:bg-slate-300 text-white flex items-center justify-center shrink-0 shadow-md transition-all active:scale-95 cursor-pointer disabled:cursor-not-allowed"
              aria-label="Enviar mensaje"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
