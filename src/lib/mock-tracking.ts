export interface TrackingStage {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  location: string;
  completed: boolean;
  current: boolean;
}

export interface TrackingDetail {
  trackingCode: string;
  clientName: string;
  senderCompany: string;
  recipientName: string;
  serviceType: string;
  origin: string;
  destination: string;
  status: "RECIBIDO" | "PREPARANDO" | "EN_RUTA" | "EN_REPARTO" | "ENTREGADO" | "INCIDENCIA";
  statusLabel: string;
  statusColor: string;
  createdAt: string;
  estimatedDelivery: string;
  lastUpdate: string;
  currentLocation: string;
  vehicleAssigned: string;
  driverName?: string;
  stages: TrackingStage[];
}

export const MOCK_TRACKING_ORDERS: Record<string, TrackingDetail> = {
  "DAS-8921": {
    trackingCode: "DAS-8921",
    clientName: "Tech Distribuciones Chile",
    senderCompany: "Hub Central DASAI Pudahuel",
    recipientName: "Comercializadora del Valle S.A.",
    serviceType: "Distribución Programada B2B",
    origin: "Pudahuel, Región Metropolitana",
    destination: "Viña del Mar, Región de Valparaíso",
    status: "EN_REPARTO",
    statusLabel: "En Reparto Final",
    statusColor: "text-amber-600 bg-amber-50 border-amber-200",
    createdAt: "18 Ago 2026, 07:15 hrs",
    estimatedDelivery: "Hoy, 15:30 - 17:00 hrs",
    lastUpdate: "Hace 18 minutos (Ruta 68 Km 92)",
    currentLocation: "Sector Placilla - Conexión Viña del Mar",
    vehicleAssigned: "Camión 3/4 Furgonado (Placa DAS-224)",
    driverName: "Carlos Méndez (Conductor Certificado)",
    stages: [
      {
        id: "1",
        title: "Pedido Recibido en Centro Logístico",
        description: "Manifiesto de carga registrado y validado con bultos sellados.",
        timestamp: "18 Ago, 07:15 hrs",
        location: "CD Central Pudahuel",
        completed: true,
        current: false,
      },
      {
        id: "2",
        title: "Preparando y Consolidando Carga",
        description: "Paletizado y estiba en unidad de transporte asignada.",
        timestamp: "18 Ago, 08:30 hrs",
        location: "Bahía 4 - Pudahuel",
        completed: true,
        current: false,
      },
      {
        id: "3",
        title: "En Tránsito Troncal Interurbano",
        description: "Ruta 68 en progreso con monitoreo satelital activo.",
        timestamp: "18 Ago, 10:45 hrs",
        location: "Tramo Curacaví - Casablanca",
        completed: true,
        current: false,
      },
      {
        id: "4",
        title: "En Reparto / Destino Final",
        description: "Unidad arribando a comuna de destino para entrega en puerta.",
        timestamp: "18 Ago, 12:20 hrs",
        location: "Viña del Mar Centro",
        completed: false,
        current: true,
      },
      {
        id: "5",
        title: "Entregado y Certificado",
        description: "Recepción conforme con comprobante POD y firma digital.",
        timestamp: "Estimado: 18 Ago, 16:00 hrs",
        location: "Destino Final",
        completed: false,
        current: false,
      },
    ],
  },
  "DAS-4012": {
    trackingCode: "DAS-4012",
    clientName: "Moda & Calzado E-Commerce",
    senderCompany: "Bodega Fulfillment Quilicura",
    recipientName: "Ignacio Soto",
    serviceType: "Última Milla E-Commerce (Same Day)",
    origin: "Quilicura, RM",
    destination: "Providencia, RM",
    status: "ENTREGADO",
    statusLabel: "Entregado Exitosamente",
    statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    createdAt: "18 Ago 2026, 09:00 hrs",
    estimatedDelivery: "18 Ago 2026, 13:45 hrs",
    lastUpdate: "18 Ago 2026, 13:42 hrs",
    currentLocation: "Providencia - Av. Pedro de Valdivia",
    vehicleAssigned: "Camioneta Urbana Express (Placa DAS-108)",
    driverName: "Andrés Silva",
    stages: [
      {
        id: "1",
        title: "Pedido Recibido",
        description: "Etiqueta escaneada en punto de recolección.",
        timestamp: "18 Ago, 09:00 hrs",
        location: "Hub Quilicura",
        completed: true,
        current: false,
      },
      {
        id: "2",
        title: "Clasificación y Ruteo",
        description: "Asignado a zona Oriente.",
        timestamp: "18 Ago, 10:15 hrs",
        location: "Hub Quilicura",
        completed: true,
        current: false,
      },
      {
        id: "3",
        title: "En Ruta Express",
        description: "Despacho en trayecto hacia el destinatario.",
        timestamp: "18 Ago, 11:30 hrs",
        location: "Sector Providencia",
        completed: true,
        current: false,
      },
      {
        id: "4",
        title: "En Reparto",
        description: "Conductor en dirección exacta.",
        timestamp: "18 Ago, 13:10 hrs",
        location: "Providencia",
        completed: true,
        current: false,
      },
      {
        id: "5",
        title: "Entregado y Certificado",
        description: "Recibido por conserjería con firma y foto POD.",
        timestamp: "18 Ago, 13:42 hrs",
        location: "Recepción Edificio",
        completed: true,
        current: true,
      },
    ],
  },
  "DAS-1088": {
    trackingCode: "DAS-1088",
    clientName: "Insumos Clínicos de Chile",
    senderCompany: "Centro de Distribución Maipú",
    recipientName: "Clínica Regional Rancagua",
    serviceType: "Transporte de Carga Dedicada",
    origin: "Maipú, RM",
    destination: "Rancagua, Región de O'Higgins",
    status: "EN_RUTA",
    statusLabel: "En Tránsito Troncal",
    statusColor: "text-blue-700 bg-blue-50 border-blue-200",
    createdAt: "18 Ago 2026, 10:30 hrs",
    estimatedDelivery: "Hoy, 16:30 hrs",
    lastUpdate: "Hace 8 minutos (Ruta 5 Sur - Peaje Angostura)",
    currentLocation: "Ruta 5 Sur km 57",
    vehicleAssigned: "Camión Pesado 10 Ton (Placa DAS-580)",
    driverName: "Mauricio Lagos",
    stages: [
      {
        id: "1",
        title: "Carga consolidada en Maipú",
        description: "Revisión técnica de estiba y precintos de seguridad.",
        timestamp: "18 Ago, 10:30 hrs",
        location: "Bodega Maipú",
        completed: true,
        current: false,
      },
      {
        id: "2",
        title: "Despacho autorizado",
        description: "Guía de despacho timbrada y precintos activos.",
        timestamp: "18 Ago, 11:15 hrs",
        location: "Control Salida Maipú",
        completed: true,
        current: false,
      },
      {
        id: "3",
        title: "En Ruta 5 Sur",
        description: "Tránsito en velocidad crucero con monitoreo 24/7.",
        timestamp: "18 Ago, 12:10 hrs",
        location: "Acceso Paine / Angostura",
        completed: true,
        current: true,
      },
      {
        id: "4",
        title: "Arribo a Rancagua",
        description: "Ingreso a zona urbana Rancagua.",
        timestamp: "Pendiente",
        location: "Rancagua Norte",
        completed: false,
        current: false,
      },
      {
        id: "5",
        title: "Descarga y Entrega",
        description: "Descarga con rampa hidráulica en clínica.",
        timestamp: "Estimado: 16:30 hrs",
        location: "Andén Recepción Rancagua",
        completed: false,
        current: false,
      },
    ],
  },
};

export function getTrackingDetail(code: string): TrackingDetail {
  const normalized = code.trim().toUpperCase();
  if (MOCK_TRACKING_ORDERS[normalized]) {
    return MOCK_TRACKING_ORDERS[normalized];
  }

  // Generador dinámico para cualquier otro código ingresado
  return {
    trackingCode: normalized,
    clientName: "Cliente Corporativo DASAI",
    senderCompany: "Centro de Transferencia DASAI",
    recipientName: "Destinatario Registrado",
    serviceType: "Distribución & Transporte Estándar",
    origin: "Santiago, Región Metropolitana",
    destination: "Destino Regional en Tránsito",
    status: "EN_RUTA",
    statusLabel: "En Proceso Operativo",
    statusColor: "text-blue-700 bg-blue-50 border-blue-200",
    createdAt: "18 Ago 2026, 08:00 hrs",
    estimatedDelivery: "En proceso de confirmación de ventana horaria",
    lastUpdate: "Recientemente procesado en sistema central",
    currentLocation: "En ruta de distribución activa",
    vehicleAssigned: "Unidad asignada según manifiesto",
    driverName: "Conductor DASAI Asignado",
    stages: [
      {
        id: "1",
        title: "Orden Recibida",
        description: "Envío ingresado al sistema de gestión DASAI.",
        timestamp: "18 Ago, 08:00 hrs",
        location: "Hub Central",
        completed: true,
        current: false,
      },
      {
        id: "2",
        title: "Preparando y Asignando Flota",
        description: "Inspección de bultos y asignación de vehículo óptimo.",
        timestamp: "18 Ago, 09:30 hrs",
        location: "Centro de Despacho",
        completed: true,
        current: false,
      },
      {
        id: "3",
        title: "En Tránsito Activo",
        description: "Unidad en trayecto con trazabilidad satelital continua.",
        timestamp: "18 Ago, 11:00 hrs",
        location: "Ruta de Distribución",
        completed: true,
        current: true,
      },
      {
        id: "4",
        title: "Próximo a Entrega",
        description: "Coordinación de arribo a punto de entrega.",
        timestamp: "En proceso",
        location: "Comuna de Destino",
        completed: false,
        current: false,
      },
      {
        id: "5",
        title: "Entregado",
        description: "Cierre conforme de orden con comprobante de recepción.",
        timestamp: "Pendiente",
        location: "Destino",
        completed: false,
        current: false,
      },
    ],
  };
}
