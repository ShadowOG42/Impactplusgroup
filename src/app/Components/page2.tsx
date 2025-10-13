'use client';

import React, { useEffect, useRef } from "react";
import { LinkedinIcon, MailIcon, FacebookIcon, GlobeIcon } from "lucide-react";
import Link from "next/link";

const Page2 = () => {
  const welcomeRef = useRef<HTMLDivElement>(null);
  // const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (welcomeRef.current) {
      const textLines = [
        {
          // Line 1: WELCOME TO
          text: [
            { char: "W", color: "#ffffff", font: '"Poppins", sans-serif', weight: "700" },
            { char: "E", color: "#ffffff", font: '"Poppins", sans-serif', weight: "700" },
            { char: "L", color: "#ffffff", font: '"Poppins", sans-serif', weight: "700" },
            { char: "C", color: "#ffffff", font: '"Poppins", sans-serif', weight: "700" },
            { char: "O", color: "#ffffff", font: '"Poppins", sans-serif', weight: "700" },
            { char: "M", color: "#ffffff", font: '"Poppins", sans-serif', weight: "700" },
            { char: "E", color: "#ffffff", font: '"Poppins", sans-serif', weight: "700" },
            { char: " ", color: "#ffffff", font: '"Poppins", sans-serif', weight: "700" },
            { char: "T", color: "#ffffff", font: '"Poppins", sans-serif', weight: "700" },
            { char: "O", color: "#ffffff", font: '"Poppins", sans-serif', weight: "700" },
          ]
        },
        {
          // Line 2: IMPACT PLUS
          text: [
            { char: "I", color: "#1e7dba", font: '"Bebas Neue", sans-serif', weight: "700" },
            { char: "M", color: "#1e7dba", font: '"Bebas Neue", sans-serif', weight: "700" },
            { char: "P", color: "#1e7dba", font: '"Bebas Neue", sans-serif', weight: "700" },
            { char: "A", color: "#1e7dba", font: '"Bebas Neue", sans-serif', weight: "700" },
            { char: "C", color: "#1e7dba", font: '"Bebas Neue", sans-serif', weight: "700" },
            { char: "T", color: "#1e7dba", font: '"Bebas Neue", sans-serif', weight: "700" },
            { char: " ", color: "#ffffff", font: '"Poppins", sans-serif', weight: "700" },
            { char: "P", color: "#293c83", font: "Georgia, serif", weight: "700" },
            { char: "L", color: "#293c83", font: "Georgia, serif", weight: "700" },
            { char: "U", color: "#293c83", font: "Georgia, serif", weight: "700" },
            { char: "S", color: "#293c83", font: "Georgia, serif", weight: "700" },
          ]
        },
        // {
        //   // Line 3: Tagline (optional)
        //   text: [
        //     { char: "T", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "r", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "a", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "n", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "s", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "f", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "o", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "r", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "m", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "i", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "n", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "g", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: " ", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "C", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "o", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "m", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "p", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "l", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "e", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "x", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "i", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "t", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "y", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: " ", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "i", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "n", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "t", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "o", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: " ", color: "#ffffff", font: '"Poppins", sans-serif', weight: "500" },
        //     { char: "C", color: "#1e7dba", font: '"Poppins", sans-serif', weight: "600" },
        //     { char: "l", color: "#1e7dba", font: '"Poppins", sans-serif', weight: "600" },
        //     { char: "a", color: "#1e7dba", font: '"Poppins", sans-serif', weight: "600" },
        //     { char: "r", color: "#1e7dba", font: '"Poppins", sans-serif', weight: "600" },
        //     { char: "i", color: "#1e7dba", font: '"Poppins", sans-serif', weight: "600" },
        //     { char: "t", color: "#1e7dba", font: '"Poppins", sans-serif', weight: "600" },
        //     { char: "y", color: "#1e7dba", font: '"Poppins", sans-serif', weight: "600" },
        //   ]
        // }
      ];

      welcomeRef.current.innerHTML = "";
      let lineIndex = 0;
      let charIndex = 0;

      const typeChar = () => {
        if (lineIndex < textLines.length) {
          const line = textLines[lineIndex];
          if (charIndex < line.text.length) {
            const span = document.createElement("span");
            const charData = line.text[charIndex];

            span.textContent = charData.char === " " ? "\u00A0" : charData.char;
            span.style.fontFamily = charData.font;
            span.style.fontWeight = charData.weight ?? "400";
            span.style.color = charData.color;
            span.style.display = "inline-block";
            span.style.transition = "all 0.3s ease";
            span.style.transform = "translateY(10px)";
            span.style.opacity = "0";

            if (!welcomeRef.current) return;
            welcomeRef.current.appendChild(span);

            setTimeout(() => {
              span.style.transform = "translateY(0)";
              span.style.opacity = "1";
            }, 50);

            charIndex++;
            setTimeout(typeChar, 100);
          } else {
            const br = document.createElement("br");
            welcomeRef.current!.appendChild(br);
            lineIndex++;
            charIndex = 0;
            setTimeout(typeChar, 100);
          }
        }
      };

      typeChar();
    }
  }, []);

  const SocialLinks = () => (
    <div className="flex flex-wrap gap-4 items-center pt-6">
      <a
        href="https://www.linkedin.com/company/impact-plus-pty-ltd/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 border border-blue-800 rounded-full bg-white/10 hover:bg-blue-800/30 hover:scale-110 transition-all duration-300"
      >
        <LinkedinIcon className="w-6 h-6 text-blue-300" />
      </a>
      <a
        href="mailto:info@impactplusgroup.com"
        className="p-3 border border-blue-800 rounded-full bg-white/10 hover:bg-blue-800/30 hover:scale-110 transition-all duration-300"
      >
        <MailIcon className="w-6 h-6 text-gray-200" />
      </a>
      <a
        href="tel:+61419775400"
        className="p-3 border border-blue-800 rounded-full bg-white/10 hover:bg-blue-800/30 hover:scale-110 transition-all duration-300"
      >
        <FacebookIcon className="w-6 h-6 text-green-300" />
      </a>
      <a
        href="https://impactplusgroup.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 border border-blue-800 rounded-full bg-white/10 hover:bg-blue-800/30 hover:scale-110 transition-all duration-300"
      >
        <GlobeIcon className="w-6 h-6 text-purple-300" />
      </a>
    </div>
  );

  return (
    <main className="relative h-screen w-full overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/159678-819389843.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-screen flex items-start justify-start px-6 md:px-16 lg:px-32 py-24 text-white">
        <div className="space-y-6 max-w-2xl w-full">
          <div
            ref={welcomeRef}
            className="text-4xl md:text-7xl font-bold tracking-wide leading-tight text-left"
          ></div>

          <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed text-left">
            We are an international consultancy specializing in <span className="text-blue-300 font-semibold">Project Management</span> and <span className="text-blue-500 font-semibold">Organisational Performance</span>. We simplify complex challenges, build resilient strategies, and drive sustainable transformation for businesses worldwide.
          </p>

          <Link
            href="/about"
            className="inline-block mt-6 px-8 py-3 text-sm font-semibold bg-blue-600 hover:bg-blue-700 hover:scale-105 rounded-full transition-transform duration-300 shadow-lg"
          >
            Read More →
          </Link>

          <SocialLinks />
        </div>
      </div>
    </main>
  );
};

export default Page2;
