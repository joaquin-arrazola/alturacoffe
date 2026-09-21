"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "./BrandLogo";
import { Menu, X, ArrowRight } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Nuestro Café", href: "/nuestro-cafe" },
    { label: "Exportación", href: "/exportacion" },
    { label: "Sobre Nosotros", href: "/sobre-nosotros" },
    { label: "Contacto", href: "/contacto" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0c0b0a]/95 backdrop-blur-md border-b border-brand-gold/20 py-3 shadow-2xl"
          : "bg-gradient-to-b from-[#0e0c0a]/90 via-[#0e0c0a]/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <BrandLogo href="/" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wider font-medium transition-colors relative py-1 ${
                  active
                    ? "text-brand-gold"
                    : "text-brand-textWhite/80 hover:text-brand-gold"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold rounded-full" />
                )}
              </Link>
            );
          })}

          {/* Cotizar Action Button */}
          <Link
            href="/cotizar"
            className="text-xs uppercase tracking-widest font-semibold text-brand-gold hover:text-brand-dark hover:bg-brand-gold border border-brand-gold/60 hover:border-brand-gold px-5 py-2 rounded-sm transition-all duration-300 shadow-sm"
          >
            Cotizar
          </Link>
        </nav>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md border border-brand-gold/30 text-brand-gold hover:bg-brand-gold/10 transition-colors"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-[#12100e]/98 backdrop-blur-xl border-t border-brand-gold/20 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-2 border-b border-white/5 flex items-center justify-between ${
                  isActive(link.href) ? "text-brand-gold" : "text-white/80 hover:text-brand-gold"
                }`}
              >
                <span>{link.label}</span>
                {isActive(link.href) && <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />}
              </Link>
            ))}

            <Link
              href="/cotizar"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold-solid text-center py-3 mt-2 flex items-center justify-center gap-2"
            >
              <span>Solicitar Cotización</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
