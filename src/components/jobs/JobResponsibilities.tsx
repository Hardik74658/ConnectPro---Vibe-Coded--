
import React from "react";

interface JobResponsibilitiesProps {
  responsibilities: string[];
}

const JobResponsibilities = ({ responsibilities }: JobResponsibilitiesProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
      <ul className="list-disc pl-5 space-y-2">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="text-gray-700">
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobResponsibilities;
