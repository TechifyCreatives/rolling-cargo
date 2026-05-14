"use client";

import React, { useState, useEffect } from "react";
import AdminSidebar from "../shared/Components/admin/sidebar/Sidebar";
import AdminNavbar from "../shared/Components/admin/navbar/Navbar";

interface AdminLayoutProps {
  children: React.ReactNode;
  params?: { [key: string]: string | string[] };
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, params }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when sidebar is open on mobile
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [sidebarOpen]);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <AdminSidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        activeItem="dashboard" // You can derive this from pathname or params
        onItemClick={(itemId) => {
          // You can add navigation logic here
          console.log("Navigate to:", itemId);
        }}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Navbar */}
        <AdminNavbar
          onMenuClick={() => setSidebarOpen(true)}
          title="Admin Dashboard" // You can derive this from pathname or make it dynamic
          subtitle="Manage your application"
        />

        {/* Page Content */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
