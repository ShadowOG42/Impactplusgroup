// File: src/lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

// Use environment variables if available, otherwise fallback to your hardcoded public anon key
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://wuenuvgxasmlkqohnrbr.supabase.co";

const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1ZW51dmd4YXNtbGtxb2hucmJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwNzc5OTYsImV4cCI6MjA3NDY1Mzk5Nn0.w7s8ZdOYS6-25LqyJ1NbWv9UVU7cZtGFahZmmL-kgrE";

// Check that we have both values
if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Supabase URL or Key is missing. Make sure env vars are set!"
  );
}

// Export the client
export const supabase = createClient(supabaseUrl, supabaseKey);
