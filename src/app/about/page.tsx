"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OurVision from "./vision/vision";
import Leadership from "./leadership/leadership";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const leadershipRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRefs = useRef<HTMLButtonElement[]>([]);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }

    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
      );
    }

    if (buttonRefs.current.length > 0) {
      gsap.fromTo(
        buttonRefs.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1, stagger: 0.2, ease: "power2.out" }
      );
    }

    const sections = [visionRef.current, leadershipRef.current];
    sections.forEach((section) => {
      if (section) {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        });
      }
    });
  }, []);

  return (
    <main className="bg-white font-[Montserrat,sans-serif]">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-[100vh] flex items-center justify-center text-center pt-24 md:pt-32"
      >
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        >
          <source src="/videos/About_us.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl px-6 flex flex-col items-center justify-center">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
            style={{ fontFamily: "Georgia, serif", color: "#293c83" }}
          >
            About Impact Plus
          </h1>

          <p
            ref={subtitleRef}
            className="text-base md:text-lg text-white leading-relaxed drop-shadow-md mb-6 text-justify font-[Montserrat,sans-serif]"
          >
            Impact Plus is your trusted international Project Management and Organisational Performance Consultancy dedicated to helping organisations achieve safer, smarter, and more sustainable outcomes. We partner with clients across renewable energy, oil & gas, mining, power generation, infrastructure, and government to deliver practical, evidence-based solutions that strengthen leadership and governance, enhance safety and quality, and unlock measurable performance improvement.
          </p>

          <p className="text-base md:text-lg text-white leading-relaxed drop-shadow-md text-justify font-[Montserrat,sans-serif]">
            Our integrated approach aligns strategy, leadership, technology, and culture to empower people, strengthen systems, and deliver lasting value — embedding safety, risk management, environmental stewardship, quality excellence, leadership development, and innovation into everyday operations. From feasibility to decommissioning, we bring clarity, confidence, and consistent performance, enabling organisations to thrive in an increasingly complex and fast-changing world.
          </p>

          {/* Scroll Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {[
              { label: "Leadership", ref: leadershipRef },
              { label: "Vision & Mission", ref: visionRef },
            ].map((item, index) => (
              <button
                key={index}
                ref={(el) => {
                  if (el) buttonRefs.current[index] = el;
                }}
                onClick={() => scrollToSection(item.ref)}
                className="px-6 py-3 border-2 border-[#293c83] text-[#293c83] bg-white font-semibold rounded-full shadow hover:bg-[#293c83] hover:text-white transition font-[Montserrat,sans-serif]"
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

      {/* Back to Top */}
      <div className="flex justify-center my-12">
        <button
          onClick={() => scrollToSection(heroRef)}
          className="px-6 py-3 bg-[#293c83] text-white font-semibold rounded-full shadow hover:bg-blue-800 transition font-[Montserrat,sans-serif]"
        >
          Back to Top
        </button>
      </div>
    </main>
  );
};

export default About;
