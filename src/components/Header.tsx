import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';
import { trackWhatsAppClick, trackPhoneClick } from '../utils/analytics';

const WHATSAPP_MAIN_URL =
  'https://wa.me/56933040845?text=Hola%2C%20necesito%20asesor%C3%ADa%20penal%20por%20un%20caso.';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = (location: string) => {
    trackWhatsAppClick(location);
  };

  const handlePhone = (location: string) => {
    trackPhoneClick(location);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#091E1F]/95 backdrop-blur-md shadow-md border-b border-[#195153]/40 py-2.5'
          : 'bg-gradient-to-b from-[#091E1F]/90 via-[#091E1F]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-12">
          {/* Zone 1: Brand Wordmark / Logo */}
          <a
            href="#hero"
            className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#43A997] rounded"
            aria-label="BG Abogados Penalistas - Inicio"
          >
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="https://bustosgomez.cl/wp-content/uploads/2021/04/logo_mobile.png"
              />
              <img
                src="https://bustosgomez.cl/wp-content/uploads/2021/03/logobg.png"
                alt="BG Abogados — Bustos Gómez Abogados Penalistas"
                className="h-9 sm:h-11 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </picture>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Navegación principal"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200"
          >
            <a
              href="#casos"
              className="hover:text-[#43A997] transition-colors whitespace-nowrap shrink-0"
            >
              Casos
            </a>
            <a
              href="#como-trabajamos"
              className="hover:text-[#43A997] transition-colors whitespace-nowrap shrink-0"
            >
              Cómo trabajamos
            </a>
            <a
              href="#equipo"
              className="hover:text-[#43A997] transition-colors whitespace-nowrap shrink-0"
            >
              Equipo
            </a>
            <a
              href="#preguntas"
              className="hover:text-[#43A997] transition-colors whitespace-nowrap shrink-0"
            >
              Preguntas
            </a>
            <a
              href="#contacto"
              className="hover:text-[#43A997] transition-colors whitespace-nowrap shrink-0"
            >
              Contacto
            </a>
          </nav>

          {/* Zone 3: Direct Action & Contact */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+56933040845"
              onClick={() => handlePhone('header')}
              className="hidden md:flex items-center gap-1.5 text-xs lg:text-sm font-medium text-slate-200 hover:text-[#43A997] transition-colors whitespace-nowrap shrink-0 px-2 py-1"
              aria-label="Llamar al +56 9 3304 0845"
            >
              <Phone className="w-4 h-4 text-[#43A997]" />
              <span>+56 9 3304 0845</span>
            </a>

            <a
              href={WHATSAPP_MAIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsApp('header')}
              className="flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-[#43A997] hover:bg-[#389181] text-[#091E1F] shadow-sm transition-all whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#43A997]"
              aria-label="Escribir por WhatsApp a un abogado penalista"
            >
              <MessageSquare className="w-4 h-4 fill-current text-[#091E1F]" />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#43A997] rounded-md"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#091E1F]/98 border-b border-[#195153] px-5 py-6 space-y-4 shadow-xl backdrop-blur-lg">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-200">
            <a
              href="#casos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-[#43A997] transition-colors"
            >
              Casos penales
            </a>
            <a
              href="#como-trabajamos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-[#43A997] transition-colors"
            >
              Cómo trabajamos
            </a>
            <a
              href="#equipo"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-[#43A997] transition-colors"
            >
              Nuestro equipo
            </a>
            <a
              href="#preguntas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-[#43A997] transition-colors"
            >
              Preguntas frecuentes
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-[#43A997] transition-colors"
            >
              Contacto y ubicación
            </a>
          </nav>
          <div className="pt-3 border-t border-[#195153]/60 flex flex-col gap-2.5">
            <a
              href="tel:+56933040845"
              onClick={() => {
                handlePhone('header_mobile_menu');
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-slate-100 bg-[#123D3E] hover:bg-[#195153] rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 text-[#43A997]" />
              <span>Llamar al +56 9 3304 0845</span>
            </a>
            <a
              href={WHATSAPP_MAIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                handleWhatsApp('header_mobile_menu');
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#091E1F] bg-[#43A997] hover:bg-[#389181] rounded-lg transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-current text-[#091E1F]" />
              <span>Habla con un abogado penalista</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
