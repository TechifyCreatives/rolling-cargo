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
    question: "Which countries do you ship from?",
    answer:
      "We ship your goods by providing tailored end-to-end air freight, sea freight, and courier services from UK, Italy, Netherlands, Turkey, Dubai, and China. Rolling Cargo has a robust network of partners to serve your global needs.",
  },
  {
    question: "What are your shipping rates and charges?",
    answer:
      "Charges are based on actual weight or volumetric weight of the package. We charge whichever is higher. Shipping by sea is based on Cubic per Meter (CBM). We measure using the formula Length x Width x Height (in meters).",
  },
  {
    question: "Payments to suppliers",
    answer:
      "We assist our customers pay their suppliers abroad in Turkey. All you need to do is pay at our offices and we shall pay the supplier on your behalf.",
  },
  {
    question: "What are the export charges?",
    answer:
      "Export charges are paid directly to the customs authorities.  The kind of goods you are exporting will dictate the charges that will be applied. We find the correct tariff applicable based on the description of your goods. Be advised that tariffs are country-specific and can vary from one country to the other.",
  },
  {
    question: "What are your new working days in Dubai with the revised weekend?",
    answer:
      "Our Dubai office is open everyday from 9AM – 10PM.",
  },
  {
    question: "Do you ship from the USA?",
    answer:
      "Currently we don’t have an office in USA, and for this reason we are unable to ship.😔",
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
];

const FAQItem: React.FC<
  FAQItem & { isOpen: boolean; toggleOpen: () => void }
> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="mt-5 mb-5 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={toggleOpen}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
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
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : (
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 pr-12">
          <p className="text-base text-white">{answer}</p>
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
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-[#0f1031] rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-white mb-8">Shipping FAQ</h2>
      <dl className="space-y-6 divide-y divide-[#640e0e]">
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
