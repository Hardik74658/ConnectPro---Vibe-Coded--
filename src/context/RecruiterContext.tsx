import React, { createContext, useContext, useState } from 'react';
import { mockRecruiters } from '@/utils/mockData';

interface RecruiterContextType {
  recruiter: Recruiter | null;
  setRecruiter: (recruiter: Recruiter | null) => void;
  isRecruiterLoggedIn: boolean;
  handleRecruiterLogin: (email: string, password: string) => Promise<void>;
  handleRecruiterLogout: () => void;
}

export interface Recruiter {
  id: string;
  name: string;
  email: string;
  company: string;
  title: string;
  avatar: string;
  postedJobs: string[];
}

const RecruiterContext = createContext<RecruiterContextType | undefined>(undefined);

export const RecruiterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [recruiter, setRecruiter] = useState<Recruiter | null>(null);

  const handleRecruiterLogin = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    const foundRecruiter = mockRecruiters.find(r => r.email === email);
    
    if (foundRecruiter && password === 'password') {
      setRecruiter(foundRecruiter);
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const handleRecruiterLogout = () => {
    setRecruiter(null);
  };

  return (
    <RecruiterContext.Provider
      value={{
        recruiter,
        setRecruiter,
        isRecruiterLoggedIn: !!recruiter,
        handleRecruiterLogin,
        handleRecruiterLogout,
      }}
    >
      {children}
    </RecruiterContext.Provider>
  );
};

export const useRecruiter = () => {
  const context = useContext(RecruiterContext);
  if (context === undefined) {
    throw new Error('useRecruiter must be used within a RecruiterProvider');
  }
  return context;
};
