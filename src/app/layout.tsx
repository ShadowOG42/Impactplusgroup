import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description:
    "WELCOME TO IMPACT PLUS: An international WHSEQ consultancy optimising organisational and people performance across oil & gas, mining, renewable energy…",
  icons: {
    icon: "/Logo.ico",      // ✅ Favicon for browsers
    apple: "/Logo.ico",     // ✅ Optional for iOS devices
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

        {/* ✅ Main content */}
        <main className="w-full">{children}</main>

        {/* ✅ Footer */}
        <Footer />
      </body>
    </html>
  );
}
