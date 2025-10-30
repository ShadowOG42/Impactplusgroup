// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { Montserrat } from "next/font/google";

// const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// const stages = [
//   {
//     title: "PROJECT DEVELOPMENT",
//     colorStart: "#08306b",
//     colorEnd: "#2b6cb0",
//     points: [
//       "Governance",
//       "Leadership coaching",
//       "Risk assessment",
//       "Feasibility studies",
//       "Stakeholder engagement",
//     ],
//   },
//   {
//     title: "TENDER",
//     colorStart: "#1e40af",
//     colorEnd: "#3b82f6",
//     points: ["Bid strategy", "Tender submission documents", "Compliance & quality checks"],
//   },
//   {
//     title: "DESIGN",
//     colorStart: "#155e75",
//     colorEnd: "#38bdf8",
//     points: [
//       "Design review facilitation",
//       "Constructability review facilitation",
//       "WHSEQ integration",
//       "Systems alignment",
//     ],
//   },
//   {
//     title: "PROCUREMENT",
//     colorStart: "#0f766e",
//     colorEnd: "#34d399",
//     points: ["Supplier evaluation", "Contract management", "Ethical sourcing"],
//   },
//   {
//     title: "CONSTRUCTION",
//     colorStart: "#0ea5a4",
//     colorEnd: "#60a5fa",
//     points: ["On-site WHSEQ leadership", "ISO systems compliance", "Execution support"],
//   },
//   {
//     title: "COMMISSIONING & HANDOVER",
//     colorStart: "#047857",
//     colorEnd: "#10b981",
//     points: [
//       "MDRs",
//       "Punch listing & walkdowns",
//       "Quality assurance",
//       "Training & handover management",
//     ],
//   },
//   {
//     title: "MAINTENANCE INC. SHUTDOWNS",
//     colorStart: "#065f46",
//     colorEnd: "#047857",
//     points: ["Asset optimisation", "Shutdown planning & execution", "Continuous improvement"],
//   },
//   {
//     title: "REPURPOSING & DECOMMISSIONING",
//     colorStart: "#0f172a",
//     colorEnd: "#334155",
//     points: ["Transition planning", "Safe decommissioning", "ESG compliance"],
//   },
// ];

// export default function Gov() {
//   return (
//     <section className={`w-full bg-white py-10 px-6 ${montserrat.className}`}>
//       <div className="max-w-7xl mx-auto">
//         {/* heading */}
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900" style={{ fontFamily: "Georgia, serif" }}>
//               MAKING IMPACT
//             </h2>
//             <p className="text-sm md:text-base text-slate-600" style={{ fontFamily: "Montserrat, sans-serif" }}>
//               AT EVERY STAGE OF THE PROJECT LIFECYCLE
//             </p>
//           </div>
//         </div>

//         {/* horizontal pipeline */}
//         <div className="overflow-x-auto">
//           <div className="relative py-8">
//             <div className="flex items-start" role="list">
//               {stages.map((s, i) => (
//                 <div
//                   key={s.title}
//                   className="chev-wrap flex-shrink-0 relative"
//                   style={{ zIndex: 200 + i }}
//                 >
//                   <motion.div
//                     className="chev chevron-shape flex items-center justify-center px-6"
//                     style={{
//                       background: `linear-gradient(90deg, ${s.colorStart} 0%, ${s.colorEnd} 100%)`,
//                     }}
//                     initial={{ opacity: 0, y: 10 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.45, delay: i * 0.06 }}
//                   >
//                     <div
//                       className="text-xs md:text-sm lg:text-base font-semibold text-white text-center px-2"
//                       style={{ fontFamily: "Georgia, serif" }}
//                     >
//                       {s.title}
//                     </div>
//                   </motion.div>

//                   {/* short dashed connector from arrow bottom to bullets */}
//                   <div className="connector" />

//                   {/* bullets under each chevron */}
//                   <motion.ul
//                     className="mt-6 w-[200px] list-disc pl-5 text-sm text-slate-700 space-y-1"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.4, delay: 0.15 + i * 0.04 }}
//                     style={{ fontFamily: "Montserrat, sans-serif" }}
//                   >
//                     {s.points.map((p, j) => (
//                       <li key={j}>{p}</li>
//                     ))}
//                   </motion.ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// 'use client';
// import React from 'react';
// import { Montserrat } from 'next/font/google';

// const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600', '700'] });
// const BRAND = '#293c83';

// export default function Tech() {
//   return (
//     <main className={`${montserrat.className} bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 min-h-screen py-16 px-6 md:px-20 lg:px-32`}>
//       {/* Hero */}
//       <header className="text-center max-w-4xl mx-auto mb-12">
//         <h1 style={{ fontFamily: 'Georgia, serif', color: BRAND }} className="text-3xl md:text-4xl font-bold mb-4">
//           Industries We Partner With
//         </h1>
//         <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-gray-700 text-base md:text-lg">
//           Empowering the sectors that shape a safer, smarter, and more sustainable world.
//         </p>
//       </header>

//       {/* Intro content */}
//       <section className="max-w-4xl mx-auto text-center mb-12">
//         <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-gray-800 text-base md:text-lg mb-4 leading-relaxed">
//           At Impact Plus, we partner with organisations and government bodies across the industries that power modern economies and enable sustainable growth. Our collaborations span renewable energy, oil & gas, mining, power generation, infrastructure and building construction, and the public sector — industries where safety, efficiency, and sustainability are essential to long-term performance.
//         </p>
//         <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-gray-800 text-base md:text-lg leading-relaxed">
//           We combine strategic consulting, leadership and workforce capability, and sustainable product innovation to help these sectors achieve measurable outcomes — improving safety, quality, governance, and environmental performance. Our integrated approach connects people, systems, and products, enabling every client to operate with greater clarity, confidence, and resilience in an increasingly complex world.
//         </p>
//       </section>

//       {/* SVG infographic */}
//       <section className="max-w-6xl mx-auto mb-12">
//         <div className="bg-white rounded-2xl p-8 shadow-lg">
//           <div className="text-center mb-6">
//             <h2 style={{ fontFamily: 'Georgia, serif', color: BRAND }} className="text-xl md:text-2xl font-bold">
//               Making impact at every stage of the project lifecycle
//             </h2>
//             <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-gray-600 mt-2">
//               Five integrated capabilities delivering consistent performance from start to finish.
//             </p>
//           </div>

//           {/* Responsive SVG timeline */}
//           <div className="overflow-x-auto">
//             <svg viewBox="0 0 1200 260" width="100%" height="260" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="timelineTitle">
//               <title id="timelineTitle">Project lifecycle timeline</title>

//               {/* baseline */}
//               <line x1="80" y1="150" x2="1120" y2="150" stroke="#e6eef9" strokeWidth="6" strokeLinecap="round" />

//               {/* stage connectors (short) */}
//               {/* circles and icons */}
//               {/* stage positions */}
//               {/*
//                 positions array:
//                 1: 140  ; 2: 300 ; 3: 460 ; 4: 620 ; 5: 780 ; 6: 940 ; 7: 1100 (we only draw 5 main points as original)
//                 We'll draw five major nodes evenly
//               */}
//               {/* Node 1 - Feasibility & Design */}
//               <g transform="translate(140,110)">
//                 <circle cx="0" cy="40" r="28" fill={BRAND} />
//                 {/* magnifier icon - simplified */}
//                 <g transform="translate(-8,28)" fill="white">
//                   <circle cx="6" cy="-2" r="6" />
//                   <rect x="9" y="5" width="10" height="3" transform="rotate(45 9 5)" />
//                 </g>
//                 <text x="-70" y="90" fontFamily="Georgia, serif" fontWeight="700" fontSize="14" fill={BRAND}>FEASIBILITY</text>
//                 <text x="-70" y="110" fontFamily="Montserrat, sans-serif" fontSize="13" fill="#374151">Project Management & Delivery Support</text>
//               </g>

//               {/* Node 2 - Execution */}
//               <g transform="translate(360,110)">
//                 <circle cx="0" cy="40" r="28" fill={BRAND} />
//                 {/* gear-like icon */}
//                 <g transform="translate(-6,28)" fill="white" stroke="white" strokeWidth="1">
//                   <path d="M6 -3 L8 -6 L11 -6 L12 -3 L15 -2 L15 1 L12 3 L11 6 L8 6 L6 3 L3 1 L3 -2 Z" />
//                 </g>
//                 <text x="-40" y="90" fontFamily="Georgia, serif" fontWeight="700" fontSize="14" fill={BRAND}>EXECUTION</text>
//                 <text x="-40" y="110" fontFamily="Montserrat, sans-serif" fontSize="13" fill="#374151">WHSEQ & Continuous Improvement Systems</text>
//               </g>

//               {/* Node 3 - Commissioning */}
//               <g transform="translate(580,110)">
//                 <circle cx="0" cy="40" r="28" fill={BRAND} />
//                 {/* checklist / handover icon */}
//                 <g transform="translate(-10,25)" fill="white">
//                   <rect x="0" y="0" width="18" height="22" rx="2" />
//                   <path d="M3 7 L7 11 L14 4" stroke={BRAND} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
//                 </g>
//                 <text x="-75" y="90" fontFamily="Georgia, serif" fontWeight="700" fontSize="14" fill={BRAND}>COMMISSIONING</text>
//                 <text x="-75" y="110" fontFamily="Montserrat, sans-serif" fontSize="13" fill="#374151">Leadership, Workforce & Organisational Performance Optimisation</text>
//               </g>

//               {/* Node 4 - Optimisation */}
//               <g transform="translate(800,110)">
//                 <circle cx="0" cy="40" r="28" fill={BRAND} />
//                 {/* tower/survey icon */}
//                 <g transform="translate(-6,26)" fill="white">
//                   <rect x="7" y="2" width="4" height="18" rx="1" />
//                   <path d="M2 18 L22 18 L12 4 Z" />
//                 </g>
//                 <text x="-55" y="90" fontFamily="Georgia, serif" fontWeight="700" fontSize="14" fill={BRAND}>OPTIMISATION</text>
//                 <text x="-55" y="110" fontFamily="Montserrat, sans-serif" fontSize="13" fill="#374151">Surveying & Spatial Services</text>
//               </g>

//               {/* Node 5 - Re-purposing */}
//               <g transform="translate(1020,110)">
//                 <circle cx="0" cy="40" r="28" fill={BRAND} />
//                 {/* leaf icon */}
//                 <g transform="translate(-6,32)" fill="white">
//                   <path d="M12 0 C9 6 3 9 0 12 C9 12 12 6 12 0 Z" />
//                 </g>
//                 <text x="-55" y="90" fontFamily="Georgia, serif" fontWeight="700" fontSize="14" fill={BRAND}>RE-PURPOSING</text>
//                 <text x="-55" y="110" fontFamily="Montserrat, sans-serif" fontSize="13" fill="#374151">Sustainable Products</text>
//               </g>

//               {/* small markers under baseline (scale) */}
//               <line x1="132" y1="180" x2="1020" y2="180" stroke="#e6eef9" strokeWidth="2" />
//               <text x="360" y="205" fontFamily="Montserrat, sans-serif" fontSize="13" fill="#6b7280" textAnchor="middle">From integrated capabilities delivering consistent performance from start to finish.</text>
//             </svg>
//           </div>
//         </div>
//       </section>

//       {/* After image paragraph + CTA */}
//       <section className="max-w-4xl mx-auto text-center mt-10">
//         <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-gray-800 text-base md:text-lg mb-6 leading-relaxed">
//           By embedding governance, systems thinking, and innovation at every stage, we deliver continuity, compliance, and confidence from concept to completion.
//         </p>

//         <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-gray-800 text-base md:text-lg mb-6 leading-relaxed">
//           <strong style={{ color: BRAND, fontFamily: 'Georgia, serif' }}>→</strong> Explore Our Integrated Consulting & Product Solutions.
//         </p>

//         <div className="flex justify-center">
//           <button
//             style={{ fontFamily: 'Montserrat, sans-serif', background: BRAND }}
//             className="text-white px-6 py-3 rounded-full font-semibold shadow hover:opacity-95 transition"
//           >
//             Explore Solutions
//           </button>
//         </div>
//       </section>
//     </main>
//   );
// }

// 'use client';

// import React from 'react';
// import { Montserrat } from 'next/font/google';
// import { Search, Settings, ClipboardCheck, MapPin, Leaf, ArrowRight } from 'lucide-react';

// const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600', '700'] });
// const BRAND = '#293c83';

// const steps = [
//   {
//     key: 'feasibility',
//     title: 'FEASIBILITY & DESIGN',
//     subtitle: 'Project Management & Delivery Support',
//     Icon: Search,
//   },
//   {
//     key: 'execution',
//     title: 'EXECUTION',
//     subtitle: 'WHSEQ & Continuous Improvement Systems',
//     Icon: Settings,
//   },
//   {
//     key: 'commissioning',
//     title: 'COMMISSIONING',
//     subtitle: 'Leadership, Workforce & Organisational Performance Optimisation',
//     Icon: ClipboardCheck,
//   },
//   {
//     key: 'optimisation',
//     title: 'OPTIMISATION',
//     subtitle: 'Surveying & Spatial Services',
//     Icon: MapPin,
//   },
//   {
//     key: 'repurposing',
//     title: 'RE-PURPOSING',
//     subtitle: 'Sustainable Products',
//     Icon: Leaf,
//   },
// ];

// export default function Tech() {
//   return (
//     <main className={`${montserrat.className} bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 min-h-screen py-16 px-6 md:px-12 lg:px-24`}>
//       {/* Header */}
//       <header className="max-w-5xl mx-auto text-center mb-12 px-4">
//         <h1 style={{ fontFamily: 'Georgia, serif', color: BRAND }} className="text-3xl md:text-4xl font-bold mb-3">
//           Industries We Partner With
//         </h1>
//         <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-gray-700 text-base md:text-lg">
//           Empowering the sectors that shape a safer, smarter, and more sustainable world.
//         </p>
//       </header>

//       {/* Intro */}
//       <section className="max-w-4xl mx-auto text-center mb-12 px-4">
//         <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-gray-800 text-base md:text-lg mb-4 leading-relaxed">
//           At Impact Plus, we partner with organisations and government bodies across the industries that power modern economies and enable sustainable growth. Our collaborations span renewable energy, oil & gas, mining, power generation, infrastructure and building construction, and the public sector — industries where safety, efficiency, and sustainability are essential to long-term performance.
//         </p>
//         <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-gray-800 text-base md:text-lg leading-relaxed">
//           We combine strategic consulting, leadership and workforce capability, and sustainable product innovation to help these sectors achieve measurable outcomes — improving safety, quality, governance, and environmental performance. Our integrated approach connects people, systems, and products, enabling every client to operate with greater clarity, confidence, and resilience in an increasingly complex world.
//         </p>
//       </section>

//       {/* Timeline / Infographic */}
//       <section className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
//         <div className="text-center mb-6">
//           <h2 style={{ fontFamily: 'Georgia, serif', color: BRAND }} className="text-xl md:text-2xl font-bold">
//             Making impact at every stage of the project lifecycle
//           </h2>
//           <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-gray-600 mt-2">
//             Five integrated capabilities delivering consistent performance from start to finish.
//           </p>
//         </div>

//         {/* Responsive timeline */}
//         <div className="relative py-8 px-4">
//           {/* baseline */}
//           <div className="absolute left-6 right-6 top-1/2 transform -translate-y-1/2 h-1 bg-[#e6eef9] rounded-full z-0" />

//           {/* steps container */}
//           <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0">
//             {steps.map((s, idx) => {
//               const Icon = s.Icon;
//               return (
//                 <div key={s.key} className="flex-1 min-w-[180px]">
//                   <div className="flex flex-col items-center md:items-start md:text-left">
//                     {/* connector and circle */}
//                     <div className="relative flex items-center md:block w-full md:w-auto">
//                       {/* small connector line for mobile between items */}
//                       <div className="md:hidden absolute left-6 right-6 top-16 h-[2px] bg-[#e6eef9]" />

//                       <div className="w-16 h-16 rounded-full bg-[#293c83] flex items-center justify-center text-white shadow-md z-10">
//                         <Icon size={28} strokeWidth={1.8} />
//                       </div>

//                       {/* arrow after the last node (on md+) */}
//                       {idx === steps.length - 1 ? (
//                         <div className="hidden md:block absolute -right-14 top-6">
//                           <div className="flex items-center space-x-2">
//                             <div className="w-14 h-[2px] bg-[#e6eef9]" />
//                             <ArrowRight size={20} strokeWidth={2} color={BRAND} />
//                           </div>
//                         </div>
//                       ) : null}
//                     </div>

//                     {/* Labels */}
//                     <div className="mt-4 text-center md:text-left px-2 md:px-0">
//                       <div style={{ fontFamily: 'Georgia, serif', color: BRAND }} className="text-sm md:text-base font-semibold">
//                         {s.title}
//                       </div>
//                       <div style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-xs md:text-sm text-gray-600 mt-1 leading-snug">
//                         {s.subtitle}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* horizontal connectors for desktop (between circles) */}
//           <div className="hidden md:flex items-center justify-between absolute left-0 right-0 top-1/2 transform -translate-y-1/2 px-4">
//             {steps.map((_, i) => {
//               if (i === steps.length - 1) return <div key={i} className="flex-1" />; // no connector past last
//               return <div key={i} className="flex-1 h-[6px] bg-transparent mx-4 relative">
//                 <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-[#e6eef9] rounded-full" />
//               </div>;
//             })}
//           </div>
//         </div>

//         {/* caption */}
//         <div className="mt-6 text-center">
//           <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-gray-600 text-sm md:text-base">
//             From integrated capabilities delivering consistent performance from start to finish.
//           </p>
//         </div>
//       </section>

//       {/* CTA + final paragraph */}
//       <section className="max-w-4xl mx-auto mt-10 text-center px-4">
//         <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-gray-800 text-base md:text-lg mb-6 leading-relaxed">
//           By embedding governance, systems thinking, and innovation at every stage, we deliver continuity, compliance, and confidence from concept to completion.
//         </p>

//         <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-gray-800 text-base md:text-lg mb-6 leading-relaxed">
//           <strong style={{ color: BRAND, fontFamily: 'Georgia, serif' }}>→</strong> Explore Our Integrated Consulting & Product Solutions.
//         </p>

//         <div className="flex justify-center">
//           <button
//             style={{ fontFamily: 'Montserrat, sans-serif', background: BRAND }}
//             className="text-white px-6 py-3 rounded-full font-semibold shadow hover:opacity-95 transition"
//             aria-label="Explore solutions"
//           >
//             Explore Solutions
//           </button>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";
import Image from "next/image";
import React from "react";

const Tech = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-32">
      {/* Title */}
      <div className="text-center mb-16">
        <h1
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{ fontFamily: "Georgia, serif", color: "#293c83" }}
        >
          Industries We Partner With
        </h1>
        <p
          className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Empowering the sectors that shape a safer, smarter, and more sustainable world.
        </p>
      </div>

      {/* Intro Paragraph */}
      <p
        className="text-lg leading-relaxed text-gray-800 max-w-5xl mx-auto mb-14"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        At Impact Plus, we partner with organisations and government bodies across the industries that 
        power modern economies and enable sustainable growth. Our collaborations span renewable energy, 
        oil & gas, mining, power generation, infrastructure and building construction, and the public sector — 
        industries where safety, efficiency, and sustainability are essential to long-term performance. 
        We combine strategic consulting, leadership and workforce capability, and sustainable product 
        innovation to help these sectors achieve measurable outcomes — improving safety, quality, 
        governance, and environmental performance. Our integrated approach connects people, systems, 
        and products, enabling every client to operate with greater clarity, confidence, and resilience 
        in an increasingly complex world.
        <br /><br />
        Our partnerships extend across the full project lifecycle — from feasibility and concept design 
        through execution, commissioning, and optimisation, to decommissioning or repurposing of assets 
        and infrastructure.
      </p>

      {/* Exact Image (Responsive) */}
      <div className="w-full flex justify-center mb-14">
        <div className="relative w-full max-w-6xl">
          <Image
            src="/Certificates/Cycle.png"
            alt="Impact Plus Project Lifecycle"
            width={1600}
            height={900}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Closing Statement */}
      <p
        className="text-lg text-gray-800 text-center max-w-4xl mx-auto"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        By embedding governance, systems thinking, and innovation at every stage, we deliver continuity, 
        compliance, and confidence from concept to completion.
      </p>

       
    </section>
  ); 
};

export default Tech;
