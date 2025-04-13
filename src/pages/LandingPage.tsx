import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Connect with Professionals &
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Advance Your Career</span>
            </motion.h1>
            <motion.p 
              className={`text-xl mb-8 max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Discover opportunities, connect with industry experts, and take your professional life to the next level with ConnectPro.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button className="rounded-xl text-base px-8 py-6">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className={`rounded-xl text-base px-8 py-6 ${theme === 'dark' ? 'border-gray-700 hover:bg-gray-800' : ''}`}>
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
                    const angle = (index / skills.length) * Math.PI * 2;
                    const radius = 140; // Increased radius for better spacing
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    
                    return (
                      <motion.div
                        key={skill}
                        className={`absolute transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-full text-sm font-medium shadow-lg ${
                          theme === 'dark' 
                            ? 'bg-gray-800 text-white border border-gray-700' 
                            : 'bg-white text-gray-800 border border-gray-200'
                        }`}
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: `translate(${x}px, ${y}px)`,
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill}
                      </motion.div>
                    );
                  })}
                </motion.div>

                <div className={`absolute inset-0 flex items-center justify-center`}>
                  <div className={`flex items-center justify-center rounded-full shadow-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  } w-24 h-24 z-10`}>
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
              className="text-3xl md:text-4xl font-bold mb-4" 
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
                className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-gradient-to-r from-indigo-100 to-purple-100 mb-4">
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
            className={`p-8 md:p-12 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 shadow-xl text-white text-center`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Advance Your Career?</h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-indigo-100">
              Join thousands of professionals who have already taken the next step in their career journey with ConnectPro.
            </p>
            <Link to="/auth?signup=true">
              <Button className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-xl text-lg px-8 py-6">
                Join ConnectPro Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-50 text-gray-600'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ConnectPro
              </Link>
              <p className="mt-4 text-sm">
                Connect with professionals, discover opportunities, and build your career with ConnectPro.
              </p>
              <div className="flex space-x-4 mt-6">
                {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map((social) => (
                  <a key={social} href="#" className={`h-8 w-8 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}>
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
          
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-sm text-center">
              &copy; {new Date().getFullYear()} ConnectPro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
