import React from "react";
import { Container } from "../layout/Container";
import { COMPANY_DATA } from "@/lib/company";
import { Building2 } from "lucide-react";

export function ClientsTrust() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <Container>
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Empresas que confían en nuestras operaciones de transporte
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 items-center justify-center">
          {COMPANY_DATA.clientLogos.map((client, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:bg-slate-100 transition-colors flex flex-col items-center justify-center gap-1.5 group"
            >
              <Building2 className="w-5 h-5 text-slate-400 group-hover:text-[#0F2C59] transition-colors" />
              <span className="text-xs font-black text-slate-700 tracking-wider">
                {client.name.split(" — ")[0]}
              </span>
              <span className="text-[10px] font-medium text-slate-400">
                {client.industry}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
