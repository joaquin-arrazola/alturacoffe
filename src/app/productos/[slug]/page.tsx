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
    <div className="pt-28 pb-24 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb navigation */}
        <nav aria-label="breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-brand-textMuted font-medium">
            <li>
              <Link href="/" className="hover:text-brand-primary transition-colors">
                Inicio
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/nuestro-cafe"
                className="hover:text-brand-primary transition-colors"
              >
                Nuestro Café
              </Link>
            </li>
            <li>/</li>
            <li className="text-brand-primary font-bold" aria-current="page">
              {coffee.name}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Media & Quick Stats */}
          <div className="lg:col-span-6 space-y-6">
            <div className="gold-card overflow-hidden relative h-[420px] w-full bg-gray-100 shadow-md">
              <Image
                src={coffee.image}
                alt={coffee.name}
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <span className="badge-sca absolute top-4 right-4 text-sm py-1.5 px-3">
                {coffee.scaScore} Pts SCA
              </span>

              <span className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md border border-gray-200 text-brand-primary text-xs font-bold rounded">
                Proceso {coffee.process}
              </span>
            </div>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="gold-card p-4 text-center bg-white border border-gray-200">
                <span className="text-[11px] uppercase tracking-wider text-brand-primary block font-bold mb-1">
                  Altitud
                </span>
                <span className="font-serif text-lg text-brand-textDark font-bold">
                  {coffee.altitude}
                </span>
              </div>

              <div className="gold-card p-4 text-center bg-white border border-gray-200">
                <span className="text-[11px] uppercase tracking-wider text-brand-primary block font-bold mb-1">
                  Proceso
                </span>
                <span className="font-serif text-lg text-brand-textDark font-bold">
                  {coffee.process}
                </span>
              </div>

              <div className="gold-card p-4 text-center bg-white border border-gray-200">
                <span className="text-[11px] uppercase tracking-wider text-brand-primary block font-bold mb-1">
                  Región
                </span>
                <span className="font-serif text-lg text-brand-textDark font-bold">
                  {coffee.region}
                </span>
              </div>

              <div className="gold-card p-4 text-center bg-white border border-gray-200">
                <span className="text-[11px] uppercase tracking-wider text-brand-primary block font-bold mb-1">
                  Cosecha
                </span>
                <span className="font-serif text-lg text-brand-textDark font-bold">
                  {coffee.harvest}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Spec Sheet Details & Purchase Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="brand-badge mb-3">
                Lote de Exportación Certificado
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-textDark mb-2">
                {coffee.name}
              </h1>
              <p className="font-serif italic text-lg text-brand-primary font-semibold">
                {coffee.farm} · {coffee.varietals}
              </p>
            </div>

            {/* Cup profile box */}
            <div className="p-5 rounded-lg bg-brand-primaryMuted border border-brand-primary/20">
              <span className="text-xs uppercase tracking-wider text-brand-primary font-bold block mb-2">
                Perfil de Taza & Notas Sensoriales:
              </span>
              <p className="font-serif text-xl sm:text-2xl text-brand-primary font-bold">
                {coffee.tastingNotes.join(" · ")}
              </p>
            </div>

            {/* Description */}
            <div>
              <h4 className="font-serif text-lg font-bold text-brand-textDark mb-2">
                Descripción del Lote y Terroir
              </h4>
              <p className="text-sm sm:text-base text-brand-textBody leading-relaxed">
                {coffee.longDescription}
              </p>
            </div>

            {/* Technical Specifications Table */}
            <div className="gold-card p-5 bg-white border border-gray-200">
              <h4 className="text-xs uppercase tracking-wider text-brand-primary font-bold mb-3 border-b border-gray-200 pb-2">
                Especificaciones de Comercio Exterior
              </h4>
              <dl className="grid grid-cols-2 gap-y-2.5 text-xs sm:text-sm">
                <dt className="text-brand-textMuted font-medium">Empaque de exportación:</dt>
                <dd className="text-right font-semibold text-brand-textDark">
                  {coffee.specs.packaging}
                </dd>

                <dt className="text-brand-textMuted font-medium">Condición habitual:</dt>
                <dd className="text-right font-semibold text-brand-textDark">
                  {coffee.specs.incoterm}
                </dd>

                <dt className="text-brand-textMuted font-medium">Humedad de exportación:</dt>
                <dd className="text-right font-semibold text-brand-textDark">
                  {coffee.specs.humidity}
                </dd>

                <dt className="text-brand-textMuted font-medium">Actividad de agua (aW):</dt>
                <dd className="text-right font-semibold text-brand-textDark">
                  {coffee.specs.waterActivity}
                </dd>

                <dt className="text-brand-textMuted font-medium">Disponibilidad mínima:</dt>
                <dd className="text-right font-semibold text-brand-textDark">
                  {coffee.specs.minOrder}
                </dd>

                <dt className="text-brand-textMuted font-medium">Zaranda / Malla:</dt>
                <dd className="text-right font-semibold text-brand-textDark">
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
