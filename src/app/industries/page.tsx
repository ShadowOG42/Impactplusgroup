"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Gov from "./Government/Gov";

const Industries = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const govRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (titleRef.current) {
      const text = titleRef.current.textContent || "";
      titleRef.current.textContent = "";
      const letters = text.split("").map((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";
        return span;
      });
      letters.forEach((span) => titleRef.current?.appendChild(span));

      gsap.to(letters, {
        opacity: 1,
        duration: 0.04,
        stagger: 0.04,
        ease: "power2.inOut",
        onComplete: () => {
          if (subtitleRef.current) {
            gsap.to(subtitleRef.current, {
              opacity: 1,
              y: -10,
              duration: 1,
              ease: "power2.out",
            });
          }
        },
      });
    }
  }, []);

  return (
    <main className="bg-white font-[Montserrat,sans-serif]">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/Building.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Text */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white drop-shadow-xl leading-tight"
            style={{ fontFamily: "Georgia, serif", color: "#293c83" }}
          >
            Industries We Partner With
          </h1>

          <h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-8 text-gray-100 max-w-4xl mx-auto leading-relaxed drop-shadow-md"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Empowering the sectors that shape a safer, smarter, and more
            sustainable world.
          </h2>

          <p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl text-gray-200 opacity-0 leading-relaxed max-w-5xl mx-auto mb-10"
          >
            At Impact Plus, we partner with organisations and government bodies
            across the industries that power modern economies and enable
            sustainable growth. Our collaborations span renewable energy, oil &
            gas, mining, power generation, infrastructure and building
            construction, and the public sector — industries where safety,
            efficiency, and sustainability are essential to long-term
            performance. Our integrated approach connects people, systems, and
            products, enabling every client to operate with greater clarity,
            confidence, and resilience in an increasingly complex world.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button
              onClick={() => scrollToSection(govRef)}
              className="px-8 py-3 border-2 border-white text-white bg-transparent font-semibold rounded-full shadow-md hover:bg-white hover:text-[#293c83] transition-all duration-300"
            >
              Our Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Government Section */}
      <div ref={govRef}>
        <Gov />
      </div>

      {/* Bottom Button */}
      <div className="flex justify-center py-20 bg-[#f9fafc]">
        <button
          onClick={() => (window.location.href = "/services")}
          className="px-10 py-4 text-base md:text-lg font-semibold bg-[#293c83] text-white rounded-full shadow-lg hover:scale-105 hover:bg-[#1e2f6e] transition-transform duration-300"
        >
          Explore Our Integrated Consulting and Product Solutions
        </button>
      </div>
    </main>
  );
};

export default Industries;
