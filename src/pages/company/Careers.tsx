
import React from 'react';
import Footer from '@/components/layout/Footer';
import { useTheme } from '@/context/ThemeContext';
import { MapPin, Briefcase, Clock, DollarSign } from 'lucide-react';

const Careers = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <main className="flex-grow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
            <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Build your career with ConnectPro and help shape the future of professional networking
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Work With Us</h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                At ConnectPro, we're passionate about creating technology that helps professionals connect and grow their careers. We're looking for talented individuals who share our vision and want to make a difference.
              </p>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                We offer a collaborative and inclusive work environment where innovation thrives and your ideas matter. Our team enjoys competitive benefits, continuous learning opportunities, and a healthy work-life balance.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Competitive Salary",
                  "Health Benefits",
                  "Remote Work Options",
                  "Professional Development",
                  "Team Building Events",
                  "Inclusive Culture",
                  "Work-Life Balance",
                  "Career Growth"
                ].map((benefit, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-xl flex items-center ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                    }`}
                  >
                    <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-2">
                      ✓
                    </div>
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`p-0 rounded-2xl overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="h-64 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white p-8 text-center">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Join a team that's making a difference</h3>
                  <p className="text-indigo-100">
                    Help connect professionals worldwide and shape the future of work
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">Open Positions</h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  title: "Senior Frontend Developer",
                  department: "Engineering",
                  location: "Remote",
                  type: "Full-time",
                  salary: "$90K - $120K"
                },
                {
                  title: "UX/UI Designer",
                  department: "Design",
                  location: "San Francisco, CA",
                  type: "Full-time",
                  salary: "$85K - $110K"
                },
                {
                  title: "Product Manager",
                  department: "Product",
                  location: "New York, NY",
                  type: "Full-time",
                  salary: "$100K - $130K"
                },
                {
                  title: "Data Scientist",
                  department: "Data",
                  location: "Remote",
                  type: "Full-time",
                  salary: "$95K - $125K"
                },
                {
                  title: "Customer Success Manager",
                  department: "Customer Success",
                  location: "Austin, TX",
                  type: "Full-time",
                  salary: "$70K - $90K"
                }
              ].map((job, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-2xl ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  } shadow-lg hover:shadow-xl transition-all cursor-pointer`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <p className="text-indigo-600 mb-2">{job.department}</p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`p-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg text-center`}>
            <h2 className="text-2xl font-bold mb-4">Don't see the right role?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="px-8 py-3 bg-white text-indigo-600 rounded-xl font-medium hover:bg-indigo-50 transition-colors">
              Submit Your Resume
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
