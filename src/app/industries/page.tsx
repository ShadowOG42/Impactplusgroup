"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Finance from "./finance/finance";
import Manufacturing from "./manufacturing/manufacturing";
import Healthcare from "./healthcare/healthcare";
import Retail from "./retail/Energy";

const Industries = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const financeRef = useRef<HTMLDivElement | null>(null);
  const manufacturingRef = useRef<HTMLDivElement | null>(null);
  const healthcareRef = useRef<HTMLDivElement | null>(null);
  const retailRef = useRef<HTMLDivElement | null>(null);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Typewriter + subtitle fade-in animation
  useEffect(() => {
    if (titleRef.current) {
      const text = titleRef.current.textContent || "";
      titleRef.current.textContent = ""; // Clear initial
      const letters = text.split("").map((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";
        return span;
      });

      letters.forEach((span) => titleRef.current?.appendChild(span));

      // Animate letters
      gsap.to(letters, {
        opacity: 1,
        duration: 0.05,
        stagger: 0.05,
        ease: "power2.inOut",
        onComplete: () => {
          if (subtitleRef.current) {
            gsap.to(subtitleRef.current, {
              opacity: 1,
              y: -10,
              duration: 0.8,
              ease: "power2.out",
            });
          }
        },
      });
    }
  }, []);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-screen flex flex-col items-center justify-center"
      >
        {/* Video Background */}
        <div className="absolute inset-0">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="/videos/Building.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Text */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-4 text-blue-900 drop-shadow-lg"
          >
            Industry Solutions
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl mb-8 text-white drop-shadow-md opacity-0"
          >
            At Impact Plus, we deliver tailored solutions for key industries —
            helping organizations in finance, manufacturing, healthcare, and
            retail thrive in a rapidly changing world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection(financeRef)}
              className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-full shadow hover:bg-blue-50 transition"
            >
              Finance
            </button>
            <button
              onClick={() => scrollToSection(manufacturingRef)}
              className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-full shadow hover:bg-blue-50 transition"
            >
              Manufacturing
            </button>
            <button
              onClick={() => scrollToSection(healthcareRef)}
              className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-full shadow hover:bg-blue-50 transition"
            >
              Healthcare
            </button>
            <button
              onClick={() => scrollToSection(retailRef)}
              className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-full shadow hover:bg-blue-50 transition"
            >
              Retail
            </button>
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      <div ref={financeRef}>
        <Finance />
      </div>

      <div ref={manufacturingRef}>
        <Manufacturing />
      </div>

      <div ref={healthcareRef}>
        <Healthcare />
      </div>

      <div ref={retailRef}>
        <Retail />
      </div>

      {/* Back to Top */}
      <div className="flex justify-center my-12">
        <button
          onClick={() => scrollToSection(heroRef)}
          className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition"
        >
          Back to Top
        </button>
      </div>
    </main>
  );
};

export default Industries;
