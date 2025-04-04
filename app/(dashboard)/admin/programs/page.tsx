"use client";

import { motion } from "framer-motion";
import { CheckCircle, Flame,  Zap, Trophy, Leaf } from "lucide-react";

const programs = [
  {
    title: "Electric Aggregation",
    description:
      "Helping communities save by purchasing electricity in bulk from competitive suppliers.",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    bg: "bg-gradient-to-br from-yellow-100 to-yellow-50",
  },
  {
    title: "Green Energy Program",
    description:
      "Support for transitioning to clean, renewable energy sources across communities.",
    icon: <Leaf className="w-6 h-6 text-green-500" />,
    bg: "bg-gradient-to-br from-green-100 to-green-50",
  },
  {
    title: "Community Solar",
    description:
      "Enabling residents to access affordable solar energy through shared installations.",
    icon: <Flame className="w-6 h-6 text-orange-400" />,
    bg: "bg-gradient-to-br from-orange-100 to-orange-50",
  },
  {
    title: "Energy Efficiency Audits",
    description:
      "Helping municipalities improve building performance and reduce energy use.",
    icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
    bg: "bg-gradient-to-br from-blue-100 to-blue-50",
  },
  {
    title: "Sustainability Grants",
    description:
      "Providing funding for innovative sustainability and infrastructure upgrades.",
    icon: <Trophy className="w-6 h-6 text-indigo-500" />,
    bg: "bg-gradient-to-br from-indigo-100 to-indigo-50",
  },
];

export default function ProgramsShowcase() {
  return (
    <div className="w-full px-4 py-12 max-w-screen-xl mx-auto space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-zinc-800">
          Our Impactful Programs
        </h2>
        <p className="text-center text-zinc-500 max-w-2xl mx-auto mt-2">
          Explore how we&apos;re empowering communities across Ohio through tailored energy and sustainability initiatives.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={`rounded-2xl p-6 shadow-md ${program.bg} hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}> 
              <div className="flex items-center gap-4">
                <div className="bg-white p-2 rounded-full shadow-inner">
                  {program.icon}
                </div>
                <h3 className="text-lg font-semibold text-zinc-800">
                  {program.title}
                </h3>
              </div>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                {program.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}