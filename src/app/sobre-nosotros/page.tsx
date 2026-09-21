import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/data/images";
import { ShieldCheck, HeartHandshake, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros — Pasión por el Café Andino | Altura Coffee Exports",
  description:
    "Conoce la historia, visión y compromiso ético de Altura Coffee Exports con las familias caficultoras de Yungas y Caranavi en Bolivia.",
};

export default function SobreNosotrosPage() {
  return (
    <div className="pt-28 pb-24 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="gold-badge mb-3">Nuestra Esencia</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-textWhite mb-4">
            La Historia Detrás de Cada Grano
          </h1>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Nacidos en el corazón de los Andes bolivianos, uniendo ciencia
            agronómica, catación de alta precisión y comercio directo con el
            mundo.
          </p>
        </div>

        {/* Story Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6">
            <div className="gold-card overflow-hidden relative h-96 w-full rounded-xl shadow-2xl">
              <Image
                src={IMAGES.terroirAndino}
                alt="Valle cafetero andino y cordillera de los Andes"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="gold-badge">El Terroir Boliviano</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-textWhite">
              Altitud Extrema, Sabor Extraordinario
            </h2>
            <p className="text-base text-brand-muted leading-relaxed">
              Las condiciones geográficas de Bolivia son únicas en el mundo
              cafetero: cultivos situados entre los 1.600 y 2.400 metros sobre el
              nivel del mar, con una marcada amplitud térmica entre el día y la
              noche. Esta altitud extrema retarda la maduración de la cereza,
              concentrando azúcares naturales, acidez fosfórica y una densidad de
              grano inigualable.
            </p>
            <p className="text-base text-brand-muted leading-relaxed">
              En <strong className="text-brand-textWhite">Altura Coffee Exports</strong>{" "}
              trabajamos mano a mano con familias productoras de Coroico, Caranavi y
              Sud Yungas, implementando prácticas de cosecha selectiva y beneficiado
              de precisión que dignifican el trabajo campesino y enaltecen el
              origen andino.
            </p>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="gold-card p-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-5">
              <ShieldCheck size={26} />
            </div>
            <h4 className="font-serif text-xl font-bold text-brand-textWhite mb-2">
              Trazabilidad Total
            </h4>
            <p className="text-sm text-brand-muted leading-relaxed">
              Cada saco de exportación posee trazabilidad completa de finca,
              lote, altitud, día de recolección y curva de secado registrada.
            </p>
          </div>

          <div className="gold-card p-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-5">
              <HeartHandshake size={26} />
            </div>
            <h4 className="font-serif text-xl font-bold text-brand-textWhite mb-2">
              Comercio Ético
            </h4>
            <p className="text-sm text-brand-muted leading-relaxed">
              Pagamos precios muy por encima del mercado bursátil de commodities,
              reconociendo el esfuerzo del productor por alcanzar puntajes 85+ SCA.
            </p>
          </div>

          <div className="gold-card p-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-5">
              <Award size={26} />
            </div>
            <h4 className="font-serif text-xl font-bold text-brand-textWhite mb-2">
              Calidad de Taza SCA
            </h4>
            <p className="text-sm text-brand-muted leading-relaxed">
              Catación rigurosa por catadores certificados bajo protocolo
              internacional antes de consolidar y precintar cada lote de embarque.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/nuestro-cafe" className="btn-gold-solid px-8 py-3.5">
            Explorar Variedades
          </Link>
          <Link href="/contacto" className="btn-gold-outline px-8 py-3.5">
            Contactar al Equipo
          </Link>
        </div>
      </div>
    </div>
  );
}
