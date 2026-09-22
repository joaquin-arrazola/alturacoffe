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
      if (window.scrollY > 30) {
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
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 py-3.5 shadow-sm"
          : "bg-white/80 backdrop-blur-md border-b border-gray-200/60 py-4.5"
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
                className={`text-sm tracking-wider font-semibold transition-colors relative py-1 ${
                  active
                    ? "text-brand-primary"
                    : "text-brand-textDark/80 hover:text-brand-primary"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-brand-primary rounded-full" />
                )}
              </Link>
            );
          })}

          {/* Cotizar Action Button */}
          <Link
            href="/cotizar"
            className="text-xs uppercase tracking-widest font-bold text-brand-primary hover:text-white bg-transparent hover:bg-brand-primary border-1.5 border-brand-primary px-5 py-2 rounded transition-all duration-200 shadow-sm"
          >
            Cotizar
          </Link>
        </nav>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md border border-gray-200 text-brand-primary hover:bg-brand-primary/5 transition-colors"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-white border-t border-gray-200 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold py-2.5 border-b border-gray-100 flex items-center justify-between ${
                  isActive(link.href) ? "text-brand-primary" : "text-brand-textDark hover:text-brand-primary"
                }`}
              >
                <span>{link.label}</span>
                {isActive(link.href) && <span className="w-2 h-2 rounded-full bg-brand-primary" />}
              </Link>
            ))}

            <Link
              href="/cotizar"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary-solid text-center py-3 mt-2 flex items-center justify-center gap-2"
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
