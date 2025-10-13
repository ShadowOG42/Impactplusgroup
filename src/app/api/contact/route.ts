import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { supabase } from "@/lib/supabaseClient";

interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  country?: string;
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

    // --- Save to Supabase ---
    const { error: insertError } = await supabase
      .from("contact_messages")
      .insert([{ name, email, phone, country, message }]);

    if (insertError) {
      console.error("Supabase insert error:", insertError.message);
      return NextResponse.json({ success: false, error: insertError.message }, { status: 500 });
    }

    // --- Send Email using Nodemailer ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Impact Plus Contact Form" <${process.env.GMAIL_USER}>`,
      to: "info@impactplusgroup.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Country:</strong> ${country || "N/A"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    let errorMessage = "Unknown error";
    if (error instanceof Error) errorMessage = error.message;
    console.error("Contact form error:", errorMessage);
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
