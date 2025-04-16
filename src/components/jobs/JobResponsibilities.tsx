import React from "react";

interface JobResponsibilitiesProps {
  responsibilities: string[];
}

const JobResponsibilities = ({ responsibilities }: JobResponsibilitiesProps) => {
  return (
    <div
      className="
        bg-gradient-to-br from-white/70 via-blue-50/60 to-blue-100/60
        dark:from-[#181f2a]/80 dark:via-[#232b3a]/70 dark:to-[#1a2233]/80
        rounded-3xl shadow-xl p-8
        transition-all duration-500 ease-in-out
        animate-fadeIn
        backdrop-blur-md
        border border-white/30 dark:border-white/10
      "
      style={{
        // fallback for fade-in if animate-fadeIn is not defined in Tailwind config
        animation: "fadeIn 0.7s cubic-bezier(0.4,0,0.2,1)"
      }}
    >
      <h2
        className="
          text-2xl font-extrabold mb-5
          text-[#24406e] dark:text-[#a3c9f9]
          tracking-tight
          transition-colors duration-300
        "
      >
        Responsibilities
      </h2>
      <ul className="list-disc pl-6 space-y-3">
        {responsibilities.map((responsibility, index) => (
          <li
            key={index}
            className="
              text-[#2d3748] dark:text-[#e3eaf7]
              bg-white/60 dark:bg-[#232b3a]/70
              rounded-2xl px-5 py-2.5
              shadow-sm
              transition-all duration-300
              hover:bg-blue-100/70 hover:dark:bg-[#2a3550]/80
              hover:scale-[1.025]
              cursor-pointer
              group
              border border-transparent hover:border-blue-200 hover:dark:border-[#3a4a6b]
            "
            style={{
              // subtle staggered animation
              animation: `fadeInUp 0.5s ${0.1 + index * 0.07}s both`
            }}
          >
            <span className="group-hover:text-[#2563eb] group-hover:dark:text-[#7fb3ff] transition-colors duration-300">
              {responsibility}
            </span>
          </li>
        ))}
      </ul>
      {/* Inline keyframes for fadeIn and fadeInUp if not in Tailwind config */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(16px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(16px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
};

export default JobResponsibilities;
