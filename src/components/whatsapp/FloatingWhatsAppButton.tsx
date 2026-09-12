"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { WhatsAppChatbotModal } from "./WhatsAppChatbotModal";

export function FloatingWhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    // Show tooltip after 2.5 seconds on page load if not dismissed
    const timer = setTimeout(() => {
      if (!isDismissed && !isChatOpen) {
        setShowTooltip(true);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [isDismissed, isChatOpen]);

  const handleOpenChat = () => {
    setIsChatOpen(true);
    setShowTooltip(false);
  };

  return (
    <>
      <div
        className="fixed bottom-6 right-6 z-40 flex items-center gap-3 select-none"
        style={{ bottom: "24px", right: "24px" }}
      >
        {/* Interactive Tooltip Card */}
        {showTooltip && !isChatOpen && (
          <div
            onClick={handleOpenChat}
            className="hidden sm:flex items-center gap-2.5 bg-white text-slate-800 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200 text-xs font-semibold animate-in fade-in slide-in-from-right-4 duration-300 cursor-pointer hover:border-[#25D366] hover:shadow-2xl transition-all group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse shrink-0" />
            <div className="flex flex-col">
              <span className="group-hover:text-[#075E54] transition-colors">¿Buscas trabajo o cotizar?</span>
              <span className="text-[10px] text-slate-400 font-normal">Chatea con nuestro Asistente Virtual</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
                setIsDismissed(true);
              }}
              className="text-slate-400 hover:text-slate-600 p-0.5 ml-1.5"
              aria-label="Cerrar mensaje"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Main Floating 60px WhatsApp Button */}
        {!isChatOpen && (
          <button
            onClick={handleOpenChat}
            className="relative w-[60px] h-[60px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 group cursor-pointer"
            aria-label="Abrir Asistente Virtual WhatsApp de DASAI"
          >
            {/* Radar Wave Effect */}
            <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

            {/* Notification Badge */}
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#F72585] text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-xs">
              1
            </span>

            {/* WhatsApp Icon */}
            <MessageCircle className="w-8 h-8 fill-current group-hover:rotate-12 transition-transform duration-300" />
          </button>
        )}
      </div>

      {/* Interactive WhatsApp Chatbot Modal */}
      <WhatsAppChatbotModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </>
  );
}
