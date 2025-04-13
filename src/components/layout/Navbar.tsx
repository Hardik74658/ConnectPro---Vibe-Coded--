import React, { useEffect, useState, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from "@/context/AuthContext";
import { useTheme } from '@/context/ThemeContext';
import { Button } from "@/components/ui/button";
import { 
  Menu, Bell, Sun, Moon, Home, Users, 
  Briefcase, User, Settings, LogOut, ChevronDown
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeIcon from "@/components/ThemeIcon";

interface NavbarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Navbar = memo(({ sidebarOpen, toggleSidebar }: NavbarProps) => {
  const { theme, setTheme } = useTheme();
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const handleThemeToggle = () => {
    const nextTheme = theme === "dark" ? "light" : theme === "light" ? "system" : "dark";
    setTheme(nextTheme);
  };

  const mainNav = [
    { 
      name: 'ConnectPro', 
      href: '/', 
      primary: true,
      className: "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold text-2xl"
    },
    { 
      name: 'Home', 
      href: '/dashboard', 
      icon: Home,
      className: "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
    },
    { 
      name: 'Profiles', 
      href: '/profiles', 
      icon: Users,
      className: "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
    },
    { 
      name: 'Jobs', 
      href: '/jobs', 
      icon: Briefcase,
      className: "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
    },
  ];

  return (
    <nav className={cn(
      "fixed top-4 z-50 transition-all duration-300",
      {
        "left-4 right-4": !sidebarOpen,
        "left-4 md:left-72 right-4": sidebarOpen
      },
      "rounded-xl border shadow-lg backdrop-blur-lg",
      theme === 'dark' ? 'bg-gray-900/90 border-gray-800' : 'bg-white/90 border-gray-200'
    )}>
      <div className="px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button
            onClick={toggleSidebar}
            className={cn(
              "p-2 rounded-lg transition-colors",
              theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
            )}
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {mainNav.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  item.className,
                  !item.primary && location.pathname === item.href
                    ? `border-indigo-500 ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}`
                    : !item.primary && `border-transparent ${
                        theme === 'dark' 
                          ? 'text-gray-300 hover:text-gray-100 hover:border-gray-400' 
                          : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`
                )}
              >
                {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleThemeToggle} 
            className={cn(
              "transition-colors",
              theme === "dark"
                ? "text-yellow-400 hover:text-yellow-500 hover:bg-gray-800"
                : theme === "light"
                ? "text-gray-500 hover:text-gray-900"
                : "text-blue-500 hover:text-blue-600"
            )}
          >
            <ThemeIcon theme={theme} />
          </Button>

          {isAuthenticated && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full relative"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </Button>

              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="rounded-full flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user?.profilePicture} />
                        <AvatarFallback>{user?.name?.[0] || 'U'}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">
                        {user?.name}
                      </span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/settings" className="flex items-center">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logout} className="text-red-500">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
