import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex relative w-[600px]">
      <div className="relative top-2 left-7">
        <Search className="h-5 w-5 text-gray-500" />
      </div>
      <Input
        type="text"
        placeholder="Search by name, title, or company..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-9 h-10 text-sm border"
      />
    </div>
  );
};

export default SearchBar;
