import React, { useState, useEffect } from 'react';
import './index.css'; 
import bgImg1 from '../../assets/img/res-bg.jpg'; 
import bgImg2 from '../../assets/img/doc-bg.jpg'; 
import bgImg3 from '../../assets/img/e-commerce-bg.jpg'; 
import bgImg4 from '../../assets/img/edu-bg.jpg'; 

// Add separate mobile frame images
import mobileImg1 from '../../assets/img/res1-app.png'; 
import mobileImg2 from '../../assets/img/doc-app.png'; 
import mobileImg3 from '../../assets/img/e-commerce-app.png'; 
import mobileImg4 from '../../assets/img/edu-app.png'; 

const HeroService = () => {
  // Array of background images and mobile images
  const backgroundImages = [bgImg1, bgImg2, bgImg3, bgImg4];
  const mobileImages = [mobileImg1, mobileImg2, mobileImg3, mobileImg4];

  // Array of text corresponding to each image
  const textArray = [
    { heading: 'Creating smart seamless', heading2: 'apps for restaurants.' },
    { heading: 'Healthcare Solutions App Developer', heading2: 'apps for doctors' },
    { heading: 'Transforming Ideas into Seamless', heading2: 'Shopping Experiences' },
    { heading: 'Empower Learning Through', heading2: 'Seamless Technology' },
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to change image and text every 3 seconds
  useEffect(() => {
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    };

    const intervalId = setInterval(changeImage, 3000); // Change image every 3 seconds
    return () => clearInterval(intervalId);
  }, [backgroundImages.length]);

  return (
    <div 
      className="relative flex flex-col items-center justify-center gap-8 p-8 text-white bg-center bg-cover md:gap-x-16 md:flex-row md:p-16"
      style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})`, height: '100vh', overflow: 'hidden' }}
    >
      {/* Black Overlay on Background */}
      <div className="absolute inset-0 bg-black opacity-50 pointer-events-none z-0"></div>

      {/* Content Section for Heading */}
      <div className="relative z-10 flex flex-col items-center md:max-w-xl md:text-left">
        <h1 className="fonts mb-4 text-3xl font-bold text-white text-center md:text-6xl lg:text-8xl">
          {textArray[currentImageIndex].heading} {/* Dynamic Heading */}
        </h1>
      </div>

      {/* Mobile Frame Fixed */}
      <div className="fixed-frame pr-16">
        <div className="relative w-[150px] h-[300px] md:w-[200px] md:h-[400px] lg:w-[300px] lg:h-[600px] border-8 border-black rounded-2xl overflow-hidden">
          {/* Mobile Frame Content - Dynamic Image */}
          <img
            src={mobileImages[currentImageIndex]} // Dynamic mobile frame image
            alt="Mobile content"
            className="absolute inset-0 w-full h-full object-cover z-40" // Ensures image fits inside the mobile frame
          />
        </div>
      </div>

      {/* Content Section for Sub-heading */}
      <div className="relative z-10 flex flex-col items-center md:max-w-lg md:text-left mt-4 md:mt-6">
        <h1 className="fonts mb-4 text-3xl font-bold text-white text-center md:text-6xl lg:text-8xl">
          {textArray[currentImageIndex].heading2} {/* Dynamic Sub-heading */}
        </h1>
      </div>
    </div>
  );
};

export default HeroService;
