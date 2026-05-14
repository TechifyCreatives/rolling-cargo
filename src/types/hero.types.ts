export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  shippingMode: string;
  weight: string;
  volumetricWeight: string;
  cbm: string;
  message: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface FormStatus {
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
