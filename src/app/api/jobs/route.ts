import { NextRequest, NextResponse } from "next/server";
import { driverRegistrationSchema } from "@/lib/validations";
import { prisma } from "@/lib/db";
import { sendDriverNotification } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = driverRegistrationSchema.parse(body);

    let jobId = `CHOFER-${Date.now().toString().slice(-6)}`;

    // 1. Guardar en Base de Datos si está disponible
    try {
      const names = validatedData.fullName.trim().split(" ");
      const firstName = names[0] || validatedData.fullName;
      const lastName = names.slice(1).join(" ") || "";

      const record = await prisma.jobApplication.create({
        data: {
          firstName,
          lastName,
          email: validatedData.email || `${validatedData.rut.replace(/[^a-zA-Z0-9]/g, "")}@dasai-postulante.local`,
          phone: validatedData.phone,
          position: `Chofer / Conductor`,
          experience: `Vehículo: ${validatedData.vehicleModel || "N/A"} (${validatedData.vehicleYear || "N/A"}) - Patente: ${validatedData.licensePlate || "N/A"}`,
          licenseType: "Conductor",
          message: `RUT: ${validatedData.rut} | Dirección: ${validatedData.address || "N/A"}, ${validatedData.commune || "N/A"} | WhatsApp: ${validatedData.secondaryPhone || "N/A"} | Estudios: ${validatedData.education || "N/A"}`,
        },
      });
      jobId = record.id;
    } catch (dbErr) {
      console.warn("DB offline or pending migration:", dbErr);
    }

    // 2. Enviar notificación por correo a contacto@dasai.cl (que llega a viviana.silva@dasai.cl y nicolas.silva@dasai.cl)
    try {
      await sendDriverNotification({
        fullName: validatedData.fullName,
        rut: validatedData.rut,
        address: validatedData.address,
        commune: validatedData.commune,
        phone: validatedData.phone,
        secondaryPhone: validatedData.secondaryPhone,
        email: validatedData.email,
        education: validatedData.education,
        licensePlate: validatedData.licensePlate,
        vehicleModel: validatedData.vehicleModel,
        vehicleYear: validatedData.vehicleYear,
      });
    } catch (mailErr) {
      console.error("Error al enviar notificación de chofer por correo:", mailErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: "¡Registro de chofer enviado con éxito! Nos contactaremos contigo a la brevedad.",
        jobId,
      },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json(
        { success: false, message: "Por favor revisa los campos requeridos", errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Error interno al enviar el registro" },
      { status: 500 }
    );
  }
}
