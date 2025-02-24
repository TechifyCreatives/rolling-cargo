"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const countries = [
  {
    name: "Headquaters",
    phone: "+254 709 286 286",
    email: "sales@rollingcargo.co.ke",
  },
  {
    name: "UAE - Dubai",
    phone: "+971 4 2965 432",
    email: "sales@rollingcargo.co.ke",
  },
  {
    name: "China Office",
    phone: "+8618826260042",
    email: "sales@rollingcargo.co.ke",
  },
  {
    name: "South Africa",
    phone: "+27 79 906 7166",
    email: "sales@rollingcargo.co.ke",
  },
  {
    name: "Europe – Italy",
    phone: "+393716953158",
    email: "sales@rollingcargo.co.ke",
  },
  {
    name: "Europe – Netherlands",
    phone: "+31 610624607",
    email: "sales@rollingcargo.co.ke",
  },
  {
    name: "Turkey – Istabul",
    phone: "+905526128645",
    email: "sales@rollingcargo.co.ke",
  },
  {
    name: "U.K – London",
    phone: "+44 7447 959259",
    email: "sales@rollingcargo.co.ke",
  },
  {
    name: "Mombasa Office",
    phone: "+254 709 286 286",
    email: "sales@rollingcargo.co.ke",
  },
];

const Footer = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = countries.find((c) => c.name === e.target.value);
    if (country) setSelectedCountry(country);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-800">
      <hr className="border-gray-300" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Card */}
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
              <a href={`tel:${selectedCountry.phone}`} className="hover:text-gray-600">
                {selectedCountry.phone}
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 text-gray-800" size={18} />
              <a href={`mailto:${selectedCountry.email}`} className="hover:text-gray-600">
                {selectedCountry.email}
              </a>
            </div>
          </div>

          {/* Second Card */}
          <div className="p-6">
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
                  <Link href={link.url} className="hover:text-gray-600">
                    {link.name}
                  </Link>
                  {index < 4 && <span className="mx-2">/</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Third Card */}
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://www.facebook.com/rollingcargo"
                className="text-gray-800 hover:text-gray-600"
                target="_blank"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://twitter.com/rollingcargo"
                className="text-gray-800 hover:text-gray-600"
                target="_blank"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/rollingcargo"
                className="text-gray-800 hover:text-gray-600"
                target="_blank"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/rollingcargo"
                className="text-gray-800 hover:text-gray-600"
                target="_blank"
              >
                <Instagram size={24} />
              </Link>
            </div>
            <img 
              src="/aeo.png" 
              alt="Social Media" 
              className="w-40 h-20"
            />
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
