import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MatrixRain from "./Components/Matrix";
import Navbar from "./Components/Navbar"; // ✅ Updated header
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
        {/* ✅ Global Header */}
        <Navbar />

        {/* ✅ Optional Matrix animation */}
        <MatrixRain />

        {/* ✅ Main content with padding to avoid overlap */}
        <main className="pt-20">
          {children}
        </main>

        {/* ✅ Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
