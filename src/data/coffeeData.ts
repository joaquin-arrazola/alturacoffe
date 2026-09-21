import { IMAGES } from "./images";

export interface CoffeeVariety {
  id: string;
  slug: string;
  name: string;
  farm: string;
  scaScore: number;
  process: "Lavado" | "Natural" | "Honey";
  processId: number; // 1 = Lavado, 2 = Natural, 3 = Honey
  altitude: string;
  region: string;
  varietals: string;
  tastingNotes: string[];
  description: string;
  longDescription: string;
  harvest: string;
  specs: {
    packaging: string;
    incoterm: string;
    humidity: string;
    waterActivity: string;
    minOrder: string;
    screenSize: string;
  };
  image: string;
}

export const COFFEE_VARIETIES: CoffeeVariety[] = [
  {
    id: "1",
    slug: "arabica-washed",
    name: "Arábica Washed",
    farm: "Finca El Mirador, Coroico",
    scaScore: 86.5,
    process: "Lavado",
    processId: 1,
    altitude: "1,800 – 2,200 msnm",
    region: "Yungas, Bolivia",
    varietals: "Typica & Caturra",
    tastingNotes: ["Cítrico brillante", "Caramelo", "Floral"],
    description: "Procesado en húmedo con fermentación controlada por 24 horas y lavado con aguas de manantial andino. Perfil limpio y complejo, ideal para tostadores de especialidad.",
    longDescription: "Procesado en húmedo con fermentación controlada por 24 horas y lavado con aguas de manantial andino. Destaca por una taza cristalina, notas dulces a toffee, acidez málica brillante y cuerpo sedoso, siendo la base predilecta de tostadores de cafés de especialidad.",
    harvest: "2025/2026",
    specs: {
      packaging: "Saco Yute 60kg + Liner Hermético GrainPro",
      incoterm: "FOB Puerto de Arica (Chile) / CIF Global",
      humidity: "10.5% – 11.5% Certificada",
      waterActivity: "< 0.60 aW",
      minOrder: "5 sacos (300 kg)",
      screenSize: "Malla 16/18 (Cero defectos Grado 1)"
    },
    image: IMAGES.arabicaWashed
  },
  {
    id: "2",
    slug: "geisha-natural",
    name: "Geisha Natural",
    farm: "Finca Las Nubes, Caranavi",
    scaScore: 89.0,
    process: "Natural",
    processId: 2,
    altitude: "2,000 – 2,400 msnm",
    region: "Caranavi, Bolivia",
    varietals: "Geisha Panamá & Bolivia",
    tastingNotes: ["Frutos rojos", "Jazmín", "Miel de flor de azahar"],
    description: "Secado en camas africanas bajo el sol andino. Perfil exótico y aromático con acidez floral compleja que conquista los mercados premium internacionales.",
    longDescription: "Secado lentamente en camas africanas elevadas bajo el sol andino de los Yungas paceños. Su fermentación natural controlada genera una acidez floral compleja, dulzura sedosa de miel de azahar y un cuerpo aterciopelado que conquista las subastas internacionales más exigentes.",
    harvest: "2025/2026",
    specs: {
      packaging: "Saco Yute 60kg + Liner Hermético GrainPro / Ecotact",
      incoterm: "FOB Puerto de Arica (Chile) / CIF Global",
      humidity: "10.8% – 11.2% Certificada",
      waterActivity: "< 0.58 aW",
      minOrder: "5 sacos (300 kg)",
      screenSize: "Malla 16/18 Selección manual micro-lote"
    },
    image: IMAGES.geishaNatural
  },
  {
    id: "3",
    slug: "bourbon-honey",
    name: "Bourbon Honey",
    farm: "Finca Santa Rosa, Sud Yungas",
    scaScore: 87.5,
    process: "Honey",
    processId: 3,
    altitude: "1,600 – 2,000 msnm",
    region: "Sud Yungas, Bolivia",
    varietals: "Bourbon Rojo & Amarillo",
    tastingNotes: ["Chocolate oscuro", "Nuez tostada", "Dulce prolongado"],
    description: "Proceso honey que preserva la dulzura natural del mucílago. Cuerpo pleno y final largo, perfecto para espresso y métodos de inmersión.",
    longDescription: "Despulpado preservando el 100% de su mucílago azucarado durante el secado en zarandas bajo sombra. Un café de cuerpo redondo y untuoso con final achocolatado persistente, altamente cotizado para tostadurías artesanales y perfiles de espresso prémium.",
    harvest: "2025/2026",
    specs: {
      packaging: "Saco Yute 60kg + Liner Hermético GrainPro",
      incoterm: "FOB Puerto de Arica (Chile) / CIF Global",
      humidity: "10.5% – 11.4% Certificada",
      waterActivity: "< 0.59 aW",
      minOrder: "5 sacos (300 kg)",
      screenSize: "Malla 15/17 Densidad alta"
    },
    image: IMAGES.bourbonHoney
  }
];

export function getAllCoffees(): CoffeeVariety[] {
  return COFFEE_VARIETIES;
}

export function getCoffeeBySlug(slug: string): CoffeeVariety | undefined {
  return COFFEE_VARIETIES.find((c) => c.slug === slug);
}

export function getCoffeesByProcess(processId?: number): CoffeeVariety[] {
  if (!processId) return COFFEE_VARIETIES;
  return COFFEE_VARIETIES.filter((c) => c.processId === processId);
}
