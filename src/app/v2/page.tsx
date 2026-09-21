"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { COFFEE_VARIETIES } from "@/data/coffeeData";
import { IMAGES } from "@/data/images";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Instagram,
  Facebook,
  Phone,
  Layers,
  Sun,
  Award,
  Ship,
} from "lucide-react";

export default function ProposalBPage() {
  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = COFFEE_VARIETIES.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6500);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const activeLot = COFFEE_VARIETIES[currentSlide];

  // Interactive Process Step State
  const [activeTab, setActiveTab] = useState(0);

  const processSteps = [
    {
      num: "01",
      name: "Terroir",
      icon: Layers,
      title: "Terroir Andino y Microclimas Extremos",
      subtitle: "Paso 01 · Cosecha Manual Selectiva",
      desc: "Ubicados entre 1.800 y 2.400 metros de altitud en las laderas de los Yungas y Caranavi. Las noches frías andinas ralentizan la maduración del grano de café, concentrando azúcares y precursores aromáticos únicos que no existen a menores alturas.",
      pills: [
        { label: "Altitud Terroir", val: "1.800 – 2.400 msnm" },
        { label: "Recolección", val: "100% Manual en Madurez Óptima" },
      ],
    },
    {
      num: "02",
      name: "Secado",
      icon: Sun,
      title: "Procesos Natural, Lavado y Honey",
      subtitle: "Paso 02 · Beneficio y Camas Africanas",
      desc: "Secado en camas africanas elevadas bajo el sol puro de la cordillera. Se controla diariamente la temperatura, circulación de aire y espesor de capa, estabilizando la humedad del grano en su estándar óptimo de exportación.",
      pills: [
        { label: "Humedad Objetivo", val: "10.5% – 11.5% Certificada" },
        { label: "Método de Secado", val: "Camas Africanas Elevadas" },
      ],
    },
    {
      num: "03",
      name: "Catación",
      icon: Award,
      title: "Puntaje Mínimo 84+ Puntos SCA",
      subtitle: "Paso 03 · Catación y Certificación Q-Grader",
      desc: "Cada lote exportable pasa por una estricta mesa de catación bajo el protocolo internacional SCA (Specialty Coffee Association). Se califica fragancia, aroma, acidez, cuerpo, balance y dulzura, emitiendo una ficha técnica analítica individual.",
      pills: [
        { label: "Estándar SCA", val: "84+ a 89.0 Puntos Especialidad" },
        { label: "Defectos Primarios", val: "0 Defectos Grado 1" },
      ],
    },
    {
      num: "04",
      name: "Embarque",
      icon: Ship,
      title: "Logística Puerta a Puerta con FOB Arica",
      subtitle: "Paso 04 · Empaque GrainPro y Salida FOB",
      desc: "Envasado hermético en sacos de yute con liner hermético GrainPro que resguarda la humedad y frescura del grano verde. Despacho marítimo coordinado desde el puerto de Arica hacia tostadores de Europa, Norteamérica y Asia.",
      pills: [
        { label: "Incoterm Base", val: "FOB Puerto de Arica (Chile)" },
        { label: "Empaque Seguro", val: "Sacos GrainPro 60kg" },
      ],
    },
  ];

  return (
    <div className="flex flex-col bg-brand-dark min-h-screen">
      {/* 1. SPLIT HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.heroV2Bg}
            alt="Granos de café cayendo al atardecer andino"
            fill
            priority
            className="object-cover object-center filter brightness-[0.68] contrast-[1.1] saturate-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09]/90 via-[#0c0a09]/60 to-[#0c0a09]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-transparent to-[#0c0b0a]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Glassmorphic Logo Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-[#14110f]/75 backdrop-blur-xl border border-brand-gold/30 rounded-2xl p-8 sm:p-10 text-center shadow-2xl relative group hover:border-brand-gold/60 transition-all duration-300">
                {/* Gold radial ambient glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                  <BrandLogo variant="stacked" />

                  {/* Trust Pills */}
                  <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/60 border border-brand-gold/25 rounded-full text-xs text-brand-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      Bolivia
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/60 border border-brand-gold/25 rounded-full text-xs text-brand-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      2.400 msnm
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/60 border border-brand-gold/25 rounded-full text-xs text-brand-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      SCA 84+ Certificado
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="inline-block py-1 px-3 mb-4 rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-gold text-xs uppercase tracking-[0.25em] font-bold">
                EXPORTADORA DE CAFÉ ESPECIALIDAD
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-textWhite leading-[1.1] mb-6">
                <span>El Café de las</span>
                <br />
                <span>Alturas,</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfbe7d] via-[#c5a059] to-[#aa8954]">
                  Para el Mundo
                </span>
              </h1>

              <p className="text-base sm:text-lg text-brand-muted leading-relaxed mb-8 max-w-xl">
                Conectamos los mejores cafés de alta montaña con importadores,
                tostadores y compradores internacionales que exigen lo extraordinario.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
                <Link href="/cotizar" className="btn-gold-solid px-7 py-3 text-xs">
                  SOLICITAR COTIZACIÓN
                </Link>
                <a href="#carrusel-destacado" className="btn-gold-outline px-7 py-3 text-xs">
                  CONOCER VARIEDADES
                </a>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-brand-gold/20">
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold">
                    2.400m
                  </div>
                  <div className="text-[11px] text-brand-muted uppercase tracking-wider mt-0.5">
                    Altitud Máxima
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold">
                    15+
                  </div>
                  <div className="text-[11px] text-brand-muted uppercase tracking-wider mt-0.5">
                    Años Experiencia
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold">
                    30+
                  </div>
                  <div className="text-[11px] text-brand-muted uppercase tracking-wider mt-0.5">
                    Países Destino
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold">
                    100%
                  </div>
                  <div className="text-[11px] text-brand-muted uppercase tracking-wider mt-0.5">
                    Especialidad
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CAROUSEL SECTION */}
      <section id="carrusel-destacado" className="py-24 bg-[#0e0c0a] relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="gold-badge mb-3">SELECCIÓN DE ORIGEN</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-textWhite mb-4">
              Lotes Insigne de Temporada
            </h2>
            <p className="text-brand-muted leading-relaxed">
              Descubre nuestras cosechas más premiadas de alta montaña,
              seleccionadas meticulosamente para compradores internacionales y
              tostadurías de especialidad.
            </p>
          </div>

          {/* Carousel Card */}
          <div className="gold-card p-6 sm:p-10 relative overflow-hidden">
            {/* Progress bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/5">
              <div
                key={currentSlide}
                className="h-full bg-gradient-to-r from-brand-gold to-brand-goldLight animate-[shrink_6.5s_linear_forwards]"
                style={{ width: "100%" }}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
              {/* Slide Image */}
              <div className="lg:col-span-5 relative h-72 sm:h-96 w-full rounded-xl overflow-hidden bg-black/60 shadow-2xl">
                <Image
                  src={activeLot.image}
                  alt={activeLot.name}
                  fill
                  className="object-cover object-center transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <span className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md border border-brand-gold/30 text-brand-gold text-xs font-semibold rounded">
                  Proceso {activeLot.process}
                </span>

                <span className="badge-sca absolute top-4 right-4">
                  {activeLot.scaScore} SCA Q-Grader
                </span>
              </div>

              {/* Slide Content */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-bold">
                    LOTE EXCLUSIVO · MICRO-LOT
                  </span>

                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-brand-textWhite mt-1 mb-2">
                    {activeLot.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-brand-dim text-xs sm:text-sm mb-4">
                    <MapPin size={15} className="text-brand-gold" />
                    <span>{activeLot.region} · {activeLot.altitude}</span>
                  </div>

                  {/* Sensory notes callout box */}
                  <div className="p-4 bg-brand-gold/10 border border-brand-gold/25 rounded-lg mb-4">
                    <span className="text-[11px] uppercase tracking-wider text-brand-gold font-semibold block mb-1">
                      Perfil y Notas de Cata
                    </span>
                    <p className="font-serif italic text-base sm:text-lg text-brand-goldLight">
                      {activeLot.tastingNotes.join(" · ")}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-6">
                    {activeLot.longDescription}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-brand-gold/15">
                  <Link
                    href={`/productos/${activeLot.slug}`}
                    className="btn-gold-solid text-xs py-2.5 px-5 inline-flex items-center gap-2"
                  >
                    <span>Ver Ficha Técnica</span>
                    <ArrowRight size={13} />
                  </Link>

                  <a
                    href={`https://wa.me/59171791570?text=Hola%20Altura%20Coffee%20Exports%2C%20solicito%20cotizaci%C3%B3n%20para%20el%20lote%20${encodeURIComponent(
                      activeLot.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold-outline text-xs py-2.5 px-5 inline-flex items-center gap-2"
                  >
                    <span>Cotizar por WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="mt-8 pt-6 border-t border-brand-gold/15 flex items-center justify-between">
              {/* Prev button */}
              <button
                type="button"
                onClick={() =>
                  setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
                }
                className="p-2.5 rounded-full border border-brand-gold/30 hover:border-brand-gold text-brand-gold hover:bg-brand-gold/10 transition-colors"
                aria-label="Anterior variedad"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {COFFEE_VARIETIES.map((lot, idx) => (
                  <button
                    key={lot.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentSlide
                        ? "w-8 bg-brand-gold"
                        : "w-2.5 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Ir a ${lot.name}`}
                  />
                ))}
              </div>

              {/* Next button */}
              <button
                type="button"
                onClick={() =>
                  setCurrentSlide((prev) => (prev + 1) % totalSlides)
                }
                className="p-2.5 rounded-full border border-brand-gold/30 hover:border-brand-gold text-brand-gold hover:bg-brand-gold/10 transition-colors"
                aria-label="Siguiente variedad"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE GRAIN ROUTE & CHANNELS */}
      <section className="py-24 bg-brand-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="gold-badge mb-3">TRAZABILIDAD Y CONEXIÓN DIRECTA</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-textWhite mb-4">
              De la Montaña a Tu Tostadora
            </h2>
            <p className="text-brand-muted leading-relaxed">
              Interactúa con cada etapa de nuestra ruta de café de especialidad y
              conéctate directamente con nuestros canales oficiales de exportación.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Box: Interactive Route */}
            <div className="lg:col-span-7 gold-card p-6 sm:p-8">
              <div className="mb-6">
                <span className="text-[11px] uppercase tracking-[0.2em] text-brand-gold font-bold">
                  RUTA INTERACTIVA DEL GRANO
                </span>
                <h3 className="font-serif text-2xl font-bold text-brand-textWhite mt-1">
                  Selecciona una etapa del viaje
                </h3>
              </div>

              {/* Step Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {processSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = idx === activeTab;
                  return (
                    <button
                      key={step.num}
                      type="button"
                      onClick={() => setActiveTab(idx)}
                      className={`p-3 rounded-md border text-left transition-all duration-200 flex flex-col justify-between h-20 ${
                        isActive
                          ? "bg-brand-gold/20 border-brand-gold text-brand-gold shadow-md"
                          : "bg-black/30 border-brand-gold/15 text-brand-muted hover:border-brand-gold/40 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="font-serif text-sm font-bold opacity-75">
                          {step.num}
                        </span>
                        <Icon size={16} />
                      </div>
                      <span className="text-xs font-semibold">{step.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Pane */}
              <div className="p-6 bg-black/40 border border-brand-gold/20 rounded-xl animate-in fade-in duration-300">
                <span className="gold-badge mb-3">
                  {processSteps[activeTab].subtitle}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-brand-textWhite mb-3">
                  {processSteps[activeTab].title}
                </h4>
                <p className="text-sm text-brand-muted leading-relaxed mb-6">
                  {processSteps[activeTab].desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-brand-gold/15">
                  {processSteps[activeTab].pills.map((pill, i) => (
                    <div
                      key={i}
                      className="p-3 rounded bg-white/5 border border-white/5"
                    >
                      <span className="text-[10px] uppercase tracking-wider text-brand-gold block font-semibold">
                        {pill.label}
                      </span>
                      <span className="text-xs sm:text-sm text-brand-textWhite font-medium">
                        {pill.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Box: Live Social & Commercial Hub */}
            <div className="lg:col-span-5 gold-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-brand-gold font-bold">
                  TRATO DIRECTO CON EL EXPORTADOR
                </span>
                <h3 className="font-serif text-2xl font-bold text-brand-textWhite mt-1 mb-6">
                  Canales Oficiales en Vivo
                </h3>

                <div className="space-y-4">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/59171791570?text=Hola%20Altura%20Coffee%20Exports%2C%20me%20comunico%20para%20consultar%20sobre%20lotes%20disponibles%20y%20cotizaci%C3%B3n."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366] flex items-center justify-between group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center">
                        <Phone size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-[#25D366] transition-colors">
                          +591 71791570
                        </div>
                        <div className="text-xs text-brand-dim">
                          WhatsApp Business · Atención Inmediata
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-[#25D366] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Chatear <ArrowRight size={12} />
                    </span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/doctorvico25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-[#E1306C]/10 border border-[#E1306C]/30 hover:border-[#E1306C] flex items-center justify-between group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#E1306C] text-white flex items-center justify-center">
                        <Instagram size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-[#E1306C] transition-colors">
                          @doctorvico25
                        </div>
                        <div className="text-xs text-brand-dim">
                          Reels, cosechas andinas y cataciones
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-[#E1306C] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Seguir <ArrowRight size={12} />
                    </span>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com/Vicoarraz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-[#1877F2]/10 border border-[#1877F2]/30 hover:border-[#1877F2] flex items-center justify-between group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center">
                        <Facebook size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-[#1877F2] transition-colors">
                          Vicoarraz
                        </div>
                        <div className="text-xs text-brand-dim">
                          Comunidad cafetera y novedades
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-[#1877F2] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Visitar <ArrowRight size={12} />
                    </span>
                  </a>
                </div>
              </div>

              {/* Sample Request CTA Callout */}
              <div className="mt-8 p-4 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-brand-textWhite">
                    ¿Deseas evaluar muestras?
                  </div>
                  <p className="text-xs text-brand-muted">
                    Despachamos sets en café verde a tostadurías calificadas.
                  </p>
                </div>
                <Link
                  href="/cotizar"
                  className="btn-gold-solid text-[11px] py-2 px-3 whitespace-nowrap flex-shrink-0"
                >
                  Solicitar Muestra
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
