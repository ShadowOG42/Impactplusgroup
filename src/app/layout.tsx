import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./ClientWrapper"; // 👈 new file

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Impact Plus",
  description:
    "WELCOME TO IMPACT PLUS: An international WHSEQ consultancy optimising organisational and people performance across oil & gas, mining, renewable energy…",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen ${geistSans.variable} ${geistMono.variable}`}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
