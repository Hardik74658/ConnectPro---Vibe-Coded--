
import React from "react";
import SearchBar from "./SearchBar";
import LocationFilter from "./LocationFilter";
import SkillsFilter from "./SkillsFilter";
import ActiveFilters from "./ActiveFilters";

interface SearchAndFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  location: string;
  setLocation: (location: string) => void;
  removeSkill: (skill: string) => void;
  clearFilters: () => void;
  isFiltering: boolean;
  allSkills: string[];
  allLocations: string[];
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  searchQuery,
  setSearchQuery,
  selectedSkills,
  toggleSkill,
  location,
  setLocation,
  removeSkill,
  clearFilters,
  isFiltering,
  allSkills,
  allLocations,
}) => {
  return (
    <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row gap-4">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <LocationFilter 
          location={location} 
          setLocation={setLocation} 
          allLocations={allLocations} 
        />
        <SkillsFilter 
          selectedSkills={selectedSkills} 
          toggleSkill={toggleSkill} 
          allSkills={allSkills} 
        />
      </div>

      <ActiveFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        location={location}
        setLocation={setLocation}
        selectedSkills={selectedSkills}
        removeSkill={removeSkill}
        clearFilters={clearFilters}
        isFiltering={isFiltering}
      />
    </div>
  );
};

export default SearchAndFilter;
