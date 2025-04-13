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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Header */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform hover:scale-[1.01] transition-transform duration-300">
            <div className="h-48 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>
            <div className="px-8 sm:px-10 pb-10 -mt-20">
              <div className="flex flex-col sm:flex-row items-center sm:items-end sm:space-x-5">
                <div className="flex-shrink-0">
                  <Avatar className="h-36 w-36 rounded-full border-4 border-white bg-white">
                    <AvatarImage src={loggedInUser.avatar} alt={loggedInUser.name} />
                    <AvatarFallback>{loggedInUser.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="mt-6 sm:mt-0 text-center sm:text-left flex-1">
                  <h1 className="text-3xl font-bold text-gray-900">{loggedInUser.name}</h1>
                  <p className="text-xl text-gray-600">{loggedInUser.bio}</p>
                  <div className="flex items-center justify-center sm:justify-start mt-3 text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{loggedInUser.location}</span>
                  </div>
                </div>
                <div className="mt-6 sm:mt-0">
                  <Button
                    size="sm"
                    className="flex items-center bg-blue-600 text-white hover:bg-blue-700"
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="text-gray-600 leading-relaxed">{loggedInUser.bio}</p>
              </div>

              {/* Experience Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold mb-4">Experience</h2>
                <ul className="space-y-4">
                  {loggedInUser.experience.map((job) => (
                    <li key={job.id} className="text-gray-600">
                      <strong>{job.role}</strong> at {job.company} ({job.startDate} - {job.endDate || "Present"})
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-5 w-5 mr-2 text-gray-500" />
                    <span>{loggedInUser.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                    <span>{loggedInUser.location}</span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-xl font-semibold mb-6">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {loggedInUser.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="px-3 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 border border-indigo-100 hover:from-indigo-100 hover:to-purple-100 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OwnProfile;
