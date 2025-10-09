import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabase: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  if (!supabase) {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error(
        "Supabase URL or Key is missing. Make sure env vars are set."
      );
    }

    supabase = createClient(supabaseUrl, supabaseKey);
  }

  return supabase;
}
