import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { cn } from '@/lib/utils';

interface NavbarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  className?: string; // Add className as an optional prop
}

const RootLayout = ({ role, setRole }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { theme } = useTheme();
  const location = useLocation();

  if (location.pathname === '/') {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        sidebarOpen={sidebarOpen} 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        role={role}
        setRole={setRole}
      />
      <div
        className={cn(
          "min-h-screen pt-24 transition-all duration-300",
          // Only apply pl-64 on desktop when sidebar is open
          sidebarOpen ? "md:pl-64" : "pl-0"
        )}
      >
        <Sidebar 
          open={sidebarOpen} 
          setOpen={setSidebarOpen} 
          role={role}
          setRole={setRole}
        />
        <main className="px-4 md:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export { RootLayout };
