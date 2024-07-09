"use client";
// pages/contact.tsx
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

type OfficeContact = {
  name: string;
  phone: string;
  email: string;
  address: string;
};

const offices: OfficeContact[] = [
  {
    name: "New York Office",
    phone: "+1 (212) 555-1234",
    email: "newyork@shippingco.com",
    address: "123 Broadway, New York, NY 10001, USA",
  },
  {
    name: "London Office",
    phone: "+44 20 7123 4567",
    email: "london@shippingco.com",
    address: "456 Oxford Street, London, W1C 1JH, UK",
  },
  {
    name: "Tokyo Office",
    phone: "+81 3-1234-5678",
    email: "tokyo@shippingco.com",
    address: "789 Shibuya, Tokyo 150-0002, Japan",
  },
  {
    name: "Singapore Office",
    phone: "+65 6789 0123",
    email: "singapore@shippingco.com",
    address: "10 Marina Boulevard, Singapore 018983",
  },
  {
    name: "Dubai Office",
    phone: "+971 4 123 4567",
    email: "dubai@shippingco.com",
    address: "Dubai Marina, Dubai, UAE",
  },
  {
    name: "Sydney Office",
    phone: "+61 2 9876 5432",
    email: "sydney@shippingco.com",
    address: "200 George Street, Sydney NSW 2000, Australia",
  },
  {
    name: "Mumbai Office",
    phone: "+91 22 2345 6789",
    email: "mumbai@shippingco.com",
    address: "Nariman Point, Mumbai 400021, India",
  },
  {
    name: "São Paulo Office",
    phone: "+55 11 3456 7890",
    email: "saopaulo@shippingco.com",
    address: "Av. Paulista, 1000, São Paulo, SP, 01310-100, Brazil",
  },
  {
    name: "Hamburg Office",
    phone: "+49 40 1234 5678",
    email: "hamburg@shippingco.com",
    address: "Speersort 10, 20095 Hamburg, Germany",
  },
  {
    name: "Rotterdam Office",
    phone: "+31 10 987 6543",
    email: "rotterdam@shippingco.com",
    address: "Wilhelminakade 909, 3072 AP Rotterdam, Netherlands",
  },
];

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        data,
        "YOUR_USER_ID"
      );
      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="p-8 flex-grow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="mb-6">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs italic">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email address",
                      },
                    })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs italic">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    rows={4}
                    placeholder="Your message here"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs italic">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
              {submitStatus === "success" && (
                <p className="mt-4 text-green-500">
                  Message sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="mt-4 text-red-500">
                  An error occurred. Please try again.
                </p>
              )}
            </div>
            <div className="relative h-64 md:h-80 lg:h-96 w-full">
              <Image
                src="/image2.jpg"
                alt="Shipping"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Our Offices
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
                  >
                    <h3 className="text-lg font-medium text-gray-800 mb-2">
                      {office.name}
                    </h3>
                    <div className="space-y-2">
                      <p className="flex items-center text-gray-600 text-sm">
                        <FaPhone className="mr-2 text-indigo-500" />
                        {office.phone}
                      </p>
                      <p className="flex items-center text-gray-600 text-sm">
                        <FaEnvelope className="mr-2 text-indigo-500" />
                        {office.email}
                      </p>
                      <p className="flex items-center text-gray-600 text-sm">
                        <FaMapMarkerAlt className="mr-2 text-indigo-500" />
                        {office.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
