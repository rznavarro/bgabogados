import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ServicesSection } from './components/ServicesSection';
import { SocialProofSection } from './components/SocialProofSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F8] text-[#2D3748] antialiased">
      {/* 4.0 Fixed Top Bar Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 4.1 Hero Section (Single H1, Ken Burns, trust row) */}
        <Hero />

        {/* 4.2 Problem Section (Empathy, 3 cards) */}
        <ProblemSection />

        {/* 4.3 Services Section (10 criminal cards + Corporate block) */}
        <ServicesSection />

        {/* 4.4 Social Proof & Authority (Leaders League, 9 lawyers, offices, video) */}
        <SocialProofSection />

        {/* 4.5 How It Works (3 clear steps, pricing notes) */}
        <HowItWorksSection />

        {/* 4.6 FAQ (5 precise questions with schema FAQPage support) */}
        <FaqSection />

        {/* 4.7 Final CTA & Callback Form */}
        <FinalCtaSection />
      </main>

      {/* 4.8 Footer */}
      <Footer />

      {/* Floating WhatsApp CTA (Desktop pill + Mobile sticky 2-button bar) */}
      <FloatingWhatsApp />
    </div>
  );
}
