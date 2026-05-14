"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactCard from "../Cards/ContactCard";
import QuickLinks from "../Cards/QuickLinks";
import SocialMedia from "../Cards/SocialMedia";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-gray-800"
    >
      <hr className="border-gray-300" />
      <div className="container mx-auto px-4 py-8">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ContactCard />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <QuickLinks />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <SocialMedia />
          </motion.div>
        </motion.div>
      </div>

      {/* Headquarters and Copyright */}
      <div className="bg-[#0f1031] py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 text-white">
            Headquarters: Rolling Cargo – 10 Funzi Road, Off Enterprise Road,
            Kenya.
          </p>
          <p className="text-white">
            &copy; {currentYear} Rolling Cargo. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
