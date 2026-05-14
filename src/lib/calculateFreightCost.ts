// src/lib/calculateFreightCost.ts

import { airFreightRates, seaFreightRates, handlingFees } from "@/data/data";
import { CountryName, SeaFreightRate } from "@/types/feright.types";

type FreightType = "air" | "sea";

export interface CalculationResult {
  freightCost: number;
  handlingFee: number;
  totalCost: number;
  currency: string;
  symbol: string;
}

export function calculateFreightCost(
  type: FreightType,
  country: CountryName,
  weight?: number,
  cbm?: number
): CalculationResult {
  let freightCost = 0;
  let handlingFee = 0;
  let currency = "USD";
  let symbol = "$";

  if (type === "air") {
    const rateData = airFreightRates[country];
    if (!rateData) throw new Error(`No air rate found for ${country}`);

    const { baseRate, minimumRate, currency: rateCurrency } = rateData;
    if (!weight) throw new Error("Weight is required for air freight");

    // Set currency based on country
    if (rateCurrency === "GBP") {
      currency = "GBP";
      symbol = "£";
    } else {
      currency = "USD";
      symbol = "$";
    }

    freightCost = weight * baseRate;

    // Apply minimum rate if weight <= 1kg
    if (minimumRate && weight <= 1) {
      freightCost = minimumRate;
    }

    // Get handling fee
    const handlingData = handlingFees[country];
    if (handlingData?.air) {
      handlingFee = handlingData.air;
      // Use handling fee currency if specified
      if (handlingData.airCurrency === "GBP") {
        currency = "GBP";
        symbol = "£";
      }
    }
  }

  if (type === "sea") {
    const rateData = seaFreightRates[country] as SeaFreightRate & {
      currency?: string;
    };
    if (!rateData) throw new Error(`No sea rate found for ${country}`);

    // Set currency based on rate data
    if (rateData.currency === "KSH") {
      currency = "KSH";
      symbol = "KSH ";
    } else if (rateData.currency === "GBP") {
      currency = "GBP";
      symbol = "£";
    } else {
      currency = "USD";
      symbol = "$";
    }

    if (typeof rateData === "number") {
      // Simple per CBM rate
      freightCost = (cbm || 0) * rateData;
    } else {
      const { regular, small, large } = rateData;

      if (small && cbm && cbm <= 0.2) {
        freightCost = small;
      } else if (large && cbm && cbm > 10) {
        freightCost = large;
      } else {
        freightCost = (cbm || 0) * regular;
      }
    }

    // Get handling fee
    const handlingData = handlingFees[country];
    if (handlingData?.sea) {
      handlingFee = handlingData.sea;
      // Keep the freight currency for sea freight unless handling fee specifies different currency
      if (handlingData.seaCurrency === "GBP" && rateData.currency !== "KSH") {
        currency = "GBP";
        symbol = "£";
      }
    }
  }

  const totalCost = freightCost + handlingFee;

  return {
    freightCost,
    handlingFee,
    totalCost,
    currency,
    symbol,
  };
}
