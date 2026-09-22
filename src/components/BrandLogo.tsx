"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  variant?: "horizontal" | "stacked" | "showcase" | "footer" | "raw";
  href?: string;
  priority?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  variant = "horizontal",
  href = "/",
  priority = false,
}) => {
  const renderContent = () => {
    switch (variant) {
      case "showcase":
      case "stacked":
        return (
          <div
            className={`w-full bg-[#0c0d10] rounded-2xl p-6 sm:p-7 border border-neutral-800/90 shadow-xl flex flex-col items-center group-hover:border-brand-primary/40 transition-all duration-300 ${className}`}
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[690/230]">
              <Image
                src="/images/logo-tight.png"
                alt="Altura Coffee Exports — Bolivia"
                fill
                sizes="(max-width: 640px) 280px, 320px"
                className="object-contain transition-transform duration-500 group-hover:scale-105"
                priority={priority || true}
              />
            </div>
            <div className="h-px w-28 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent my-3.5" />
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              <span>Bolivia</span>
              <span className="inline-block w-1 h-1 rounded-full bg-[#d4af37]/60" />
              <span>Alta Montaña</span>
              <span className="inline-block w-1 h-1 rounded-full bg-[#d4af37]/60" />
              <span>SCA 84+</span>
            </div>
          </div>
        );

      case "footer":
        return (
          <div
            className={`inline-flex items-center bg-[#0c0d10] px-4 py-2 rounded-xl border border-neutral-800 shadow-sm group-hover:border-brand-primary/50 transition-all duration-300 ${className}`}
          >
            <Image
              src="/images/logo-tight.png"
              alt="Altura Coffee Exports"
              width={180}
              height={60}
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              priority={priority}
            />
          </div>
        );

      case "raw":
        return (
          <Image
            src="/images/logo-tight.png"
            alt="Altura Coffee Exports"
            width={160}
            height={53}
            className={`h-9 w-auto object-contain ${className}`}
            priority={priority}
          />
        );

      case "horizontal":
      default:
        return (
          <div
            className={`bg-[#0c0d10] px-3.5 py-1.5 rounded-xl border border-neutral-800 shadow-sm flex items-center group-hover:border-brand-primary/50 transition-all duration-300 ${className}`}
          >
            <Image
              src="/images/logo-tight.png"
              alt="Altura Coffee Exports"
              width={165}
              height={55}
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              priority={priority || true}
            />
          </div>
        );
    }
  };

  const content = renderContent();

  if (href) {
    return (
      <Link
        href={href}
        className="group inline-block select-none cursor-pointer"
        title="Altura Coffee Exports — Inicio"
      >
        {content}
      </Link>
    );
  }

  return <div className="select-none">{content}</div>;
};
