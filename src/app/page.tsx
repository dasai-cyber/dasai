import React from "react";
import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FleetSection } from "@/components/home/FleetSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TraceabilityDashboard } from "@/components/home/TraceabilityDashboard";
import { CoverageSection } from "@/components/home/CoverageSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ClientsTrust } from "@/components/home/ClientsTrust";
import { TestimonialsSlider } from "@/components/home/TestimonialsSlider";
import { QuickQuoteSection } from "@/components/home/QuickQuoteSection";
import { CTAFinal } from "@/components/home/CTAFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutPreview />
      <ServicesSection />
      <FleetSection />
      <WhyChooseUs />
      <TraceabilityDashboard />
      <CoverageSection />
      <ProcessSection />
      <ClientsTrust />
      <TestimonialsSlider />
      <QuickQuoteSection />
      <CTAFinal />
    </>
  );
}
