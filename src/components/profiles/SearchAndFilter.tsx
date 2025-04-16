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
    <div
      className={`
        mb-8 
        p-6 
        rounded-3xl 
        shadow-lg 
        bg-white/70 
        dark:bg-gradient-to-br dark:from-[#181824]/90 dark:to-[#23243a]/90
        backdrop-blur-md
        transition-all duration-500
        border border-gray-100 dark:border-gray-800
        hover:shadow-2xl
        group
      `}
      style={{
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
        border: "1px solid rgba(255,255,255,0.18)",
      }}
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 transition-all duration-500">
        <div className="flex-1 transition-transform duration-500 group-hover:scale-[1.03]">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        <div className="flex-1 transition-transform duration-500 group-hover:scale-[1.03]">
          <LocationFilter 
            location={location} 
            setLocation={setLocation} 
            allLocations={allLocations} 
          />
        </div>
        <div className="flex-1 transition-transform duration-500 group-hover:scale-[1.03]">
          <SkillsFilter 
            selectedSkills={selectedSkills} 
            toggleSkill={toggleSkill} 
            allSkills={allSkills} 
          />
        </div>
      </div>

      <div className="mt-4 animate-fade-in-up">
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
    </div>
  );
};

export default SearchAndFilter;

// Add the following to your global CSS (e.g., index.css or tailwind.css):
/*
@layer utilities {
  .animate-fade-in-up {
    animation: fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1);
  }
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(16px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
*/

// For best results, update your theme colors in tailwind.config.js to include a vibrant accent (e.g., accent: '#7f5af0') and use it in child components.
