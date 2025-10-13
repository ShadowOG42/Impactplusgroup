'use client';
import React, { useState } from 'react';

export default function Consulting() {
  const [activeIndex, setActiveIndex] = useState(0);

  const topics = [
    {
      title: 'Governance, Leadership & People Performance Optimisation',
      content: (
        <>
          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            The Challenge
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="mb-6">
            In an increasingly complex and highly regulated world, organisations face relentless pressure to innovate, maintain safety, and deliver sustainable performance. Achieving this requires more than technical capability — it demands visionary leadership, strong governance, and a high-performing workforce united by the right culture, systems, and strategy to thrive.
          </p>

          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            The Impact Plus Solution
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="mb-4">
            At Impact Plus, we help organisations turn strategy into real-world execution by aligning governance, leadership, and culture to drive measurable performance outcomes.
            Our approach is evidence-based, human-centred, and system-smart — integrating culture diagnostics, change management frameworks, leadership development, and performance analytics to create enduring capability.
          </p>

          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="font-semibold mb-2">
            We partner with organisations to:
          </p>
          <ul className="list-disc pl-6 mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            <li>Strengthen leadership and governance capability at all levels.</li>
            <li>Enhance engagement, collaboration, and team effectiveness.</li>
            <li>Embed systems thinking and continuous improvement into daily operations.</li>
            <li>Build resilient, future-ready cultures that support innovation and accountability.</li>
            <li>Align ESG principles and ISO systems with leadership and operational practices.</li>
          </ul>

          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="mb-6">
            Through diagnostic workshops such as learning teams, tailored development programs, mentoring, and workforce analytics, we address complex organisational challenges with precision and impact. By driving behaviour change, fostering alignment, and building leadership capability, we enable sustainable transformation and performance excellence.
          </p>

          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            Our Differentiator — Human-Centred, System-Smart
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            We combine deep expertise in leadership development, systems thinking, Human and Organisational Performance (HOP), and change enablement to help people and systems thrive together. Whether shaping culture, simplifying governance, or aligning ESG with leadership, we focus on what drives clarity, capability, and real-world execution — empowering leaders to embed sustainable change that endures beyond our engagement.
          </p>
        </>
      ),
    },

    {
      title: 'Stakeholder Management',
      content: (
        <>
          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            The Challenge
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="mb-6">
            In today’s complex and interconnected world, organisations operate under growing scrutiny and heightened expectations for transparency, collaboration, and social responsibility. Ineffective stakeholder engagement can lead to delays, reputational harm, and project setbacks, while internal misalignment or resistance to change can erode trust and productivity. Building meaningful connections and maintaining alignment across diverse stakeholder groups has become critical to achieving sustainable success.
          </p>

          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            The Impact Plus Solution
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="mb-4">
            At Impact Plus, we enable organisations to build trust, reduce risk, and accelerate delivery through strategic, inclusive, and evidence-based stakeholder engagement. Our approach integrates stakeholder mapping, communication strategy, hybrid engagement methods, and feedback analytics to align both internal and external stakeholders around a shared vision.
          </p>

          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="font-semibold mb-2">
            We work with our clients to:
          </p>
          <ul className="list-disc pl-6 mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            <li>Identify, analyse, and prioritise key stakeholders across all levels.</li>
            <li>Design and implement engagement frameworks that promote transparency and collaboration.</li>
            <li>Strengthen communication pathways to reduce conflict and foster shared ownership.</li>
            <li>Integrate stakeholder engagement into governance, ESG, and change management processes.</li>
            <li>Create feedback loops that inform decision-making and drive continuous improvement.</li>
          </ul>

          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            Our Differentiator — Co-Design, Not Command
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            We work with stakeholders, not around them. Through collaborative frameworks, transparent communication, and cultural insight, we co-create engagement strategies that build ownership and trust. Our approach transforms consultation into collaboration — ensuring every stakeholder feels seen, heard, and connected to the organisation’s purpose.
          </p>
        </>
      ),
    },

    {
      title: 'Systems, Processes & ISO Standards',
      content: (
        <>
          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            The Challenge
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="mb-6">
            In a fast-moving and regulated business environment, disconnected systems, outdated workflows, and complex compliance requirements can undermine efficiency, quality, and confidence. To remain competitive, organisations must integrate streamlined processes, ISO-aligned systems, and continuous improvement frameworks that enhance visibility, consistency, and resilience across all operations.
          </p>

          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            The Impact Plus Solution
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="mb-4">
            At Impact Plus, we design and implement integrated management systems that align governance, quality, safety, environment, and information security with operational excellence. Our experts specialise in developing, auditing, and optimising systems certified to ISO 9001 (Quality), ISO 14001 (Environment), ISO 45001 (Health & Safety), and ISO 27001 (Information Security).
          </p>

          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="font-semibold mb-2">
            We partner with clients to:
          </p>
          <ul className="list-disc pl-6 mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            <li>Design and embed end-to-end management systems that streamline operations and reduce risk.</li>
            <li>Simplify compliance and documentation through smart process design and digital integration.</li>
            <li>Support certification readiness and continual improvement across the ISO suite.</li>
            <li>Integrate quality, safety, environment, and governance into unified, efficient frameworks.</li>
            <li>Enhance traceability, accountability, and data-driven decision-making.</li>
          </ul>

          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            Our Differentiator — Integrated by Design
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            Our systems are built for connection, not compliance. We design integrated frameworks that unite ISO standards, risk, quality, safety, and environment under one cohesive structure. Whether digitising workflows, embedding ESG principles, or simplifying documentation, we ensure every process drives efficiency, traceability, and scalable performance.
          </p>
        </>
      ),
    },

    {
      title: 'Surveying & Spatial Services',
      content: (
        <>
          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            The Challenge
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="mb-6">
            In today’s data-driven world, accurate spatial information underpins effective decision-making, risk management, and project delivery. Yet, many organisations still struggle with inconsistent data, fragmented workflows, and outdated surveying methods, leading to costly errors, delays, and compliance challenges. Achieving precision, efficiency, and integration across the asset and project lifecycle requires a trusted partner capable of combining technical accuracy with strategic insight.
          </p>

          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            The Impact Plus Solution
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="mb-4">
            At Impact Plus, we deliver high-precision surveying and spatial solutions that enhance planning, execution, and assurance across every project phase — from feasibility and design to construction, commissioning, and decommissioning. Our team combines advanced geospatial technologies, digital mapping, and data analytics to provide real-time insights that drive smarter decisions and stronger governance.
          </p>

          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="font-semibold mb-2">
            We partner with clients to:
          </p>
          <ul className="list-disc pl-6 mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            <li>Provide mining, engineering and construction surveying with millimetre precision.</li>
            <li>Deliver digital terrain models, spatial mapping, and asset visualisation for project planning and monitoring.</li>
            <li>Integrate survey data with GIS, BIM, and project control systems to ensure seamless information flow.</li>
            <li>Support compliance, verification, and quality assurance through robust spatial data management.</li>
            <li>Enable data-driven decision-making that improves safety, accuracy, and performance outcomes.</li>
          </ul>

          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="mb-6">
            Through our integrated approach, we transform spatial data into actionable intelligence — supporting clients to deliver projects on time, within scope, and with confidence.
          </p>

          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            Our Differentiator — Spatial Precision, Strategic Impact
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            We merge precision surveying, digital innovation, and systems integration to deliver spatial intelligence that drives better decisions. From risk reduction and compliance verification to digital twin enablement, our spatial solutions provide the data accuracy and insight needed for safe, efficient, and confident project execution.
          </p>
        </>
      ),
    },

    {
      title: 'ESG & Sustainability Alignment',
      content: (
        <>
          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            The Challenge
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="mb-6">
            The global shift toward sustainability is redefining how organisations measure success. Stakeholders now expect demonstrable progress across environmental, social, and governance (ESG) dimensions — not just compliance. However, many organisations face challenges in embedding ESG principles into core operations, translating commitments into measurable outcomes, and aligning sustainability goals with business strategy and performance systems.
          </p>

          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            The Impact Plus Solution
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="mb-4">
            At Impact Plus, we help organisations translate ESG ambition into real-world execution through practical, data-driven, and system-aligned strategies. Our approach integrates ESG frameworks, sustainability reporting, risk management, and leadership engagement into the everyday fabric of organisational performance.
          </p>

          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="font-semibold mb-2">
            We partner with clients to:
          </p>
          <ul className="list-disc pl-6 mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            <li>Assess ESG maturity and establish clear baselines for performance improvement.</li>
            <li>Develop and implement ESG strategies aligned with organisational values, ISO standards, and global sustainability frameworks (e.g., UN SDGs, GRI, TCFD).</li>
            <li>Integrate ESG metrics into governance, project management, and decision-making processes.</li>
            <li>Strengthen stakeholder trust through transparent reporting, impact measurement, and communication.</li>
            <li>Embed environmental stewardship, social responsibility, and ethical leadership into culture and operations.</li>
          </ul>

          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="mb-6">
            By linking ESG objectives with operational systems and leadership accountability, we help organisations achieve compliance, credibility, and competitive advantage — while creating long-term shared value for people, planet, and performance.
          </p>

          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            Our Differentiator — Sustainability at the Core
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            We embed ESG and sustainability principles into governance, leadership, and operational systems — transforming compliance into competitive advantage. By linking environmental stewardship, social responsibility, and ethical governance, we help organisations deliver impact, integrity, and long-term value.
          </p>
        </>
      ),
    },

    {
      title: 'Connecting people, systems, and products for real-world performance',
      content: (
        <>
          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            The Challenge
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="mb-6">
            In complex, fast-paced project environments, effective engagement and access to reliable products are critical for safety, compliance, and performance. Organisations often face challenges such as fragmented communication systems, inconsistent procurement processes, and unreliable product supply chains, which can compromise operational continuity, safety outcomes, and stakeholder confidence. To deliver consistent excellence, businesses need integrated tools, systems, and products that connect people, enhance visibility, and ensure readiness at every stage of execution.
          </p>

          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            The Impact Plus Solution
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="mb-4">
            At Impact Plus, we combine digital engagement solutions with fit-for-purpose product supply to support safer, smarter, and more efficient operations. Our dual capability ensures that clients can manage information and resources seamlessly — from communication platforms and analytics tools to physical products essential for frontline performance.
          </p>

          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="font-semibold mb-2">
            We partner with clients to:
          </p>
          <ul className="list-disc pl-6 mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            <li>Design and implement digital engagement tools, dashboards, and communication platforms that improve collaboration and decision-making.</li>
            <li>Supply high-quality, safety-critical and operational products including PPE, paints, coatings, welding consumables, and related industrial materials.</li>
            <li>Streamline procurement and logistics processes to ensure cost-effective, compliant, and timely delivery.</li>
            <li>Integrate product usage data and digital systems for inventory tracking, risk control, and continuous improvement.</li>
            <li>Support field teams with training and onboarding tools that enhance safe and consistent product use.</li>
          </ul>

          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            Our Differentiator — Integrated by Design
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            We bridge the digital and the physical — delivering both engagement platforms and essential products such as PPE, coatings, and welding consumables. Our unique integration of technology, tools, and tangible solutions keeps people safe, systems aligned, and projects moving with consistency and confidence.
          </p>
        </>
      ),
    },

    {
      title: 'AI-Enabled Transformation',
      content: (
        <>
          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            The Challenge
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="mb-6">
            Organisations today operate in an environment defined by complexity, data overload, and rapid technological change. Despite the promise of artificial intelligence, many struggle to translate AI potential into practical outcomes — facing challenges such as data silos, low digital maturity, and resistance to change. Without a clear strategy, AI initiatives can remain isolated, failing to deliver measurable value or cultural adoption.
          </p>

          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            The Impact Plus Solution
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="mb-4">
            At Impact Plus, we help organisations harness the power of AI, automation, and advanced analytics to transform decision-making, optimise systems, and elevate performance.
            Our approach integrates data intelligence, systems thinking, and human-centred design to ensure that technology aligns with strategy, governance, and culture — not the other way around.
          </p>

          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="font-semibold mb-2">
            We partner with clients to:
          </p>
          <ul className="list-disc pl-6 mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            <li>Develop and implement AI-driven solutions for risk management, quality assurance, and operational optimisation.</li>
            <li>Embed predictive analytics and machine learning into safety, maintenance, and performance monitoring systems.</li>
            <li>Design digital twins and decision-support models that improve foresight and reduce uncertainty.</li>
            <li>Automate repetitive or high-risk processes to enhance efficiency, accuracy, and worker safety.</li>
            <li>Build AI capability and literacy across leadership and frontline teams to support cultural adoption and ethical use.</li>
          </ul>

          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            Our Differentiator — AI Done Right
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            We help organisations move from exploration to execution — integrating AI strategy, governance, and human-machine collaboration to drive real, measurable outcomes. Our AI approach is ethical, scalable, and system-smart, ensuring technology enhances people and performance — not the other way around.
          </p>
        </>
      ),
    },

    {
      title: 'Continuous Improvement & Innovation',
      content: (
        <>
          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            The Challenge
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="mb-6">
            In a world of constant change, organisations that fail to learn, adapt, and innovate quickly fall behind. Many businesses struggle with siloed improvement efforts, reactive problem-solving, and limited feedback loops, resulting in inefficiency, risk exposure, and missed opportunities. Sustained success requires more than incremental improvement — it demands a structured, data-driven approach to innovation that embeds learning and agility into the organisation’s DNA.
          </p>

          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            The Impact Plus Solution
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="mb-4">
            At Impact Plus, we help organisations build continuous improvement systems that drive measurable performance and unlock innovation across all levels. Our approach integrates Lean thinking, Six Sigma methodologies, systems optimisation, and human performance principles to enhance operational excellence and strategic resilience.
          </p>

          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }} className="font-semibold mb-2">
            We partner with clients to:
          </p>
          <ul className="list-disc pl-6 mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            <li>Design and implement fit-for-purpose improvement frameworks that align with business goals and governance systems.</li>
            <li>Identify inefficiencies and streamline processes through data analytics, workflow mapping, and stakeholder collaboration.</li>
            <li>Develop innovation pipelines that connect employee ideas with strategic priorities and measurable outcomes.</li>
            <li>Embed Plan–Do–Check–Act (PDCA) and Kaizen principles to foster learning, accountability, and adaptability.</li>
            <li>Support leadership and teams with the skills, tools, and mindset to sustain continuous improvement long after project completion.</li>
          </ul>

          <h3 style={{ color: '#293c83', fontFamily: 'Georgia, serif' }} className="text-2xl font-bold mb-3">
            Our Differentiator — Continuous by Culture, Innovative by Design
          </h3>
          <p style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
            We embed Lean, Six Sigma, and systems improvement principles into culture, not just process. By combining behavioural insight, data analytics, and innovation frameworks, we help organisations evolve continuously — building a culture of learning, agility, and measurable progress.
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
          Translating Strategy into Real World Execution
        </h1>
        <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="max-w-3xl mx-auto text-lg md:text-xl">
          Impact Plus develops custom solutions integrating governance, systems thinking, ESG, leadership, innovation, and AI. Our solutions include:
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
          “Strategy flows seamlessly into execution with measurable impact.”
        </p>
      </div>
    </section>
  );
}
