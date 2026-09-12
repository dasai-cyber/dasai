import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { sendBotLeadNotification, type SendBotLeadParams } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const data: SendBotLeadParams = await req.json();

    if (!data.fullName || !data.phone) {
      return NextResponse.json(
        { success: false, message: "Nombre y teléfono son obligatorios" },
        { status: 400 }
      );
    }

    // 1. Guardar en Base de Datos si está disponible
    let applicationId = `BOT-${Date.now().toString().slice(-6)}`;
    try {
      const names = data.fullName.trim().split(" ");
      const firstName = names[0] || data.fullName;
      const lastName = names.slice(1).join(" ") || "";

      const record = await prisma.jobApplication.create({
        data: {
          firstName,
          lastName,
          email: data.email || `lead-bot-${Date.now()}@dasai.cl`,
          phone: data.phone,
          position: `Postulación Chofer (WhatsApp Bot)`,
          experience: `${data.yearsExperience || "Sin exp"} | Exp Transporte: ${data.experienceTransport || "N/A"} | Vehículo: ${data.vehicleType || "N/A"} (${data.vehicleYear || "N/A"})`,
          licenseType: data.licenseType || "No especificada",
          message: `Comuna: ${data.communeCity || "N/A"} | Doc Vigente: ${data.vehicleDocValid || "N/A"} | Turnos: ${data.shiftAvailability || "N/A"} | Inicio: ${data.startAvailability || "N/A"} | Notas: ${data.additionalNotes || "Ninguna"}`,
        },
      });
      applicationId = record.id;
    } catch (dbErr) {
      console.warn("DB offline or pending migration:", dbErr);
    }

    // 2. Enviar correo a contacto@dasai.cl si solicitó contacto
    if (data.requestedContact) {
      try {
        await sendBotLeadNotification(data);
      } catch (mailErr) {
        console.error("Error al enviar notificación de Bot por correo:", mailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "¡Información recibida exitosamente! Nos contactaremos contigo a la brevedad.",
        applicationId,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error en /api/bot-contact:", error);
    return NextResponse.json(
      { success: false, message: "Error interno al procesar tu solicitud" },
      { status: 500 }
    );
  }
}
