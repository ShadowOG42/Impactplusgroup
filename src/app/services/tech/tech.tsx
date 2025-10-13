'use client';
import React from 'react';
import { Globe2, Users, ShieldCheck, Workflow } from 'lucide-react';

const reasons = [
  {
    icon: <Globe2 className="w-10 h-10 text-blue-700" />,
    title: "Globally Benchmarked, Locally Grounded",
    description:
      "Our solutions are benchmarked against global best practices but deeply rooted in local realities—ensuring impact that lasts.",
    color: "bg-blue-50",
  },
  {
    icon: <Users className="w-10 h-10 text-blue-700" />,
    title: "Cross-Sector Expertise",
    description:
      "We combine insights from multiple industries with deep contextual understanding to craft solutions that work where they matter most.",
    color: "bg-blue-100",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-700" />,
    title: "Trusted Delivery",
    description:
      "Built on relationship-driven execution, we deliver with trust, accountability, and long-term partnership focus.",
    color: "bg-slate-100",
  },
  {
    icon: <Workflow className="w-10 h-10 text-blue-700" />,
    title: "End-to-End Transformation",
    description:
      "From strategy to systems to skills, Impact Plus drives complete transformation tailored to your business vision.",
    color: "bg-blue-50",
  },
];

const Tech = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-32 bg-white font-[Montserrat]">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 font-[Georgia]">
          WHY CLIENTS CHOOSE IMPACT PLUS
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-[Montserrat]">
          We empower clients with globally recognised expertise and a grounded understanding of local challenges—turning strategy into sustainable success.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((r, i) => (
          <div
            key={i}
            className={`p-6 rounded-2xl shadow-lg border-l-8 border-blue-600 ${r.color} flex flex-col items-center text-center transition-transform hover:scale-105`}
          >
            <div className="mb-4">{r.icon}</div>
            <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2 font-[Georgia]">
              {r.title}
            </h3>
            <p className="text-gray-700 font-[Montserrat]">{r.description}</p>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <div className="mt-20 text-center max-w-4xl mx-auto">
        <p className="text-lg md:text-xl text-gray-700 mb-6 font-[Montserrat]">
          Impact Plus partners with organisations to create measurable value through collaboration, innovation, and execution excellence.
        </p>
        <p className="text-md text-blue-900 italic font-[Georgia]">
          “Driving transformation with trust, technology, and purpose.”
        </p>
      </div>
    </section>
  );
};

export default Tech;
