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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-[#181c24] dark:via-[#23283a] dark:to-[#1a1f2b] transition-colors duration-500">
      <main className="flex-grow">
        {/* Welcome Banner */}
        <div className="border-b text-gray-900 dark:text-white py-12 bg-gradient-to-r from-blue-100/60 via-white to-pink-100/60 dark:from-[#23283a]/80 dark:via-[#181c24]/80 dark:to-[#23283a]/80 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 animate-fade-in-down">
                <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-pink-400 dark:to-purple-400 transition-colors duration-500">
                  Welcome, {user?.name.split(' ')[0] || 'User'}!
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300 font-medium">Your professional dashboard is ready to explore</p>
              </div>
              <div className="animate-fade-in">
                <Button 
                  onClick={handleFindJobs}
                  variant="outline" 
                  className="bg-gradient-to-r from-blue-400 to-pink-400 text-white hover:from-blue-500 hover:to-pink-500 border-0 shadow-lg rounded-full px-6 py-2 transition-all duration-300 dark:from-blue-600 dark:to-pink-600"
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
            {stats.map((stat, idx) => (
              <Card 
                key={stat.id} 
                className={`animate-fade-in-up shadow-xl rounded-2xl border-0 bg-white/80 dark:bg-[#23283a]/80 transition-all duration-300`}
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-gradient-to-br from-blue-200 via-pink-200 to-purple-200 dark:from-blue-700 dark:via-pink-700 dark:to-purple-700 rounded-xl mr-4 shadow-md">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.name}</p>
                      <div className="flex items-center">
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                        <div className="ml-2 flex items-center text-xs">
                          {stat.trend === "up" && (
                            <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                          )}
                          <span className={stat.trend === "up" ? "text-green-500" : "text-gray-500 dark:text-gray-400"}>
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
              <Card className="rounded-2xl shadow-lg border-0 bg-white/90 dark:bg-[#23283a]/90 transition-all duration-300 animate-fade-in-up">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-bold text-blue-700 dark:text-blue-300">Recent Jobs For You</CardTitle>
                    <CardDescription className="text-gray-500 dark:text-gray-400">Based on your skills and experience</CardDescription>
                  </div>
                  <Link to="/jobs">
                    <Button variant="ghost" className="text-connectpro-accent rounded-full hover:bg-blue-100/50 dark:hover:bg-blue-900/30 transition-colors">
                      View All
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentJobs.map((job, idx) => (
                      <Link to={`/jobs/${job.id}`} key={job.id} className="block group">
                        <div className="p-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-pink-50 dark:hover:from-blue-900/30 dark:hover:to-pink-900/30 rounded-xl border border-gray-100 dark:border-gray-800 transition-all duration-200 flex items-start shadow-sm group-hover:shadow-lg">
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#23283a] flex items-center justify-center shadow">
                            <img
                              src={job.companyLogo || "https://via.placeholder.com/40"}
                              alt={job.company}
                              className="h-10 w-10 object-contain"
                            />
                          </div>
                          <div className="ml-4 flex-1">
                            <h4 className="text-base font-semibold text-gray-900 dark:text-white">{job.title}</h4>
                            <div className="flex items-center mt-1">
                              <Building className="h-3.5 w-3.5 text-gray-400 mr-1" />
                              <p className="text-xs text-gray-500 dark:text-gray-400">{job.company}</p>
                              <div className="mx-1.5 h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{job.location}</p>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-1">
                              {job.skills.slice(0, 3).map((skill, index) => (
                                <span
                                  key={index}
                                  className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-200 via-pink-200 to-purple-200 dark:from-blue-700 dark:via-pink-700 dark:to-purple-700 px-2 py-0.5 text-xs font-medium text-gray-700 dark:text-white shadow"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="ml-4">
                            <Button variant="outline" size="sm" className="text-connectpro-primary rounded-full border-0 bg-gradient-to-r from-blue-400 to-pink-400 text-white hover:from-blue-500 hover:to-pink-500 dark:from-blue-600 dark:to-pink-600 shadow">
                              Apply
                            </Button>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Suggested Connections */}
              <Card className="rounded-2xl shadow-lg border-0 bg-white/90 dark:bg-[#23283a]/90 transition-all duration-300 animate-fade-in-up">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-bold text-pink-700 dark:text-pink-300">People You May Know</CardTitle>
                    <CardDescription className="text-gray-500 dark:text-gray-400">Connect with professionals in your field</CardDescription>
                  </div>
                  <Link to="/profiles">
                    <Button variant="ghost" className="text-connectpro-accent rounded-full hover:bg-pink-100/50 dark:hover:bg-pink-900/30 transition-colors">
                      View All
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {suggestedProfiles.map((profile, idx) => (
                      <Link to={`/profiles/${profile.id}`} key={profile.id} className="block group">
                        <div className="p-4 hover:bg-gradient-to-r hover:from-pink-50 hover:to-blue-50 dark:hover:from-pink-900/30 dark:hover:to-blue-900/30 rounded-xl border border-gray-100 dark:border-gray-800 transition-all duration-200 flex items-center shadow-sm group-hover:shadow-lg">
                          <Avatar className="h-12 w-12 rounded-xl shadow">
                            <AvatarImage src={profile.avatar} alt={profile.name} />
                            <AvatarFallback className="bg-gradient-to-br from-blue-400 to-pink-400 text-white">{profile.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="ml-4 flex-1">
                            <h4 className="text-base font-semibold text-gray-900 dark:text-white">{profile.name}</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{profile.title} at {profile.company}</p>
                            <div className="mt-1 flex items-center text-xs text-gray-500 dark:text-gray-400">
                              <span>3 mutual connections</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="ml-4 text-connectpro-primary rounded-full border-0 bg-gradient-to-r from-pink-400 to-blue-400 text-white hover:from-pink-500 hover:to-blue-500 dark:from-pink-600 dark:to-blue-600 shadow">
                            <UserPlus className="mr-1 h-3.5 w-3.5" />
                            Connect
                          </Button>
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
              <Card className="rounded-2xl shadow-lg border-0 bg-white/90 dark:bg-[#23283a]/90 transition-all duration-300 animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-purple-700 dark:text-purple-300">Your Activity</CardTitle>
                  <CardDescription className="text-gray-500 dark:text-gray-400">Profile engagement in the last 30 days</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-48 bg-gradient-to-br from-blue-50 via-white to-pink-50 dark:from-blue-900/30 dark:via-[#23283a]/30 dark:to-pink-900/30 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 shadow-inner">
                    <div className="text-center">
                      <BarChart className="mx-auto h-10 w-10 text-gray-400 dark:text-gray-500" />
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Activity graph coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Upcoming Events */}
              <Card className="rounded-2xl shadow-lg border-0 bg-white/90 dark:bg-[#23283a]/90 transition-all duration-300 animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-blue-700 dark:text-blue-300">Upcoming Events</CardTitle>
                  <CardDescription className="text-gray-500 dark:text-gray-400">Networking and learning opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, idx) => (
                      <div key={event.id} className="flex items-start p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-pink-50 dark:hover:from-blue-900/30 dark:hover:to-pink-900/30 transition-all duration-200">
                        <div className="p-2 bg-gradient-to-br from-blue-200 via-pink-200 to-purple-200 dark:from-blue-700 dark:via-pink-700 dark:to-purple-700 rounded-lg shadow">
                          <Calendar className="h-5 w-5 text-connectpro-primary dark:text-blue-300" />
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{event.title}</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{event.date} • {event.time}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{event.type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4 text-connectpro-primary rounded-full border-0 bg-gradient-to-r from-blue-400 to-pink-400 text-white hover:from-blue-500 hover:to-pink-500 dark:from-blue-600 dark:to-pink-600 shadow">
                    View All Events
                  </Button>
                </CardContent>
              </Card>
              
              {/* Notifications */}
              <Card className="rounded-2xl shadow-lg border-0 bg-white/90 dark:bg-[#23283a]/90 transition-all duration-300 animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-pink-700 dark:text-pink-300">Notifications</CardTitle>
                  <CardDescription className="text-gray-500 dark:text-gray-400">Stay updated on your network</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.map((notification, idx) => (
                      <div 
                        key={notification.id} 
                        className={`flex p-3 rounded-xl transition-all duration-200 shadow-sm ${
                          !notification.read 
                            ? "bg-gradient-to-r from-blue-50 to-pink-50 dark:from-blue-900/30 dark:to-pink-900/30"
                            : "hover:bg-gradient-to-r hover:from-pink-50 hover:to-blue-50 dark:hover:from-pink-900/30 dark:hover:to-blue-900/30"
                        }`}
                      >
                        <div className={`p-2 rounded-lg shadow ${
                          !notification.read 
                            ? "bg-gradient-to-br from-blue-400 to-pink-400 text-white dark:from-blue-600 dark:to-pink-600" 
                            : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                        }`}>
                          {notification.icon || <Bell className="h-5 w-5" />}
                        </div>
                        <div className="ml-3">
                          <h4 className={`text-sm font-semibold ${
                            !notification.read ? "text-connectpro-primary dark:text-blue-300" : "text-gray-900 dark:text-white"
                          }`}>
                            {notification.title}
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.description}</p>
                          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{notification.time}</p>
                        </div>
                        {!notification.read && (
                          <div className="ml-auto flex items-center">
                            <div className="h-2 w-2 bg-connectpro-accent rounded-full animate-pulse"></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4 text-connectpro-primary rounded-full border-0 bg-gradient-to-r from-pink-400 to-blue-400 text-white hover:from-pink-500 hover:to-blue-500 dark:from-pink-600 dark:to-blue-600 shadow">
                    View All Notifications
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      {/* Animations */}
      <style>
        {`
          .animate-fade-in { animation: fadeIn 0.7s cubic-bezier(.4,0,.2,1) both; }
          .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(.4,0,.2,1) both; }
          .animate-fade-in-down { animation: fadeInDown 0.8s cubic-bezier(.4,0,.2,1) both; }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-30px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
};

export default Dashboard;
