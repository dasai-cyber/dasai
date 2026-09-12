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
          position: `Chofer - ${validatedData.service}`,
          experience: `Vehículo: ${validatedData.vehicleModel || "N/A"} (${validatedData.vehicleYear || "N/A"}) - Patente: ${validatedData.licensePlate || "N/A"}`,
          licenseType: validatedData.service,
          message: `RUT: ${validatedData.rut} | Dirección: ${validatedData.address || "N/A"}, ${validatedData.commune || "N/A"} | WhatsApp: ${validatedData.secondaryPhone || "N/A"} | N° Local: ${validatedData.localNumber || "N/A"} | Estado Civil: ${validatedData.maritalStatus || "N/A"} | Estudios: ${validatedData.education || "N/A"}`,
        },
      });
      jobId = record.id;
    } catch (dbErr) {
      console.warn("DB offline or pending migration:", dbErr);
    }

    // 2. Enviar notificación por correo a contacto@dasai.cl, viviana.silva@dasai.cl, nicolas.silva@dasai.cl
    try {
      await sendDriverNotification({
        fullName: validatedData.fullName,
        rut: validatedData.rut,
        address: validatedData.address,
        commune: validatedData.commune,
        phone: validatedData.phone,
        secondaryPhone: validatedData.secondaryPhone,
        email: validatedData.email,
        localNumber: validatedData.localNumber,
        maritalStatus: validatedData.maritalStatus,
        education: validatedData.education,
        service: validatedData.service,
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
        message: "¡Postulación enviada con éxito! Nuestro equipo de operaciones se contactará contigo a la brevedad.",
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
      { success: false, message: "Error interno al enviar la postulación" },
      { status: 500 }
    );
  }
}
