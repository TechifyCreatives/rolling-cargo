"use client";

import React, { useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, X } from "lucide-react";
import { motion } from "framer-motion";
import { useFormHandler } from "@/hooks/useFormHandler";

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const {
    formData,
    isSubmitting,
    formStatus,
    handleInputChange,
    handleSubmit,
    errors, // Make sure 'errors' is returned from useFormHandler
  } = useFormHandler();

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-lg w-full p-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-xl"
        >
          <DialogHeader className="p-6 border-b bg-muted/40 flex flex-row items-center justify-between">
            <DialogTitle className="text-xl font-semibold">
              Request Quote
            </DialogTitle>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Close form"
            >
              <X className="h-5 w-5" />
            </button>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="p-6 space-y-5" noValidate>
            {/* Status Message */}
            {formStatus.message && (
              <div
                className={`p-3 text-sm rounded-md ${
                  formStatus.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
                role="alert"
              >
                {formStatus.message}
              </div>
            )}

            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={handleInputChange("name")}
                placeholder="Enter your full name"
                disabled={isSubmitting}
                aria-invalid={!!errors?.name}
                aria-describedby={errors?.name ? "name-error" : undefined}
              />
              {errors?.name && (
                <p id="name-error" className="text-sm text-destructive">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange("phone")}
                placeholder="e.g., +254 700 000 000"
                disabled={isSubmitting}
                aria-invalid={!!errors?.phone}
                aria-describedby={errors?.phone ? "phone-error" : undefined}
              />
              {errors?.phone && (
                <p id="phone-error" className="text-sm text-destructive">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange("email")}
                placeholder="your.email@example.com"
                disabled={isSubmitting}
                aria-invalid={!!errors?.email}
                aria-describedby={errors?.email ? "email-error" : undefined}
              />
              {errors?.email && (
                <p id="email-error" className="text-sm text-destructive">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Shipping Mode */}
            <div className="space-y-2">
              <Label htmlFor="shippingMode">Shipping Mode</Label>
              <Select
                value={formData.shippingMode}
                onValueChange={useCallback(
                  (value: string) =>
                    handleInputChange("shippingMode")({
                      target: { value },
                    } as any),
                  [handleInputChange]
                )}
              >
                <SelectTrigger
                  id="shippingMode"
                  disabled={isSubmitting}
                  aria-invalid={!!errors?.shippingMode}
                >
                  <SelectValue placeholder="Select shipping mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="air">Air Shipment</SelectItem>
                  <SelectItem value="sea">Sea Shipment</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Weight */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.weight}
                  onChange={handleInputChange("weight")}
                  placeholder="Weight"
                  disabled={isSubmitting}
                  aria-invalid={!!errors?.weight}
                  aria-describedby={errors?.weight ? "weight-error" : undefined}
                />
                {errors?.weight && (
                  <p id="weight-error" className="text-sm text-destructive">
                    {errors.weight}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="volumetricWeight">Volumetric Weight</Label>
                <Input
                  id="volumetricWeight"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.volumetricWeight}
                  onChange={handleInputChange("volumetricWeight")}
                  placeholder="Vol. Weight"
                  disabled={isSubmitting}
                  aria-invalid={!!errors?.volumetricWeight}
                  aria-describedby={
                    errors?.volumetricWeight ? "volumetric-error" : undefined
                  }
                />
                {errors?.volumetricWeight && (
                  <p id="volumetric-error" className="text-sm text-destructive">
                    {errors.volumetricWeight}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="cbm">CBM (Cubic Meters)</Label>
                <Input
                  id="cbm"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.cbm}
                  onChange={handleInputChange("cbm")}
                  placeholder="CBM"
                  disabled={isSubmitting}
                  aria-invalid={!!errors?.cbm}
                  aria-describedby={errors?.cbm ? "cbm-error" : undefined}
                />
                {errors?.cbm && (
                  <p id="cbm-error" className="text-sm text-destructive">
                    {errors.cbm}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">Additional Message</Label>
              <Textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange("message")}
                placeholder="Any additional information about your shipment..."
                disabled={isSubmitting}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Quote Request"
              )}
            </Button>
          </form>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
