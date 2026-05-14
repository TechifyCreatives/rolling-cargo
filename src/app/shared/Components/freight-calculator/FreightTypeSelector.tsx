// src/components/FreightTypeSelector.tsx

"use client";

import React from "react";
import { FreightType } from "@/types/feright.types";
import { FreightTypeSelectorProps } from "@/types/feright.types";

const FreightTypeSelector: React.FC<FreightTypeSelectorProps> = ({
  selectedType,
  onSelect,
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">Freight Type</h3>
      <div className="flex space-x-6">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="freightType"
            value="air"
            checked={selectedType === "air"}
            onChange={() => onSelect("air")}
            className="form-radio"
          />
          <span className="ml-2">Air Freight</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="freightType"
            value="sea"
            checked={selectedType === "sea"}
            onChange={() => onSelect("sea")}
            className="form-radio"
          />
          <span className="ml-2">Sea Freight</span>
        </label>
      </div>
    </div>
  );
};

export default FreightTypeSelector;
