import { NextRequest, NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validations";
import { prisma } from "@/lib/db";
import { sendQuoteNotification } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot anti-spam check
    if (body.website_url_honey) {
      return NextResponse.json({ success: true, message: "Cotización recibida" }, { status: 200 });
    }

    const validatedData = quoteFormSchema.parse(body);

    let savedId = `QT-${Date.now().toString().slice(-6)}`;

    // 1. Guardar en Base de Datos si está disponible
    try {
      const record = await prisma.quoteRequest.create({
        data: {
          firstName: validatedData.firstName,
          lastName: validatedData.lastName,
          company: validatedData.company || null,
          phone: validatedData.phone,
          email: validatedData.email,
          region: validatedData.region,
          city: validatedData.city,
          serviceType: validatedData.serviceType,
          vehicleType: validatedData.vehicleType,
          estimatedVolume: validatedData.estimatedVolume || null,
          frequency: validatedData.frequency,
          origin: validatedData.origin,
          destination: validatedData.destination,
          description: validatedData.description,
        },
      });
      savedId = record.id;
    } catch (dbErr) {
      console.warn("DB offline or pending migration, proceeding with memory response:", dbErr);
    }

    // 2. Enviar notificación por correo a viviana.silva@dasai.cl y nicolas.silva@dasai.cl
    try {
      await sendQuoteNotification({
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        company: validatedData.company,
        phone: validatedData.phone,
        email: validatedData.email,
        region: validatedData.region,
        city: validatedData.city,
        serviceType: validatedData.serviceType,
        vehicleType: validatedData.vehicleType,
        estimatedVolume: validatedData.estimatedVolume,
        frequency: validatedData.frequency,
        origin: validatedData.origin,
        destination: validatedData.destination,
        description: validatedData.description,
      });
    } catch (mailErr) {
      console.error("Error al enviar notificación de cotización por correo:", mailErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Cotización registrada exitosamente. Un ejecutivo te contactará en breve.",
        quoteId: savedId,
      },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          message: "Datos de formulario inválidos",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    console.error("API Quote Error:", error);
    return NextResponse.json(
      { success: false, message: "Error interno al procesar la cotización" },
      { status: 500 }
    );
  }
}
