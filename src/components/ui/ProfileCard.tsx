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
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, className }) => {
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
      className={`bg-gradient-to-br from-white via-indigo-50 to-purple-50 dark:from-[#181825] dark:via-[#232336] dark:to-[#1a1a2e] rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-transparent dark:border-[#232336] group ${className}`}
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.025, boxShadow: "0 8px 32px 0 rgba(80, 72, 229, 0.18)" }}
    >
      <Link
        to={`/profiles/${profile.id}`}
        state={{ profileData: profile }}
        className="block transition-all duration-300"
        tabIndex={0}
      >
        <div className="p-7">
          <div className="flex flex-col items-center text-center">
            <motion.div
              className="relative mb-5"
              whileHover={{ scale: 1.06, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Avatar className="h-24 w-24 ring-4 ring-indigo-200 dark:ring-[#232336] shadow-lg transition-all duration-300 rounded-2xl">
                <AvatarImage src={profile.avatar} alt={profile.name} />
                <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-2xl font-bold rounded-2xl">
                  {profile.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              {profile.skills.includes("Leadership") && (
                <motion.span
                  className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-400 to-pink-500 p-2 rounded-full text-white shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                >
                  <Sparkle className="h-5 w-5" />
                </motion.span>
              )}
            </motion.div>
            <h3 className="text-xl font-extrabold text-gray-800 dark:text-white mb-1 tracking-tight">
              {profile.name}
            </h3>
            <p className="text-sm text-indigo-600 dark:text-indigo-300 mb-1 font-medium">
              {profile.title}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
              {profile.company}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-6 min-h-[2.5rem]">
              {profile.skills.slice(0, 3).map((skill, index) => (
                <motion.span
                  key={index}
                  className="text-xs font-semibold bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-[#232336] dark:to-[#1a1a2e] text-indigo-700 dark:text-indigo-200 px-3 py-1.5 rounded-2xl border border-indigo-200 dark:border-[#232336] shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {skill}
                </motion.span>
              ))}
              {profile.skills.length > 3 && (
                <span className="text-xs font-semibold bg-gradient-to-r from-gray-100 to-gray-200 dark:from-[#232336] dark:to-[#1a1a2e] text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-2xl border border-gray-200 dark:border-[#232336]">
                  +{profile.skills.length - 3}
                </span>
              )}
            </div>

            <motion.div
              whileTap={{ scale: 0.97 }}
              className="w-full"
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                onClick={handleConnect}
                className={`w-full rounded-2xl py-3 font-bold text-base transition-all duration-300 shadow-md ${
                  isConnected
                    ? "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 dark:text-indigo-200 border border-indigo-200 dark:border-[#232336] hover:bg-indigo-100 dark:hover:bg-[#232336]"
                    : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white shadow-lg"
                }`}
                variant={isConnected ? "outline" : "default"}
                tabIndex={0}
              >
                {isConnected ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0.7 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                    Connected
                  </motion.div>
                ) : (
                  <motion.div
                    className="flex items-center"
                    initial={{ scale: 0.95, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    <UserPlus className="h-5 w-5 mr-2" />
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
