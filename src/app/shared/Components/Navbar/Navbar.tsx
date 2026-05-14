"use client";
import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  DollarSign,
  Bell,
  Mail,
  Search,
  Camera,
  Building2,
  HelpCircle,
  FileText,
  Truck,
  Plane,
  Ship,
  Package,
  Phone,
  Shield,
  Briefcase,
  MessageSquare,
} from "lucide-react";
import {
  IconNavLinkProps,
  MenuSectionProps,
  NavLinkProps,
} from "@/types/navbar.types";
import { BREAKPOINTS, NAVIGATION_LINKS } from "@/data/data";
import { useMediaQuery } from "@/hooks/useMediaQueries";
import { Button } from "@/components/ui/button";

const useClickOutside = (handler: () => void) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handler]);
  return ref;
};

const useKeyboardNavigation = (isMenuOpen: boolean, closeMenu: () => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen, closeMenu]);
};

// Components
const NavLink: React.FC<NavLinkProps> = ({
  href,
  className = "",
  children,
  onClick,
  ariaLabel,
}) => (
  <Link
    href={href}
    className={`transition-colors duration-200 ${className}`}
    onClick={onClick}
    aria-label={ariaLabel}
  >
    {children}
  </Link>
);

const IconNavLink: React.FC<IconNavLinkProps> = ({
  href,
  icon: Icon,
  label,
  isMobile = false,
  onClick,
}) => (
  <NavLink
    href={href}
    className="text-gray-600 hover:text-gray-900 flex flex-col items-center p-2 rounded-lg hover:bg-gray-50"
    onClick={onClick}
    ariaLabel={label}
  >
    <Icon size={isMobile ? 18 : 24} className="mb-1" />
    <span className="text-[10px] md:text-xs font-medium leading-tight text-center">
      {label}
    </span>
  </NavLink>
);

const MenuSection: React.FC<MenuSectionProps> = ({
  title,
  links,
  onLinkClick,
}) => (
  <div>
    <h3 className="text-lg font-semibold mb-4 text-gray-900 border-b border-gray-200 pb-2">
      {title}
    </h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <NavLink
            href={link.href}
            className="text-gray-600 hover:text-gray-900 flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            onClick={onLinkClick}
            ariaLabel={`Navigate to ${link.name}`}
          >
            <link.icon size={18} className="mr-3 text-gray-500" />
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

const LogoSection: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const [logoError, setLogoError] = useState(false);
  const handleLogoError = useCallback(() => {
    setLogoError(true);
  }, []);
  return (
    <NavLink
      href="/"
      className="flex items-center justify-center group"
      ariaLabel="Go to homepage"
    >
      {!logoError ? (
        <div className="relative">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={isMobile ? 45 : 200}
            height={isMobile ? 45 : 130}
            className="object-contain transition-transform duration-200 group-hover:scale-105"
            onError={handleLogoError}
            priority
          />
        </div>
      ) : (
        <div
          className={`${
            isMobile ? "text-lg" : "text-2xl"
          } font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200`}
        >
          Logo
        </div>
      )}
    </NavLink>
  );
};

const MobileMenu: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  menuRef: React.RefObject<HTMLDivElement>;
}> = ({ isOpen, onClose, menuRef }) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className={`fixed inset-0 z-50 bg-white overflow-y-auto transition-transform duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2
            id="mobile-menu-title"
            className="text-xl font-semibold text-gray-900"
          >
            Navigation Menu
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>
        {/* Menu Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <MenuSection
            title="Services"
            links={NAVIGATION_LINKS.services}
            onLinkClick={onClose}
          />
          <MenuSection
            title="Quick Links"
            links={NAVIGATION_LINKS.quickLinks}
            onLinkClick={onClose}
          />
          <MenuSection
            title="Company"
            links={NAVIGATION_LINKS.company}
            onLinkClick={onClose}
          />
        </div>
        {/* Featured Image */}
        <div className="w-full max-w-md mx-auto">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/aeo.jpg"
              alt="AEO Certified - Authorized Economic Operator"
              width={400}
              height={200}
              className="object-cover w-full h-48 transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">AEO Certified</p>
              <p className="text-xs opacity-90">Trusted logistics partner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS.MOBILE - 1}px)`);
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);
  const menuRef = useClickOutside(closeMenu);
  useKeyboardNavigation(isMenuOpen, closeMenu);

  // Memoized navigation items for better performance
  const rightNavItems = useMemo(
    () => [
      { href: "/cost-estimator", icon: DollarSign, label: "Cost Estimator" },
      { href: "/blog", icon: Bell, label: "Updates" },
      { href: "/contact-us", icon: Mail, label: "Contact" },
      { href: "/gallery", icon: Camera, label: "Gallery" },
    ],
    []
  );

  return (
    <>
      <nav
        className="bg-white shadow-lg fixed top-0 left-0 right-0 z-40 border-b border-gray-200"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left Section */}
            <div className="flex-[1] flex items-center space-x-3">
              <Button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen ? "true" : "false"}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
              <NavLink
                href="/tracking"
                className="bg-gradient-to-r from-[#0f1031] to-[#1a1548] hover:from-[#1a1548] hover:to-[#2a2558] text-white px-3 md:px-4 py-2 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 font-medium"
                ariaLabel="Track your shipment"
              >
                <Search size={isMobile ? 16 : 18} />
                <span className="hidden sm:inline">Track Shipment</span>
                <span className="sm:hidden">Track</span>
              </NavLink>
            </div>

            {/* Center Section - Logo */}
            <div className="flex-[2] flex justify-center">
              <LogoSection isMobile={isMobile} />
            </div>

            {/* Right Section */}
            <div className="flex-[1] flex items-center justify-end space-x-1 md:space-x-2">
              {rightNavItems.map((item) => (
                <IconNavLink
                  key={item.href}
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} menuRef={menuRef} />

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-30 transition-opacity duration-300"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
