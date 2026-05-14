"use client";

import React from "react";
import { motion } from "framer-motion";
import { JobCardProps } from "@/types/carreers.types";

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-md rounded-lg overflow-hidden"
    >
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
        <p className="mt-2 text-gray-600">{job.description}</p>
      </div>
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold mb-4">Key Responsibilities:</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          {job.responsibilities.map((resp, idx) => (
            <li key={idx} className="text-gray-700">
              {resp}
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mb-4">Skills:</h3>
        <ul className="list-disc pl-6 space-y-2">
          {job.skills.map((skill, idx) => (
            <li key={idx} className="text-gray-700">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default JobCard;
