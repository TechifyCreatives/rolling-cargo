import { ContactFormData } from "@/types/hero.types";

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

const validateNumber = (value: string, min = 0): boolean => {
  const num = parseFloat(value);
  return !isNaN(num) && num > min;
};

export const validateContactForm = (
  formData: ContactFormData
): { errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required";
  } else if (formData.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!validatePhone(formData.phone)) {
    errors.phone = "Please enter a valid phone number";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!formData.weight) {
    errors.weight = "Weight is required";
  } else if (!validateNumber(formData.weight)) {
    errors.weight = "Weight must be a positive number";
  }

  if (!formData.volumetricWeight) {
    errors.volumetricWeight = "Volumetric weight is required";
  } else if (!validateNumber(formData.volumetricWeight)) {
    errors.volumetricWeight = "Volumetric weight must be a positive number";
  }

  if (!formData.cbm) {
    errors.cbm = "CBM is required";
  } else if (!validateNumber(formData.cbm)) {
    errors.cbm = "CBM must be a positive number";
  }

  return { errors };
};
