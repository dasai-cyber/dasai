import React from "react";
import Image from "next/image";
import { Container } from "../layout/Container";
import { COMPANY_DATA } from "@/lib/company";
import { Building2 } from "lucide-react";

export function ClientsTrust() {
  return (
    <section className="py-12 sm:py-16 bg-white border-y border-slate-100">
      <Container>
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6C5E8A]">
            Empresas que confían en nuestras operaciones de transporte
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 max-w-4xl mx-auto">
          {COMPANY_DATA.clientLogos.map((client, idx) => (
            <div
              key={idx}
              className="w-full sm:w-72 p-5 sm:p-6 rounded-2xl bg-[#FCF9FF] border border-[#EADBFC] hover:bg-white hover:border-[#7209B7]/40 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-3 group"
            >
              {client.logo ? (
                <div className="relative w-full h-14 flex items-center justify-center overflow-hidden rounded-lg">
                  <Image
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    width={220}
                    height={56}
                    className="max-h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                  />
                </div>
              ) : (
                <Building2 className="w-8 h-8 text-[#7209B7] group-hover:text-[#F72585] transition-colors" />
              )}
              <div className="text-center">
                <span className="text-xs font-extrabold text-slate-800 block group-hover:text-[#480CA8] transition-colors">
                  {client.name}
                </span>
                <span className="text-[11px] font-medium text-slate-400">
                  {client.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
