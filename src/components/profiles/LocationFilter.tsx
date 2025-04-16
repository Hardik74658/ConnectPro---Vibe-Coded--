import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin } from "lucide-react";

interface LocationFilterProps {
  location: string;
  setLocation: (location: string) => void;
  allLocations: string[];
}

const LocationFilter: React.FC<LocationFilterProps> = ({
  location,
  setLocation,
  allLocations,
}) => {
  return (
    <div className="flex-1">
      <Select value={location} onValueChange={setLocation}>
        <SelectTrigger className="rounded-lg border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 hover:border-indigo-400 hover:shadow-lg focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600 transition-all duration-300 ease-in-out">
          <div className="flex items-center">
            <MapPin className="mr-2 h-5 w-5 text-indigo-500 dark:text-indigo-400 transition-transform duration-300 ease-in-out transform hover:scale-110" />
            <SelectValue placeholder="Filter by location" />
          </div>
        </SelectTrigger>
        <SelectContent className="rounded-lg border-0 shadow-2xl overflow-hidden z-50 bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out">
          <SelectItem value="all" className="focus:bg-indigo-50 dark:focus:bg-indigo-900 cursor-pointer hover:bg-indigo-100 dark:hover:bg-indigo-700 transition-colors duration-200">
            All Locations
          </SelectItem>
          {allLocations.map((loc) => (
            <SelectItem
              key={loc}
              value={loc}
              className="focus:bg-indigo-50 dark:focus:bg-indigo-900 cursor-pointer hover:bg-indigo-100 dark:hover:bg-indigo-700 transition-colors duration-200"
            >
              {loc}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LocationFilter;
