import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Supabase URL or Key is missing.");
  console.error("URL:", supabaseUrl);
  console.error("KEY:", supabaseKey ? "Loaded" : "Missing");
  throw new Error("Supabase URL or Key is missing. Make sure env vars are set.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
