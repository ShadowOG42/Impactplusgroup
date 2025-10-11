"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

// Industry Components
import Energy from "./renewable_energy/Energy";
import Mining from "./Mining/Mining";
import Oil from "./Oil&Gas/Oil&gas";
import Power_gen from "./Power_generation/Power_gen";
import Public_infra from "./Public_infrastructure/Public_infra";
import Gov from "./Government/Gov";

const Industries = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const energyRef = useRef<HTMLDivElement | null>(null);
  const miningRef = useRef<HTMLDivElement | null>(null);
  const oilRef = useRef<HTMLDivElement | null>(null);
  const powerGenRef = useRef<HTMLDivElement | null>(null);
  const publicInfraRef = useRef<HTMLDivElement | null>(null);
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
        <div className="absolute inset-0">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="/videos/Building.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Text */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-4 text-blue-900 drop-shadow-lg"
            style={{ fontFamily: "'Voltaire', sans-serif" }}
          >
            Industry Solutions
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl mb-8 text-white drop-shadow-md opacity-0"
            style={{ fontFamily: "Georgia, serif" }}
          >
            At Impact Plus, we deliver tailored solutions for key industries —
            helping organisations in renewable energy, oil & gas, mining, power
            generation, public infrastructure, health, government, and higher
            education thrive in a rapidly changing world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Our solutions", ref: govRef },
              { label: "Renewable Energy", ref: energyRef },
              { label: "Oil & Gas", ref: oilRef },
              { label: "Mining", ref: miningRef },
              { label: "Power Generation", ref: powerGenRef },
              { label: "Public Infrastructure", ref: publicInfraRef },
            ].map((btn, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(btn.ref)}
                className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-full shadow hover:bg-blue-50 transition"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      <div ref={govRef}>
        <Gov />
      </div>
      <div ref={energyRef}>
        <Energy />
      </div>
      <div ref={oilRef}>
        <Oil />
      </div>
      <div ref={miningRef}>
        <Mining />
      </div>
      <div ref={powerGenRef}>
        <Power_gen />
      </div>
      <div ref={publicInfraRef}>
        <Public_infra />
      </div>

      {/* Back to Top */}
      <div className="flex justify-center my-12">
        <button
          onClick={() => scrollToSection(heroRef)}
          className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Back to Top
        </button>
      </div>
    </main>
  );
};

export default Industries;
