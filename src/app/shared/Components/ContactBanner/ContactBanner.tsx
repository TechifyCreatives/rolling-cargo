"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ContactFormProps,
  FormInputs,
  OfficeInfoProps,
} from "@/types/contact.types";
import { offices } from "@/data/data";

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  isSubmitting,
  submitStatus,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const handleFormSubmit: SubmitHandler<FormInputs> = async (data) => {
    await onSubmit(data);
    if (submitStatus === "success") {
      reset();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              Full Name *
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 placeholder:text-slate-400"
              placeholder="John Doe"
            />
            <AnimatePresence>
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-2 text-sm text-red-500 flex items-center gap-1"
                >
                  <AlertCircle className="w-4 h-4" />
                  {errors.name.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              Email Address *
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 placeholder:text-slate-400"
              placeholder="john@example.com"
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-2 text-sm text-red-500 flex items-center gap-1"
                >
                  <AlertCircle className="w-4 h-4" />
                  {errors.email.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Phone and Company Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              Phone Number
            </label>
            <input
              {...register("phone")}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 placeholder:text-slate-400"
              placeholder="+254 700 123 456"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              Company
            </label>
            <input
              {...register("company")}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 placeholder:text-slate-400"
              placeholder="Your Company"
            />
          </motion.div>
        </div>

        {/* Subject */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <label
            htmlFor="subject"
            className="block text-sm font-semibold text-slate-700 mb-2"
          >
            Subject *
          </label>
          <input
            {...register("subject", { required: "Subject is required" })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 placeholder:text-slate-400"
            placeholder="How can we help you?"
          />
          <AnimatePresence>
            {errors.subject && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2 text-sm text-red-500 flex items-center gap-1"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.subject.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Message */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-slate-700 mb-2"
          >
            Message *
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            rows={6}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 placeholder:text-slate-400 resize-none"
            placeholder="Tell us about your requirements..."
          />
          <AnimatePresence>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2 text-sm text-red-500 flex items-center gap-1"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.message.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </motion.button>

        {/* Status Messages */}
        <AnimatePresence>
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
            >
              <CheckCircle className="w-5 h-5 text-green-600" />
              <p className="text-green-800 font-medium">
                Message sent successfully! We'll get back to you soon.
              </p>
            </motion.div>
          )}
          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-600" />
              <p className="text-red-800 font-medium">
                Failed to send message. Please try again or contact us directly.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
};

const OfficeInfo: React.FC<OfficeInfoProps> = ({ office, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="group"
  >
    <div className="h-full p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white shadow-lg">
          <MapPin className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
            {office.name}
            {office.chineseName && (
              <span className="block text-sm font-normal text-slate-600">
                {office.chineseName}
              </span>
            )}
          </h3>

          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm">
                {office.chinesePhone || office.phone}
              </span>
            </div>

            {office.email && (
              <div className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href={`mailto:${office.email}`}
                  className="text-sm hover:underline"
                >
                  {office.email}
                </a>
              </div>
            )}

            <div className="flex items-start gap-3 text-slate-600">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed">
                {office.chineseAddress || office.address}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your logistics? Let's discuss how we can help
              streamline your cargo operations.
            </p>
          </motion.div>

          {/* Contact Form */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">
                    Send us a Message
                  </h2>
                  <p className="text-slate-600">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </div>
                <ContactForm
                  onSubmit={onSubmit}
                  isSubmitting={isSubmitting}
                  submitStatus={submitStatus}
                />
              </div>
            </motion.div>
          </div>

          {/* Office Information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Our Offices
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Visit us at any of our locations or reach out through your
                preferred communication channel.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {offices.map((office, index) => (
                <OfficeInfo key={index} office={office} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Direct Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20"
          >
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-blue-100 mb-8 text-lg">
                  For urgent inquiries, reach out to us directly
                </p>
                <motion.a
                  href="mailto:sales@rollingcargo.co.ke"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  sales@rollingcargo.co.ke
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
