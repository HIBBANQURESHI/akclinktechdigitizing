import React from 'react';
import heroVideo from '../../../assets/hero-video/hero-video.mp4';

function HeroSection() {
  return (
    <section className="relative flex items-center justify-center w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 object-cover w-full h-full"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      
      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl animate-fadeIn">Welcome to Our Website</h1>
        <p className="mb-6 text-lg md:text-2xl">We deliver quality services with excellence</p>
        <button className="px-8 py-3 text-white transition duration-300 ease-in-out bg-yellow-500 rounded-full hover:bg-yellow-600">
          Get Started
        </button>
      </div>
      
      {/* Overlay background*/}
      <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
    </section>
  );
}

export default HeroSection;
