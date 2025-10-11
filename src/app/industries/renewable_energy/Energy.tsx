"use client";
import React, { useEffect, useRef } from "react";
import { Sun, Zap, TrendingUp, Users } from "lucide-react";
import { gsap } from "gsap";

const Energy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  const energySolutions = [
    {
      icon: <Sun className="w-10 h-10 text-yellow-500" />,
      title: "Solar & Wind Projects",
      description:
        "Planning and implementing renewable energy solutions to harness clean power and reduce carbon footprint.",
    },
    {
      icon: <Zap className="w-10 h-10 text-green-500" />,
      title: "Energy Efficiency",
      description:
        "Optimizing energy consumption to maximize output while minimizing waste and operational costs.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-blue-700" />,
      title: "Innovation & Technology",
      description:
        "Leveraging smart grids, AI, and advanced analytics for predictive maintenance and improved performance.",
    },
    {
      icon: <Users className="w-10 h-10 text-gray-600" />,
      title: "Stakeholder Engagement",
      description:
        "Collaborating with communities, governments, and partners to ensure sustainable and inclusive energy solutions.",
    },
  ];

  return (
    <section
      id="renewable-energy"
      ref={sectionRef}
      className="relative py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-r from-green-50 via-green-100 to-green-50"
    >
      {/* Header */}
      <div className="text-center mb-20">
        <h1
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "'Voltaire', sans-serif", color: "#0A2540" }}
        >
          Renewable Energy Solutions
        </h1>
        <p
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          style={{ fontFamily: "Georgia, serif" }}
        >
          At Impact Plus, we enable organisations to embrace clean energy
          solutions that drive sustainable growth, reduce environmental impact,
          and foster long-term energy security.
        </p>
      </div>

      {/* Energy Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {energySolutions.map((e, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transform transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="mb-4">{e.icon}</div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#0A2540" }}
            >
              {e.title}
            </h3>
            <p className="text-gray-700" style={{ fontFamily: "Georgia, serif" }}>
              {e.description}
            </p>
          </div>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="mt-20 text-center max-w-4xl mx-auto">
        <p
          className="text-lg md:text-xl text-gray-700 mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          From project conception to implementation and monitoring, Impact Plus
          supports organisations in adopting renewable energy solutions that are
          efficient, sustainable, and socially responsible.
        </p>
        <p
          className="text-md text-gray-500 italic"
          style={{ fontFamily: "'Frangela', sans-serif" }}
        >
          “Empowering a cleaner, sustainable future through innovative energy solutions.”
        </p>
      </div>
    </section>
  );
};

export default Energy;
