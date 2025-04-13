import React from 'react';
import Footer from '@/components/layout/Footer';
import { useTheme } from '@/context/ThemeContext';
import { Search, BookOpen, MessageCircle, FileQuestion } from 'lucide-react';
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const helpCategories = [
  { id: "getting-started", name: "Getting Started", articles: ["welcome", "setup"] },
  { id: "account", name: "Account & Settings", articles: ["profile", "security"] },
];

const HelpCenter = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <main className="flex-grow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
            <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Find answers to your questions and get the support you need
            </p>
            
            <div className={`mt-8 max-w-2xl mx-auto relative rounded-2xl overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                className={`w-full p-4 pl-12 outline-none ${
                  theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                }`} 
                placeholder="Search for help..." 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <BookOpen className="h-8 w-8 text-indigo-500" />,
                title: "Documentation",
                description: "Explore our comprehensive guides and documentation"
              },
              {
                icon: <FileQuestion className="h-8 w-8 text-purple-500" />,
                title: "FAQs",
                description: "Find answers to frequently asked questions"
              },
              {
                icon: <MessageCircle className="h-8 w-8 text-indigo-500" />,
                title: "Contact Support",
                description: "Get in touch with our friendly support team"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-2xl text-center transition-transform hover:-translate-y-1 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                } shadow-lg`}
              >
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-indigo-100 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-2xl font-bold mb-6">Popular Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Getting Started with ConnectPro",
                "Managing Your Profile",
                "Finding and Applying to Jobs",
                "Connecting with Other Professionals",
                "Account Settings and Security",
                "Subscription Plans",
                "Mobile App Features",
                "Privacy Controls"
              ].map((topic, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-xl ${
                    theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                  } transition-colors cursor-pointer`}
                >
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="container py-8">
            <h1 className="text-3xl font-bold mb-6">Help Center</h1>
            <div className="grid md:grid-cols-2 gap-6">
              {helpCategories.map((category) => (
                <Card key={category.id}>
                  <CardHeader>
                    <CardTitle>{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.articles.map((article) => (
                        <li key={article}>
                          <Link
                            to={`/help-center/${category.id}/${article}`}
                            className="text-blue-500 hover:underline"
                          >
                            {article.charAt(0).toUpperCase() + article.slice(1)}
                          </Link>
                        </li>
                      ))}
                    </ul>
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

export default HelpCenter;
