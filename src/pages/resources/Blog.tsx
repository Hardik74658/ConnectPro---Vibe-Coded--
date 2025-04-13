
import React from 'react';
import Footer from '@/components/layout/Footer';
import { useTheme } from '@/context/ThemeContext';

const Blog = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <main className="flex-grow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          <p className="text-lg mb-12">Our latest articles, insights, and updates.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder blog post cards */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div 
                key={index} 
                className={`rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-xl ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                <div className="p-6">
                  <div className="text-sm text-indigo-500 mb-2">Category • April {index + 10}, 2023</div>
                  <h3 className="text-xl font-semibold mb-2">Blog Post Title {index + 1}</h3>
                  <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    This is a sample description for blog post {index + 1}. Click to read the full article.
                  </p>
                  <button className="text-indigo-600 font-medium hover:text-indigo-500">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
