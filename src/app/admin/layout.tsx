"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import AdminNavbar from "./AdminNavbar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

interface AdminUserMetadata {
  is_admin?: boolean;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAdminSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        const metadata = session?.user?.user_metadata as AdminUserMetadata;

        if (!session || !metadata?.is_admin) {
          router.replace("/login");
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error checking admin session:", error);
        router.replace("/login");
      }
    };

    checkAdminSession();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold">Checking admin credentials...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <AdminNavbar />
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}
