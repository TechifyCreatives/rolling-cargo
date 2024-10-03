"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, DollarSign, Bell, Mail, User, FileText } from "lucide-react";

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
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Centered logo */}
          <div className="absolute left-1/2 top-1/2 mt-1 transform -translate-x-1/2 -translate-y-1/2">
            <NavLink href="/" className="flex items-center justify-center">
              <Image
                src="/LOGO.png"
                alt="Logo"
                width={isMobile ? 80 : 100}
                height={isMobile ? 80 : 100}
                style={{ objectFit: 'contain' }}
              />
            </NavLink>
          </div>

          {/* Right side icons with text */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <NavLink
              href="/cost-estimator"
              className="text-gray-500 hover:text-gray-600 flex flex-col items-center"
            >
              <DollarSign size={isMobile ? 16 : 24} />
              <span className="text-[10px] md:text-xs mt-1">
                Cost Estimator
              </span>
            </NavLink>
            <NavLink
              href="/blog"
              className="text-gray-500 hover:text-gray-600 flex flex-col items-center"
            >
              <Bell size={isMobile ? 16 : 24} />
              <span className="text-[10px] md:text-xs mt-1">
                Updates
              </span>
            </NavLink>
            <NavLink
              href="/contact-us"
              className="text-gray-500 hover:text-gray-600 flex flex-col items-center"
            >
              <Mail size={isMobile ? 16 : 24} />
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
            <X size={24} />
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
                    <DollarSign className="mr-2" size={16} /> Cost Estimator
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/blog"
                    className="text-gray-600 hover:text-gray-900 flex items-center"
                    isMobile={true}
                  >
                    <Bell className="mr-2" size={16} /> Updates
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/terms"
                    className="text-gray-600 hover:text-gray-900 flex items-center"
                    isMobile={true}
                  >
                    <FileText className="mr-2" size={16} /> Terms and Conditions
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/profile"
                    className="text-gray-600 hover:text-gray-900 flex items-center"
                    isMobile={true}
                  >
                    <User className="mr-2" size={16} /> Profile
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

          {/* Responsive image */}
          <div className="mt-8 w-full max-w-md mx-auto">
            <Image
              src="/aeo.jpg"
              alt="Toggle Image"
              width={400}
              height={200}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;