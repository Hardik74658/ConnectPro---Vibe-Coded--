import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const Messages = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-4">Messages</h1>
        <p>Your messages will appear here.</p>
      </div>
    </div>
  );
};

export default Messages;
