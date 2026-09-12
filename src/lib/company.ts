export interface CompanyConfig {
  name: string;
  legalName: string;
  tagline: string;
  subtagline: string;
  description: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  whatsappDefaultMessage: string;
  email: string;
  commercialEmail: string;
  address: {
    street: string;
    city: string;
    region: string;
    country: string;
    full: string;
  };
  schedule: string;
  social: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
  };
  stats: {
    id: string;
    value: number;
    prefix?: string;
    suffix: string;
    label: string;
    description: string;
  }[];
  pillars: {
    id: string;
    title: string;
    description: string;
    icon: string;
  }[];
  coverageRegions: {
    id: string;
    name: string;
    code: string;
    hub: string;
    transitTime: string;
    cities: string[];
    isFeatured: boolean;
  }[];
  services: {
    slug: string;
    title: string;
    shortTitle: string;
    badge: string;
    summary: string;
    description: string;
    features: string[];
    useCases: string[];
    idealFor: string[];
    vehicles: string[];
    icon: string;
    accentColor: string;
  }[];
  fleet: {
    id: string;
    category: "camionetas" | "furgones" | "camiones" | "especial";
    title: string;
    capacityKg: number;
    volumeM3: number;
    palletCapacity?: number;
    description: string;
    features: string[];
    recommendedUsage: string;
    image: string;
  }[];
  processSteps: {
    step: string;
    title: string;
    description: string;
    detail: string;
  }[];
  testimonials: {
    id: string;
    quote: string;
    name: string;
    role: string;
    company: string;
    rating: number;
  }[];
  clientLogos: {
    name: string;
    industry: string;
    logo?: string;
  }[];
}

export const COMPANY_DATA: CompanyConfig = {
  name: "DASAI",
  legalName: "DASAI Logística y Distribución SpA",
  tagline: "Movemos tu negocio. Entregamos confianza.",
  subtagline:
    "Soluciones de transporte y distribución diseñadas para que tus pedidos lleguen a tiempo, de forma segura y eficiente.",
  description:
    "Somos una empresa especializada en transporte y distribución, comprometida con entregar soluciones eficientes, seguras y adaptadas a las necesidades operativas de cada cliente.",
  phone: "+56 2 2987 6543",
  phoneRaw: "+56229876543",
  whatsapp: "+56 9 8765 4321",
  whatsappRaw: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "56987654321",
  whatsappDefaultMessage:
    "Hola, quisiera solicitar información y cotización sobre sus servicios de transporte y distribución con DASAI.",
  email: "contacto@dasai.cl",
  commercialEmail: "cotizaciones@dasai.cl",
  address: {
    street: "Av. Industrial del Parque 4500, Módulo B-12",
    city: "Santiago (Pudahuel)",
    region: "Región Metropolitana",
    country: "Chile",
    full: "Av. Industrial del Parque 4500, Módulo B-12, Pudahuel, Región Metropolitana, Chile",
  },
  schedule: "Lunes a Viernes: 08:00 - 19:00 hrs | Sábados: 08:30 - 14:00 hrs",
  social: {
    linkedin: "https://linkedin.com/company/dasai-logistica",
    instagram: "https://instagram.com/dasai.logistica",
    facebook: "https://facebook.com/dasailogistica",
  },
  stats: [
    {
      id: "STAT_1",
      value: 500,
      prefix: "+",
      suffix: "K",
      label: "Entregas Realizadas",
      description: "Operaciones completadas con máxima trazabilidad y cumplimiento",
    },
    {
      id: "STAT_2",
      value: 45,
      prefix: "+",
      suffix: "",
      label: "Vehículos en Flota",
      description: "Camionetas, furgones y camiones propios monitoreados 24/7",
    },
    {
      id: "STAT_3",
      value: 12,
      prefix: "+",
      suffix: "",
      label: "Años de Experiencia",
      description: "Trayectoria sostenida en logística urbana e interurbana",
    },
    {
      id: "STAT_4",
      value: 99.2,
      prefix: "",
      suffix: "%",
      label: "Nivel de Cumplimiento",
      description: "Índice de efectividad operativa y puntualidad en entregas (OTIF)",
    },
  ],
  pillars: [
    {
      id: "seguridad",
      title: "Seguridad y Trazabilidad",
      description:
        "Protegemos tu carga durante todo el proceso mediante monitoreo GPS satelital en tiempo real, sellos de seguridad y protocolos estrictos de custodia.",
      icon: "ShieldCheck",
    },
    {
      id: "cumplimiento",
      title: "Cumplimiento y Puntualidad",
      description:
        "Nos comprometemos con ventanas horarias y SLAs estrictos para que tus clientes reciban siempre a tiempo con índices de satisfacción superiores al 98%.",
      icon: "ClockCheck",
    },
    {
      id: "tecnologia",
      title: "Tecnología Operativa",
      description:
        "Utilizamos herramientas digitales de enrutamiento dinámico, comprobantes de entrega digitales (POD) y trazabilidad integral punto a punto.",
      icon: "Cpu",
    },
    {
      id: "flexibilidad",
      title: "Flexibilidad Operativa",
      description:
        "Adaptamos la flota, los horarios y las rutas a la escala y estacionalidad de tu negocio, desde requerimientos puntuales hasta contratos de distribución dedicados.",
      icon: "Shuffle",
    },
  ],
  coverageRegions: [
    {
      id: "rm",
      name: "Región Metropolitana",
      code: "RM",
      hub: "Centro Logístico Pudahuel",
      transitTime: "Mismo Día / 24h",
      cities: ["Santiago", "San Bernardo", "Puente Alto", "Maipú", "Quilicura", "Pudahuel", "Las Condes", "Providencia"],
      isFeatured: true,
    },
    {
      id: "valparaiso",
      name: "Región de Valparaíso",
      code: "V",
      hub: "Hub Viña del Mar - Placilla",
      transitTime: "24h - 48h",
      cities: ["Valparaíso", "Viña del Mar", "Quilpué", "Villa Alemana", "San Antonio", "Quillota", "Los Andes"],
      isFeatured: true,
    },
    {
      id: "ohiggins",
      name: "Región de O'Higgins",
      code: "VI",
      hub: "Hub Rancagua Centro",
      transitTime: "24h - 48h",
      cities: ["Rancagua", "Machalí", "Rengo", "San Fernando", "Graneros", "Requínoa"],
      isFeatured: true,
    },
    {
      id: "maule",
      name: "Región del Maule",
      code: "VII",
      hub: "Hub Talca Oriente",
      transitTime: "24h - 48h",
      cities: ["Talca", "Curicó", "Linares", "Constitución", "Molina", "San Javier"],
      isFeatured: true,
    },
    {
      id: "biobio",
      name: "Región del Biobío",
      code: "VIII",
      hub: "Hub Concepción - Talcahuano",
      transitTime: "24h - 48h",
      cities: ["Concepción", "Talcahuano", "San Pedro de la Paz", "Coronel", "Chiguayante", "Los Ángeles", "Chillán (Ñuble)"],
      isFeatured: true,
    },
  ],
  services: [
    {
      slug: "ultima-milla",
      title: "Última Milla B2B y B2C",
      shortTitle: "Última Milla",
      badge: "Alta Frecuencia",
      summary:
        "Entrega capilar y rápida de pedidos directamente al cliente final corporativo o consumidor con comprobante digital y trazabilidad.",
      description:
        "Nuestro servicio de última milla optimiza la entrega final con conductores capacitados, rutas sectorizadas y comunicación permanente de estado.",
      features: [
        "Entregas programadas y ventanas horarias",
        "Cobertura urbana integral en Santiago y regiones clave",
        "Atención dedicada a clientes B2C y B2B",
        "Gestión proactiva y resolución de incidencias en ruta",
        "Prueba de entrega digital (POD con foto y firma)",
        "Notificaciones de estado automáticas",
      ],
      useCases: [
        "Distribución de paquetería urbana",
        "Entregas de retail y tiendas de conveniencia",
        "Insumos médicos, repuestos y tecnología",
        "Documentación valorada y suministros de oficina",
      ],
      idealFor: ["Retailers", "Marcas D2C", "Distribuidores", "Empresas con venta directa"],
      vehicles: ["Camionetas Urbanas", "Furgones Utilitarios 8-12 m³"],
      icon: "TruckFast",
      accentColor: "from-blue-600 to-indigo-600",
    },
    {
      slug: "distribucion",
      title: "Distribución Programada & Multipunto",
      shortTitle: "Distribución",
      badge: "Optimización de Rutas",
      summary:
        "Distribución planificada y periódica de mercadería hacia sucursales, locales comerciales, supermercados y centros de acopio.",
      description:
        "Diseñamos y ejecutamos redes de distribución recurrentes con itinerarios fijos o dinámicos, maximizando la capacidad cúbica y reduciendo costos operativos.",
      features: [
        "Rutas logísticas planificadas y recurrentes",
        "Distribución multipunto con control de bultos",
        "Entregas programadas por turnos y ventanas de recepción",
        "Control operativo exhaustivo con manifiestos de carga",
        "Vehículos cerrados y sellados con custodia de seguridad",
        "Informes consolidados de cumplimiento y efectividad",
      ],
      useCases: [
        "Abastecimiento de cadenas de tiendas y franquicias",
        "Reposición de inventario en locales comerciales",
        "Distribución de alimentos secos y abarrotes",
        "Material promocional y campañas comerciales masivas",
      ],
      idealFor: ["Cadenas de retail", "Mayoristas", "Fabricantes", "Empresas de consumo masivo"],
      vehicles: ["Furgones Gran Volumen", "Camiones 3/4 (3.5 a 5 Ton)", "Camiones Medianos"],
      icon: "Route",
      accentColor: "from-emerald-600 to-teal-600",
    },
    {
      slug: "transporte-carga",
      title: "Transporte de Carga General y Regional",
      shortTitle: "Transporte de Carga",
      badge: "Mayor Capacidad",
      summary:
        "Transporte de grandes volúmenes y cargas pesadas paletizadas entre bodegas centrales, centros de distribución y regiones.",
      description:
        "Operamos con camiones de mediano y alto tonelaje para trasladar mercadería consolidada o viajes exclusivos directos con la máxima seguridad en carretera.",
      features: [
        "Carga general paletizada y mercadería consolidada",
        "Distribución interurbana y regional con frecuencias fijas",
        "Camiones equipados según necesidad (furgón cerrado, plataforma, rampa hidráulica)",
        "Monitoreo satelital GPS 24/7 con botón de pánico y geocercas",
        "Seguro de carga incluido y protocolos de aseguramiento",
        "Personal con inducciones de seguridad vigentes",
      ],
      useCases: [
        "Transferencias inter-bodegas y traslados industriales",
        "Abastecimiento a centros de distribución regionales",
        "Materiales de construcción y maquinaria ligera",
        "Grandes pedidos industriales y materias primas",
      ],
      idealFor: ["Plantas industriales", "Operadores logísticos", "Centros de distribución", "Importadores"],
      vehicles: ["Camiones 3/4 (5 Ton)", "Camiones 8 - 12 Toneladas", "Camiones con Rampa Hidráulica"],
      icon: "Container",
      accentColor: "from-amber-600 to-orange-600",
    },
    {
      slug: "ecommerce",
      title: "Repartos Especializados para E-Commerce",
      shortTitle: "E-Commerce",
      badge: "Same Day & Next Day",
      summary:
        "Soluciones ágiles para tiendas online con servicios Same Day, Next Day y gestión integral de devoluciones (logística inversa).",
      description:
        "Acompañamos el crecimiento de tus canales digitales con recolección directa en tus bodegas (fulfillment o propias) y entregas directas a tus compradores.",
      features: [
        "Modalidades Same Day (mismo día) y Next Day garantizado",
        "Recolección programada (pick-up) en bodegas de clientes",
        "Tracking en línea accesible para el comprador final",
        "Gestión de reintentos de entrega sin recargos ocultos",
        "Logística inversa y gestión de cambios/devoluciones",
        "Integración técnica preparada vía API para plataformas e-commerce",
      ],
      useCases: [
        "Tiendas Shopify, WooCommerce, Vtex y Mercado Libre",
        "Moda, calzado, belleza y accesorios",
        "Electrónica y accesorios tecnológicos",
        "Lanzamientos de producto y ventas Cyber / HotSale",
      ],
      idealFor: ["E-commerce medianos y grandes", "Startups", "Marcas omnicanal"],
      vehicles: ["Camionetas Rápidas", "Furgones Ligeros"],
      icon: "ShoppingBag",
      accentColor: "from-indigo-600 to-cyan-600",
    },
  ],
  fleet: [
    {
      id: "camioneta-urbana",
      category: "camionetas",
      title: "Camionetas de Reparto Urbano",
      capacityKg: 850,
      volumeM3: 3.5,
      palletCapacity: 1,
      description:
        "Vehículos ágiles y compactos ideales para distribución urbana densa, calles estrechas y entregas express de última milla.",
      features: [
        "Alta movilidad en zonas céntricas y residenciales",
        "Cierre de seguridad hermético",
        "GPS y comunicación en tiempo real",
        "Consumo eficiente y bajas emisiones",
      ],
      recommendedUsage: "Última milla, paquetería e-commerce, repuestos urgentes y despachos express.",
      image: "/images/fleet/camioneta.svg",
    },
    {
      id: "furgon-utilitario",
      category: "furgones",
      title: "Furgones Utilitarios Gran Volumen",
      capacityKg: 1600,
      volumeM3: 10.5,
      palletCapacity: 3,
      description:
        "Furgones de alta capacidad de cubicaje diseñados para rutas de distribución multipunto y pedidos de mediano volumen.",
      features: [
        "Capacidad de hasta 3 pallets europeos estándar",
        "Puertas laterales corredizas y traseras 270° para carga rápida",
        "Paredes interiores revestidas con fijaciones de carga",
        "Cámara de retroceso y sistema de telemetría avanzada",
      ],
      recommendedUsage: "Distribución a retail, paquetería consolidada, e-commerce masivo y traslados de mercadería.",
      image: "/images/fleet/furgon.svg",
    },
    {
      id: "camion-34",
      category: "camiones",
      title: "Camiones 3/4 Cerrados (3.5 - 5 Ton)",
      capacityKg: 4500,
      volumeM3: 22.0,
      palletCapacity: 6,
      description:
        "Vehículos robustos preparados para transportar mayores volúmenes de carga y abastecimiento regular de locales comerciales.",
      features: [
        "Furgón cerrado de aluminio de alta resistencia",
        "Capacidad para 6 pallets estándar",
        "Rampa de acceso o rampa hidráulica opcional",
        "Doble sistema de candado de seguridad satelital",
      ],
      recommendedUsage: "Distribución regional, abastecimiento a tiendas, mudanzas corporativas y carga general.",
      image: "/images/fleet/camion-34.svg",
    },
    {
      id: "camion-pesado",
      category: "camiones",
      title: "Camiones Medianos y Pesados (8 - 12 Ton)",
      capacityKg: 10500,
      volumeM3: 45.0,
      palletCapacity: 14,
      description:
        "Unidades de alto tonelaje para transporte interurbano de larga distancia, traslados entre bodegas y grandes lotes de producción.",
      features: [
        "Carrocería paquetera reforzada",
        "Capacidad para hasta 14 pallets",
        "Cabina con litera y choferes con certificación de ruta",
        "Monitoreo de telemetría satelital continua 24/7",
      ],
      recommendedUsage: "Transporte interurbano troncal, transferencias interbodega y logística industrial pesada.",
      image: "/images/fleet/camion-pesado.svg",
    },
    {
      id: "flota-especial",
      category: "especial",
      title: "Flota Especial & Adaptada",
      capacityKg: 6000,
      volumeM3: 28.0,
      palletCapacity: 8,
      description:
        "Unidades configurables para requerimientos técnicos específicos como control de temperatura o plataformas abiertas.",
      features: [
        "Unidades con rampa hidráulica de 1.500 kg",
        "Opciones con furgón térmico / refrigerado",
        "Anclajes especiales para maquinaria delicada",
        "Conductores certificados en manejo de carga delicada",
      ],
      recommendedUsage: "Cargas de valor, productos perecibles refrigerados, equipamiento médico y eventos.",
      image: "/images/fleet/flota-especial.svg",
    },
  ],
  processSteps: [
    {
      step: "01",
      title: "Solicitas y Cotizas",
      description: "Cuéntanos qué necesitas transportar, origen, destino y tipo de carga requerida.",
      detail: "Nuestro equipo comercial evalúa tus requerimientos y te entrega una propuesta a la medida en menos de 2 horas.",
    },
    {
      step: "02",
      title: "Planificamos la Ruta",
      description: "Analizamos la operación y diseñamos la mejor alternativa logística y ventana horaria.",
      detail: "Asignamos el vehículo óptimo y el conductor indicado para optimizar tiempos de tránsito y costes.",
    },
    {
      step: "03",
      title: "Ejecutamos el Transporte",
      description: "Nuestro equipo retira y ejecuta la ruta con monitoreo satelital en tiempo real.",
      detail: "Recibes trazabilidad continua del trayecto con control activo de geocercas e incidencias.",
    },
    {
      step: "04",
      title: "Entregamos y Certificamos",
      description: "Tu pedido llega de manera segura y oportuna con comprobante de entrega digital.",
      detail: "Confirmación instantánea con fotografía, firma digital y reporte de cierre de servicio.",
    },
  ],
  testimonials: [
    {
      id: "1",
      quote:
        "DASAI transformó nuestra operación de última milla. Redujimos nuestras incidencias en un 40% y los tiempos de entrega bajaron a menos de 24 horas en Santiago y Quinta Región.",
      name: "Rodrigo Morales",
      role: "Gerente de Logística y Operaciones",
      company: "Retail & Distribución Comercial",
      rating: 5,
    },
    {
      id: "2",
      quote:
        "La puntualidad y el estado impecable de los vehículos es notable. Cuando necesitas que un envío B2B llegue a primera hora a un centro de distribución, DASAI nunca falla.",
      name: "Carolina Valenzuela",
      role: "Jefa de Abastecimiento",
      company: "Insumos Industriales SpA",
      rating: 5,
    },
    {
      id: "3",
      quote:
        "Excelente atención y flexibilidad operativa. Durante los picos de demanda CyberMonday supieron escalar la flota de camionetas sin descuidar el estándar de servicio.",
      name: "Felipe Henríquez",
      role: "Director de Operaciones E-Commerce",
      company: "Tienda Online Multicategoría",
      rating: 5,
    },
  ],
  clientLogos: [
    { name: "Falabella", industry: "Retail & E-commerce", logo: "/images/clients/falabella.svg" },
    { name: "Walmart Chile", industry: "Supermercados & Distribución", logo: "/images/clients/walmart.svg" },
    { name: "Mercado Libre", industry: "E-Commerce & Envíos", logo: "/images/clients/mercadolibre.svg" },
    { name: "Cencosud", industry: "Retail & Consumo Masivo", logo: "/images/clients/cencosud.svg" },
    { name: "Sodimac", industry: "Home Center & Materiales", logo: "/images/clients/sodimac.svg" },
    { name: "Ripley", industry: "Tiendas por Departamento", logo: "/images/clients/ripley.svg" },
  ],
};
