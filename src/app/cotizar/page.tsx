"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { COFFEE_VARIETIES } from "@/data/coffeeData";
import {
  Phone,
  Mail,
  Send,
  CheckCircle,
  FileCheck2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

function QuotationFormContent() {
  const searchParams = useSearchParams();
  const initialLote = searchParams.get("lote") || "";

  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    pais: "",
    incoterm: "FOB Puerto de Arica (Chile)",
    loteId: initialLote,
    sacos: 5,
    mensaje: "",
  });

  useEffect(() => {
    if (initialLote) {
      setFormData((prev) => ({ ...prev, loteId: initialLote }));
    }
  }, [initialLote]);

  const [submitted, setSubmitted] = useState(false);

  const selectedCoffee = COFFEE_VARIETIES.find((c) => c.id === formData.loteId);

  const whatsappMessage = `Hola Altura Coffee Exports, solicito cotización formal:%0A%0A- Nombre: ${encodeURIComponent(
    formData.nombre
  )}%0A- Empresa: ${encodeURIComponent(formData.empresa || "N/A")}%0A- Email: ${encodeURIComponent(
    formData.email
  )}%0A- Teléfono: ${encodeURIComponent(formData.telefono || "N/A")}%0A- País Destino: ${encodeURIComponent(
    formData.pais || "N/A"
  )}%0A- Incoterm: ${encodeURIComponent(formData.incoterm)}%0A- Lote: ${encodeURIComponent(
    selectedCoffee ? `${selectedCoffee.name} (${selectedCoffee.process})` : "General"
  )}%0A- Cantidad: ${formData.sacos} sacos (60kg)%0A- Requerimientos: ${encodeURIComponent(
    formData.mensaje || "Envío de ficha y muestras"
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="gold-badge mb-3">Comercio Exterior & Exportación</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-textWhite mb-4">
            Solicitud de Lotes y Muestras
          </h1>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Conectamos nuestras cosechas de altura con tu tostaduría en
            cualquier parte del mundo. Selecciona tu lote de interés y
            coordinaremos disponibilidad, perfiles analíticos de cata y opciones
            de embarque.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 gold-card p-6 sm:p-10">
            <h3 className="font-serif text-2xl font-bold text-brand-textWhite mb-6">
              Datos para Cotización y Envío de Muestras
            </h3>

            {submitted ? (
              <div className="p-8 rounded-xl bg-brand-gold/15 border border-brand-gold text-center space-y-4 animate-in fade-in duration-300">
                <CheckCircle size={48} className="text-brand-gold mx-auto" />
                <h4 className="font-serif text-2xl font-bold text-white">
                  ¡Solicitud Registrada Exitosamente!
                </h4>
                <p className="text-sm text-brand-muted max-w-md mx-auto">
                  Hemos recibido los requerimientos de tu tostaduría para el lote{" "}
                  <strong className="text-brand-gold">
                    {selectedCoffee ? selectedCoffee.name : "seleccionado"}
                  </strong>{" "}
                  ({formData.sacos} sacos, {formData.incoterm}).
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`https://wa.me/59171791570?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold-solid py-3 px-6 text-xs inline-flex items-center gap-2"
                  >
                    <span>Enviar a WhatsApp Ahora</span>
                    <ArrowRight size={14} />
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-gold-outline py-3 px-6 text-xs"
                  >
                    Editar Solicitud
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-brand-gold mb-1">
                      Nombre del Contacto *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Klaus Weber"
                      value={formData.nombre}
                      onChange={(e) =>
                        setFormData({ ...formData, nombre: e.target.value })
                      }
                      className="w-full bg-[#120f0d] border border-brand-gold/30 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-brand-gold mb-1">
                      Empresa / Tostaduría
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Hanseatic Specialty Coffee"
                      value={formData.empresa}
                      onChange={(e) =>
                        setFormData({ ...formData, empresa: e.target.value })
                      }
                      className="w-full bg-[#120f0d] border border-brand-gold/30 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-brand-gold mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nombre@empresa.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-[#120f0d] border border-brand-gold/30 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-brand-gold mb-1">
                      WhatsApp Internacional
                    </label>
                    <input
                      type="tel"
                      placeholder="+49 170 1234567"
                      value={formData.telefono}
                      onChange={(e) =>
                        setFormData({ ...formData, telefono: e.target.value })
                      }
                      className="w-full bg-[#120f0d] border border-brand-gold/30 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-brand-gold mb-1">
                      País de Destino
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Alemania, EE.UU., Japón"
                      value={formData.pais}
                      onChange={(e) =>
                        setFormData({ ...formData, pais: e.target.value })
                      }
                      className="w-full bg-[#120f0d] border border-brand-gold/30 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-brand-gold mb-1">
                      Incoterm Preferido
                    </label>
                    <select
                      value={formData.incoterm}
                      onChange={(e) =>
                        setFormData({ ...formData, incoterm: e.target.value })
                      }
                      className="w-full bg-[#120f0d] border border-brand-gold/30 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-gold"
                    >
                      <option value="FOB Puerto de Arica (Chile)">
                        FOB Puerto de Arica (Chile)
                      </option>
                      <option value="CIF (Puerto de destino)">
                        CIF (Puerto de destino)
                      </option>
                      <option value="CFR (Costo y flete)">
                        CFR (Costo y flete)
                      </option>
                      <option value="EXW (La Paz, Bolivia)">
                        EXW (La Paz, Bolivia)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-8">
                    <label className="block text-xs uppercase font-semibold text-brand-gold mb-1">
                      Lote de Interés
                    </label>
                    <select
                      value={formData.loteId}
                      onChange={(e) =>
                        setFormData({ ...formData, loteId: e.target.value })
                      }
                      className="w-full bg-[#120f0d] border border-brand-gold/30 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-gold"
                    >
                      <option value="">-- Seleccionar lote o cotización general --</option>
                      {COFFEE_VARIETIES.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name} ({c.process}, {c.scaScore} SCA)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-4">
                    <label className="block text-xs uppercase font-semibold text-brand-gold mb-1">
                      Cantidad (Sacos 60kg)
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={500}
                      value={formData.sacos}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          sacos: parseInt(e.target.value) || 1,
                        })
                      }
                      className="w-full bg-[#120f0d] border border-brand-gold/30 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-brand-gold mb-1">
                    Requerimientos Específicos o Envío de Muestras
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Indícanos si necesitas muestras de café verde para cata en laboratorio, fechas estimadas de embarque o zarandas específicas..."
                    value={formData.mensaje}
                    onChange={(e) =>
                      setFormData({ ...formData, mensaje: e.target.value })
                    }
                    className="w-full bg-[#120f0d] border border-brand-gold/30 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-gold"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold-solid w-full py-3.5 flex items-center justify-center gap-2 text-xs"
                >
                  <Send size={15} />
                  <span>ENVIAR SOLICITUD DE COTIZACIÓN</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Info & Export Standards */}
          <div className="lg:col-span-5 gold-card p-6 sm:p-10 space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-brand-gold mb-2">
                Atención Directa
              </h3>
              <p className="text-xs text-brand-muted mb-6">
                Para importadores que requieren respuesta ágil, disponibilidad
                en tiempo real o confirmación de sets de muestras:
              </p>

              {/* WhatsApp card */}
              <div className="p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 mb-4 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-brand-muted font-bold block">
                    WhatsApp Comercial
                  </span>
                  <a
                    href="https://wa.me/59171791570?text=Hola%20Altura%20Coffee%20Exports,%20deseo%20solicitar%20informaci%C3%B3n%20y%20cotizaci%C3%B3n."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-lg font-bold text-white hover:text-brand-gold transition-colors"
                  >
                    +591 71791570
                  </a>
                </div>
              </div>

              {/* Email card */}
              <div className="p-4 rounded-xl bg-brand-gold/10 border border-brand-gold/30 mb-6 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-brand-muted font-bold block">
                    Comercio Exterior
                  </span>
                  <a
                    href="mailto:export@alturacoffee.com"
                    className="font-serif text-base font-bold text-white hover:text-brand-gold transition-colors block"
                  >
                    export@alturacoffee.com
                  </a>
                </div>
              </div>

              {/* Standards Checklist */}
              <div className="pt-4 border-t border-brand-gold/15">
                <h5 className="text-xs uppercase tracking-wider text-brand-gold font-bold mb-4">
                  Estándares de Exportación
                </h5>
                <ul className="space-y-3 text-xs text-brand-muted">
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck size={16} className="text-brand-gold flex-shrink-0 mt-0.5" />
                    <span>Muestras verdes de 250g con ficha analítica SCA.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck size={16} className="text-brand-gold flex-shrink-0 mt-0.5" />
                    <span>Sacos de yute de 60 kg protegidos con bolsa GrainPro / Ecotact.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck size={16} className="text-brand-gold flex-shrink-0 mt-0.5" />
                    <span>Trazabilidad de finca, piso ecológico y altitud certificada.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck size={16} className="text-brand-gold flex-shrink-0 mt-0.5" />
                    <span>Logística de consolidación FOB Puerto de Arica o CIF global.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-brand-gold/15 text-xs text-brand-dim">
                ¿Solo deseas hacer una consulta institucional? Visita nuestra página de{" "}
                <Link href="/contacto" className="text-brand-gold hover:underline">
                  Contacto
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CotizarPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-32 text-center text-brand-gold">
          Cargando formulario de cotización...
        </div>
      }
    >
      <QuotationFormContent />
    </Suspense>
  );
}
