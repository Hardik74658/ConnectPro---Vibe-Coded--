import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { getJobById, getSimilarJobs, Job } from "@/utils/mockData";
import { useToast } from "@/hooks/use-toast";

// Import the new component files
import JobDetailHeader from "@/components/jobs/JobDetailHeader";
import JobDescription from "@/components/jobs/JobDescription";
import JobRequirements from "@/components/jobs/JobRequirements";
import JobResponsibilities from "@/components/jobs/JobResponsibilities";
import ApplyCard from "@/components/jobs/ApplyCard";
import CompanyInfo from "@/components/jobs/CompanyInfo";
import SimilarJobs from "@/components/jobs/SimilarJobs";
import JobLoader from "@/components/jobs/JobLoader";

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const jobFromState = location.state?.jobData;
  const [job, setJob] = useState<Job | null>(null);
  const [similarJobs, setSimilarJobs] = useState<Job[]>([]);
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (jobFromState) {
      setJob(jobFromState);
      setSimilarJobs(getSimilarJobs(jobFromState.id));
    } else if (id) {
      const foundJob = getJobById(id);
      if (foundJob) {
        setJob(foundJob);
        setSimilarJobs(getSimilarJobs(id));
      } else {
        navigate("/jobs");
      }
    }
  }, [id, jobFromState, navigate]);

  const handleSaveJob = () => {
    setIsSaved(!isSaved);
    toast({
      title: isSaved ? "Job removed from saved" : "Job saved",
      description: isSaved
        ? `You have removed ${job?.title} from your saved jobs.`
        : `You have saved ${job?.title} to your saved jobs.`,
    });
  };

  const handleShareJob = () => {
    toast({
      title: "Job shared",
      description: "Job link copied to clipboard",
    });
  };

  const handleApplyNow = () => {
    toast({
      title: "Application submitted",
      description: `Your application for ${job?.title} at ${job?.company} has been submitted successfully!`,
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!job) {
    return <JobLoader />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            className="flex items-center text-gray-500"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Jobs
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
            <div className="lg:col-span-2 space-y-8">
              <JobDetailHeader
                job={job}
                isSaved={isSaved}
                onSaveJob={handleSaveJob}
                onShareJob={handleShareJob}
                onApplyNow={handleApplyNow}
                formatDate={formatDate}
              />
              <JobDescription description={job.description} />
              <JobRequirements requirements={job.requirements} />
              <JobResponsibilities responsibilities={job.responsibilities} />
            </div>

            <div className="space-y-8">
              <ApplyCard
                onApplyNow={handleApplyNow}
                isSaved={isSaved}
                onSaveJob={handleSaveJob}
              />
              <CompanyInfo
                company={job.company}
                companyLogo={job.companyLogo || "https://via.placeholder.com/48"}
                location={job.location}
              />
              <SimilarJobs similarJobs={similarJobs} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobDetail;
