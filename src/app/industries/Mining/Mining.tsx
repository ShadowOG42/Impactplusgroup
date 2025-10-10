"use client";
import React, { useEffect, useRef } from "react";
import {
  Mountain,
  ShieldCheck,
  Recycle,
  Cpu,
} from "lucide-react";
import { gsap } from "gsap";

const Mining = () => {
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

  const miningSolutions = [
    {
      icon: <Mountain className="w-10 h-10 text-amber-700" />,
      title: "Operational Excellence",
      description:
        "Driving efficiency and productivity across mining operations through streamlined processes and performance-focused transformation.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-700" />,
      title: "Health, Safety & Risk",
      description:
        "Embedding world-class safety standards and robust risk management frameworks to protect workers and communities.",
    },
    {
      icon: <Recycle className="w-10 h-10 text-green-600" />,
      title: "Sustainability & ESG",
      description:
        "Aligning mining strategies with ESG goals by reducing environmental impact, promoting circular practices, and ensuring regulatory compliance.",
    },
    {
      icon: <Cpu className="w-10 h-10 text-indigo-600" />,
      title: "Digital Transformation",
      description:
        "Leveraging AI, automation, and data analytics to unlock new efficiencies and create smarter, future-ready mining operations.",
    },
  ];

  return (
    <section
      id="mining-industry"
      ref={sectionRef}
      className="relative py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-r from-amber-50 via-gray-50 to-amber-50"
    >
      {/* Header */}
      <div className="text-center mb-20">
        <h1
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "'Voltaire', sans-serif", color: "#0A2540" }}
        >
          Mining Solutions
        </h1>
        <p
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Impact Plus partners with mining organisations to enhance
          productivity, strengthen governance, and embed sustainability into
          operations. From digital transformation to ESG alignment, we help
          mining companies thrive in a resource-conscious world.
        </p>
      </div>

      {/* Mining Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {miningSolutions.map((m, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transform transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="mb-4">{m.icon}</div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#0A2540",
              }}
            >
              {m.title}
            </h3>
            <p className="text-gray-700">{m.description}</p>
          </div>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="mt-20 text-center max-w-4xl mx-auto">
        <p
          className="text-lg md:text-xl text-gray-700 mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Our mining transformation framework balances profitability with
          sustainability — ensuring safe, ethical, and innovative practices
          that build long-term resilience.
        </p>
        <p
          className="text-md text-gray-500 italic"
          style={{ fontFamily: "'Frangela', sans-serif" }}
        >
          “Mining the future responsibly — through innovation, safety, and
          sustainability.”
        </p>
      </div>
    </section>
  );
};

export default Mining;
