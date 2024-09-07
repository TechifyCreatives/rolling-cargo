"use client";
import React, { useState, FormEvent, useEffect } from "react";
import emailjs from "@emailjs/browser";

type FreightType = "air" | "sea";
type Country = "Kenya" | "UK" | "China" | "Turkey" | "Netherlands" | "Italy" | "South Africa"; // Add more countries as needed

const FreightSection: React.FC = () => {
  const [freightType, setFreightType] = useState<FreightType | null>(null);
  const [country, setCountry] = useState<Country | null>(null);
  const [weight, setWeight] = useState<string>("");
  const [cost, setCost] = useState<string>("");
  const [handlingFee, setHandlingFee] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");

  useEffect(() => {
    emailjs.init("YOUR_USER_ID");
  }, []);

  useEffect(() => {
    if (weight) {
      const calculatedCost = parseFloat(weight) * 12;
      setCost(calculatedCost.toFixed(2));
    } else {
      setCost("");
    }
  }, [weight]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const templateParams = {
        freight_type: freightType,
        country,
        weight,
        cost,
        handling_fee: handlingFee,
        name,
        phone,
        email,
      };

      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_USER_ID"
      );

      setSubmitMessage("Your message has been sent successfully!");
      // Reset form fields
      setFreightType(null);
      setCountry(null);
      setWeight("");
      setCost("");
      setHandlingFee("");
      setName("");
      setPhone("");
      setEmail("");
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">
        Freight services<span className="text-red-500">*</span>
      </h2>

      <div className="mb-6">
        <label className="inline-flex items-center mr-6">
          <input
            type="radio"
            className="form-radio"
            name="freightType"
            value="air"
            checked={freightType === "air"}
            onChange={() => setFreightType("air")}
          />
          <span className="ml-2">Air Freight</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio"
            name="freightType"
            value="sea"
            checked={freightType === "sea"}
            onChange={() => setFreightType("sea")}
          />
          <span className="ml-2">Sea Freight</span>
        </label>
      </div>

      {freightType && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Select Country</h3>
          {["Kenya", "UK", "China", "Turkey", "Netherlands", "Italy", "South Africa"].map((c) => (
            <label key={c} className="inline-flex items-center mr-4">
              <input
                type="radio"
                className="form-radio"
                name="country"
                value={c}
                checked={country === c}
                onChange={() => setCountry(c as Country)}
              />
              <span className="ml-2">{c}</span>
            </label>
          ))}
        </div>
      )}

      {freightType && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="weight" className="block mb-1">
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="cost" className="block mb-1">
              Estimated Cost ($)
            </label>
            <input
              type="number"
              id="cost"
              value={cost}
              className="w-full px-3 py-2 border rounded bg-gray-100"
              readOnly
            />
          </div>
          <div>
            <label htmlFor="handlingFee" className="block mb-1">
              Handling Fee ($)
            </label>
            <input
              type="number"
              id="handlingFee"
              value={handlingFee}
              onChange={(e) => setHandlingFee(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-[#0f1031] text-white rounded hover:bg-[#0f1031] transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Talk to us"}
          </button>
          {submitMessage && (
            <p
              className={`mt-4 ${
                submitMessage.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {submitMessage}
            </p>
          )}
        </form>
      )}
    </section>
  );
};

export default FreightSection;