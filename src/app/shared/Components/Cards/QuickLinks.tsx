import React from "react";
import Link from "next/link";
import { quickLinks } from "@/data/data";

const QuickLinks: React.FC = () => {
  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
      <div className="flex flex-wrap gap-2">
        {quickLinks.map((link, index) => (
          <React.Fragment key={link.name}>
            <Link href={link.url} className="hover:text-gray-600">
              {link.name}
            </Link>
            {index < quickLinks.length - 1 && <span className="mx-2">/</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
