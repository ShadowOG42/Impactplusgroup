"use client";
import React, { useEffect, useRef } from "react";
import { Building2, MapPin, Users, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const PublicInfra = () => {
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

  const infrastructureSolutions = [
    {
      icon: <Building2 className="w-10 h-10 text-blue-600" />,
      title: "Urban Planning & Development",
      description:
        "Designing resilient cities and communities with integrated infrastructure strategies for long-term growth.",
    },
    {
      icon: <MapPin className="w-10 h-10 text-green-600" />,
      title: "Transportation Networks",
      description:
        "Planning and optimizing roads, railways, and public transit systems for efficient mobility and connectivity.",
    },
    {
      icon: <Users className="w-10 h-10 text-gray-600" />,
      title: "Community & Social Infrastructure",
      description:
        "Delivering water, sanitation, healthcare, and educational facilities to enhance societal well-being.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-yellow-600" />,
      title: "Safety & Sustainability",
      description:
        "Embedding safety, climate resilience, and sustainable practices into infrastructure planning and execution.",
    },
  ];

  return (
    <section
      id="public-infrastructure"
      ref={sectionRef}
      className={`relative py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-r from-gray-50 via-blue-50 to-gray-50 ${montserrat.className}`}
    >
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900" style={{ fontFamily: "Georgia, serif" }}>
          Public Infrastructure Solutions
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Impact Plus empowers governments and development partners to design, deliver, and sustain infrastructure that enhances quality of life and drives long-term prosperity.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {infrastructureSolutions.map((i, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transform transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="mb-4">{i.icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">{i.title}</h3>
            <p className="text-gray-700">{i.description}</p>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-20 text-center max-w-4xl mx-auto">
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          From planning to execution and lifecycle management, Impact Plus applies a systems-thinking approach to deliver resilient, sustainable, and high-impact infrastructure projects that meet both current and future needs.
        </p>
        <p className="text-md text-gray-500 italic">
          “Building infrastructure that strengthens communities and drives lasting impact.”
        </p>
      </div>
    </section>
  );
};

export default PublicInfra;
