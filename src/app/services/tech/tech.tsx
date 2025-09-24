'use client';
import React, { useEffect, useRef } from 'react';
import { Cpu, Cloud, Globe } from 'lucide-react';
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

  const solutions = [
    {
      icon: <Cpu className="w-10 h-10 text-lightBlue" />,
      title: "Automation & Process Control",
      description: "Implementing smart automation systems to optimize mining and energy operations and increase operational efficiency."
    },
    {
      icon: <Cloud className="w-10 h-10 text-darkBlue" />,
      title: "Digital Monitoring",
      description: "Real-time monitoring and predictive analytics to ensure smooth operations, prevent downtime, and enhance safety."
    },
    {
      icon: <Globe className="w-10 h-10 text-silverGrey" />,
      title: "IoT & Smart Sensors",
      description: "Deploying IoT solutions and sensor networks for environmental monitoring, equipment performance, and resource optimization."
    },
    {
      icon: <Cpu className="w-10 h-10 text-lightBlue" />,
      title: "Data Analytics & Insights",
      description: "Leveraging operational data to generate actionable insights, improve decision-making, and maximize ROI."
    },
  ];

  return (
    <section
      id="technology-solutions"
      ref={sectionRef}
      className="relative py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-r from-sky-50 via-sky-100 to-sky-50"
    >
      {/* Header */}
      <div className="text-center mb-20">
        <h1
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "'Voltaire', sans-serif", color: "#0A2540" }}
        >
          Technology Solutions
        </h1>
        <p
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Impact Plus empowers energy and mining organizations with cutting-edge technology solutions that enhance operational efficiency, safety, and profitability.
        </p>
      </div>

      {/* Solutions Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {solutions.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transform transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="mb-4">{s.icon}</div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", color: "#0A2540" }}
            >
              {s.title}
            </h3>
            <p className="text-gray-700">{s.description}</p>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-20 text-center max-w-4xl mx-auto">
        <p
          className="text-lg md:text-xl text-gray-700 mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Our technology experts deploy innovative solutions including IoT, automation, and advanced analytics to drive smarter, safer, and more efficient energy and mining operations.
        </p>
        <p
          className="text-md text-gray-500 italic"
          style={{ fontFamily: "'Frangela', sans-serif" }}
        >
          “Powering the future of energy and mining through technology innovation.”
        </p>
      </div>
    </section>
  );
};

export default Tech;
