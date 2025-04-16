import React from "react";
import { Job } from "@/utils/mockData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bookmark,
  Building,
  Calendar,
  DollarSign,
  MapPin,
  Share,
  Clock,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

interface JobDetailHeaderProps {
  job: Job;
  isSaved: boolean;
  onSaveJob: () => void;
  onShareJob: () => void;
  onApplyNow: () => void;
  formatDate: (date: string) => string;
}

const JobDetailHeader = ({
  job,
  isSaved,
  onSaveJob,
  onShareJob,
  onApplyNow,
  formatDate,
}: JobDetailHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-indigo-950 rounded-3xl shadow-xl p-8 transition-colors"
      style={{
        boxShadow:
          "0 4px 24px 0 rgba(80, 72, 229, 0.08), 0 1.5px 4px 0 rgba(80, 72, 229, 0.04)",
      }}
    >
      <div className="flex items-start">
        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl border border-gray-200 dark:border-indigo-900 bg-white dark:bg-slate-800 shadow-md transition-all">
          <img
            src={job.companyLogo || "https://via.placeholder.com/64"}
            alt={job.company}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="ml-7 flex-1">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {job.title}
          </h1>
          <div className="mt-1 flex items-center">
            <Building className="h-4 w-4 text-indigo-500 dark:text-indigo-400 mr-1" />
            <span className="text-gray-700 dark:text-gray-200 font-medium">{job.company}</span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-y-2">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <MapPin className="h-4 w-4 text-blue-400 dark:text-blue-300 mr-2" />
              <span>
                {job.location}
                {job.remote && " (Remote)"}
              </span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <DollarSign className="h-4 w-4 text-green-400 dark:text-green-300 mr-2" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Calendar className="h-4 w-4 text-purple-400 dark:text-purple-300 mr-2" />
              <span>Posted {formatDate(job.postedDate)}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Clock className="h-4 w-4 text-pink-400 dark:text-pink-300 mr-2" />
              <span>{job.type}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {job.skills.map((skill, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="text-sm rounded-full px-3 py-1 bg-gradient-to-r from-indigo-100 via-blue-100 to-purple-100 dark:from-indigo-900 dark:via-blue-900 dark:to-purple-950 text-indigo-700 dark:text-indigo-200 border-0 shadow-sm"
          >
            {skill}
          </Badge>
        ))}
      </div>

      <div className="mt-7 flex flex-col sm:flex-row gap-3">
        <Button
          onClick={onApplyNow}
          className="bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-200"
        >
          Apply Now
        </Button>
        <Button
          variant="outline"
          className={`rounded-xl border-2 border-indigo-200 dark:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-all duration-200 ${
            isSaved ? "text-indigo-600 dark:text-indigo-300 border-indigo-400 dark:border-indigo-400" : ""
          }`}
          onClick={onSaveJob}
        >
          <Bookmark
            className="h-4 w-4 mr-2"
            fill={isSaved ? "currentColor" : "none"}
          />
          {isSaved ? "Saved" : "Save Job"}
        </Button>
        <Button
          variant="outline"
          className="rounded-xl border-2 border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-200"
          onClick={onShareJob}
        >
          <Share className="h-4 w-4 mr-2" />
          Share
        </Button>
      </div>
    </motion.div>
  );
};

export default JobDetailHeader;
