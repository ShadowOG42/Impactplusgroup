// 'use client';
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { BookOpen, Users, Award, Cpu } from 'lucide-react';

// const Training = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (sectionRef.current) {
//       gsap.from(sectionRef.current.children, {
//         opacity: 0,
//         y: 50,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top 80%',
//         },
//       });
//     }
//   }, []);

//   const trainings = [
//     {
//       icon: <BookOpen className="w-10 h-10 text-lightBlue" />,
//       title: "Skill Development",
//       description:
//         "Upskilling employees in mining and energy operations to improve efficiency and productivity.",
//     },
//     {
//       icon: <Users className="w-10 h-10 text-darkBlue" />,
//       title: "Leadership Training",
//       description:
//         "Equipping managers and supervisors in the energy sector to lead teams safely and effectively.",
//     },
//     {
//       icon: <Award className="w-10 h-10 text-silverGrey" />,
//       title: "Safety & Compliance",
//       description:
//         "Specialized programs to ensure adherence to industry regulations and safety protocols in mining and energy operations.",
//     },
//     {
//       icon: <Cpu className="w-10 h-10 text-lightBlue" />,
//       title: "Digital Tools & Analytics",
//       description:
//         "Training on advanced software, automation, and analytics tools used in modern mining and energy projects.",
//     },
//   ];

//   return (
//     <section
//       id="training-solutions"
//       ref={sectionRef}
//       className="relative py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-r from-sky-50 via-sky-100 to-sky-50"
//     >
//       {/* Header */}
//       <div className="text-center mb-20">
//         <h1
//           className="text-4xl md:text-5xl font-bold"
//           style={{ fontFamily: "'Voltaire', sans-serif", color: "#0A2540" }}
//         >
//           Training Solutions
//         </h1>
//         <p
//           className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
//           style={{ fontFamily: "Georgia, serif" }}
//         >
//           Impact Plus delivers targeted training programs for the energy and mining sectors to enhance workforce capability, safety, and operational excellence.
//         </p>
//       </div>

//       {/* Training Cards */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
//         {trainings.map((t, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transform transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl"
//           >
//             <div className="mb-4">{t.icon}</div>
//             <h3
//               className="text-2xl font-bold mb-4"
//               style={{ fontFamily: "Montserrat, sans-serif", color: "#0A2540" }}
//             >
//               {t.title}
//             </h3>
//             <p className="text-gray-700" style={{ fontFamily: "Georgia, serif" }}>
//               {t.description}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Additional Info Section */}
//       <div className="mt-20 text-center max-w-4xl mx-auto">
//         <p
//           className="text-lg md:text-xl text-gray-700 mb-6"
//           style={{ fontFamily: "Georgia, serif" }}
//         >
//           Our practical, hands-on programs equip employees with the knowledge and skills to immediately improve operations, safety, and leadership in mining and energy environments.
//         </p>
//         <p
//           className="text-md text-gray-500 italic"
//           style={{ fontFamily: "'Frangela', sans-serif" }}
//         >
//           “Empowering energy and mining professionals through knowledge, skill, and excellence.”
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Training;
