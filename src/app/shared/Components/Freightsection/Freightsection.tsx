"use client"
import React, { useState, FormEvent, useEffect } from "react";
import emailjs from "@emailjs/browser";

type FreightType = "air" | "sea";
type Country = "UK" | "China" | "Turkey" | "Netherlands" | "Italy" | "South Africa" | "Dubai";

interface CurrencyInfo {
  code: string;
  symbol: string;
  rate: number;
}

const currencyMap: Record<Country, CurrencyInfo> = {
  UK: { code: "GBP", symbol: "£", rate: 1 }, // Using 1 since UK rates are already in GBP
  China: { code: "USD", symbol: "$", rate: 1 },
  Turkey: { code: "USD", symbol: "$", rate: 1 },
  Netherlands: { code: "USD", symbol: "$", rate: 1 },
  Italy: { code: "USD", symbol: "$", rate: 1 },
  "South Africa": { code: "USD", symbol: "$", rate: 1 },
  Dubai: { code: "USD", symbol: "$", rate: 1 }
};

interface RateInfo {
  normalRate: number;
  specialRate?: number; // For cases like "less than 1kg"
  handlingFee?: number;
}

const airFreightRates: Record<Country, RateInfo> = {
  UK: { normalRate: 6.5, handlingFee: 25 },
  China: { normalRate: 12, specialRate: 15 },
  Turkey: { normalRate: 7.5, handlingFee: 20 },
  Netherlands: { normalRate: 10, handlingFee: 30 },
  Italy: { normalRate: 11, handlingFee: 40 },
  "South Africa": { normalRate: 13 },
  Dubai: { normalRate: 8, specialRate: 10 }
};

const seaFreightRates: Partial<Record<Country, RateInfo>> = {
  UK: { normalRate: 2.5, handlingFee: 15 }
  // Other countries' sea freight rates to be added
};

const airFreightCountries: Country[] = ["UK", "China", "Turkey", "Netherlands", "Italy", "South Africa", "Dubai"];
const seaFreightCountries: Country[] = ["UK"]; // Currently only UK has sea freight rates

const Freightsection: React.FC = () => {
  const [freightType, setFreightType] = useState<FreightType | null>(null);
  const [country, setCountry] = useState<Country | null>(null);
  const [weight, setWeight] = useState<string>("");
  const [length, setLength] = useState<string>("");
  const [width, setWidth] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [volumetricWeight, setVolumetricWeight] = useState<number | null>(null);
  const [cbm, setCbm] = useState<string>("");
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

  // Calculate volumetric weight when dimensions change
  useEffect(() => {
    if (length && width && height) {
      const volumetric = (parseFloat(length) * parseFloat(width) * parseFloat(height)) / 6000;
      setVolumetricWeight(volumetric);
    } else {
      setVolumetricWeight(null);
    }
  }, [length, width, height]);

  // Calculate cost based on freight type and weight
  useEffect(() => {
    if (!country || !freightType) return;

    const { symbol } = currencyMap[country];
    let calculatedCost = 0;
    let calculatedHandlingFee = 0;

    if (freightType === "air") {
      const actualWeight = parseFloat(weight) || 0;
      const volWeight = volumetricWeight || 0;
      const chargeableWeight = Math.max(actualWeight, volWeight);
      const rates = airFreightRates[country];

      if (chargeableWeight < 1 && rates.specialRate) {
        calculatedCost = rates.specialRate;
      } else {
        calculatedCost = chargeableWeight * rates.normalRate;
      }

      if (rates.handlingFee) {
        calculatedHandlingFee = rates.handlingFee;
      }
    } else if (freightType === "sea") {
      const rates = seaFreightRates[country];
      if (rates) {
        const weightValue = parseFloat(weight) || 0;
        calculatedCost = weightValue * rates.normalRate;
        calculatedHandlingFee = rates.handlingFee || 0;
      }
    }

    if (calculatedCost > 0) {
      setCost(`${symbol}${calculatedCost.toFixed(2)}`);
    } else {
      setCost("");
    }

    if (calculatedHandlingFee > 0) {
      setHandlingFee(`${symbol}${calculatedHandlingFee.toFixed(2)}`);
    } else {
      setHandlingFee("");
    }
  }, [weight, volumetricWeight, country, freightType]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const templateParams = {
        freight_type: freightType,
        country,
        weight,
        volumetric_weight: volumetricWeight?.toFixed(2),
        cbm,
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
      setLength("");
      setWidth("");
      setHeight("");
      setVolumetricWeight(null);
      setCbm("");
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
          {(freightType === "air" ? airFreightCountries : seaFreightCountries).map((c) => (
            <label key={c} className="inline-flex items-center mr-4 mb-2">
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

      {freightType && country && (
        <form onSubmit={handleSubmit} className="space-y-4">
          {freightType === "air" && (
            <>
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
                  step="0.01"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label htmlFor="length" className="block mb-1">
                    Length (cm)
                  </label>
                  <input
                    type="number"
                    id="length"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="width" className="block mb-1">
                    Width (cm)
                  </label>
                  <input
                    type="number"
                    id="width"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="height" className="block mb-1">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    id="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
              </div>
              {volumetricWeight !== null && (
                <div>
                  <label htmlFor="volumetricWeight" className="block mb-1">
                    Volumetric Weight (kg)
                  </label>
                  <input
                    type="text"
                    id="volumetricWeight"
                    value={volumetricWeight.toFixed(2)}
                    className="w-full px-3 py-2 border rounded bg-gray-100"
                    readOnly
                  />
                </div>
              )}
            </>
          )}

          {freightType === "sea" && (
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
                step="0.01"
              />
            </div>
          )}

          <div>
            <label htmlFor="cost" className="block mb-1">
              Estimated Cost ({currencyMap[country].code})
            </label>
            <input
              type="text"
              id="cost"
              value={cost}
              className="w-full px-3 py-2 border rounded bg-gray-100"
              readOnly
            />
          </div>

          {handlingFee && (
            <div>
              <label htmlFor="handlingFee" className="block mb-1">
                Handling Fee ({currencyMap[country].code})
              </label>
              <input
                type="text"
                id="handlingFee"
                value={handlingFee}
                className="w-full px-3 py-2 border rounded bg-gray-100"
                readOnly
              />
            </div>
          )}

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

      {/* Disclaimer note */}
      <p className="mt-8 text-sm text-gray-600 italic">
        Note that this calculator is designed to provide an estimate only. For actual costs contact us directly on +254709286286
      </p>
    </section>
  );
};

export default Freightsection;