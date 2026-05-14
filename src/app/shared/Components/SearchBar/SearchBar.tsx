import React from "react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search images by title, description, or tags..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-16 pr-6 py-5 text-lg border-2 border-gray-200/50 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white/70 backdrop-blur-sm shadow-xl transition-all duration-300 placeholder:text-gray-500"
        />
      </div>
    </div>
  );
};

export default SearchBar;
