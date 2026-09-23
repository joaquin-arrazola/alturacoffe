import React from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { Phone, /* Instagram, */ Facebook, Lock, ArrowRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#eaedf1] border-t border-gray-200 pt-16 pb-12 text-brand-textBody">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-300">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <BrandLogo href="/" variant="footer" />
            <p className="mt-4 text-sm text-brand-textBody leading-relaxed max-w-sm">
              Café de especialidad de alta montaña boliviana, cultivado con tradición
              ancestral en los Andes y exportado con excelencia técnica a tostadurías
              e importadores del mundo entero.
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-brand-primary font-bold">
              Desde las alturas, al mundo
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.18em] text-brand-primary mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-primary font-medium transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nuestro-cafe" className="hover:text-brand-primary font-medium transition-colors">
                  Nuestro Café
                </Link>
              </li>
              <li>
                <Link href="/exportacion" className="hover:text-brand-primary font-medium transition-colors">
                  Exportación
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="hover:text-brand-primary font-medium transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-brand-primary font-medium transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase font-bold tracking-[0.18em] text-brand-primary mb-4">
              Canales Directos
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/59171791570"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-brand-textDark hover:text-brand-primary font-bold transition-colors"
                >
                  <Phone size={16} className="text-brand-primary" />
                  <span>+591 71791570</span>
                </a>
              </li>
              {/* Instagram (Oculto temporalmente / Hidden for now - descomentar para reactivar) */}
              {/* <li>
                <a
                  href="https://instagram.com/doctorvico25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-brand-textBody hover:text-brand-primary transition-colors"
                >
                  <Instagram size={16} className="text-brand-primary" />
                  <span>@doctorvico25</span>
                </a>
              </li> */}
              <li>
                <a
                  href="https://www.facebook.com/people/Altura-Coffee-Exports/61594757186363/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-brand-textBody hover:text-brand-primary transition-colors"
                >
                  <Facebook size={16} className="text-brand-primary" />
                  <span>Altura Coffee Exports</span>
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/cotizar"
                className="btn-primary-outline text-xs py-2 px-4 inline-flex items-center gap-2"
              >
                <span>Solicitar Cotización</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-textMuted">
          <p>© 2026 Altura Coffee Exports. Todos los derechos reservados.</p>
          <p className="text-brand-primary font-medium tracking-wider">
            Specialty Coffee · Alta Montaña · Exportación Global
          </p>
          <div>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-1 text-brand-textMuted hover:text-brand-primary transition-colors"
            >
              <Lock size={12} />
              <span>Acceso Backoffice</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
