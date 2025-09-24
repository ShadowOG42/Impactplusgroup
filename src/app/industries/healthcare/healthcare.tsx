'use client';
import React, { useEffect, useRef } from 'react';
import { Heart, Users, ShieldCheck } from 'lucide-react';
import { gsap } from 'gsap';

const Healthcare = () => {
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

  const healthcareSolutions = [
    {
      icon: <Heart className="w-10 h-10 text-lightBlue" />,
      title: "Patient Care Optimization",
      description: "Enhancing operational efficiency to deliver better patient outcomes and satisfaction."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-silverGrey" />,
      title: "Regulatory Compliance",
      description: "Ensuring healthcare providers meet all industry standards and legal requirements."
    },
    {
      icon: <Users className="w-10 h-10 text-darkBlue" />,
      title: "Staff Training & Development",
      description: "Empowering healthcare teams with the skills and knowledge to excel in their roles."
    },
    {
      icon: <Heart className="w-10 h-10 text-lightBlue" />,
      title: "Technology Integration",
      description: "Implementing secure, effective digital solutions for healthcare operations."
    },
  ];

  return (
    <section
      id="healthcare-industry"
      ref={sectionRef}
      className="relative py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-r from-sky-50 via-sky-100 to-sky-50"
    >
      {/* Header */}
      <div className="text-center mb-20">
        <h1
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "'Voltaire', sans-serif", color: "#0A2540" }}
        >
          Healthcare Industry Solutions
        </h1>
        <p
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Impact Plus provides specialized solutions to enhance healthcare efficiency, patient care, and compliance.
        </p>
      </div>

      {/* Healthcare Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {healthcareSolutions.map((h, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transform transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="mb-4">{h.icon}</div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#0A2540" }}
            >
              {h.title}
            </h3>
            <p className="text-gray-700">{h.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Healthcare;
