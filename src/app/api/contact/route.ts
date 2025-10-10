import { NextResponse } from "next/server";
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

     

    const { error: insertError } = await supabase
      .from("contact_messages")
      .insert([{ name, email, phone, country, message }]);

    if (insertError) {
      return NextResponse.json({ success: false, error: insertError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    let errorMessage = "Unknown error";
    if (error instanceof Error) errorMessage = error.message;
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
