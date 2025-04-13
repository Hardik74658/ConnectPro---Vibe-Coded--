
import React from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SkillsFilterProps {
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  allSkills: string[];
}

const SkillsFilter: React.FC<SkillsFilterProps> = ({
  selectedSkills,
  toggleSkill,
  allSkills,
}) => {
  return (
    <>
      <Button
        onClick={() => document.getElementById("skills-dropdown")?.click()}
        variant="outline"
        className="flex items-center"
      >
        <Filter className="h-4 w-4 mr-2" />
        Skills
      </Button>

      <div className="hidden">
        <button id="skills-dropdown"></button>
      </div>

      <div className="mt-4 border-t pt-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Popular Skills</h3>
        <div className="flex flex-wrap gap-2">
          {allSkills.slice(0, 12).map((skill) => (
            <Badge
              key={skill}
              variant={selectedSkills.includes(skill) ? "default" : "outline"}
              className={`cursor-pointer ${
                selectedSkills.includes(skill)
                  ? "bg-connectpro-primary"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => toggleSkill(skill)}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsFilter;
