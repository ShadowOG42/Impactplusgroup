'use client';
import React, { useEffect, useRef } from 'react';
import { BarChart, ShieldCheck, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';

const Finance = () => {
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

  const financeSolutions = [
    {
      icon: <BarChart className="w-10 h-10 text-lightBlue" />,
      title: "Financial Analytics",
      description: "Providing deep insights to drive smarter financial decisions and optimize business performance."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-darkBlue" />,
      title: "Risk Management",
      description: "Identifying and mitigating risks with tailored strategies to protect assets and ensure compliance."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-silverGrey" />,
      title: "Regulatory Compliance",
      description: "Ensuring your financial operations meet all legal and regulatory requirements."
    },
    {
      icon: <BarChart className="w-10 h-10 text-lightBlue" />,
      title: "Investment Advisory",
      description: "Supporting growth and profitability with data-driven investment strategies and expert guidance."
    },
  ];

  return (
    <section
      id="finance-industry"
      ref={sectionRef}
      className="relative py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-r from-sky-50 via-sky-100 to-sky-50"
    >
      {/* Header */}
      <div className="text-center mb-20">
        <h1
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "'Voltaire', sans-serif", color: "#0A2540" }}
        >
          Finance Industry Solutions
        </h1>
        <p
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Impact Plus delivers world-class consulting, technology, and training solutions tailored for the finance sector to drive efficiency, compliance, and growth.
        </p>
      </div>

      {/* Finance Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {financeSolutions.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transform transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="mb-4">{f.icon}</div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#0A2540" }}
            >
              {f.title}
            </h3>
            <p className="text-gray-700">{f.description}</p>
          </div>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="mt-20 text-center max-w-4xl mx-auto">
        <p
          className="text-lg md:text-xl text-gray-700 mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Our finance industry solutions combine deep sector knowledge, cutting-edge technology, and tailored training programs to help organizations optimize operations, reduce risk, and achieve sustainable growth.
        </p>
        <p
          className="text-md text-gray-500 italic"
          style={{ fontFamily: "'Frangela', sans-serif" }}
        >
          “Innovative financial solutions for a secure and profitable future.”
        </p>
      </div>
    </section>
  );
};

export default Finance;
