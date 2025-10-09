'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Consulting() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelectorAll('.flow-point'), {
        opacity: 0,
        y: 30,
        scale: 0.8,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }
  }, []);

  const points = [
    'Governance, Leadership & People Performance',
    'ESG & Sustainability Alignment',
    'Stakeholder Management',
    'Systems, Processes & ISO Standards',
    'Continuous Improvement & Innovation',
    'AI-Enabled Transformation',
    'Surveying & Spatial Services',
    'Engagement Tools & Product Solutions',
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-b from-white via-sky-50 to-blue-50 overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-20">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "'Voltaire', sans-serif", color: '#0A2540' }}
        >
          Translating Strategy into Real World Execution
        </h2>
        <p
          className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Impact Plus develops custom solutions integrating governance, systems thinking, ESG, leadership, innovation, and AI. Our solutions include:
        </p>
      </div>

      {/* Flow / Roadmap */}
      <div className="relative flex flex-col items-start md:items-center">
        {points.map((p, i) => (
          <div key={i} className="flex items-center flow-point mb-10 relative">
            {/* Connector Line */}
            {i !== 0 && (
              <span className="absolute w-px h-10 bg-sky-300 left-1/2 transform -translate-x-1/2 -top-10 md:h-16"></span>
            )}
            {/* Point Circle */}
            <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center text-white font-semibold text-sm md:text-base transform transition-all hover:scale-110 shadow-lg">
              {i + 1}
            </div>
            {/* Label */}
            <p className="ml-6 md:ml-10 text-gray-800 font-medium text-lg md:text-xl">
              {p}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Quote */}
      <div className="mt-20 text-center">
        <p
          className="text-gray-600 italic text-md"
          style={{ fontFamily: "'Frangela', sans-serif" }}
        >
          “Strategy flows seamlessly into execution with measurable impact.”
        </p>
      </div>
    </section>
  );
}
