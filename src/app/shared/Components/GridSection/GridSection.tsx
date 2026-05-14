"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { solutions } from "@/data/data";
import SolutionCard from "../Cards/SolutionCard";

const GridSection: React.FC = () => {
  return (
    <div className="w-full bg-[url('/image11.jpg')] bg-cover bg-center">
      <div className="bg-black/70 w-full h-full py-12">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white text-center mb-8 relative"
          >
            <span className="relative z-10">Our Shipping Processes</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white"
          >
            {solutions.map((solution) => (
              <motion.div
                key={solution.title}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <SolutionCard item={solution} />
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center mt-8">
            <Link
              href="/about-us"
              className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#0f1031] hover:text-white transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridSection;
