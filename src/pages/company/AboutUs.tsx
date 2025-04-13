
import React from 'react';
import Footer from '@/components/layout/Footer';
import { useTheme } from '@/context/ThemeContext';
import { Users, Globe, Award, Target } from 'lucide-react';

const AboutUs = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <main className="flex-grow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">About ConnectPro</h1>
            <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Connecting professionals and opportunities since 2020
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                ConnectPro was founded in 2020 with a simple mission: to create a platform where professionals could connect, share knowledge, and discover opportunities.
              </p>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                What started as a small community has grown into a global network of professionals across various industries. Our platform has helped thousands of individuals advance their careers and businesses find exceptional talent.
              </p>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                Today, ConnectPro continues to innovate and provide the tools and resources professionals need to thrive in an ever-changing job market.
              </p>
            </div>
            <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 mb-6">
                <div className="flex items-center justify-center h-full">
                  <span className="text-white text-lg font-medium">Company Vision</span>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  {
                    year: "2020",
                    title: "ConnectPro Founded",
                    description: "Started with a small team and big vision."
                  },
                  {
                    year: "2021",
                    title: "Global Expansion",
                    description: "Expanded to over 20 countries worldwide."
                  },
                  {
                    year: "2022",
                    title: "1 Million Users",
                    description: "Reached our first million user milestone."
                  },
                  {
                    year: "2023",
                    title: "New Features",
                    description: "Launched advanced matching algorithm."
                  }
                ].map((milestone, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4">
                      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                        {milestone.year.substring(2)}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">{milestone.title}</h4>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Users className="h-10 w-10 text-indigo-500" />,
                  title: "Community",
                  description: "Building meaningful connections that help professionals grow"
                },
                {
                  icon: <Award className="h-10 w-10 text-purple-500" />,
                  title: "Excellence",
                  description: "Striving for the highest quality in everything we do"
                },
                {
                  icon: <Target className="h-10 w-10 text-indigo-500" />,
                  title: "Innovation",
                  description: "Continuously improving and adapting to changing needs"
                },
                {
                  icon: <Globe className="h-10 w-10 text-purple-500" />,
                  title: "Inclusion",
                  description: "Creating opportunities for professionals from all backgrounds"
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-2xl text-center ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  } shadow-lg transition-all hover:shadow-xl hover:-translate-y-1`}
                >
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-indigo-100 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-10">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alex Johnson",
                  role: "CEO & Founder",
                  image: "bg-indigo-600"
                },
                {
                  name: "Sarah Chen",
                  role: "CTO",
                  image: "bg-purple-600"
                },
                {
                  name: "Michael Rodriguez",
                  role: "Head of Product",
                  image: "bg-indigo-600"
                },
                {
                  name: "Emma Wilson",
                  role: "Head of Marketing",
                  image: "bg-purple-600"
                }
              ].map((member, index) => (
                <div 
                  key={index} 
                  className={`rounded-2xl overflow-hidden shadow-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <div className={`h-48 ${member.image} flex items-center justify-center text-4xl text-white font-bold`}>
                    {member.name.charAt(0)}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
