import React from 'react';
import Footer from '@/components/layout/Footer';
import { useTheme } from '@/context/ThemeContext';
import { Users, MessageSquare, Calendar, Award } from 'lucide-react';
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const categories = [
  { id: "general", name: "General Discussion", posts: 120 },
  { id: "help", name: "Help & Support", posts: 85 },
];

const Community = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <main className="flex-grow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Community</h1>
            <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Connect with professionals, share knowledge, and grow together
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: <Users className="h-8 w-8 text-indigo-500" />,
                title: "Join Groups",
                description: "Connect with like-minded professionals in specialized groups based on industry, skills, or interests."
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-purple-500" />,
                title: "Discussions",
                description: "Participate in meaningful discussions about industry trends, challenges, and opportunities."
              },
              {
                icon: <Calendar className="h-8 w-8 text-indigo-500" />,
                title: "Events",
                description: "Attend virtual and in-person networking events, workshops, and webinars."
              },
              {
                icon: <Award className="h-8 w-8 text-purple-500" />,
                title: "Recognition",
                description: "Get recognized for your contributions and expertise within the community."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-2xl ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                } shadow-lg transition-all hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-indigo-100 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-16`}>
            <h2 className="text-2xl font-bold mb-6">Popular Communities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Web Development",
                "Data Science & Analytics",
                "UX/UI Design",
                "Digital Marketing",
                "Product Management",
                "Entrepreneurship",
                "Artificial Intelligence",
                "Remote Work",
                "Career Development"
              ].map((community, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-xl ${
                    theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-indigo-50 hover:bg-indigo-100'
                  } transition-colors cursor-pointer flex items-center justify-between`}
                >
                  <span>{community}</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-indigo-600 text-white">
                    {Math.floor(Math.random() * 10) + 1}K
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`p-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg text-center`}>
            <h2 className="text-2xl font-bold mb-4">Ready to join the community?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Connect with professionals from around the world and take your career to the next level.
            </p>
            <button className="px-8 py-3 bg-white text-indigo-600 rounded-xl font-medium hover:bg-indigo-50 transition-colors">
              Join Now
            </button>
          </div>

          <div className="container py-8">
            <h1 className="text-3xl font-bold mb-6">Community</h1>
            <div className="space-y-4">
              {categories.map((category) => (
                <Card key={category.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle>
                      <Link to={`/community/${category.id}`} className="hover:text-blue-500">
                        {category.name}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{category.posts} posts</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
