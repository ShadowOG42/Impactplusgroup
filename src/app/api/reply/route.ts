import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { to, subject, message } = await req.json();

  if (!to || !subject || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Impact Plus Group" <${process.env.GMAIL_USER}>`,
      to,
      subject,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "An unknown error occurred";

    console.error("Email sending error:", errorMessage);

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
