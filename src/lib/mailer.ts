import nodemailer from "nodemailer";
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

export function getTransporter() {
  const host = process.env.SMTP_HOST || "smtppro.zoho.com";
  const port = Number(process.env.SMTP_PORT) || 465;
  const user = process.env.SMTP_USER || process.env.ZOHO_EMAIL || "contacto@dasai.cl";
  const pass = process.env.SMTP_PASS || process.env.ZOHO_PASSWORD || "";

  if (!pass) {
    console.warn("[Mailer Warning] No se ha configurado SMTP_PASS en las variables de entorno de Vercel. El correo se simulará en logs.");
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true para SSL en 465, false para TLS en 587
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
  const transporter = getTransporter();

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

  if (!transporter) {
    console.info(`[Mailer] Simulación: Correo de contacto recibido de ${name} (${email}) dirigido a: ${recipients.join(", ")}`);
    return { success: true, simulated: true };
  }

  const senderEmail = process.env.SMTP_USER || "contacto@dasai.cl";

  const mailOptions = {
    from: `"Web DASAI" <${senderEmail}>`,
    to: recipients,
    replyTo: email,
    subject: `[Web DASAI] Nuevo Mensaje: ${subject} - ${name}`,
    html: htmlContent,
    text: `Nuevo mensaje de contacto en dasai.cl\n\nNombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone || "N/A"}\nAsunto: ${subject}\n\nMensaje:\n${message}\n\nFecha: ${formattedDate}`,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("[Mailer Success] Contacto enviado a:", recipients, "MessageId:", result.messageId);
    return result;
  } catch (err) {
    console.error("[Mailer Error] Error enviando correo de contacto:", err);
    throw err;
  }
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
  const transporter = getTransporter();

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
      .badge { display: inline-block; background: #FF6B00; color: #ffffff; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; padding: 4px 12px; border-radius: 20px; margin-bottom: 12px; }
      .title { margin: 0; font-size: 22px; font-weight: 900; color: #ffffff; letter-spacing: -0.5px; }
      .content { padding: 30px 24px; }
      .field-card { background: #fdf8ff; border: 1px solid #eadbfc; border-radius: 12px; padding: 14px 16px; margin-bottom: 12px; }
      .field-label { font-size: 11px; font-weight: 800; text-transform: uppercase; color: #6c5e8a; letter-spacing: 0.5px; margin-bottom: 3px; }
      .field-value { font-size: 14px; font-weight: 600; color: #10002b; }
      .route-box { background: #0f2c59; color: #ffffff; border-radius: 12px; padding: 16px; margin: 16px 0; text-align: center; }
      .message-box { background: #f8fafc; border-left: 4px solid #FF6B00; padding: 16px; border-radius: 4px 12px 12px 4px; font-size: 14px; line-height: 1.6; color: #334155; margin-top: 16px; }
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

  if (!transporter) {
    console.info(`[Mailer] Simulación: Cotización de ${data.firstName} ${data.lastName} enviada a: ${recipients.join(", ")}`);
    return { success: true, simulated: true };
  }

  const senderEmail = process.env.SMTP_USER || "contacto@dasai.cl";

  const mailOptions = {
    from: `"Web DASAI Cotizaciones" <${senderEmail}>`,
    to: recipients,
    replyTo: data.email,
    subject: `[Cotización DASAI] ${data.serviceType.toUpperCase()} - ${data.firstName} ${data.lastName} (${data.company || "Particular"})`,
    html: htmlContent,
    text: `Nueva cotización en dasai.cl\n\nCliente: ${data.firstName} ${data.lastName}\nEmpresa: ${data.company || "N/A"}\nTeléfono: ${data.phone}\nCorreo: ${data.email}\nServicio: ${data.serviceType}\nVehículo: ${data.vehicleType}\nVolumen: ${data.estimatedVolume || "N/A"}\nFrecuencia: ${data.frequency}\nRuta: ${data.origin} -> ${data.destination} (${data.city}, ${data.region})\n\nDescripción:\n${data.description}`,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("[Mailer Success] Cotización enviada a:", recipients, "MessageId:", result.messageId);
    return result;
  } catch (err) {
    console.error("[Mailer Error] Error enviando cotización:", err);
    throw err;
  }
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
  const transporter = getTransporter();

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

  if (!transporter) {
    console.info(`[Mailer] Simulación: Postulación de chofer ${data.fullName} (${data.rut}) enviada a: ${recipients.join(", ")}`);
    return { success: true, simulated: true };
  }

  const senderEmail = process.env.SMTP_USER || "contacto@dasai.cl";

  const mailOptions = {
    from: `"Web DASAI Choferes" <${senderEmail}>`,
    to: recipients,
    replyTo: data.email || senderEmail,
    subject: `[Nuevo Chofer DASAI] ${data.fullName} - RUT: ${data.rut}`,
    html: htmlContent,
    text: `Nueva postulación de chofer en dasai.cl\n\nNombre: ${data.fullName}\nRUT: ${data.rut}\nTeléfono: ${data.phone}\nWhatsApp/Secundario: ${data.secondaryPhone || "N/A"}\nCorreo: ${data.email || "N/A"}\nDirección: ${data.address || "N/A"}, ${data.commune || "N/A"}\nEstudios: ${data.education || "N/A"}\nVehículo: ${data.vehicleModel || "N/A"} (${data.vehicleYear || "N/A"}) - Patente: ${data.licensePlate || "N/A"}`,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("[Mailer Success] Chofer enviado a:", recipients, "MessageId:", result.messageId);
    return result;
  } catch (err) {
    console.error("[Mailer Error] Error enviando notificación de chofer:", err);
    throw err;
  }
}
