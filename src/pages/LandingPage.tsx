import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, Users, Award, Zap, Globe, ChevronRight, 
  ArrowRight, CheckCircle2
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const LandingPage: React.FC = () => {
  const { theme } = useTheme();
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Set animation as played after component mount
    setAnimationPlayed(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  // Skills logos for the rotating circle
  const skills = [
    "JavaScript", "React", "Vue", "Angular", "Node.js", 
    "Python", "Java", "C#", "PHP", "Ruby", "TypeScript"
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      
      {/* Dashboard navigation buttons */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-4 z-10">
        <Button 
          onClick={() => navigate("/dashboard")} 
          className="rounded-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
        >
          Go to User Dashboard
        </Button>
        <Button 
          onClick={() => navigate("/recruiter/dashboard")} 
          className="rounded-full px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-lg hover:from-pink-600 hover:to-blue-600 transition-all duration-300"
        >
          Go to Recruiter Dashboard
        </Button>
      </div>

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-indigo-50 via-white to-pink-50 dark:from-[#181c24] dark:via-[#23283a] dark:to-[#1a1f2b] transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center animate-fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-pink-500 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:via-pink-400 dark:to-purple-400 transition-colors duration-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Connect with Professionals &
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Advance Your Career</span>
            </motion.h1>
            <motion.p 
              className={`text-xl mb-8 max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} animate-fade-in`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Discover opportunities, connect with industry experts, and take your professional life to the next level with ConnectPro.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 mb-10 animate-fade-in-up"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button className="rounded-full text-base px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className={`rounded-full text-base px-8 py-6 border-0 bg-gradient-to-r from-pink-100 to-blue-100 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-white shadow hover:from-pink-200 hover:to-blue-200 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300`}>
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Skills Rotating Circle */}
          <div className="relative h-80 md:h-96 mt-12 mb-20">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="relative w-64 h-64 md:w-80 md:h-80"
                style={{ perspective: 1000 }}
              >
                <motion.div 
                  className="absolute inset-0"
                  animate={{ rotateZ: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  {skills.map((skill, index) => {
                    // Circle center and radius
                    const circleSize = 320; // px, matches w-80/h-80
                    const radius = circleSize / 2 - 30; // Adjusted for pill size and spacing
                    const angle = (index / skills.length) * Math.PI * 2 - Math.PI / 2; // Start at top
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                      <motion.div
                        key={skill}
                        className={`absolute w-24 h-10 flex items-center justify-center px-4 py-2 text-sm font-medium shadow-lg
                          -translate-x-1/2 -translate-y-1/2 glassmorphism-pill
                          ${theme === 'dark' 
                            ? 'bg-gray-800/80 text-white border border-gray-700' 
                            : 'bg-white/80 text-gray-800 border border-gray-200'
                        }`}
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: `translate(-50%, -50%) rotate(${(angle * 180) / Math.PI}deg)`,
                          borderRadius: "50px", // Curved pill shape
                          clipPath: "ellipse(80% 50% at 50% 50%)", // Optional for more curvature
                        }}
                      >
                        <span
                          style={{
                            transform: `rotate(${-(angle * 180) / Math.PI}deg)`, // Rotate text to align properly
                            display: "block",
                            textAlign: "center",
                            width: "100%",
                          }}
                        >
                          {skill}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>

                <div className={`absolute inset-0 flex items-center justify-center`}>
                  <div className={`flex items-center justify-center rounded-full shadow-xl glassmorphism-center
                    ${theme === 'dark' ? 'bg-gray-800/80' : 'bg-white/80'}
                    w-24 h-24 z-10 border-2 border-indigo-400/30 dark:border-indigo-700/30`}
                  >
                    <span className="text-lg font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                      Skills
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-indigo-50'} rounded-t-[3rem]`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400"
              variants={itemVariants}
            >
              Why Choose ConnectPro?
            </motion.h2>
            <motion.p 
              className={`text-lg max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} 
              variants={itemVariants}
            >
              Discover the benefits of joining our professional network
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              { 
                icon: <Users className="h-6 w-6 text-indigo-500" />, 
                title: "Connect with Experts", 
                description: "Build your network with professionals from your industry and beyond."
              },
              { 
                icon: <Briefcase className="h-6 w-6 text-purple-500" />, 
                title: "Discover Opportunities", 
                description: "Find job opportunities that match your skills and career goals."
              },
              { 
                icon: <Award className="h-6 w-6 text-indigo-500" />, 
                title: "Showcase Skills", 
                description: "Highlight your expertise and get recognized for your accomplishments."
              },
              { 
                icon: <Zap className="h-6 w-6 text-purple-500" />, 
                title: "Personalized Experience", 
                description: "Get recommendations tailored to your professional interests."
              },
              { 
                icon: <Globe className="h-6 w-6 text-indigo-500" />, 
                title: "Global Network", 
                description: "Connect with professionals around the world and expand your horizons."
              },
              { 
                icon: <CheckCircle2 className="h-6 w-6 text-purple-500" />, 
                title: "Verified Profiles", 
                description: "Trust our verification system for authentic professional connections."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className={`p-6 rounded-2xl glassmorphism-card shadow-lg hover:shadow-2xl transition-all duration-300 border-0
                  ${theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80'}`}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.03 }}
              >
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 mb-4 shadow">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className={`p-8 md:p-12 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 shadow-2xl text-white text-center animate-fade-in-up`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Advance Your Career?</h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-indigo-100">
              Join thousands of professionals who have already taken the next step in their career journey with ConnectPro.
            </p>
            <Link to="/auth?signup=true">
              <Button className="bg-white bg-opacity-90 text-black dark:text-white hover:bg-indigo-50 rounded-full text-lg px-8 py-6 shadow-lg transition-all duration-300">
                Join ConnectPro Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-50 text-gray-600'} rounded-t-3xl`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ConnectPro
              </Link>
              <p className="mt-4 text-sm">
                Connect with professionals, discover opportunities, and build your career with ConnectPro.
              </p>
              <div className="flex space-x-4 mt-6">
                {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map((social) => (
                  <a key={social} href="#" className={`h-8 w-8 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 text-indigo-600 dark:text-indigo-300 hover:scale-110 transition-all duration-200 shadow`}>
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                RESOURCES
              </h3>
              <ul className="space-y-3">
                <li><Link to="/blog" className="hover:text-indigo-500 transition-colors">Blog</Link></li>
                <li><Link to="/help-center" className="hover:text-indigo-500 transition-colors">Help Center</Link></li>
                <li><Link to="/learning" className="hover:text-indigo-500 transition-colors">Learning Portal</Link></li>
                <li><Link to="/community" className="hover:text-indigo-500 transition-colors">Community</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                COMPANY
              </h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="hover:text-indigo-500 transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-indigo-500 transition-colors">Careers</Link></li>
                <li><Link to="/privacy" className="hover:text-indigo-500 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-indigo-500 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-center">
              &copy; {new Date().getFullYear()} ConnectPro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      {/* Animations & Glassmorphism */}
      <style>
        {`
          .animate-fade-in { animation: fadeIn 0.7s cubic-bezier(.4,0,.2,1) both; }
          .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(.4,0,.2,1) both; }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .glassmorphism-card {
            backdrop-filter: blur(8px);
            background: rgba(255,255,255,0.85);
          }
          .dark .glassmorphism-card {
            background: rgba(30,34,54,0.85);
          }
          .glassmorphism-pill {
            backdrop-filter: blur(4px);
            background: rgba(255,255,255,0.7);
          }
          .dark .glassmorphism-pill {
            background: rgba(30,34,54,0.7);
          }
          .glassmorphism-center {
            backdrop-filter: blur(8px);
            background: rgba(255,255,255,0.9);
          }
          .dark .glassmorphism-center {
            background: rgba(30,34,54,0.9);
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;
