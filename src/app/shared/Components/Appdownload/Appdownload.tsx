"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import { appDownloadContent } from "@/data/data";

const AppDownload: React.FC = () => {
  return (
    <section className="bg-[#0f1031] text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2 mb-4"
            >
              <Smartphone className="w-6 h-6 text-blue-400" />
              <span className="text-blue-400 font-semibold uppercase tracking-wider text-sm">
                Mobile App
              </span>
            </motion.div>
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
              className="text-lg mb-6 text-gray-300"
            >
              {appDownloadContent.description}
            </motion.p>
            <motion.ul
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2 mb-8"
            >
              {appDownloadContent.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-200">
                  <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </motion.ul>
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {/* <Link
                href={appDownloadContent.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#0f1031] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-200"
              >
                <Download className="w-5 h-5" />
                Download the App
              </Link> */}
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="md:w-1/2 flex flex-col items-center gap-4"
          >
            <p className="text-gray-300 text-sm font-medium uppercase tracking-wider">
              Scan to Download
            </p>
            <div className="bg-white p-4 rounded-2xl shadow-2xl">
              <Image
                src="/qr-code.png"
                alt="Scan QR code to download the Rolling Cargo app"
                width={220}
                height={220}
                className="rounded-xl"
              />
            </div>
            <p className="text-gray-400 text-xs text-center max-w-xs">
              Point your phone camera at the QR code to download the app
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppDownload;
