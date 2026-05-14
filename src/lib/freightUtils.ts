// src/lib/utils.ts

import { CountryName } from "@/types/feright.types";
import { airFreightRates, seaFreightRates, handlingFees } from "@/data/data";

export function getCurrencySymbol(
  country: CountryName,
  freightType: "air" | "sea"
): string {
  if (freightType === "air") {
    const rateData = airFreightRates[country];
    if (rateData?.currency === "GBP") {
      return "£";
    }
    return "$";
  }

  if (freightType === "sea") {
    const rateData = seaFreightRates[country] as any;
    if (rateData?.currency === "KSH") {
      return "KSH ";
    }
    if (rateData?.currency === "GBP") {
      return "£";
    }
    return "$";
  }

  return "$";
}

// Additional utility functions can be added here
export function formatCurrency(amount: number, symbol: string): string {
  if (symbol === "KSH ") {
    return `${symbol}${amount.toLocaleString()}`;
  }
  return `${symbol}${amount.toFixed(2)}`;
}
