
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Job } from "@/utils/mockData";

interface SimilarJobsProps {
  similarJobs: Job[];
}

const SimilarJobs = ({ similarJobs }: SimilarJobsProps) => {
  const navigate = useNavigate();
  
  if (!similarJobs.length) return null;
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 animate-fade-in">
      <h2 className="text-lg font-semibold mb-4">Similar Jobs</h2>
      <div className="space-y-4">
        {similarJobs.map((similarJob) => (
          <div
            key={similarJob.id}
            className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => navigate(`/jobs/${similarJob.id}`)}
          >
            <div className="flex items-start cursor-pointer">
              <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={similarJob.companyLogo || "https://via.placeholder.com/40"}
                  alt={similarJob.company}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">
                  {similarJob.title}
                </h3>
                <p className="text-xs text-gray-500">{similarJob.company}</p>
                <div className="mt-1 flex flex-wrap gap-1">
                  {similarJob.skills.slice(0, 2).map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-connectpro-secondary px-2 py-0.5 text-xs font-medium text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                  {similarJob.skills.length > 2 && (
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                      +{similarJob.skills.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        className="w-full mt-4 text-connectpro-primary"
        onClick={() => navigate("/jobs")}
      >
        <ExternalLink className="h-4 w-4 mr-2" />
        Browse All Jobs
      </Button>
    </div>
  );
};

export default SimilarJobs;
