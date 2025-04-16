import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div
      className="
        flex items-center relative w-full max-w-xl mx-auto
        bg-white dark:bg-[#18181b]
        rounded-2xl shadow-md dark:shadow-lg
        transition-all duration-300
        border border-transparent dark:border-[#23232a]
        focus-within:border-[#7c3aed] focus-within:shadow-lg
      "
      style={{
        minHeight: "48px",
        padding: "0.25rem 1rem",
      }}
    >
      <div
        className="
          flex items-center justify-center
          transition-colors duration-200
          text-[#7c3aed] dark:text-[#a78bfa]
          hover:text-[#5b21b6] dark:hover:text-[#c4b5fd]
          mr-2
        "
        style={{
          minWidth: "32px",
        }}
      >
        <Search className="h-5 w-5" />
      </div>
      <Input
        type="text"
        placeholder="Search by name, title, or company..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="
          w-full bg-transparent outline-none border-none
          pl-0 pr-2 h-10 text-base
          text-gray-800 dark:text-gray-100
          placeholder:text-gray-400 dark:placeholder:text-gray-500
          rounded-2xl
          transition-all duration-300
          focus:ring-0 focus:outline-none
        "
        style={{
          boxShadow: "none",
        }}
        aria-label="Search profiles"
      />
    </div>
  );
};

export default SearchBar;
