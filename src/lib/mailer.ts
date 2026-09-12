import nodemailer, { type SendMailOptions } from "nodemailer";
import { COMPANY_DATA } from "./company";

export const DEFAULT_RECIPIENTS = [
  "contacto@dasai.cl",
  "viviana.silva@dasai.cl",
  "nicolas.silva@dasai.cl",
];

export function getRecipients(): string[] {
  const envRecipients = process.env.NOTIFICATION_EMAILS;
  if (envRecipients) {
    return envRecipients.split(",").map((e) => e.trim()).filter(Boolean);
  }
  return DEFAULT_RECIPIENTS;
}

export function createZohoTransporter(host = "smtp.zoho.com", port = 465, secure = true) {
  const user = (process.env.SMTP_USER || process.env.ZOHO_EMAIL || "contacto@dasai.cl").trim();
  const rawPass = process.env.SMTP_PASS || process.env.ZOHO_PASSWORD || "";
  const pass = rawPass.replace(/\s+/g, "").trim();

  if (!pass) return null;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
}

export async function sendWithFallback(mailOptions: SendMailOptions) {
  const customHost = process.env.SMTP_HOST?.trim();
  const hosts = customHost 
    ? [customHost, "smtp.zoho.com", "smtppro.zoho.com"]
    : ["smtp.zoho.com", "smtppro.zoho.com"];

  let lastError: any = null;

  for (const host of hosts) {
    const transporter = createZohoTransporter(host, 465, true);
    if (!transporter) {
      console.info("[Mailer Simulation] Correo simulado en logs.");
      return { success: true, simulated: true };
    }

    try {
      const result = await transporter.sendMail(mailOptions);
      console.log(`[Mailer Success] Enviado mediante ${host}:`, result.messageId);
      return result;
    } catch (err: any) {
      lastError = err;
      console.warn(`[Mailer Warning] Falló envío en ${host}:`, err?.message);
    }
  }

  throw lastError;
}

export interface SendContactEmailParams {
  name: string;
  email: string;
  phone?: string | null;
  subject: string;
  message: string;
}

export async function sendContactNotification({
  name,
  email,
  phone,
  subject,
  message,
}: SendContactEmailParams) {
  const recipients = getRecipients();
  const senderEmail = (process.env.SMTP_USER || "contacto@dasai.cl").trim();

  const formattedDate = new Intl.DateTimeFormat("es-CL", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/Santiago",
  }).format(new Date());

  const htmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 20px; }
      .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
      .header { background: linear-gradient(135deg, #480CA8 0%, #240046 100%); padding: 30px 24px; text-align: center; color: #ffffff; }
      .badge { display: inline-block; background: #F72585; color: #ffffff; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; padding: 4px 12px; border-radius: 20px; margin-bottom: 12px; }
      .title { margin: 0; font-size: 22px; font-weight: 900; color: #ffffff; letter-spacing: -0.5px; }
      .content { padding: 30px 24px; }
      .field-card { background: #fdf8ff; border: 1px solid #eadbfc; border-radius: 12px; padding: 16px; margin-bottom: 16px; }
      .field-label { font-size: 11px; font-weight: 800; text-transform: uppercase; color: #6c5e8a; letter-spacing: 0.5px; margin-bottom: 4px; }
      .field-value { font-size: 15px; font-weight: 600; color: #10002b; }
      .message-box { background: #f8fafc; border-left: 4px solid #480CA8; padding: 16px; border-radius: 4px 12px 12px 4px; font-size: 14px; line-height: 1.6; color: #334155; margin-top: 16px; }
      .footer { background: #f8fafc; padding: 20px 24px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
      .btn { display: inline-block; background: #480CA8; color: #ffffff !important; text-decoration: none; font-weight: bold; font-size: 13px; padding: 10px 20px; border-radius: 8px; margin-top: 16px; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <div class="badge">Nuevo Contacto Web</div>
        <h1 class="title">Mensaje recibido en DASAI.cl</h1>
        <p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.9;">${formattedDate}</p>
      </div>
      <div class="content">
        <div class="field-card">
          <div class="field-label">Nombre del Remitente</div>
          <div class="field-value">${name}</div>
        </div>

        <div style="display: flex; gap: 12px;">
          <div class="field-card" style="flex: 1;">
            <div class="field-label">Correo Electrónico</div>
            <div class="field-value"><a href="mailto:${email}" style="color: #480CA8; text-decoration: none;">${email}</a></div>
          </div>
          <div class="field-card" style="flex: 1;">
            <div class="field-label">Teléfono de Contacto</div>
            <div class="field-value">${phone ? `<a href="tel:${phone}" style="color: #480CA8; text-decoration: none;">${phone}</a>` : "No especificado"}</div>
          </div>
        </div>

        <div class="field-card">
          <div class="field-label">Asunto</div>
          <div class="field-value">${subject}</div>
        </div>

        <div style="margin-top: 20px;">
          <div class="field-label">Contenido del Mensaje:</div>
          <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
        </div>

        <div style="text-align: center; margin-top: 24px;">
          <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)} - DASAI Logística" class="btn">Responder a ${name}</a>
        </div>
      </div>
      <div class="footer">
        Este correo fue enviado automáticamente desde el formulario de contacto del sitio web <strong>dasai.cl</strong>.<br>
        Destinatarios configurados: ${recipients.join(", ")}
      </div>
    </div>
  </body>
  </html>
  `;

  const mailOptions = {
    from: `"Web DASAI" <${senderEmail}>`,
    to: recipients,
    replyTo: email,
    subject: `[Web DASAI] Nuevo Mensaje: ${subject} - ${name}`,
    html: htmlContent,
    text: `Nuevo mensaje de contacto en dasai.cl\n\nNombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone || "N/A"}\nAsunto: ${subject}\n\nMensaje:\n${message}\n\nFecha: ${formattedDate}`,
  };

  return await sendWithFallback(mailOptions);
}

export interface SendQuoteEmailParams {
  firstName: string;
  lastName: string;
  company?: string | null;
  phone: string;
  email: string;
  region: string;
  city: string;
  serviceType: string;
  vehicleType: string;
  estimatedVolume?: string | null;
  frequency: string;
  origin: string;
  destination: string;
  description: string;
}

export async function sendQuoteNotification(data: SendQuoteEmailParams) {
  const recipients = getRecipients();
  const senderEmail = (process.env.SMTP_USER || "contacto@dasai.cl").trim();

  const formattedDate = new Intl.DateTimeFormat("es-CL", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/Santiago",
  }).format(new Date());

  const htmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 20px; }
      .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
      .header { background: linear-gradient(135deg, #480CA8 0%, #240046 100%); padding: 30px 24px; text-align: center; color: #ffffff; }
      .badge { display: inline-block; background: #F72585; color: #ffffff; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; padding: 4px 12px; border-radius: 20px; margin-bottom: 12px; }
      .title { margin: 0; font-size: 22px; font-weight: 900; color: #ffffff; letter-spacing: -0.5px; }
      .content { padding: 30px 24px; }
      .field-card { background: #fdf8ff; border: 1px solid #eadbfc; border-radius: 12px; padding: 14px 16px; margin-bottom: 12px; }
      .field-label { font-size: 11px; font-weight: 800; text-transform: uppercase; color: #6c5e8a; letter-spacing: 0.5px; margin-bottom: 3px; }
      .field-value { font-size: 14px; font-weight: 600; color: #10002b; }
      .route-box { background: linear-gradient(135deg, #240046 0%, #480CA8 100%); color: #ffffff; border-radius: 12px; padding: 16px; margin: 16px 0; text-align: center; }
      .message-box { background: #fdf8ff; border-left: 4px solid #480CA8; padding: 16px; border-radius: 4px 12px 12px 4px; font-size: 14px; line-height: 1.6; color: #334155; margin-top: 16px; }
      .footer { background: #f8fafc; padding: 20px 24px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
      .btn { display: inline-block; background: #F72585; color: #ffffff !important; text-decoration: none; font-weight: bold; font-size: 13px; padding: 12px 24px; border-radius: 8px; margin-top: 16px; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <div class="badge">Nueva Solicitud de Cotización</div>
        <h1 class="title">Cotización Requerida en DASAI</h1>
        <p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.9;">${formattedDate}</p>
      </div>
      <div class="content">
        <div class="route-box">
          <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; opacity: 0.8; letter-spacing: 1px;">Ruta Solicitada</div>
          <div style="font-size: 18px; font-weight: 900; margin-top: 4px;">${data.origin} &rarr; ${data.destination}</div>
          <div style="font-size: 12px; opacity: 0.9; margin-top: 4px;">${data.city} (${data.region.toUpperCase()})</div>
        </div>

        <div style="display: flex; gap: 12px;">
          <div class="field-card" style="flex: 1;">
            <div class="field-label">Cliente / Solicitante</div>
            <div class="field-value">${data.firstName} ${data.lastName}</div>
          </div>
          <div class="field-card" style="flex: 1;">
            <div class="field-label">Empresa</div>
            <div class="field-value">${data.company || "Particular"}</div>
          </div>
        </div>

        <div style="display: flex; gap: 12px;">
          <div class="field-card" style="flex: 1;">
            <div class="field-label">Correo</div>
            <div class="field-value"><a href="mailto:${data.email}" style="color: #480CA8; text-decoration: none;">${data.email}</a></div>
          </div>
          <div class="field-card" style="flex: 1;">
            <div class="field-label">Teléfono</div>
            <div class="field-value"><a href="tel:${data.phone}" style="color: #480CA8; text-decoration: none;">${data.phone}</a></div>
          </div>
        </div>

        <div style="display: flex; gap: 12px;">
          <div class="field-card" style="flex: 1;">
            <div class="field-label">Tipo de Servicio</div>
            <div class="field-value" style="text-transform: capitalize;">${data.serviceType}</div>
          </div>
          <div class="field-card" style="flex: 1;">
            <div class="field-label">Vehículo Requerido</div>
            <div class="field-value" style="text-transform: capitalize;">${data.vehicleType}</div>
          </div>
        </div>

        <div style="display: flex; gap: 12px;">
          <div class="field-card" style="flex: 1;">
            <div class="field-label">Volumen Estimado</div>
            <div class="field-value">${data.estimatedVolume || "No especificado"}</div>
          </div>
          <div class="field-card" style="flex: 1;">
            <div class="field-label">Frecuencia</div>
            <div class="field-value" style="text-transform: capitalize;">${data.frequency}</div>
          </div>
        </div>

        <div style="margin-top: 16px;">
          <div class="field-label">Detalles del Requerimiento:</div>
          <div class="message-box">${data.description.replace(/\n/g, "<br>")}</div>
        </div>

        <div style="text-align: center; margin-top: 24px;">
          <a href="mailto:${data.email}?subject=Cotización de Transporte - DASAI Logística" class="btn">Responder Cotización a ${data.firstName}</a>
        </div>
      </div>
      <div class="footer">
        Cotización enviada desde <strong>dasai.cl</strong>.<br>
        Destinatarios notificados: ${recipients.join(", ")}
      </div>
    </div>
  </body>
  </html>
  `;

  const mailOptions = {
    from: `"Web DASAI Cotizaciones" <${senderEmail}>`,
    to: recipients,
    replyTo: data.email,
    subject: `[Cotización DASAI] ${data.serviceType.toUpperCase()} - ${data.firstName} ${data.lastName} (${data.company || "Particular"})`,
    html: htmlContent,
    text: `Nueva cotización en dasai.cl\n\nCliente: ${data.firstName} ${data.lastName}\nEmpresa: ${data.company || "N/A"}\nTeléfono: ${data.phone}\nCorreo: ${data.email}\nServicio: ${data.serviceType}\nVehículo: ${data.vehicleType}\nVolumen: ${data.estimatedVolume || "N/A"}\nFrecuencia: ${data.frequency}\nRuta: ${data.origin} -> ${data.destination} (${data.city}, ${data.region})\n\nDescripción:\n${data.description}`,
  };

  return await sendWithFallback(mailOptions);
}

export interface SendDriverEmailParams {
  fullName: string;
  rut: string;
  address?: string | null;
  commune?: string | null;
  phone: string;
  secondaryPhone?: string | null;
  email?: string | null;
  education?: string | null;
  licensePlate?: string | null;
  vehicleModel?: string | null;
  vehicleYear?: string | null;
}

export async function sendDriverNotification(data: SendDriverEmailParams) {
  const recipients = getRecipients();
  const senderEmail = (process.env.SMTP_USER || "contacto@dasai.cl").trim();

  const formattedDate = new Intl.DateTimeFormat("es-CL", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/Santiago",
  }).format(new Date());

  const htmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0d1117; color: #e6edf3; margin: 0; padding: 20px; }
      .container { max-width: 640px; margin: 0 auto; background: #161b22; border-radius: 16px; overflow: hidden; border: 1px solid #30363d; box-shadow: 0 8px 24px rgba(0,0,0,0.5); }
      .header { background: linear-gradient(135deg, #480CA8 0%, #0d1117 100%); padding: 30px 24px; text-align: center; color: #ffffff; border-bottom: 1px solid #30363d; }
      .badge { display: inline-block; background: #238636; color: #ffffff; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; padding: 4px 12px; border-radius: 20px; margin-bottom: 12px; }
      .title { margin: 0; font-size: 22px; font-weight: 900; color: #ffffff; letter-spacing: -0.5px; }
      .content { padding: 26px 24px; }
      .section-heading { font-size: 12px; font-weight: 800; text-transform: uppercase; color: #58a6ff; letter-spacing: 1px; margin: 18px 0 10px 0; border-bottom: 1px solid #21262d; padding-bottom: 6px; }
      .grid-2 { display: flex; gap: 12px; margin-bottom: 10px; }
      .grid-3 { display: flex; gap: 10px; margin-bottom: 10px; }
      .field-card { background: #21262d; border: 1px solid #30363d; border-radius: 10px; padding: 12px 14px; flex: 1; }
      .field-label { font-size: 10px; font-weight: 800; text-transform: uppercase; color: #8b949e; letter-spacing: 0.5px; margin-bottom: 3px; }
      .field-value { font-size: 14px; font-weight: 600; color: #f0f6fc; word-break: break-word; }
      .footer { background: #0d1117; padding: 20px 24px; border-top: 1px solid #30363d; font-size: 12px; color: #8b949e; text-align: center; }
      .btn { display: inline-block; background: #238636; color: #ffffff !important; text-decoration: none; font-weight: bold; font-size: 13px; padding: 12px 24px; border-radius: 8px; margin-top: 16px; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <div class="badge">🚚 Postulación Chofer / Conductor</div>
        <h1 class="title">Nuevo Registro de Chofer en DASAI</h1>
        <p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.9; color: #8b949e;">${formattedDate}</p>
      </div>
      <div class="content">
        
        <div class="section-heading">👤 Datos Personales</div>
        <div class="grid-2">
          <div class="field-card">
            <div class="field-label">Nombre Completo</div>
            <div class="field-value">${data.fullName}</div>
          </div>
          <div class="field-card">
            <div class="field-label">RUT</div>
            <div class="field-value">${data.rut}</div>
          </div>
        </div>

        <div class="grid-2">
          <div class="field-card">
            <div class="field-label">Dirección</div>
            <div class="field-value">${data.address || "No especificada"}</div>
          </div>
          <div class="field-card">
            <div class="field-label">Comuna</div>
            <div class="field-value">${data.commune || "No especificada"}</div>
          </div>
        </div>

        <div class="grid-2">
          <div class="field-card">
            <div class="field-label">Teléfono Principal</div>
            <div class="field-value"><a href="tel:${data.phone}" style="color: #58a6ff; text-decoration: none;">${data.phone}</a></div>
          </div>
          <div class="field-card">
            <div class="field-label">WhatsApp / Secundario</div>
            <div class="field-value">${data.secondaryPhone ? `<a href="tel:${data.secondaryPhone}" style="color: #58a6ff; text-decoration: none;">${data.secondaryPhone}</a>` : "No especificado"}</div>
          </div>
        </div>

        <div class="grid-2">
          <div class="field-card">
            <div class="field-label">Correo Electrónico</div>
            <div class="field-value">${data.email ? `<a href="mailto:${data.email}" style="color: #58a6ff; text-decoration: none;">${data.email}</a>` : "No especificado"}</div>
          </div>
          <div class="field-card">
            <div class="field-label">Nivel de Estudios</div>
            <div class="field-value">${data.education || "No especificado"}</div>
          </div>
        </div>

        <div class="section-heading">🚛 Datos del Vehículo</div>
        <div class="grid-3">
          <div class="field-card">
            <div class="field-label">Patente</div>
            <div class="field-value">${data.licensePlate || "A consultar"}</div>
          </div>
          <div class="field-card">
            <div class="field-label">Modelo de Vehículo</div>
            <div class="field-value">${data.vehicleModel || "A consultar"}</div>
          </div>
          <div class="field-card">
            <div class="field-label">Año</div>
            <div class="field-value">${data.vehicleYear || "A consultar"}</div>
          </div>
        </div>

        <div style="text-align: center; margin-top: 24px;">
          ${data.phone ? `<a href="https://wa.me/${data.phone.replace(/\D/g, "")}" class="btn" style="background: #25D366; margin-right: 8px;">Contactar por WhatsApp</a>` : ""}
          ${data.email ? `<a href="mailto:${data.email}?subject=Postulación Conductor - DASAI Logística" class="btn">Enviar Correo</a>` : ""}
        </div>

      </div>
      <div class="footer">
        Postulación recibida desde el formulario <strong>Trabaja con Nosotros</strong> en <strong>dasai.cl</strong>.<br>
        Destinatarios notificados: ${recipients.join(", ")}
      </div>
    </div>
  </body>
  </html>
  `;

  const mailOptions = {
    from: `"Web DASAI Choferes" <${senderEmail}>`,
    to: recipients,
    replyTo: data.email || senderEmail,
    subject: `[Nuevo Chofer DASAI] ${data.fullName} - RUT: ${data.rut}`,
    html: htmlContent,
    text: `Nueva postulación de chofer en dasai.cl\n\nNombre: ${data.fullName}\nRUT: ${data.rut}\nTeléfono: ${data.phone}\nWhatsApp/Secundario: ${data.secondaryPhone || "N/A"}\nCorreo: ${data.email || "N/A"}\nDirección: ${data.address || "N/A"}, ${data.commune || "N/A"}\nEstudios: ${data.education || "N/A"}\nVehículo: ${data.vehicleModel || "N/A"} (${data.vehicleYear || "N/A"}) - Patente: ${data.licensePlate || "N/A"}`,
  };

  return await sendWithFallback(mailOptions);
}

export interface SendBotLeadParams {
  experienceTransport?: string;
  yearsExperience?: string;
  licenseType?: string;
  drivingExperienceCargoPassengers?: string;
  vehicleType?: string;
  vehicleOwnership?: string;
  vehicleYear?: string;
  vehicleDocValid?: string;
  communeCity?: string;
  shiftAvailability?: string;
  startAvailability?: string;
  cvUpdated?: string;
  cvFileName?: string;
  fullName: string;
  phone: string;
  email: string;
  additionalNotes?: string;
  requestedContact: boolean;
  rawAttachment?: {
    filename: string;
    content: string; // base64 string
    contentType?: string;
  };
}

export async function sendBotLeadNotification(data: SendBotLeadParams) {
  const recipients = getRecipients();
  const senderEmail = (process.env.SMTP_USER || "contacto@dasai.cl").trim();

  const formattedDate = new Intl.DateTimeFormat("es-CL", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/Santiago",
  }).format(new Date());

  const htmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 20px; }
      .container { max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #eadbfc; box-shadow: 0 4px 12px rgba(72, 12, 168, 0.08); }
      .header { background: linear-gradient(135deg, #240046 0%, #480CA8 50%, #7209B7 100%); padding: 30px 24px; text-align: center; color: #ffffff; }
      .badge { display: inline-block; background: #25D366; color: #ffffff; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; padding: 5px 14px; border-radius: 20px; margin-bottom: 12px; }
      .title { margin: 0; font-size: 22px; font-weight: 900; color: #ffffff; letter-spacing: -0.5px; }
      .content { padding: 28px 24px; }
      .section-title { font-size: 13px; font-weight: 800; text-transform: uppercase; color: #480CA8; letter-spacing: 0.5px; margin: 20px 0 10px 0; border-bottom: 2px solid #f3eef9; padding-bottom: 6px; }
      .grid { display: flex; gap: 12px; margin-bottom: 12px; flex-wrap: wrap; }
      .field-card { background: #fdf8ff; border: 1px solid #eadbfc; border-radius: 12px; padding: 12px 16px; flex: 1; min-width: 240px; }
      .field-label { font-size: 10px; font-weight: 800; text-transform: uppercase; color: #6c5e8a; letter-spacing: 0.5px; margin-bottom: 4px; }
      .field-value { font-size: 14px; font-weight: 700; color: #10002b; }
      .highlight-box { background: #25D366/10; border: 1px solid #25D366/30; border-radius: 12px; padding: 16px; margin: 16px 0; }
      .message-box { background: #f8fafc; border-left: 4px solid #7209B7; padding: 16px; border-radius: 4px 12px 12px 4px; font-size: 14px; line-height: 1.6; color: #334155; margin-top: 12px; }
      .footer { background: #f8fafc; padding: 20px 24px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
      .btn { display: inline-block; background: #25D366; color: #ffffff !important; text-decoration: none; font-weight: bold; font-size: 14px; padding: 12px 24px; border-radius: 10px; margin-top: 16px; }
      .btn-purple { display: inline-block; background: #480CA8; color: #ffffff !important; text-decoration: none; font-weight: bold; font-size: 14px; padding: 12px 24px; border-radius: 10px; margin-top: 16px; margin-left: 8px; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <div class="badge">💬 Lead WhatsApp Bot DASAI</div>
        <h1 class="title">Nuevo Prospecto Solicitó Contacto</h1>
        <p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.9;">${formattedDate}</p>
      </div>
      <div class="content">
        
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 14px 18px; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 20px;">✅</span>
          <span style="font-size: 13px; font-weight: 700; color: #166534;">
            El postulante completó el cuestionario interactivo y confirmó que desea ser contactado por DASAI.
          </span>
        </div>

        <div class="section-title">👤 1. Datos Personales y Contacto</div>
        <div class="grid">
          <div class="field-card">
            <div class="field-label">14. Nombre Completo</div>
            <div class="field-value">${data.fullName}</div>
          </div>
          <div class="field-card">
            <div class="field-label">15. Teléfono / WhatsApp</div>
            <div class="field-value"><a href="tel:${data.phone}" style="color: #480CA8; text-decoration: none;">${data.phone}</a></div>
          </div>
        </div>

        <div class="grid">
          <div class="field-card">
            <div class="field-label">16. Correo Electrónico</div>
            <div class="field-value"><a href="mailto:${data.email}" style="color: #480CA8; text-decoration: none;">${data.email}</a></div>
          </div>
          <div class="field-card">
            <div class="field-label">9. Comuna / Ciudad de Residencia</div>
            <div class="field-value">${data.communeCity || "No especificada"}</div>
          </div>
        </div>

        <div class="section-title">🚚 2. Experiencia y Licencia</div>
        <div class="grid">
          <div class="field-card">
            <div class="field-label">1. ¿Exp. en transporte?</div>
            <div class="field-value">${data.experienceTransport || "N/A"}</div>
          </div>
          <div class="field-card">
            <div class="field-label">2. Años de Experiencia</div>
            <div class="field-value">${data.yearsExperience || "N/A"}</div>
          </div>
        </div>

        <div class="grid">
          <div class="field-card">
            <div class="field-label">3. Licencia de Conducir</div>
            <div class="field-value" style="color: #480CA8;">${data.licenseType || "N/A"}</div>
          </div>
          <div class="field-card">
            <div class="field-label">4. ¿Exp. Carga / Pasajeros?</div>
            <div class="field-value">${data.drivingExperienceCargoPassengers || "N/A"}</div>
          </div>
        </div>

        <div class="section-title">🚛 3. Vehículo y Documentación</div>
        <div class="grid">
          <div class="field-card">
            <div class="field-label">5. Tipo de Vehículo</div>
            <div class="field-value">${data.vehicleType || "No tiene vehículo propio"}</div>
          </div>
          <div class="field-card">
            <div class="field-label">6. Propiedad del Vehículo</div>
            <div class="field-value">${data.vehicleOwnership || "N/A"}</div>
          </div>
        </div>

        <div class="grid">
          <div class="field-card">
            <div class="field-label">7. Año del Vehículo</div>
            <div class="field-value">${data.vehicleYear || "N/A"}</div>
          </div>
          <div class="field-card">
            <div class="field-label">8. Documentación Vigente</div>
            <div class="field-value">${data.vehicleDocValid || "N/A"}</div>
          </div>
        </div>

        <div class="section-title">⏱️ 4. Disponibilidad y CV</div>
        <div class="grid">
          <div class="field-card">
            <div class="field-label">10. Disponibilidad Turnos</div>
            <div class="field-value">${data.shiftAvailability || "N/A"}</div>
          </div>
          <div class="field-card">
            <div class="field-label">11. Fecha de Inicio</div>
            <div class="field-value">${data.startAvailability || "N/A"}</div>
          </div>
        </div>

        <div class="grid">
          <div class="field-card">
            <div class="field-label">12. CV Actualizado</div>
            <div class="field-value">${data.cvUpdated || "N/A"}</div>
          </div>
          <div class="field-card">
            <div class="field-label">13. Archivo CV Adjunto</div>
            <div class="field-value">${data.cvFileName ? `📄 ${data.cvFileName} (Adjunto al correo)` : "No adjuntado en chat"}</div>
          </div>
        </div>

        ${data.additionalNotes ? `
        <div style="margin-top: 16px;">
          <div class="field-label">17. Comentarios adicionales del postulante:</div>
          <div class="message-box">${data.additionalNotes.replace(/\n/g, "<br>")}</div>
        </div>
        ` : ""}

        <div style="text-align: center; margin-top: 28px;">
          <a href="https://wa.me/${data.phone.replace(/\D/g, "")}?text=${encodeURIComponent(`Hola ${data.fullName}, te contactamos desde DASAI Logística respecto a tu postulación realizada en nuestro asistente virtual.`)}" class="btn">Abrir WhatsApp con ${data.fullName}</a>
          <a href="mailto:${data.email}?subject=Postulación en DASAI Logística - ${encodeURIComponent(data.fullName)}" class="btn-purple">Enviar Correo</a>
        </div>

      </div>
      <div class="footer">
        Notificación generada automáticamente desde el Asistente Virtual / Bot de <strong>dasai.cl</strong>.<br>
        Destinatarios notificados: ${recipients.join(", ")}
      </div>
    </div>
  </body>
  </html>
  `;

  const mailOptions: SendMailOptions = {
    from: `"Bot DASAI WhatsApp" <${senderEmail}>`,
    to: recipients,
    replyTo: data.email || senderEmail,
    subject: `[Bot WhatsApp DASAI] Postulación Conductor: ${data.fullName} (${data.phone})`,
    html: htmlContent,
    text: `Nuevo lead del bot de WhatsApp en dasai.cl\n\nNombre: ${data.fullName}\nTeléfono: ${data.phone}\nCorreo: ${data.email}\nComuna: ${data.communeCity || "N/A"}\nLicencia: ${data.licenseType || "N/A"}\nExperiencia: ${data.yearsExperience || "N/A"}\nVehículo: ${data.vehicleType || "N/A"} (${data.vehicleYear || "N/A"})\nDisponibilidad: ${data.startAvailability || "N/A"}\nNotas: ${data.additionalNotes || "N/A"}`,
  };

  if (data.rawAttachment && data.rawAttachment.content) {
    mailOptions.attachments = [
      {
        filename: data.rawAttachment.filename,
        content: Buffer.from(data.rawAttachment.content, "base64"),
        contentType: data.rawAttachment.contentType || "application/pdf",
      },
    ];
  }

  return await sendWithFallback(mailOptions);
}

