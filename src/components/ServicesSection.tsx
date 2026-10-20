import React from 'react';
import {
  ShieldAlert,
  UserX,
  BadgeAlert,
  Lock,
  Scale,
  FileWarning,
  Terminal,
  Car,
  FileCheck2,
  KeyRound,
  ArrowRight,
  Building2,
  Briefcase,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';
import { CRIMINAL_SERVICES, CORPORATE_AREAS } from '../data/services';
import { trackWhatsAppClick } from '../utils/analytics';

const ICON_MAP: Record<string, React.ElementType> = {
  ShieldAlert,
  UserX,
  BadgeAlert,
  Lock,
  Scale,
  FileWarning,
  Terminal,
  Car,
  FileCheck2,
  KeyRound,
};

export const ServicesSection: React.FC = () => {
  const handleServiceClick = (serviceTitle: string) => {
    trackWhatsAppClick(`servicio_${serviceTitle.toLowerCase().replace(/\s+/g, '_')}`, serviceTitle);
  };

  const handleCorporateClick = () => {
    trackWhatsAppClick('servicio_empresas', 'Área Empresas');
  };

  return (
    <section id="casos" className="py-20 lg:py-28 bg-[#F8F8F8] text-[#2D3748]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#195153] mb-2">
            Práctica Penal Exclusiva
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#195153] tracking-tight">
            Casos penales que atendemos en Santiago y en todo Chile
          </h2>
          <div className="w-20 h-1 bg-[#43A997] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Representación estratégica como abogados defensores o querellantes en el sistema procesal penal.
          </p>
        </div>

        {/* 10 Criminal Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CRIMINAL_SERVICES.map((service) => {
            const Icon = ICON_MAP[service.iconName] || Scale;
            const waUrl = `https://wa.me/56933040845?text=${encodeURIComponent(
              service.whatsappMessage
            )}`;

            return (
              <a
                key={service.id}
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleServiceClick(service.title)}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#43A997] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#43A997]"
                aria-label={`Consultar por WhatsApp sobre ${service.title}`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#195153]/10 text-[#195153] flex items-center justify-center mb-5 group-hover:bg-[#43A997] group-hover:text-[#091E1F] transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#195153] mb-2 group-hover:text-[#123D3E] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#195153] group-hover:text-[#43A997] transition-colors">
                  <span>Consultar por WhatsApp</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Bloque destacado Área Empresas */}
        <div className="mt-16 rounded-2xl bg-[#195153] text-white p-8 sm:p-10 lg:p-12 shadow-xl border border-[#43A997]/30 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#123D3E] text-[#43A997] text-xs font-semibold uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Área Empresas & Corporativa</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                ¿Tienes una empresa?
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Atendemos delitos económicos, delitos informáticos y administración desleal. Además, asesoramos en derecho corporativo y comercial: sociedades, contratos, fusiones, marcas y juicios comerciales.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {CORPORATE_AREAS.slice(0, 6).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#43A997] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/56933040845?text=Hola%2C%20necesito%20asesor%C3%ADa%20para%20mi%20empresa."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCorporateClick}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-[#091E1F] bg-[#43A997] hover:bg-[#389181] transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#43A997]"
                >
                  <Briefcase className="w-4 h-4 shrink-0" />
                  <span>Hablar con el área empresas</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-600/40 max-w-sm lg:max-w-full">
                <img
                  src="https://bustosgomez.cl/wp-content/uploads/2024/07/bg-abogados-empresas-3.png"
                  alt="Área de asesoría penal y comercial a empresas en BG Abogados"
                  className="w-full h-auto object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section repeating WhatsApp CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/56933040845?text=Hola%2C%20necesito%20asesor%C3%ADa%20penal%20por%20un%20caso."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('servicios_bottom')}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#195153] hover:text-[#43A997] transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#43A997]" />
            <span>¿Tienes dudas sobre la tipificación de tu caso? Escríbenos por WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
