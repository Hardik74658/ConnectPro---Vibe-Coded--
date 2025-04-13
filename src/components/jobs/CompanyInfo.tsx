
import React from "react";
import { Building, Globe, MapPin, Users } from "lucide-react";

interface CompanyInfoProps {
  company: string;
  companyLogo: string;
  location: string;
}

const CompanyInfo = ({ company, companyLogo, location }: CompanyInfoProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 animate-fade-in">
      <h2 className="text-lg font-semibold mb-4">About {company}</h2>
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={companyLogo || "https://via.placeholder.com/48"}
            alt={company}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-base font-medium text-gray-900">{company}</h3>
          <p className="text-sm text-gray-500">Technology</p>
        </div>
      </div>
      <div className="space-y-2 text-sm text-gray-600">
        <p>
          <MapPin className="inline h-4 w-4 text-gray-400 mr-1" />
          Headquarters: {location}
        </p>
        <p>
          <Users className="inline h-4 w-4 text-gray-400 mr-1" />
          Company Size: 500-1000 employees
        </p>
        <p>
          <Globe className="inline h-4 w-4 text-gray-400 mr-1" />
          <a href="#" className="text-connectpro-accent hover:underline">
            Visit Company Website
          </a>
        </p>
      </div>
    </div>
  );
};

export default CompanyInfo;
