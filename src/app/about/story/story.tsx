"use client";
import React from "react";
import {
  Layers,
  Target,
  Users,
  Cpu,
  Globe,
  Lightbulb,
  MapPin,
  BarChart,
  Handshake,
  Award,
} from "lucide-react";

const differentiatorsData = [
  {
    title: "Integrated by design",
    description:
      "Our eight core capabilities are intentionally interlinked to provide cohesive, cross-functional solutions. We don’t deliver siloed services—we deliver integrated transformation. This integration enables scalable impact across operations, culture, technology, and sustainability.",
    color: "bg-blue-50",
    icon: <Layers className="w-8 h-8" />,
  },
  {
    title: "Strategy that sticks",
    description:
      "We don’t deliver slide decks—we deliver sustainable capability. We embed tools, systems, and frameworks into your daily operations, ensuring your people own the transformation and drive it long after our engagement ends. Our goal is not just strategy—it’s execution that endures.",
    color: "bg-blue-100",
    icon: <Target className="w-8 h-8" />,
  },
  {
    title: "Human-centred, system-smart",
    description:
      "We bring deep capability in leadership development, systems thinking, HOP (Human and Organisational Performance), and change enablement. Whether shaping culture, simplifying ISO systems, or aligning ESG with leadership, we focus on what drives real-world execution: people, purpose, and clarity.",
    color: "bg-slate-100",
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: "AI done right",
    description:
      "We help clients move from AI exploration to enterprise-level capability—integrating AI strategy, governance, automation, and human + machine collaboration to deliver outcomes that are practical, ethical, and scalable.",
    color: "bg-blue-50",
    icon: <Cpu className="w-8 h-8" />,
  },
  {
    title: "Sustainability & ESG at the Core",
    description:
      "We embed ESG principles into every capability—not just as compliance, but as strategy. From carbon roadmaps and diversity programs to governance-for-impact models, we help clients drive sustainable performance and long-term value.",
    color: "bg-blue-100",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: "Innovation with purpose",
    description:
      "From lean systems and innovation pipelines to responsible product design and AI enablement, we deliver innovation that is scalable, ethical, and aligned to your strategic objectives.",
    color: "bg-slate-100",
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    title: "Spatial precision, strategic impact",
    description:
      "Our surveying and spatial services provide high-accuracy data to support planning, compliance, construction, and infrastructure delivery. This capability underpins risk reduction, operational assurance, and informed decision-making.",
    color: "bg-blue-50",
    icon: <MapPin className="w-8 h-8" />,
  },
  {
    title: "Measured outcomes, not just optics",
    description:
      "Every engagement is measured, not just marketed. We align with ISO standards, stakeholder metrics, ESG reporting, and innovation impact dashboards—tracking what truly matters to your mission.",
    color: "bg-blue-100",
    icon: <BarChart className="w-8 h-8" />,
  },
  {
    title: "Co-design, not Command",
    description:
      "We partner with your teams to co-create change—empowering internal capability through collaborative, iterative processes. We don’t impose—we enable.",
    color: "bg-slate-100",
    icon: <Handshake className="w-8 h-8" />,
  },
  {
    title: "Real-world experience",
    description:
      "Our team combines cross-sector leadership and delivery experience across energy, infrastructure, government, health, and higher education. We translate boardroom ambition into frontline execution.",
    color: "bg-blue-50",
    icon: <Award className="w-8 h-8" />,
  },
];

const Story = () => {
  return (
    <main className="min-h-screen bg-white py-16 px-6 md:px-16 lg:px-32">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Impact Plus | Our Differentiators
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Human-centered. System-smart. Future-ready.
        </p>
      </div>

      {/* Differentiator Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {differentiatorsData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-start ${item.color} p-6 rounded-xl shadow-lg transition-transform hover:scale-[1.02]`}
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center font-semibold text-sm md:text-base mr-4 mb-4 md:mb-0">
              {item.icon}
            </div>

            {/* Text */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Story;
