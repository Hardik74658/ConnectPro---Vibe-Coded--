import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { getJobById, getSimilarJobs, Job } from "@/utils/mockData";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f5f3ff] dark:from-[#18181b]/90 dark:via-[#312e81]/80 dark:to-[#1e293b]/90 transition-colors duration-500">
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <Button
            variant="ghost"
            className="flex items-center text-gray-500 dark:text-gray-300 hover:bg-[#e0e7ff]/60 dark:hover:bg-[#312e81]/40 rounded-2xl transition-all"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Jobs
          </Button>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="lg:col-span-2 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                className="bg-white/90 dark:bg-[#232946]/80 rounded-3xl shadow-2xl p-9 transition-colors border border-[#e0e7ff]/60 dark:border-[#312e81]/40"
              >
                <JobDetailHeader
                  job={job}
                  isSaved={isSaved}
                  onSaveJob={handleSaveJob}
                  onShareJob={handleShareJob}
                  onApplyNow={handleApplyNow}
                  formatDate={formatDate}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
                className="bg-white/90 dark:bg-[#232946]/80 rounded-2xl shadow-xl p-7 transition-colors border border-[#e0e7ff]/40 dark:border-[#312e81]/30"
              >
                <JobDescription description={job.description} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                className="bg-white/90 dark:bg-[#232946]/80 rounded-2xl shadow-xl p-7 transition-colors border border-[#e0e7ff]/40 dark:border-[#312e81]/30"
              >
                <JobRequirements requirements={job.requirements} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                className="bg-white/90 dark:bg-[#232946]/80 rounded-2xl shadow-xl p-7 transition-colors border border-[#e0e7ff]/40 dark:border-[#312e81]/30"
              >
                <JobResponsibilities responsibilities={job.responsibilities} />
              </motion.div>
            </div>

            <motion.div
              className="space-y-10"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              <div className="bg-gradient-to-r from-[#e0e7ff]/80 via-[#f5f3ff]/80 to-[#f1f5f9]/80 dark:from-[#312e81]/80 dark:via-[#232946]/80 dark:to-[#1e293b]/80 rounded-3xl shadow-2xl p-7 transition-colors border border-[#e0e7ff]/40 dark:border-[#312e81]/30">
                <ApplyCard
                  onApplyNow={handleApplyNow}
                  isSaved={isSaved}
                  onSaveJob={handleSaveJob}
                />
              </div>
              <div className="bg-white/90 dark:bg-[#232946]/80 rounded-2xl shadow-xl p-7 transition-colors border border-[#e0e7ff]/40 dark:border-[#312e81]/30">
                <CompanyInfo
                  company={job.company}
                  companyLogo={job.companyLogo || "https://via.placeholder.com/48"}
                  location={job.location}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
                className="bg-white/90 dark:bg-[#232946]/80 rounded-2xl shadow-xl p-7 transition-colors border border-[#e0e7ff]/40 dark:border-[#312e81]/30"
              >
                <SimilarJobs similarJobs={similarJobs} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobDetail;
