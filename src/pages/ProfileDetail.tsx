import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import ProfileCard from "@/components/ui/ProfileCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Briefcase,
  Building,
  Calendar,
  ChevronLeft,
  ExternalLink,
  Mail,
  MapPin,
  Share,
  User,
  Users,
  UserPlus,
  CheckCircle,
} from "lucide-react";
import {
  getProfileById,
  getSimilarProfiles,
  Profile,
  Experience,
  Education,
} from "@/utils/mockData";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/context/ThemeContext";

const ProfileDetail = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const profileFromState = location.state?.profileData;
  const [profile, setProfile] = useState<Profile | null>(null);
  const [similarProfiles, setSimilarProfiles] = useState<Profile[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { theme } = useTheme();

  useEffect(() => {
    if (profileFromState) {
      setProfile(profileFromState);
      setSimilarProfiles(getSimilarProfiles(profileFromState.id));
    } else if (id) {
      const foundProfile = getProfileById(id);
      if (foundProfile) {
        setProfile(foundProfile);
        setSimilarProfiles(getSimilarProfiles(id));
      } else {
        toast({
          title: "Profile not found",
          description: "The requested profile does not exist.",
        });
        navigate("/profiles");
      }
    }
  }, [id, profileFromState, navigate, toast]);

  const handleConnect = () => {
    setIsConnected(!isConnected);
    toast({
      title: isConnected ? "Connection removed" : "Connection request sent",
      description: isConnected
        ? `You are no longer connected with ${profile?.name}`
        : `Your connection request to ${profile?.name} has been sent!`,
    });
  };

  const handleShare = () => {
    toast({
      title: "Profile shared",
      description: "Profile link copied to clipboard",
    });
  };

  if (!profile) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-24 w-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <div className="h-8 w-48 bg-gray-200 rounded mx-auto mb-4"></div>
              <div className="h-6 w-32 bg-gray-200 rounded mx-auto"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string, endDate: string | null) => {
    const start = new Date(dateString);
    const startMonth = start.toLocaleString('default', { month: 'short' });
    const startYear = start.getFullYear();
    
    if (!endDate) {
      return `${startMonth} ${startYear} - Present`;
    }
    
    const end = new Date(endDate);
    const endMonth = end.toLocaleString('default', { month: 'short' });
    const endYear = end.getFullYear();
    
    return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
  };

  const ExperienceItem: React.FC<{ experience: Experience }> = ({ experience }) => (
    <div className="mb-6">
      <div className="flex items-start">
        <div className="p-2 bg-gray-100 rounded-md mr-4">
          <Briefcase className="h-5 w-5 text-gray-500" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">{experience.role}</h3>
          <div className="flex items-center text-gray-600 mt-1">
            <Building className="h-4 w-4 mr-1" />
            <span>{experience.company}</span>
            <span className="mx-2">•</span>
            <MapPin className="h-4 w-4 mr-1" />
            <span>{experience.location}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm mt-1">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{formatDate(experience.startDate, experience.endDate)}</span>
          </div>
          <p className="mt-2 text-gray-600">{experience.description}</p>
        </div>
      </div>
    </div>
  );

  const EducationItem: React.FC<{ education: Education }> = ({ education }) => (
    <div className="mb-6">
      <div className="flex items-start">
        <div className="p-2 bg-gray-100 rounded-md mr-4">
          <User className="h-5 w-5 text-gray-500" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">{education.institution}</h3>
          <p className="text-gray-600">
            {education.degree} in {education.field}
          </p>
          <div className="flex items-center text-gray-500 text-sm mt-1">
            <Calendar className="h-4 w-4 mr-1" />
            <span>
              {new Date(education.startDate).getFullYear()} -{" "}
              {new Date(education.endDate).getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-b from-gray-50 to-gray-100'}`}>
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button
            variant="ghost"
            className={`flex items-center mb-8 hover:-translate-x-1 transition-transform ${
              theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            onClick={() => navigate()}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Profiles
          </Button>

          {/* Profile Header */}
          <div className={`${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          } rounded-2xl shadow-xl overflow-hidden border ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-100'
          } transform hover:scale-[1.01] transition-transform duration-300`}>
            <div className="h-48 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>
            <div className="px-8 sm:px-10 pb-10 -mt-20">
              <div className="flex flex-col sm:flex-row items-center sm:items-end sm:space-x-5">
                <div className="flex-shrink-0">
                  <Avatar className="h-36 w-36 rounded-full border-4 border-white bg-white">
                    <AvatarImage src={profile.avatar} alt={profile.name} />
                    <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="mt-6 sm:mt-0 text-center sm:text-left flex-1">
                  <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {profile.name}
                  </h1>
                  <p className={`text-xl  ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {profile.title}
                  </p>
                  <div className={`flex items-center justify-center sm:justify-start mt-3 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <Building className="h-4 w-4 mr-1" />
                    <span>{profile.company}</span>
                    <span className="mx-2">•</span>
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{profile.location}</span>
                  </div>
                </div>
                <div className="mt-6 sm:mt-0 flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center"
                    onClick={handleShare}
                  >
                    <Share className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button
                    size="sm"
                    className={isConnected ? "bg-gray-200 text-gray-800 hover:bg-gray-300" : ""}
                    variant={isConnected ? "outline" : "default"}
                    onClick={handleConnect}
                  >
                    {isConnected ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Connected
                      </>
                    ) : (
                      <>
                        <UserPlus className="h-4 w-4 mr-2" />
                        Connect
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className={`${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } rounded-2xl shadow-lg p-8 border ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-100'
              }`}>
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                } leading-relaxed`}>
                  {profile.bio}
                </p>
              </div>

              {/* Experience & Education Tabs */}
              <div className={`${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } rounded-2xl shadow-lg p-8 border ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-100'
              }`}>
                <Tabs defaultValue="experience" className="w-full">
                  <TabsList className="mb-6">
                    <TabsTrigger value="experience" className="text-sm">
                      Experience
                    </TabsTrigger>
                    <TabsTrigger value="education" className="text-sm">
                      Education
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="experience" className="space-y-6">
                    {profile.experience.map((exp) => (
                      <ExperienceItem key={exp.id} experience={exp} />
                    ))}
                  </TabsContent>
                  <TabsContent value="education" className="space-y-6">
                    {profile.education.map((edu) => (
                      <EducationItem key={edu.id} education={edu} />
                    ))}
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className={`${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } rounded-2xl shadow-lg p-8 border ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-100'
              }`}>
                <h2 className={`text-xl font-semibold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Contact Information</h2>
                <div className="space-y-4">
                  <div className={`flex items-center ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <Mail className={`h-5 w-5 mr-2 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    <span>{profile.email}</span>
                  </div>
                  <div className={`flex items-center ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <MapPin className={`h-5 w-5 mr-2 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    <span>{profile.location}</span>
                  </div>
                  <div className={`flex items-center ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <ExternalLink className={`h-5 w-5 mr-2 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    {profile.website ? (
                      <a 
                        href={profile.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`hover:underline break-all ${
                          theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                        }`}
                      >
                        {profile.website}
                      </a>
                    ) : (
                      <span className="text-gray-400">No website provided</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className={`${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } rounded-2xl shadow-lg p-8 border ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-100'
              }`}>
                <h2 className="text-xl font-semibold mb-6">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      className={`px-3 py-1.5 ${
                        theme === 'dark' 
                          ? 'bg-gray-700 text-gray-100 hover:bg-gray-600' 
                          : 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 border border-indigo-100 hover:from-indigo-100 hover:to-purple-100'
                      } transition-colors`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Similar Profiles */}
          {similarProfiles.length > 0 && (
            <div className="mb-8 animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Similar Professionals
                </h2>
                <Link 
                  to="/profiles" 
                  className={`${
                    theme === 'dark' 
                      ? 'text-blue-400 hover:text-blue-300' 
                      : 'text-blue-600 hover:text-blue-700'
                  } hover:underline`}
                >
                  View all profiles
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {similarProfiles.map((profile) => (
                  <ProfileCard key={profile.id} profile={profile} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfileDetail;
