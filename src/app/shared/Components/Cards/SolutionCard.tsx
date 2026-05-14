"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SolutionCardProps } from "@/types/solution.types";

const SolutionCard: React.FC<SolutionCardProps> = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-between p-6 rounded-lg h-full bg-black/40 backdrop-blur-sm"
    >
      <div className="flex items-center mb-4 h-12">
        {item.icon && <item.icon />}
      </div>
      <h3 className="text-lg font-semibold text-center mb-4 h-14 flex items-center">
        {item.title}
      </h3>
      <p className="text-sm text-center mb-6">{item.description}</p>
      <Link
        href={item.link}
        className="text-sm underline hover:text-blue-400 transition-colors"
      >
        Learn more →
      </Link>
    </motion.div>
  );
};

export default SolutionCard;
