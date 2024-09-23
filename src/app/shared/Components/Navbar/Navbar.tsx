"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiDollarSign, FiBell, FiMail } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLink: React.FC<{
    href: string;
    className?: string;
    children: React.ReactNode;
    isMenuLink?: boolean;
    isMobile?: boolean;
  }> = ({ href, className, children, isMenuLink, isMobile }) => (
    <Link
      href={href}
      className={className}
      onClick={() => {
        if (isMobile || isMenuLink) {
          toggleMenu();
        }
      }}
    >
      {children}
    </Link>
  );

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Hamburger menu */}
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Logo with curved background */}
          <div className="flex-shrink-0 flex items-center">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0"></div>
              <NavLink href="/" className="relative z-10 flex items-center justify-center h-full">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={150}
                  height={150}
                  style={{ objectFit: 'contain' }}
                />
              </NavLink>
            </div>
          </div>

          {/* Right side icons with text */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <NavLink
              href="/cost-estimator"
              className="text-gray-500 hover:text-gray-600 flex flex-col items-center"
            >
              <FiDollarSign size={isMobile ? 16 : 24} />
              <span className="text-[10px] md:text-xs mt-1">
                Cost Estimator
              </span>
            </NavLink>
            <NavLink
              href="/blog"
              className="text-gray-500 hover:text-gray-600 flex flex-col items-center"
            >
              <FiBell size={isMobile ? 16 : 24} />
              <span className="text-[10px] md:text-xs mt-1">
                Updates
              </span>
            </NavLink>
            <NavLink
              href="/contact-us"
              className="text-gray-500 hover:text-gray-600 flex flex-col items-center"
            >
              <FiMail size={isMobile ? 16 : 24} />
              <span className="text-[10px] md:text-xs mt-1">
                Contact Us
              </span>
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
                  "Custom Clearance",
                ].map((item) => (
                  <li key={item}>
                    <NavLink
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-600 hover:text-gray-900"
                      isMenuLink={true}
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
                    href="/cost-estimator"
                    className="text-gray-600 hover:text-gray-900 flex items-center"
                    isMobile={true}
                  >
                    <FiDollarSign className="mr-2 text-sm" /> Cost Estimator
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/blog"
                    className="text-gray-600 hover:text-gray-900 flex items-center"
                    isMobile={true}
                  >
                    <FiBell className="mr-2 text-sm" /> Updates
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/contact-us"
                    className="text-gray-600 hover:text-gray-900 flex items-center"
                    isMobile={true}
                  >
                    <FiMail className="mr-2 text-sm" /> Contact Us
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
                        isMenuLink={true}
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