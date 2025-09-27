"use client";
import React, { useEffect, useRef } from "react";
import { GraduationCap, Lightbulb, Users, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";

const Education = () => {
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

  const eduSolutions = [
    {
      icon: <GraduationCap className="w-10 h-10 text-indigo-600" />,
      title: "Academic Excellence",
      description:
        "Supporting universities in building high-performance learning environments that prioritize quality, innovation, and student success.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
      title: "Innovation & Digital Transformation",
      description:
        "Empowering institutions to embrace technology-driven learning, research, and administration for sustainable growth.",
    },
    {
      icon: <Users className="w-10 h-10 text-green-600" />,
      title: "Leadership & Culture",
      description:
        "Developing future-ready leaders, faculty, and staff while cultivating inclusive and resilient academic cultures.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-700" />,
      title: "Governance & Risk Management",
      description:
        "Strengthening governance structures, compliance, and risk management to ensure academic integrity and institutional resilience.",
    },
  ];

  return (
    <section
      id="higher-education-industry"
      ref={sectionRef}
      className="relative py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50"
    >
      {/* Header */}
      <div className="text-center mb-20">
        <h1
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "'Voltaire', sans-serif", color: "#0A2540" }}
        >
          Higher Education Solutions
        </h1>
        <p
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Impact Plus partners with universities and education systems to align
          strategy, leadership, technology, and culture. We help institutions
          strengthen governance, foster innovation, and prepare future-ready
          graduates for a rapidly changing world.
        </p>
      </div>

      {/* Education Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {eduSolutions.map((e, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transform transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="mb-4">{e.icon}</div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#0A2540",
              }}
            >
              {e.title}
            </h3>
            <p className="text-gray-700">{e.description}</p>
          </div>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="mt-20 text-center max-w-4xl mx-auto">
        <p
          className="text-lg md:text-xl text-gray-700 mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Our higher education solutions embed excellence, leadership
          development, and innovation into every level of academia — turning
          complexity into clarity and ensuring institutions thrive in a
          knowledge-driven society.
        </p>
        <p
          className="text-md text-gray-500 italic"
          style={{ fontFamily: "'Frangela', sans-serif" }}
        >
          “Shaping the future of education through innovation, leadership, and
          sustainable growth.”
        </p>
      </div>
    </section>
  );
};

export default Education;
