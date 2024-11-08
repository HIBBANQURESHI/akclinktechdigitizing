import React, { useState } from 'react';
import { FaBox, FaImage, FaFilm, FaShoppingCart, FaSearch } from 'react-icons/fa';
import featureImg from "../../../assets/banner/cms-02.png"

const FeatureSection = () => {
  const [activeTab, setActiveTab] = useState('inventory');

  const tabs = {
    inventory: {
      title: "Sell The Available",
      description: "Product inventory is one of the most important features that should be included in all e-commerce websites. Product inventory tracking can help you avoid selling products that have run out of stock.",
      features: ["Update Products", "Manage Availability", "Track Inventory"],
      image: "/path/to/inventory-image.jpg", // Replace with correct image path
    },
    visuals: {
      title: "Visuals and Descriptions",
      description: "High-quality visuals and descriptions of products help users make informed decisions. Provide detailed, attractive visuals to make products stand out.",
      features: ["Upload High-Quality Images", "Add Detailed Descriptions", "Optimize Image Size"],
      image: "/path/to/visuals-image.jpg", // Replace with correct image path
    },
    animation: {
      title: "Engaging Animations",
      description: "Animations and dynamic content capture user attention. Use engaging animations to enhance the user experience and guide users through your site.",
      features: ["Interactive Animations", "Smooth Transitions", "Responsive Content"],
      image: "/path/to/animation-image.jpg", // Replace with correct image path
    },
    cart: {
      title: "Shopping Cart",
      description: "A user-friendly shopping cart is crucial for e-commerce. Ensure your cart is easy to use, allows modifications, and offers a smooth checkout process.",
      features: ["Add to Cart", "Edit Cart Items", "Seamless Checkout"],
      image: "/path/to/cart-image.jpg", // Replace with correct image path
    },
    search: {
      title: "Search Bar",
      description: "An efficient search bar helps users quickly find the products they need. Implement search functionalities with filters for an optimized experience.",
      features: ["Search by Keywords", "Filter Products", "Smart Suggestions"],
      image: "/path/to/search-image.jpg", // Replace with correct image path
    },
  };

  return (
    <section className="p-6 text-white bg-black">
      <div className='container flex flex-col items-start justify-between mx-auto md:flex-row'>

      {/* Left Sidebar - Tabs */}
      <div className="space-y-4 md:w-1/4">
        <div
          onClick={() => setActiveTab('inventory')}
          className={`flex items-center space-x-4 p-4 border rounded-lg shadow-md cursor-pointer ${activeTab === 'inventory' ? 'border-yellow-400' : 'hover:border-yellow-400'}`}>
          <FaBox className="text-2xl text-yellow-400" />
          <span className="text-lg font-bold">Product Inventory</span>
        </div>
        <div
          onClick={() => setActiveTab('visuals')}
          className={`flex items-center space-x-4 p-4 border rounded-lg shadow-md cursor-pointer ${activeTab === 'visuals' ? 'border-yellow-400' : 'hover:border-yellow-400'}`}>
          <FaImage className="text-2xl text-yellow-400" />
          <span className="text-lg font-bold">Visuals and Descriptions</span>
        </div>
        <div
          onClick={() => setActiveTab('animation')}
          className={`flex items-center space-x-4 p-4 border rounded-lg shadow-md cursor-pointer ${activeTab === 'animation' ? 'border-yellow-400' : 'hover:border-yellow-400'}`}>
          <FaFilm className="text-2xl text-yellow-400" />
          <span className="text-lg font-bold">Animation and Content</span>
        </div>
        <div
          onClick={() => setActiveTab('cart')}
          className={`flex items-center space-x-4 p-4 border rounded-lg shadow-md cursor-pointer ${activeTab === 'cart' ? 'border-yellow-400' : 'hover:border-yellow-400'}`}>
          <FaShoppingCart className="text-2xl text-yellow-400" />
          <span className="text-lg font-bold">Shopping Cart</span>
        </div>
        <div
          onClick={() => setActiveTab('search')}
          className={`flex items-center space-x-4 p-4 border rounded-lg shadow-md cursor-pointer ${activeTab === 'search' ? 'border-yellow-400' : 'hover:border-yellow-400'}`}>
          <FaSearch className="text-2xl text-yellow-400" />
          <span className="text-lg font-bold">Search Bar</span>
        </div>
      </div>

      {/* Middle Content */}
      <div className="mt-6 space-y-4 md:w-2/4 md:mt-0 md:ml-10">
        <h2 className="text-3xl font-bold text-yellow-400">{tabs[activeTab].title}</h2>
        <p className="text-lg text-gray-300">{tabs[activeTab].description}</p>
        <ul className="space-y-1 list-disc list-inside">
          {tabs[activeTab].features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button className="px-4 py-2 text-black bg-yellow-400 rounded-lg shadow hover:bg-yellow-500">
          Request a Custom Quote
        </button>
      </div>

      {/* Right Image Section */}
      <div className="mt-6 md:w-1/4 md:mt-0 md:ml-10">
        <img
          src={featureImg}
          alt={`${tabs[activeTab].title} image`}
          className="object-cover rounded-lg h-80"
          />
          </div>
      </div>
    </section>
  );
};

export default FeatureSection;
