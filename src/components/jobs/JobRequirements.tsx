import React from "react";

interface JobRequirementsProps {
  requirements: string[];
}

const JobRequirements = ({ requirements }: JobRequirementsProps) => {
  return (
    <div
      className="
        bg-white dark:bg-gradient-to-br dark:from-[#232526] dark:to-[#414345]
        rounded-2xl shadow-md transition-shadow duration-300
        p-6
        animate-fadeIn
      "
      style={{
        boxShadow:
          "0 2px 16px 0 rgba(60, 72, 88, 0.10), 0 1.5px 4px 0 rgba(60, 72, 88, 0.08)",
      }}
    >
      <h2
        className="
          text-2xl font-bold mb-4
          text-[#2D3748] dark:text-[#F7FAFC]
          tracking-tight
        "
        style={{
          letterSpacing: "0.01em",
        }}
      >
        Requirements
      </h2>
      <ul className="list-disc pl-6 space-y-3">
        {requirements.map((requirement, index) => (
          <li
            key={index}
            className="
              text-gray-700 dark:text-[#E2E8F0]
              bg-[#F7FAFC] dark:bg-[#2D3748]
              rounded-xl px-4 py-2
              transition-colors duration-200
              hover:bg-[#E3F2FD] dark:hover:bg-[#3B4252]
              shadow-sm
              cursor-pointer
              animate-fadeInUp
            "
            style={{
              fontSize: "1.05rem",
              fontWeight: 500,
              borderLeft: "4px solid #60A5FA",
            }}
          >
            {requirement}
          </li>
        ))}
      </ul>
      <style>
        {`
          @media (prefers-color-scheme: dark) {
            .dark\\:bg-gradient-to-br {
              background: linear-gradient(135deg, #232526 0%, #414345 100%);
            }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(12px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeIn {
            animation: fadeIn 0.7s cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(16px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.6s cubic-bezier(.4,0,.2,1) both;
          }
        `}
      </style>
    </div>
  );
};

export default JobRequirements;
