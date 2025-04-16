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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    <div
      className="min-h-screen flex flex-col bg-gradient-to-br from-[#f5f7fa] via-[#c3cfe2] to-[#e0eafc] dark:from-[#181c24] dark:via-[#232946] dark:to-[#1a1a2e] transition-colors duration-700"
      style={{ transition: "background 0.7s cubic-bezier(.4,0,.2,1)" }}
    >
      <main
        className={`flex-grow py-16 transition-opacity duration-700 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6">
          <div className="mb-10 rounded-3xl shadow-2xl bg-white/90 dark:bg-gradient-to-br dark:from-[#232946]/90 dark:to-[#181c24]/90 p-10 transition-colors duration-700 border border-[#e0eafc] dark:border-[#232946] backdrop-blur-lg">
            <h1 className="text-5xl font-black tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#7f53ac] via-[#647dee] to-[#43e97b] dark:from-[#a18fff] dark:via-[#ffb6b9] dark:to-[#43e97b] drop-shadow-lg">
              Discover Professionals
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-light">
              Connect with professionals who match your interests and career path.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 rounded-2xl bg-white/80 dark:bg-[#232946]/80 shadow-xl p-7 transition-all duration-500 border border-[#e0eafc] dark:border-[#232946] backdrop-blur-md">
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
          </div>

          {/* Results */}
          <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">
              Showing{" "}
              <span className="font-extrabold text-[#7f53ac] dark:text-[#a18fff] animate-pulse">
                {filteredProfiles.length}
              </span>{" "}
              results
            </p>
            <SortSelector sortBy={sortBy} setSortBy={setSortBy} />
          </div>

          {/* Grid of Profile Cards */}
          <div
            className="transition-all w-full duration-500"
            style={{
              animation: mounted
                ? "fadeInUp 0.8s cubic-bezier(.4,0,.2,1)"
                : "none",
            }}
          >
            <ProfileGrid
              profiles={filteredProfiles}
              clearFilters={clearFilters}
            />
          </div>
        </div>
      </main>
      <Footer />
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          /* Adjust card styling to take available space */
          .profile-card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            transition: box-shadow 0.3s cubic-bezier(.4,0,.2,1), transform 0.25s cubic-bezier(.4,0,.2,1), background 0.3s;
          }
          .profile-card:hover {
            box-shadow: 0 8px 32px 0 rgba(127,83,172,0.18), 0 1.5px 6px 0 rgba(100,125,222,0.12);
            transform: translateY(-6px) scale(1.025);
            background: linear-gradient(120deg, #f8fafc 80%, #e0eafc 100%);
          }
          .dark .profile-card:hover {
            background: linear-gradient(120deg, #232946 80%, #181c24 100%);
            box-shadow: 0 8px 32px 0 rgba(161,143,255,0.18), 0 1.5px 6px 0 rgba(255,182,185,0.12);
          }
          /* Subtle card hover animation */
          .profile-card {
            transition: box-shadow 0.3s cubic-bezier(.4,0,.2,1), transform 0.25s cubic-bezier(.4,0,.2,1), background 0.3s;
          }
          .profile-card:hover {
            box-shadow: 0 8px 32px 0 rgba(127,83,172,0.18), 0 1.5px 6px 0 rgba(100,125,222,0.12);
            transform: translateY(-6px) scale(1.025);
            background: linear-gradient(120deg, #f8fafc 80%, #e0eafc 100%);
          }
          .dark .profile-card:hover {
            background: linear-gradient(120deg, #232946 80%, #181c24 100%);
            box-shadow: 0 8px 32px 0 rgba(161,143,255,0.18), 0 1.5px 6px 0 rgba(255,182,185,0.12);
          }
          /* Animate filter controls */
          .filter-control {
            transition: background 0.3s, border 0.3s, box-shadow 0.3s;
          }
          .filter-control:focus-within, .filter-control:hover {
            background: #f0fdfa;
            border-color: #7f53ac;
            box-shadow: 0 0 0 2px #7f53ac33;
          }
          .dark .filter-control:focus-within, .dark .filter-control:hover {
            background: #232946;
            border-color: #a18fff;
            box-shadow: 0 0 0 2px #a18fff33;
          }
          /* Minimal rounded for all cards and containers */
          .rounded-3xl, .rounded-2xl, .profile-card {
            border-radius: 2rem !important;
          }
        `}
      </style>
    </div>
  );
};

export default Profiles;
