import React from 'react';

const DescriptionService = ({ title, description, subDescription }) => {
  return (
    <section className="relative px-8 py-16 bg-white">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-transparent">
        {/* Add your decorative SVG or icon here */}
        <div className="absolute top-0 w-10 h-10 border-4 border-yellow-600 rounded-full left-5"></div>
      </div>
      <div className="absolute top-0 right-0 w-16 h-16">
        {/* Add your decorative SVG or icon here */}
        <div className="absolute w-8 h-8 bg-yellow-400 rounded-full top-5 right-5"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto text-center">
        {/* Dynamic Title */}
        <h2 className="text-3xl font-bold tracking-wide text-black md:text-5xl">
          {title}
        </h2>

        {/* Decorative line */}
        <div className="flex items-center justify-center mt-8">
          <div className="w-8 h-1 bg-yellow-500 rounded-lg"></div>
          <div className="w-4 h-4 mx-2 transform rotate-45 bg-yellow-500"></div>
          <div className="w-8 h-1 bg-yellow-500 rounded-lg"></div>
        </div>

        {/* Dynamic Paragraph */}
        <p className="max-100 mx-auto mt-6 text-lg leading-relaxed text-gray-700">
          {description}
        </p>

        {/* Additional Dynamic Sub-Description */}
        {subDescription && (
          <p className="max-w-2xl mx-auto mt-4 font-semibold text-lg leading-relaxed text-yellow-600 font-semibold">
            {subDescription}
          </p>
        )}
      </div>
    </section>
  );
};

export default DescriptionService;
