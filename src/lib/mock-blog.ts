export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Logística" | "Transporte" | "Última Milla" | "E-Commerce" | "Distribución";
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  content: string[];
}

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    slug: "claves-para-optimizar-ultima-milla-en-santiago",
    title: "5 Claves para Optimizar la Última Milla en la Región Metropolitana",
    excerpt:
      "Descubre cómo la densificación urbana y los nuevos hábitos de consumo exigen ruteos dinámicos y flotas adaptadas en Santiago.",
    category: "Última Milla",
    date: "12 Agosto 2026",
    readTime: "4 min de lectura",
    author: {
      name: "Rodrigo Morales",
      role: "Gerente de Operaciones DASAI",
    },
    content: [
      "La última milla representa hasta el 53% del costo logístico total de un despacho. En ciudades con alta densidad como Santiago, los desafíos del tráfico, las restricciones horarias y las zonas de difícil acceso obligan a las empresas a replantear sus modelos de distribución.",
      "1. Ruteo Dinámico y Sectorización: Dividir la ciudad en macro-zonas operativas permite que cada conductor se especialice en su cuadrante, reduciendo el tiempo por parada en más de un 25%.",
      "2. Vehículos de Tamaño Adecuado: El uso de furgones utilitarios y camionetas de alta maniobrabilidad disminuye los tiempos de estacionamiento y facilita la entrega en edificios residenciales.",
      "3. Notificaciones Proactivas al Comprador: Informar ventanas horarias acotadas reduce significativamente la tasa de destinatario ausente, evitando costosos reintentos de entrega.",
      "4. Comprobante Digital (POD): Eliminar las guías en papel y adoptar firmas y fotos digitales no solo acelera la conciliación, sino que entrega respaldo irrefutable ante cualquier reclamo comercial.",
    ],
  },
  {
    slug: "preparar-la-logistica-para-eventos-cyber",
    title: "Cómo Preparar la Flota y Operación Logística para Temporadas Cyber",
    excerpt:
      "Estrategias probadas para escalar la capacidad de despacho sin sacrificar los niveles de servicio durante picos masivos de demanda e-commerce.",
    category: "E-Commerce",
    date: "28 Julio 2026",
    readTime: "5 min de lectura",
    author: {
      name: "Felipe Henríquez",
      role: "Especialista Logística E-Commerce",
    },
    content: [
      "Durante eventos como CyberMonday y CyberDay, las ventas de las tiendas online pueden multiplicarse por 5 o 10 veces en cuestión de horas. Tener una flota de transporte preparada es el factor decisivo entre el éxito comercial y una crisis de reputación.",
      "1. Planificación Conjunta de Volúmenes: Establecer proyecciones diarias con tu operador de transporte con semanas de anticipación permite reservar unidades y coordinar turnos de recolección en bodegas.",
      "2. Turnos Extendidos de Pick-up: Recolectar mercadería en múltiples cortes a lo largo del día evita cuellos de botella en la bodega del cliente y agiliza la clasificación nocturna.",
      "3. Flexibilidad de Flota: Combinar camionetas express para despachos Same Day con camiones 3/4 para abastecimiento mayorista permite atender diferentes tipos de pedidos de forma simultánea.",
    ],
  },
  {
    slug: "importancia-monitoreo-satelital-carga-pesada",
    title: "La Importancia del Monitoreo Satelital y Telemetría en el Transporte Pesado",
    excerpt:
      "Por qué el GPS tradicional ya no es suficiente y cómo la telemetría en tiempo real previene pérdidas y accidentes en carretera.",
    category: "Transporte",
    date: "15 Julio 2026",
    readTime: "4 min de lectura",
    author: {
      name: "Comité de Seguridad Vial DASAI",
      role: "División de Seguridad y Flota",
    },
    content: [
      "El transporte de carga pesada en rutas interurbanas y carreteras de Chile requiere protocolos preventivos estrictos. La telemetría satelital avanzada va mucho más allá de simplemente saber dónde está el camión.",
      "Sensores de apertura de puertas, botones de pánico satelitales, geocercas inteligentes y control de aceleraciones y frenadas bruscas permiten a nuestra Torre de Control intervenir preventivamente ante cualquier anomalía.",
      "Además, la custodia digital asegura a nuestros clientes que su mercadería viaja bajo parámetros óptimos de seguridad, resguardando el patrimonio de su empresa en cada viaje.",
    ],
  },
];
