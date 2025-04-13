
import React from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ActiveFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  location: string;
  setLocation: (location: string) => void;
  selectedSkills: string[];
  removeSkill: (skill: string) => void;
  clearFilters: () => void;
  isFiltering: boolean;
}

const ActiveFilters: React.FC<ActiveFiltersProps> = ({
  searchQuery,
  setSearchQuery,
  location,
  setLocation,
  selectedSkills,
  removeSkill,
  clearFilters,
  isFiltering,
}) => {
  if (!isFiltering) return null;

  const badgeVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  return (
    <motion.div 
      className="mt-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center flex-wrap gap-2">
        {searchQuery && (
          <motion.div
            variants={badgeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Badge 
              variant="secondary" 
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 border border-indigo-100"
            >
              Search: {searchQuery}
              <X
                className="h-3 w-3 cursor-pointer hover:text-indigo-900 transition-colors"
                onClick={() => setSearchQuery("")}
              />
            </Badge>
          </motion.div>
        )}
        
        {location && location !== "all" && (
          <motion.div
            variants={badgeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Badge 
              variant="secondary" 
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 border border-blue-100"
            >
              Location: {location}
              <X
                className="h-3 w-3 cursor-pointer hover:text-blue-900 transition-colors"
                onClick={() => setLocation("all")}
              />
            </Badge>
          </motion.div>
        )}
        
        {selectedSkills.map((skill) => (
          <motion.div
            key={skill}
            variants={badgeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Badge
              variant="secondary"
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-50 to-violet-50 text-purple-700 border border-purple-100"
            >
              {skill}
              <X
                className="h-3 w-3 cursor-pointer hover:text-purple-900 transition-colors"
                onClick={() => removeSkill(skill)}
              />
            </Badge>
          </motion.div>
        ))}
        
        {isFiltering && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-sm text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-full transition-colors"
            >
              Clear All
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ActiveFilters;
