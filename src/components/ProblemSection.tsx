import React from 'react';
import { AlertTriangle, Clock, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';
import { trackWhatsAppClick } from '../utils/analytics';

export const ProblemSection: React.FC = () => {
  const handleCta = () => {
    trackWhatsAppClick('problema');
  };

  const cards = [
    {
      icon: Clock,
      title: 'Te denunciaron o te citaron a declarar',
      description: 'Antes de declarar, conversa con un abogado. Preparamos contigo cada paso.',
      situation: 'Protege tus derechos procesales y evita autoincriminaciones involuntarias.',
    },
    {
      icon: AlertTriangle,
      title: 'Detuvieron o formalizaron a un familiar',
      description: 'Te explicamos qué sigue y asumimos la defensa en las audiencias.',
      situation: 'Actuación inmediata en control de detención, formalización y medidas cautelares.',
    },
    {
      icon: ShieldCheck,
      title: 'Fuiste víctima de un delito',
      description: 'Presentamos la querella y seguimos el caso para que no quede en nada.',
      situation: 'Intervenimos activamente como querellantes para impulsar diligencias y reparación.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] text-[#2D3748] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#195153] tracking-tight">
            Un problema penal no espera. Lo que hagas en los primeros días importa.
          </h2>
          <div className="w-20 h-1 bg-[#43A997] mx-auto mt-4 rounded-full transition-all duration-500" />
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Una declaración mal dada, un plazo que se vence o una audiencia sin preparación pueden cambiar el curso de un caso. Te ayudamos a entender en qué estás y qué hacer ahora.
          </p>
        </div>

        {/* 3 Empathy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between p-8 rounded-2xl bg-[#F8F8F8] border border-slate-200/80 hover:border-[#43A997]/60 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#195153]/10 text-[#195153] flex items-center justify-center mb-6 group-hover:bg-[#43A997] group-hover:text-[#091E1F] transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#195153] mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-slate-700 font-medium leading-relaxed mb-3">
                    {card.description}
                  </p>
                  <p className="text-xs text-slate-500 leading-normal">
                    {card.situation}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center text-sm font-semibold text-[#195153] group-hover:text-[#43A997] transition-colors">
                  <span>Asesoría inmediata</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 text-center">
          <a
            href="https://wa.me/56933040845?text=Hola%2C%20necesito%20asesor%C3%ADa%20penal%20urgente%20por%20un%20caso."
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCta}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-[#091E1F] bg-[#43A997] hover:bg-[#389181] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#43A997]"
          >
            <MessageSquare className="w-5 h-5 fill-current text-[#091E1F]" />
            <span>Cuéntanos tu caso por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
