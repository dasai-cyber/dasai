import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { prisma } from "@/lib/db";
import { sendContactNotification } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validatedData = contactFormSchema.parse(body);

    let messageId = `MSG-${Date.now().toString().slice(-6)}`;

    // 1. Guardar en Base de Datos si está disponible
    try {
      const record = await prisma.contactMessage.create({
        data: {
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone || null,
          subject: validatedData.subject,
          message: validatedData.message,
        },
      });
      messageId = record.id;
    } catch (dbErr) {
      console.warn("DB offline or pending migration:", dbErr);
    }

    // 2. Enviar notificación por correo a viviana.silva@dasai.cl y nicolas.silva@dasai.cl
    try {
      await sendContactNotification({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        subject: validatedData.subject,
        message: validatedData.message,
      });
    } catch (mailErr) {
      console.error("Error al enviar notificación por correo:", mailErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Tu mensaje ha sido enviado correctamente. Responderemos a la brevedad.",
        messageId,
      },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json(
        { success: false, message: "Datos inválidos", errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Error interno al enviar el mensaje" },
      { status: 500 }
    );
  }
}
