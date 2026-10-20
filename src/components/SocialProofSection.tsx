import React, { useState } from 'react';
import {
  Award,
  GraduationCap,
  Users,
  Building,
  Tv,
  ChevronRight,
  X,
  Play,
  MessageSquare,
} from 'lucide-react';
import { LAWYERS } from '../data/lawyers';
import { OFFICE_PHOTOS } from '../data/services';
import { Lawyer, OfficePhoto } from '../types';
import { trackWhatsAppClick } from '../utils/analytics';

export const SocialProofSection: React.FC = () => {
  const [selectedLawyer, setSelectedLawyer] = useState<Lawyer | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<OfficePhoto | null>(null);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  return (
    <section id="equipo" className="py-20 lg:py-28 bg-[#FFFFFF] text-[#2D3748] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#195153] mb-2">
            Autoridad & Trayectoria
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#195153] tracking-tight">
            Un equipo con formación académica y experiencia en tribunales
          </h2>
          <div className="w-20 h-1 bg-[#43A997] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Litigación estratégica basada en preparación técnica, docencia universitaria y rigor procesal.
          </p>
        </div>

        {/* Leaders League Spotlight */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#091E1F] text-white border border-[#195153] shadow-xl flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="shrink-0 bg-white/5 p-4 rounded-xl border border-slate-700/60 flex items-center justify-center">
            <img
              src="https://bustosgomez.cl/wp-content/uploads/2022/03/LEADERS.png"
              alt="Sello Leaders League Reconocimiento en Litigación"
              className="h-20 sm:h-24 w-auto object-contain brightness-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 text-center md:text-left space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#43A997] uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Ranking Internacional</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Nuestro estudio fue reconocido en Litigación por el ranking internacional Leaders League.
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Distinción otorgada tras una investigación exhaustiva del mercado legal chileno, destacando la solidez técnica y la calidad de nuestra práctica en tribunales.
            </p>
          </div>
        </div>

        {/* Real Differentiator Metrics Grid (No fake numbers) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="p-6 rounded-xl bg-[#F8F8F8] border border-slate-200 text-center">
            <Users className="w-8 h-8 text-[#195153] mx-auto mb-3" />
            <div className="text-2xl sm:text-3xl font-bold text-[#195153] tabular-nums">9</div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
              Abogados dedicados a la defensa y querellas
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#F8F8F8] border border-slate-200 text-center">
            <GraduationCap className="w-8 h-8 text-[#195153] mx-auto mb-3" />
            <div className="text-base sm:text-lg font-bold text-[#195153] leading-snug">
              Profesores Universitarios
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
              Docencia en UNAB, UAH, USS y UCN
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#F8F8F8] border border-slate-200 text-center">
            <Building className="w-8 h-8 text-[#195153] mx-auto mb-3" />
            <div className="text-base sm:text-lg font-bold text-[#195153] leading-snug">
              Formación de Excelencia
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
              PUC, U. de Chile, UDP y NYU
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#F8F8F8] border border-slate-200 text-center">
            <Award className="w-8 h-8 text-[#195153] mx-auto mb-3" />
            <div className="text-base sm:text-lg font-bold text-[#195153] leading-snug">
              Defensoría Penal Pública
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
              Abogados con experiencia y habilitación DPP
            </div>
          </div>
        </div>

        {/* Media Mentions */}
        <div className="p-5 sm:p-6 rounded-xl bg-[#F8F8F8] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 mb-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#195153] text-[#43A997] flex items-center justify-center shrink-0">
              <Tv className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-semibold text-[#195153]">
                Abogados de nuestro estudio han sido consultados como expertos en medios de comunicación como TVN.
              </p>
              <p className="text-xs text-slate-500">
                Análisis penal y vocería jurídica en causas de alta relevancia pública.
              </p>
            </div>
          </div>
        </div>

        {/* Team Sub-block */}
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#195153] tracking-tight">
              Nuestro equipo de abogados
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Conoce a los profesionales que liderarán tu estrategia judicial. Haz clic en cada perfil para ver su trayectoria completa.
            </p>
          </div>

          {/* 9 Lawyers Grid / Horizontal Snap on Mobile */}
          <div className="flex overflow-x-auto pb-4 gap-5 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible">
            {LAWYERS.map((lawyer) => (
              <div
                key={lawyer.id}
                className="snap-center shrink-0 w-[280px] sm:w-[320px] lg:w-auto rounded-2xl bg-[#F8F8F8] border border-slate-200 hover:border-[#43A997] hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  <div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
                    <img
                      src={lawyer.imageUrl}
                      alt={`${lawyer.name}, abogado en BG Abogados Penalistas`}
                      className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#091E1F]/70 via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="p-5 sm:p-6">
                    <h4 className="text-lg font-bold text-[#195153] group-hover:text-[#123D3E] transition-colors">
                      {lawyer.name}
                    </h4>
                    <p className="text-xs font-semibold text-[#43A997] mt-0.5 mb-2">
                      {lawyer.role}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {lawyer.shortBio}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => setSelectedLawyer(lawyer)}
                    className="w-full py-2.5 px-3 rounded-lg border border-[#195153]/30 text-xs sm:text-sm font-semibold text-[#195153] hover:bg-[#195153] hover:text-white transition-colors flex items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#43A997]"
                  >
                    <span>Ver biografía completa</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Office Photo Gallery in Providencia */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-[#195153]">
              Nuestra oficina en Providencia
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Infraestructura diseñada para la atención confidencial, reuniones con clientes y preparación estratégica de audiencias.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {OFFICE_PHOTOS.map((photo) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-200 border border-slate-200 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#43A997]"
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091E1F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                  <p className="text-xs text-[#43A997] font-semibold">Toca para ampliar</p>
                  <p className="text-sm font-medium text-white">{photo.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Video Facade (YouTube facade with play intent, no autoplay) */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#091E1F] text-white border border-[#195153] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#43A997] uppercase tracking-wider">
                <Play className="w-4 h-4" />
                <span>Presentación Audiovisual</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Video institucional del estudio
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Conoce nuestras instalaciones y la filosofía de trabajo de BG Abogados en Providencia, Santiago.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-700/60 shadow-xl group">
                {!showVideoPlayer ? (
                  <div
                    onClick={() => setShowVideoPlayer(true)}
                    className="relative w-full h-full cursor-pointer flex items-center justify-center"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setShowVideoPlayer(true);
                      }
                    }}
                    aria-label="Reproducir video de presentación de BG Abogados"
                  >
                    <img
                      src="https://bustosgomez.cl/wp-content/uploads/2022/04/BG-oficinas-scaled.jpg"
                      alt="Miniatura de video institucional BG Abogados"
                      className="w-full h-full object-cover filter brightness-75 group-hover:scale-105 transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[#091E1F]/50 group-hover:bg-[#091E1F]/30 transition-colors" />
                    <div className="relative z-10 w-16 h-16 rounded-full bg-[#43A997] text-[#091E1F] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </div>
                  </div>
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/44tu4vA3nxo?autoplay=1&rel=0"
                    title="Video institucional BG Abogados"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lawyer Bio Modal */}
      {selectedLawyer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-lawyer-title"
        >
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-[#F8F8F8]">
              <div className="flex items-center gap-4">
                <img
                  src={selectedLawyer.imageUrl}
                  alt={selectedLawyer.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#43A997]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 id="modal-lawyer-title" className="text-xl font-bold text-[#195153]">
                    {selectedLawyer.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#43A997]">{selectedLawyer.role}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedLawyer(null)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#43A997]"
                aria-label="Cerrar modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-sm text-slate-700 leading-relaxed">
              <h5 className="font-semibold text-[#195153] uppercase tracking-wider text-xs">
                Resumen Curricular & Especialidad
              </h5>
              {selectedLawyer.fullBio.map((paragraph, idx) => (
                <p key={idx} className="text-slate-700">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-200">
                <h5 className="font-semibold text-[#195153] uppercase tracking-wider text-xs mb-2">
                  Formación Académica
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedLawyer.education.map((edu, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-800 text-xs rounded-md font-medium"
                    >
                      {edu}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 border-t border-slate-200 bg-[#F8F8F8] flex flex-col sm:flex-row justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedLawyer(null)}
                className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900"
              >
                Cerrar
              </button>
              <a
                href={`https://wa.me/56933040845?text=${encodeURIComponent(
                  `Hola, me gustaría consultar con el equipo legal de BG Abogados por un caso penal.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(`abogado_modal_${selectedLawyer.id}`)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-[#091E1F] bg-[#43A997] hover:bg-[#389181] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Hablar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Office Photo Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700">
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white bg-black/50 rounded-full"
              aria-label="Cerrar imagen"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.alt}
              className="w-full max-h-[80vh] object-contain mx-auto"
              referrerPolicy="no-referrer"
            />
            <div className="p-4 bg-slate-900 text-center">
              <p className="text-white text-sm font-semibold">{selectedPhoto.title}</p>
              <p className="text-slate-400 text-xs mt-0.5">{selectedPhoto.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
