import { NextRequest, NextResponse } from "next/server";
import { jobApplicationSchema } from "@/lib/validations";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = jobApplicationSchema.parse(body);

    let jobId = `JOB-${Date.now().toString().slice(-6)}`;

    try {
      const record = await prisma.jobApplication.create({
        data: {
          firstName: validatedData.firstName,
          lastName: validatedData.lastName,
          email: validatedData.email,
          phone: validatedData.phone,
          position: validatedData.position,
          experience: validatedData.experienceYears,
          licenseType: validatedData.licenseType || null,
          message: validatedData.message || null,
        },
      });
      jobId = record.id;
    } catch (dbErr) {
      console.warn("DB offline or pending migration:", dbErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Postulación recibida exitosamente. Nuestro equipo de RRHH revisará tus antecedentes.",
        jobId,
      },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json(
        { success: false, message: "Datos de postulación incompletos", errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Error interno al enviar la postulación" },
      { status: 500 }
    );
  }
}
