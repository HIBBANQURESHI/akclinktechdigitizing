import React, { useState } from 'react';
import PricingCard from './PricingCard';

const PricingSection = ({ plans, heading, description }) => {
  const hasTabs = typeof plans === 'object' && Object.keys(plans).length > 1;
  const [selectedTab, setSelectedTab] = useState(hasTabs ? Object.keys(plans)[0] : null); 

  const renderPlans = () => {
    const activePlans = hasTabs ? plans[selectedTab] : plans;
    return activePlans.map((plan, index) => (
      <PricingCard
        key={index}
        title={plan.title}
        price={plan.price}
        features={plan.features}
        buttonText={plan.buttonText}
        onButtonClick={plan.onButtonClick}
      />
    ));
  };

  return (
    <div className="container-fluid md:px-32 sm:px-4 py-12 bg-white">
      <h2 className="mb-4 text-3xl font-extrabold text-center text-black">{heading}</h2>
      <p className="mb-8 text-xl text-center font-semibold text-yellow-400">{description}</p>

      {/* Pricing Cards */}
      <div className="grid flex items-center justify-center grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {renderPlans().map((plan, index) => (
          <div key={index} className="flex transform transition-transform duration-300 hover:scale-105">
            {plan}
          </div>
        ))}
      </div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px; /* Width of the scrollbar */
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #b0b0b0; /* Scrollbar thumb color */
          border-radius: 10px; /* Rounded corners */
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f0f0f0; /* Track color */
          border-radius: 10px; /* Rounded corners */
        }
      `}</style>
    </div>
  );
};

export default PricingSection;
