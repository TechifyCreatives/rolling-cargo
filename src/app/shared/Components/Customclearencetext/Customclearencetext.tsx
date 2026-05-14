"use client";

import React from "react";
import { motion } from "framer-motion";
import { customClearanceContent } from "@/data/data";

const CustomClearanceText: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 bg-blue-50 px-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-md"
      >
        <motion.h1
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-bold mb-4 text-center"
        >
          {customClearanceContent.title}
        </motion.h1>

        <motion.hr
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="border-t-4 border-[#640e0e] rounded-full w-1/2 mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-700 text-center leading-relaxed whitespace-pre-line"
        >
          {customClearanceContent.description}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default CustomClearanceText;
