import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getRecipients } from "@/lib/mailer";

export async function GET() {
  const user = (process.env.SMTP_USER || process.env.ZOHO_EMAIL || "contacto@dasai.cl").trim();
  const rawPass = process.env.SMTP_PASS || process.env.ZOHO_PASSWORD || "";
  const pass = rawPass.replace(/\s+/g, "").trim();
  const recipients = getRecipients();

  if (!pass) {
    return NextResponse.json(
      {
        success: false,
        error: "Falta la variable SMTP_PASS en Vercel.",
        help: "Debes agregar la contraseña de aplicación de Zoho en Vercel.",
      },
      { status: 500 }
    );
  }

  // Lista de combinaciones de servidores Zoho a probar automáticamente
  const candidates = [
    { host: "smtp.zoho.com", port: 465, secure: true, name: "Zoho Global SSL (465)" },
    { host: "smtppro.zoho.com", port: 465, secure: true, name: "Zoho Workplace SSL (465)" },
    { host: "smtp.zoho.com", port: 587, secure: false, name: "Zoho Global TLS (587)" },
  ];

  const attempts = [];

  for (const candidate of candidates) {
    try {
      const transporter = nodemailer.createTransport({
        host: candidate.host,
        port: candidate.port,
        secure: candidate.secure,
        auth: {
          user,
          pass,
        },
        tls: {
          rejectUnauthorized: false,
        },
        connectionTimeout: 8000,
      });

      await transporter.verify();

      // Si verify pasa, enviar correo de prueba
      const info = await transporter.sendMail({
        from: `"Diagnóstico DASAI" <${user}>`,
        to: recipients,
        subject: "✅ ¡Correo de Prueba DASAI Funcionando!",
        text: `El sistema de correos está conectado con éxito a Zoho Mail.\nServidor: ${candidate.host}:${candidate.port}\nUsuario emisor: ${user}\nDestinatarios: ${recipients.join(", ")}`,
        html: `
          <div style="font-family: sans-serif; padding: 24px; background: #0f172a; color: #f8fafc; border-radius: 12px;">
            <h2 style="color: #4ade80; margin-top: 0;">🎉 ¡Conexión con Zoho Mail Exitosa!</h2>
            <p>Los formularios de tu web <strong>dasai.cl</strong> ya pueden enviar correos en vivo.</p>
            <p><strong>Servidor utilizado:</strong> ${candidate.host} (Puerto ${candidate.port})</p>
            <p><strong>Remitente autenticado:</strong> ${user}</p>
            <p><strong>Destinatarios:</strong> ${recipients.join(", ")}</p>
          </div>
        `,
      });

      return NextResponse.json({
        success: true,
        message: `¡Conexión exitosa a través de ${candidate.host}! Revisa tu bandeja de entrada en Zoho.`,
        successfulServer: `${candidate.host}:${candidate.port}`,
        messageId: info.messageId,
        user,
        recipients,
      });
    } catch (err: any) {
      attempts.push({
        server: `${candidate.host}:${candidate.port}`,
        error: err.message,
        code: err.code || null,
        response: err.response || null,
      });
    }
  }

  // Si todas fallaron con 535
  const isAuthError = attempts.some((a) => a.error?.includes("535") || a.code === "EAUTH");

  return NextResponse.json(
    {
      success: false,
      reason: isAuthError ? "AUTH_FAILED" : "CONNECTION_FAILED",
      error: isAuthError
        ? "Zoho rechazó la contraseña (535 Authentication Failed). La contraseña ingresada no corresponde al usuario " + user + "."
        : "No fue posible conectar con los servidores SMTP de Zoho.",
      diagnostics: {
        authenticatedUser: user,
        passwordLength: pass.length,
        recipients,
        serverAttempts: attempts,
      },
      howToFix: isAuthError
        ? [
            `1. Verifica con qué usuario de Zoho generaste la 'Contraseña de Aplicación': si la generaste con la cuenta de Viviana (viviana.silva@dasai.cl), debes cambiar en Vercel la variable SMTP_USER a 'viviana.silva@dasai.cl'.`,
            `2. Si quieres que el usuario sea 'contacto@dasai.cl', debes iniciar sesión en Zoho específicamente como 'contacto@dasai.cl' y generar la contraseña de aplicación desde esa cuenta.`,
            `3. Copia las 16 letras de la contraseña de aplicación generada en Zoho y pégala en Vercel en la variable SMTP_PASS.`,
          ]
        : ["Verifica tu conexión y que el acceso SMTP esté habilitado en Zoho."],
    },
    { status: 500 }
  );
}
