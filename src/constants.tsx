
import type { Service, Project } from './types';

export const PHONE_NUMBER = "+51 907 122 035";
export const WHATSAPP_LINK = `https://wa.me/51907122035`;

export const COLORS = {
  primary: 'blue-900',
  secondary: 'orange-500',
  accent: 'blue-700',
};

export const SERVICES: Service[] = [
  // Tipos de Puertas
  { 
    id: '1', 
    category: 'tipo', 
    title: 'Puertas Seccionales', 
    description: 'Diseño vanguardista que optimiza el espacio mediante apertura vertical. Fabricadas con paneles de acero galvanizado y aislamiento térmico-acústico, ideales para garajes residenciales y almacenes modernos.', 
    icon: 'fa-solid fa-layer-group' 
  },
  { 
    id: '2', 
    category: 'tipo', 
    title: 'Puertas Corredizas', 
    description: 'Solución robusta para ingresos vehiculares amplios. Nuestro sistema de rieles de alta resistencia garantiza un deslizamiento suave y seguro, soportando estructuras de gran peso con total estabilidad.', 
    icon: 'fa-solid fa-arrows-left-right' 
  },
  { 
    id: '3', 
    category: 'tipo', 
    title: 'Puertas Batientes', 
    description: 'El equilibrio perfecto entre elegancia clásica y tecnología. Sistemas de una o dos hojas con pistones hidráulicos o electromecánicos de alto rendimiento para una operación silenciosa y duradera.', 
    icon: 'fa-solid fa-door-open' 
  },
  { 
    id: '4', 
    category: 'tipo', 
    title: 'Puertas Enrollables', 
    description: 'Máxima seguridad para locales comerciales. Fabricadas en acero de alto carbono con sistema de microperforado o ciego, permitiendo protección total sin sacrificar la estética de su fachada.', 
    icon: 'fa-solid fa-scroll' 
  },
  { 
    id: '5', 
    category: 'tipo', 
    title: 'Puertas Residenciales', 
    description: 'Seguridad premium para su hogar. Ofrecemos acabados personalizados en madera, metal y polímeros de alta densidad que incrementan la plusvalía de su propiedad y la protección de su familia.', 
    icon: 'fa-solid fa-house-chimney' 
  },
  { 
    id: '6', 
    category: 'tipo', 
    title: 'Puertas Comerciales', 
    description: 'Diseñadas para el alto tráfico. Implementamos accesos de respuesta rápida con sensores de presencia y sistemas anti-aplastamiento, optimizando el flujo de clientes en su negocio.', 
    icon: 'fa-solid fa-shop' 
  },
  { 
    id: '7', 
    category: 'tipo', 
    title: 'Puertas Industriales', 
    description: 'Resistencia extrema para uso intensivo. Estructuras reforzadas preparadas para naves logísticas, resistentes a impactos y condiciones climáticas adversas, garantizando la operatividad 24/7.', 
    icon: 'fa-solid fa-industry' 
  },
  
  // Servicios Técnicos
  { 
    id: '8', 
    category: 'tecnico', 
    title: 'Instalación Profesional', 
    description: 'Ejecución técnica bajo normas internacionales de ingeniería. Utilizamos equipos de nivelación láser y fijaciones de alta resistencia para asegurar un montaje perfecto desde el primer día.', 
    icon: 'fa-solid fa-trowel-bricks' 
  },
  { 
    id: '9', 
    category: 'tecnico', 
    title: 'Mantenimiento Preventivo', 
    description: 'Programa de inspección integral que incluye lubricación técnica, calibración de sensores y revisión de fatiga de materiales para evitar fallas críticas y costosas reparaciones a futuro.', 
    icon: 'fa-solid fa-shield-halved' 
  },
  { 
    id: '10', 
    category: 'tecnico', 
    title: 'Mantenimiento Correctivo', 
    description: 'Servicio de emergencia para reparación de motores, cambios de resortes, cables y electrónica. Contamos con técnicos de respuesta rápida para restablecer su seguridad en tiempo récord.', 
    icon: 'fa-solid fa-screwdriver-wrench' 
  },
  
  // Automatización
  { 
    id: '11', 
    category: 'automatizacion', 
    title: 'Venta de Motores', 
    description: 'Distribución oficial de marcas líderes (LiftMaster, BFT, CAME). Motores inteligentes con tecnología Wi-Fi MyQ que permiten el control total de sus puertas desde su smartphone desde cualquier lugar.', 
    icon: 'fa-solid fa-microchip' 
  },
  { 
    id: '12', 
    category: 'automatizacion', 
    title: 'Accesorios y Repuestos', 
    description: 'Stock permanente de controles remotos, sensores infrarrojos, cremalleras de acero y tarjetas electrónicas. Repuestos originales que garantizan la compatibilidad y vida útil de sus equipos.', 
    icon: 'fa-solid fa-gears' 
  },
];

export const PROJECTS: Project[] = [
  { id: 1, title: 'Residencia Moderna', category: 'Residencial', imageUrl: './puerta_1.webp' },
  { id: 2, title: 'Almacén Logístico', category: 'Industrial', imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Centro Comercial', category: 'Comercial', imageUrl: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Garaje Inteligente', category: 'Residencial', imageUrl: './puerta_2.webp' },
  { id: 5, title: 'Nave Industrial', category: 'Industrial', imageUrl: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Tienda Retail', category: 'Comercial', imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' },
];
