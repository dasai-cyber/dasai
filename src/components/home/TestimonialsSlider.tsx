"use client";

import React, { useState } from "react";
import { Container } from "../layout/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { AnimatedSection } from "../ui/AnimatedSection";
import { COMPANY_DATA } from "@/lib/company";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = COMPANY_DATA.testimonials;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <AnimatedSection className="py-20 sm:py-28 bg-slate-50" id="testimonios">
      <Container>
        <SectionTitle
          badge="Experiencias Reales"
          title="Lo que opinan nuestros clientes"
          subtitle="La confianza de quienes mueven su carga diariamente con DASAI es nuestro principal respaldo."
        />

        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-corporate-lg relative overflow-hidden">
            <Quote className="w-20 h-20 text-[#480CA8]/5 absolute top-6 right-8 pointer-events-none" />

            <div className="flex items-center gap-1 text-pink-500 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            <p className="text-lg sm:text-2xl font-bold text-slate-800 leading-relaxed mb-8">
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
              <div>
                <h4 className="text-base font-extrabold text-[#480CA8]">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#480CA8] hover:text-white transition-colors"
                  aria-label="Testimonio anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#480CA8] hover:text-white transition-colors"
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-[#F72585]"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Ir al testimonio ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
