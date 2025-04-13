
import React from "react";
import Footer from "@/components/layout/Footer";

const JobLoader = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-16 w-16 bg-gray-200 rounded mx-auto mb-4"></div>
            <div className="h-8 w-64 bg-gray-200 rounded mx-auto mb-4"></div>
            <div className="h-6 w-48 bg-gray-200 rounded mx-auto"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobLoader;
