"use client";
import React, { useEffect, useRef } from "react";
import {
  Flame,
  ShieldCheck,
  Recycle,
  Cpu,
} from "lucide-react";
import { gsap } from "gsap";

const OilGas = () => {
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

  const oilGasSolutions = [
    {
      icon: <Flame className="w-10 h-10 text-red-600" />,
      title: "Operational Excellence",
      description:
        "Optimizing upstream, midstream, and downstream processes to maximize efficiency, reduce downtime, and improve performance across the value chain.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-700" />,
      title: "Health, Safety & Risk",
      description:
        "Embedding a culture of safety and resilience, with proactive risk management frameworks to protect workers, assets, and communities.",
    },
    {
      icon: <Recycle className="w-10 h-10 text-green-600" />,
      title: "Sustainability & ESG",
      description:
        "Aligning oil and gas strategies with global ESG standards by reducing carbon footprint, improving energy efficiency, and ensuring regulatory compliance.",
    },
    {
      icon: <Cpu className="w-10 h-10 text-indigo-600" />,
      title: "Digital Transformation",
      description:
        "Harnessing AI, IoT, and advanced analytics to enable predictive maintenance, smart monitoring, and data-driven decision-making.",
    },
  ];

  return (
    <section
      id="oil-gas-industry"
      ref={sectionRef}
      className="relative py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-r from-orange-50 via-gray-50 to-orange-50"
    >
      {/* Header */}
      <div className="text-center mb-20">
        <h1
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "'Voltaire', sans-serif", color: "#0A2540" }}
        >
          Oil & Gas Solutions
        </h1>
        <p
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Impact Plus empowers oil and gas companies to achieve safer,
          more efficient, and sustainable operations. By combining sector
          expertise with digital innovation, we help organizations meet
          energy demands while addressing environmental and social
          responsibilities.
        </p>
      </div>

      {/* Oil & Gas Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {oilGasSolutions.map((o, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transform transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="mb-4">{o.icon}</div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#0A2540",
              }}
            >
              {o.title}
            </h3>
            <p className="text-gray-700">{o.description}</p>
          </div>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="mt-20 text-center max-w-4xl mx-auto">
        <p
          className="text-lg md:text-xl text-gray-700 mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          From exploration to decommissioning, our solutions integrate safety,
          efficiency, and sustainability — enabling oil and gas companies to
          adapt to global energy transitions and build long-term resilience.
        </p>
        <p
          className="text-md text-gray-500 italic"
          style={{ fontFamily: "'Frangela', sans-serif" }}
        >
          “Powering progress through safe, sustainable, and innovative
          energy solutions.”
        </p>
      </div>
    </section>
  );
};

export default OilGas;
