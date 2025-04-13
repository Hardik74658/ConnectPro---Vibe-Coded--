import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Profile } from "@/utils/mockData";
import { UserPlus, CheckCircle, Sparkle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const [isConnected, setIsConnected] = React.useState(false);
  const { toast } = useToast();

  const handleConnect = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsConnected(!isConnected);
    toast({
      title: isConnected ? "Connection removed" : "Connection request sent",
      description: isConnected 
        ? `You are no longer connected with ${profile.name}` 
        : `Your connection request to ${profile.name} has been sent!`,
    });
  };

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <Link 
        to={`/profiles/${profile.id}`}
        state={{ profileData: profile }} // Pass the profile data through route state
        className="block transform transition-all duration-300 hover:scale-105"
      >
        <div className="p-6">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="h-24 w-24 ring-4 ring-purple-100">
                <AvatarImage src={profile.avatar} alt={profile.name} />
                <AvatarFallback className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white text-xl">
                  {profile.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              {profile.skills.includes("Leadership") && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-400 to-orange-500 p-1.5 rounded-full text-white">
                  <Sparkle className="h-4 w-4" />
                </span>
              )}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{profile.name}</h3>
            <p className="text-sm text-gray-600 mb-1">{profile.title}</p>
            <p className="text-xs text-gray-500 mb-5">{profile.company}</p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-5 h-12">
              {profile.skills.slice(0, 3).map((skill, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 px-3 py-1.5 rounded-full border border-indigo-100"
                >
                  {skill}
                </span>
              ))}
              {profile.skills.length > 3 && (
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  +{profile.skills.length - 3}
                </span>
              )}
            </div>
            
            <motion.div 
              whileTap={{ scale: 0.95 }}
              className="w-full"
            >
              <Button
                onClick={handleConnect}
                className={`w-full rounded-xl ${
                  isConnected
                    ? "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200"
                    : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md shadow-indigo-200"
                }`}
                variant={isConnected ? "outline" : "default"}
              >
                {isConnected ? (
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    className="flex items-center"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Connected
                  </motion.div>
                ) : (
                  <motion.div className="flex items-center">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Connect
                  </motion.div>
                )}
              </Button>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProfileCard;
