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

// Function to get currency info based on country and freight type
const getCurrencyInfo = (country: Country, freightType: FreightType): CurrencyInfo => {
  if (country === "China") {
    return freightType === "air" 
      ? { code: "USD", symbol: "$", rate: 1 }
      : { code: "KES", symbol: "KSh", rate: 1 };
  }
  return currencyMap[country];
};

const currencyMap: Record<Country, CurrencyInfo> = {
  UK: { code: "GBP", symbol: "£", rate: 0.79 },
  China: { code: "USD", symbol: "$", rate: 1 }, // Default, but will be overridden by getCurrencyInfo
  Turkey: { code: "USD", symbol: "$", rate: 1 },
  Netherlands: { code: "USD", symbol: "$", rate: 1 },
  Italy: { code: "USD", symbol: "$", rate: 1 },
  "South Africa": { code: "USD", symbol: "$", rate: 1 },
  Dubai: { code: "KES", symbol: "KSh", rate: 1 }
};

const airFreightRates: Record<Country, { baseRate: number; minimumRate?: number }> = {
  UK: { baseRate: 6.5 }, // GBP
  China: { baseRate: 12, minimumRate: 15 }, // USD
  Turkey: { baseRate: 7.5 }, // USD
  Netherlands: { baseRate: 11 }, // USD
  Italy: { baseRate: 11 }, // USD
  "South Africa": { baseRate: 13 }, // USD
  Dubai: { baseRate: 8, minimumRate: 10 } // USD
};

const handlingFees: Record<Country, { air: number; sea?: number }> = {
  UK: { air: 25, sea: 15 }, // GBP
  China: { air: 0 },
  Turkey: { air: 20, sea: 10 }, // USD
  Netherlands: { air: 40, sea: 20 }, // USD
  Italy: { air: 40 }, // USD
  "South Africa": { air: 0 },
  Dubai: { air: 0 }
};

const seaFreightRates: Partial<Record<Country, number | { regular: number; small?: number; large?: number }>> = {
  UK: { regular: 2.5 }, // GBP per CBM
  Dubai: { regular: 60000, small: 12000 }, // KES
  China: { regular: 60000, small: 12000 }, // KES
  Turkey: { regular: 750, large: 600 }, // USD
  Netherlands: { regular: 5 } // USD per CBM
};

const airFreightCountries: Country[] = ["UK", "China", "Turkey", "Netherlands", "Italy", "South Africa", "Dubai"];
const seaFreightCountries: Country[] = ["UK", "China", "Turkey", "Netherlands", "Dubai"];

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
  const [totalCost, setTotalCost] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");

  useEffect(() => {
    emailjs.init("YOUR_USER_ID");
  }, []);

  useEffect(() => {
    if (length && width && height) {
      const volumetric = (parseFloat(length) * parseFloat(width) * parseFloat(height)) / 6000;
      setVolumetricWeight(volumetric);
    } else {
      setVolumetricWeight(null);
    }
  }, [length, width, height]);

  useEffect(() => {
    if (!country || !freightType) return;

    const currencyInfo = getCurrencyInfo(country, freightType);
    let calculatedCost = 0;
    let calculatedHandlingFee = 0;

    if (freightType === "air") {
      const actualWeight = parseFloat(weight) || 0;
      const volWeight = volumetricWeight || 0;
      const chargeableWeight = Math.max(actualWeight, volWeight);
      const rate = airFreightRates[country];

      if (chargeableWeight < 1 && rate.minimumRate) {
        calculatedCost = rate.minimumRate;
      } else {
        calculatedCost = chargeableWeight * rate.baseRate;
      }

      calculatedHandlingFee = handlingFees[country].air;
    } else if (freightType === "sea" && cbm) {
      const cbmValue = parseFloat(cbm);
      const seaRate = seaFreightRates[country];

      if (seaRate) {
        if (typeof seaRate === "number") {
          calculatedCost = cbmValue * seaRate;
        } else {
          if (country === "Dubai" || country === "China") {
            calculatedCost = cbmValue <= 0.2 ? seaRate.small! : seaRate.regular;
          } else if (country === "Turkey") {
            calculatedCost = cbmValue > 10 ? seaRate.large! : cbmValue * seaRate.regular;
          } else {
            calculatedCost = cbmValue * seaRate.regular;
          }
        }
      }

      calculatedHandlingFee = handlingFees[country].sea || 0;
    }

    const total = calculatedCost + calculatedHandlingFee;

    setCost(`${currencyInfo.symbol}${calculatedCost.toFixed(2)}`);
    setHandlingFee(`${currencyInfo.symbol}${calculatedHandlingFee.toFixed(2)}`);
    setTotalCost(`${currencyInfo.symbol}${total.toFixed(2)}`);
    
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
        total_cost: totalCost,
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
      setTotalCost("");
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
              Freight Cost ({country && freightType ? getCurrencyInfo(country, freightType).code : ""})
            </label>
            <input
              type="text"
              id="cost"
              value={cost}
              className="w-full px-3 py-2 border rounded bg-gray-100"
              readOnly
            />
          </div>

          <div>
            <label htmlFor="handlingFee" className="block mb-1">
              Handling Fee ({country && freightType ? getCurrencyInfo(country, freightType).code : ""})
            </label>
            <input
              type="text"
              id="handlingFee"
              value={handlingFee}
              className="w-full px-3 py-2 border rounded bg-gray-100"
              readOnly
            />
          </div>

          <div>
            <label htmlFor="totalCost" className="block mb-1 font-semibold">
              Total Cost ({country && freightType ? getCurrencyInfo(country, freightType).code : ""})
            </label>
            <input
              type="text"
              id="totalCost"
              value={totalCost}
              className="w-full px-3 py-2 border rounded bg-gray-100 font-bold text-lg"
              readOnly
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

      {/* Disclaimer note */}
      <p className="mt-8 text-sm text-gray-600 italic">
        Note that this calculator is designed to provide an estimate only. For actual costs contact us directly on +254709286286
      </p>
    </section>
  );
};

export default Freightsection;