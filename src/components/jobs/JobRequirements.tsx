
import React from "react";

interface JobRequirementsProps {
  requirements: string[];
}

const JobRequirements = ({ requirements }: JobRequirementsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Requirements</h2>
      <ul className="list-disc pl-5 space-y-2">
        {requirements.map((requirement, index) => (
          <li key={index} className="text-gray-700">
            {requirement}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobRequirements;
