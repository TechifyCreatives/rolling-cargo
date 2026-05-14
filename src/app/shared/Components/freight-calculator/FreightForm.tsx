// src/components/FreightForm.tsx

"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FreightFormProps } from "@/types/feright.types";

const FreightForm: React.FC<FreightFormProps> = ({
  formData,
  handleChange,
  handleSubmit,
  errors,
  freightType,
  selectedCountry,
  volumetricWeight,
  isSubmitting = false,
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Air Freight Fields */}
      {freightType === "air" && (
        <>
          <div>
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              type="number"
              step="0.01"
              min="0"
              value={formData.weight}
              onChange={handleChange}
              placeholder="Enter weight in kg"
            />
            {errors.weight && (
              <p className="text-red-500 text-sm">{errors.weight}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="length">Length (cm)</Label>
              <Input
                id="length"
                type="number"
                step="0.01"
                min="0"
                value={formData.length}
                onChange={handleChange}
                placeholder="Length"
              />
              {errors.length && (
                <p className="text-red-500 text-sm">{errors.length}</p>
              )}
            </div>
            <div>
              <Label htmlFor="width">Width (cm)</Label>
              <Input
                id="width"
                type="number"
                step="0.01"
                min="0"
                value={formData.width}
                onChange={handleChange}
                placeholder="Width"
              />
              {errors.width && (
                <p className="text-red-500 text-sm">{errors.width}</p>
              )}
            </div>
            <div>
              <Label htmlFor="height">Height (cm)</Label>
              <Input
                id="height"
                type="number"
                step="0.01"
                min="0"
                value={formData.height}
                onChange={handleChange}
                placeholder="Height"
              />
              {errors.height && (
                <p className="text-red-500 text-sm">{errors.height}</p>
              )}
            </div>
          </div>

          {errors.dimensions && (
            <p className="text-red-500 text-sm">{errors.dimensions}</p>
          )}

          {volumetricWeight !== null && (
            <div>
              <Label>Volumetric Weight (kg)</Label>
              <Input value={volumetricWeight.toFixed(2)} readOnly />
            </div>
          )}
        </>
      )}

      {/* Sea Freight Field */}
      {freightType === "sea" && (
        <div>
          <Label htmlFor="cbm">CBM (Cubic Meters)</Label>
          <Input
            id="cbm"
            type="number"
            step="0.01"
            min="0"
            value={formData.cbm}
            onChange={handleChange}
            placeholder="Enter CBM"
          />
          {errors.cbm && <p className="text-red-500 text-sm">{errors.cbm}</p>}
        </div>
      )}

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Talk to us"}
      </Button>
    </form>
  );
};

export default FreightForm;
