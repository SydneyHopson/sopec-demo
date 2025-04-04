"use client";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  name: string;
  population: number;
  region: string;
  joined: string;
  image?: string;
};

export default function CommunityCard({
  name,
  population,
  region,
  joined,
  image,
}: Props) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
      <Card className="hover:shadow-md hover:border-primary-admin transition border border-zinc-200 bg-white">
        <CardHeader className="flex justify-between items-center gap-4">
          <div>
            <CardTitle className="text-lg font-semibold text-zinc-800">
              {name}
            </CardTitle>
            <p className="text-sm text-zinc-600 font-normal">
              <strong>Population:</strong> {population.toLocaleString()} <br />
              <strong>Region:</strong> {region} <br />
              <strong>Joined:</strong> {joined}
            </p>
          </div>

          {image && (
            <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden border border-zinc-300">
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

        <CardContent className="pt-0" />
      </Card>
    </motion.div>
  );
}
