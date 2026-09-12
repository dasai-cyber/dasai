import { NextResponse } from "next/server";
import { getTransporter, getRecipients } from "@/lib/mailer";

export async function GET() {
  const host = (process.env.SMTP_HOST || "smtp.zoho.com").trim();
  const port = Number(process.env.SMTP_PORT) || 465;
  const user = (process.env.SMTP_USER || process.env.ZOHO_EMAIL || "contacto@dasai.cl").trim();
  const hasPass = Boolean(process.env.SMTP_PASS || process.env.ZOHO_PASSWORD);
  const recipients = getRecipients();

  const transporter = getTransporter();

  if (!transporter) {
    return NextResponse.json(
      {
        success: false,
        error: "SMTP_PASS no está configurado en las variables de entorno de Vercel.",
        config: { host, port, user, hasPass, recipients },
      },
      { status: 500 }
    );
  }

  try {
    // 1. Verificar autenticación con el servidor Zoho
    await transporter.verify();

    // 2. Enviar correo de prueba
    const info = await transporter.sendMail({
      from: `"Diagnóstico DASAI" <${user}>`,
      to: recipients,
      subject: "✅ Prueba de Conexión Exitosa — Zoho Mail & DASAI",
      text: `El sistema de correos de DASAI está funcionando al 100%.\n\nServidor: ${host}\nUsuario: ${user}\nDestinatarios: ${recipients.join(", ")}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; color: #166534;">
          <h2 style="margin: 0 0 10px 0;">🎉 ¡Conexión con Zoho Mail Exitosa!</h2>
          <p>Tu sitio web corporativo <strong>dasai.cl</strong> ya puede enviar correos directamente a <strong>${recipients.join(", ")}</strong>.</p>
          <hr style="border: 0; border-top: 1px solid #bbf7d0; margin: 15px 0;">
          <p style="font-size: 12px; color: #15803d;">Enviado desde Vercel usando ${host}:${port} como ${user}.</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "¡Correo de prueba enviado con éxito! Revisa tu bandeja de entrada.",
      messageId: info.messageId,
      config: { host, port, user, recipients },
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Error al conectar con Zoho Mail",
        code: error.code || null,
        response: error.response || null,
        config: { host, port, user, hasPass, recipients },
      },
      { status: 500 }
    );
  }
}
