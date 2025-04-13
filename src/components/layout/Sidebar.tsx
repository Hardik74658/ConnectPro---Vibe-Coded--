import React from 'react';
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
} from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const { theme } = useTheme();
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Profiles', href: '/profiles', icon: Users },
    { name: 'Jobs', href: '/jobs', icon: Briefcase },
    { name: 'Messages', href: '/messages', icon: MessageSquare },
  ];

  const resources = [
    { name: 'Learning', href: '/learning', icon: BookOpen },
    { name: 'Community', href: '/community', icon: Globe },
    { name: 'Help Center', href: '/help-center', icon: HelpCircle },
  ];

  const userLinks = [
    { name: 'Profile', href: '/profile', icon: UserCircle },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      <div className={cn(
        "fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity",
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      )} onClick={() => setOpen(false)} />

      <aside className={cn(
        "fixed top-0 bottom-0 left-0 z-40 w-64 transition-transform duration-300",
        !open && "-translate-x-full",
        theme === 'dark' ? 'bg-gray-900 border-r border-gray-800' : 'bg-white border-r border-gray-200'
      )}>
        <div className={cn(
          "flex flex-col h-full",
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
                    )}
                  >
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
                    )}
                  >
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
                    )}
                  >
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
      </aside>
    </>
  );
};

export default Sidebar;
