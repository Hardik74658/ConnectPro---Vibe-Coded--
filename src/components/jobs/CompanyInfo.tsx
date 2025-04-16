import React from "react";
import { Building, Globe, MapPin, Users } from "lucide-react";

interface CompanyInfoProps {
  company: string;
  companyLogo: string;
  location: string;
}

const CompanyInfo = ({ company, companyLogo, location }: CompanyInfoProps) => {
  return (
    <div
      className="
        bg-[#ceddec]
        dark:bg-[#10111a] 
        rounded-3xl shadow-lg p-8
        animate-fade-in
        transition-all duration-500
        border border-transparent dark:border-[#232946]/50
        hover:shadow-xl hover:scale-[1.015]
      "
    >
      <h2 className="text-xl font-bold mb-5 text-[#5b5fc7] dark:text-[#e0e6ff] tracking-tight transition-colors duration-300">
        About {company}
      </h2>
      <div className="flex items-center mb-6">
        <div
          className="
            h-16 w-16 flex-shrink-0 overflow-hidden
            rounded-2xl border border-gray-100 dark:border-[#232946]/40
            bg-gradient-to-tr from-[#e9ecf5] to-[#dbeafe] dark:from-[#181825] dark:to-[#232946]
            shadow-sm
            transition-all duration-300
          "
        >
          <img
            src={companyLogo || "https://via.placeholder.com/48"}
            alt={company}
            className="h-full w-full object-contain scale-90 transition-transform duration-300"
          />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 transition-colors duration-300">
            {company}
          </h3>
          <p className="text-xs text-[#5b5fc7] dark:text-[#b4befe] font-medium tracking-wide mt-1">
            Technology
          </p>
        </div>
      </div>
      <div className="space-y-3 text-base text-gray-700 dark:text-gray-200 transition-colors duration-300">
        <p className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-[#5b5fc7] dark:text-[#b4befe] mr-2 transition-colors duration-300" />
          <span className="font-medium">Headquarters:</span>
          <span className="ml-1">{location}</span>
        </p>
        <p className="flex items-center gap-2">
          <Users className="h-5 w-5 text-[#5b5fc7] dark:text-[#b4befe] mr-2 transition-colors duration-300" />
          <span className="font-medium">Company Size:</span>
          <span className="ml-1">500-1000 employees</span>
        </p>
        <p className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-[#5b5fc7] dark:text-[#b4befe] mr-2 transition-colors duration-300" />
          <a
            href="#"
            className="
              text-[#5b5fc7] dark:text-[#e0e6ff]
              hover:text-[#5146e1] dark:hover:text-[#b4befe]
              underline-offset-2 hover:underline focus:underline
              font-semibold transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-[#5b5fc7]/30
              rounded-lg px-1
            "
          >
            Visit Company Website
          </a>
        </p>
      </div>
    </div>
  );
};

export default CompanyInfo;
