import React, { useState } from 'react';
import { MessageSquare, Phone, Send, CheckCircle2, Shield, Lock } from 'lucide-react';
import { trackWhatsAppClick, trackPhoneClick, trackFormSubmit } from '../utils/analytics';

const CASE_OPTIONS = [
  { value: 'Me denunciaron', label: 'Me denunciaron / Me citaron a declarar' },
  { value: 'Fui víctima', label: 'Fui víctima de un delito (quiero querellarme)' },
  { value: 'Familiar detenido', label: 'Familiar detenido o formalizado' },
  { value: 'Empresa', label: 'Caso penal o contingencia en mi empresa' },
  { value: 'Otro', label: 'Otro asunto penal / Consulta general' },
];

export const FinalCtaSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [caseType, setCaseType] = useState('Me denunciaron');
  const [honeypot, setHoneypot] = useState(''); // Anti-bot honeypot
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validatePhone = (val: string) => {
    // Chilean phone format check (+56 9 XXXXXXXX or 9XXXXXXXX or similar)
    const cleaned = val.replace(/\D/g, '');
    return cleaned.length >= 8;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // If honeypot is filled, silent drop (bot detected)
    if (honeypot) {
      return;
    }

    const newErrors: { name?: string; phone?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'Por favor ingresa tu nombre.';
    }
    if (!phone.trim() || !validatePhone(phone)) {
      newErrors.phone = 'Ingresa un número de contacto válido (ej. +56 9 1234 5678).';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      trackFormSubmit(caseType, false);
      return;
    }

    setErrors({});
    setSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      trackFormSubmit(caseType, true);
    }, 600);
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-[#091E1F] text-white relative overflow-hidden">
      {/* Subtle radial emerald/jade glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom,rgba(67,169,151,0.12)_0%,transparent_65%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Direct Action & Authority */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#43A997]">
              <Shield className="w-4 h-4" />
              <span>Atención Rápida & Confidencial</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Habla hoy con un abogado penalista en Santiago
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Cuéntanos tu caso con total reserva. Te orientamos sobre los próximos pasos legales, plazos procesales y la mejor estrategia para protegerte.
            </p>

            {/* Main Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://wa.me/56933040845?text=Hola%2C%20necesito%20asesor%C3%ADa%20penal%20por%20un%20caso."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('cta_final')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-[#091E1F] bg-[#43A997] hover:bg-[#389181] rounded-xl shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#43A997]"
              >
                <MessageSquare className="w-5 h-5 fill-current text-[#091E1F]" />
                <span>Hablar por WhatsApp ahora</span>
              </a>

              <a
                href="tel:+56933040845"
                onClick={() => trackPhoneClick('cta_final')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-[#123D3E] hover:bg-[#195153] border border-slate-700/60 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4 text-[#43A997]" />
                <span>Llamar al +56 9 3304 0845</span>
              </a>
            </div>

            {/* Confidentiality Commitment */}
            <div className="pt-4 flex items-center gap-3 text-xs sm:text-sm text-slate-400">
              <Lock className="w-4 h-4 text-[#43A997] shrink-0" />
              <span>
                Protegido por secreto profesional (Art. 247 Código Penal). Firma de contrato de confidencialidad.
              </span>
            </div>
          </div>

          {/* Right Column: 3-Field Alternative Callback Form */}
          <div className="lg:col-span-5">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#123D3E]/80 backdrop-blur-md border border-[#195153] shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">
                ¿Prefieres que te llamemos nosotros?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Ingresa tus datos y un abogado del estudio se pondrá en contacto en horario hábil.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[#091E1F]/90 border border-[#43A997] text-center space-y-3 animate-in fade-in zoom-in-95">
                  <div className="w-12 h-12 rounded-full bg-[#43A997]/20 text-[#43A997] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-white">Solicitud enviada con éxito</h4>
                  <p className="text-sm text-slate-200 leading-relaxed font-medium">
                    Recibimos tu mensaje. Un abogado te contactará en horario hábil.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                    }}
                    className="mt-2 text-xs text-[#43A997] hover:underline"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Invisible Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website_check">No llenar este campo</label>
                    <input
                      type="text"
                      id="website_check"
                      name="website_check"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Field 1: Name */}
                  <div>
                    <label htmlFor="contact_name" className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="contact_name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="Ej. Juan Pérez"
                      className={`w-full px-4 py-3 rounded-xl bg-[#091E1F] border ${
                        errors.name ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-600 focus:border-[#43A997]'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#43A997] transition-all`}
                    />
                    {errors.name && <p className="text-xs text-red-300 mt-1">{errors.name}</p>}
                  </div>

                  {/* Field 2: Phone */}
                  <div>
                    <label htmlFor="contact_phone" className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Teléfono de contacto *
                    </label>
                    <input
                      type="tel"
                      id="contact_phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      placeholder="+56 9 1234 5678"
                      className={`w-full px-4 py-3 rounded-xl bg-[#091E1F] border ${
                        errors.phone ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-600 focus:border-[#43A997]'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#43A997] transition-all`}
                    />
                    {errors.phone && <p className="text-xs text-red-300 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Field 3: Case Type Selector */}
                  <div>
                    <label htmlFor="contact_case_type" className="block text-xs font-semibold text-slate-200 mb-1.5">
                      ¿Qué pasó? (Situación legal)
                    </label>
                    <select
                      id="contact_case_type"
                      value={caseType}
                      onChange={(e) => setCaseType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#091E1F] border border-slate-600 text-white text-sm focus:outline-none focus:border-[#43A997] focus:ring-1 focus:ring-[#43A997] transition-all"
                    >
                      {CASE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-[#091E1F] text-white">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full mt-2 py-3.5 px-6 rounded-xl font-bold text-sm text-[#091E1F] bg-[#43A997] hover:bg-[#389181] transition-all shadow-md flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#43A997] disabled:opacity-75"
                  >
                    {submitting ? (
                      <span>Enviando información...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Quiero que me llamen</span>
                      </>
                    )}
                  </button>

                  <p className="pt-1 text-[11px] text-center text-slate-400">
                    Tus datos se encuentran resguardados bajo estricto secreto profesional y confidencialidad.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
