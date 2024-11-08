// src/components/CompleteBranding.jsx
import React from 'react';
import OfferCard from './OfferCard';

const OfferService = ({ sections, bottomContent }) => {
  return (
    <section className="py-12 text-white bg-black">
      <div className="container mx-auto">
        <h2 className="mb-8 text-4xl font-extrabold text-center text-yellow-400">Complete Branding Solution</h2>
        <p className="mb-12 text-center text-gray-400">
          It's time to build your brand <span className="font-bold text-yellow-400">GET 70% OFF</span>
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {sections.map((section, index) => (
            <OfferCard
              key={index}
              title={section.title}
              features={section.features}
              price={section.price}
              isDiscounted={section.isDiscounted}
              originalPrice={section.originalPrice}
              button1Text="Order Now" // "Order Now" can be provided here
              onButtonClick={() => {
                setSelectedPlan({ title: section.title, price: section.price });
                setIsModalOpen(true);
              }}
            />
          ))}
        </div>

        {bottomContent && (
          <div className="mt-12 text-center">
            {bottomContent}
          </div>
        )}
      </div>
    </section>
  );
};

export default OfferService;
