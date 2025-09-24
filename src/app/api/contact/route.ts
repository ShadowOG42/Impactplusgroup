import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, country, message } = (await req.json()) as ContactForm;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: "info@impactplusgroup.com",
        pass: process.env.OUTLOOK_APP_PASSWORD!,
      },
    });

    await transporter.sendMail({
      from: `"Impact Plus Website" <info@impactplusgroup.com>`,
      to: "info@impactplusgroup.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCountry: ${country}\nMessage: ${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    let errorMessage = "Unknown error";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error("Error sending email:", errorMessage);
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
