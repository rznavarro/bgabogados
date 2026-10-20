import React from 'react';
import { MessageSquare, Phone, Users, MapPin, Clock } from 'lucide-react';
import { trackWhatsAppClick, trackPhoneClick } from '../utils/analytics';

const WHATSAPP_MAIN_URL =
  'https://wa.me/56933040845?text=Hola%2C%20necesito%20asesor%C3%ADa%20penal%20por%20un%20caso.';

export const Hero: React.FC = () => {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick('hero');
  };

  const handlePhoneClick = () => {
    trackPhoneClick('hero');
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#091E1F]">
      {/* Background Image with Ken Burns slow zoom + deep gradient overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="https://bustosgomez.cl/wp-content/uploads/2022/04/BG-oficinas-scaled.jpg"
          alt="Oficina central de BG Abogados en Providencia, Santiago"
          className="w-full h-full object-cover object-center animate-hero-bg scale-105 opacity-25 filter blur-[0.5px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#091E1F]/95 via-[#091E1F]/90 to-[#195153]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,169,151,0.08)_0%,transparent_70%)] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Clean Kicker / Location tag (unboxed text discipline) */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#43A997] mb-5">
          <span>Abogados penalistas</span>
          <span aria-hidden="true" className="text-slate-400">·</span>
          <span>Providencia, Santiago</span>
        </div>

        {/* The ONLY H1 on the page */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.18] max-w-4xl text-balance">
          Abogados penalistas en Santiago: te defendemos o presentamos tu querella desde el primer día
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal">
          Si te denunciaron, te citaron a declarar, detuvieron a un familiar o fuiste víctima de un delito, habla hoy con un abogado del equipo. Consulta confidencial, presencial o por videollamada.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href={WHATSAPP_MAIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-[#091E1F] bg-[#43A997] hover:bg-[#389181] rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#43A997]"
            aria-label="Habla con un abogado penalista por WhatsApp"
          >
            <MessageSquare className="w-5 h-5 fill-current text-[#091E1F] shrink-0" />
            <span>Habla con un abogado penalista</span>
          </a>

          <a
            href="tel:+56933040845"
            onClick={handlePhoneClick}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-medium text-slate-200 hover:text-white transition-colors"
            aria-label="Llamar al teléfono +56 9 3304 0845"
          >
            <Phone className="w-4 h-4 text-[#43A997]" />
            <span>o llama al +56 9 3304 0845</span>
          </a>
        </div>

        {/* Fila de confianza bajo los botones */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-700/50 w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
          {/* Leaders League */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#091E1F]/60 border border-slate-700/40">
            <img
              src="https://bustosgomez.cl/wp-content/uploads/2022/03/LEADERS.png"
              alt="Sello Leaders League Reconocimiento Litigación"
              className="h-10 w-auto object-contain shrink-0 brightness-110"
              referrerPolicy="no-referrer"
            />
            <div className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
              Reconocidos en Litigación por <strong className="text-white font-semibold">Leaders League</strong>
            </div>
          </div>

          {/* Team count */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#091E1F]/60 border border-slate-700/40">
            <div className="w-10 h-10 rounded-lg bg-[#195153] flex items-center justify-center shrink-0 text-[#43A997]">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
              Equipo de <strong className="text-white font-semibold">9 abogados</strong> especializados
            </div>
          </div>

          {/* National coverage */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#091E1F]/60 border border-slate-700/40">
            <div className="w-10 h-10 rounded-lg bg-[#195153] flex items-center justify-center shrink-0 text-[#43A997]">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
              Defensa y querellas en <strong className="text-white font-semibold">todo Chile</strong>
            </div>
          </div>

          {/* Schedule */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#091E1F]/60 border border-slate-700/40">
            <div className="w-10 h-10 rounded-lg bg-[#195153] flex items-center justify-center shrink-0 text-[#43A997]">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
              Atención presencial y remota: <strong className="text-white font-semibold">Lun a Vie 9:00 a 18:00</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
