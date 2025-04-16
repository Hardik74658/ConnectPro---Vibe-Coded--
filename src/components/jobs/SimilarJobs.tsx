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
    <div
      className="
        bg-white dark:bg-gradient-to-br dark:from-[#181c24] dark:to-[#23283a]
        rounded-2xl shadow-lg p-6 animate-fade-in
        transition-all duration-500
        border border-gray-100 dark:border-[#23283a]/60
      "
      style={{
        boxShadow:
          "0 4px 24px 0 rgba(80, 120, 200, 0.08), 0 1.5px 6px 0 rgba(80, 120, 200, 0.06)",
      }}
    >
      <h2 className="text-xl font-bold mb-5 text-connectpro-primary dark:text-connectpro-accent transition-colors duration-300 tracking-tight">
        Similar Jobs
      </h2>
      <div className="space-y-4">
        {similarJobs.map((similarJob) => (
          <div
            key={similarJob.id}
            className="
              p-3 border border-gray-100 dark:border-[#23283a]/60
              rounded-xl bg-gradient-to-tr from-white via-[#f7faff] to-[#eaf1fb] dark:from-[#23283a] dark:via-[#23283a] dark:to-[#181c24]
              hover:scale-[1.025] hover:shadow-xl hover:border-connectpro-primary/30 dark:hover:border-connectpro-accent/40
              transition-all duration-300 cursor-pointer group
            "
            onClick={() => navigate(`/jobs/${similarJob.id}`)}
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex items-start">
              <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 dark:border-[#23283a]/60 bg-white dark:bg-[#23283a] flex items-center justify-center transition-all duration-300">
                <img
                  src={similarJob.companyLogo || "https://via.placeholder.com/40"}
                  alt={similarJob.company}
                  className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                  style={{ filter: "drop-shadow(0 2px 6px rgba(80,120,200,0.08))" }}
                />
              </div>
              <div className="ml-4">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                  {similarJob.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{similarJob.company}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {similarJob.skills.slice(0, 2).map((skill, index) => (
                    <span
                      key={index}
                      className="
                        inline-flex items-center rounded-full
                        bg-gradient-to-r from-connectpro-primary/10 to-connectpro-accent/10
                        px-3 py-1 text-xs font-medium
                        text-connectpro-primary dark:text-connectpro-accent
                        shadow-sm
                        transition-all duration-300
                      "
                    >
                      {skill}
                    </span>
                  ))}
                  {similarJob.skills.length > 2 && (
                    <span className="
                      inline-flex items-center rounded-full
                      bg-gray-100 dark:bg-[#23283a]/60
                      px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300
                      transition-all duration-300
                    ">
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
        className="
          w-full mt-6 text-connectpro-primary dark:text-connectpro-accent
          border-connectpro-primary/30 dark:border-connectpro-accent/30
          rounded-xl py-2 font-semibold text-base
          hover:bg-connectpro-primary/10 dark:hover:bg-connectpro-accent/10
          transition-all duration-300
          shadow-sm
        "
        onClick={() => navigate("/jobs")}
      >
        <ExternalLink className="h-4 w-4 mr-2" />
        Browse All Jobs
      </Button>
    </div>
  );
};

export default SimilarJobs;
