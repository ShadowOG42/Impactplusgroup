'use client';
import React, { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="about"
      className={`w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-16 lg:px-32
        bg-white
        transform transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {/* Content Container */}
      <div className="max-w-4xl w-full overflow-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            About Impact Plus
          </h1>
        </div>

        {/* Paragraphs */}
        <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed">
          <p>
            At Impact Plus, we combine deep technical expertise, multi-sector experience, and contemporary research with practical execution to help our clients achieve measurable, sustainable outcomes. From WHSEQ excellence to stakeholder alignment and continuous improvement, we empower teams to own change, delivering real impact that continues long after our engagement.
          </p>

          <p>
            Our mission is to translate strategy into real-world execution. We develop tailored solutions that integrate governance, systems thinking, ESG, leadership, innovation, and AI. Each solution is designed to ensure operational excellence, long-term sustainability, and measurable business growth.
          </p>

          <p>
            We specialize in governance and leadership, stakeholder management, process optimization, ISO standard alignment, ESG strategy, and AI-enabled transformation. By combining these capabilities, we co-design solutions that are practical, measurable, and sustainable — helping organizations navigate complexity with confidence.
          </p>

          <p className="text-blue-800 font-semibold">
            Why clients choose Impact Plus: globally benchmarked, locally grounded, cross-sector expertise, relationship-driven execution, and end-to-end transformation from strategy to systems and skills.
          </p>

          <p className="text-gray-800 italic text-center mt-6 text-xl md:text-2xl">
            “Transformative consulting. Real results.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

