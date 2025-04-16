import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Edit } from "lucide-react";
import { getProfileById } from "@/utils/mockData";

const OwnProfile = () => {
  const navigate = useNavigate();

  // Fetch logged-in user data from mock data
  const loggedInUser = getProfileById("loggedInUser");

  if (!loggedInUser) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8fafc] to-[#e0e7ff] dark:from-[#18181b] dark:to-[#312e81] transition-colors duration-700">
      <main className="flex-grow py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          {/* Profile Header */}
          <div
            className="bg-white/90 dark:bg-[#232136]/90 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-[#393552] mb-10
              animate-fade-in-up transition-all duration-700"
            style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
          >
            <div className="h-48 bg-gradient-to-r from-[#6366f1] via-[#a21caf] to-[#f472b6] dark:from-[#7f9cf5] dark:via-[#c084fc] dark:to-[#f9a8d4] transition-colors duration-700" />
            <div className="px-10 pb-10 -mt-20">
              <div className="flex flex-col sm:flex-row items-center sm:items-end sm:space-x-8">
                <div className="flex-shrink-0">
                  <Avatar className="h-36 w-36 rounded-full border-4 border-white bg-white shadow-lg transition-transform duration-500 hover:scale-105">
                    <AvatarImage src={loggedInUser.avatar} alt={loggedInUser.name} />
                    <AvatarFallback>{loggedInUser.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="mt-6 sm:mt-0 text-center sm:text-left flex-1">
                  <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight animate-fade-in">
                    {loggedInUser.name}
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mt-2 animate-fade-in delay-100">
                    {loggedInUser.bio}
                  </p>
                  <div className="flex items-center justify-center sm:justify-start mt-3 text-gray-500 dark:text-gray-400 animate-fade-in delay-200">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{loggedInUser.location}</span>
                  </div>
                </div>
                <div className="mt-6 sm:mt-0">
                  <Button
                    size="sm"
                    className="flex items-center bg-gradient-to-r from-[#6366f1] to-[#a21caf] text-white hover:from-[#818cf8] hover:to-[#c084fc] rounded-2xl shadow-lg transition-all duration-300 focus:ring-2 focus:ring-[#a21caf]/40"
                    onClick={() => navigate("/settings")}
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              {/* About Section */}
              <section
                className="bg-white/90 dark:bg-[#232136]/90 rounded-2xl shadow-lg p-10 border border-gray-100 dark:border-[#393552]
                  animate-fade-in-up transition-all duration-700"
                style={{ boxShadow: "0 4px 24px 0 rgba(99, 102, 241, 0.08)" }}
              >
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">About</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{loggedInUser.bio}</p>
              </section>

              {/* Experience Section */}
              <section
                className="bg-white/90 dark:bg-[#232136]/90 rounded-2xl shadow-lg p-10 border border-gray-100 dark:border-[#393552]
                  animate-fade-in-up transition-all duration-700 delay-100"
                style={{ boxShadow: "0 4px 24px 0 rgba(99, 102, 241, 0.08)" }}
              >
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Experience</h2>
                <ul className="space-y-4">
                  {loggedInUser.experience.map((job) => (
                    <li
                      key={job.id}
                      className="text-gray-600 dark:text-gray-300 rounded-lg px-3 py-2 hover:bg-gradient-to-r hover:from-[#f1f5f9] hover:to-[#e0e7ff] dark:hover:from-[#393552] dark:hover:to-[#232136] transition-all duration-200"
                    >
                      <strong className="text-indigo-700 dark:text-indigo-300">{job.role}</strong> at{" "}
                      <span className="text-purple-700 dark:text-purple-300">{job.company}</span> (
                      {job.startDate} - {job.endDate || "Present"})
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Contact Info */}
              <section
                className="bg-white/90 dark:bg-[#232136]/90 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-[#393552]
                  animate-fade-in-up transition-all duration-700"
                style={{ boxShadow: "0 2px 16px 0 rgba(99, 102, 241, 0.07)" }}
              >
                <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200">
                    <Mail className="h-5 w-5 mr-2 text-indigo-400 dark:text-indigo-300" />
                    <span>{loggedInUser.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200">
                    <MapPin className="h-5 w-5 mr-2 text-purple-400 dark:text-purple-300" />
                    <span>{loggedInUser.location}</span>
                  </div>
                </div>
              </section>

              {/* Skills */}
              <section
                className="bg-white/90 dark:bg-[#232136]/90 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-[#393552]
                  animate-fade-in-up transition-all duration-700 delay-100"
                style={{ boxShadow: "0 2px 16px 0 rgba(99, 102, 241, 0.07)" }}
              >
                <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {loggedInUser.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="px-3 py-1.5 bg-gradient-to-r from-[#e0e7ff] to-[#f3e8ff] text-indigo-700 border border-indigo-100
                        hover:from-[#c7d2fe] hover:to-[#e9d5ff] dark:bg-gradient-to-r dark:from-[#393552] dark:to-[#232136] dark:text-indigo-200 dark:border-[#393552]
                        rounded-xl shadow transition-all duration-200 cursor-pointer scale-100 hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </div>
      </main>
      {/* Animations */}
      <style>
        {`
          .animate-fade-in-up {
            opacity: 0;
            transform: translateY(24px);
            animation: fadeInUp 0.7s cubic-bezier(.4,0,.2,1) forwards;
          }
          .animate-fade-in {
            opacity: 0;
            animation: fadeIn 0.7s cubic-bezier(.4,0,.2,1) forwards;
          }
          .animate-fade-in.delay-100 { animation-delay: 0.1s; }
          .animate-fade-in-up.delay-100 { animation-delay: 0.1s; }
          .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default OwnProfile;
