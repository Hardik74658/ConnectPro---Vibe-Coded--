
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
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-start">
        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-white">
          <img
            src={job.companyLogo || "https://via.placeholder.com/64"}
            alt={job.company}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="ml-6 flex-1">
          <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
          <div className="mt-1 flex items-center">
            <Building className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-gray-700">{job.company}</span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-y-2">
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 text-gray-400 mr-2" />
              <span>
                {job.location}
                {job.remote && " (Remote)"}
              </span>
            </div>
            <div className="flex items-center text-gray-600">
              <DollarSign className="h-4 w-4 text-gray-400 mr-2" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 text-gray-400 mr-2" />
              <span>Posted {formatDate(job.postedDate)}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-4 w-4 text-gray-400 mr-2" />
              <span>{job.type}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {job.skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-sm">
            {skill}
          </Badge>
        ))}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Button 
          onClick={onApplyNow}
          className="bg-connectpro-primary hover:bg-connectpro-primary/90"
        >
          Apply Now
        </Button>
        <Button 
          variant="outline" 
          className={`${isSaved ? "text-connectpro-accent" : ""}`}
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
          onClick={onShareJob}
        >
          <Share className="h-4 w-4 mr-2" />
          Share
        </Button>
      </div>
    </div>
  );
};

export default JobDetailHeader;
