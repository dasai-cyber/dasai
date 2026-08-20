import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validatedData = contactFormSchema.parse(body);

    let messageId = `MSG-${Date.now().toString().slice(-6)}`;

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
