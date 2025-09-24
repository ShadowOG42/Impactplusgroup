'use client';
import React, { useEffect, useRef } from "react";
import { LinkedinIcon, MailIcon, PhoneIcon, GlobeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Page2 = () => {
  const welcomeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (welcomeRef.current) {
      const text = "WELCOME TO IMPACT PLUS";
      welcomeRef.current.textContent = "";
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          welcomeRef.current!.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 120);
    }
  }, []);

  const SocialLinks = () => (
    <div className="flex flex-wrap gap-4 items-center pt-6">
      <a
        href="https://www.linkedin.com/company/impactplusgroup"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 border border-blue-800 rounded-full bg-white/10 hover:bg-blue-800/20 transition"
      >
        <LinkedinIcon className="w-6 h-6 text-blue-300" />
      </a>
      <a
        href="mailto:info@impactplusgroup.com"
        className="p-3 border border-blue-800 rounded-full bg-white/10 hover:bg-blue-800/20 transition"
      >
        <MailIcon className="w-6 h-6 text-gray-200" />
      </a>
      <a
        href="tel:+61419775400"
        className="p-3 border border-blue-800 rounded-full bg-white/10 hover:bg-blue-800/20 transition"
      >
        <PhoneIcon className="w-6 h-6 text-green-300" />
      </a>
      <a
        href="https://impactplusgroup.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 border border-blue-800 rounded-full bg-white/10 hover:bg-blue-800/20 transition"
      >
        <GlobeIcon className="w-6 h-6 text-purple-300" />
      </a>
    </div>
  );

  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/159678-819389843.mp4" type="video/mp4" />
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Foreground Content */}
      <div className="relative z-10 h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-32 text-white">
        
        {/* LEFT: Text */}
        <div className="space-y-6 max-w-2xl md:w-1/2">
          <p
            ref={welcomeRef}
            className="text-3xl md:text-6xl font-light tracking-wide"
            style={{ color: "#FFFFFF" }}
          />
          <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed">
            An international WHSEQ consultancy optimising organisational and people performance 
            across oil & gas, mining, renewable energy, infrastructure, health, government, and education.
          </p>

          <Link
            href="/about"
            className="inline-block mt-6 px-6 py-3 text-sm font-semibold bg-blue-600 hover:bg-blue-700 rounded-full transition"
          >
            Read More
          </Link>

          <SocialLinks />
        </div>

        {/* RIGHT: Logo */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center items-center">
          <Image
            src="/Certificates/logo_transparent.png"
            alt="Impact Plus Logo"
            width={600}
            height={600}
            className="object-contain w-full max-w-md md:max-w-2xl drop-shadow-2xl hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </main>
  );
};

export default Page2;
