import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">404</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Oops! Page not found</p>
      <Link
        to="/"
        className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
