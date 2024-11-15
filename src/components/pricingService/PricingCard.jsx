import React, { useState } from 'react';

// PricingCard Component
const PricingCard = ({ title, price, features, buttonText, onButtonClick }) => {
  return (
    <div 
      className="flex flex-col justify-center items-center w-full max-w-sm p-6 mx-auto transition-colors duration-300 bg-white text-black border border-black rounded-lg shadow-md md:mx-0 hover:bg-blue-900 hover:text-white" 
      style={{ height: '627.5px' }} // Fixed size
    >
      {/* Card Title */}
      <h5 className="mb-4 text-xl font-extrabold text-center  md:text-2xl">{title}</h5>
      
      {/* Price */}
      <div className="mb-4 text-2xl font-bold text-center md:text-3xl">${price}</div>

      {/* Features List */}
      <div className="flex-grow overflow-y-auto" style={{ maxHeight: '200px' }}>
        <ul className="my-4 space-y-3 text-center scrollbar-thin">
          {features.map((feature, index) => (
            <li key={index} className="text-sm md:text-base font-normal text-match-parent;">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <button
        onClick={onButtonClick}
        className="mt-4 px-4 py-2 bg-blue-900 text-white font-bold rounded-full transition-colors duration-300 hover:bg-orange-400 hover:text-white border-2 border-orange-400"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
