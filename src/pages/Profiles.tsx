import React, { useState, useEffect } from "react";
import Footer from "@/components/layout/Footer";
import { mockProfiles, Profile } from "@/utils/mockData";
import SearchAndFilter from "@/components/profiles/SearchAndFilter";
import ProfileGrid from "@/components/profiles/ProfileGrid";
import SortSelector from "@/components/profiles/SortSelector";

const Profiles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [location, setLocation] = useState("all");
  const [filteredProfiles, setFilteredProfiles] = useState<Profile[]>(mockProfiles);
  const [isFiltering, setIsFiltering] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");


  // Extract all unique skills from profiles
  const allSkills = Array.from(
    new Set(mockProfiles.flatMap((profile) => profile.skills))
  ).sort();

  // Extract all unique locations from profiles
  const allLocations = Array.from(
    new Set(mockProfiles.map((profile) => profile.location))
  ).sort();

  // Handle filtering profiles
  useEffect(() => {
    const filtered = mockProfiles.filter((profile) => {
      // Check if the profile matches the search query
      const matchesQuery =
        searchQuery === "" ||
        profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.company.toLowerCase().includes(searchQuery.toLowerCase());

      // Check if the profile has all the selected skills
      const matchesSkills =
        selectedSkills.length === 0 ||
        selectedSkills.every((skill) => profile.skills.includes(skill));

      // Check if the profile matches the selected location
      const matchesLocation =
        location === "all" || profile.location === location;

      return matchesQuery && matchesSkills && matchesLocation;
    });

    setFilteredProfiles(filtered);
    setIsFiltering(
      searchQuery !== "" || selectedSkills.length > 0 || location !== "all"
    );
  }, [searchQuery, selectedSkills, location]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedSkills([]);
    setLocation("all");
  };

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const removeSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Discover Professionals</h1>
            <p className="mt-2 text-gray-600">
              Connect with professionals who match your interests and career path
            </p>
          </div>

 
          {/* Search and Filters */}
          <SearchAndFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedSkills={selectedSkills}
            toggleSkill={toggleSkill}
            location={location}
            setLocation={setLocation}
            removeSkill={removeSkill}
            clearFilters={clearFilters}
            isFiltering={isFiltering}
            allSkills={allSkills}
            allLocations={allLocations}
          />

          {/* Results */}
          <div className="mb-4 flex justify-between items-center">
            <p className="text-gray-600">
              Showing <span className="font-medium">{filteredProfiles.length}</span> results
            </p>
            <SortSelector sortBy={sortBy} setSortBy={setSortBy} />
          </div>

          {/* Grid of Profile Cards */}
          <ProfileGrid 
            profiles={filteredProfiles} 
            clearFilters={clearFilters} 
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profiles;
