import { NextResponse } from "next/server";
import { PRESETS } from "../../../lib/clerk-presets";

export async function GET() {
  return NextResponse.json(
    PRESETS.map((p) => ({
      id: p.id,
      label: p.label,
      description: p.description,
    }))
  );
}
