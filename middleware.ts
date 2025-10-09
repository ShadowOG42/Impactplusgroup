import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSupabaseClient } from "./src/lib/supabaseClient";

export async function middleware(req: NextRequest) {
  const supabase = getSupabaseClient();
  const { data: { session } } = await supabase.auth.getSession();

  // If no session and path starts with /admin → redirect to login
  if (!session && req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // applies to all admin routes
};
