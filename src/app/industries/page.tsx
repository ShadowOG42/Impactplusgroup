"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

// Industry Components
// import Energy from "./renewable_energy/Energy";
// import Mining from "./Mining/Mining";
// import Oil from "./Oil&Gas/Oil&gas";
// import Power_gen from "./Power_generation/Power_gen";
// import Public_infra from "./Public_infrastructure/Public_infra";
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
    <main className="bg-white font-[Montserrat,sans-serif]">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-screen flex flex-col items-center justify-center text-center pt-24 md:pt-32"
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
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
            style={{ fontFamily: "Georgia, serif", color: "#293c83" }}
          >
            Industry Solutions
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl mb-8 text-white drop-shadow-md opacity-0 leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            At Impact Plus, we deliver tailored solutions for key industries —
            helping organisations in renewable energy, oil & gas, mining, power
            generation, public infrastructure, health, government, and higher
            education thrive in a rapidly changing world.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {[
              { label: "Our Solutions", ref: govRef },
              { label: "Renewable Energy", ref: energyRef },
              { label: "Oil & Gas", ref: oilRef },
              { label: "Mining", ref: miningRef },
              { label: "Power Generation", ref: powerGenRef },
              { label: "Public Infrastructure", ref: publicInfraRef },
            ].map((btn, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(btn.ref)}
                className="px-6 py-3 border-2 border-[#293c83] text-[#293c83] bg-white font-semibold rounded-full shadow hover:bg-[#293c83] hover:text-white transition"
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
      {/* <div ref={energyRef}>
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
      </div> */}

      {/* Back to Top */}
      <div className="flex justify-center my-12">
        <button
          onClick={() => scrollToSection(heroRef)}
          className="px-6 py-3 bg-[#293c83] text-white font-semibold rounded-full shadow hover:bg-blue-800 transition"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Back to Top
        </button>
      </div>
    </main>
  );
};

export default Industries;
