import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-12 h-12 border-4 border-gray-200 rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-primary-500 rounded-full animate-spin"></div>
        </div>

        {/* Inner dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
      </div>

      {/* Loading text */}
      <div className="ml-4">
        <p className="text-primary-500 font-medium text-lg">Loading SeamPass...</p>
        <p className="text-gray-500 text-sm">Preparing your secure password generator</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
