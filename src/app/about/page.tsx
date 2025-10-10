"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import OurVision from "./vision/vision";
import Story from "./story/story";
import Leadership from "./leadership/leadership";

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const leadershipRef = useRef<HTMLDivElement>(null);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRefs = useRef<HTMLButtonElement[]>([]);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Typewriter + subtitle + button animations
  useEffect(() => {
    if (titleRef.current) {
      const text = titleRef.current.textContent || "";
      titleRef.current.textContent = ""; // clear initial
      const letters = text.split("").map((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";
        return span;
      });

      letters.forEach((span) => titleRef.current?.appendChild(span));

      // Animate letters one by one
      gsap.to(letters, {
        opacity: 1,
        duration: 0.05,
        stagger: 0.05,
        ease: "power2.inOut",
        onComplete: () => {
          // Fade in subtitle
          if (subtitleRef.current) {
            gsap.to(subtitleRef.current, {
              opacity: 1,
              y: -10,
              duration: 0.8,
              ease: "power2.out",
              onComplete: () => {
                // Animate buttons one after another
                gsap.to(buttonRefs.current, {
                  opacity: 1,
                  y: -10,
                  duration: 0.6,
                  stagger: 0.2,
                  ease: "power2.out",
                });
              },
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
        className="relative w-full h-screen flex items-center justify-center"
      >
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/videos/About_us.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Text */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-4 text-blue-900 drop-shadow-lg"
          >
            About Impact Plus
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl mb-8 text-white drop-shadow-md opacity-0 leading-relaxed"
          >
            At Impact Plus, we help organisations achieve sustainable
            transformation by aligning strategy, leadership, technology, and
            culture. Our integrated approach empowers people, strengthens
            systems, and delivers lasting value.
            <br />
            <br />
            We drive organisational and people performance by embedding safety,
            risk management, environmental stewardship, quality excellence,
            leadership development, and innovation into the way work gets done.
            <br />
            <br />
            From feasibility through to decommissioning, we support every stage
            of the project lifecycle—bringing clarity, confidence, and
            sustainable outcomes at each step.
            <br />
            <br />
            At Impact Plus, we turn complexity into clarity and organisational
            desire into measurable impact.
          </p>

          {/* Scroll Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Leadership", ref: leadershipRef },
              { label: "Vision & Mission", ref: visionRef },
              { label: "Differentiators", ref: storyRef },
            ].map((item, index) => (
              <button
                key={index}
                ref={(el) => {
                  if (el) buttonRefs.current[index] = el;
                }}
                onClick={() => scrollToSection(item.ref)}
                className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-full shadow hover:bg-blue-50 transition opacity-0"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <div ref={leadershipRef}>
        <Leadership />
      </div>

      {/* Vision Section */}
      <div ref={visionRef}>
        <OurVision />
      </div>

      {/* Differentiators Section */}
      <div ref={storyRef}>
        <Story />
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

export default About;
