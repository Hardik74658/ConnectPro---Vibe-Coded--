import React from "react";
import { Search } from "lucide-react";
import { Profile } from "@/utils/mockData";
import ProfileCard from "@/components/ui/ProfileCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProfileGridProps {
  profiles: Profile[];
  clearFilters: () => void;
}

const ProfileGrid: React.FC<ProfileGridProps> = ({ profiles, clearFilters }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const cardMotion = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 18, mass: 0.8 } }
  };

  if (profiles.length === 0) {
    return (
      <motion.div 
        className="
          text-center py-20 px-4 w-full
          bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f0abfc]
          dark:from-[#18181b] dark:via-[#23232a] dark:to-[#6d28d9]
          rounded-3xl shadow-2xl dark:shadow-purple-900/40
          transition-all duration-500
          flex flex-col items-center
        "
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="
            mx-auto w-64 h-24
            bg-gradient-to-tr from-indigo-400/30 via-purple-400/30 to-pink-400/30
            dark:from-indigo-700/40 dark:via-purple-700/40 dark:to-pink-700/40
            rounded-2xl flex items-center justify-center mb-8
            shadow-lg dark:shadow-purple-900/30
            transition-all duration-300
          "
          initial={{ scale: 0.85, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 120 }}
        >
          <Search className="h-12 w-12 text-indigo-500 dark:text-pink-300 transition-colors duration-300" />
        </motion.div>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
          No results found
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-md mx-auto mb-10 text-lg">
          We couldn't find any profiles matching your search criteria.<br />
          Try adjusting your filters for better results.
        </p>
        <Button 
          onClick={clearFilters} 
          className="
            rounded-xl px-8 py-3 font-semibold text-lg
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            hover:from-indigo-600 hover:to-pink-600
            text-white shadow-xl shadow-indigo-200/40 dark:shadow-purple-900/40
            transition-all duration-200
            focus:ring-4 focus:ring-pink-300 focus:ring-offset-2 focus:outline-none
          "
        >
          Clear Filters
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="
        gap-8 md:gap-10 xl:gap-12
        w-full max-w-7xl mx-auto
        py-6 md:py-10
        transition-all duration-300
      "
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      }}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {profiles.map((profile) => (
        <motion.div
          key={profile.id}
          variants={cardMotion}
          whileHover={{
            scale: 1.025,
            boxShadow: "0 8px 32px 0 rgba(99,102,241,0.18), 0 1.5px 8px 0 rgba(236,72,153,0.10)"
          }}
          whileTap={{ scale: 0.98 }}
          className="transition-all w-full duration-200"
        >
          <ProfileCard profile={profile} className="w-full h-full" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProfileGrid;
