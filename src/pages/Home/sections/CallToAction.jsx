import React from 'react';

function CallToAction() {
  return (
    <section className="py-16 text-white bg-black">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Transform Your Online Presence with <span className="text-yellow-400">AKCLinkTech</span>!
        </h2>

        {/* Description */}
        <p className="mb-6 text-lg font-light md:text-xl ">
          Our team crafts stunning digital experiences that captivate and convert. Let’s bring your vision to life together.
        </p>

        {/* Call to Action Button */}
        <button className="px-8 py-3 font-semibold text-black bg-yellow-400 rounded-full hover:bg-black hover:text-yellow-500 hover:border-2 hover:border-yellow-500">
          START YOUR JOURNEY WITH US TODAY!
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
