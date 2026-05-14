"use client";

import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { Country } from "@/types/footer.types";
import { countries } from "@/data/data";

const ContactCard: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = countries.find((c) => c.name === e.target.value);
    if (country) setSelectedCountry(country);
  };

  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
      <select
        className="w-full p-2 mb-4 border rounded"
        onChange={handleCountryChange}
        value={selectedCountry.name}
      >
        {countries.map((country) => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      <div className="flex items-center mb-2">
        <Phone className="mr-2 text-gray-800" size={18} />
        <a
          href={`tel:${selectedCountry.phone}`}
          className="hover:text-gray-600"
        >
          {selectedCountry.phone}
        </a>
      </div>

      <div className="flex items-center">
        <Mail className="mr-2 text-gray-800" size={18} />
        <a
          href={`mailto:${selectedCountry.email}`}
          className="hover:text-gray-600"
        >
          {selectedCountry.email}
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
