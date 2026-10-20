import React from 'react';
import { MessageSquare, CalendarCheck, FileSignature, ArrowRight, ShieldCheck } from 'lucide-react';
import { trackWhatsAppClick } from '../utils/analytics';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Escríbenos',
      description: 'Cuéntanos por WhatsApp o por teléfono, en pocas palabras, qué está pasando.',
      detail: 'Revisión preliminar inmediata de la urgencia procesal.',
    },
    {
      number: '02',
      icon: CalendarCheck,
      title: 'Te reunimos con un abogado',
      description: 'Agendamos una consulta presencial en Providencia, por videollamada o por teléfono.',
      detail: 'Evaluación detallada de antecedentes, partes involucradas y plazos fatales.',
    },
    {
      number: '03',
      icon: FileSignature,
      title: 'Tomamos tu caso',
      description: 'Firmamos un contrato de asesoría con confidencialidad y definimos la estrategia contigo.',
      detail: 'Patrocinio formal ante tribunales de garantía, fiscalías o Ministerio Público.',
    },
  ];

  return (
    <section id="como-trabajamos" className="py-20 lg:py-28 bg-[#F8F8F8] text-[#2D3748]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#195153] mb-2">
            Proceso Claro & Transparente
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#195153] tracking-tight">
            Así empezamos a trabajar en tu caso
          </h2>
          <div className="w-20 h-1 bg-[#43A997] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Desde el primer contacto establecemos estricta confidencialidad y rapidez de respuesta.
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-[#195153]/20 tabular-nums">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#195153]/10 text-[#195153] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#195153] mb-3">{step.title}</h3>
                  <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <p className="text-xs text-slate-500 leading-normal">{step.detail}</p>
                </div>

                {idx < 2 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Informative Note */}
        <div className="mt-12 p-6 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#195153]/10 text-[#195153] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#43A997]" />
            </div>
            <div className="text-xs sm:text-sm text-slate-600 space-y-0.5">
              <p className="font-semibold text-[#195153]">
                Modalidades de atención y compromiso ético:
              </p>
              <p>
                Consulta presencial en Providencia o por videollamada para todo Chile. Respuesta oportuna en horario hábil bajo estricto secreto profesional.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/56933040845?text=Hola%2C%20necesito%20asesor%C3%ADa%20penal%20por%20un%20caso."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('como_trabajamos_cta')}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-[#091E1F] bg-[#43A997] hover:bg-[#389181] rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#43A997]"
          >
            <MessageSquare className="w-5 h-5 fill-current text-[#091E1F]" />
            <span>Habla con un abogado penalista</span>
          </a>
        </div>
      </div>
    </section>
  );
};
