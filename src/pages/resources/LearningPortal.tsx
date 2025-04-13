import React from 'react';
import Footer from '@/components/layout/Footer';
import { useTheme } from '@/context/ThemeContext';
import { Play, BookOpen, Award, Clock } from 'lucide-react';
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const courses = [
  { id: 1, title: "Web Development Basics", description: "Learn the fundamentals" },
  { id: 2, title: "Advanced React", description: "Master React concepts" },
];

const LearningPortal = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <main className="flex-grow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Learning Portal</h1>
            <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Expand your skills and advance your career with our curated learning resources
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Web Development",
                courses: 24,
                image: "bg-gradient-to-r from-blue-500 to-cyan-500"
              },
              {
                title: "Data Science",
                courses: 18,
                image: "bg-gradient-to-r from-green-500 to-teal-500"
              },
              {
                title: "UX/UI Design",
                courses: 15,
                image: "bg-gradient-to-r from-purple-500 to-pink-500"
              }
            ].map((category, index) => (
              <div 
                key={index} 
                className={`rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-xl ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className={`h-32 ${category.image}`}>
                  <div className="h-full w-full flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    {category.courses} courses
                  </p>
                  <button className="mt-4 w-full py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                    Browse Courses
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Array.from({ length: 6 }).map((_, index) => (
              <div 
                key={index} 
                className={`rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="relative">
                  <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                  <button className="absolute inset-0 m-auto h-12 w-12 rounded-full bg-white text-indigo-600 flex items-center justify-center">
                    <Play className="h-6 w-6" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium px-2 py-1 rounded-full bg-indigo-100 text-indigo-800">Category</span>
                    <div className="flex items-center text-sm text-yellow-500">
                      ★★★★★ <span className="ml-1">(4.9)</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Course Title {index + 1}</h3>
                  <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Learn essential skills for your professional growth.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>4 hours</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>12 lessons</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      <span>Certificate</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="container py-8">
            <h1 className="text-3xl font-bold mb-6">Learning Portal</h1>
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <CardTitle>
                      <Link to={`/learning/${course.id}`} className="hover:text-blue-500">
                        {course.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{course.description}</p>
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

export default LearningPortal;
