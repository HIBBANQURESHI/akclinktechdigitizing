import React from 'react';

const DetailsSection = () => {
  return (
    <section className="px-4 py-12 text-center bg-yellow-400">
      <h2 className="mb-4 text-3xl font-bold text-black">
        Let Us Give Your Brand An Identity That Speaks It All For You!
      </h2>
      <p className="mb-8 text-lg text-black">
        We transform creative ideas into stunning realities
      </p>
      <div className="flex justify-center space-x-4">
        <button className="px-6 py-2 font-semibold text-yellow-400 bg-black rounded-lg shadow hover:bg-gray-900">
          Request A Custom Quote
        </button>
        <button className="px-6 py-2 font-semibold text-yellow-400 bg-gray-800 rounded-lg shadow hover:bg-gray-700">
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default DetailsSection;
