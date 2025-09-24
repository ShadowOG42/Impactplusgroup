'use client';
import React, { useEffect, useRef } from 'react';
import { Zap , TrendingUp, Users, Sun } from 'lucide-react';
import { gsap } from 'gsap';

const Energy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }
  }, []);

  const energySolutions = [
    {
      icon: <Zap className="w-10 h-10 text-lightBlue" />,
      title: "Project Development",
      description: "Comprehensive planning and execution strategies for renewable and conventional energy projects."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-darkBlue" />,
      title: "Performance Optimization",
      description: "Maximizing operational efficiency and energy output across the project lifecycle."
    },
    {
      icon: <Users className="w-10 h-10 text-silverGrey" />,
      title: "Workforce Management",
      description: "Ensuring skilled teams and safety compliance for energy operations."
    },
    {
      icon: <Sun className="w-10 h-10 text-lightBlue" />,
      title: "Sustainability Solutions",
      description: "Integrating renewable energy practices and sustainable initiatives for long-term growth."
    },
  ];

  return (
    <section
      id="energy-industry"
      ref={sectionRef}
      className="relative py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-r from-sky-50 via-sky-100 to-sky-50"
    >
      {/* Header */}
      <div className="text-center mb-20">
        <h1
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "'Voltaire', sans-serif", color: "#0A2540" }}
        >
          Energy Sector Solutions
        </h1>
        <p
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          style={{ fontFamily: "Georgia, serif" }}
        >
          At Impact Plus, we deliver value across the entire project lifecycle — empowering organisations to achieve sustainable growth at every stage.
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
            <p className="text-gray-700">{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Energy;
