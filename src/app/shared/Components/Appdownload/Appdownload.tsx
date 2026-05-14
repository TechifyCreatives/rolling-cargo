"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { appDownloadContent } from "@/data/data";

const AppDownload: React.FC = () => {
  return (
    <section className="bg-[#0f1031] text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h2
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              {appDownloadContent.title}
            </motion.h2>
            <motion.p
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg mb-6"
            >
              {appDownloadContent.description}
            </motion.p>
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <ul>
                {appDownloadContent.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="md:w-1/2 flex justify-center"
          >
            <Button
              asChild
              variant="default"
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-100"
            >
              <Link
                href={appDownloadContent.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PlayCircle className="mr-2" />
                {appDownloadContent.ctaText}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppDownload;
