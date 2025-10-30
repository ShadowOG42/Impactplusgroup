// 'use client';
// import React from 'react';
// import { Globe2, Users, ShieldCheck, Workflow } from 'lucide-react';

// const reasons = [
//   {
//     icon: <Globe2 className="w-10 h-10 text-blue-700" />,
//     title: "Globally Benchmarked, Locally Grounded",
//     description:
//       "Our solutions are benchmarked against global best practices but deeply rooted in local realities—ensuring impact that lasts.",
//     color: "bg-blue-50",
//   },
//   {
//     icon: <Users className="w-10 h-10 text-blue-700" />,
//     title: "Cross-Sector Expertise",
//     description:
//       "We combine insights from multiple industries with deep contextual understanding to craft solutions that work where they matter most.",
//     color: "bg-blue-100",
//   },
//   {
//     icon: <ShieldCheck className="w-10 h-10 text-blue-700" />,
//     title: "Trusted Delivery",
//     description:
//       "Built on relationship-driven execution, we deliver with trust, accountability, and long-term partnership focus.",
//     color: "bg-slate-100",
//   },
//   {
//     icon: <Workflow className="w-10 h-10 text-blue-700" />,
//     title: "End-to-End Transformation",
//     description:
//       "From strategy to systems to skills, Impact Plus drives complete transformation tailored to your business vision.",
//     color: "bg-blue-50",
//   },
// ];

// const Tech = () => {
//   return (
//     <section className="py-24 px-6 md:px-16 lg:px-32 bg-white font-[Montserrat]">
//       {/* Header */}
//       <div className="text-center mb-20">
//         <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 font-[Georgia]">
//           WHY CLIENTS CHOOSE IMPACT PLUS
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-[Montserrat]">
//           We empower clients with globally recognised expertise and a grounded understanding of local challenges—turning strategy into sustainable success.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {reasons.map((r, i) => (
//           <div
//             key={i}
//             className={`p-6 rounded-2xl shadow-lg border-l-8 border-blue-600 ${r.color} flex flex-col items-center text-center transition-transform hover:scale-105`}
//           >
//             <div className="mb-4">{r.icon}</div>
//             <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-2 font-[Georgia]">
//               {r.title}
//             </h3>
//             <p className="text-gray-700 font-[Montserrat]">{r.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Footer Text */}
//       <div className="mt-20 text-center max-w-4xl mx-auto">
//         <p className="text-lg md:text-xl text-gray-700 mb-6 font-[Montserrat]">
//           Impact Plus partners with organisations to create measurable value through collaboration, innovation, and execution excellence.
//         </p>
//         <p className="text-md text-blue-900 italic font-[Georgia]">
//           “Driving transformation with trust, technology, and purpose.”
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Tech;


'use client';
import React, { useState,  } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/*
  This file contains THREE layout variants for your "Integrated Approach" page.
  1) TabsLayout (default export) — Left-side buttons with right-side content panel (your original style)
  2) HorizontalFlow — A horizontal, scroll-snap flow ideal for a lifecycle journey
  3) TimelineAnimated — A cinematic, animated timeline using GSAP for transitions

  Usage: import the component you want. The default export is TabsLayout so existing pages will still work.
*/

const topics = [
  {
    title: '1. Feasibility & Concept',
    content: (
      <>
        <h3 className="text-2xl font-bold mb-3" style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}>
          Capabilities Active
        </h3>
        <ul className="list-disc pl-6 mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
          <li>Project Management & Delivery Support</li>
          <li>Leadership, Workforce & Organisational Performance</li>
          <li>WHSEQ Systems</li>
        </ul>
        <h3 className="text-2xl mb-3" style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}>
          Activities
        </h3>
        <ul style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
          <li>Feasibility studies </li>
          <li>Stakeholder engagement</li>
          <li>Risk assessment</li>
          <li>Leadership coaching</li>
          <li>Early WHSEQ planning and system strategy development</li>
          <li>Governance alignment and cultural readiness assessments</li>
        </ul>
      </>
    ),
  },
  {
    title: '2. Design & Procurement',
    content: (
      <>
        <h3 className="text-2xl font-bold mb-3" style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}>
          Capabilities Active
        </h3>
        <ul className="list-disc pl-6 mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
          <li>Project Management & Delivery Support</li>
          <li>WHSEQ Systems</li>
          <li>Sustainable Products</li>
          <li>Leadership & Performance</li>
        </ul>
        <h3 className="text-2xl mb-3" style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}>
          Activities
        </h3>
        <ul style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
          <li>Design and constructability review facilitation.</li>
          <li>WHSEQ integration and system alignment.</li>
          <li>Procurement of compliant, sustainable products.</li>
          <li>Supplier evaluation, ethical sourcing, and leadership engagement.</li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Construction & Execution',
    content: (
      <>
        <h3 className="text-2xl font-bold mb-3" style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}>
          High-performance execution with safety, precision, and real-time intelligence.
        </h3>
        <p className="mb-4" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
          Capabilities Active:<br/>
          • Project Management & Delivery Support<br/>
          • WHSEQ Systems<br/>
          • Leadership, Workforce & Organisational Performance<br/>
          • Surveying & Spatial Services<br/>
          • Sustainable Products
        </p>
        <h3 className="text-2xl mb-3" style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}>
          Activities
        </h3>
        <ul className="list-disc pl-6 mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
          <li>On-site WHSEQ leadership and ISO compliance.</li>
          <li>Spatial data verification and real-time QA tracking.</li>
          <li>Continuous improvement and human performance integration.</li>
          <li>Deployment of high-performance, sustainable industrial materials.</li>
        </ul>
      </>
    ),
  },
  {
    title: '4. Commissioning & Handover',
    content: (
      <>
        <h3 className="text-2xl font-bold mb-3" style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}>
          Precision-driven transition from construction to operational readiness.
        </h3>
        <p className="mb-4" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
          Capabilities Active:<br/>
          • Project Management & Delivery Support<br/>
          • WHSEQ Systems<br/>
          • Leadership & Performance<br/>
          • Sustainable Products
        </p>
        <h3 className="text-2xl mb-3" style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}>
          Activities
        </h3>
        <ul className="list-disc pl-6 mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
          <li>Quality assurance, MDRs, walkdowns, and operational readiness.</li>
          <li>Workforce capability uplift and training.</li>
          <li>ESG-aligned handover, product traceability, and documentation integrity.</li>
        </ul>
      </>
    ),
  },
  {
    title: '5. Operations, Maintenance & Optimisation',
    content: (
      <>
        <h3 className="text-2xl font-bold mb-3" style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}>
          Sustaining long-term performance, resilience, and optimisation.
        </h3>
        <p className="mb-4" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
          Capabilities Active:<br/>
          • Project Management & Delivery Support<br/>
          • WHSEQ Systems<br/>
          • Leadership & Performance<br/>
          • Sustainable Products<br/>
          • Surveying & Spatial Services
        </p>
        <h3 className="text-2xl mb-3" style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}>
          Activities
        </h3>
       <ul className="list-disc pl-6 mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
          <li>Asset optimisation, shutdown planning, and continuous improvement cycles.</li>
          <li>Systems auditing and workforce resilience programs.</li>
          <li>Use of sustainable consumables and spatial data for maintenance accuracy.</li>
        </ul>
      </>
    ),
  },
  {
    title: '6. Decommissioning & Repurposing',
    content: (
      <>
        <h3 className="text-2xl font-bold mb-3" style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}>
          Responsible closure and future-forward sustainability.
        </h3>
        <p className="mb-4" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
          Capabilities Active:<br/>
          • Project Management & Delivery Support<br/>
          • WHSEQ Systems<br/>
          • Leadership & Performance<br/>
          • Sustainable Products
        </p>
        <h3 className="text-2xl mb-3" style={{ color: '#293c83', fontFamily: 'Georgia, serif' }}>
          Activities
        </h3>
        <ul className="list-disc pl-6 mb-6" style={{ color: '#000', fontFamily: 'Montserrat, sans-serif' }}>
          <li>Transition and closure planning.</li>
          <li>Safe decommissioning with full ESG compliance.</li>
          <li>Repurposing through sustainable materials and circular economy practices.</li>
        </ul>
      </>
    ),
  },
];

/* ---------------------- 1) Tabs Layout ---------------------- */
export function Technology() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 py-16 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-20">
        <h1 style={{ fontFamily: 'Georgia, serif', color: '#293c83' }} className="text-4xl md:text-5xl font-bold mb-4">
          Our Integrated Approach
        </h1>
        <h2 style={{ fontFamily: 'Georgia, serif', color: '#293c83' }} className="text-2xl md:text-3xl font-semibold mb-6">
          Five capabilities. One integrated approach.
        </h2>
        <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="max-w-3xl mx-auto text-lg md:text-xl">
          Delivering measurable impact across every stage of the project lifecycle.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
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

        <div className="md:w-2/3 bg-white rounded-2xl shadow-lg p-8" style={{ fontFamily: 'Georgia, serif' }}>
          {topics[activeIndex].content}
        </div>
      </div>

      <div className="mt-20 text-center">
        <p style={{ fontFamily: 'Georgia, serif', color: '#4b5563' }} className="italic text-md">
          “Strategy flows seamlessly into execution with measurable impact.”
        </p>
      </div>
    </section>
  );
}

// /* ---------------------- 2) Horizontal Flow (scroll-snap) ---------------------- */
// export function HorizontalFlow() {
//   return (
//     <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
//       <div className="text-center mb-12">
//         <h1 style={{ fontFamily: 'Georgia, serif', color: '#293c83' }} className="text-4xl font-bold mb-3">
//           Our Integrated Approach
//         </h1>
//         <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="max-w-3xl mx-auto text-lg">
//           Scroll through the project lifecycle — each phase is a stop on the journey.
//         </p>
//       </div>

//       <div className="overflow-x-auto snap-x snap-mandatory flex space-x-6 px-4 py-6" style={{ scrollBehavior: 'smooth' }}>
//         {topics.map((t, i) => (
//           <article
//             key={i}
//             className="snap-center min-w-[80%] md:min-w-[45%] lg:min-w-[32%] bg-white rounded-2xl shadow-lg p-8 flex-shrink-0"
//           >
//             <h3 style={{ fontFamily: 'Georgia, serif', color: '#293c83' }} className="text-xl font-bold mb-4">
//               {`${i + 1}. ${t.title.split('. ')[1] || t.title}`}
//             </h3>
//             <div style={{ fontFamily: 'Montserrat, sans-serif', color: '#111' }}>{t.content}</div>
//             <div className="mt-4 text-right">
//               <span className="text-sm text-gray-500">Phase {i + 1} of {topics.length}</span>
//             </div>
//           </article>
//         ))}
//       </div>

//       <div className="text-center mt-8">
//         <p style={{ fontFamily: 'Georgia, serif', color: '#4b5563' }} className="italic">Use touch or mouse-wheel to move through phases.</p>
//       </div>
//     </section>
//   );
// }

// /* ---------------------- 3) Timeline Animated (GSAP) ---------------------- */
// export function TimelineAnimated() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from('.timeline-item', {
//         autoAlpha: 0,
//         y: 50,
//         stagger: 0.15,
//         duration: 0.6,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: '.timeline-container',
//           start: 'top 80%',
//           end: 'bottom 20%'
//         }
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={containerRef} className="py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50">
//       <div className="text-center mb-12">
//         <h1 style={{ fontFamily: 'Georgia, serif', color: '#293c83' }} className="text-4xl font-bold mb-3">
//           Integrated Approach — Timeline
//         </h1>
//         <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#4b5563' }} className="max-w-3xl mx-auto text-lg">
//           A cinematic timeline that walks the user through each lifecycle phase.
//         </p>
//       </div>

//       <div className="timeline-container max-w-6xl mx-auto space-y-12">
//         {topics.map((t, i) => (
//           <div key={i} className="timeline-item bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-start gap-6">
//             <div className="w-full md:w-1/4 flex items-center justify-center">
//               <div className="w-20 h-20 rounded-full flex items-center justify-center border-2" style={{ borderColor: '#293c83' }}>
//                 <span style={{ fontFamily: 'Georgia, serif', color: '#293c83' }} className="text-xl font-bold">{i + 1}</span>
//               </div>
//             </div>
//             <div className="w-full md:w-3/4">
//               <h3 style={{ fontFamily: 'Georgia, serif', color: '#293c83' }} className="text-2xl font-bold mb-2">{t.title}</h3>
//               <div style={{ fontFamily: 'Montserrat, sans-serif', color: '#111' }}>{t.content}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-12 text-center">
//         <p style={{ fontFamily: 'Georgia, serif', color: '#4b5563' }} className="italic">Animated with GSAP + ScrollTrigger. Lightweight and subtle by default.</p>
//       </div>
//     </section>
//   );
// }

// export default TabsLayout;
