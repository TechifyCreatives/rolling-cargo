// src/types/feright.types.ts

export type FreightType = "air" | "sea";

export type CountryName =
  | "UK"
  | "China"
  | "Turkey"
  | "Netherlands"
  | "Italy"
  | "South Africa"
  | "Dubai";

export interface CurrencyInfo {
  code: string;
  symbol: string;
  rate: number;
}

// Sea Freight Rate Type — allows flat rate or object with optional small/large
export type SeaFreightRate =
  | number
  | { regular: number; small?: number; large?: number };

export interface FreightFormData {
  weight?: string;
  length?: string;
  width?: string;
  height?: string;
  cbm?: string;
  name?: string;
  phone?: string;
  email?: string;
}

export interface FreightFormProps {
  formData: FreightFormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
  errors: Record<string, string>;
  freightType: FreightType | null;
  selectedCountry: CountryName | null;
  volumetricWeight: number | null;
  isSubmitting?: boolean;
}

export interface CalculationResultsProps {
  freightType: FreightType;
  country: CountryName;
  freightCost: number;
  handlingFee: number;
  totalCost: number;
  currency: string;
  symbol: string;
}

export interface CountrySelectorProps {
  freightType: FreightType | null;
  selectedCountry: CountryName | null;
  onSelect: (country: CountryName) => void;
}

export interface FreightTypeSelectorProps {
  selectedType: FreightType | null;
  onSelect: (type: FreightType) => void;
}
