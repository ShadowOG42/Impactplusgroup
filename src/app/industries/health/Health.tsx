// "use client";
// import React, { useEffect, useRef } from "react";
// import { HeartPulse, ShieldCheck, Microscope, Users } from "lucide-react";
// import { gsap } from "gsap";

// const Health = () => {
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

//   const healthSolutions = [
//     {
//       icon: <HeartPulse className="w-10 h-10 text-red-500" />,
//       title: "Patient-Centered Care",
//       description:
//         "Helping healthcare providers design systems that prioritize patient outcomes, safety, and quality excellence at every stage of care.",
//     },
//     {
//       icon: <ShieldCheck className="w-10 h-10 text-blue-700" />,
//       title: "Risk & Safety Management",
//       description:
//         "Embedding safety and compliance frameworks to reduce risks, protect patients, and strengthen organisational resilience.",
//     },
//     {
//       icon: <Microscope className="w-10 h-10 text-green-600" />,
//       title: "Innovation in Healthcare",
//       description:
//         "Driving research, digital health adoption, and innovative solutions to enhance medical services and operational efficiency.",
//     },
//     {
//       icon: <Users className="w-10 h-10 text-purple-600" />,
//       title: "Workforce & Leadership Development",
//       description:
//         "Equipping healthcare leaders and staff with the skills, culture, and mindset to deliver sustainable improvements in patient care.",
//     },
//   ];

//   return (
//     <section
//       id="health-industry"
//       ref={sectionRef}
//       className="relative py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-r from-rose-50 via-red-50 to-rose-50"
//     >
//       {/* Header */}
//       <div className="text-center mb-20">
//         <h1
//           className="text-4xl md:text-5xl font-bold"
//           style={{ fontFamily: "'Voltaire', sans-serif", color: "#0A2540" }}
//         >
//           Health Sector Solutions
//         </h1>
//         <p
//           className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
//           style={{ fontFamily: "Georgia, serif" }}
//         >
//           Impact Plus supports the healthcare sector in strengthening patient
//           outcomes, reducing risks, and building resilient systems. We integrate
//           leadership, technology, and culture to drive innovation and lasting
//           transformation across hospitals, clinics, and public health services.
//         </p>
//       </div>

//       {/* Health Cards */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
//         {healthSolutions.map((h, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transform transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl"
//           >
//             <div className="mb-4">{h.icon}</div>
//             <h3
//               className="text-2xl font-bold mb-4"
//               style={{
//                 fontFamily: "Montserrat, sans-serif",
//                 color: "#0A2540",
//               }}
//             >
//               {h.title}
//             </h3>
//             <p className="text-gray-700">{h.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Additional Info Section */}
//       <div className="mt-20 text-center max-w-4xl mx-auto">
//         <p
//           className="text-lg md:text-xl text-gray-700 mb-6"
//           style={{ fontFamily: "Georgia, serif" }}
//         >
//           Our health solutions combine deep expertise in risk management,
//           innovation, and leadership development to build healthcare systems
//           that are safe, sustainable, and people-focused.
//         </p>
//         <p
//           className="text-md text-gray-500 italic"
//           style={{ fontFamily: "'Frangela', sans-serif" }}
//         >
//           “Transforming healthcare through safety, innovation, and patient-first
//           excellence.”
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Health;
