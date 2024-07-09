"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What shipping services do you offer?",
    answer:
      "We offer a range of services including standard ground shipping, express delivery, international shipping, and freight forwarding for larger cargo.",
  },
  {
    question: "How can I track my package?",
    answer:
      "You can track your package by entering your tracking number on our website or mobile app. We provide real-time updates on your shipment's location and estimated delivery time.",
  },
  {
    question: "What are your delivery timeframes?",
    answer:
      "Our delivery timeframes vary depending on the service selected and destination. Standard domestic shipping typically takes 3-5 business days, while express services can deliver within 1-2 business days. International shipping times vary by country.",
  },
  {
    question: "Do you offer insurance for valuable items?",
    answer:
      "Yes, we offer shipping insurance for valuable items. The cost is based on the declared value of your shipment. We recommend insurance for all high-value packages.",
  },
  {
    question: "How do I schedule a pickup?",
    answer:
      "You can schedule a pickup through our website, mobile app, or by calling our customer service. We offer flexible pickup windows to accommodate your schedule.",
  },
  // Add more shipping-related FAQ items as needed
];

const FAQItem: React.FC<
  FAQItem & { isOpen: boolean; toggleOpen: () => void }
> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b mt-5 mb-5 border-blue-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={toggleOpen}
      >
        <span className="text-lg font-medium text-blue-900">{question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <svg
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 pr-12">
          <p className="text-base text-blue-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq: React.FC = () => {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-blue-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-blue-900 mb-8">
        Shipping FAQ
      </h2>
      <dl className="space-y-6 divide-y divide-blue-200">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={!!openItems[index]}
            toggleOpen={() => toggleItem(index)}
          />
        ))}
      </dl>
    </div>
  );
};

export default Faq;
