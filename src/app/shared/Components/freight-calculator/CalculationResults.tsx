// src/components/CalculationResults.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import { formatCurrency } from "@/lib/freightUtils";

interface Props {
  freightType: "air" | "sea";
  country: string;
  freightCost: number;
  handlingFee: number;
  totalCost: number;
  currency: string;
  symbol: string;
}

const CalculationResults: React.FC<Props> = ({
  freightType,
  country,
  freightCost,
  handlingFee,
  totalCost,
  currency,
  symbol,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
    >
      <div className="p-4 bg-gray-100 rounded-md text-center">
        <label className="block mb-1 text-sm text-gray-600">
          Freight Cost ({symbol.trim()})
        </label>
        <p className="text-lg font-bold">
          {formatCurrency(freightCost, symbol)}
        </p>
      </div>

      <div className="p-4 bg-gray-100 rounded-md text-center">
        <label className="block mb-1 text-sm text-gray-600">
          Handling Fee ({symbol.trim()})
        </label>
        <p className="text-lg font-bold">
          {formatCurrency(handlingFee, symbol)}
        </p>
      </div>

      <div className="p-4 bg-blue-100 rounded-md text-center">
        <label className="block mb-1 text-sm text-gray-600">
          Total Cost ({symbol.trim()})
        </label>
        <p className="text-xl font-bold">{formatCurrency(totalCost, symbol)}</p>
      </div>
    </motion.div>
  );
};

export default CalculationResults;
