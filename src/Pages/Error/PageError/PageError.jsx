import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const PageError = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 flex items-center justify-center px-4 py-12">
      <div
        className={`max-w-lg w-full text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-black text-gray-800 opacity-90">404</h1>
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg blur opacity-25 animate-pulse"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Oops! Lost in Space?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The page you're looking for seems to have drifted off into the
            digital cosmos. Don't worry, even astronauts get lost sometimes!
          </p>
        </div>

        {/* Search Suggestion */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-lg border border-gray-200">
          <p className="text-gray-700 mb-4 font-medium">
            While you're here, you might want to:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              🏠 Return Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex-1 border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              ↩️ Go Back
            </button>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="text-sm text-gray-500">
          <p>
            Need help?{" "}
            <Link
              to="/contact"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageError;
