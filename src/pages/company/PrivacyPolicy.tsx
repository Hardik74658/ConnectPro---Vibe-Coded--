import React from 'react';
// Remove Header import
import Footer from '@/components/layout/Footer';
import { useTheme } from '@/context/ThemeContext';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Remove Header component */}
      <main className="flex-grow py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Last updated: April 10, 2023
            </p>
          </div>
          
          <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8`}>
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-indigo-500 mr-3" />
              <h2 className="text-2xl font-bold">Introduction</h2>
            </div>
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              At ConnectPro, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our platform.
            </p>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
          </div>
          
          <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8`}>
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-indigo-500 mr-3" />
              <h2 className="text-2xl font-bold">Information We Collect</h2>
            </div>
            <div className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              <h3 className="text-lg font-semibold mb-2">Personal Data</h3>
              <p className="mb-4">
                We may collect personal identification information from users in various ways, including, but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>When users visit our site, register, fill out a form, or engage with our platform</li>
                <li>Name, email address, phone number, and professional information</li>
                <li>Information provided in profile creation or job applications</li>
                <li>User-generated content such as posts, comments, and messages</li>
              </ul>
            </div>
            <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              <h3 className="text-lg font-semibold mb-2">Non-Personal Data</h3>
              <p className="mb-4">
                We may collect non-personal identification information about users whenever they interact with our site, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Browser name, type of computer, and technical information</li>
                <li>Log data such as IP address, browser type, and pages visited</li>
                <li>Cookies and usage data</li>
              </ul>
            </div>
          </div>
          
          <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8`}>
            <div className="flex items-center mb-6">
              <Lock className="h-8 w-8 text-indigo-500 mr-3" />
              <h2 className="text-2xl font-bold">How We Use Your Information</h2>
            </div>
            <div className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              <p className="mb-4">
                ConnectPro may use the information we collect from you for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To personalize user experience and deliver content most relevant to you</li>
                <li>To improve our website and services based on the information and feedback we receive</li>
                <li>To process transactions and send related information</li>
                <li>To send periodic emails regarding your account or other products and services</li>
                <li>To match you with relevant job opportunities and professional connections</li>
                <li>To maintain and improve the security of our platform</li>
              </ul>
            </div>
          </div>
          
          <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8`}>
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-indigo-500 mr-3" />
              <h2 className="text-2xl font-bold">Security of Your Information</h2>
            </div>
            <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              <p className="mb-4">
                We implement a variety of security measures to maintain the safety of your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All supplied sensitive information is transmitted via Secure Socket Layer (SSL) technology</li>
                <li>Data is kept in a secure environment with restricted access</li>
                <li>Regular security assessments and updates to our systems</li>
                <li>Employee training on privacy and data protection</li>
              </ul>
            </div>
          </div>
          
          <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8`}>
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-indigo-50 text-indigo-800 rounded-xl">
              <p>Email: privacy@connectpro.com</p>
              <p>Address: 123 Privacy Ave, San Francisco, CA 94107</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
