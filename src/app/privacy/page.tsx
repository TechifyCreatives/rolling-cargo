// pages/privacy-policy.tsx
"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";

const PrivacyPolicy: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const sections = [
    {
      title: "Introduction",
      content:
        "Your privacy is important to us. This Privacy Policy explains how Rolling Cargo Limited collects, processes, and protects your personal data when you interact with our services. By using our services, you agree to the terms outlined here.",
    },
    {
      title: "Information We Collect",
      content: "We collect personal information when you:",
      listItems: [
        "Register for or use our shipping and logistics services.",
        "Communicate with us via phone, email, or other channels.",
        "Engage with us as a customer, supplier, agent, or business partner.",
        "Visit our premises, website, or social media platforms.",
      ],
    },
    {
      title: "How We Use Your Information",
      content: "We use your data to:",
      listItems: [
        "Provide and improve our services.",
        "Process payments and invoices.",
        "Respond to inquiries and support requests.",
        "Comply with legal and regulatory requirements.",
        "Prevent fraud and enhance security.",
        "Send service-related communications.",
      ],
    },
    {
      title: "Data Sharing & Protection",
      content:
        "We do not sell or share your personal data with third parties except:",
      listItems: [
        "When required by law or regulatory authorities.",
        "With trusted partners who assist in service delivery under strict confidentiality agreements.",
      ],
      additionalContent:
        "We implement security measures to protect your data from unauthorized access, loss, or misuse.",
    },
    {
      title: "Your Rights",
      content: "You have the right to:",
      listItems: [
        "Access, update, or request deletion of your personal data.",
        "Opt out of marketing communications.",
        "Lodge a complaint with the relevant data protection authority if you believe your data rights have been violated.",
      ],
    },
    {
      title: "Contact Us",
      content:
        "For inquiries about this Privacy Policy or your data, contact us at:",
      contactInfo: ["Email: info@rollingcargo.co.ke", "Phone: 0709 286286"],
      footer:
        "Rolling Cargo reserves the right to update this Privacy Policy as needed. Changes will be posted on our website.",
    },
  ];

  return (
    <>
      <Head>
        <title>Privacy Policy | Rolling Cargo</title>
        <meta name="description" content="Rolling Cargo's Privacy Policy" />
      </Head>

      <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Hero Section */}
            <motion.div
              variants={itemVariants}
              className="bg-[#0f1031] text-white px-8 py-12"
            >
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-blue-100">Last Updated: April 2025</p>
            </motion.div>

            {/* Policy Content */}
            <div className="p-8">
              {sections.map((section, index) => (
                <motion.section
                  key={index}
                  variants={itemVariants}
                  className="mb-10 last:mb-0"
                >
                  <h2 className="text-2xl font-semibold text-[#0f1031] mb-4 border-b border-blue-100 pb-2">
                    {section.title}
                  </h2>

                  <p className="mb-4 text-gray-700 leading-relaxed">
                    {section.content}
                  </p>

                  {section.listItems && (
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                      {section.listItems.map((item, i) => (
                        <li key={i} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.additionalContent && (
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      {section.additionalContent}
                    </p>
                  )}

                  {section.contactInfo && (
                    <div className="bg-blue-50 p-4 rounded-md mb-4">
                      {section.contactInfo.map((info, i) => (
                        <p
                          key={i}
                          className="mb-2 last:mb-0 text-[#0f1031] font-medium"
                        >
                          {info}
                        </p>
                      ))}
                    </div>
                  )}

                  {section.footer && (
                    <p className="text-sm text-gray-500 italic mt-6">
                      {section.footer}
                    </p>
                  )}
                </motion.section>
              ))}
            </div>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default PrivacyPolicy;
