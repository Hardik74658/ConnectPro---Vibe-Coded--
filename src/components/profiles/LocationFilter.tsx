
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
        <SelectTrigger className="rounded-xl border-gray-200 bg-white hover:border-indigo-300 hover:shadow-md focus:ring-2 focus:ring-indigo-200 transition-all duration-200">
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4 text-indigo-500" />
            <SelectValue placeholder="Filter by location" />
          </div>
        </SelectTrigger>
        <SelectContent className="rounded-xl border-0 shadow-xl overflow-hidden z-50 bg-white">
          <SelectItem value="all" className="focus:bg-indigo-50 cursor-pointer">All Locations</SelectItem>
          {allLocations.map((loc) => (
            <SelectItem key={loc} value={loc} className="focus:bg-indigo-50 cursor-pointer">
              {loc}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LocationFilter;
