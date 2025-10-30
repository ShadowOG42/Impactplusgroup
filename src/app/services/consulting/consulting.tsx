'use client';
import React, { useState } from 'react';

export default function Consulting() {
  const [activeIndex, setActiveIndex] = useState(0);

  const topics = [
    {
      title: '1.	Project Management & Delivery Support  ',
      content: (
        <>
          <h3
            className="text-2xl font-bold mb-3"
            style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}
          >
           Strategic input into planning, scheduling, coordination, and governance across all project phases.
          </h3>

          <h3
            className="text-2xl  mb-3"
            style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}
          >
            The Challenge
          </h3>

          <p className="mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            Large-scale projects often face fragmented coordination, unclear governance, and inconsistent delivery standards. Complex interfaces between contractors, clients, and regulators can lead to inefficiencies, cost overruns, and schedule delays. To achieve predictable success, organisations need structured project governance, transparent communication, and system-aligned execution that connects strategy to delivery.  </p>

          <h3
            className="text-2xl  mb-3"
            style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}
          >
            The Impact Plus Solution
          </h3>

          <p className="mb-4" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            At Impact Plus, we provide strategic project management and delivery support that embeds governance,
            risk, and assurance into every phase of execution. Our team brings deep experience in planning, scheduling,
            and performance control—ensuring alignment between design intent, field delivery, and organisational objectives.
            We integrate project management frameworks with continuous improvement tools and quality systems to enhance
            efficiency, accountability, and traceability.
          </p>

          <p className="font-semibold mb-2" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            We help organisations to:
          </p>

          <ul className="list-disc pl-6 mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            <li>Strengthen project governance and decision-making.</li>
            <li>Improve coordination and communication across multi-contractor environments.</li>
            <li>Embed risk, quality, and HSE assurance within delivery systems.</li>
            <li>Drive predictable outcomes through planning, analytics, and reporting discipline.</li>
          </ul>

          <h3
            className="text-2xl mb-3"
            style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}
          >
            Our Differentiator — Strategy into Execution
          </h3>

          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            We bridge the gap between project vision and field execution through an integrated PMO approach that
            unites governance, systems, and leadership. Our focus on alignment and traceability ensures performance
            isn’t just monitored — it’s managed with precision and confidence.
          </p>
        </>
      ),
    },
    {
      title: '2.	Workplace Health, Safety, Environment, Quality & Continuous Improvement Systems',
      content: (
        <>
          <h3
            className="text-2xl font-bold mb-3"
            style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}
          >
           Design, auditing, and optimisation of ISO-aligned management systems (ISO 9001, ISO 14001, ISO 45001) to strengthen operational excellence.
          </h3>

          <h3
            className="text-2xl  mb-3"
            style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}
          >
            The Challenge
          </h3>

          <p className="mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
           In a rapidly changing regulatory and operational landscape, many organisations struggle to maintain compliance, integrate management systems, and sustain performance excellence. Disconnected processes and reactive improvement efforts can undermine efficiency, accountability, and trust. </p>

          <h3
            className="text-2xl  mb-3"
            style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}
          >
            The Impact Plus Solution
          </h3>

          <p className="mb-4" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
          We design, audit, and optimise ISO-aligned management systems that connect safety, environment, quality, and governance into one cohesive framework. Our experts deliver end-to-end system integration covering ISO 9001 (Quality), ISO 14001 (Environment), and ISO 45001 (Health & Safety) — ensuring consistent standards, traceability, and continuous improvement.
          We help organisations embed a culture of proactive risk management, operational discipline, and measurable performance.

          </p>

          <p className="font-semibold mb-2" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            We partner with clients to:
          </p>

          <ul className="list-disc pl-6 mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            <li>Develop and integrate ISO-certified management systems.</li>
            <li>Streamline compliance and documentation.</li>
            <li>Build internal audit and continual improvement capability.</li>
            <li>Enhance data visibility for smarter decision-making.</li>
          </ul>

          <h3
            className="text-2xl mb-3"
            style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}
          >
            Our Differentiator — Integrated by Design
          </h3>

          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            Our systems are not built for certification alone — they are designed for connection. By uniting quality, safety, and environmental performance, we help organisations turn compliance into competitive advantage and continuous improvement into a cultural norm.
          </p>
        </>
      ),
    },
    {
      title: '3. Leadership, Workforce & Organisational Performance Optimisation',
      content: (
        <>
          <h3
            className="text-2xl font-bold mb-3"
            style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}
          >
           Targeted capability programs that build adaptive leadership, strengthen safety and quality culture, and embed resilience, learning, and continuous improvement across the organisation.
          </h3>

          <h3
            className="text-2xl  mb-3"
            style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}
          >
            The Challenge
          </h3>

          <p className="mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            Even the best systems falter without strong leadership and an engaged, resilient workforce. Many organisations face cultural fragmentation, low accountability, and reactive performance driven by compliance rather than curiosity and learning. In today’s dynamic environment, sustained success requires leaders who can connect vision to behaviour, foster psychological safety, and enable teams to adapt, recover, and grow through complexity and change.
          </p>

          <h3
            className="text-2xl  mb-3"
            style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}
          >
            The Impact Plus Solution
          </h3>

          <p className="mb-4" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            At Impact Plus, we strengthen leadership capability and workforce performance through human-centred, system-smart, and resilience-focused strategies.
Our approach draws on Human and Organisational Performance (HOP) principles, Learning Teams methodologies, and insights from resilience and hardiness science to build capacity, adaptability, and sustained excellence across all levels of the organisation.
Through diagnostics, leadership programs, mentoring, and applied workshops, we help organisations move from reactive problem-solving to proactive learning, embedding systems thinking, collaboration, and curiosity into daily operations.

          </p>

          <p className="font-semibold mb-2" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            We partner with organisations to:
          </p>

          <ul className="list-disc pl-6 mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            <li>	Strengthen leadership, governance, and decision-making capability.</li>
            <li>	Embed HOP principles that focus on learning over blame and system improvement over error avoidance.</li>
            <li>  Facilitate Learning Teams that harness workforce insights to drive innovation, accountability, and shared ownership.</li>
            <li>	Build resilience and hardiness across individuals and teams to sustain performance under pressure and uncertainty.</li>
          </ul>

          <h3
            className="text-2xl mb-3"
            style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}
          >
            Our Differentiator — Human-Centred, System-Smart, and Resilience-Driven
          </h3>

          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            We go beyond traditional leadership training — fostering capability that endures.
            By integrating behavioural science, systems thinking, and adaptive leadership, we enable people and systems to thrive together.
            Our programs cultivate resilient leaders and teams who can anticipate change, recover from challenges, and perform with confidence and clarity in a complex world.

          </p>
        </>
      ),
    },
    {
      title: '4. Surveying & Spatial Services',
      content: (
        <>
          <h3
            className="text-2xl font-bold mb-3"
            style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}
          >
           Delivering precision data acquisition, mapping, and site verification that support construction, engineering, mining, and asset integrity with accuracy and confidence.
          </h3>

          <h3
            className="text-2xl  mb-3"
            style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}
          >
            The Challenge
          </h3>

          <p className="mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
           Accurate spatial data is fundamental to safe, efficient, and compliant project delivery. However, outdated surveying methods, inconsistent data, and disconnected information systems often create costly errors and inefficiencies across the project lifecycle.
          </p>

          <h3
            className="text-2xl  mb-3"
            style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}
          >
            The Impact Plus Solution
          </h3>

          <p className="mb-4" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            We deliver high-precision surveying and spatial services that support planning, engineering, and asset integrity across construction, mining, and infrastructure sectors.
            Our team combines advanced geospatial technology, digital mapping, and data analytics to provide actionable insights that enhance decision-making, verification, and compliance.

          </p>

          <p className="font-semibold mb-2" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            We partner with clients to:
          </p>

          <ul className="list-disc pl-6 mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            <li>	Deliver mining, engineering, and construction surveying with millimetre precision.</li>
            <li>	Produce spatial models and digital mapping for project planning and assurance.</li>
            <li>	Integrate survey data with GIS, BIM, and project systems for seamless data flow.</li>
            <li>	Strengthen quality assurance and governance through accurate spatial validation.</li>
          </ul>

          <h3
            className="text-2xl mb-3"
            style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}
          >
            Our Differentiator — Spatial Precision, Strategic Impact
          </h3>

          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            We merge precision surveying with digital innovation and systems integration, transforming data into intelligence. Our spatial solutions empower clients to plan, build, and verify with confidence and clarity.
          </p>
        </>
      ),
    },
    {
      title: '5.	Sustainable Products',
      content: (
        <>
          <h3
            className="text-2xl font-bold mb-3"
            style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}
          >
           Where performance meets purpose — designing and supplying high-performance industrial materials that protect people, assets, and the planet
          </h3>

          <h3
            className="text-2xl  mb-3"
            style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}
          >
            The Challenge
          </h3>

          <p className="mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            Industries across energy, mining, construction, and manufacturing face mounting pressure to reduce environmental impact, improve resource efficiency, and maintain a reliable supply of compliant, high-performance materials. Traditional supply chains often prioritise cost over sustainability, leading to product inconsistency, safety risks, and increased operational emissions. To remain competitive and responsible, organisations must embed sustainability and innovation into product design, sourcing, and lifecycle management.
          </p>

          <h3
            className="text-2xl  mb-3"
            style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}
          >
            The Impact Plus Solution
          </h3>

          <p className="mb-4" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
          At Impact Plus, sustainability is engineered — not added on.
We design, develop, and supply environmentally responsible industrial materials and consumables that power modern industry while minimising ecological impact. Our Industrial Products Division extends Impact Plus’s consulting expertise into the material sciences — combining chemistry, engineering, and innovation to deliver products that perform better, last longer, and leave a smaller footprint. Led by our in-house Development Chemists, we pioneer greener pigment and surfactant technologies, polymer dispersions, and performance coatings that enhance safety, reliability, and efficiency across multiple sectors. Beyond organisational excellence, we help clients translate sustainability ambition into tangible innovation — applying scientific insight, first-principle thinking, and industry experience to accelerate product development, ensure compliance, and bring sustainable technologies to market.
          </p>

          <p className="font-semibold mb-2" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            We partner with organisations to:
          </p>

          <ul className="list-disc pl-6 mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            <li>	Design and develop greener, cost-efficient pigments, dispersions, polymers, and coatings through advanced chemistry.</li>
            <li>	Source and supply sustainable, high-performance industrial products including PPE, coatings, paints, welding consumables, and specialty materials.</li>
            <li>	Optimise procurement, logistics, and product lifecycle management for traceability and efficiency.</li>
            <li>	Support compliance with environmental, quality, and safety standards across ISO and ESG frameworks.</li>
            <li>	Collaborate on innovation projects that align product design with sustainability goals and operational performance.</li>
          </ul>

          <h3
            className="text-2xl mb-3"
            style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}
          >
            Our Differentiator — Science. Sustainability. Performance.
          </h3>

          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            We merge scientific rigour with sustainable design to create materials and products that protect people, assets, and the planet.
Our dual capability — consulting and chemistry — bridges the gap between strategy and substance, helping industries build smarter, perform better, and impact less.
At Impact Plus, sustainability isn’t a product line — it’s a performance standard.

          </p>
        </>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 py-16 px-6 md:px-16 lg:px-24">
      {/* Hero Title */}
      <div className="text-center mb-20">
        <h1 style={{ fontFamily: 'Georgia, serif', color: '#293c83' }} className="text-4xl md:text-5xl font-bold mb-4">
          Our Integrated Consulting and Product Solutions
        </h1>
        <h2 style={{ fontFamily: 'Georgia, serif', color: '#293c83' }} className="text-2xl md:text-3xl font-semibold mb-6">
          Connecting Strategy, Systems, and Sustainability — From Insight to Impact.
        </h2>
        <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="max-w-3xl mx-auto text-lg md:text-xl">
          At Impact Plus, we move organisations from plans to performance. Through an integrated blend of consulting,
          leadership, innovation, and sustainable product solutions, we translate complexity into clarity — turning strategic
          intent into operational excellence. By combining governance, systems thinking, human performance, and sustainable design,
          we help organisations achieve safer operations, stronger governance, and smarter growth. Explore how our integrated solutions
          drive clarity, performance, and sustainable success.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Buttons */}
        <div className="flex flex-col space-y-3 md:w-1/3">
          {topics.map((t, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-pressed={activeIndex === i}
              className={`p-4 text-left rounded-lg border font-semibold transition-colors ${
                activeIndex === i ? 'bg-[#293c83] text-white' : 'bg-white text-[#293c83] hover:bg-[#f1f5ff]'
              }`}
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {t.title}
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="md:w-2/3 bg-white rounded-2xl shadow-lg p-8" style={{ fontFamily: 'Georgia, serif' }}>
          {topics[activeIndex].content}
        </div>
      </div>

      {/* Footer Quote */}
      <div className="mt-20 text-center">
        <p style={{ fontFamily: 'Georgia, serif', color: '#4b5563' }} className="italic text-md">
          “End-to-end transformation—from strategy to systemsto skills”
        </p>
      </div>
    </section>
  );
}
