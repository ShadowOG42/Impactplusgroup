import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AdminNavbar() {
  const router = useRouter();
  const [adminEmail, setAdminEmail] = useState<string | null>(null);

  useEffect(() => {
    const checkAdmin = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/admin/login");
      } else {
        setAdminEmail(session.user.email ?? null);
      }
    };
    checkAdmin();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/");
  };

  return (
    <nav
      className={`w-full bg-blue-600 text-white p-4 flex justify-between items-center ${montserrat.className}`}
    >
      {/* Title in Georgia font */}
      <div className="text-xl font-bold" style={{ fontFamily: "Georgia, serif" }}>
        <Link href="/admin">Impact Plus Admin</Link>
      </div>

      {/* Email and button in Montserrat */}
      <div className="flex items-center gap-4">
        {adminEmail && <span className="text-sm md:text-base">👤 {adminEmail}</span>}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition font-medium"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
