import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { currencyMap } from "@/data/data";
import { CountryName } from "@/types/feright.types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrencySymbol(
  country: CountryName,
  freightType: "air" | "sea"
): string {
  return currencyMap[country]?.symbol ?? "$";
}
