"use client";

import React, { useState } from "react";
import { calculateFreightCost } from "@/lib/calculateFreightCost";
import { CountryName, FreightType } from "@/types/feright.types";
import { airFreightCountries, seaFreightCountries } from "@/data/data";
import FreightTypeSelector from "../freight-calculator/FreightTypeSelector";
import CountrySelector from "../freight-calculator/CountrySelector";
import FreightForm from "../freight-calculator/FreightForm";
import CalculationResults from "../freight-calculator/CalculationResults";

const FreightSection: React.FC = () => {
  const [freightType, setFreightType] = useState<FreightType | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountryName | null>(
    null
  );

  const [formData, setFormData] = useState({
    weight: "",
    length: "",
    width: "",
    height: "",
    cbm: "",
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [volumetricWeight, setVolumetricWeight] = useState<number | null>(null);
  const [calculationResult, setCalculationResult] = useState<{
    freightCost: number;
    handlingFee: number;
    totalCost: number;
    currency: string;
    symbol: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFreightTypeSelect = (type: FreightType) => {
    setFreightType(type);
    setFormData({
      ...formData,
      weight: "",
      length: "",
      width: "",
      height: "",
      cbm: "",
    });
    setErrors({});
    setVolumetricWeight(null);
    setCalculationResult(null);
  };

  const handleCountrySelect = (country: CountryName) => {
    setSelectedCountry(country);
    setCalculationResult(null);
  };

  const calculateCost = () => {
    if (!freightType || !selectedCountry) return;

    try {
      if (freightType === "air") {
        const weight = parseFloat(formData.weight);
        if (isNaN(weight) || weight <= 0) return;
      }

      if (freightType === "sea") {
        const cbm = parseFloat(formData.cbm);
        if (isNaN(cbm) || cbm <= 0) return;
      }

      const result = calculateFreightCost(
        freightType,
        selectedCountry,
        parseFloat(formData.weight),
        parseFloat(formData.cbm)
      );

      setCalculationResult(result);
    } catch (error) {
      console.error(error);
      setCalculationResult(null);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    if (
      (id === "weight" ||
        id === "length" ||
        id === "width" ||
        id === "height") &&
      freightType === "air"
    ) {
      const weight =
        id === "weight" ? parseFloat(value) : parseFloat(formData.weight);
      const length =
        id === "length" ? parseFloat(value) : parseFloat(formData.length);
      const width =
        id === "width" ? parseFloat(value) : parseFloat(formData.width);
      const height =
        id === "height" ? parseFloat(value) : parseFloat(formData.height);

      if (!isNaN(length) && !isNaN(width) && !isNaN(height)) {
        const vw = (length * width * height) / 5000; // Volumetric divisor
        setVolumetricWeight(vw);
      }
    }

    const newFormData = { ...formData, [id]: value };
    setFormData(newFormData);

    // Calculate cost immediately when relevant fields change
    if (id === "weight" || id === "cbm") {
      setTimeout(calculateCost, 100); // Small delay to ensure state is updated
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!freightType || !selectedCountry) {
      alert("Please select both freight type and country.");
      return;
    }

    let newErrors: Record<string, string> = {};
    let isValid = true;

    if (freightType === "air") {
      const weight = parseFloat(formData.weight);
      const length = parseFloat(formData.length);
      const width = parseFloat(formData.width);
      const height = parseFloat(formData.height);

      if (isNaN(weight) || weight <= 0) {
        newErrors.weight = "Weight must be greater than 0.";
        isValid = false;
      }

      if (isNaN(length) || isNaN(width) || isNaN(height)) {
        newErrors.dimensions = "All dimensions are required.";
        isValid = false;
      }
    }

    if (freightType === "sea") {
      const cbm = parseFloat(formData.cbm);
      if (isNaN(cbm) || cbm <= 0) {
        newErrors.cbm = "CBM must be greater than 0.";
        isValid = false;
      }
    }

    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const email = formData.email.trim();

    if (!name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    if (!phone) {
      newErrors.phone = "Phone is required.";
      isValid = false;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Valid email is required.";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      // Calculate final cost for email
      const result = calculateFreightCost(
        freightType,
        selectedCountry,
        parseFloat(formData.weight),
        parseFloat(formData.cbm)
      );

      // Prepare email data
      const emailData = {
        to: "sales@rollingcargo.co.ke",
        subject: `Freight Quote Request - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
              New Freight Quote Request
            </h2>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Customer Information:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email}</p>
            </div>
            
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Shipment Details:</h3>
              <p><strong>Freight Type:</strong> ${freightType.toUpperCase()}</p>
              <p><strong>Destination:</strong> ${selectedCountry}</p>
              ${
                freightType === "air"
                  ? `
                <p><strong>Weight:</strong> ${formData.weight} kg</p>
                <p><strong>Dimensions:</strong> ${formData.length} x ${
                      formData.width
                    } x ${formData.height} cm</p>
                ${
                  volumetricWeight
                    ? `<p><strong>Volumetric Weight:</strong> ${volumetricWeight.toFixed(
                        2
                      )} kg</p>`
                    : ""
                }
              `
                  : `
                <p><strong>CBM:</strong> ${formData.cbm}</p>
              `
              }
            </div>
            
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Calculated Costs:</h3>
              <p><strong>Freight Cost:</strong> ${
                result.symbol
              }${result.freightCost.toFixed(2)}</p>
              <p><strong>Handling Fee:</strong> ${
                result.symbol
              }${result.handlingFee.toFixed(2)}</p>
              <p style="font-size: 18px; color: #059669;"><strong>Total Cost:</strong> ${
                result.symbol
              }${result.totalCost.toFixed(2)}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
              <p>This quote is automatically generated from rollingcargo.co.ke</p>
              <p>Please contact the customer for further details and confirmation.</p>
            </div>
          </div>
        `,
      };

      // Send email using the API route
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      const responseData = await response.json();

      if (response.ok && responseData.success) {
        alert(
          "Thank you! Your freight quote request has been submitted successfully. We'll contact you soon."
        );
        // Reset form
        setFormData({
          weight: "",
          length: "",
          width: "",
          height: "",
          cbm: "",
          name: "",
          phone: "",
          email: "",
        });
        setVolumetricWeight(null);
        setCalculationResult(null);
      } else {
        throw new Error(responseData.error || "Failed to send email");
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      // Enhanced fallback: create mailto link
      const subject = encodeURIComponent(`Freight Quote Request - ${name}`);
      const body = encodeURIComponent(`
Customer Information:
Name: ${name}
Phone: ${phone}
Email: ${email}

Shipment Details:
Freight Type: ${freightType.toUpperCase()}
Destination: ${selectedCountry}
${
  freightType === "air"
    ? `
Weight: ${formData.weight} kg
Dimensions: ${formData.length} x ${formData.width} x ${formData.height} cm
${
  volumetricWeight ? `Volumetric Weight: ${volumetricWeight.toFixed(2)} kg` : ""
}
`
    : `
CBM: ${formData.cbm}
`
}

Calculated Costs:
Freight Cost: ${
        calculationResult?.symbol
      }${calculationResult?.freightCost.toFixed(2)}
Handling Fee: ${
        calculationResult?.symbol
      }${calculationResult?.handlingFee.toFixed(2)}
Total Cost: ${calculationResult?.symbol}${calculationResult?.totalCost.toFixed(
        2
      )}

---
Generated from rollingcargo.co.ke
      `);

      const mailtoLink = `mailto:sales@rollingcargo.co.ke?subject=${subject}&body=${body}`;
      window.open(mailtoLink, "_blank");

      alert(
        "There was an issue sending the email automatically. Your email client has been opened with the quote details. Please send the email to complete your request."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Freight Cost Calculator</h2>

      <FreightTypeSelector
        selectedType={freightType}
        onSelect={handleFreightTypeSelect}
      />

      {freightType && (
        <CountrySelector
          freightType={freightType}
          selectedCountry={selectedCountry}
          onSelect={handleCountrySelect}
        />
      )}

      {freightType && selectedCountry && (
        <>
          <FreightForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
            freightType={freightType}
            selectedCountry={selectedCountry}
            volumetricWeight={volumetricWeight}
            isSubmitting={isSubmitting}
          />

          {calculationResult && (
            <CalculationResults
              freightType={freightType}
              country={selectedCountry}
              freightCost={calculationResult.freightCost}
              handlingFee={calculationResult.handlingFee}
              totalCost={calculationResult.totalCost}
              currency={calculationResult.currency}
              symbol={calculationResult.symbol}
            />
          )}
        </>
      )}
    </div>
  );
};

export default FreightSection;
