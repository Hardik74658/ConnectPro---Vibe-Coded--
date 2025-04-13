
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
        staggerChildren: 0.1
      }
    }
  };

  if (profiles.length === 0) {
    return (
      <motion.div 
        className="text-center py-16 bg-white rounded-2xl shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mx-auto w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
          <Search className="h-10 w-10 text-indigo-400" />
        </div>
        <h3 className="text-xl font-medium text-gray-900 mb-2">No results found</h3>
        <p className="mt-2 text-gray-500 max-w-md mx-auto mb-6">
          We couldn't find any profiles matching your search criteria. Try adjusting your filters.
        </p>
        <Button 
          onClick={clearFilters} 
          className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 shadow-md shadow-indigo-200"
        >
          Clear Filters
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {profiles.map((profile) => (
        <motion.div key={profile.id}>
          <ProfileCard profile={profile} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProfileGrid;
