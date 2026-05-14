import { LucideIcon } from "lucide-react";
import React from "react";

export interface SolutionItem {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

export interface SolutionCardProps {
  item: {
    icon: LucideIcon;
    title: string;
    description: string;
    link: string;
  };
}
