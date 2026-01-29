
import type { Service, Project } from './types';

export const PHONE_NUMBER = "+51 907 122 035";
export const WHATSAPP_LINK = `https://wa.me/51907122035`;
export const EMAIL = "puertasseguras13@gmail.com";
export const ADDRESS = "Mariategui mz c1 lote 9 comite 26 santa rosa, Callao 07026, Perú";
export const BUSINESS_HOURS = [
  { day: 'Lunes', hours: '8:30am a 5:30pm' },
  { day: 'Martes', hours: '8:30am a 5:30pm' },
  { day: 'Miércoles', hours: '8:30am a 5:30pm' },
  { day: 'Jueves', hours: '8:30am a 5:30pm' },
  { day: 'Viernes', hours: '8:30am a 5:30pm' },
  { day: 'Sábado', hours: '8:30am a 5:30pm' },
  { day: 'Domingo', hours: 'Cerrado', isClosed: true },
];

export const COLORS = {
  primary: 'blue-900',
  secondary: 'orange-500',
  accent: 'blue-700',
};

export const BRANDS = [
  { name: 'SmartLift', logo: './logo_SmartLift.webp', type: 'horizontal' },
  { name: 'Nice', logo: 'logo_nice.webp', type: 'square' },
  { name: 'Centurion', logo: './logo_centurion.webp', type: 'horizontal' },
  { name: 'Hiland', logo: './logo_hiland.webp', type: 'square' },
  { name: 'KTH', logo: './logo_KTH.webp', type: 'horizontal' },
  { name: 'Record', logo: './logo_record.webp', type: 'square' },
  { name: 'V2', logo: './logo_v2.webp', type: 'horizontal' },
  { name: 'VDS', logo: './logo_VDS.webp', type: 'square' },
  { name: 'ZK', logo: './logo_ZK.webp', type: 'horizontal' },
  { name: 'Almatic', logo: './logo_almatic.webp', type: 'square' },
];

export const SERVICES: Service[] = [
  // Tipos de Puertas
  {
    id: '1',
    category: 'tipo',
    title: 'Puerta seccional',
    description: 'Sistema de apertura vertical que optimiza el espacio. Fabricadas con paneles de alta densidad y acabado estético premium para residencias y almacenes.',
    icon: 'fa-solid fa-layer-group'
  },
  {
    id: '2',
    category: 'tipo',
    title: 'Puerta corrediza',
    description: 'Solución ideal para ingresos vehiculares de gran ancho. Deslizamiento suave sobre rieles reforzados con sistemas anti-descarrilamiento de alta seguridad.',
    icon: 'fa-solid fa-arrows-left-right'
  },
  {
    id: '3',
    category: 'tipo',
    title: 'Puerta peatonal residencial',
    description: 'Accesos peatonales con cerraduras eléctricas integradas y acabados que combinan con su fachada. Seguridad y elegancia para el ingreso principal de su hogar.',
    icon: 'fa-solid fa-door-closed'
  },
  {
    id: '4',
    category: 'tipo',
    title: 'Puerta batiente',
    description: 'Apertura clásica de una o dos hojas. Automatizadas con brazos hidráulicos o electromecánicos que garantizan un cierre hermético y seguro.',
    icon: 'fa-solid fa-door-open'
  },
  {
    id: '5',
    category: 'tipo',
    title: 'Puerta enrollable',
    description: 'Máxima protección para comercios e industrias. Fabricadas en acero galvanizado con sistemas de motor central o lateral para uso intensivo.',
    icon: 'fa-solid fa-scroll'
  },

  // Servicios Técnicos
  {
    id: '6',
    category: 'tecnico',
    title: 'Servicio correctivo y preventivo',
    description: 'Programas de mantenimiento para evitar fallas y reparaciones de emergencia para restaurar la operatividad de sus equipos en tiempo récord.',
    icon: 'fa-solid fa-screwdriver-wrench'
  },
  {
    id: '7',
    category: 'tecnico',
    title: 'Instalaciones, reparaciones y fabricación',
    description: 'Servicio integral que abarca desde el diseño y fabricación de la estructura metálica hasta la instalación técnica y reparación de componentes.',
    icon: 'fa-solid fa-trowel-bricks'
  },

  // Automatización (se mantienen para complementar el catálogo)
  {
    id: '8',
    category: 'automatizacion',
    title: 'Venta de Motores',
    description: 'Distribución de motores de marcas líderes con tecnología MyQ para control desde el celular.',
    icon: 'fa-solid fa-microchip'
  },
  {
    id: '9',
    category: 'automatizacion',
    title: 'Sistemas de Seguridad',
    description: 'Instalación de sensores infrarrojos, cercos eléctricos y cámaras integradas a sus accesos.',
    icon: 'fa-solid fa-shield-halved'
  },
];

export const PROJECTS: Project[] = [
  { id: 1, title: 'Residencia Moderna', category: 'Puerta Seccional', imageUrl: './puerta_seccional.webp' },
  { id: 2, title: 'Almacén Logístico', category: 'Puerta Enrrollable', imageUrl: './puerta_enrrollable.webp' },
  { id: 3, title: 'Industria', category: 'Puerta Corrediza', imageUrl: './puerta_corrediza.webp' },
  { id: 4, title: 'Garaje Inteligente', category: 'Puerta Batiente', imageUrl: './puerta_batiente.webp' },
  { id: 5, title: 'Puerta Casa', category: 'Puerta Principal de casa', imageUrl: './puerta_casa_1.webp' },
  { id: 6, title: 'Puerta Casa', category: 'Puerta Principal de casa', imageUrl: './puerta_casa_2.webp' },
  { id: 7, title: 'Puerta Casa', category: 'Puerta Principal de casa', imageUrl: './puerta_casa_3.webp' },
  { id: 8, title: 'Puerta Casa', category: 'Puerta Principal de casa', imageUrl: './puerta_casa_4.webp' },
];
