export async function GET() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_KEY;
  return new Response(
    JSON.stringify({
      SUPABASE_URL: url || "❌ Missing",
      SUPABASE_KEY: key ? "✅ Exists" : "❌ Missing",
    }),
    { status: 200 }
  );
}
