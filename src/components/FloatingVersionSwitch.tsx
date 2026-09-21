"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeftRight } from "lucide-react";

export const FloatingVersionSwitch: React.FC = () => {
  const pathname = usePathname();
  const isV2 = pathname === "/v2";

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <Link
        href={isV2 ? "/" : "/v2"}
        className="flex items-center gap-2.5 px-4 py-2 bg-[#120f0d]/90 hover:bg-[#1a1613] backdrop-blur-md border border-brand-gold/35 hover:border-brand-gold/70 text-brand-gold hover:text-brand-goldLight rounded-full shadow-2xl text-xs font-semibold tracking-wider transition-all duration-300 transform hover:scale-105"
        title={isV2 ? "Ver Propuesta A (Classic Landing)" : "Ver Propuesta B (Split Hero & Carrusel)"}
      >
        <ArrowLeftRight size={14} className="text-brand-gold" />
        <span>{isV2 ? "Versión 1" : "Versión 2"}</span>
      </Link>
    </div>
  );
};
