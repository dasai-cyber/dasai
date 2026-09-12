import { z } from "zod";

/**
 * Validador de RUT chileno (algoritmo Módulo 11)
 */
export function validateRut(rut: string): boolean {
  if (!rut) return false;
  const clean = rut.replace(/[^0-9kK]/g, "").toUpperCase();
  if (clean.length < 7 || clean.length > 9) return false;

  const body = clean.slice(0, -1);
  const dv = clean.slice(-1);

  let sum = 0;
  let multiplier = 2;

  for (let i = body.length - 1; i >= 0; i--) {
    sum += parseInt(body[i], 10) * multiplier;
    multiplier = multiplier === 7 ? 2 : multiplier + 1;
  }

  const expectedDvNumber = 11 - (sum % 11);
  const expectedDv =
    expectedDvNumber === 11 ? "0" : expectedDvNumber === 10 ? "K" : expectedDvNumber.toString();

  return dv === expectedDv;
}

/**
 * Validador de correo electrónico estricto
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
}

/**
 * Validador de teléfono (formato chileno e internacional)
 */
export function isValidPhone(phone: string): boolean {
  if (!phone) return false;
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}

/**
 * Validador de año de vehículo
 */
export function isValidVehicleYear(year: string): boolean {
  if (!year) return false;
  const clean = year.trim();
  if (!/^\d{4}$/.test(clean)) return false;
  const num = parseInt(clean, 10);
  const currentYear = new Date().getFullYear();
  return num >= 1990 && num <= currentYear + 1;
}

// 1. Esquema Cotización
export const quoteFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El nombre solo debe contener letras"),
  lastName: z
    .string()
    .min(2, "El apellido debe tener al menos 2 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El apellido solo debe contener letras"),
  company: z.string().optional(),
  phone: z
    .string()
    .min(1, "El número de teléfono es obligatorio")
    .refine(isValidPhone, "Formato de teléfono inválido. Ingresa al menos 8 o 9 dígitos (ej: +56 9 8765 4321 o 987654321)"),
  email: z
    .string()
    .min(1, "El correo electrónico es obligatorio")
    .refine(isValidEmail, "Formato de correo inválido. Debe ser como ejemplo@dominio.cl o nombre@gmail.com"),
  region: z.string().min(1, "Selecciona una región de operación"),
  city: z.string().min(2, "Ingresa la ciudad o comuna de destino"),
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
  origin: z.string().min(3, "Ingresa el punto o comuna de origen (ej: Pudahuel, Santiago)"),
  destination: z.string().min(3, "Ingresa el punto o comuna de destino (ej: Viña del Mar)"),
  description: z.string().min(10, "Describe tu requerimiento (mínimo 10 caracteres)"),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

// 2. Esquema Contacto
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, "El nombre completo debe tener al menos 3 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El nombre no debe contener números ni símbolos"),
  email: z
    .string()
    .min(1, "El correo electrónico es obligatorio")
    .refine(isValidEmail, "Formato de correo inválido. Ejemplo: nombre@empresa.cl"),
  phone: z
    .string()
    .min(1, "El teléfono de contacto es obligatorio")
    .refine(isValidPhone, "Ingresa un número telefónico válido de 8 a 9 dígitos (ej: +56 9 1234 5678)"),
  subject: z.string().min(3, "Ingresa el asunto de tu consulta (mínimo 3 caracteres)"),
  message: z.string().min(10, "El mensaje debe ser más descriptivo (mínimo 10 caracteres)"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// 3. Esquema Seguimiento Satelital
export const trackingQuerySchema = z.object({
  trackingCode: z
    .string()
    .min(3, "Ingresa un código de seguimiento válido (ej: DAS-8921)")
    .transform((val) => val.trim().toUpperCase()),
});

export type TrackingQueryData = z.infer<typeof trackingQuerySchema>;

// 4. Esquema Chofer / Trabaja con Nosotros
export const driverRegistrationSchema = z.object({
  fullName: z
    .string()
    .min(3, "Ingresa tu nombre y apellido completo")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El nombre no debe contener números ni símbolos especiales"),
  rut: z
    .string()
    .min(8, "Ingresa el RUT con dígito verificador (ej: 12.345.678-9)")
    .refine(validateRut, "RUT inválido. Verifica que los números y el dígito verificador sean correctos (ej: 12.345.678-9)"),
  address: z.string().optional().or(z.literal("")),
  commune: z.string().optional().or(z.literal("")),
  phone: z
    .string()
    .min(1, "El teléfono de contacto es obligatorio")
    .refine(isValidPhone, "Ingresa un número de teléfono válido (ej: +56 9 8765 4321 o 987654321)"),
  secondaryPhone: z
    .string()
    .optional()
    .or(z.literal(""))
    .refine((val) => !val || isValidPhone(val), "Formato de WhatsApp secundario inválido (ej: +56 9 1122 3344)"),
  email: z
    .string()
    .optional()
    .or(z.literal(""))
    .refine((val) => !val || isValidEmail(val), "Formato de correo inválido. Ejemplo: nombre@correo.cl"),
  education: z.string().optional().or(z.literal("")),
  licensePlate: z
    .string()
    .optional()
    .or(z.literal(""))
    .refine(
      (val) => !val || /^[a-zA-Z0-9]{2,4}[-\s]?[a-zA-Z0-9]{2,4}$/.test(val.trim()),
      "Formato de patente inválido (ej: ABCD-12 o AB-1234)"
    ),
  vehicleModel: z.string().optional().or(z.literal("")),
  vehicleYear: z
    .string()
    .optional()
    .or(z.literal(""))
    .refine(
      (val) => !val || isValidVehicleYear(val),
      `El año debe ser de 4 dígitos entre 1990 y ${new Date().getFullYear() + 1} (ej: 2021)`
    ),
});

export type DriverRegistrationData = z.infer<typeof driverRegistrationSchema>;
export const jobApplicationSchema = driverRegistrationSchema;
export type JobApplicationData = DriverRegistrationData;

