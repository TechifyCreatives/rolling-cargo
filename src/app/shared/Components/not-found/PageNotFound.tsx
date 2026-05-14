"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { notFoundContent } from "@/data/data";

const PageNotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full text-center"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-4xl sm:text-6xl font-bold text-gray-800 mb-2"
        >
          {notFoundContent.heading}
        </motion.h1>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-600 mb-4">
          {notFoundContent.subheading}
        </h2>

        <p className="text-gray-500 mb-8 text-sm sm:text-base">
          {notFoundContent.description}
        </p>

        <motion.div
          initial={{ rotate: -5 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Image
            src="/404-illustration.svg"
            alt="404 Illustration"
            width={300}
            height={200}
            className="mx-auto"
          />
        </motion.div>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
        >
          {notFoundContent.ctaText}
        </Link>
      </motion.div>
    </div>
  );
};

export default PageNotFound;
