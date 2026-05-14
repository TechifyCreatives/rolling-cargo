// src/components/CountrySelector.tsx

"use client";

import { airFreightCountries, seaFreightCountries } from "@/data/data";
import { CountrySelectorProps } from "@/types/feright.types";
import React from "react";

const CountrySelector: React.FC<CountrySelectorProps> = ({
  freightType,
  selectedCountry,
  onSelect,
}) => {
  const countries =
    freightType === "air" ? airFreightCountries : seaFreightCountries;

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">Select Country</h3>
      <div className="flex flex-wrap gap-4">
        {countries.map((c) => (
          <label key={c} className="inline-flex items-center space-x-2">
            <input
              type="radio"
              name="country"
              value={c}
              checked={selectedCountry === c}
              onChange={() => onSelect(c)}
              className="form-radio"
            />
            <span>{c}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CountrySelector;
