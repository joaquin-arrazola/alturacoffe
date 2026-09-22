"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  ArrowRight,
  Send,
  CheckCircle,
} from "lucide-react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="brand-badge mb-3">Comunicación & Alianzas</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-textDark mb-4">
            Contacto y Atención Comercial
          </h1>
          <p className="text-base sm:text-lg text-brand-textBody leading-relaxed">
            Estamos a tu disposición para coordinar pedidos, resolver
            inquietudes sobre nuestras cosechas o programar sesiones de cata y
            muestras para tu equipo.
          </p>
        </div>

        {/* Highlight Banner to Cotizar */}
        <div className="gold-card p-6 sm:p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 bg-white border border-gray-200 shadow-soft">
          <div>
            <h4 className="font-serif text-xl font-bold text-brand-primary mb-1">
              ¿Buscas cotizar un lote específico o solicitar muestras?
            </h4>
            <p className="text-sm text-brand-textBody">
              Utiliza nuestro formulario especializado de exportación con
              selección de variedad, quintales e Incoterms.
            </p>
          </div>
          <Link
            href="/cotizar"
            className="btn-primary-solid text-xs py-3 px-6 whitespace-nowrap flex items-center gap-2 flex-shrink-0"
          >
            <span>Ir a Solicitud de Cotización</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-6 gold-card p-6 sm:p-10 space-y-6 bg-white border border-gray-200 shadow-soft">
            <h3 className="font-serif text-2xl font-bold text-brand-primary mb-6">
              Canales de Atención Directa
            </h3>

            {/* WhatsApp */}
            <div className="p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-brand-textMuted font-bold block">
                  WhatsApp Comercial Directo
                </span>
                <a
                  href="https://wa.me/59171791570?text=Hola%20Altura%20Coffee%20Exports,%20deseo%20comunicarme%20con%20ustedes."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-xl font-bold text-brand-textDark hover:text-brand-primary transition-colors"
                >
                  +591 71791570
                </a>
                <p className="text-xs text-brand-textMuted font-medium mt-0.5">
                  Atención inmediata para tostadores e importadores
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="p-4 rounded-xl bg-brand-primaryMuted border border-brand-primary/20 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center flex-shrink-0">
                <Mail size={22} />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-brand-textMuted font-bold block">
                  Comercio Exterior & Ventas
                </span>
                <a
                  href="mailto:export@alturacoffee.com"
                  className="font-serif text-base sm:text-lg font-bold text-brand-textDark hover:text-brand-primary transition-colors block"
                >
                  export@alturacoffee.com
                </a>
                <a
                  href="mailto:info@alturacoffee.com"
                  className="text-xs text-brand-textBody hover:text-brand-primary transition-colors font-medium"
                >
                  info@alturacoffee.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 text-brand-primary flex items-center justify-center flex-shrink-0">
                <Clock size={22} />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-brand-textMuted font-bold block">
                  Horario de Atención Internacional
                </span>
                <p className="text-sm text-brand-textDark font-semibold">
                  Lunes a Viernes: 08:30 – 18:30 (GMT-4 / Bolivia)
                </p>
                <p className="text-xs text-brand-textMuted font-medium mt-0.5">
                  Respuesta a consultas en menos de 24 horas hábiles
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="pt-4 border-t border-gray-200">
              <h5 className="text-xs uppercase tracking-wider text-brand-primary font-bold mb-4">
                Redes Sociales Oficiales
              </h5>
              <div className="space-y-3">
                <a
                  href="https://instagram.com/doctorvico25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-brand-textBody hover:text-brand-primary transition-colors text-sm font-medium"
                >
                  <Instagram size={18} className="text-brand-primary" />
                  <span>
                    Instagram: <strong className="text-brand-textDark">@doctorvico25</strong>
                  </span>
                </a>

                <a
                  href="https://facebook.com/Vicoarraz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-brand-textBody hover:text-brand-primary transition-colors text-sm font-medium"
                >
                  <Facebook size={18} className="text-brand-primary" />
                  <span>
                    Facebook: <strong className="text-brand-textDark">Vicoarraz</strong>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Origin Info & Message Form */}
          <div className="lg:col-span-6 gold-card p-6 sm:p-10 space-y-6 bg-white border border-gray-200 shadow-soft">
            <div>
              <h3 className="font-serif text-2xl font-bold text-brand-primary mb-3">
                Origen y Zonas de Cosecha
              </h3>
              <p className="text-sm text-brand-textBody leading-relaxed mb-4">
                Altura Coffee Exports opera en las regiones cafetaleras más
                prestigiosas de los Andes bolivianos, acopiando y beneficiando
                microlotes en los pisos ecológicos de{" "}
                <strong className="text-brand-textDark">
                  Caranavi, Yungas y Franz Tamayo
                </strong>
                , a altitudes comprendidas entre 1.600 y 2.400 msnm.
              </p>

              <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 text-xs text-brand-textBody space-y-1.5 mb-8">
                <div className="text-brand-primary font-bold mb-1">
                  Puntos Logísticos de Exportación:
                </div>
                <div>• Centros de Acopio y Beneficio: Valles de Caranavi & Yungas</div>
                <div>• Control de Calidad: Mesa de cata Q-Grader certificada</div>
                <div>• Puerto de Embarque Principal: Puerto de Arica (Chile)</div>
              </div>
            </div>

            {/* Direct Message Form */}
            <div>
              <h4 className="font-serif text-xl font-bold text-brand-textDark mb-4">
                Envíanos un Mensaje
              </h4>

              {submitted ? (
                <div className="p-6 rounded-lg bg-brand-primaryMuted border border-brand-primary text-center animate-in fade-in duration-300">
                  <CheckCircle size={36} className="text-brand-primary mx-auto mb-2" />
                  <h5 className="font-serif text-lg font-bold text-brand-textDark mb-1">
                    ¡Mensaje recibido con éxito!
                  </h5>
                  <p className="text-xs text-brand-textBody">
                    Nuestro equipo de comercio exterior te contactará en menos de 24
                    horas hábiles.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ nombre: "", email: "", mensaje: "" });
                    }}
                    className="mt-4 text-xs font-bold text-brand-primary underline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase font-bold text-brand-primary mb-1">
                      Tu Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) =>
                        setFormData({ ...formData, nombre: e.target.value })
                      }
                      placeholder="Nombre completo"
                      className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-2.5 text-sm text-brand-textDark focus:outline-none focus:border-brand-primary focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-brand-primary mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="nombre@correo.com"
                      className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-2.5 text-sm text-brand-textDark focus:outline-none focus:border-brand-primary focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-brand-primary mb-1">
                      Mensaje o Consulta
                    </label>
                    <textarea
                      rows={4}
                      value={formData.mensaje}
                      onChange={(e) =>
                        setFormData({ ...formData, mensaje: e.target.value })
                      }
                      placeholder="Escribe tu consulta sobre cosechas, visitas o cotizaciones..."
                      className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-2.5 text-sm text-brand-textDark focus:outline-none focus:border-brand-primary focus:bg-white transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary-solid w-full py-3 flex items-center justify-center gap-2 text-xs"
                  >
                    <Send size={14} />
                    <span>ENVIAR MENSAJE DIRECTO</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
