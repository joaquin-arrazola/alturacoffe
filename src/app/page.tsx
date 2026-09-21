import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COFFEE_VARIETIES } from "@/data/coffeeData";
import { IMAGES } from "@/data/images";
import { ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center justify-center text-center overflow-hidden pt-24 pb-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.heroBg}
            alt="Montañas andinas y plantaciones de café de especialidad"
            fill
            priority
            className="object-cover object-center filter brightness-[0.72] contrast-[1.1]"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/50 to-[#0c0b0a]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0c0b0a]/30 to-[#0c0b0a]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-block py-1.5 px-4 mb-6 rounded-full border border-brand-gold/40 bg-brand-dark/70 text-brand-gold text-xs uppercase tracking-[0.25em] font-bold backdrop-blur-md">
            EXPORTADORA DE CAFÉ ESPECIALIDAD
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-brand-textWhite leading-[1.1] mb-6">
            <span>El Café de las</span>
            <br />
            <span>Alturas,</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfbe7d] via-[#c5a059] to-[#aa8954]">
              Para el Mundo
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed mb-10">
            Conectamos los mejores cafés de alta montaña con importadores, tostadores
            y compradores internacionales que exigen lo extraordinario.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link href="/cotizar" className="btn-gold-solid w-full sm:w-auto px-8 py-3.5">
              SOLICITAR COTIZACIÓN
            </Link>
            <Link href="/nuestro-cafe" className="btn-gold-outline w-full sm:w-auto px-8 py-3.5">
              CONOCER VARIEDADES
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-gold/70 animate-bounce">
          <span className="text-[10px] tracking-widest uppercase">Explorar</span>
          <ChevronDown size={18} />
        </div>
      </section>

      {/* 2. METRICS BAR */}
      <section className="bg-[#110f0d] border-y border-brand-gold/20 py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-brand-gold/15">
            <div className="pt-4 lg:pt-0">
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-gold">
                2.400m
              </div>
              <div className="text-xs sm:text-sm text-brand-muted mt-2 tracking-wide">
                Altitud promedio de cultivo
              </div>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-gold">
                15+
              </div>
              <div className="text-xs sm:text-sm text-brand-muted mt-2 tracking-wide">
                Años de experiencia exportadora
              </div>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-gold">
                30+
              </div>
              <div className="text-xs sm:text-sm text-brand-muted mt-2 tracking-wide">
                Países destino
              </div>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-gold">
                100%
              </div>
              <div className="text-xs sm:text-sm text-brand-muted mt-2 tracking-wide">
                Café de especialidad certificado
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VARIETIES SECTION */}
      <section className="py-24 bg-brand-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="gold-badge mb-3">NUESTRAS VARIEDADES</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-textWhite mb-4">
              Perfiles de Sabor Excepcionales
            </h2>
            <p className="text-brand-muted leading-relaxed">
              Cada variedad es seleccionada a mano en las laderas de los Andes,
              procesada con precisión y exportada en su punto óptimo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COFFEE_VARIETIES.map((coffee) => (
              <article
                key={coffee.id}
                className="gold-card flex flex-col overflow-hidden group"
              >
                {/* Image container */}
                <div className="relative h-64 w-full overflow-hidden bg-black/50">
                  <Image
                    src={coffee.image}
                    alt={coffee.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171512] via-transparent to-transparent opacity-80" />
                  
                  {/* SCA Badge */}
                  <span className="badge-sca absolute top-3 right-3 shadow-lg">
                    {coffee.scaScore} SCA
                  </span>

                  {/* Process Tag */}
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/80 backdrop-blur-sm border border-brand-gold/30 text-brand-gold text-xs font-semibold rounded">
                    {coffee.process}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-brand-textWhite group-hover:text-brand-gold transition-colors">
                      {coffee.name}
                    </h3>
                    <p className="text-xs text-brand-dim mt-1">
                      {coffee.region} · {coffee.altitude}
                    </p>

                    <p className="font-serif italic text-sm text-brand-goldLight mt-3 mb-3">
                      {coffee.tastingNotes.join(" · ")}
                    </p>

                    <p className="text-sm text-brand-muted leading-relaxed line-clamp-3">
                      {coffee.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-brand-gold/15 flex items-center justify-between">
                    <Link
                      href={`/productos/${coffee.slug}`}
                      className="text-xs font-semibold text-brand-gold hover:text-brand-goldLight inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Ficha técnica</span>
                      <ArrowRight size={13} />
                    </Link>

                    <a
                      href={`https://wa.me/59171791570?text=Hola%20Altura%20Coffee%20Exports%2C%20solicito%20cotizaci%C3%B3n%20para%20el%20lote%20${encodeURIComponent(
                        coffee.name
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-brand-muted hover:text-brand-gold inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/nuestro-cafe" className="btn-gold-outline px-8 py-3">
              VER CATÁLOGO COMPLETO
            </Link>
          </div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section className="relative py-24 bg-[#0e0c0a] overflow-hidden">
        {/* Process Background with dark luxury overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.processBg}
            alt="Sacos de yute y café verde de exportación"
            fill
            className="object-cover object-center opacity-25 filter grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0b0a] via-[#0e0c0a]/90 to-[#0c0b0a]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="gold-badge mb-3">PROCESO DE EXPORTACIÓN</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-textWhite mb-4">
              De la Montaña a Tu Tostadora
            </h2>
            <p className="text-brand-muted leading-relaxed">
              Un proceso riguroso que garantiza trazabilidad completa, calidad
              consistente y entrega puntual en cualquier destino del mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Selección en Origen",
                desc: "Visitamos cada finca, evaluamos el terroir andino y seleccionamos únicamente los lotes que superan 85+ puntos SCA.",
              },
              {
                step: "02",
                title: "Control de Calidad",
                desc: "Catación profesional SCA por Q-Graders certificados, análisis riguroso de humedad y densidad con ficha técnica completa.",
              },
              {
                step: "03",
                title: "Procesamiento",
                desc: "Beneficiado húmedo o seco según la variedad. Secado controlado en camas africanas para preservar los precursores aromáticos.",
              },
              {
                step: "04",
                title: "Exportación Global",
                desc: "Empaque hermético GrainPro, documentación de origen y logística marítima FOB Arica hacia más de 30 países del mundo.",
              },
            ].map((p) => (
              <div
                key={p.step}
                className="gold-card p-6 flex flex-col justify-between relative group hover:border-brand-gold/60"
              >
                <div>
                  <span className="font-serif text-3xl sm:text-4xl font-black text-brand-gold/40 group-hover:text-brand-gold transition-colors">
                    {p.step}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-brand-textWhite mt-4 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUOTE BANNER */}
      <section className="relative h-80 sm:h-96 flex items-center justify-center text-center overflow-hidden">
        <Image
          src={IMAGES.harvestQuote}
          alt="Cosecha de café en las montañas bolivianas"
          fill
          className="object-cover object-center filter brightness-50"
        />
        <div className="absolute inset-0 bg-[#0c0b0a]/60 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-3xl px-4">
          <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl italic font-bold text-brand-textWhite drop-shadow-lg">
            “Cada grano, una historia de altura.”
          </blockquote>
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] font-semibold mt-4">
            Cordillera de los Andes · Bolivia
          </p>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-24 bg-gradient-to-b from-brand-dark to-[#14100c] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="gold-badge mb-4">TRABAJA CON NOSOTROS</span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-brand-textWhite mb-6 leading-tight">
            ¿Buscas café de especialidad para tu mercado?
          </h2>
          <p className="text-base sm:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed mb-10">
            Trabajamos con importadores, tostadores artesanales y compradores
            mayoristas que valoran la trazabilidad, el comercio ético y la calidad
            excepcional.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link href="/cotizar" className="btn-gold-solid px-8 py-3.5 w-full sm:w-auto">
              SOLICITAR COTIZACIÓN
            </Link>
            <Link href="/nuestro-cafe" className="btn-gold-outline px-8 py-3.5 w-full sm:w-auto">
              VER CATÁLOGO
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
