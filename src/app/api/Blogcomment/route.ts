import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

interface BlogCommentForm {
  blog_id: string;
  name: string;
  email: string;
  comment: string;
}

// ✅ Safe Supabase client initialization
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY || process.env.NEXT_PUBLIC_SUPABASE_KEY;

let supabase: ReturnType<typeof createClient> | null = null;

if (!supabaseUrl || !supabaseKey) {
  console.warn("⚠️ Warning: Supabase env vars are missing during build or runtime.");
} else {
  supabase = createClient(supabaseUrl, supabaseKey);
}

export async function POST(req: Request) {
  try {
    // 🔒 Double-check runtime env availability
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: "Server misconfiguration: Supabase not initialized." },
        { status: 500 }
      );
    }

    const { blog_id, name, email, comment } = (await req.json()) as BlogCommentForm;

    if (!blog_id || !name || !email || !comment) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const { error: insertError } = await supabase
      .from("blog_comments")
      .insert([{ blog_id, name, email, comment }]);

    if (insertError) {
      return NextResponse.json(
        { success: false, error: insertError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    let errorMessage = "Unknown error";
    if (error instanceof Error) errorMessage = error.message;
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
