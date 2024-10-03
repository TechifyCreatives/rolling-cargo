"use client";

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

interface Office {
  name: string;
  phone: string;
  email: string;
  address: string;
}

const offices: Office[] = [
  {
    name: "Nairobi Office (Main Office)",
    phone: "+254 709 286 286",
    email: "support@rollingcargo.co.ke",
    address: "10 Funzi Road, Off Enterprise Road. P.O.BOX 14009-00100 NAIROBI - KENYA",
  },
  {
    name: "Mombasa Office",
    phone: "(+254) 709 286 286",
    email: "support@rollingcargo.co.ke",
    address: "Sheikh Abdullas F. Rd, Opposite Alliance Medical Centre Bondeni, Kilifi Corner, Mombasa.",
  },
  {
    name: "UAE – Dubai",
    phone: "+971 4 2965 432",
    email: "support@rollingcargo.co.ke",
    address: "Deira, Sabkha Road, Behind Sabkha Bus Station Sabkha Building 1st floor RM 118. Warehouse at Al Hamriya port side gate No.9 next to Mosque Sheikh Murr.",
  },
  {
    name: "China – Guangzhou (Air Shipment)",
    phone: "+8618826260042 (Liuan), +8618826260043 (Hellen)",
    email: "support@rollingcargo.co.ke",
    address: "106.Building C, Zone C, Guangdong New Material Industry Base, Lishui Town, Nanhai District, Foshan City, POST CODE: 528244",
  },
  {
    name: "China – Guangzhou (Sea Shipment)",
    phone: "+8618826260044 (A WEI), +8619927449452 (KEVIN)",
    email: "support@rollingcargo.co.ke",
    address: "107,Building C, Zone C, Guangdong New Material Industry Base, Lishui Town, Nanhai District, Foshan City, POST CODE: 528244",
  },
  {
    name: "U.K – London",
    phone: "+44 7447 959259",
    email: "support@rollingcargo.co.ke",
    address: "Rolling Cargo/ Customer name Unit 3 Alpha Estate Clayton Road Hayes Middlesex, UB3 1BB",
  },
  {
    name: "Turkey – Istanbul",
    phone: "+905526128645",
    email: "support@rollingcargo.co.ke",
    address: "Saraç İshak Mah. Turanlı Sok. No:12 Safir İ˛Merkezi D. 304-312. Beyazıt v.d 3710200842 Beyazıt / İSTANBUL / TÜRKİYE.",
  },
  {
    name: "Europe – Netherlands",
    phone: "+31 610624607",
    email: "support@rollingcargo.co.ke",
    address: "Kollenbergweg 5 1101 AT AMSTERDAM Netherlands",
  },
  {
    name: "Europe – Italy",
    phone: "+393716953158",
    email: "support@rollingcargo.co.ke",
    address: "Via Montorfano 98, 20831 Seregno (MB)",
  },
  {
    name: "South Africa",
    phone: "+27 79 906 7166",
    email: "support@rollingcargo.co.ke",
    address: "ORBIT 22 Hugget street, Kempton Park 011 390 3555",
  },
];

interface ContactFormProps {
  onSubmit: SubmitHandler<FormInputs>;
  isSubmitting: boolean;
  submitStatus: 'success' | 'error' | null;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, isSubmitting, submitStatus }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          {...register("name", { required: "Name is required" })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Your Name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          {...register("email", { 
            required: "Email is required",
            pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email address" }
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="your@email.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          {...register("message", { required: "Message is required" })}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Your message here"
        ></textarea>
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0f1031] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <Send className="ml-2 h-5 w-5" />
      </button>
      {submitStatus === 'success' && (
        <p className="mt-4 text-sm text-green-600">Message sent successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="mt-4 text-sm text-red-600">An error occurred. Please try again.</p>
      )}
    </form>
  );
};

interface OfficeInfoProps {
  office: Office;
}

const OfficeInfo: React.FC<OfficeInfoProps> = ({ office }) => (
  <div className="border-l-4 border-[#0f1031] pl-4 mb-6">
    <h3 className="text-lg font-medium text-gray-900">{office.name}</h3>
    <div className="mt-2 text-sm text-gray-600 space-y-1">
      <p className="flex items-center">
        <Phone className="mr-2 h-4 w-4 text-[#0f1031]" />
        {office.phone}
      </p>
      {office.email && (
        <p className="flex items-center">
          <Mail className="mr-2 h-4 w-4 text-[#0f1031]" />
          {office.email}
        </p>
      )}
      <p className="flex items-start">
        <MapPin className="mr-2 h-4 w-4 text-[#0f1031] mt-1" />
        <span>{office.address}</span>
      </p>
    </div>
  </div>
);

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true);
    try {
      // Convert FormInputs to a Record<string, string>
      const emailData: Record<string, string> = {
        name: data.name,
        email: data.email,
        message: data.message,
      };

      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        emailData,
        "YOUR_USER_ID"
      );
      setSubmitStatus('success');
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#0f1031] mb-12">Get in Touch</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-[#0f1031] mb-6">Send us a message</h2>
          <ContactForm onSubmit={onSubmit} isSubmitting={isSubmitting} submitStatus={submitStatus} />
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-[#0f1031] mb-6">Our Offices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <OfficeInfo key={index} office={office} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage