import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { FloatingVersionSwitch } from "@/components/FloatingVersionSwitch";

export const metadata: Metadata = {
  title: "Altura Coffee Exports — Café de Especialidad de Alta Montaña",
  description:
    "Exportadora boliviana de café de especialidad de alta montaña. Conectamos los mejores cafés de alta montaña de Yungas y Caranavi con importadores y tostadores internacionales.",
  keywords: [
    "café de especialidad",
    "café boliviano",
    "exportadora de café",
    "specialty coffee Bolivia",
    "Geisha Natural",
    "Bourbon Honey",
    "Arábica Washed",
    "SCA 85+",
    "Yungas",
    "Caranavi"
  ],
  openGraph: {
    title: "Altura Coffee Exports — Café de Especialidad",
    description: "Café de especialidad de alta montaña para el mundo.",
    type: "website",
    locale: "es_BO",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-brand-dark text-brand-text antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <FloatingVersionSwitch />
      </body>
    </html>
  );
}
