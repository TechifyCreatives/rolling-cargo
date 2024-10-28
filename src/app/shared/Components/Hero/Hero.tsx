"use client"
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { X, Plane, Ship, Package, Bell, Phone, Mail, Box } from "lucide-react";
import axios from "axios";
import Link from "next/link";

const backgroundImages = [
  // "/banner.jpg",
  // "/banner2.jpg",
  "/banner3.jpg",
];

interface CustomAlertProps {
  onClose: () => void;
}

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  shippingMode: string;
  weight: string;
  volumetricWeight: string;
  cbm: string;
  message: string;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" style={{ marginTop: '64px' }}>
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-md w-full relative">
      <div className="flex items-center mb-2">
        <Bell className="mr-2 text-blue-500" />
        <h3 className="text-lg font-semibold">ANNOUNCEMENT!</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        To help us serve you more efficiently, please share the details below when sending your cargo to us:
      </p>
      <ul className="list-disc pl-5 mb-4 text-sm text-gray-600">
        <li>Name</li>
        <li>Contact</li>
        <li>Mode of shipping (air or by sea)</li>
      </ul>
      <p className="text-sm text-gray-600 mb-4">
        For all other queries, talk to us on <strong>+254709 286 286</strong>
      </p>
      <div className="mt-4">
        <h4 className="font-semibold mb-2">Contact Us</h4>
        <button className="bg-[#0f1031] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
          Contact Us
        </button>
      </div>
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        <X size={20} />
      </button>
    </div>
  </div>
);

const ContactForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    shippingMode: "air",
    weight: "",
    volumetricWeight: "",
    cbm: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" 
         style={{ marginTop: '64px' }}
         onClick={handleOverlayClick}>
      <div className="relative bg-white rounded-lg w-full max-w-md max-h-[calc(100vh-100px)] overflow-y-auto"
           onClick={e => e.stopPropagation()}>
        <div className="sticky top-0 bg-white p-6 border-b z-10">
          <h2 className="text-2xl font-bold">Request Quote</h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                required
                className="w-full p-2 border rounded"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                required
                className="w-full p-2 border rounded"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full p-2 border rounded"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Shipping Mode</label>
              <select
                className="w-full p-2 border rounded"
                value={formData.shippingMode}
                onChange={(e) => setFormData({...formData, shippingMode: e.target.value})}
              >
                <option value="air">Air Shipment</option>
                <option value="sea">Sea Shipment</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Weight (kg)</label>
              <input
                type="number"
                required
                className="w-full p-2 border rounded"
                value={formData.weight}
                onChange={(e) => setFormData({...formData, weight: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Volumetric Weight</label>
              <input
                type="number"
                required
                className="w-full p-2 border rounded"
                value={formData.volumetricWeight}
                onChange={(e) => setFormData({...formData, volumetricWeight: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">CBM</label>
              <input
                type="number"
                required
                className="w-full p-2 border rounded"
                value={formData.cbm}
                onChange={(e) => setFormData({...formData, cbm: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                className="w-full p-2 border rounded"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <div className="sticky bottom-0 bg-white pt-4">
              <button
                type="submit"
                className="w-full bg-[#0f1031] text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showContactForm, setShowContactForm] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    const popupTimeout = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(popupTimeout);
    };
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative">
      <div
        className="relative mt-16 h-[450px] mb-20 bg-cover bg-center transition-all duration-1000 flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 mb-32">
          <div className="icons flex items-center justify-center mb-4">
            <Plane className="text-white mr-2" size={40} />
            <Ship className="text-white mr-2" size={40} />
          </div>
          <div className="flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-white drop-shadow-lg">
              Air and Sea Cargo Experts
            </h1>
          </div>
        </div>

        {/* Services Box - Moved inside the hero section */}
        <div className="absolute bottom-0 left-0 right-0 z-20 transform translate-y-1/4">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-[#f8fafc] rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-3 overflow-hidden">
              {/* Track Shipment */}
              <Link 
                href="/traking" 
                className="group p-6 hover:bg-[#0f1031] transition-colors duration-300 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <Package className="text-[#640e0e] group-hover:text-white mb-4" size={40} />
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-white">Track Shipment</h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-300">
                    Track your cargo in real-time with our advanced tracking system
                  </p>
                </div>
              </Link>

              {/* Request Quote */}
              <div 
                onClick={() => setShowContactForm(true)} 
                className="group p-6 hover:bg-[#0f1031] transition-colors duration-300 cursor-pointer border-t md:border-t-0 md:border-l md:border-r border-gray-200"
              >
                <div className="flex flex-col items-center text-center">
                  <Mail className="text-[#640e0e] group-hover:text-white mb-4" size={40} />
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-white">Request Quote</h3>
                  <p className="text-sm text-gray-600 group-hover:text-white">
                    Get instant quotes for your shipping needs
                  </p>
                </div>
              </div>

              {/* Contact Us */}
              <Link 
                href="/contact-us" 
                className="group p-6 hover:bg-[#0f1031] transition-colors duration-300 cursor-pointer border-t md:border-t-0"
              >
                <div className="flex flex-col items-center text-center">
                  <Phone className="text-[#640e0e] group-hover:text-white mb-4" size={40} />
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-white">Contact Us</h3>
                  <p className="text-sm text-gray-600 group-hover:text-white">
                    Get in touch with our customer service team
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {showPopup && <CustomAlert onClose={closePopup} />}
      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </div>
  );
};

export default Hero;