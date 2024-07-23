// components/MissionVisionPriorities.tsx
import React from "react";

interface ValueProps {
  title: string;
  content: string;
  icon: string;
  fullWidth?: boolean;
}

const ValueCard: React.FC<ValueProps> = ({
  title,
  content,
  icon,
  fullWidth,
}) => (
  <div
    className={`bg-white p-6 rounded-lg shadow-md ${
      fullWidth ? "col-span-full" : ""
    }`}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{content}</p>
  </div>
);

const MissionVisionPriorities: React.FC = () => {
  const values = [
    {
      title: "Our Mission",
      content:
        "To enhance effective and efficient service delivery that promotes ultimate client's satisfaction at all times.",
      icon: "🚢",
    },
    {
      title: "Our Vision",
      content:
        "To be the market leader and trend setter in offering specialised services and logistics solutions beyond our customers' expectations.",
      icon: "🌍",
    },
    {
      title: "Our Priorities",
      content:
        "Rolling Cargo's main goal is to provide you with excellent services while making sure that your time and money are well preserved. By virtue of our exclusive agreements and commitments with leading carriers in both Air and Sea, we enjoy special rates on all of our shipments and confirmed space in every booking which we will pass to you to guarantee a speedy and hassle-free delivery.",
      icon: "🎯",
      fullWidth: true,
    },
  ];

  return (
    <section className="bg-gray-100 px-4 sm:px-8 md:px-16 lg:px-20 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Company Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionPriorities;
