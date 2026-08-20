import { z } from "zod";

export const quoteFormSchema = z.object({
  firstName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  lastName: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
  company: z.string().optional(),
  phone: z
    .string()
    .min(8, "Ingresa un número telefónico válido (ej: +56912345678 o 912345678)")
    .regex(/^(\+?56)?\s?9?\d{8}$|^(\+?56)?\s?2?\d{8}$|^[\d\s+-]{8,15}$/, "Formato telefónico inválido"),
  email: z.string().email("Ingresa un correo electrónico válido"),
  region: z.string().min(1, "Selecciona una región de operación"),
  city: z.string().min(2, "Ingresa la ciudad o comuna"),
  serviceType: z.enum(["ultima-milla", "distribucion", "transporte-carga", "ecommerce"], {
    errorMap: () => ({ message: "Selecciona el tipo de servicio requerido" }),
  }),
  vehicleType: z.enum(["camioneta", "furgon", "camion-34", "camion-pesado", "especial", "por-definir"], {
    errorMap: () => ({ message: "Selecciona el tipo de vehículo" }),
  }),
  estimatedVolume: z.string().optional(),
  frequency: z.enum(["unico", "diario", "semanal", "mensual", "a-convenir"], {
    errorMap: () => ({ message: "Selecciona la frecuencia estimada" }),
  }),
  origin: z.string().min(3, "Ingresa el punto o comuna de origen"),
  destination: z.string().min(3, "Ingresa el punto o comuna de destino"),
  description: z.string().min(10, "Describe brevemente tu requerimiento (mínimo 10 caracteres)"),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre completo es requerido"),
  email: z.string().email("Ingresa un correo electrónico válido"),
  phone: z.string().min(8, "Ingresa un teléfono de contacto válido"),
  subject: z.string().min(3, "Ingresa el asunto del mensaje"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const trackingQuerySchema = z.object({
  trackingCode: z
    .string()
    .min(3, "Ingresa un código de seguimiento válido")
    .transform((val) => val.trim().toUpperCase()),
});

export type TrackingQueryData = z.infer<typeof trackingQuerySchema>;

export const jobApplicationSchema = z.object({
  firstName: z.string().min(2, "Ingresa tu nombre"),
  lastName: z.string().min(2, "Ingresa tu apellido"),
  email: z.string().email("Ingresa un correo electrónico válido"),
  phone: z.string().min(8, "Ingresa un número de contacto válido"),
  position: z.enum([
    "conductor-a2",
    "conductor-a4",
    "conductor-a5",
    "peoneta-auxiliar",
    "operador-bodega",
    "ejecutivo-logistico",
    "otro",
  ], {
    errorMap: () => ({ message: "Selecciona el cargo al que postulas" }),
  }),
  licenseType: z.string().optional(),
  experienceYears: z.string().min(1, "Indica tus años de experiencia"),
  message: z.string().optional(),
});

export type JobApplicationData = z.infer<typeof jobApplicationSchema>;
