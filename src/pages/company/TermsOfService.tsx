import React from 'react';
import Footer from '@/components/layout/Footer';
import { useTheme } from '@/context/ThemeContext';
import { FileText, Shield, AlertTriangle, HelpCircle } from 'lucide-react';

const TermsOfService = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <main className="flex-grow py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Last updated: April 10, 2023
            </p>
          </div>
          
          <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8`}>
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-indigo-500 mr-3" />
              <h2 className="text-2xl font-bold">Introduction</h2>
            </div>
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Welcome to ConnectPro. These Terms of Service govern your use of our website and services. By accessing or using our platform, you agree to be bound by these Terms.
            </p>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              Please read these Terms carefully before using our services. If you do not agree with any part of these Terms, you should not use our platform.
            </p>
          </div>
          
          <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8`}>
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-indigo-500 mr-3" />
              <h2 className="text-2xl font-bold">Use of Services</h2>
            </div>
            <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              <h3 className="text-lg font-semibold mb-2">Eligibility</h3>
              <p className="mb-4">
                To use our services, you must be at least 18 years old and capable of forming a binding contract. By using our platform, you represent and warrant that you meet these requirements.
              </p>
              
              <h3 className="text-lg font-semibold mb-2">Account Creation</h3>
              <p className="mb-4">
                When you create an account with us, you must provide accurate, complete, and up-to-date information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
              
              <h3 className="text-lg font-semibold mb-2">Acceptable Use</h3>
              <p className="mb-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Use our services in any way that violates applicable laws or regulations</li>
                <li>Impersonate any person or entity, or falsely state or misrepresent your affiliation</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use of our services</li>
                <li>Post or transmit any content that is unlawful, harmful, threatening, or otherwise objectionable</li>
                <li>Attempt to gain unauthorized access to any part of our platform</li>
              </ul>
            </div>
          </div>
          
          <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8`}>
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-8 w-8 text-indigo-500 mr-3" />
              <h2 className="text-2xl font-bold">Intellectual Property</h2>
            </div>
            <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              <p className="mb-4">
                The ConnectPro platform, including all content, features, and functionality, is owned by ConnectPro and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              
              <h3 className="text-lg font-semibold mb-2">User Content</h3>
              <p className="mb-4">
                When you post content on our platform, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, adapt, publish, and display such content in connection with our services.
              </p>
              <p className="mb-4">
                You represent and warrant that you own or have the necessary rights to the content you post, and that your content does not infringe on the intellectual property rights of any third party.
              </p>
            </div>
          </div>
          
          <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8`}>
            <div className="flex items-center mb-6">
              <HelpCircle className="h-8 w-8 text-indigo-500 mr-3" />
              <h2 className="text-2xl font-bold">Limitation of Liability</h2>
            </div>
            <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              <p className="mb-4">
                To the maximum extent permitted by law, ConnectPro shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of or in connection with your use of our services.
              </p>
              <p className="mb-4">
                In no event shall our aggregate liability for all claims related to the services exceed the greater of $100 or the amount you paid to ConnectPro in the past 12 months.
              </p>
            </div>
          </div>
          
          <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8`}>
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-indigo-50 text-indigo-800 rounded-xl">
              <p>Email: legal@connectpro.com</p>
              <p>Address: 123 Terms Ave, San Francisco, CA 94107</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
