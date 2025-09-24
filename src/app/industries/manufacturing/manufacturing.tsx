'use client';
import React, { useEffect, useRef } from 'react';
 
import { Factory, Settings, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';

const Manufacturing = () => {
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

  const manufacturingSolutions = [
    {
      icon: <Factory className="w-10 h-10 text-darkBlue" />,
      title: "Process Optimization",
      description: "Streamlining production workflows to maximize efficiency and reduce waste."
    },
    {
      icon: <Settings className="w-10 h-10 text-darkBlue" />,
      title: "Automation Solutions",
      description: "Implementing advanced automation to enhance precision and reduce operational costs."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-darkBlue" />,
      title: "Supply Chain Management",
      description: "Optimizing logistics and inventory to improve reliability and profitability."
    },
    {
      icon: <Factory className="w-10 h-10 text-darkBlue" />,
      title: "Sustainability Initiatives",
      description: "Integrating eco-friendly practices into manufacturing operations for long-term growth."
    },
  ];

  return (
    <section
      id="manufacturing-industry"
      ref={sectionRef}
      className="relative py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-r from-sky-50 via-sky-100 to-sky-50"
    >
      {/* Header */}
      <div className="text-center mb-20">
        <h1
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "'Voltaire', sans-serif", color: "#0A2540" }}
        >
          Manufacturing Industry Solutions
        </h1>
        <p
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Impact Plus empowers manufacturers with solutions for process efficiency, automation, and sustainability.
        </p>
      </div>

      {/* Manufacturing Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {manufacturingSolutions.map((m, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transform transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="mb-4">{m.icon}</div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#0A2540" }}
            >
              {m.title}
            </h3>
            <p className="text-gray-700">{m.description}</p>
          </div>
        ))}
      </div>

       
    </section>
  );
};

export default Manufacturing;
