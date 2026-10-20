import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  MessageSquare,
  Instagram,
  Facebook,
  Linkedin,
  Map,
  ChevronDown,
} from 'lucide-react';
import { trackPhoneClick, trackWhatsAppClick } from '../utils/analytics';

export const Footer: React.FC = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <footer className="bg-[#195153] text-slate-200 pt-16 pb-24 sm:pb-16 border-t border-[#123D3E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#123D3E]/60">
          {/* Col 1: Brand & Leaders League */}
          <div className="space-y-4">
            <a href="/" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#43A997]">
              <img
                src="https://bustosgomez.cl/wp-content/uploads/2021/03/logobg.png"
                alt="BG Abogados — Bustos Gómez Abogados Penalistas"
                className="h-10 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              BG Abogados — Abogados penalistas en Providencia, Santiago. Litigación penal estratégica, defensa y querellas en todo Chile.
            </p>
            <div className="pt-2">
              <img
                src="https://bustosgomez.cl/wp-content/uploads/2022/03/LEADERS.png"
                alt="Reconocimiento en Litigación - Leaders League"
                className="h-11 w-auto object-contain brightness-110"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Col 2: Ubicación & Contacto */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contacto y Oficina
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#43A997] shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=La+Concepci%C3%B3n+81,+Providencia,+Santiago,+Chile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors"
                >
                  La Concepción 81, oficinas 302–303, Providencia, Santiago.
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#43A997] shrink-0" />
                <span>Lunes a viernes, 9:00 a 18:00 hrs.</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#43A997] shrink-0" />
                <a
                  href="tel:+56933040845"
                  onClick={() => trackPhoneClick('footer')}
                  className="hover:text-[#43A997] font-medium transition-colors"
                >
                  +56 9 3304 0845
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#43A997] shrink-0" />
                <a
                  href="mailto:contacto@bustosgomez.cl"
                  className="hover:text-white transition-colors"
                >
                  contacto@bustosgomez.cl
                </a>
              </p>
            </div>
          </div>

          {/* Col 3: Enlaces de navegación rápida */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#casos" className="hover:text-[#43A997] transition-colors">
                  Casos penales y servicios
                </a>
              </li>
              <li>
                <a href="#como-trabajamos" className="hover:text-[#43A997] transition-colors">
                  Cómo trabajamos (3 pasos)
                </a>
              </li>
              <li>
                <a href="#equipo" className="hover:text-[#43A997] transition-colors">
                  Equipo de 9 abogados penalistas
                </a>
              </li>
              <li>
                <a href="#preguntas" className="hover:text-[#43A997] transition-colors">
                  Preguntas frecuentes (FAQ)
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#43A997] transition-colors">
                  Agendar consulta confidencial
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Redes & WhatsApp directo */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Redes & Asistencia
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/bustosgomezabogados"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#123D3E] flex items-center justify-center text-slate-200 hover:text-white hover:bg-[#43A997] hover:text-[#091E1F] transition-all"
                aria-label="Instagram de BG Abogados"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/bustosgomezabogados"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#123D3E] flex items-center justify-center text-slate-200 hover:text-white hover:bg-[#43A997] hover:text-[#091E1F] transition-all"
                aria-label="Facebook de BG Abogados"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/72125012/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#123D3E] flex items-center justify-center text-slate-200 hover:text-white hover:bg-[#43A997] hover:text-[#091E1F] transition-all"
                aria-label="LinkedIn de BG Abogados"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/56933040845?text=Hola%2C%20necesito%20asesor%C3%ADa%20penal%20por%20un%20caso."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('footer')}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-bold text-[#091E1F] bg-[#43A997] hover:bg-[#389181] transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current text-[#091E1F]" />
                <span>WhatsApp +56 9 3304 0845</span>
              </a>
            </div>
          </div>
        </div>

        {/* Deferred Google Map Embed toggle (performance optimization) */}
        <div className="py-8 border-b border-[#123D3E]/60 text-center">
          {!showMap ? (
            <button
              type="button"
              onClick={() => setShowMap(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-400/40 text-xs sm:text-sm font-medium text-slate-200 hover:text-white hover:border-[#43A997] transition-colors"
            >
              <Map className="w-4 h-4 text-[#43A997]" />
              <span>Ver mapa de ubicación en Providencia</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          ) : (
            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-slate-600 shadow-xl">
              <iframe
                title="Mapa de ubicación BG Abogados en Providencia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8034502597405!2d-70.61584032349767!3d-33.428387073397945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf64731bb38f%3A0xe54ef5bb50be5429!2sLa%20Concepci%C3%B3n%2081%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1710000000000!5m2!1ses!2scl"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          )}
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p className="text-center sm:text-left">
            © 2026 BG Abogados. Todos los derechos reservados.
          </p>
          <p className="text-center sm:text-right text-slate-300 max-w-xl">
            Aviso legal: La información contenida en este sitio es de carácter general y no constituye asesoría legal ni establece una relación abogado-cliente hasta la suscripción formal del contrato correspondiente.
          </p>
        </div>
      </div>
    </footer>
  );
};
