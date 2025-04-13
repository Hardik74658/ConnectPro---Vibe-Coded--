
import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Facebook, Linkedin, Github } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className={`${theme === 'dark' ? 'bg-gray-900 text-gray-300 border-t border-gray-800' : 'bg-white text-gray-600 border-t border-gray-200'}`}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ConnectPro
            </Link>
            <p className="mt-4 text-sm">
              Connect with professionals, discover opportunities, and build your career with ConnectPro.
            </p>
            <div className="flex space-x-6 mt-6">
              <a 
                href="#" 
                className={`text-gray-400 hover:text-indigo-500 transition-colors duration-200`}
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className={`text-gray-400 hover:text-indigo-500 transition-colors duration-200`}
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className={`text-gray-400 hover:text-indigo-500 transition-colors duration-200`}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className={`text-gray-400 hover:text-indigo-500 transition-colors duration-200`}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className={`text-sm font-semibold tracking-wider uppercase ${theme === 'dark' ? 'text-gray-400' : 'text-gray-400'}`}>
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/blog" className="text-base hover:text-indigo-500 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/help-center" className="text-base hover:text-indigo-500 transition-colors duration-200">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/learning" className="text-base hover:text-indigo-500 transition-colors duration-200">
                  Learning Portal
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-base hover:text-indigo-500 transition-colors duration-200">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className={`text-sm font-semibold tracking-wider uppercase ${theme === 'dark' ? 'text-gray-400' : 'text-gray-400'}`}>
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/about" className="text-base hover:text-indigo-500 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-base hover:text-indigo-500 transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-base hover:text-indigo-500 transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-base hover:text-indigo-500 transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={`mt-8 border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'} pt-8 md:flex md:items-center md:justify-between`}>
          <div className="flex space-x-6 md:order-2">
            <Link to="/privacy" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200">
              Terms
            </Link>
            <Link to="/help-center" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200">
              Help
            </Link>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} ConnectPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
