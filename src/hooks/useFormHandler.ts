// hooks/useFormHandler.ts
import { ContactFormData } from "@/types/hero.types";
import { useState, useCallback } from "react"; // Adjust path as needed

interface FormStatus {
  message: string;
  type: "success" | "error" | null;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  shippingMode?: string;
  weight?: string;
  volumetricWeight?: string;
  cbm?: string;
}

export const useFormHandler = () => {
  const initialFormData: ContactFormData = {
    name: "",
    email: "",
    phone: "",
    shippingMode: "",
    weight: "",
    volumetricWeight: "",
    cbm: "",
    message: "",
  };

  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({
    message: "",
    type: null,
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.shippingMode)
      newErrors.shippingMode = "Select a shipping mode.";

    // Optional numeric fields validation
    if (formData.weight && isNaN(+formData.weight))
      newErrors.weight = "Must be a valid number.";
    if (formData.volumetricWeight && isNaN(+formData.volumetricWeight))
      newErrors.volumetricWeight = "Must be a valid number.";
    if (formData.cbm && isNaN(+formData.cbm))
      newErrors.cbm = "Must be a valid number.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange =
    (field: keyof ContactFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });

      // Clear error when user types
      if (errors[field as keyof ContactFormErrors]) {
        setErrors({
          ...errors,
          [field]: undefined,
        });
      }
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setFormStatus({ message: "", type: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || result.error) {
        throw new Error(result.message || "Something went wrong.");
      }

      setFormStatus({
        message: "Your request has been submitted successfully!",
        type: "success",
      });
      setFormData(initialFormData); // Reset form
    } catch (err: any) {
      setFormStatus({
        message: err.message || "Failed to send request.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    formStatus,
    handleInputChange,
    handleSubmit,
    errors, // Make sure this line exists!
    setFormStatus,
  };
};
