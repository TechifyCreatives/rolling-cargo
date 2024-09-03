"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

type Inputs = {
  name: string;
  email: string;
  phone: string;
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
    name: "Rolling Cargo - 10 Funzi Road, Off Enterprise",
    phone: "+254 709 286 286",
    email: "support@rollingcargo.co.ke",
    address: "Road. P.O.BOX 14009-00100 NAIROBI - KENYA",
  },
  {
    name: "Sheikh Abdullas F. Rd,Opposite Alliance Medical Centre",
    phone: "+254 709 286 286",
    email: "support@rollingcargo.co.ke",
    address: "Bondeni,Kilifi Corner, Mombasa.",
  },
  {
    name: "Deira, Sabkha Road, Behind Sabkha Bus Station Sabkha",
    phone: "+971 4 2965 432",
    email: "support@rollingcargo.co.ke",
    address: "Building 1st floor RM 118.",
  },
  {
    name: "Warehouse is at Al Hamriya port",
    phone: "+971 58 9137220",
    email: "support@rollingcargo.co.ke",
    address: "side gate No.9next to Mosque Sheikh Murr.",
  },
  {
    name: "CHINA – GUANGZHOU",
    phone: "+8618826260042",
    email: "support@rollingcargo.co.ke",
    address: "106.Building C, Zone C, Guangdong New Material Industry Base, Lishui Town, Nanhai District, Foshan City, POST CODE: 528244 ",
  },
  {
    name: "ROLLING CARGO 空运仓库地址：佛山市南海区里水镇广东新材料产业基地C区C栋106 上班时间周一至周日11点~19点）联系人",
    phone: "HELLEN+8618826260043",
    email: "support@rollingcargo.co.ke",
    address: "刘安货物外箱每箱必须标注国外客户姓名电话号码以及空运, 再附上装箱单发到仓库，如唛头信息不齐，仓库拒收",
  },
  {
    name: "Rolling Cargo China By SEA address",
    phone: "KEVIN: +8619927449452",
    email: "support@rollingcargo.co.ke",
    address: "107,Building C, Zone C, Guangdong New Materiallndustry Base, Lishui Town, Nanhai District,Foshan City",
  },
  {
    name: "ROLLING CARGO 海运仓库地址：佛山市南海区里水镇广东新材料产业基地C区C栋107 (上班时间周一至周六11点~18点）",
    phone: "联系人:阿伟 +8618826260044  小王：+8619927449452",
    email: "support@rollingcargo.co.ke",
    address: "货物外箱每箱必须标注国外客户姓名电话号码以及海运，再附上装箱单发到仓库，如唛头信息不齐，仓库拒收",
  },
  {
    name: "U.K – LONDON",
    phone: "+44 7447 959259",
    email: "support@rollingcargo.co.ke",
    address: "Rolling Cargo/ Customer nameUnit 3 Alpha Estate Clayton Road Hayes Middlesex, UB3 1BB",
  },
  {
    name: "TURKEY – ISTANBUL",
    phone: "+905526128645",
    email: "support@rollingcargo.co.ke",
    address: "Rolling Cargo C/o your name Saraç İshak Mah. Turanlı Sok. No:12 Safir İ˛Merkezi D. 304-312. Beyazıt v.d 3710200842 Beyazıt / İSTANBUL / TÜRKİYE.",
  },
  {
    name: "EUROPE – NETHERLANDS",
    phone: "+31 610624607",
    email: "support@rollingcargo.co.ke",
    address: "Rolling Cargo Europe C/o your name Kollenbergweg 5 1101 AT AMSTERDAM Netherlands",
  },
  {
    name: "EUROPE – ITALY",
    phone: "+393716953158",
    email: "support@rollingcargo.co.ke",
    address: "ITALY OFFICE ADDRESS; ITALY Rolling Cargo Address Via Montorfano 98, 20831 Seregno (MB) Flight days: every Friday.",
  },
  {
    name: "SOUTH AFRICA",
    phone: "+27 79 906 7166",
    email: "support@rollingcargo.co.ke",
    address: "SOUTH AFRICA OFFICE ADDRESS; ORBIT 22 Hugget street, Kempton Park 011 390 3555",
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

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-6">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name <span className="text-red-500">*</span>
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
                  Email <span className="text-red-500">*</span>
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
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("phone", { required: "Phone is required" })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  placeholder="Your Phone Number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs italic">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message <span className="text-red-500">*</span>
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
              <p className="mt-4 text-green-500">Message sent successfully!</p>
            )}
            {submitStatus === "error" && (
              <p className="mt-4 text-red-500">
                An error occurred. Please try again.
              </p>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Our Offices
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4"
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
  );
};

export default ContactPage;
