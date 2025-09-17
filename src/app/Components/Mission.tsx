'use client';
import React, { useEffect, useState } from 'react';
import { Workflow, Layers, Hammer, CheckCircle, Wrench, Recycle } from 'lucide-react';
  
const Mission = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const lifecycle = [
    {
      title: "Governance & Leadership",
      desc: "Alignment, leadership coaching, risk assessment, feasibility studies, stakeholder engagement.",
      icon: Layers,
    },
    {
      title: "Tender & Design",
      desc: "Bid strategy, tender documentation, compliance checks, design & constructability reviews, WHSEQ integration.",
      icon: Hammer,
    },
    {
      title: "Construction & Commissioning",
      desc: "On-site WHSEQ leadership, ISO compliance, execution support, operational readiness, training & handover.",
      icon: CheckCircle,
    },
    {
      title: "Maintenance & Optimisation",
      desc: "Asset optimisation, shutdown planning & execution, continuous improvement, quality assurance.",
      icon: Wrench,
    },
    {
      title: "Repurposing & Decommissioning",
      desc: "Transition planning, safe decommissioning, ESG compliance, stakeholder engagement for long-term impact.",
      icon: Recycle,
    },
  ];

  return (
    <section
      id="mission"
      className={`min-h-screen bg-gradient-to-r from-white via-blue-50 to-blue-100 py-20 px-6 md:px-16 lg:px-32
        transform transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <Workflow className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
          Our Mission
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          At Impact Plus, we deliver value across the <span className="font-semibold text-blue-900">entire project lifecycle</span> — 
          empowering organisations to achieve sustainable growth at every stage.
        </p>
      </div>

      {/* Lifecycle Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {lifecycle.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className={`bg-white rounded-xl p-8 border border-blue-100 shadow-md hover:shadow-xl transition-all duration-500
                transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <Icon className="w-10 h-10 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold text-blue-800 mb-3">{item.title}</h2>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Tagline */}
      <div className="mt-20 text-center">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg blur opacity-30" />
          <div className="relative bg-white rounded-lg p-6 border border-blue-100 shadow-md">
            <p className="text-xl md:text-2xl font-medium text-blue-700 italic">
              “Making Impact at Every Stage of the Project Lifecycle”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
