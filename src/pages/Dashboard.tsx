import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Footer from "@/components/layout/Footer";
import { mockJobs, mockProfiles } from "@/utils/mockData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BarChart,
  Bell,
  Briefcase,
  Building,
  Calendar,
  ChevronRight,
  MessageSquare,
  Search,
  Sparkles,
  TrendingUp,
  UserPlus,
  Users,
} from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleFindJobs = () => {
    navigate('/jobs', { state: { openSearch: true } });
  };

  // Quick stats
  const stats = [
    { id: 1, name: "Profile views", value: "142", icon: <Users className="h-5 w-5" />, change: "+12% this week", trend: "up" },
    { id: 2, name: "Job applications", value: "8", icon: <Briefcase className="h-5 w-5" />, change: "+3 this month", trend: "up" },
    { id: 3, name: "New connections", value: "23", icon: <UserPlus className="h-5 w-5" />, change: "+5 this week", trend: "up" },
    { id: 4, name: "Messages", value: "7", icon: <MessageSquare className="h-5 w-5" />, change: "2 unread", trend: "neutral" },
  ];

  // Recent jobs based on your skills
  const recentJobs = mockJobs.slice(0, 3);

  // Suggested profiles to connect with
  const suggestedProfiles = mockProfiles.slice(0, 3);

  // Upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Virtual Tech Networking Event",
      date: "April 15, 2023",
      time: "3:00 PM - 5:00 PM",
      type: "Networking",
    },
    {
      id: 2,
      title: "Resume Workshop",
      date: "April 20, 2023",
      time: "1:00 PM - 2:30 PM",
      type: "Workshop",
    },
  ];

  // Recent notifications
  const notifications = [
    {
      id: 1,
      title: "New job match",
      description: "A new Senior Developer position matches your profile",
      time: "2 hours ago",
      read: false,
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      id: 2,
      title: "Connection request",
      description: "Alex Johnson sent you a connection request",
      time: "1 day ago",
      read: true,
      icon: <UserPlus className="h-5 w-5" />,
    },
    {
      id: 3,
      title: "Profile view alert",
      description: "Your profile was viewed by a recruiter at TechCorp",
      time: "2 days ago",
      read: true,
      icon: <Search className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        {/* Welcome Banner */}
        <div className=" border-b text-gray-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h1 className="text-3xl font-bold tracking-tight">Welcome, {user?.name.split(' ')[0] || 'User'}!</h1>
                <p className="mt-2 text-gray-600 font-medium">Your professional dashboard is ready to explore</p>
              </div>
              <div>
                <Button 
                  onClick={handleFindJobs}
                  variant="outline" 
                  className="bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors border-gray-200"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Find Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dashboard Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 staggered-animation">
            {stats.map((stat) => (
              <Card key={stat.id} className="animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-connectpro-secondary rounded-full mr-4">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                      <div className="flex items-center">
                        <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
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
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Recent Jobs Section */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Recent Jobs For You</CardTitle>
                    <CardDescription>Based on your skills and experience</CardDescription>
                  </div>
                  <Link to="/jobs">
                    <Button variant="ghost" className="text-connectpro-accent">
                      View All
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentJobs.map((job) => (
                      <Link to={`/jobs/${job.id}`} key={job.id} className="block">
                        <div className="p-4 hover:bg-gray-50 rounded-lg border border-gray-100 transition-colors">
                          <div className="flex items-start">
                            <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={job.companyLogo || "https://via.placeholder.com/40"}
                                alt={job.company}
                                className="h-full w-full object-contain"
                              />
                            </div>
                            <div className="ml-3 flex-1">
                              <h4 className="text-sm font-medium text-gray-900">{job.title}</h4>
                              <div className="flex items-center mt-1">
                                <Building className="h-3.5 w-3.5 text-gray-400 mr-1" />
                                <p className="text-xs text-gray-500">{job.company}</p>
                                <div className="mx-1.5 h-1 w-1 rounded-full bg-gray-300"></div>
                                <p className="text-xs text-gray-500">{job.location}</p>
                              </div>
                              <div className="mt-2 flex flex-wrap gap-1">
                                {job.skills.slice(0, 3).map((skill, index) => (
                                  <span
                                    key={index}
                                    className="inline-flex items-center rounded-full bg-connectpro-secondary px-2 py-0.5 text-xs font-medium text-gray-700"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="ml-4">
                              <Button variant="outline" size="sm" className="text-connectpro-primary">
                                Apply
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Suggested Connections */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>People You May Know</CardTitle>
                    <CardDescription>Connect with professionals in your field</CardDescription>
                  </div>
                  <Link to="/profiles">
                    <Button variant="ghost" className="text-connectpro-accent">
                      View All
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {suggestedProfiles.map((profile) => (
                      <Link to={`/profiles/${profile.id}`} key={profile.id} className="block">
                        <div className="p-4 hover:bg-gray-50 rounded-lg border border-gray-100 transition-colors">
                          <div className="flex items-center">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={profile.avatar} alt={profile.name} />
                              <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="ml-3 flex-1">
                              <h4 className="text-sm font-medium text-gray-900">{profile.name}</h4>
                              <p className="text-xs text-gray-500">{profile.title} at {profile.company}</p>
                              <div className="mt-1 flex items-center text-xs text-gray-500">
                                <span>3 mutual connections</span>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" className="ml-4 text-connectpro-primary">
                              <UserPlus className="mr-1 h-3.5 w-3.5" />
                              Connect
                            </Button>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              {/* Activity Chart Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Activity</CardTitle>
                  <CardDescription>Profile engagement in the last 30 days</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-48 bg-gray-50 rounded-md border border-dashed border-gray-300">
                    <div className="text-center">
                      <BarChart className="mx-auto h-10 w-10 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-500">Activity graph coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Networking and learning opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="flex items-start p-3 rounded-lg hover:bg-gray-50">
                        <div className="p-2 bg-connectpro-secondary rounded-md">
                          <Calendar className="h-5 w-5 text-connectpro-primary" />
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-gray-900">{event.title}</h4>
                          <p className="text-xs text-gray-500 mt-1">{event.date} • {event.time}</p>
                          <p className="text-xs text-gray-500 mt-1">{event.type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4 text-connectpro-primary">
                    View All Events
                  </Button>
                </CardContent>
              </Card>
              
              {/* Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Stay updated on your network</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className={`flex p-3 rounded-lg ${
                          !notification.read ? "bg-blue-50" : "hover:bg-gray-50"
                        }`}
                      >
                        <div className={`p-2 rounded-md ${
                          !notification.read 
                            ? "bg-connectpro-primary text-white" 
                            : "bg-gray-100 text-gray-500"
                        }`}>
                          {notification.icon || <Bell className="h-5 w-5" />}
                        </div>
                        <div className="ml-3">
                          <h4 className={`text-sm font-medium ${
                            !notification.read ? "text-connectpro-primary" : "text-gray-900"
                          }`}>
                            {notification.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{notification.description}</p>
                          <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                        </div>
                        {!notification.read && (
                          <div className="ml-auto">
                            <div className="h-2 w-2 bg-connectpro-accent rounded-full"></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4 text-connectpro-primary">
                    View All Notifications
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

export default Dashboard;
