import { SubmitHandler } from "react-hook-form";

export interface FormInputs {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

export interface Office {
  name: string;
  phone: string;
  email: string;
  address: string;
  chineseName?: string;
  chinesePhone?: string;
  chineseAddress?: string;
}

export interface ContactFormProps {
  onSubmit: SubmitHandler<FormInputs>;
  isSubmitting: boolean;
  submitStatus: "success" | "error" | null;
}

export interface OfficeInfoProps {
  office: Office;
  index: number;
}
