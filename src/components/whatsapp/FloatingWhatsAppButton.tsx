"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { COMPANY_DATA } from "@/lib/company";

export function FloatingWhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds on page load
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setShowTooltip(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const whatsappUrl = `https://wa.me/${COMPANY_DATA.whatsappRaw}?text=${encodeURIComponent(
    COMPANY_DATA.whatsappDefaultMessage
  )}`;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none"
      style={{ bottom: "24px", right: "24px" }}
    >
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200 text-xs font-semibold animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse shrink-0" />
          <span>¿Necesitas ayuda? Escríbenos a WhatsApp</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
              setIsDismissed(true);
            }}
            className="text-slate-400 hover:text-slate-600 p-0.5 ml-1"
            aria-label="Cerrar mensaje"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating 60px WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-[60px] h-[60px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 group"
        aria-label="Contactar por WhatsApp a DASAI"
      >
        {/* Radar Wave Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-8 h-8 fill-current group-hover:rotate-12 transition-transform duration-300" />
      </a>
    </div>
  );
}
