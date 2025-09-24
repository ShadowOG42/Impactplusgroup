"use client";
import React, { useRef } from "react";
import Testimonials from "../Components/Testimonials";
import InsightsSection from "../Components/InsightsSection";

const Insights = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const insightsRef = useRef<HTMLDivElement | null>(null);
  const testimonialsRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-screen flex flex-col items-center justify-center"
      >
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src="/videos/coffee.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-900">
            Insights & Knowledge
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 drop-shadow">
            Explore thought leadership, articles, and real client experiences
            designed to inspire and drive meaningful business improvement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection(insightsRef)}
              className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-full shadow hover:bg-blue-50 transition"
            >
              Insights
            </button>
            <button
              onClick={() => scrollToSection(testimonialsRef)}
              className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-full shadow hover:bg-blue-50 transition"
            >
              Testimonials
            </button>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <div ref={insightsRef}>
        <InsightsSection />
      </div>

      {/* Testimonials Section */}
      <div ref={testimonialsRef}>
        <Testimonials />
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

export default Insights;
