
import React from "react";

interface JobDescriptionProps {
  description: string;
}

const JobDescription = ({ description }: JobDescriptionProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Job Description</h2>
      <p className="text-gray-700 whitespace-pre-line">{description}</p>
    </div>
  );
};

export default JobDescription;
