"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaShippingFast, FaUser } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLink: React.FC<{
    href: string;
    className?: string;
    children: React.ReactNode;
  }> = ({ href, className, children }) => (
    <Link href={href} className={className} onClick={toggleMenu}>
      {children}
    </Link>
  );

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Hamburger menu */}
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image src="/logo.svg" alt="Logo" width={120} height={40} />
          </div>

          {/* Right side icons with text */}
          <div className="flex items-center space-x-4">
            <NavLink
              href="/tracking"
              className="text-gray-500 hover:text-gray-600 flex flex-col items-center"
            >
              <FaShippingFast size={24} />
              <span className="text-xs mt-1">Tracking</span>
            </NavLink>
            <NavLink
              href="/cost-estimator"
              className="text-gray-500 hover:text-gray-600 flex flex-col items-center"
            >
              <FiDollarSign size={24} />
              <span className="text-xs mt-1">Cost Estimator</span>
            </NavLink>
            <NavLink
              href="/account"
              className="text-gray-500 hover:text-gray-600 flex flex-col items-center"
            >
              <FaUser size={24} />
              <span className="text-xs mt-1">My Account</span>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Menu content */}
      <div
        className={`fixed inset-0 z-50 bg-white overflow-y-auto transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <FaTimes size={24} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First category */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {[
                  "About us",
                  "Our Services",
                  "FAQ",
                  "Air Cargo",
                  "Sea Cargo",
                  "Online Shopping",
                ].map((item) => (
                  <li key={item}>
                    <NavLink
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Second category */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <NavLink
                    href="/traking"
                    className="text-gray-600 hover:text-gray-900 flex items-center"
                  >
                    <FaShippingFast className="mr-2" /> Tracking
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/cost-estimator"
                    className="text-gray-600 hover:text-gray-900 flex items-center"
                  >
                    <FiDollarSign className="mr-2 text-sm" /> Cost Estimator
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/account"
                    className="text-gray-600 hover:text-gray-900 flex items-center"
                  >
                    <FaUser className="mr-2 text-sm" /> My Account
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Third category */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {["Careers", "Blog", "Feedback", "FAQ", "Contact us"].map(
                  (item) => (
                    <li key={item}>
                      <NavLink
                        href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        {item}
                      </NavLink>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
