"use client";

import { motion } from "framer-motion";
import { UploadCloud, ImagePlus, PencilRuler, FolderKanban, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const uploads = [
  {
    title: "Upload Logo",
    type: "Image",
    description: "Add your organization logo for branding.",
    icon: <ImagePlus className="w-5 h-5 text-indigo-600" />,
  },
  {
    title: "Add Cover Image",
    type: "Banner",
    description: "Upload a large banner for your profile or dashboard.",
    icon: <UploadCloud className="w-5 h-5 text-rose-500" />,
  },
  {
    title: "Design Templates",
    type: "Custom Layout",
    description: "Create or upload design elements to personalize your space.",
    icon: <PencilRuler className="w-5 h-5 text-green-600" />,
  },
  {
    title: "Resource Folders",
    type: "Organization",
    description: "Upload documents, PDFs, or spreadsheets in structured folders.",
    icon: <FolderKanban className="w-5 h-5 text-yellow-600" />,
  },
  {
    title: "Brand Layer",
    type: "Overlay",
    description: "Apply brand overlays and watermark settings to all uploads.",
    icon: <Layers className="w-5 h-5 text-blue-600" />,
  },
];

export default function UploadWorkspace() {
  return (
    <div className="w-full px-4 py-12 max-w-screen-xl mx-auto space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-zinc-800">
          Upload Center
        </h2>
        <p className="text-center text-zinc-500 max-w-2xl mx-auto mt-2">
          Customize your digital presence with drag-and-drop uploads, creative tools, and file management options.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {uploads.map((item, idx) => (
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
                  <p className="text-sm text-zinc-500 font-medium">{item.type}</p>
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
    </div>
  );
}
