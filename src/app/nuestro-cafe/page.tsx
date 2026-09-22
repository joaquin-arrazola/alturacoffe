"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { COFFEE_VARIETIES } from "@/data/coffeeData";
import { ArrowRight } from "lucide-react";

export default function NuestroCafePage() {
  const [selectedProcess, setSelectedProcess] = useState<string>("all");

  const filteredVarieties =
    selectedProcess === "all"
      ? COFFEE_VARIETIES
      : COFFEE_VARIETIES.filter(
          (c) => c.process.toLowerCase() === selectedProcess.toLowerCase()
        );

  return (
    <div className="pt-28 pb-24 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="brand-badge mb-3">Catálogo de Exportación</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-textDark mb-4">
            Nuestros Cafés de Alta Montaña
          </h1>
          <p className="text-base sm:text-lg text-brand-textBody leading-relaxed">
            Micro-lotes trazables cultivados por encima de los 1.600 metros en los
            valles andinos de Bolivia. Cada lote cuenta con ficha técnica
            certificada y disponibilidad para exportación global.
          </p>
        </div>

        {/* Process Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setSelectedProcess("all")}
            className={`px-4 py-1.5 rounded-sm text-xs font-bold tracking-wider transition-all duration-200 ${
              selectedProcess === "all"
                ? "bg-brand-primary text-white shadow-sm"
                : "bg-white hover:bg-gray-50 text-brand-textBody border border-gray-300"
            }`}
          >
            Todos los lotes
          </button>

          <span className="text-gray-300 hidden sm:inline-block">|</span>
          <span className="text-brand-primary text-xs font-bold hidden sm:inline-block">
            Proceso:
          </span>

          {["Lavado", "Natural", "Honey"].map((proc) => (
            <button
              key={proc}
              onClick={() => setSelectedProcess(proc.toLowerCase())}
              className={`px-4 py-1.5 rounded-sm text-xs font-bold tracking-wider transition-all duration-200 ${
                selectedProcess === proc.toLowerCase()
                  ? "bg-brand-primary text-white shadow-sm"
                  : "bg-white hover:bg-gray-50 text-brand-textBody border border-gray-300"
              }`}
            >
              {proc}
            </button>
          ))}
        </div>

        {/* Coffee Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVarieties.map((coffee) => (
            <article
              key={coffee.id}
              className="gold-card flex flex-col h-full overflow-hidden group bg-white border border-gray-200"
            >
              {/* Image with badges */}
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <Image
                  src={coffee.image}
                  alt={coffee.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

                <span className="badge-sca absolute top-3 right-3 shadow-md">
                  {coffee.scaScore} SCA
                </span>

                <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm border border-gray-200 text-brand-primary text-xs font-bold rounded">
                  {coffee.process}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brand-textDark mb-1">
                    {coffee.name}
                  </h3>
                  <p className="text-xs text-brand-textMuted mb-3">
                    {coffee.region} · {coffee.altitude}
                  </p>

                  <p className="font-serif italic text-sm text-brand-primary font-semibold mb-3">
                    {coffee.tastingNotes.join(" · ")}
                  </p>

                  <div className="text-xs text-brand-textBody mb-4">
                    Variedad:{" "}
                    <strong className="text-brand-textDark font-semibold">
                      {coffee.varietals}
                    </strong>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-textBody leading-relaxed line-clamp-3 mb-6">
                    {coffee.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/productos/${coffee.slug}`}
                    className="text-xs font-bold text-brand-primary hover:text-brand-primaryLight inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Ver Ficha Completa</span>
                    <ArrowRight size={13} />
                  </Link>

                  <a
                    href={`https://wa.me/59171791570?text=Hola%20Altura%20Coffee%20Exports%2C%20solicito%20informaci%C3%B3n%20y%20cotizaci%C3%B3n%20del%20lote%20${encodeURIComponent(
                      coffee.name
                    )}%20(${encodeURIComponent(coffee.process)}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-solid text-[11px] py-1.5 px-3 inline-flex items-center gap-1"
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
