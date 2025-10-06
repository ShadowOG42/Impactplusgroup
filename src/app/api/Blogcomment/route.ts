import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

interface BlogCommentForm {
  blog_id: string;
  name: string;
  email: string;
  comment: string;
}

export async function POST(req: Request) {
  try {
    const { blog_id, name, email, comment } = (await req.json()) as BlogCommentForm;

    if (!blog_id || !name || !email || !comment) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const { error: insertError } = await supabase
      .from("blog_comments")
      .insert([{ blog_id, name, email, comment }]);

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
