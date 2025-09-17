'use client';
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { LinkedinIcon, MailIcon, PhoneIcon, GlobeIcon } from "lucide-react";
import { gsap } from "gsap";

const Home = () => {
  const welcomeRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (welcomeRef.current) {
      const welcomeText = welcomeRef.current.textContent || "";
      welcomeRef.current.textContent = "";
      const letters = welcomeText.split("").map((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.opacity = "0";
        span.style.display = "inline-block";
        return span;
      });
      letters.forEach((span) => welcomeRef.current?.appendChild(span));

      gsap.to(letters, {
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
        color: "#1E3A8A",
      });
    }

    if (titleRef.current) {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1.5,
        ease: "power2.out",
      });
    }
  }, []);

  const SocialLinks = () => (
    <div className="flex flex-wrap gap-4 items-center md:pt-6">
      <a
        href="https://www.linkedin.com/company/impactplusgroup"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 border border-blue-600 rounded-full"
      >
        <LinkedinIcon className="w-5 h-5 md:w-6 md:h-6 text-blue-600 hover:scale-[1.15] transition-transform" />
      </a>
      <a
        href="mailto:info@impactplusgroup.com"
        className="p-3 border border-blue-600 rounded-full"
      >
        <MailIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-500 hover:scale-[1.15] transition-transform" />
      </a>
      <a
        href="tel:+61419775400"
        className="p-3 border border-blue-600 rounded-full"
      >
        <PhoneIcon className="w-5 h-5 md:w-6 md:h-6 text-green-600 hover:scale-[1.15] transition-transform" />
      </a>
      <a
        href="https://impactplusgroup.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 border border-blue-600 rounded-full"
      >
        <GlobeIcon className="w-5 h-5 md:w-6 md:h-6 text-purple-600 hover:scale-[1.15] transition-transform" />
      </a>
    </div>
  );

  return (
    <main
      id="home"
      className="min-h-[calc(100vh-4rem)] bg-gradient-to-r from-white via-blue-50 to-blue-100 pt-16"
    >
      <div className="intro flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-16 lg:px-32 gap-10">

        {/* Left: Text */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="space-y-6 text-gray-800">
            <p
              ref={welcomeRef}
              className="text-2xl md:text-6xl font-light"
              style={{ color: "#3B82F6" }}
            >
              WELCOME TO
            </p>
            <h1
              ref={titleRef}
              className="text-5xl md:text-6xl font-bold text-blue-700 font-josefinSlab"
            >
              IMPACT PLUS
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              An international WHSEQ consultancy optimising organisational and people performance 
              across oil & gas, mining, renewable energy, infrastructure, health, government, and education.
            </p>
            <p className="text-base text-gray-600 max-w-lg">
              Under <span className="font-semibold text-blue-900">Dr. Posani Maveza’s servant leadership</span>, 
              we deliver excellence in governance, sustainability, innovation, and AI-enabled transformation. 
              Our mission: empowering organisations to achieve measurable, sustainable growth.
            </p>
            <SocialLinks />
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-blue-200">
            <Image
              src="/Certificates/Mr_Maveza.png"
              alt="Dr. Posani Maveza"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              Dr. Posani Maveza
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Founder & CEO, Impact Plus
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Home;
