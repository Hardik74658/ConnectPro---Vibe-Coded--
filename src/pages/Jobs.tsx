import React, { useState, useEffect } from "react";
import Footer from "@/components/layout/Footer";
import JobCard from "@/components/ui/JobCard";
import { mockJobs, Job } from "@/utils/mockData";
import { Search, Filter, X, Briefcase } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useTheme } from '@/context/ThemeContext';

const Jobs = () => {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [location, setLocation] = useState("");
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(mockJobs);
  const [isFiltering, setIsFiltering] = useState(false);
  const [sortBy, setSortBy] = useState("recent");

  // Extract all unique skills from jobs
  const allSkills = Array.from(
    new Set(mockJobs.flatMap((job) => job.skills))
  ).sort();

  // Extract all unique locations from jobs
  const allLocations = Array.from(
    new Set(mockJobs.map((job) => job.location))
  ).sort();

  // Extract all unique job types from jobs
  const jobTypes = Array.from(
    new Set(mockJobs.map((job) => job.type))
  ).sort();

  // Handle filtering jobs
  useEffect(() => {
    const filtered = mockJobs.filter((job) => {
      // Check if the job matches the search query
      const matchesQuery =
        searchQuery === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Check if the job matches the selected job types
      const matchesJobTypes =
        selectedJobTypes.length === 0 ||
        selectedJobTypes.includes(job.type);

      // Check if the job has at least one of the selected skills
      const matchesSkills =
        selectedSkills.length === 0 ||
        job.skills.some((skill) => selectedSkills.includes(skill));

      // Check if the job matches the selected location
      const matchesLocation =
        location === "" || job.location === location;

      // Check if the job is remote if remoteOnly is selected
      const matchesRemote = !remoteOnly || job.remote;

      return (
        matchesQuery &&
        matchesJobTypes &&
        matchesSkills &&
        matchesLocation &&
        matchesRemote
      );
    });

    setFilteredJobs(filtered);
    setIsFiltering(
      searchQuery !== "" ||
      selectedJobTypes.length > 0 ||
      selectedSkills.length > 0 ||
      location !== "" ||
      remoteOnly
    );
  }, [searchQuery, selectedJobTypes, selectedSkills, location, remoteOnly]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedJobTypes([]);
    setSelectedSkills([]);
    setLocation("");
    setRemoteOnly(false);
  };

  const toggleJobType = (type: string) => {
    if (selectedJobTypes.includes(type)) {
      setSelectedJobTypes(selectedJobTypes.filter((t) => t !== type));
    } else {
      setSelectedJobTypes([...selectedJobTypes, type]);
    }
  };

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const removeJobType = (type: string) => {
    setSelectedJobTypes(selectedJobTypes.filter((t) => t !== type));
  };

  const removeSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  return (
    <div className={theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}>
      <div className="w-full">

        <main className="flex-grow py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Find Your Next Opportunity</h1>
              <p className="mt-2 text-gray-600">
                Browse through our curated list of job opportunities
              </p>
            </div>

            {/* Search and Filters */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Search job title, company, or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div className="flex-1">
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all_locations">All Locations</SelectItem>
                      {allLocations.map((loc) => (
                        <SelectItem key={loc} value={loc}>
                          {loc}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={() => document.getElementById("filters-dropdown")?.click()}
                  variant="outline"
                  className="flex items-center"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>

                <div className="hidden">
                  <button id="filters-dropdown"></button>
                </div>
              </div>

              {/* Selected Filters */}
              {isFiltering && (
                <div className="mt-4">
                  <div className="flex items-center flex-wrap gap-2">
                    {searchQuery && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        Search: {searchQuery}
                        <X
                          className="h-3 w-3 cursor-pointer"
                          onClick={() => setSearchQuery("")}
                        />
                      </Badge>
                    )}
                    
                    {location && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        Location: {location}
                        <X
                          className="h-3 w-3 cursor-pointer"
                          onClick={() => setLocation("")}
                        />
                      </Badge>
                    )}
                    
                    {remoteOnly && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        Remote Only
                        <X
                          className="h-3 w-3 cursor-pointer"
                          onClick={() => setRemoteOnly(false)}
                        />
                      </Badge>
                    )}
                    
                    {selectedJobTypes.map((type) => (
                      <Badge
                        key={type}
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        Job Type: {type}
                        <X
                          className="h-3 w-3 cursor-pointer"
                          onClick={() => removeJobType(type)}
                        />
                      </Badge>
                    ))}
                    
                    {selectedSkills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        Skill: {skill}
                        <X
                          className="h-3 w-3 cursor-pointer"
                          onClick={() => removeSkill(skill)}
                        />
                      </Badge>
                    ))}
                    
                    {isFiltering && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearFilters}
                        className="text-sm text-gray-500"
                      >
                        Clear All
                      </Button>
                    )}
                  </div>
                </div>
              )}

              {/* Detailed Filters */}
              <div className="mt-4 border-t pt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Job Type Filters */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Job Type</h3>
                    <div className="space-y-2">
                      {jobTypes.map((type) => (
                        <div key={type} className="flex items-center">
                          <Checkbox
                            id={`job-type-${type}`}
                            checked={selectedJobTypes.includes(type)}
                            onCheckedChange={() => toggleJobType(type)}
                          />
                          <Label
                            htmlFor={`job-type-${type}`}
                            className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {type}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Remote Filter */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Work Setting</h3>
                    <div className="flex items-center">
                      <Checkbox
                        id="remote-only"
                        checked={remoteOnly}
                        onCheckedChange={() => setRemoteOnly(!remoteOnly)}
                      />
                      <Label
                        htmlFor="remote-only"
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Remote Only
                      </Label>
                    </div>
                  </div>

                  {/* Skills Filter */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {allSkills.slice(0, 8).map((skill) => (
                        <Badge
                          key={skill}
                          variant={selectedSkills.includes(skill) ? "default" : "outline"}
                          className={`cursor-pointer ${
                            selectedSkills.includes(skill)
                              ? "bg-connectpro-primary"
                              : "hover:bg-gray-100"
                          }`}
                          onClick={() => toggleSkill(skill)}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-4 flex justify-between items-center">
              <p className="text-gray-600">
                Showing <span className="font-medium">{filteredJobs.length}</span> jobs
              </p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="salary_high">Salary (High to Low)</SelectItem>
                  <SelectItem value="salary_low">Salary (Low to High)</SelectItem>
                  <SelectItem value="company">Company Name</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Grid of Job Cards */}
            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 animate-fade-in">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">No jobs found</h3>
                <p className="mt-2 text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
                <Button onClick={clearFilters} className="mt-4 bg-connectpro-primary hover:bg-connectpro-primary/90">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Jobs;
