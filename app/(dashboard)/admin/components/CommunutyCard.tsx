"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type Props = {
  name: string;
  population: number;
  region: string;
  joined: string;
  image?: string;
};

export default function CommunityCard({ name, population, region, joined, image }: Props) {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, population, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(Math.floor(latest));
      },
    });

    return controls.stop;
  }, [population]);

  return (
    <motion.div whileHover={{ scale: 1.02 }} className="transition-transform">
      <Card className="hover:shadow-md transition border border-zinc-200 bg-white">
        <CardHeader className="flex items-center justify-between gap-4">
          <div>
            <CardTitle className="text-lg font-semibold text-zinc-800">{name}</CardTitle>
            <p className="text-sm text-zinc-500">
              <strong>Population:</strong> {displayValue.toLocaleString()}<br />
              <strong>Region:</strong> {region}<br />
              <strong>Joined:</strong> {joined}
            </p>
          </div>

          {image && (
            <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden border border-zinc-200">
              <Image
                src={image}
                alt={name}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
          )}
        </CardHeader>
        <CardContent />
      </Card>
    </motion.div>
  );
}
