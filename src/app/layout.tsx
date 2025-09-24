import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MatrixRain from "./Components/Matrix";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Impact Plus",
  description: "Website",
  icons: {
    icon: "/Logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {/* ✅ Navbar stays fixed at top */}
        <Navbar />

        {/* ✅ Background effect (optional) */}
        <div className="fixed inset-0 -z-10">
          <MatrixRain />
        </div>

        {/* ✅ Main content, no forced padding */}
        <main className="w-full">
          {children}
        </main>

        {/* ✅ Footer */}
        <Footer />
      </body>
    </html>
  );
}
