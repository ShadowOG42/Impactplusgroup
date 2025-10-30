"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Consulting from "./consulting/consulting";
import {Technology} from "./tech/tech";
// import Training from "./training/training";

const Services = () => {
  // Refs for smooth scroll
  const heroRef = useRef<HTMLDivElement>(null);
  const consultingRef = useRef<HTMLDivElement>(null);
  const technologyRef = useRef<HTMLDivElement>(null);
  // const trainingRef = useRef<HTMLDivElement>(null);

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
    <main className="bg-white font-[Montserrat,sans-serif]">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-screen flex items-center justify-center text-center pt-24 md:pt-32"
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/videos/WOrkculture.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
            style={{ fontFamily: "Georgia, serif", color: "#293c83" }}
          >
            Services and Products at Impact Plus
          </h1>

          <p
            className="text-lg md:text-xl mb-8 text-white drop-shadow-md leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            At Impact Plus, we deliver integrated consulting and sustainable product solutions that help organisations achieve safer, smarter, and more sustainable performance. Our approach combines systems thinking, innovation, and technical excellence to align people, processes, and products — driving measurable improvement, strengthening compliance, and creating long-term value across industries.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection(technologyRef)}
              className="px-6 py-3 border-2 border-[#293c83] text-[#293c83] bg-white font-semibold rounded-full shadow hover:bg-[#293c83] hover:text-white transition"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Our Integrated Approach
            </button>
            <button
              onClick={() => scrollToSection(consultingRef)}
              className="px-6 py-3 border-2 border-[#293c83] text-[#293c83] bg-white font-semibold rounded-full shadow hover:bg-[#293c83] hover:text-white transition"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              The Impact Plus Difference
            </button>
          </div>
        </div>
      </section>
       {/* Technology Section */}
      <div ref={technologyRef}>
        <Technology />
      </div>
      {/* Consulting Section */}
      <div ref={consultingRef}>
        <Consulting />
      </div>

      

      {/* Training Section (optional) */}
      {/* <div ref={trainingRef}>
        <Training />
      </div> */}

      {/* Industries Button at End */}
      <div className="flex justify-center my-16">
        <button
          onClick={() => (window.location.href = "/insights")}
          className="px-8 py-3 text-sm font-semibold bg-[#293c83] text-white rounded-full shadow hover:scale-105 transition-transform duration-300"
        >
          Check our Clients Testimonials
        </button>
      </div>
    </main>
  );
};

export default Services;
