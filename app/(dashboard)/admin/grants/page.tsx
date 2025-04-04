"use client";

import { motion } from "framer-motion";
import { FileText, DollarSign, Briefcase, ShieldCheck, Landmark } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const grants = [
  {
    title: "Energy Infrastructure Grant",
    category: "Infrastructure",
    amount: "$150,000",
    description: "Supports construction of sustainable energy facilities in underserved regions.",
    icon: <Landmark className="w-5 h-5 text-green-600" />,
  },
  {
    title: "Community Solar Incentive",
    category: "Solar",
    amount: "$100,000",
    description: "Helps fund community-owned solar energy installations.",
    icon: <ShieldCheck className="w-5 h-5 text-yellow-500" />,
  },
  {
    title: "Efficiency Upgrade Fund",
    category: "Efficiency",
    amount: "$80,000",
    description: "Funding for public building retrofits and HVAC upgrades.",
    icon: <Briefcase className="w-5 h-5 text-indigo-500" />,
  },
  {
    title: "Sustainability Innovation Grant",
    category: "Innovation",
    amount: "$200,000",
    description: "Rewards projects proposing creative climate and energy solutions.",
    icon: <DollarSign className="w-5 h-5 text-emerald-600" />,
  },
  {
    title: "Public Education Campaign",
    category: "Outreach",
    amount: "$50,000",
    description: "Supports educational programs promoting green energy awareness.",
    icon: <FileText className="w-5 h-5 text-blue-500" />,
  },
];

export default function GrantsShowcase() {
  return (
    <div className="w-full px-4 py-12 max-w-screen-xl mx-auto space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-zinc-800">
          Available Grant Opportunities
        </h2>
        <p className="text-center text-zinc-500 max-w-2xl mx-auto mt-2">
          Discover impactful grants designed to support sustainable development and energy innovation across Ohio.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {grants.map((grant, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Card className="bg-white border border-zinc-200 shadow-sm hover:shadow-lg transition rounded-2xl">
              <CardHeader className="flex flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-zinc-100 p-2 rounded-full">
                    {grant.icon}
                  </div>
                  <div>
                    <CardTitle className="text-md font-semibold text-zinc-800">
                      {grant.title}
                    </CardTitle>
                    <p className="text-sm text-zinc-500 font-medium">{grant.category}</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-green-700">{grant.amount}</span>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {grant.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}