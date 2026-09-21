"use client";

import React from "react";
import Link from "next/link";
import { FileText, Calculator } from "lucide-react";
import { CoffeeVariety } from "@/data/coffeeData";

export const ProductActions: React.FC<{ coffee: CoffeeVariety }> = ({ coffee }) => {
  return (
    <div className="space-y-3 pt-2">
      <a
        href={`https://wa.me/59171791570?text=Hola%20Altura%20Coffee%20Exports%2C%20estoy%20interesado%20en%20solicitar%20cotizaci%C3%B3n%20y%20muestras%20del%20lote%3A%20${encodeURIComponent(
          coffee.name
        )}%20(${encodeURIComponent(coffee.process)}%2C%20${
          coffee.scaScore
        }%20SCA).`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold-solid w-full py-4 text-center flex items-center justify-center gap-2"
      >
        <span>Cotizar este Lote por WhatsApp (+591 71791570)</span>
      </a>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => window.print()}
          className="btn-gold-outline w-full py-2.5 flex items-center justify-center gap-2 text-xs"
        >
          <FileText size={15} />
          <span>Imprimir Ficha Técnica</span>
        </button>

        <Link
          href={`/cotizar?lote=${coffee.id}`}
          className="btn-gold-outline w-full py-2.5 flex items-center justify-center gap-2 text-xs"
        >
          <Calculator size={15} />
          <span>Cotizador Formal</span>
        </Link>
      </div>
    </div>
  );
};
