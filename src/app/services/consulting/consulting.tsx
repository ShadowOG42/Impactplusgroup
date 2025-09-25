'use client';
import React, { useEffect, useRef } from 'react';
import { Briefcase, Users, ChartPie } from 'lucide-react';
import { gsap } from 'gsap';

const Consulting = () => {
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

  const services = [
    {
      icon: <Briefcase className="w-10 h-10 text-lightBlue" />,
      title: "Strategy & Planning",
      description: "We help businesses create actionable strategies that align with their long-term goals."
    },
    {
      icon: <ChartPie className="w-10 h-10 text-darkBlue" />,
      title: "Performance Improvement",
      description: "Optimizing operations, increasing efficiency, and maximizing ROI through data-driven insights."
    },
    {
      icon: <Users className="w-10 h-10 text-silverGrey" />,
      title: "Change Management",
      description: "Guiding organizations through transformation smoothly while engaging and empowering employees."
    },
    {
      icon: <Briefcase className="w-10 h-10 text-lightBlue" />,
      title: "Risk & Compliance",
      description: "Ensuring business processes meet industry standards and minimize operational risks."
    },
  ];

  return (
    <section
      id="business-consulting"
      ref={sectionRef}
      className="relative py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-r from-sky-50 via-sky-100 to-sky-50"
    >
      {/* Header */}
      <div className="text-center mb-20">
        <h1
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "'Voltaire', sans-serif", color: "#0A2540" }} // Dark blue
        >
          Business Consulting
        </h1>
        <p
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Impact Plus helps organizations transform ideas into results. Our consulting solutions are designed to drive innovation, operational excellence, and sustainable growth.
        </p>
      </div>
 
      {/* Services Card */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transform transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="mb-4">{s.icon}</div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#0A2540" }} // Dark blue
            >
              {s.title}
            </h3>
            <p className="text-gray-700">{s.description}</p>
          </div>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="mt-20 text-center max-w-4xl mx-auto">
        <p
          className="text-lg md:text-xl text-gray-700 mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Our consultants work hand-in-hand with your leadership team to identify opportunities, streamline processes, and implement actionable solutions that create real business impact.
        </p>
        <p
          className="text-md text-gray-500 italic"
          style={{ fontFamily: "'Frangela', sans-serif" }}
        >
          “Transforming strategy into success, one business at a time.”
        </p>
      </div>
    </section>
  );
};

export default Consulting;
