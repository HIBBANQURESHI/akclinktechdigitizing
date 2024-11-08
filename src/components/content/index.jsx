import React, { useState } from 'react';

const Content = ({ sections }) => {
  const [activeTab, setActiveTab] = useState(0);

  const isMultipleSections = sections.length > 1;

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-white shadow-lg mb-20 sm:p-6 md:p-8">
      <div className="w-full p-4 space-y-8 bg-white rounded-lg shadow-lg max-w-7xl">
        
        {/* Yellow background container behind the tabs with fixed size */}
        <div className="relative flex justify-center">
          <div
            className="absolute bg-yellow-400 rounded-t-lg py-8"
            style={{ width: '930px', height: '69.5px' }} // fixed size for background
          ></div>
          
          {/* Tabs Section */}
          {isMultipleSections && (
            <div className="relative flex justify-center space-x-4 overflow-x-auto whitespace-nowrap p-1">
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className={`py-4 w-64 px-4 rounded-lg font-semibold text-xl ${
                    activeTab === index
                      ? 'bg-yellow-700 text-white'  // Active tab color (dark yellow)
                      : 'bg-gray-200 text-black'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 p-10 flex items-center gap-8 lg:grid-cols-2">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">{sections[activeTab].title}</h2>
            <h3 className="mt-2 text-lg text-gray-600 sm:text-xl">{sections[activeTab].subtitle}</h3>
            <p className="mt-4 text-base text-gray-600 sm:text-lg">{sections[activeTab].content}</p>

            <ul className="mt-6 space-y-2">
              {sections[activeTab].listItems.map((item, index) => (
                <li key={index} className="text-gray-600">
                  - {item}
                </li>
              ))}
            </ul>

            <button className="px-3 py-4 mx-3 mt-6 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500">
              {sections[activeTab].buttonText}
            </button>
          </div>

          {/* Right side - Image */}
          <div className="flex w-100 items-center justify-center">
            <img
              src={sections[activeTab].image}
              alt={sections[activeTab].title}
              className="w-full h-70 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
