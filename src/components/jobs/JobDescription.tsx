import React from "react";

interface JobDescriptionProps {
  description: string;
}

const JobDescription = ({ description }: JobDescriptionProps) => {
  return (
    <div
      className="
        bg-white dark:bg-[#243463]
        rounded-[2.5rem]
        shadow-[0_8px_32px_0_rgba(60,80,180,0.10)]
        // dark:shadow-[0_8px_32px_0_rgba(10,20,40,0.22)]
        px-10 py-9
        transition-all duration-500
        animate-fadeIn
        border border-[#c7d2fe] dark:border-[#232b3b]/80
        backdrop-blur-[6px]
        relative
        overflow-hidden
        max-w-2xl mx-auto
      "
     
    >
      {/* Soft accent highlight for heading */}
      <div
        className="absolute left-8 top-8 w-16 h-16 rounded-full bg-gradient-to-br from-[#6366f1]/30 to-[#a5b4fc]/10 blur-2xl opacity-50 pointer-events-none z-0"
      />
      {/* Dark mode overlay for extra depth */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[2.5rem]"
        style={{
          display: "var(--tw-dark, none)",
          background: "linear-gradient(120deg, rgba(24,26,32,0.98) 0%, rgba(35,43,59,0.98) 100%)",
          opacity: 1,
          zIndex: 0
        }}
      />
      <h2
        className="
          text-3xl font-extrabold mb-4
          text-[#181a20] dark:text-white
          tracking-tight
          transition-colors duration-300
          relative z-10
          drop-shadow-sm
        "
      >
        Job Description
      </h2>
      <p
        className="
          text-lg
          text-[#22223b] dark:text-[#f1f5f9]
          whitespace-pre-line
          leading-relaxed
          transition-colors duration-300
          relative z-10
          font-medium
        "
      >
        {description}
      </p>
    </div>
  );
};

export default JobDescription;

// Add the following global styles to your CSS (e.g., index.css or a global stylesheet):
/*
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(24px);}
  to { opacity: 1; transform: translateY(0);}
}
.animate-fadeIn {
  animation: fadeIn 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
*/
