import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';
import {
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Settings,
  BookOpen,
  HelpCircle,
  UserCircle,
  ChevronLeft,
  Layout,
  Globe,
  Menu,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  role: "user" | "recruiter";
  setRole: (role: "user" | "recruiter") => void;
}

const Sidebar = ({ open, setOpen, role, setRole }: SidebarProps) => {
  // Always call hooks first!
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { theme } = useTheme();
  const location = useLocation();

  // Ensure sidebar is closed on first load if mobile
  useEffect(() => {
    if (window.innerWidth < 768 && open) {
      setOpen(false);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) setOpen(false); // Auto-close sidebar on mobile
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setOpen]);

  // Hide sidebar on landing page
  if (location.pathname === "/") return null;

  console.log("Sidebar role:", role); // Debug: check if role updates

  // Prevent body scroll and layout shift when sidebar is open on mobile
  useEffect(() => {
    if (isMobile && open) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMobile, open]);

  const navigation =
    role === "user"
      ? [
          { name: 'Dashboard', href: '/dashboard', icon: Home },
          { name: 'Profiles', href: '/profiles', icon: Users },
          { name: 'Jobs', href: '/jobs', icon: Briefcase },
          { name: 'Messages', href: '/messages', icon: MessageSquare },
          { name: 'Learning', href: '/learning', icon: BookOpen },
          { name: 'Community', href: '/community', icon: Globe },
        ]
      : [
          { name: 'Dashboard', href: '/recruiter/dashboard', icon: Home },
          { name: 'Profiles', href: '/profiles', icon: Users },
          { name: 'Post Job', href: '/jobs', icon: Briefcase },
          { name: 'Messages', href: '/messages', icon: MessageSquare },
        ];

  const resources = [
    { name: 'Help Center', href: '/help-center', icon: HelpCircle },
  ];

  const userLinks = [
    { name: 'Profile', href: '/profile', icon: UserCircle },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isMobile && (
        <div
          className={cn(
            "fixed inset-0 bg-black/50 z-[100] transition-opacity md:hidden",
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={cn(
          isMobile
            ? "fixed top-0 left-0 w-64 h-full transition-transform duration-300 flex flex-col z-[101]"
            : "fixed top-0 bottom-0 left-0 w-64 h-full transition-transform duration-300 flex flex-col z-40",
          isMobile
            ? open
              ? "translate-x-0"
              : "-translate-x-full"
            : open
              ? "translate-x-0"
              : "-translate-x-full",
          theme === 'dark'
            ? 'bg-gray-900 border-r border-gray-800'
            : 'bg-white border-r border-gray-200'
        )}
      >
        {/* Close button for mobile/tablet */}
        {isMobile && open && (
          <div className="flex items-center justify-end h-16 px-4 md:hidden">
            <button
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
              onClick={() => setOpen(false)}
              aria-label="Close sidebar"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-200" />
            </button>
          </div>
        )}
        <div className={cn(
          "flex flex-col flex-1", // make this flex-1 so the button stays at the bottom
          !open && "md:items-center",
          !open && "overflow-hidden"
        )}>
          <div className="h-16 flex items-center px-4">
            <Link to="/" className="flex-shrink-0">
              <span className={cn(
                "font-bold whitespace-nowrap",
                open ? "text-xl" : "text-sm md:text-base",
                "bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
              )}>
                {open ? "ConnectPro" : "CP"}
              </span>
            </Link>
          </div>
          <div className={cn(
            "flex-1 overflow-y-auto px-4 py-4",
            !open && "md:px-2 w-full"
          )}>
            <nav className="space-y-6">
              {/* Menu sections */}
              <div className={cn(!open && "md:items-center md:justify-center")}>
                <div className={cn(
                  "mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-gray-400",
                  !open && "md:hidden"
                )}>
                  Main Menu
                </div>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      'group flex items-center gap-x-3 rounded-lg px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap',
                      !open && "md:justify-center md:px-1",
                      location.pathname === item.href
                        ? 'bg-primary text-primary-foreground'
                        : theme === 'dark'
                        ? 'text-gray-300 hover:bg-gray-800'
                        : 'text-gray-700 hover:bg-gray-100'
                    )}>
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    <span className={cn("transition-opacity duration-200",
                      !open && "md:hidden"
                    )}>{item.name}</span>
                  </Link>
                ))}
              </div>

              <div>
                <div className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Resources
                </div>
                {resources.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      'group flex items-center gap-x-3 rounded-lg px-2 py-2 text-sm font-medium transition-colors',
                      location.pathname === item.href
                        ? 'bg-primary text-primary-foreground'
                        : theme === 'dark'
                        ? 'text-gray-300 hover:bg-gray-800'
                        : 'text-gray-700 hover:bg-gray-100'
                    )}>
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
              </div>

              <div>
                <div className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  User
                </div>
                {userLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      'group flex items-center gap-x-3 rounded-lg px-2 py-2 text-sm font-medium transition-colors',
                      location.pathname === item.href
                        ? 'bg-primary text-primary-foreground'
                        : theme === 'dark'
                        ? 'text-gray-300 hover:bg-gray-800'
                        : 'text-gray-700 hover:bg-gray-100'
                    )}>
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
          
          <div className="flex flex-col gap-2 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Sidebar content with animations */}
            </motion.div>
          </div>
        </div>
        {/* Role toggle button - always at the bottom of sidebar */}
        <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-800 bg-inherit">
          <button
            className="w-full px-3 py-2 rounded-lg border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
            onClick={() => setRole(role === "user" ? "recruiter" : "user")}
            aria-label={`Switch to ${role === "user" ? "Recruiter" : "User"} mode`}
          >
            Switch to {role === "user" ? "Recruiter" : "User"}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
