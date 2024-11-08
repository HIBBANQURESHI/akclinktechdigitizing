import React from 'react';

function BrandSection() {
  return (
    <section className="px-4 py-24 text-white bg-white md:px-8">
      <div className="container mx-auto text-center">
        {/* Main Heading */}
        <h1 className="mb-6 text-3xl font-bold text-black md:text-6xl">
          Increase Your Brand Visibility with Presence on Every Phone <span className="text-yellow-500">App Screen</span> 
        </h1>

        {/* Description Paragraph */}
        <p className="mb-6 text-lg font-light leading-relaxed text-black md:text-xl">
          At <span className="font-bold text-yellow-500">AKCLinkTech </span>, we develop a personalized platform for your business 
          that curates maximum interactions between your targeted audience and business. We create mobile applications that 
          reflect positively on your business identity in the market.
        </p>
        <p className="mb-6 text-lg font-light leading-relaxed text-black md:text-xl">
          Through mobile applications, we create a path for users to follow and sustain an action to follow. We combine 
          innovative layouts with exceptional coding and spare no bugs or loopholes in the mobile application. We create 
          absolute game-changers for your business. With sheer experience in the market, our work is immensely recognized and 
          trusted among the industries.
        </p>
        <p className="text-lg font-light leading-relaxed text-black md:text-xl">
          We create mobile apps that are coherent over all electronic devices and software.
        </p>
      </div>
    </section>
  );
}

export default BrandSection;
