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
  {
    name: "Head Office",
    phone: "+254 709 286 286",
    email: "support@rollingcargo.co.ke",
  },
  {
    name: "UAE - Dubai",
    phone: "+971 4 2965 432",
    email: "support@rollingcargo.co.ke",
  },
  {
    name: "China Office",
    phone: "+8618826260042",
    email: "support@rollingcargo.co.ke",
  },
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
          <div className=" p-6">
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
              <FaPhone className="mr-2 text-[#0f1031]" />
              <a href={`tel:${selectedCountry.phone}`}>
                {selectedCountry.phone}
              </a>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-[#0f1031]" />
              <a href={`mailto:${selectedCountry.email}`}>
                {selectedCountry.email}
              </a>
            </div>
          </div>

          {/* Second Card */}
          <div className=" p-6">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-wrap">
              {[
                { name: "About Us", url: "/about-us" },
                { name: "Air Cargo", url: "/air-cargo" },
                { name: "Sea Cargo", url: "/sea-cargo" },
                { name: "Online Shopping", url: "/online-shopping" },
                { name: "Blog", url: "/blog" },
              ].map((link, index) => (
                <React.Fragment key={link.name}>
                  <Link href={link.url} className="hover:text-blue-600">
                    {link.name}
                  </Link>
                  {index < 4 && <span className="mx-2">/</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Third Card */}
          <div className=" p-6">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            {/* <div className="flex flex-wrap mb-4">
              {[
                { name: "About Us", url: "/about" },
                { name: "Careers", url: "/careers" },
                { name: "Faq", url: "/faq" },
                { name: "Contact", url: "/contact" },
              ].map((link, index) => (
                <React.Fragment key={link.name}>
                  <Link href={link.url} className="hover:text-blue-600">
                    {link.name}
                  </Link>
                  {index < 3 && <span className="mx-2">/</span>}
                </React.Fragment>
              ))}
            </div> */}
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/rollingcargo"
                className="text-2xl text-blue-600 hover:text-blue-700"
              >
                <FaFacebookSquare />
              </Link>
              <Link
                href="https://twitter.com/rollingcargo"
                className="text-2xl text-blue-400 hover:text-blue-500"
              >
                <FaTwitterSquare />
              </Link>
              <Link
                href="https://www.linkedin.com/company/rollingcargo"
                className="text-2xl text-blue-700 hover:text-blue-800"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://www.instagram.com/rollingcargo"
                className="text-2xl text-pink-600 hover:text-pink-700"
              >
                <FaInstagramSquare />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Headquarters and Copyright */}
      <div className="bg-[#0f1031] py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 text-white">
            Headquarters: Rolling Cargo – 10 Funzi Road, Off Enterprise Road,
            Kenya.
          </p>
          <p className="text-white">
            &copy; {currentYear} Rolling Cargo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
