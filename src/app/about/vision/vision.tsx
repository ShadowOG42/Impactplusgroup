'use client';
import React from "react";

const impactData = [
  {
    letter: "I",
    title: "Integrity",
    description:
      "Transparent, ethical, and principled. Our reputation is built on integrity, delivering value through honesty, transparency, and unwavering commitment to ethical practices in everything we do.",
    color: "bg-blue-50",
  },
  {
    letter: "M",
    title: "Mastery",
    description:
      "Evidence-based expertise and continuous learning. We continuously push boundaries, embrace innovation, and leverage expertise to deliver exceptional results.",
    color: "bg-blue-100",
  },
  {
    letter: "P",
    title: "Passion",
    description:
      "Purpose-driven progress, every step of the way. Driven by passion, we lead with heart and mind, constantly innovating and shaping a better future.",
    color: "bg-slate-100",
  },
  {
    letter: "A",
    title: "Agility",
    description:
      "Responsive, adaptive, and ready for change. We swiftly adapt to challenges, embrace new technologies, and evolve our services to drive continuous improvement.",
    color: "bg-blue-50",
  },
  {
    letter: "C",
    title: "Collaboration",
    description:
      "We co-create with partners. At Impact Plus, we create partners, not clients, working collaboratively to leverage collective genius and achieve shared success.",
    color: "bg-blue-100",
  },
  {
    letter: "T",
    title: "Transparency",
    description:
      "Clarity in communication, accountability in action. We hold ourselves accountable and remain open about our methods and processes, building trust and empowering partners.",
    color: "bg-slate-100",
  },
];

const Vision = () => {
  return (
    <main className="min-h-screen bg-white py-16 px-6 md:px-16 lg:px-32 font-[Montserrat]">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 font-[Georgia]">
          IMPACT at Impact Plus
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-[Montserrat]">
          Purpose-Led. Future-Focused. Grounded in What Matters.
          <br />
          At Impact Plus, everything we do is anchored in our mission, guided by
          a bold vision, and shaped by values that define how we engage—with our
          clients, our communities, and the world.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-blue-50 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4 font-[Georgia]">
            Our Mission
          </h2>
          <p className="text-gray-700 font-[Montserrat]">
           To empower organisations worldwide to achieve measurable and sustainable growth by aligning governance, leadership, systems, products, and culture. Through Workplace Health, Safety, Environment, and Quality  (WHSEQ), excellence, innovation, Artificial Intelligence (AI) enablement, and Environmental, Social, and Governance (ESG) aligned transformation, we co-design smarter systems and deliver sustainable products that create lasting performance and real-world impact.
          </p>
        </div>

        <div className="bg-blue-100 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4 font-[Georgia]">
            Our Vision
          </h2>
          <p className="text-gray-700 font-[Montserrat]">
          To be the global leader in transformative consulting, systems excellence, and sustainable products — shaping a safer, smarter, and more sustainable world through innovation and collaboration.
          </p>
        </div>
      </div>

      {/* IMPACT Core Values */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center font-[Georgia]">
          Our IMPACT Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {impactData.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-lg border-l-8 border-blue-600 ${item.color} flex flex-col transition-transform hover:scale-105`}
            >
              <div className="text-5xl font-bold text-blue-700 mb-4 font-[Georgia]">
                {item.letter}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2 font-[Georgia]">
                {item.title}
              </h3>
              <p className="text-gray-700 font-[Montserrat]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Vision;
