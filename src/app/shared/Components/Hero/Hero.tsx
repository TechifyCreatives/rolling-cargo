"use client"
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { X, Plane, Ship, Package, Bell, Phone, Mail, Box } from "lucide-react";
import emailjs from '@emailjs/browser';
import Link from "next/link";

const backgroundImages = [
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

// Add this new interface for form status
interface FormStatus {
  message: string;
  type: 'success' | 'error' | null;
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
        <Link href='/contact-us'>
          <button className="bg-[#0f1031] text-white px-4 py-2 rounded hover:bg-[#640e0e] transition-colors duration-300">
            Contact Us
          </button>
        </Link>
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({
    message: '',
    type: null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ message: '', type: null });

    try {
      // Replace these with your actual EmailJS credentials
      const templateParams = {
        to_name: "Recipient Name",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        shipping_mode: formData.shippingMode,
        weight: formData.weight,
        volumetric_weight: formData.volumetricWeight,
        cbm: formData.cbm,
        message: formData.message
      };

      await emailjs.send(
        'service_od2wm1x', // Replace with your Service ID
        'template_lws7abq', // Replace with your Template ID
        templateParams,
        'AWuVmDvp3lqD8Xks_' // Replace with your Public Key
      );

      setFormStatus({
        message: 'Quote request sent successfully! We will contact you soon.',
        type: 'success'
      });

      // Close the form after a delay
      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (error) {
      setFormStatus({
        message: 'Failed to send quote request. Please try again.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
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
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {formStatus.message && (
            <div className={`p-4 rounded ${
              formStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {formStatus.message}
            </div>
          )}

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
              disabled={isSubmitting}
              className={`w-full bg-[#0f1031] text-white py-2 rounded transition-colors duration-300 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showContactForm, setShowContactForm] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    const popupTimeout = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    // Initialize EmailJS
    emailjs.init("AWuVmDvp3lqD8Xks_"); // Replace with your actual public key

    return () => {
      clearInterval(intervalId);
      clearTimeout(popupTimeout);
    };
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative mb-28">
      <div
        className="relative mt-16 h-[250px] md:h-[400px] bg-cover bg-center transition-all duration-1000 flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4 pt-4 md:pt-0">
          <div className="icons flex items-center justify-center mb-4 md:mb-4">
            <Plane className="text-white mr-4 md:mr-2" size={32} />
            <Ship className="text-white" size={32} />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg max-w-3xl mx-auto mb-6">
            Air and Sea Cargo Experts
          </h1>
          
          <div className="max-w-xl mx-auto md:mt-4">
            <div className="p-4 shadow-xl">
              <img 
                src="/aeo.png" 
                alt="Cargo Services"
                className="bg-white mx-auto rounded-lg h-[60px] md:h-[80px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* Services Box - Desktop only */}
        <div className="hidden md:block absolute -bottom-24 left-0 right-0 z-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-[#f8fafc] rounded-lg shadow-xl grid grid-cols-3 overflow-hidden">
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

              <div 
                onClick={() => setShowContactForm(true)} 
                className="group p-6 hover:bg-[#0f1031] transition-colors duration-300 cursor-pointer border-l border-r border-gray-200"
              >
                <div className="flex flex-col items-center text-center">
                  <Mail className="text-[#640e0e] group-hover:text-white mb-4" size={40} />
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-white">Request Quote</h3>
                  <p className="text-sm text-gray-600 group-hover:text-white">
                    Get instant quotes for your shipping needs
                  </p>
                </div>
              </div>

              <Link 
                href="/contact-us" 
                className="group p-6 hover:bg-[#0f1031] transition-colors duration-300 cursor-pointer"
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