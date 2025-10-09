"use client";
import React from "react";
import { motion } from "framer-motion";

 
const stages = [
  {
    title: "PROJECT DEVELOPMENT",
    colorStart: "#08306b",
    colorEnd: "#2b6cb0",
    points: [
      "Governance",
      "Leadership coaching",
      "Risk assessment",
      "Feasibility studies",
      "Stakeholder engagement",
    ],
  },
  {
    title: "TENDER",
    colorStart: "#1e40af",
    colorEnd: "#3b82f6",
    points: ["Bid strategy", "Tender submission documents", "Compliance & quality checks"],
  },
  {
    title: "DESIGN",
    colorStart: "#155e75",
    colorEnd: "#38bdf8",
    points: [
      "Design review facilitation",
      "Constructability review facilitation",
      "WHSEQ integration",
      "Systems alignment",
    ],
  },
  {
    title: "PROCUREMENT",
    colorStart: "#0f766e",
    colorEnd: "#34d399",
    points: ["Supplier evaluation", "Contract management", "Ethical sourcing"],
  },
  {
    title: "CONSTRUCTION",
    colorStart: "#0ea5a4",
    colorEnd: "#60a5fa",
    points: ["On-site WHSEQ leadership", "ISO systems compliance", "Execution support"],
  },
  {
    title: "COMMISSIONING & HANDOVER",
    colorStart: "#047857",
    colorEnd: "#10b981",
    points: [
      "MDRs",
      "Punch listing & walkdowns",
      "Quality assurance",
      "Training & handover management",
    ],
  },
  {
    title: "MAINTENANCE INC. SHUTDOWNS",
    colorStart: "#065f46",
    colorEnd: "#047857",
    points: ["Asset optimisation", "Shutdown planning & execution", "Continuous improvement"],
  },
  {
    title: "REPURPOSING & DECOMMISSIONING",
    colorStart: "#0f172a",
    colorEnd: "#334155",
    points: ["Transition planning", "Safe decommissioning", "ESG compliance"],
  },
];

export default function Gov() {
  return (
    <section className="w-full bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* heading */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">MAKING IMPACT</h2>
            <p className="text-sm md:text-base text-slate-600">AT EVERY STAGE OF THE PROJECT LIFECYCLE</p>
          </div>
        </div>

        {/* horizontal pipeline */}
        <div className="overflow-x-auto">
          <div className="relative py-8">
            <div className="flex items-start" role="list">
              {stages.map((s, i) => (
                <div
                  key={s.title}
                  className="chev-wrap flex-shrink-0 relative"
                  style={{ zIndex: 200 + i }}
                >
                  <motion.div
                    className="chev chevron-shape flex items-center justify-center px-6"
                    style={{
                      background: `linear-gradient(90deg, ${s.colorStart} 0%, ${s.colorEnd} 100%)`,
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                  >
                    <div className="text-xs md:text-sm lg:text-base font-semibold text-white text-center px-2">
                      {s.title}
                    </div>
                  </motion.div>

                  {/* short dashed connector from arrow bottom to bullets */}
                  <div className="connector" />

                  {/* bullets under each chevron */}
                  <motion.ul
                    className="mt-6 w-[200px] list-disc pl-5 text-sm text-slate-700 space-y-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.04 }}
                  >
                    {s.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </motion.ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
