import React from "react";
import { Button } from "@/components/ui/button";

interface ApplyCardProps {
  onApplyNow: () => void;
  isSaved: boolean;
  onSaveJob: () => void;
}

const ApplyCard = ({ onApplyNow, isSaved, onSaveJob }: ApplyCardProps) => {
  return (
    <div
      className={`
        bg-white dark:bg-neutral-900
        rounded-2xl
        shadow-md dark:shadow-lg
        p-6
        animate-fade-in
        transition-shadow duration-300
        hover:shadow-xl dark:hover:shadow-2xl
        border border-transparent dark:border-neutral-800
      `}
      style={{
        boxShadow: "0 4px 24px 0 rgba(80, 72, 229, 0.08)",
      }}
    >
      <h2 className="text-lg font-bold mb-4 text-connectpro-primary dark:text-connectpro-accent transition-colors duration-200">
        Ready to Apply?
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
        Take the next step in your career journey. Apply now for this position.
      </p>
      <Button
        onClick={onApplyNow}
        className={`
          w-full
          bg-gradient-to-r from-connectpro-primary via-connectpro-accent to-blue-500
          dark:from-connectpro-accent dark:via-connectpro-primary dark:to-purple-700
          hover:from-blue-500 hover:to-connectpro-primary
          dark:hover:from-purple-700 dark:hover:to-connectpro-accent
          text-white
          font-semibold
          rounded-xl
          shadow-md
          transition-all duration-200
          scale-100 hover:scale-[1.03]
          focus:outline-none focus:ring-2 focus:ring-connectpro-accent focus:ring-offset-2
        `}
        style={{
          boxShadow: "0 2px 12px 0 rgba(80, 72, 229, 0.13)",
        }}
      >
        Apply Now
      </Button>
      <div className="mt-4 text-center">
        <button
          className={`
            text-sm
            font-medium
            px-4 py-2
            rounded-full
            transition-all duration-200
            text-connectpro-accent dark:text-connectpro-primary
            hover:bg-connectpro-accent/10 dark:hover:bg-connectpro-primary/10
            hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-connectpro-accent
            shadow-none
          `}
          onClick={onSaveJob}
          aria-pressed={isSaved}
        >
          {isSaved ? (
            <span>
              <span className="inline-block align-middle mr-1">💔</span>
              Remove from saved jobs
            </span>
          ) : (
            <span>
              <span className="inline-block align-middle mr-1">💖</span>
              Save for later
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ApplyCard;
