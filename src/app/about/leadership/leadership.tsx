// app/about/leadership/page.tsx
import Image from "next/image";
import React from "react";

export default function Leadership() {
  return (
    <main className="px-6 md:px-12 lg:px-24 py-16 bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Page Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 tracking-tight">
          Impact Plus | Our Leadership
        </h1>
      </section>

      {/* Managing Director Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        {/* Left: Content */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Our Managing Director & Principal Consultant
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-1">
            Dr. Posani Maveza
          </h3>
          <p className="text-blue-700 mb-6 font-medium">
            PhD, MHS&amp;E, MEMgt, MMinEng, BSc (Hons) Surveying
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Dr. Posani Maveza is the founder and strategic force behind Impact
            Plus, a consulting firm known for delivering integrated,
            future-focused transformation across sectors. A highly accomplished
            organisational performance aspecialist and systems thinker, Dr.
            Maveza combines 20+ years of experience across energy,
            infrastructure, mining, health, government, and higher education.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            He leads with deep expertise in governance, systems integration, ESG
            alignment, stakeholder management, continuous improvement, and
            AI-enabled transformation. His doctoral research led to the
            development of the Quality Excellence Framework (QEF)—an applied
            model that now informs best practice consulting across the firm’s
            eight integrated capabilities.
          </p>
        </div>

        {/* Right: Image + Name */}
        <div className="flex flex-col items-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-blue-300">
            <Image
              src="/Certificates/Mr_Maveza.png"
              alt="Dr. Posani Maveza"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center mt-4">
            <h3 className="text-xl md:text-2xl font-bold text-blue-900">
              Dr. Posani Maveza
            </h3>
            <p className="text-blue-700 text-sm md:text-base">
              PhD, MHS&amp;E, MEMgt, MMinEng, BSc (Hons) Surveying
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 shadow-lg rounded-2xl p-8 border border-blue-200">
          <h4 className="text-xl font-semibold text-blue-900 mb-4">
            Dr. Maveza’s leadership exemplifies the Impact Plus differentiators:
          </h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Strategy embedded in operations</li>
            <li>Measurable transformation</li>
            <li>Human-centred, system-smart solutions</li>
            <li>Practical, ethical use of innovation and AI</li>
            <li>ESG and sustainability integration</li>
            <li>Collaborative, co-designed change</li>
          </ul>
        </div>
      </section>

      {/* Academic Credentials */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-white to-blue-50 shadow-md rounded-2xl p-8 border-l-4 border-blue-600">
          <h4 className="text-xl font-semibold text-blue-900 mb-4">
            Academic Credentials
          </h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              PhD (Governance, Quality Systems & Continuous Improvement) – QUT
            </li>
            <li>Master of Health, Safety & Environment – QUT</li>
            <li>Master of Engineering Management – UTS</li>
            <li>Master of Mining Engineering – UNSW</li>
            <li>Bachelor of Science (Surveying) – MSU</li>
            <li>
              Certified across multiple quality, safety, and leadership
              disciplines
            </li>
          </ul>
        </div>
      </section>

      {/* Quote Box */}
      <section className="mb-20">
        <div className="bg-blue-100 border-l-8 border-blue-700 shadow-lg rounded-2xl p-8">
          <blockquote className="italic text-gray-900 text-lg">
            “At Impact Plus, we co-design practical transformation that
            sticks—aligning governance, leadership, systems, and purpose. Guided
            by our IMPACT values, we help organisations drive progress that is
            measurable, ethical, and enduring.”
          </blockquote>
        </div>
      </section>
    </main>
  );
}
