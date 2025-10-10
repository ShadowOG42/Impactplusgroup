'use client';
import React, { useEffect, useRef } from 'react';
import { Globe2, Users, ShieldCheck, Workflow } from 'lucide-react';
import { gsap } from 'gsap';

const Tech = () => {
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

  const reasons = [
    {
      icon: <Globe2 className="w-10 h-10 text-lightBlue" />,
      title: "Globally Benchmarked, Locally Grounded",
      description: "Our solutions are benchmarked against global best practices but deeply rooted in local realities—ensuring impact that lasts."
    },
    {
      icon: <Users className="w-10 h-10 text-darkBlue" />,
      title: "Cross-Sector Expertise",
      description: "We combine insights from multiple industries with deep contextual understanding to craft solutions that work where they matter most."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-silverGrey" />,
      title: "Trusted Delivery",
      description: "Built on relationship-driven execution, we deliver with trust, accountability, and long-term partnership focus."
    },
    {
      icon: <Workflow className="w-10 h-10 text-lightBlue" />,
      title: "End-to-End Transformation",
      description: "From strategy to systems to skills, Impact Plus drives complete transformation tailored to your business vision."
    },
  ];

  return (
    <section
      id="why-choose-impactplus"
      ref={sectionRef}
      className="relative py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-r from-sky-50 via-sky-100 to-sky-50"
    >
      {/* Header */}
      <div className="text-center mb-20">
        <h1
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "'Voltaire', sans-serif", color: "#0A2540" }}
        >
          WHY CLIENTS CHOOSE IMPACT PLUS
        </h1>
        <p
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          style={{ fontFamily: "Georgia, serif" }}
        >
          We empower clients with globally recognised expertise and a grounded understanding of local challenges—turning strategy into sustainable success.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {reasons.map((r, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transform transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="mb-4">{r.icon}</div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#0A2540" }}
            >
              {r.title}
            </h3>
            <p className="text-gray-700">{r.description}</p>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <div className="mt-20 text-center max-w-4xl mx-auto">
        <p
          className="text-lg md:text-xl text-gray-700 mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Impact Plus partners with organisations to create measurable value through collaboration, innovation, and execution excellence.
        </p>
        <p
          className="text-md text-gray-500 italic"
          style={{ fontFamily: "'Frangela', sans-serif" }}
        >
          “Driving transformation with trust, technology, and purpose.”
        </p>
      </div>
    </section>
  );
};

export default Tech;
