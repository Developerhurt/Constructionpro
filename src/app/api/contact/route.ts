import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // TODO: hook into email provider (Resend, SendGrid) or CRM (HubSpot)
    console.log("CONTACT_FORM_SUBMISSION", body);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
