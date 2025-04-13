
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SortSelectorProps {
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const SortSelector: React.FC<SortSelectorProps> = ({ sortBy, setSortBy }) => {
  return (
    <Select value={sortBy} onValueChange={setSortBy}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="relevance">Sort by: Relevance</SelectItem>
        <SelectItem value="name_asc">Name (A-Z)</SelectItem>
        <SelectItem value="name_desc">Name (Z-A)</SelectItem>
        <SelectItem value="recent">Most Recent</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortSelector;
