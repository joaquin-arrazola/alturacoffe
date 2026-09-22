import React from "react";
import Link from "next/link";
import { Package, Ship, FlaskConical, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exportación Global — Logística y Calidad | Altura Coffee Exports",
  description:
    "Detalles logísticos de exportación de café verde de especialidad boliviano: FOB Arica, empaque GrainPro, certificaciones de origen y control de humedad.",
};

export default function ExportacionPage() {
  return (
    <div className="pt-28 pb-24 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="brand-badge mb-3">Comercio Internacional</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-textDark mb-4">
            Estándares de Exportación
          </h1>
          <p className="text-base sm:text-lg text-brand-textBody leading-relaxed">
            Conectamos los valles interandinos de Bolivia con los principales
            puertos del mundo, garantizando integridad física y sensorial en cada
            embarque.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="gold-card p-8 flex flex-col justify-between bg-white border border-gray-200 shadow-soft">
            <div>
              <div className="w-12 h-12 rounded-lg bg-brand-primaryMuted border border-brand-primary/20 flex items-center justify-center text-brand-primary mb-6">
                <Package size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-textDark mb-3">
                Empaque Hermético GrainPro
              </h3>
              <p className="text-sm text-brand-textBody leading-relaxed">
                Cada lote se envasa en sacos de yute natural de 60 kg con forro
                hermético interior GrainPro multicapa, protegiendo el grano de la
                humedad relativa y la condensación marítima durante la travesía.
              </p>
            </div>
          </div>

          <div className="gold-card p-8 flex flex-col justify-between bg-white border border-gray-200 shadow-soft">
            <div>
              <div className="w-12 h-12 rounded-lg bg-brand-primaryMuted border border-brand-primary/20 flex items-center justify-center text-brand-primary mb-6">
                <Ship size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-textDark mb-3">
                Incoterms y Puerto de Arica
              </h3>
              <p className="text-sm text-brand-textBody leading-relaxed">
                Nuestra condición habitual es FOB Puerto de Arica (Chile).
                También coordinamos embarques CIF y CFR mediante navieras
                internacionales líderes (MSC, Maersk, Hapag-Lloyd) hacia cualquier
                destino.
              </p>
            </div>
          </div>

          <div className="gold-card p-8 flex flex-col justify-between bg-white border border-gray-200 shadow-soft">
            <div>
              <div className="w-12 h-12 rounded-lg bg-brand-primaryMuted border border-brand-primary/20 flex items-center justify-center text-brand-primary mb-6">
                <FlaskConical size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-textDark mb-3">
                Certificación y Laboratorio
              </h3>
              <p className="text-sm text-brand-textBody leading-relaxed">
                Cada lote cuenta con análisis físico-químico (humedad entre 10.5%
                y 11.5%, actividad de agua aW &lt; 0.60, densidad de grano),
                certificado fitosanitario SENASAG y ficha técnica SCA con puntaje
                certificado.
              </p>
            </div>
          </div>
        </div>

        {/* Protocol for New Buyers */}
        <div className="gold-card p-8 sm:p-12 mb-16 bg-white border border-gray-200 shadow-soft">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-primary mb-8 text-center">
            Protocolo para Nuevos Compradores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start">
              <span className="font-serif text-2xl font-bold text-brand-primary">
                1.
              </span>
              <div>
                <h4 className="font-serif text-lg font-bold text-brand-textDark mb-2">
                  Solicitud de Muestras Verdes
                </h4>
                <p className="text-sm text-brand-textBody leading-relaxed">
                  Enviamos sets de muestras de café verde (250g a 500g por lote)
                  vía courier internacional exprés (DHL / FedEx) para catación
                  previa y validación sensorial en su laboratorio de tostado.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="font-serif text-2xl font-bold text-brand-primary">
                2.
              </span>
              <div>
                <h4 className="font-serif text-lg font-bold text-brand-textDark mb-2">
                  Pedidos Mínimos (LCL & FCL)
                </h4>
                <p className="text-sm text-brand-textBody leading-relaxed">
                  Aceptamos pedidos consolidados (LCL) a partir de 5 sacos (300
                  kg netos) para tostadurías boutique, y contenedores completos
                  (FCL de 275 sacos / ~16.500 kg) para importadores y distribuidores
                  mayoristas.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="font-serif text-2xl font-bold text-brand-primary">
                3.
              </span>
              <div>
                <h4 className="font-serif text-lg font-bold text-brand-textDark mb-2">
                  Contratos de Compraventa
                </h4>
                <p className="text-sm text-brand-textBody leading-relaxed">
                  Operamos bajo contratos marco estándar de la Federación Europea
                  de Café (ECF) o la Green Coffee Association (GCA), con
                  condiciones de pago seguras (Cartas de Crédito, CAD) y total
                  transparencia.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="font-serif text-2xl font-bold text-brand-primary">
                4.
              </span>
              <div>
                <h4 className="font-serif text-lg font-bold text-brand-textDark mb-2">
                  Canales de Coordinación Directa
                </h4>
                <p className="text-sm text-brand-textBody leading-relaxed">
                  Mantenemos contacto en tiempo real vía WhatsApp y videollamadas
                  durante la preparación del lote, trilla, ensacado, precintado
                  del contenedor y expedición del Bill of Lading.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Callout */}
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/cotizar" className="btn-primary-solid px-8 py-3.5">
            Solicitar Muestras y Cotización
          </Link>
          <a
            href="https://wa.me/59171791570?text=Hola%20Altura%20Coffee%20Exports,%20tengo%20inter%C3%A9s%20en%20importar%20caf%C3%A9%20boliviano."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-outline px-8 py-3.5 inline-flex items-center gap-2"
          >
            <Phone size={16} />
            <span>Consultar por WhatsApp (+591 71791570)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
