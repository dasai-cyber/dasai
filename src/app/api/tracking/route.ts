import { NextRequest, NextResponse } from "next/server";
import { getTrackingDetail } from "@/lib/mock-tracking";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code || !code.trim()) {
    return NextResponse.json(
      { success: false, message: "Debes proporcionar un código de seguimiento" },
      { status: 400 }
    );
  }

  const detail = getTrackingDetail(code);

  return NextResponse.json({
    success: true,
    data: detail,
  });
}
