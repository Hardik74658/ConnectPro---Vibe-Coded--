import React from "react";
import { Link } from "react-router-dom";
import { Job } from "@/utils/mockData";
import { MapPin, Clock, Briefcase, DollarSign, Bookmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [isSaved, setIsSaved] = React.useState(false);
  const { toast } = useToast();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 1) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  const handleSaveJob = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsSaved(!isSaved);
    toast({
      title: isSaved ? "Job removed from saved" : "Job saved",
      description: isSaved 
        ? `You have removed ${job.title} from your saved jobs.` 
        : `You have saved ${job.title} to your saved jobs.`,
    });
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="overflow-hidden border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300">
        <Link 
          to={`/jobs/${job.id}`}
          state={{ jobData: job }} // Pass the job data through route state
          className="block"
        >
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-white dark:bg-gray-700 p-2 shadow-sm">
                  <img
                    src={job.companyLogo || "https://via.placeholder.com/48"}
                    alt={job.company}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                    {job.company}
                  </p>
                </div>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleSaveJob}
                className={`flex h-9 w-9 items-center justify-center rounded-full ${isSaved ? 'bg-purple-100 dark:bg-purple-800' : 'bg-gray-100 dark:bg-gray-700'} transition-all duration-300`}
              >
                <Bookmark 
                  className={`h-5 w-5 ${isSaved ? 'text-purple-600 dark:text-purple-400' : 'text-gray-400 dark:text-gray-300'}`} 
                  fill={isSaved ? "currentColor" : "none"} 
                />
              </motion.button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-800">
                  <MapPin className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-300" />
                </div>
                <span>{job.location}{job.remote ? " (Remote)" : ""}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-50 dark:bg-green-800">
                  <Briefcase className="h-3.5 w-3.5 text-green-600 dark:text-green-300" />
                </div>
                <span>{job.type}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-800">
                  <DollarSign className="h-3.5 w-3.5 text-amber-600 dark:text-amber-300" />
                </div>
                <span>{job.salary}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-800">
                  <Clock className="h-3.5 w-3.5 text-blue-600 dark:text-blue-300" />
                </div>
                <span>{formatDate(job.postedDate)}</span>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 transition-colors duration-300">
                {job.description}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {job.skills.slice(0, 4).map((skill, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 px-2.5 py-1 text-xs font-medium text-indigo-700 dark:text-gray-100 border border-indigo-100 dark:border-gray-700 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
              {job.skills.length > 4 && (
                <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 transition-all duration-300">
                  +{job.skills.length - 4} more
                </span>
              )}
            </div>
            
            <div className="mt-5">
              <Button className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium shadow-md shadow-indigo-200 dark:shadow-none transition-all duration-300">
                Apply Now
              </Button>
            </div>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  );
};

export default JobCard;
