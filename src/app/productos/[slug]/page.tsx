import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COFFEE_VARIETIES, getCoffeeBySlug } from "@/data/coffeeData";
import { ProductActions } from "@/components/ProductActions";
import type { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return COFFEE_VARIETIES.map((c) => ({
    slug: c.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const coffee = getCoffeeBySlug(params.slug);
  if (!coffee) return { title: "Café no encontrado" };

  return {
    title: `${coffee.name} (${coffee.scaScore} SCA) — Altura Coffee Exports`,
    description: coffee.description,
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const coffee = getCoffeeBySlug(params.slug);

  if (!coffee) {
    notFound();
  }

  return (
    <div className="pt-28 pb-24 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb navigation */}
        <nav aria-label="breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-brand-muted">
            <li>
              <Link href="/" className="hover:text-brand-gold transition-colors">
                Inicio
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/nuestro-cafe"
                className="hover:text-brand-gold transition-colors"
              >
                Nuestro Café
              </Link>
            </li>
            <li>/</li>
            <li className="text-brand-gold font-semibold" aria-current="page">
              {coffee.name}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Media & Quick Stats */}
          <div className="lg:col-span-6 space-y-6">
            <div className="gold-card overflow-hidden relative h-[420px] w-full bg-black/60 shadow-2xl">
              <Image
                src={coffee.image}
                alt={coffee.name}
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <span className="badge-sca absolute top-4 right-4 text-sm py-1.5 px-3">
                {coffee.scaScore} Pts SCA
              </span>

              <span className="gold-badge absolute bottom-4 left-4 bg-black/90">
                Proceso {coffee.process}
              </span>
            </div>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="gold-card p-4 text-center">
                <span className="text-[11px] uppercase tracking-wider text-brand-gold block font-semibold mb-1">
                  Altitud
                </span>
                <span className="font-serif text-lg text-brand-textWhite font-bold">
                  {coffee.altitude}
                </span>
              </div>

              <div className="gold-card p-4 text-center">
                <span className="text-[11px] uppercase tracking-wider text-brand-gold block font-semibold mb-1">
                  Proceso
                </span>
                <span className="font-serif text-lg text-brand-textWhite font-bold">
                  {coffee.process}
                </span>
              </div>

              <div className="gold-card p-4 text-center">
                <span className="text-[11px] uppercase tracking-wider text-brand-gold block font-semibold mb-1">
                  Región
                </span>
                <span className="font-serif text-lg text-brand-textWhite font-bold">
                  {coffee.region}
                </span>
              </div>

              <div className="gold-card p-4 text-center">
                <span className="text-[11px] uppercase tracking-wider text-brand-gold block font-semibold mb-1">
                  Cosecha
                </span>
                <span className="font-serif text-lg text-brand-textWhite font-bold">
                  {coffee.harvest}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Spec Sheet Details & Purchase Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="gold-badge mb-3">
                Lote de Exportación Certificado
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-textWhite mb-2">
                {coffee.name}
              </h1>
              <p className="font-serif italic text-lg text-brand-gold">
                {coffee.farm} · {coffee.varietals}
              </p>
            </div>

            {/* Cup profile box */}
            <div className="p-5 rounded-lg bg-brand-gold/10 border border-brand-gold/30">
              <span className="text-xs uppercase tracking-wider text-brand-gold font-bold block mb-2">
                Perfil de Taza & Notas Sensoriales:
              </span>
              <p className="font-serif text-xl sm:text-2xl text-brand-goldLight font-bold">
                {coffee.tastingNotes.join(" · ")}
              </p>
            </div>

            {/* Description */}
            <div>
              <h4 className="font-serif text-lg font-bold text-brand-gold mb-2">
                Descripción del Lote y Terroir
              </h4>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                {coffee.longDescription}
              </p>
            </div>

            {/* Technical Specifications Table */}
            <div className="gold-card p-5">
              <h4 className="text-xs uppercase tracking-wider text-brand-gold font-bold mb-3 border-b border-brand-gold/15 pb-2">
                Especificaciones de Comercio Exterior
              </h4>
              <dl className="grid grid-cols-2 gap-y-2.5 text-xs sm:text-sm">
                <dt className="text-brand-muted">Empaque de exportación:</dt>
                <dd className="text-right font-semibold text-brand-textWhite">
                  {coffee.specs.packaging}
                </dd>

                <dt className="text-brand-muted">Condición habitual:</dt>
                <dd className="text-right font-semibold text-brand-textWhite">
                  {coffee.specs.incoterm}
                </dd>

                <dt className="text-brand-muted">Humedad de exportación:</dt>
                <dd className="text-right font-semibold text-brand-textWhite">
                  {coffee.specs.humidity}
                </dd>

                <dt className="text-brand-muted">Actividad de agua (aW):</dt>
                <dd className="text-right font-semibold text-brand-textWhite">
                  {coffee.specs.waterActivity}
                </dd>

                <dt className="text-brand-muted">Disponibilidad mínima:</dt>
                <dd className="text-right font-semibold text-brand-textWhite">
                  {coffee.specs.minOrder}
                </dd>

                <dt className="text-brand-muted">Zaranda / Malla:</dt>
                <dd className="text-right font-semibold text-brand-textWhite">
                  {coffee.specs.screenSize}
                </dd>
              </dl>
            </div>

            {/* Client Interactive Actions */}
            <ProductActions coffee={coffee} />
          </div>
        </div>
      </div>
    </div>
  );
}
