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
  UK: { code: "GBP", symbol: "£", rate: 0.79 },
  China: { code: "CNY", symbol: "¥", rate: 7.18 },
  Turkey: { code: "TRY", symbol: "₺", rate: 31.03 },
  Netherlands: { code: "EUR", symbol: "€", rate: 0.92 },
  Italy: { code: "EUR", symbol: "€", rate: 0.92 },
  "South Africa": { code: "ZAR", symbol: "R", rate: 18.74 },
  Dubai: { code: "AED", symbol: "د.إ", rate: 3.67 }
};

const handlingFees: Partial<Record<Country, number>> = {
  Netherlands: 40,
  Turkey: 20,
  UK: 25
};

// Define available countries for each freight type
const airFreightCountries: Country[] = ["UK", "China", "Turkey", "Netherlands", "Italy", "South Africa", "Dubai"];
const seaFreightCountries: Country[] = ["UK", "China", "Turkey", "Netherlands", "Dubai"];

// CBM rates based on the rate card
const cbmRates: Partial<Record<Country, number | { below10: number; above10: number }>> = {
  Turkey: { below10: 650, above10: 600 },
  Dubai: 60000,
  UK: 0, // Add actual rate
  China: 60000,
  Netherlands: 0 // Add actual rate
};

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

  // Calculate cost based on freight type, weight, volumetric weight, and CBM
  useEffect(() => {
    if (!country) return;

    const { rate, symbol } = currencyMap[country];
    let calculatedCost = 0;

    if (freightType === "air") {
      const actualWeight = parseFloat(weight) || 0;
      const volWeight = volumetricWeight || 0;
      const chargeableWeight = Math.max(actualWeight, volWeight);
      calculatedCost = chargeableWeight * 12 * rate; // $12 per kg
    } else if (freightType === "sea" && cbm) {
      const cbmValue = parseFloat(cbm);
      const cbmRate = cbmRates[country];
      
      if (typeof cbmRate === "number") {
        calculatedCost = cbmValue * cbmRate * rate;
      } else if (cbmRate && typeof cbmRate === "object") {
        calculatedCost = cbmValue * (cbmValue < 10 ? cbmRate.below10 : cbmRate.above10) * rate;
      }
    }

    if (calculatedCost > 0) {
      setCost(`${symbol}${calculatedCost.toFixed(2)}`);
    } else {
      setCost("");
    }

    // Set handling fee
    if (country in handlingFees) {
      const fee = handlingFees[country as keyof typeof handlingFees]!;
      setHandlingFee(`${symbol}${(fee * rate).toFixed(2)}`);
    } else {
      setHandlingFee("");
    }
  }, [weight, volumetricWeight, cbm, country, freightType]);

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
              <label htmlFor="cbm" className="block mb-1">
                CBM (Cubic Meters)
              </label>
              <input
                type="number"
                id="cbm"
                value={cbm}
                onChange={(e) => setCbm(e.target.value)}
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