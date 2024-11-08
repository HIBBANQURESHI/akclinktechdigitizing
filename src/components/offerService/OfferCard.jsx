// src/components/OfferCard.jsx
import React from 'react';

const OfferCard = ({ title, features, price, isDiscounted, originalPrice, button1Text }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg transition-transform duration-300 transform hover:scale-105 flex flex-col justify-between h-full ">
      <div>
        <h3 className="text-xl font-bold text-yellow-400">{title}</h3>
        <ul className="mt-4 text-gray-300">
          {features.map((feature, index) => (
            <li key={index} className="mb-2 font-semibold">{feature}</li>
          ))}
        </ul>
        <div className="mt-4">
          <span className="text-xl font-bold text-yellow-400">{price}</span>
          {isDiscounted && (
            <span className="line-through font-semibold text-gray-500 ml-2">{originalPrice}</span>
          )}
        </div>
      </div>
      <div className="relative overflow-hidden mt-4">
        <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded transition-transform duration-300 transform hover:scale-105 w-full">
          {button1Text || 'Start'}
        </button>
        <div className="absolute top-0 left-full h-full w-full bg-white opacity-30 transition-all duration-300 transform hover:left-0"></div>
      </div>
    </div>
  );
};

export default OfferCard;
