// src/components/faq/FaqSection.tsx

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FAQItem } from "@/types/faq.types";
import { Button } from "@/components/ui/button";
import { faqData } from "@/data/data";

interface AccordionItemProps extends FAQItem {
  isOpen: boolean;
  toggleOpen: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  toggleOpen,
}) => {
  return (
    <motion.div initial={false} className="border-b border-gray-700">
      <Button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
            />
          </svg>
        </motion.span>
      </Button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-base text-white">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

const FaqSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-[#0f1031] rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-extrabold text-white mb-8">Shipping FAQ</h2>
      <dl className="space-y-6">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={!!openItems[index]}
            toggleOpen={() => toggleItem(index)}
          />
        ))}
      </dl>
    </motion.section>
  );
};

export default FaqSection;
