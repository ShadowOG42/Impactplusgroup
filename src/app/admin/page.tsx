"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
 

export default function AdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // Protect the page: Only admins can access
  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session || session.user.user_metadata?.role !== "admin") {
        router.replace("/login"); // redirect to login if not logged in or not admin
      } else {
        setLoading(false); // admin logged in
      }
    };
    checkAuth();
  }, [router]);

  if (loading) return <p className="text-center mt-10">Checking credentials...</p>;

  return (
    <>
       
      <section className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6 md:px-16 lg:px-32">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-24">
            <Image
              src="/Certificates/Logo.jpg"
              alt="Impact Plus Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-12 text-center">
          Impact Plus Group Admin Dashboard
        </h1>

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">
          {/* Messages Section */}
          <Link
            href="/admin/messages"
            className="group bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center justify-center hover:shadow-2xl transition-shadow border border-blue-100"
          >
            <div className="text-blue-600 mb-4">
              <svg
                className="w-16 h-16"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-center group-hover:text-blue-700">
              Messages
            </h2>
            <p className="text-gray-500 text-center">
              View and manage all contact messages received from users.
            </p>
          </Link>

          {/* Blog Section */}
          <Link
            href="/admin/blog"
            className="group bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center justify-center hover:shadow-2xl transition-shadow border border-blue-100"
          >
            <div className="text-blue-600 mb-4">
              <svg
                className="w-16 h-16"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-center group-hover:text-blue-700">
              Blog
            </h2>
            <p className="text-gray-500 text-center">
              Manage and create blog posts for the Impact Plus Group website.
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
