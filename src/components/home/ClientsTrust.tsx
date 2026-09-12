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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 items-center justify-center">
          {COMPANY_DATA.clientLogos.map((client, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-[#FCF9FF] border border-[#EADBFC] text-center hover:bg-white hover:border-[#7209B7]/40 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center gap-2 group h-28"
            >
              {client.logo ? (
                <div className="relative w-full h-9 flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    width={130}
                    height={36}
                    className="max-h-8 w-auto object-contain transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:scale-105"
                  />
                </div>
              ) : (
                <Building2 className="w-6 h-6 text-[#7209B7] group-hover:text-[#F72585] transition-colors" />
              )}
              <span className="text-[11px] font-semibold text-slate-500 group-hover:text-[#480CA8] transition-colors line-clamp-1">
                {client.industry}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
