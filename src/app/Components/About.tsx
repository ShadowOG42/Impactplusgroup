'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Globe, Target, Users } from 'lucide-react';

const OurVision = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  const visionPoints = [
    {
      icon: <Globe className="w-10 h-10 text-lightBlue" />,
      title: "Global Excellence",
      description: "Delivering benchmarked, innovative solutions across industries while maintaining local relevance."
    },
    {
      icon: <Target className="w-10 h-10 text-darkBlue" />,
      title: "Precision & Impact",
      description: "Ensuring measurable results that transform business safety, culture, and performance."
    },
    {
      icon: <Users className="w-10 h-10 text-silverGrey" />,
      title: "Empowered People",
      description: "Fostering collaboration and knowledge sharing to create a culture of continuous improvement."
    },
  ];

  return (
    <section
      id="vision"
      className={`relative py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-r from-sky-50 via-sky-100 to-sky-50 transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Header */}
      <div className="text-center mb-20">
        <h2
          className="text-4xl md:text-5xl font-bold text-darkBlue"
          style={{ fontFamily: "'Voltaire', sans-serif" }}
        >
          Our Vision
        </h2>
        <p
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          style={{ fontFamily: "Georgia, serif" }}
        >
          At Impact Plus Business Improvement Solutions, our vision is to drive global standards of excellence while empowering local communities and businesses with innovative solutions that deliver real impact.
        </p>
      </div>

      {/* Central Image with Vision Points */}
      <div className="relative flex flex-col items-center md:flex-row md:justify-center gap-12">
        {/* Left Vision Points */}
        <div className="flex flex-col gap-10 md:mr-12">
          {visionPoints.slice(0, 1).map((v, i) => (
            <div
              key={i}
              className={`bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center text-center transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div className="mb-4">{v.icon}</div>
              <h3
                className="text-2xl font-bold mb-2 text-darkBlue"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {v.title}
              </h3>
              <p className="text-gray-700">{v.description}</p>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
          <Image
            src="/VisionImage.jpg" // replace with your warm image
            alt="Vision Center"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Vision Points */}
        <div className="flex flex-col gap-10 md:ml-12">
          {visionPoints.slice(1).map((v, i) => (
            <div
              key={i}
              className={`bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center text-center transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div className="mb-4">{v.icon}</div>
              <h3
                className="text-2xl font-bold mb-2 text-darkBlue"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {v.title}
              </h3>
              <p className="text-gray-700">{v.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Text Below the Image */}
      <div className="mt-20 text-center max-w-4xl mx-auto">
        <p
          className="text-lg md:text-xl text-gray-700 mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Our vision is not just about processes, but about creating meaningful impact through people, innovation, and global standards. We aim to empower businesses to achieve excellence and sustainability in all they do.
        </p>
        <p
          className="text-md text-gray-500 italic"
          style={{ fontFamily: "'Frangela', sans-serif" }}
        >
          “Transforming businesses. Empowering people. Creating impact.”
        </p>
      </div>
    </section>
  );
};

export default OurVision;
