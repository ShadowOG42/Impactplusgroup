'use client';
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Consulting from "./consulting/consulting";
import Technology from "./tech/tech";
import Training from "./training/training";

const Services = () => {
  // Refs for smooth scroll
  const heroRef = useRef<HTMLDivElement>(null);
  const consultingRef = useRef<HTMLDivElement>(null);
  const technologyRef = useRef<HTMLDivElement>(null);
  const trainingRef = useRef<HTMLDivElement>(null);

  // Ref for title (typewriter effect)
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Scroll handler
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Typewriter animation
  useEffect(() => {
    if (titleRef.current) {
      const text = titleRef.current.textContent || "";
      titleRef.current.textContent = ""; // Clear initial text
      const letters = text.split("").map((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";
        return span;
      });

      letters.forEach((span) => titleRef.current?.appendChild(span));

      gsap.to(letters, {
        opacity: 1,
        duration: 0.05,
        stagger: 0.05,
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <main className="bg-white">

      {/* ✅ Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-screen flex items-center justify-center"
      >
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/videos/Workculture.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-4 text-blue-900 drop-shadow-lg"
          >
            Services at Impact Plus
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white drop-shadow-md">
            We empower organizations with tailored consulting, innovative technology, 
            and world-class training — driving measurable growth and lasting impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection(consultingRef)}
              className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-full shadow hover:bg-blue-50 transition"
            >
              Consulting
            </button>
            <button
              onClick={() => scrollToSection(technologyRef)}
              className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-full shadow hover:bg-blue-50 transition"
            >
              Technology
            </button>
            <button
              onClick={() => scrollToSection(trainingRef)}
              className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-full shadow hover:bg-blue-50 transition"
            >
              Training
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Service Sections */}
      <div ref={consultingRef}>
        <Consulting />
      </div>

      <div ref={technologyRef}>
        <Technology />
      </div>

      <div ref={trainingRef}>
        <Training />
      </div>

      {/* ✅ Back to Top */}
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

export default Services;
