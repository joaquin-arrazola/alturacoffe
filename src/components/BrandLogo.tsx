import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  variant?: "horizontal" | "stacked";
  href?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  variant = "horizontal",
  href = "/",
}) => {
  const content = (
    <div className={`inline-flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* Emblem SVG: Stylized mountain peak + coffee bean */}
      <svg
        viewBox="0 0 100 100"
        className="w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dfbe7d" />
            <stop offset="50%" stopColor="#c5a059" />
            <stop offset="100%" stopColor="#aa8954" />
          </linearGradient>
          <linearGradient id="goldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f7e1b5" />
            <stop offset="100%" stopColor="#9a7b3c" />
          </linearGradient>
        </defs>

        {/* Outer subtle ring */}
        <circle cx="50" cy="50" r="46" stroke="url(#goldGrad)" strokeWidth="2" strokeOpacity="0.75" />
        <circle cx="50" cy="50" r="41" stroke="url(#goldGrad)" strokeWidth="0.75" strokeDasharray="3 3" strokeOpacity="0.4" />

        {/* Mountain Peak silhouette */}
        <path
          d="M20 72L50 25L80 72H66L50 48L34 72H20Z"
          fill="url(#goldGrad)"
          fillOpacity="0.25"
          stroke="url(#goldGrad)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Andean Sun / Center Coffee Bean Glow */}
        <path
          d="M50 36C45 42 43 51 47 58C51 65 58 66 61 60C64 54 62 44 57 38C54 34 52 34 50 36Z"
          fill="url(#goldGlow)"
          opacity="0.9"
        />
        <path
          d="M49 42C51 46 54 50 52 56"
          stroke="#0c0b0a"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Brand Typography */}
      {variant === "horizontal" ? (
        <div className="flex flex-col text-left">
          <div className="font-serif text-xl sm:text-2xl font-bold tracking-[0.18em] text-brand-textWhite group-hover:text-brand-goldLight transition-colors">
            ALTURA
          </div>
          <div className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.32em] text-brand-gold -mt-1 font-semibold">
            Coffee Exports · Bolivia
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center text-center mt-2">
          <div className="font-serif text-2xl font-bold tracking-[0.2em] text-brand-textWhite">
            ALTURA
          </div>
          <div className="text-[11px] font-sans uppercase tracking-[0.35em] text-brand-gold font-semibold">
            Specialty Coffee Exports
          </div>
          <div className="text-[9px] text-brand-textDim tracking-widest mt-1">
            BOLIVIA · ALTA MONTAÑA
          </div>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} title="Altura Coffee Exports — Inicio">
        {content}
      </Link>
    );
  }

  return content;
};
