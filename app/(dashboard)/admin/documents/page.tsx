"use client";

import { motion } from "framer-motion";
import {
  FileText,
  FolderOpen,
  FilePlus2,
  Globe,
  Building2,
  Newspaper,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const documents = [
  {
    title: "Recent Uploads",
    category: "Latest",
    description: "Stay updated with the most recently added documents.",
    icon: <FilePlus2 className="w-5 h-5 text-green-600" />,
  },
  {
    title: "Public Resources",
    category: "Accessible",
    description: "These files are available to all community members.",
    icon: <Globe className="w-5 h-5 text-blue-600" />,
  },
  {
    title: "Community Submissions",
    category: "Shared",
    description: "Files shared by communities in our network.",
    icon: <Building2 className="w-5 h-5 text-amber-600" />,
  },
  {
    title: "Organizational Docs",
    category: "Internal",
    description: "Important internal use files, reports, and records.",
    icon: <FolderOpen className="w-5 h-5 text-purple-600" />,
  },
  {
    title: "All Documents",
    category: "Archive",
    description: "View the complete archive of documents uploaded.",
    icon: <FileText className="w-5 h-5 text-zinc-700" />,
  },
];

const textSnippets = [
  {
    heading: "Power Aggregation Agreements: Updated for 2025",
    content:
      "Several municipalities have renewed their aggregation agreements for better savings in 2025. The new terms include expanded clean energy options and improved rate caps for residents.",
  },
  {
    heading: "SOPEC Transparency Report Now Available",
    content:
      "An in-depth report on the budget allocations, community grants, and energy performance metrics is now live. See how your community has benefited this fiscal year.",
  },
  {
    heading: "Policy Change Brief: Solar Rebate Program",
    content:
      "Revised guidelines allow more homeowners to qualify for rebates. The new policy will go into effect starting July 15 and aims to double community participation by year-end.",
  },
  {
    heading: "Electric Aggregation Rates Dropping",
    content:
      "Due to recent negotiations, most SOPEC communities will see a decrease in their electric aggregation rates starting this quarter.",
  },
  {
    heading: "Public Comment Open: Green Energy Proposal",
    content:
      "SOPEC is requesting community feedback on the proposed solar panel co-op. Comments accepted until June 30th.",
  },
  {
    heading: "Annual Report Preview: Top-Saving Communities",
    content:
      "Communities like Logan and Trimble are leading the charge in energy savings this year. Detailed analytics will be released next month.",
  },
  {
    heading: "Community Document Migration In Progress",
    content:
      "Legacy community documents are being migrated to our new digital platform for faster access and better archiving.",
  },
  {
    heading: "New Grant Tracking System Implemented",
    content:
      "The new grant tracker allows administrators and residents to see funding amounts, deadlines, and progress in real-time.",
  },
  {
    heading: "Open Bids for Solar Installation Projects",
    content:
      "Multiple communities are accepting bids from certified solar installation vendors. Visit the procurement page for requirements.",
  },
  {
    heading: "Historic Document Archive Going Public",
    content:
      "Over 1,200 historical community records are being digitized and will soon be accessible to the public online.",
  },
];

export default function DocumentsPage() {
  return (
    <div className="w-full px-4 py-12 max-w-screen-xl mx-auto space-y-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-zinc-800">
          Document Center
        </h2>
        <p className="text-center text-zinc-500 max-w-2xl mx-auto mt-2">
          Explore, update, and manage your documents with style — from public-facing reports to internal data sheets.
        </p>
      </motion.div>

      {/* 📂 Main Document Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Card className="bg-white border border-zinc-200 shadow-md hover:shadow-xl transition rounded-xl">
              <CardHeader className="flex items-center gap-4">
                <div className="bg-zinc-100 p-3 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <CardTitle className="text-md font-semibold text-zinc-800">
                    {item.title}
                  </CardTitle>
                  <p className="text-sm text-zinc-500 font-medium">
                    {item.category}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* 📰 Document Snippet Highlights */}
      <section className="mt-12 border-t pt-10">
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-bold text-zinc-800 flex justify-center items-center gap-2">
            <Newspaper className="w-6 h-6 text-red-500" />
            Policy & Insights
          </h3>
          <p className="text-zinc-500 text-sm mt-1 max-w-xl mx-auto">
            Updates and highlights pulled from the latest public document releases.
          </p>
        </div>
        <div className="space-y-8 max-w-4xl mx-auto">
          {textSnippets.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="border-l-4 border-green-600 pl-5"
            >
              <h4 className="text-lg font-semibold text-zinc-800 mb-1">
                {item.heading}
              </h4>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
