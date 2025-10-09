'use client';

import React, { useEffect, useRef } from "react";
import { LinkedinIcon, MailIcon, FacebookIcon, GlobeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Page2 = () => {
  const welcomeRef = useRef<HTMLParagraphElement>(null);

  // Typewriter effect with colored spans
  useEffect(() => {
    if (welcomeRef.current) {
      const text = [
        { char: "W", color: "text-white" },
        { char: "E", color: "text-white" },
        { char: "L", color: "text-white" },
        { char: "C", color: "text-white" },
        { char: "O", color: "text-white" },
        { char: "M", color: "text-white" },
        { char: "E", color: "text-white" },
        { char: " ", color: "text-white" },
        { char: "T", color: "text-white" },
        { char: "O", color: "text-white" },
        { char: " ", color: "text-white" },
        { char: "I", color: "text-sky-400" },
        { char: "M", color: "text-sky-400" },
        { char: "P", color: "text-sky-400" },
        { char: "A", color: "text-sky-400" },
        { char: "C", color: "text-sky-400" },
        { char: "T", color: "text-sky-400" },
        { char: " ", color: "text-white" },
        { char: "P", color: "text-blue-800" },
        { char: "L", color: "text-blue-800" },
        { char: "U", color: "text-blue-800" },
        { char: "S", color: "text-blue-800" },
      ];

      welcomeRef.current.innerHTML = ""; // clear previous
      let i = 0;

      const interval = setInterval(() => {
        if (i < text.length) {
          const span = document.createElement("span");
          span.textContent = text[i].char;
          span.className = text[i].color;
          welcomeRef.current!.appendChild(span);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 120);
    }
  }, []);

  // Social links component
  const SocialLinks = () => (
    <div className="flex flex-wrap gap-4 items-center pt-6">
      <a
        href="https://www.linkedin.com/company/impact-plus-pty-ltd/"
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
        <FacebookIcon className="w-6 h-6 text-green-300" />
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
          {/* Typewriter Welcome */}
          <p
            ref={welcomeRef}
            className="text-4xl md:text-7xl font-bold tracking-wide"
          ></p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed">
            A trusted international consultancy specialising in Workplace Health, 
            Safety, Environment, Quality (WHSEQ) and Continuous Improvement (CI). 
            Partnering with clients across renewable energy, oil &amp; gas, mining, 
            power generation, public infrastructure, health, government, and higher education, 
            we deliver practical solutions that build safer workplaces, ensure compliance, 
            and unlock measurable performance improvement.
          </p>

          {/* Read More button */}
          <Link
            href="/about"
            className="inline-block mt-6 px-6 py-3 text-sm font-semibold bg-blue-600 hover:bg-blue-700 rounded-full transition"
          >
            Read More
          </Link>

          {/* Social Links */}
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
