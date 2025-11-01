'use client';

import { IoConstruct } from 'react-icons/io5';
import { IoArrowBack } from 'react-icons/io5';

interface WorkInProgressProps {
  onBack: () => void;
}

export function WorkInProgress({ onBack }: WorkInProgressProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-all duration-300 bg-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full border border-gray-300 hover:border-gray-400 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base mb-8"
        >
          <IoArrowBack className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium">Back to Home</span>
        </button>

        {/* Work In Progress Content */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 text-center border border-gray-200">
          {/* Icon */}
          <div className="mb-8 inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full animate-pulse">
            <IoConstruct className="w-10 h-10 sm:w-12 sm:h-12 text-gray-700" />
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work In Progress
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-500 mb-8 max-w-xl mx-auto">
            The products page is under construction. Check back soon to explore our custom 3D printed products.
          </p>

          {/* Coming Soon Badge */}
          <div className="inline-block bg-gradient-to-r from-gray-800 to-gray-700 text-white px-6 py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg">
            Coming Soon
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              In the meantime, feel free to explore my portfolio and get in touch for custom projects!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
