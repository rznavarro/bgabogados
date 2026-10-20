import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS } from '../data/faqs';
import { trackFaqOpen, trackWhatsAppClick } from '../utils/analytics';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-3']);

  const toggleFaq = (id: string, question: string) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      if (!isOpen) {
        trackFaqOpen(question);
        return [...prev, id];
      } else {
        return prev.filter((item) => item !== id);
      }
    });
  };

  return (
    <section id="preguntas" className="py-20 lg:py-28 bg-white text-[#2D3748]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#195153] mb-2">
            Respuestas Claras
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#195153] tracking-tight">
            Preguntas frecuentes sobre nuestros abogados penalistas en Santiago
          </h2>
          <div className="w-20 h-1 bg-[#43A997] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Resolvemos las dudas más habituales sobre consultas, confidencialidad y representación procesal.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#43A997] bg-[#F8F8F8] shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id, faq.question)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#43A997]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="flex items-center gap-3 text-base sm:text-lg font-bold text-[#195153]">
                    <HelpCircle className="w-5 h-5 text-[#43A997] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#195153] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#43A997]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-200/50"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Section bottom WhatsApp link */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600 mb-3">
            ¿Tienes otra duda específica sobre tu caso o audiencia?
          </p>
          <a
            href="https://wa.me/56933040845?text=Hola%2C%20tengo%20una%20pregunta%20espec%C3%ADfica%20sobre%20un%20caso%20penal."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('faq_bottom')}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#195153] hover:text-[#43A997] transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#43A997]" />
            <span>Pregunta directamente a un abogado por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
