"use client";

import { usePathname } from "next/navigation";
import Header from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      <main className="w-full">{children}</main>
      {!isAdminRoute && <Footer />}
    </>
  );
}
