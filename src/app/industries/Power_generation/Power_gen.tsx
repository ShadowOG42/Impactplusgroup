// "use client";
// import React, { useEffect, useRef } from "react";
// import { Zap, ShieldCheck, Cpu, Factory } from "lucide-react";
// import { gsap } from "gsap";
// import { Montserrat } from "next/font/google";

// const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// const PowerGen = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (sectionRef.current) {
//       gsap.from(sectionRef.current.children, {
//         opacity: 0,
//         y: 50,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//       });
//     }
//   }, []);

//   const powerGenSolutions = [
//     {
//       icon: <Zap className="w-10 h-10 text-yellow-500" />,
//       title: "Reliable Energy Supply",
//       description:
//         "Delivering consistent and secure power generation solutions to meet growing global energy demands.",
//     },
//     {
//       icon: <ShieldCheck className="w-10 h-10 text-blue-700" />,
//       title: "Safety & Compliance",
//       description:
//         "Embedding world-class safety standards and regulatory compliance into every aspect of power generation.",
//     },
//     {
//       icon: <Cpu className="w-10 h-10 text-indigo-600" />,
//       title: "Digital Power Plants",
//       description:
//         "Leveraging AI, IoT, and advanced analytics for predictive maintenance, smart grid integration, and efficiency gains.",
//     },
//     {
//       icon: <Factory className="w-10 h-10 text-gray-600" />,
//       title: "Modernization & Sustainability",
//       description:
//         "Supporting the transition to cleaner energy sources while modernizing conventional plants for efficiency and resilience.",
//     },
//   ];

//   return (
//     <section
//       id="power-generation-industry"
//       ref={sectionRef}
//       className={`relative py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-r from-yellow-50 via-gray-50 to-yellow-50 ${montserrat.className}`}
//     >
//       {/* Header */}
//       <div className="text-center mb-20">
//         <h1 className="text-4xl md:text-5xl font-bold text-blue-900" style={{ fontFamily: "Georgia, serif" }}>
//           Power Generation Solutions
//         </h1>
//         <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
//           Impact Plus partners with utilities, governments, and private operators to deliver safe, efficient, and sustainable power generation solutions — ensuring energy security while advancing the global energy transition.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
//         {powerGenSolutions.map((p, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transform transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl"
//           >
//             <div className="mb-4">{p.icon}</div>
//             <h3 className="text-2xl font-bold mb-4 text-blue-900">{p.title}</h3>
//             <p className="text-gray-700">{p.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Additional Info */}
//       <div className="mt-20 text-center max-w-4xl mx-auto">
//         <p className="text-lg md:text-xl text-gray-700 mb-6">
//           From feasibility to decommissioning, we provide comprehensive support across the entire power generation lifecycle. Our approach integrates innovation, compliance, and sustainability to power progress responsibly.
//         </p>
//         <p className="text-md text-gray-500 italic">
//           “Driving reliable, safe, and sustainable energy for the future.”
//         </p>
//       </div>
//     </section>
//   );
// };

// export default PowerGen;
