// app/about/leadership/page.tsx
import Image from "next/image";
import React from "react";

export default function Leadership() {
  return (
    <main className="px-6 md:px-12 lg:px-24 py-16 bg-gradient-to-b from-white via-blue-50 to-white font-[Montserrat]">
      {/* Page Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 tracking-tight font-[Georgia]">
          Impact Plus | Our Leadership
        </h1>
      </section>

      {/* Managing Director Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        {/* Left: Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-blue-300">
            <Image
              src="/Certificates/Mr_Maveza.png"
              alt="Dr. Posani Maveza"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: Updated Content */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2 font-[Georgia]">
            Managing Director & Principal Consultant
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-1 font-[Georgia]">
            Dr. Posani Maveza
          </h3>
          <p className="text-blue-700 mb-6 font-medium">
            PhD, MHS&amp;E, MEMgt, MMinEng, BSc (Hons) Surveying
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Dr Posani Maveza is the founder and strategic lead of Impact Plus,
            guiding transformative consulting, systems excellence, and sustainable
            product innovation across industries. With over 20 years’ experience
            in energy, mining, infrastructure, health, government, and higher
            education, he integrates governance, systems thinking, quality
            management, and digital transformation to deliver measurable impact.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            His academic and professional grounding — including a PhD in
            Governance, Quality Systems & Continuous Improvement and multiple
            master’s degrees across Health, Safety & Environment, Engineering
            Management, and Mining Engineering — underpins Impact Plus’s
            evidence-based consulting approach.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Certified across multiple quality, safety, and leadership disciplines,
            Dr Maveza continues to shape how organisations align people, systems,
            and products for sustainable performance.
          </p>
        </div>
      </section>

      {/* Director's Quote */}
      <section className="mb-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 tracking-tight font-[Georgia]">
            Director&apos;s Quote
          </h2>
          <div className="w-24 h-1 mx-auto mt-2 bg-blue-700 rounded-full"></div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-2xl p-8 border-l-8 border-blue-700">
          <blockquote className="italic text-blue-900 text-lg md:text-xl leading-relaxed font-[Montserrat]">
            “At Impact Plus, we co-design practical, human-centred transformation 
            that delivers measurable outcomes. Guided by our IMPACT values, we align 
            governance, leadership, and systems to create lasting change that is ethical, 
            sustainable, and effective across organisations.”
          </blockquote>
          <p className="mt-6 text-right font-semibold text-blue-800 font-[Montserrat]">
            — Dr. Posani Maveza, Managing Director & Principal Consultant
          </p>
        </div>
      </section>
    </main>
  );
}
