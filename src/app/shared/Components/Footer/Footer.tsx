"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

const countries = [
  { name: "USA", phone: "+1 123-456-7890", email: "usa@example.com" },
  { name: "UK", phone: "+44 20 1234 5678", email: "uk@example.com" },
  { name: "Germany", phone: "+49 30 1234 5678", email: "germany@example.com" },
];

const Footer: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = countries.find((c) => c.name === e.target.value);
    if (country) setSelectedCountry(country);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-800">
      <hr className="border-gray-300" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Card */}
          <div className="bg-white p-6">
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
              <FaPhone className="mr-2 text-blue-600" />
              <span>{selectedCountry.phone}</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-blue-600" />
              <span>{selectedCountry.email}</span>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white p-6">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-wrap">
              {[
                "Solutions",
                "Local information",
                "E-Business",
                "Sustainability",
                "myMSC",
              ].map((link, index) => (
                <React.Fragment key={link}>
                  <Link href="#" className="hover:text-blue-600">
                    {link}
                  </Link>
                  {index < 4 && <span className="mx-2">/</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Third Card */}
          <div className="bg-white p-6">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex flex-wrap mb-4">
              {["About Us", "Careers", "News", "Contact"].map((link, index) => (
                <React.Fragment key={link}>
                  <Link href="#" className="hover:text-blue-600">
                    {link}
                  </Link>
                  {index < 3 && <span className="mx-2">/</span>}
                </React.Fragment>
              ))}
            </div>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-2xl text-blue-600 hover:text-blue-700"
              >
                <FaFacebookSquare />
              </Link>
              <Link
                href="#"
                className="text-2xl text-blue-400 hover:text-blue-500"
              >
                <FaTwitterSquare />
              </Link>
              <Link
                href="#"
                className="text-2xl text-blue-700 hover:text-blue-800"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="#"
                className="text-2xl text-pink-600 hover:text-pink-700"
              >
                <FaInstagramSquare />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Headquarters and Copyright */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">Headquarters: 123 Main St, Anytown, Country</p>
          <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
