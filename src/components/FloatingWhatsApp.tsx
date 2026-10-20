import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { trackWhatsAppClick, trackPhoneClick } from '../utils/analytics';

const WHATSAPP_MAIN_URL =
  'https://wa.me/56933040845?text=Hola%2C%20necesito%20asesor%C3%ADa%20penal%20por%20un%20caso.';

export const FloatingWhatsApp: React.FC = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating buttons after slight scroll (150px)
      if (window.scrollY > 150) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop / Tablet Floating WhatsApp Button (bottom-right) */}
      <div
        className={`hidden md:block fixed bottom-6 right-6 z-40 transition-all duration-300 ${
          showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <a
          href={WHATSAPP_MAIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('flotante_desktop')}
          className="group flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#43A997] hover:bg-[#389181] text-[#091E1F] font-bold text-sm shadow-xl animate-wa-pulse transition-all transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#43A997]"
          aria-label="Hablar con un abogado penalista por WhatsApp"
        >
          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            <MessageSquare className="w-5 h-5 fill-current text-[#091E1F]" />
          </div>
          <span className="whitespace-nowrap font-bold">Habla con un penalista</span>
        </a>
      </div>

      {/* Mobile Fixed Bottom Bar (WhatsApp principal + Llamar secundario) */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#091E1F]/95 backdrop-blur-md border-t border-[#195153] px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-2xl transition-all duration-300 ${
          showButtons ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
        style={{ maxHeight: '12vh' }} // Strict 15% Mobile Sticky Cap compliance
      >
        <div className="grid grid-cols-12 gap-2 max-w-md mx-auto">
          {/* Secondary Action: Call */}
          <a
            href="tel:+56933040845"
            onClick={() => trackPhoneClick('movil_fijo')}
            className="col-span-4 min-h-[44px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#123D3E] hover:bg-[#195153] text-white text-xs font-semibold border border-slate-700/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#43A997]"
            aria-label="Llamar al abogado penalista"
          >
            <Phone className="w-4 h-4 text-[#43A997] shrink-0" />
            <span>Llamar</span>
          </a>

          {/* Primary Action: WhatsApp */}
          <a
            href={WHATSAPP_MAIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('movil_fijo')}
            className="col-span-8 min-h-[44px] flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#43A997] hover:bg-[#389181] text-[#091E1F] text-xs font-bold shadow-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#43A997]"
            aria-label="Hablar con un abogado penalista por WhatsApp"
          >
            <MessageSquare className="w-4 h-4 fill-current text-[#091E1F] shrink-0" />
            <span className="truncate">Habla con un penalista</span>
          </a>
        </div>
      </div>
    </>
  );
};
