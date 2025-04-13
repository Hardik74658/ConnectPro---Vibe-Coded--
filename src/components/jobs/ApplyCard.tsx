
import React from "react";
import { Button } from "@/components/ui/button";

interface ApplyCardProps {
  onApplyNow: () => void;
  isSaved: boolean;
  onSaveJob: () => void;
}

const ApplyCard = ({ onApplyNow, isSaved, onSaveJob }: ApplyCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 animate-fade-in">
      <h2 className="text-lg font-semibold mb-4">Ready to Apply?</h2>
      <p className="text-gray-600 mb-4">
        Take the next step in your career journey. Apply now for this position.
      </p>
      <Button 
        onClick={onApplyNow}
        className="w-full bg-connectpro-primary hover:bg-connectpro-primary/90"
      >
        Apply Now
      </Button>
      <div className="mt-4 text-center">
        <button 
          className="text-sm text-connectpro-accent hover:underline"
          onClick={onSaveJob}
        >
          {isSaved ? "Remove from saved jobs" : "Save for later"}
        </button>
      </div>
    </div>
  );
};

export default ApplyCard;
