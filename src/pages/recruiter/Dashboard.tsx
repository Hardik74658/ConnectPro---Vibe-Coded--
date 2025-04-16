import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Briefcase,
  ChevronRight,
  FileText,
  TrendingUp,
  Users,
  Clock,
  Plus,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { mockJobs } from "@/utils/mockData";

const RecruiterDashboard = () => {
  const { user } = useAuth();
  
  // Quick recruiter stats
  const stats = [
    { id: 1, name: "Active Jobs", value: "8", icon: <Briefcase className="h-5 w-5" />, change: "+2 this month", trend: "up" },
    { id: 2, name: "Total Applicants", value: "124", icon: <Users className="h-5 w-5" />, change: "+18 this week", trend: "up" },
    { id: 3, name: "Interviews Scheduled", value: "12", icon: <Calendar className="h-5 w-5" />, change: "+5 this week", trend: "up" },
    { id: 4, name: "Time to Hire (avg)", value: "21 days", icon: <Clock className="h-5 w-5" />, change: "-3 days", trend: "up" },
  ];

  // Recent job postings (using mockJobs but limiting to a few)
  const recentJobs = mockJobs.slice(0, 4);

  // Recent applications
  const recentApplications = [
    {
      id: 1,
      candidate: "Sarah Johnson",
      position: "Senior Frontend Developer",
      date: "April 10, 2025",
      status: "Reviewing",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      candidate: "Michael Chen",
      position: "UX Designer",
      date: "April 9, 2025",
      status: "Interview Scheduled",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: 3,
      candidate: "Rachel Garcia",
      position: "Product Manager",
      date: "April 9, 2025",
      status: "New",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    {
      id: 4,
      candidate: "David Wilson",
      position: "Backend Developer",
      date: "April 8, 2025",
      status: "Second Interview",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      
      <main className="flex-grow">
        {/* Welcome Banner */}
        <div className="border-b text-gray-900 dark:text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h1 className="text-3xl font-bold tracking-tight">Welcome, {user?.name?.split(' ')[0] || 'Recruiter'}!</h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400 font-medium">
                  Manage your job postings and applicants efficiently
                </p>
              </div>
              <div className="flex space-x-4">
                <Button 
                  asChild 
                  variant="outline" 
                  className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-gray-200 dark:border-gray-700 rounded-xl"
                >
                  <Link to="/recruiter/applicants">
                    <Users className="mr-2 h-4 w-4" />
                    View Applicants
                  </Link>
                </Button>
                <Button 
                  asChild 
                  className="bg-connectpro-primary text-white hover:bg-connectpro-primary/90 rounded-xl"
                >
                  <Link to="/recruiter/post-job">
                    <Plus className="mr-2 h-4 w-4" />
                    Post New Job
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dashboard Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map((stat) => (
              <Card key={stat.id} className="animate-fade-in rounded-2xl shadow-none bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-connectpro-secondary rounded-xl mr-4">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.name}</p>
                      <div className="flex items-center">
                        <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                        <div className="ml-2 flex items-center text-xs">
                          {stat.trend === "up" && (
                            <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                          )}
                          <span className={stat.trend === "up" ? "text-green-500" : "text-gray-500"}>
                            {stat.change}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Job Postings */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Your Job Postings</CardTitle>
                    <CardDescription>Manage and track your active job listings</CardDescription>
                  </div>
                  <Button asChild variant="ghost" className="text-connectpro-accent">
                    <Link to="/recruiter/jobs">
                      Manage All
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentJobs.map((job) => (
                      <div key={job.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-800 transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex">
                            <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                              {job.companyLogo ? (
                                <img
                                  src={job.companyLogo}
                                  alt={job.company}
                                  className="h-full w-full object-contain"
                                />
                              ) : (
                                <FileText className="h-10 w-10 text-gray-400 p-2" />
                              )}
                            </div>
                            <div className="ml-3">
                              <h4 className="text-sm font-medium text-gray-900 dark:text-white">{job.title}</h4>
                              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                {job.location} • Posted on {new Date().toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}
                              </p>
                              <div className="mt-1 flex items-center">
                                <Users className="h-3.5 w-3.5 text-gray-400 mr-1" />
                                <span className="text-xs text-gray-500 dark:text-gray-400">{Math.floor(Math.random() * 30) + 5} applicants</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="text-xs px-2 py-1 h-auto rounded-xl">
                              <MessageSquare className="h-3 w-3 mr-1" /> Messages
                            </Button>
                            <Button size="sm" variant="outline" className="text-xs px-2 py-1 h-auto rounded-xl">
                              Edit
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full mt-4 rounded-xl">
                    <Link to="/recruiter/post-job">
                      <Plus className="mr-2 h-4 w-4" />
                      Post New Job
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Analytics Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Recruitment Analytics</CardTitle>
                  <CardDescription>Performance metrics for your job listings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center h-64 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700">
                    <div className="text-center">
                      <BarChart className="mx-auto h-10 w-10 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Detailed analytics coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column - Recent Applications */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Applications</CardTitle>
                  <CardDescription>Latest candidates for your open positions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentApplications.map((application) => (
                      <div key={application.id} className="flex items-start p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800">
                        <img
                          src={application.avatar}
                          alt={application.candidate}
                          className="h-10 w-10 rounded-xl object-cover"
                        />
                        <div className="ml-3 flex-1">
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white">{application.candidate}</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{application.position}</p>
                          <div className="flex items-center justify-between mt-1">
                            <p className="text-xs text-gray-400">{application.date}</p>
                            <span className={`text-xs px-2 py-0.5 rounded-xl ${
                              application.status === "New" 
                                ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200" 
                                : application.status === "Reviewing" 
                                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200"
                                : application.status === "Interview Scheduled"
                                ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
                                : "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200"
                            }`}>
                              {application.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full mt-4 rounded-xl">
                    <Link to="/recruiter/applicants">
                      View All Applicants
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Upcoming Interviews */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Interviews</CardTitle>
                  <CardDescription>Your scheduled candidate meetings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center h-48 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700">
                    <div className="text-center">
                      <Calendar className="mx-auto h-10 w-10 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Calendar integration coming soon</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 rounded-xl">
                    Schedule Interview
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RecruiterDashboard;