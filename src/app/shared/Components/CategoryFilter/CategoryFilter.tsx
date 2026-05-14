import React from "react";
import { Category } from "@/types/gallery.types";
import { motion } from "framer-motion";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: (id: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.1, delayChildren: 0.3 },
        },
      }}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap justify-center lg:justify-start gap-3"
    >
      {categories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedCategory(category.id)}
          className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border-2 ${
            selectedCategory === category.id
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
              : "bg-white/70 text-gray-700 hover:bg-white hover:text-blue-600 border-gray-200/50 hover:border-blue-300 backdrop-blur-sm shadow-md hover:shadow-lg"
          }`}
        >
          {category.name}
          <span
            className={`ml-2 text-xs px-2 py-1 rounded-full ${
              selectedCategory === category.id ? "bg-white/20" : "bg-gray-100"
            }`}
          >
            {category.count}
          </span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default CategoryFilter;
